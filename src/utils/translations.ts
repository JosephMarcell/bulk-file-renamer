export interface Translations {
  // Header
  howItWorks: string;
  features: string;
  pricing: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  dragDropText: string;
  dragDropActive: string;
  supportedFormats: string;
  
  // File Upload
  selectedFiles: string;
  removeAll: string;
  
  // Rename Rules
  renameRulesTitle: string;
  basicRules: string;
  advancedRules: string;
  prefix: string;
  suffix: string;
  replaceText: string;
  from: string;
  to: string;
  autoNumbering: string;
  caseChange: string;
  noChange: string;
  lowercase: string;
  uppercase: string;
  capitalize: string;
  dateFormat: string;
  noDate: string;
  creationDate: string;
  modificationDate: string;
  exifDate: string;
  datePattern: string;
  separator: string;
  noSeparator: string;
  dash: string;
  underscore: string;
  space: string;
  regexTitle: string;
  regexPattern: string;
  regexReplace: string;
  trimTitle: string;
  trimStart: string;
  trimEnd: string;
  
  // Preview Table
  previewTitle: string;
  originalName: string;
  newName: string;
  size: string;
  totalFiles: string;
  totalSize: string;
  uploadFirst: string;
  
  // Download
  downloadTitle: string;
  downloadSubtitle: string;
  downloadButton: string;
  processing: string;
  downloadInfo: string;
  downloadInfoSubtitle: string;
  
  // How It Works
  howItWorksTitle: string;
  step1: string;
  step1Desc: string;
  step2: string;
  step2Desc: string;
  step3: string;
  step3Desc: string;
  
  // Core Features
  coreFeaturesTitle: string;
  coreFeaturesSubtitle: string;
  fileUpload: string;
  fileUploadDesc: string;
  renameEngine: string;
  renameEngineDesc: string;
  livePreview: string;
  livePreviewDesc: string;
  downloadZip: string;
  downloadZipDesc: string;
  freeTier: string;
  freeTierDesc: string;
  undoRename: string;
  undoRenameDesc: string;
  batchPresets: string;
  batchPresetsDesc: string;
}

