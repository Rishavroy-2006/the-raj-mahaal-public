import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { siteConfig } from '../data/config';

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  priority: number;
}

export function useGalleryData() {
  const [images, setImages] = useState<GalleryItem[]>(siteConfig.gallery.fallbackImages.map(img => ({ ...img, priority: 100 })));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        if (!siteConfig.gallery.csvUrl || siteConfig.gallery.csvUrl === 'YOUR_GOOGLE_SHEETS_CSV_URL_HERE') {
          // If not configured, use fallback images
          setLoading(false);
          return;
        }

        // We append a cache-buster or rely on Google's caching. Google Sheets CSV updates every 5 mins usually.
        // Adding a timestamp can bypass browser cache but might still hit Google's CDN cache.
        const response = await fetch(`${siteConfig.gallery.csvUrl}&_t=${new Date().getTime()}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch gallery data');
        }

        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsedImages: GalleryItem[] = [];
            
            // Add fallback images first
            const defaultImages = siteConfig.gallery.fallbackImages.map((img, index) => ({
              ...img,
              priority: index + 1
            }));

            const csvImages: GalleryItem[] = [];
            
            results.data.forEach((row: any) => {
              const src = row['Image URL']?.trim();
              if (src) {
                csvImages.push({
                  src,
                  caption: row['Caption']?.trim() || '',
                  alt: row['Caption']?.trim() || 'Gallery Image',
                  priority: row['Priority'] ? parseInt(row['Priority'], 10) : 999
                });
              }
            });

            // Sort CSV images by priority
            csvImages.sort((a, b) => a.priority - b.priority);

            // Combine default and CSV images
            const finalImages = [...defaultImages, ...csvImages];

            setImages(finalImages);
            setLoading(false);
          },
          error: (error: any) => {
            console.error('Error parsing CSV:', error);
            setError(error.message);
            setLoading(false);
          }
        });
      } catch (err: any) {
        console.error('Error fetching gallery:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return { images, loading, error };
}
