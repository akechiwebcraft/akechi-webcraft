"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "@/lib/animations";

const VIDEO_SOURCE = "/hero-video/hero.mp4";
const POSTER = "/images/hero-poster.webp";

export default function VideoPreviewWindow() {
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // The clip is ~2.7 MB. Keep it off small screens, where it is decorative and
  // the data cost is felt most, and off the initial load until we opt in.
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setAllowVideo(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Autoplay only when the visitor has not asked for reduced motion
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    video.play().then(
      () => setIsPlaying(true),
      () => setIsPlaying(false)
    );
  }, [reducedMotion, allowVideo]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true), () => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const showVideo = allowVideo && !failed;

  return (
    <div className="relative mx-auto w-full max-w-[580px]">
      {/* Glow effect */}
      <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-primary/[0.08] via-cyan-decor/[0.06] to-transparent blur-2xl" />

      {/* Window frame */}
      <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-float">
        {/* Window bar */}
        <div className="flex items-center gap-2 border-b border-line bg-tint px-4 py-3">
          <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#28c840]" />
          <span className="ml-3 h-5 max-w-[200px] flex-1 rounded-md bg-accent-soft" />
        </div>

        {/* Video content */}
        <div className="relative bg-tint">
          {showVideo ? (
            <>
              <video
                ref={videoRef}
                src={VIDEO_SOURCE}
                muted
                loop
                playsInline
                preload="none"
                poster={POSTER}
                onError={() => setFailed(true)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="aspect-video w-full object-cover"
                aria-label="Akechi platform product preview"
              />
              {/* WCAG 2.2.2 — moving content longer than 5s needs a pause control */}
              <button
                type="button"
                onClick={toggle}
                aria-label={isPlaying ? "Pause product preview" : "Play product preview"}
                className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-white backdrop-blur-sm transition-colors hover:bg-ink/90"
              >
                {isPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
              </button>
            </>
          ) : (
            <div className="relative aspect-video w-full">
              <Image
                src={POSTER}
                alt="Akechi platform product preview"
                fill
                sizes="(max-width: 768px) 100vw, 580px"
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
