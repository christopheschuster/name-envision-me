// Filename: SophisticatedCode.js

// This code demonstrates a complex implementation of a file management system

class File {
  constructor(name, size, fileType, createDate) {
    this.name = name;
    this.size = size;
    this.fileType = fileType;
    this.createDate = createDate;
  }

  displayDetails() {
    console.log(`File Name: ${this.name}`);
    console.log(`Size: ${this.size} KB`);
    console.log(`Type: ${this.fileType}`);
    console.log(`Created On: ${this.createDate}`);
    console.log("----------------------------------");
  }
}

class Directory {
  constructor(name, createDate) {
    this.name = name;
    this.createDate = createDate;
    this.files = [];
    this.subDirectories = [];
  }

  addFile(file) {
    this.files.push(file);
  }

  removeFile(file) {
    const index = this.files.indexOf(file);
    if (index !== -1) {
      this.files.splice(index, 1);
    }
  }

  addSubDirectory(directory) {
    this.subDirectories.push(directory);
  }

  removeSubDirectory(directory) {
    const index = this.subDirectories.indexOf(directory);
    if (index !== -1) {
      this.subDirectories.splice(index, 1);
    }
  }

  displayContents() {
    console.log(`Directory: ${this.name}`);
    console.log(`Created On: ${this.createDate}`);
    console.log("Files:");
    this.files.forEach(file => file.displayDetails());
    console.log("Subdirectories:");
    this.subDirectories.forEach(directory => {
      console.log(`- ${directory.name}`);
      directory.displayContents();
    });
    console.log("----------------------------------");
  }
}

// Create root directory
const root = new Directory("Root Directory", new Date());

// Create files
const file1 = new File("Document.docx", 200, "DOCX", new Date());
const file2 = new File("Image.jpg", 500, "JPEG", new Date());
const file3 = new File("Presentation.pptx", 350, "PPTX", new Date());

// Create subdirectories
const subDir1 = new Directory("Subdirectory 1", new Date());
const subDir2 = new Directory("Subdirectory 2", new Date());
const subDir3 = new Directory("Subdirectory 3", new Date());

// Populate root directory
root.addFile(file1);
root.addFile(file2);
root.addSubDirectory(subDir1);
root.addSubDirectory(subDir2);

// Populate Subdirectory 1
subDir1.addFile(file3);
subDir1.addSubDirectory(subDir3);

// Display root directory contents
root.displayContents();