import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { promisify } from "util";
import { exec } from "child_process";

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, "../../dist");

async function optimizeImages() {
  try {
    console.log("Starting image optimization...");

    // Check if sharp is installed
    try {
      await execAsync("npm list sharp");
    } catch (error) {
      console.log("Installing sharp for image optimization...");
      await execAsync("npm install sharp --no-save");
    }

    // Find all image files in dist
    const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
    interface ProcessDirectory {
      (directory: string): Promise<void>;
    }

    interface ImageMetadata {
      width?: number;
      format?: string;
    }

    const processDirectory: ProcessDirectory = async (directory) => {
      const files: string[] = fs.readdirSync(directory);

      for (const file of files) {
      const fullPath: string = path.join(directory, file);
      const stat: fs.Stats = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        await processDirectory(fullPath);
      } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
        console.log(`Optimizing image: ${fullPath}`);

        // Import sharp dynamically
        const sharp = (await import("sharp")).default;

        // Get original image buffer
        const imageBuffer: Buffer = fs.readFileSync(fullPath);

        // Process with sharp
        const image = sharp(imageBuffer);
        const metadata: ImageMetadata = await image.metadata();

        // Create optimized version
        let optimized = image;

        // Resize large images (optional)
        if (metadata.width && metadata.width > 1920) {
        optimized = optimized.resize(1920);
        }

        // Apply format-specific optimizations
        if (metadata.format === "jpeg" || metadata.format === "jpg") {
        optimized = optimized.jpeg({ quality: 85, progressive: true });
        } else if (metadata.format === "png") {
        optimized = optimized.png({
          compressionLevel: 9,
          progressive: true,
        });
        } else if (metadata.format === "webp") {
        optimized = optimized.webp({ quality: 85 });
        } else if (metadata.format === "avif") {
        optimized = optimized.avif({ quality: 80 });
        }

        // Save optimized version
        const optimizedBuffer: Buffer = await optimized.toBuffer();
        fs.writeFileSync(fullPath, optimizedBuffer);

        // Log savings
        const originalSize: number = imageBuffer.length;
        const newSize: number = optimizedBuffer.length;
        const savings: string = (
        ((originalSize - newSize) / originalSize) *
        100
        ).toFixed(2);
        console.log(
        `Reduced ${file} by ${savings}% (${originalSize} → ${newSize} bytes)`
        );
      }
      }
    };

    await processDirectory(distDir);

    console.log("Image optimization complete!");
  } catch (error) {
    console.error("Error optimizing images:", error);
    process.exit(1);
  }
}

optimizeImages();
