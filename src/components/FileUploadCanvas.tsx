import { FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { translations } from '../utils/translations';

interface FileWithPreview extends File {
  preview?: string;
}

interface FileUploadCanvasProps {
  files: FileWithPreview[];
  onFilesChange: (files: FileWithPreview[]) => void;
  language: 'en' | 'id';
}

const FileUploadCanvas: FC<FileUploadCanvasProps> = ({ files, onFilesChange, language }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const t = translations[language];

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Hilangkan batas maksimal file
    const newFiles = acceptedFiles.map(file => 
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    );
    onFilesChange([...files, ...newFiles]);
  }, [files, onFilesChange]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.bmp', '.webp'],
      'text/*': ['.txt', '.md', '.json', '.xml', '.csv'],
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    // maxFiles: 20, // Dihilangkan
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    onFilesChange(newFiles);
  };

  const clearAllFiles = () => {
    onFilesChange([]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive 
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
            : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500'
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-4">
          <Image src="/file.svg" alt="Upload" width={48} height={48} className="opacity-60" />
          <div>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              {isDragActive ? t.dragDropActive : t.dragDropText}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {t.supportedFormats}
            </p>
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t.selectedFiles} ({files.length})
            </h3>
            <button
              onClick={clearAllFiles}
              className="text-red-600 hover:text-red-700 text-sm font-medium"
            >
              {t.removeAll}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="ml-2 text-red-500 hover:text-red-700 text-sm"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploadCanvas; 