export const translations: Record<'en' | 'id', Translations> = {
  en: {
    // Header
    howItWorks: 'How It Works',
    features: 'Features',
    pricing: 'Pricing',
    
    // Hero Section
    heroTitle: 'Bulk File Renamer',
    heroSubtitle: 'Rename multiple files at once easily, quickly, and securely. No login required, free for unlimited files per session.',
    dragDropText: 'Drag files here or click to select',
    dragDropActive: 'Drop files here',
    supportedFormats: 'PDF, DOC, DOCX, TXT, Images',
    
    // File Upload
    selectedFiles: 'Selected Files',
    removeAll: 'Remove All',
    
    // Rename Rules
    renameRulesTitle: 'File Rename Rules',
    basicRules: 'Basic Rules',
    advancedRules: 'Advanced Rules',
    prefix: 'Prefix',
    suffix: 'Suffix',
    replaceText: 'Replace Text',
    from: 'From',
    to: 'To',
    autoNumbering: 'Auto Numbering',
    caseChange: 'Case Change',
    noChange: 'No change',
    lowercase: 'Lowercase',
    uppercase: 'Uppercase',
    capitalize: 'Capitalize',
    dateFormat: 'Date Format',
    noDate: 'No date',
    creationDate: 'Creation date',
    modificationDate: 'Modification date',
    exifDate: 'EXIF date (images)',
    datePattern: 'Date Pattern',
    separator: 'Separator',
    noSeparator: 'No separator',
    dash: 'Dash (-)',
    underscore: 'Underscore (_)',
    space: 'Space',
    regexTitle: 'Regular Expression',
    regexPattern: 'Regex Pattern',
    regexReplace: 'Replace With',
    trimTitle: 'Trim Characters',
    trimStart: 'Remove from Start',
    trimEnd: 'Remove from End',
    
    // Preview Table
    previewTitle: 'Rename Preview',
    originalName: 'Original Name',
    newName: 'New Name',
    size: 'Size',
    totalFiles: 'Total',
    totalSize: 'Total size',
    uploadFirst: 'Upload files first to see preview',
    
    // Download
    downloadTitle: 'Download Files',
    downloadSubtitle: 'files ready to download as ZIP',
    downloadButton: 'Download ZIP',
    processing: 'Processing...',
    downloadInfo: 'Files will be downloaded as "renamed-files.zip"',
    downloadInfoSubtitle: 'All renamed files will be packaged in a single ZIP file for easy sharing and storage.',
    
    // How It Works
    howItWorksTitle: 'How It Works',
    step1: 'Upload Files',
    step1Desc: 'Drag and drop unlimited files directly from your device.',
    step2: 'Set Rules',
    step2Desc: 'Apply rules like prefix, suffix, text replacement, auto numbering, and more.',
    step3: 'Download',
    step3Desc: 'Download all renamed files in a single ZIP file.',
    
    // Core Features
    coreFeaturesTitle: 'Core Features',
    coreFeaturesSubtitle: 'Main features that make FileRenamer.com a powerful and easy-to-use tool',
    fileUpload: 'File Upload',
    fileUploadDesc: 'Drag-and-drop interface for unlimited file uploads.',
    renameEngine: 'Rename Rule Engine',
    renameEngineDesc: 'Prefix, suffix, text replacement, auto numbering, case change, regex, and more.',
    livePreview: 'Live Preview',
    livePreviewDesc: 'Table showing original and new names, updating in real-time.',
    downloadZip: 'Download as ZIP',
    downloadZipDesc: 'Package renamed files into a downloadable ZIP archive.',
    freeTier: 'Free Tier',
    freeTierDesc: 'Free for unlimited files per session.',
    undoRename: 'Undo Rename',
    undoRenameDesc: 'Save original names in memory and provide an "Undo" button to revert.',
    batchPresets: 'Batch Presets',
    batchPresetsDesc: 'Save and load rename rules in localStorage with dropdown.',
  },
  id: {
    // Header
    howItWorks: 'Cara Kerja',
    features: 'Fitur',
    pricing: 'Harga',
    
    // Hero Section
    heroTitle: 'Bulk File Renamer',
    heroSubtitle: 'Ganti nama banyak file sekaligus dengan mudah, cepat, dan aman. Tidak perlu login, gratis untuk file tak terbatas per sesi.',
    dragDropText: 'Seret file ke sini atau klik untuk memilih',
    dragDropActive: 'Lepaskan file di sini',
    supportedFormats: 'PDF, DOC, DOCX, TXT, Gambar',
    
    // File Upload
    selectedFiles: 'File yang Dipilih',
    removeAll: 'Hapus Semua',
    
    // Rename Rules
    renameRulesTitle: 'Aturan Rename File',
    basicRules: 'Aturan Dasar',
    advancedRules: 'Aturan Lanjutan',
    prefix: 'Prefix',
    suffix: 'Suffix',
    replaceText: 'Ganti Teks',
    from: 'Dari',
    to: 'Ke',
    autoNumbering: 'Penomoran Otomatis',
    caseChange: 'Case Change',
    noChange: 'Tidak ada perubahan',
    lowercase: 'Huruf kecil',
    uppercase: 'Huruf besar',
    capitalize: 'Kapitalisasi',
    dateFormat: 'Format Tanggal',
    noDate: 'Tidak ada tanggal',
    creationDate: 'Tanggal pembuatan',
    modificationDate: 'Tanggal modifikasi',
    exifDate: 'Tanggal EXIF (gambar)',
    datePattern: 'Pola Tanggal',
    separator: 'Separator',
    noSeparator: 'Tidak ada separator',
    dash: 'Dash (-)',
    underscore: 'Underscore (_)',
    space: 'Spasi',
    regexTitle: 'Regular Expression',
    regexPattern: 'Pola Regex',
    regexReplace: 'Ganti Dengan',
    trimTitle: 'Trim Karakter',
    trimStart: 'Hapus dari Awal',
    trimEnd: 'Hapus dari Akhir',
    
    // Preview Table
    previewTitle: 'Preview Rename',
    originalName: 'Nama Asli',
    newName: 'Nama Baru',
    size: 'Ukuran',
    totalFiles: 'Total',
    totalSize: 'Total ukuran',
    uploadFirst: 'Upload file terlebih dahulu untuk melihat preview',
    
    // Download
    downloadTitle: 'Download File',
    downloadSubtitle: 'file siap untuk diunduh dalam format ZIP',
    downloadButton: 'Download ZIP',
    processing: 'Memproses...',
    downloadInfo: 'File akan diunduh sebagai "renamed-files.zip"',
    downloadInfoSubtitle: 'Semua file yang sudah di-rename akan dikemas dalam satu file ZIP untuk kemudahan berbagi dan penyimpanan.',
    
    // How It Works
    howItWorksTitle: 'Cara Kerja',
    step1: 'Upload File',
    step1Desc: 'Seret dan lepas file tak terbatas, langsung dari perangkat Anda.',
    step2: 'Atur Aturan',
    step2Desc: 'Terapkan aturan seperti prefix, suffix, ganti teks, penomoran otomatis, dan lainnya.',
    step3: 'Download',
    step3Desc: 'Unduh semua file yang sudah diganti nama dalam satu file ZIP.',
    
    // Core Features
    coreFeaturesTitle: 'Core Features (MVP)',
    coreFeaturesSubtitle: 'Fitur-fitur utama yang membuat FileRenamer.com menjadi alat yang powerful dan mudah digunakan',
    fileUpload: 'File Upload',
    fileUploadDesc: 'Drag-and-drop interface untuk upload file tak terbatas.',
    renameEngine: 'Rename Rule Engine',
    renameEngineDesc: 'Prefix, suffix, ganti teks, penomoran otomatis, case change, regex, dan lainnya.',
    livePreview: 'Live Preview',
    livePreviewDesc: 'Tabel yang menampilkan nama asli dan nama baru, update real-time.',
    downloadZip: 'Download as ZIP',
    downloadZipDesc: 'Package file yang sudah diganti nama menjadi file ZIP yang bisa diunduh.',
    freeTier: 'Free Tier',
    freeTierDesc: 'Gratis untuk file tak terbatas per sesi.',
    undoRename: 'Undo Rename',
    undoRenameDesc: 'Simpan nama asli di memory dan berikan tombol "Undo" untuk revert.',
    batchPresets: 'Batch Presets',
    batchPresetsDesc: 'Simpan dan load aturan rename di localStorage dengan dropdown.',
  },
}; 