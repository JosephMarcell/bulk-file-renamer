import { FC } from 'react';
import { translations } from '../utils/translations';

interface DownloadZipProps {
  files: File[];
  isProcessing: boolean;
  onDownload: () => void;
  language: 'en' | 'id';
}

const DownloadZip: FC<DownloadZipProps> = ({ files, isProcessing, onDownload, language }) => {
  const t = translations[language];

  if (files.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {t.downloadTitle}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {files.length} {t.downloadSubtitle}
          </p>
        </div>
        
        <button
          onClick={onDownload}
          disabled={isProcessing}
          className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
            isProcessing
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 active:bg-green-800'
          }`}
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              {t.processing}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t.downloadButton}
            </div>
          )}
        </button>
      </div>
      
      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <div className="flex items-start gap-3">
          <svg width="20" height="20" fill="currentColor" className="text-blue-600 dark:text-blue-400 mt-0.5" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <div className="text-sm text-blue-800 dark:text-blue-200">
            <p className="font-medium mb-1">{t.downloadInfo}</p>
            <p>{t.downloadInfoSubtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadZip; 