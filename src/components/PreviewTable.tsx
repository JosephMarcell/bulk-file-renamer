import { FC } from 'react';
import { translations } from '../utils/translations';

interface FilePreview {
  originalName: string;
  newName: string;
  size: number;
}

interface PreviewTableProps {
  files: FilePreview[];
  language: 'en' | 'id';
}

const PreviewTable: FC<PreviewTableProps> = ({ files, language }) => {
  const t = translations[language];

  if (files.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {t.previewTitle}
        </h3>
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <p>{t.uploadFirst}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {t.previewTitle} ({files.length} {t.totalFiles})
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">
                {t.originalName}
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">
                {t.newName}
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">
                {t.size}
              </th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <td className="py-3 px-4 text-sm text-gray-900 dark:text-white font-mono">
                  {file.originalName}
                </td>
                <td className="py-3 px-4 text-sm text-blue-600 dark:text-blue-400 font-mono">
                  {file.newName}
                </td>
                <td className="py-3 px-4 text-sm text-gray-500 dark:text-gray-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>{t.totalFiles}: {files.length}</span>
        <span>
          {t.totalSize}: {(files.reduce((sum, file) => sum + file.size, 0) / 1024 / 1024).toFixed(2)} MB
        </span>
      </div>
    </div>
  );
};

export default PreviewTable; 