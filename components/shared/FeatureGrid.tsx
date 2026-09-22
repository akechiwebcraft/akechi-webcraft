"use client";

import { motion } from "framer-motion";
import Card from "./Card";
import React from "react";

interface FeatureGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({ children, columns = 3 }: FeatureGridProps) {
  const gridClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid gap-6 ${gridClass}`}>
      {children}
    </div>
  );
}

interface FeatureGridItemProps {
  children: React.ReactNode;
  index: number;
}

export function FeatureGridItem({ children, index }: FeatureGridItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card hover className="h-full p-8">
        {children}
      </Card>
    </motion.div>
  );
}
