/**
 * Company facts used across pages and email templates.
 *
 * Design tokens are NOT defined here — they live in `app/globals.css` as the
 * single source of truth. Navigation is NOT defined here either — see
 * `data/navigation.ts`. Both previously had duplicate copies in this file that
 * had drifted out of sync with what the site actually rendered.
 */
export const SITE_CONFIG = {
  name: 'Akechi Webcraft',
  description: 'Technology That Bridges Human Potential and Innovation',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://akechiwebcraft.com',
  email: 'info@akechiwebcraft.com',
  phone1: '+91-7300096277',
  phone2: '+91-9660000260',
  address: 'Jaipur, Rajasthan, India',
  hours: 'Mon - Sat 10:00 AM - 06:00 PM',
};
