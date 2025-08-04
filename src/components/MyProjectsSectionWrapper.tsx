import fs from 'fs';
import path from 'path';
import MyProjectsSection from './MyProjectsSection';

export default function MyProjectsSectionWrapper() {
  // Exact desired order (lowercased for matching)
  const desiredOrder = [
    "walmartdesignlogo.png",
    "walmartpayday.png",
    "cvsdesignsystem.png",
    "prudesignsystem.png",
    "prudentialfinancial.png",
    "prufinancialassessment.png",
    "ncrmarketplace.png",
    "jukedeck.png",
    "sweepr.png",
    "coachme.png"
  ];

  const uiuxprojectsPath = path.join(process.cwd(), 'public', 'images', 'uiuxprojects');
  let images: string[] = [];

  try {
    if (fs.existsSync(uiuxprojectsPath)) {
      const files = fs.readdirSync(uiuxprojectsPath);

      // Filter for images
      const allImages = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.png', '.jpg', '.jpeg', '.webp'].includes(ext);
      });

      // Build a lowercase map to handle case sensitivity
      const lowercaseMap = new Map(allImages.map(f => [f.toLowerCase(), f]));

      // Ordered images: only include those that exist in the folder
      const orderedImages = desiredOrder
        .map(name => lowercaseMap.get(name.toLowerCase()))
        .filter((name): name is string => !!name);

      // Add remaining images not listed in desiredOrder
      const orderedSet = new Set(orderedImages);
      const remainingImages = allImages.filter(name => !orderedSet.has(name));

      // Final combined list
      images = [...orderedImages, ...remainingImages];
    }
  } catch (error) {
    console.error('Error reading uiuxprojects directory:', error);
  }

  return <MyProjectsSection images={images} />;
} 