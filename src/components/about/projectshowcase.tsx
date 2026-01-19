import {
  CircularGallery,
  type GalleryItem,
} from "@/components/circular-gallery-2"; // Adjust this path to your component location

// Define the items to be passed as props
const galleryItems: GalleryItem[] = [
  { image: "https://picsum.photos/seed/1/800/600?grayscale", text: "Bridge" },
  {
    image: "https://picsum.photos/seed/2/800/600?grayscale",
    text: "Desk Setup",
  },
  {
    image: "https://picsum.photos/seed/3/800/600?grayscale",
    text: "Waterfall",
  },
  {
    image: "https://picsum.photos/seed/4/800/600?grayscale",
    text: "Strawberries",
  },
  {
    image: "https://picsum.photos/seed/5/800/600?grayscale",
    text: "Deep Diving",
  },
  {
    image: "https://picsum.photos/seed/16/800/600?grayscale",
    text: "Train Track",
  },
  {
    image: "https://picsum.photos/seed/17/800/600?grayscale",
    text: "Santorini",
  },
  {
    image: "https://picsum.photos/seed/8/800/600?grayscale",
    text: "Blurry Lights",
  },
  {
    image: "https://picsum.photos/seed/9/800/600?grayscale",
    text: "New York",
  },
  {
    image: "https://picsum.photos/seed/10/800/600?grayscale",
    text: "Good Boy",
  },
  {
    image: "https://picsum.photos/seed/21/800/600?grayscale",
    text: "Coastline",
  },
  {
    image: "https://picsum.photos/seed/12/800/600?grayscale",
    text: "Palm Trees",
  },
];

/**
 * Default demo for the CircularGallery.
 * It automatically adapts to light/dark mode text colors.
 */
export default function CircularProjectShowcase() {
  return (
    // A container is needed to define the gallery's size
    <div className="relative h-[600px] w-full rounded-lg">
      <CircularGallery
        items={galleryItems}
        bend={3}
        borderRadius={0.05}
        scrollEase={0.02}
      />
    </div>
  );
}
