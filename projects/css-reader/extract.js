const libFolder = '../components';
const assetsFolder = '../components/src/assets';

const fs = require('fs');
const path = require('path');

// Asynchronous function to recursively read all .scss files in a given directory
async function readScssFiles(dir) {
  let scssFiles = [];

  try {
    // Read the contents of the directory
    const files = await fs.promises.readdir(dir, { withFileTypes: true });

    // Loop through each file/folder in the directory
    for (const file of files) {
      const fullPath = path.join(dir, file.name);

      // If it's a directory, recursively search within it
      if (file.isDirectory()) {
        const subDirFiles = await readScssFiles(fullPath);
        scssFiles = scssFiles.concat(subDirFiles);
      } 
      // If it's a .scss file, add it to the list
      else if (path.extname(file.name) === '.scss') {
        scssFiles.push(fullPath);
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err);
  }

  return scssFiles;
}

// Function to copy a file to the output directory
async function copyFile(filePath, outputDir) {
  const fileName = path.basename(filePath); // Extract file name from path
  const outputFilePath = path.join(outputDir, fileName); // Create output path

  // Ensure the output folder exists
  await fs.promises.mkdir(outputDir, { recursive: true });

  // Copy the file
  await fs.promises.copyFile(filePath, outputFilePath);
  console.log(`Copied ${filePath} to ${outputFilePath}`);
}

// Main function to start the process
async function main() {
  // Specify the directory you want to start from
  const inputDir = path.join(__dirname, libFolder);

  // Specify the output directory where the copied .scss files will be saved
  const outputDir = path.join(__dirname, assetsFolder);

  await fs.promises.mkdir(outputDir, { recursive: true }); // Create the output directory if it doesn't exist

  // Get all .scss files
  const scssFiles = await readScssFiles(inputDir);

  if (scssFiles.length === 0) {
    console.log('No .scss files found.');
    return;
  }

  // Copy each .scss file to the output directory
  for (const file of scssFiles) {
    await copyFile(file, outputDir);
  }

  console.log('\nAll .scss files copied to the output folder.');
}

main().catch(err => console.error('Error:', err));
