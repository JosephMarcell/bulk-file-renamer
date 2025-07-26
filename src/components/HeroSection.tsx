import { FC } from 'react';
import FileUploadCanvas from './FileUploadCanvas';
import { translations } from '../utils/translations';

interface FileWithPreview extends File {
  preview?: string;
}

interface HeroSectionProps {
  files: FileWithPreview[];
  onFilesChange: (files: FileWithPreview[]) => void;
  language: 'en' | 'id';
}

const HeroSection: FC<HeroSectionProps> = ({ files, onFilesChange, language }) => {
  const t = translations[language];

  return (
    <section className="w-full flex flex-col items-center justify-center px-6 py-12 md:py-20 gap-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900" id="hero">
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
          {t.heroTitle} <span className="text-blue-600 dark:text-blue-400">Online</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8">
          {t.heroSubtitle}
        </p>
      </div>
      
      <FileUploadCanvas files={files} onFilesChange={onFilesChange} language={language} />
    </section>
  );
};

export default HeroSection; 