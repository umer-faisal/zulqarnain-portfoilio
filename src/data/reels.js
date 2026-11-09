/**
 * Instagram Reels configuration for ZS.Productions.
 * Live reels curated from Zulqarnain Saya's Instagram.
 */
export const reels = [
  {
    id: "reel-1",
    shortcode: "DfVxQCJo5Yr",
    url: "https://www.instagram.com/reel/DfVxQCJo5Yr/",
    title: "Cinematic Reel 01",
    category: "Cinematography · Direction",
    description: "Visual atmosphere, light play, and storytelling in motion.",
  },
  {
    id: "reel-2",
    shortcode: "DewNEhXoS4J",
    url: "https://www.instagram.com/reel/DewNEhXoS4J/",
    title: "Cinematic Reel 02",
    category: "Editorial · Visual Craft",
    description: "Camera choreography and mood framing for dynamic narratives.",
  },
  {
    id: "reel-3",
    shortcode: "DewMzrsohIl",
    url: "https://www.instagram.com/reel/DewMzrsohIl/",
    title: "Cinematic Reel 03",
    category: "Commercial · Colour Grading",
    description: "Texture, pacing, and color harmony crafted for the screen.",
  },
  {
    id: "reel-4",
    shortcode: "Dely67Wo4pJ",
    url: "https://www.instagram.com/reel/Dely67Wo4pJ/",
    title: "Cinematic Reel 04",
    category: "Sound & Movement",
    description: "Rhythm, close perspective, and raw cinematic feeling.",
  },
];

/**
 * Extracts the Instagram shortcode from standard URL formats
 */
export function extractInstagramId(url) {
  if (!url) return null;
  const match = url.match(/(?:reel|p|tv)\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : null;
}
