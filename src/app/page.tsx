'use client';

import { useState, useCallback } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import CoreFeatures from '../components/CoreFeatures';
import RenameRules from '../components/RenameRules';
import PreviewTable from '../components/PreviewTable';
import DownloadZip from '../components/DownloadZip';
import Footer from '../components/Footer';

interface FileWithPreview extends File {
  preview?: string;
}

interface RenameRule {
  prefix: string;
  suffix: string;
  replaceFrom: string;
  replaceTo: string;
  autoNumberStart: number;
  caseChange: 'none' | 'lower' | 'upper' | 'capitalize';
  dateFormat: 'none' | 'creation' | 'modification' | 'exif';
  datePattern: string;
  regexPattern: string;
  regexReplace: string;
  trimStart: number;
  trimEnd: number;
  separator: 'dash' | 'underscore' | 'space' | 'none';
}

interface FilePreview {
  originalName: string;
  newName: string;
  size: number;
}

export default function Home() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [rules, setRules] = useState<RenameRule>({
    prefix: '',
    suffix: '',
    replaceFrom: '',
    replaceTo: '',
    autoNumberStart: 1,
    caseChange: 'none',
    dateFormat: 'none',
    datePattern: 'YYYY-MM-DD',
    regexPattern: '',
    regexReplace: '',
    trimStart: 0,
    trimEnd: 0,
    separator: 'none',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [language, setLanguage] = useState<'en' | 'id'>('en');

  const handleFilesChange = useCallback((newFiles: FileWithPreview[]) => {
    setFiles(newFiles);
  }, []);

  const handleRulesChange = useCallback((newRules: RenameRule) => {
    setRules(newRules);
  }, []);

  const handleLanguageChange = useCallback((lang: 'en' | 'id') => {
    setLanguage(lang);
  }, []);

  const generateNewFileName = useCallback((originalName: string, index: number): string => {
    let newName = originalName;
    // Apply text replacement
    if (rules.replaceFrom && rules.replaceTo) {
      newName = newName.replace(new RegExp(rules.replaceFrom, 'g'), rules.replaceTo);
    }
    
    // Apply regex replacement
    if (rules.regexPattern && rules.regexReplace) {
      try {
        const regex = new RegExp(rules.regexPattern, 'g');
        newName = newName.replace(regex, rules.regexReplace);
      } catch (error) {
        console.error('Invalid regex pattern:', error);
      }
    }
    
    // Apply case change
    switch (rules.caseChange) {
      case 'lower':
        newName = newName.toLowerCase();
        break;
      case 'upper':
        newName = newName.toUpperCase();
        break;
      case 'capitalize':
        newName = newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase();
        break;
    }
    
    // Apply trim
    if (rules.trimStart > 0) {
      newName = newName.substring(rules.trimStart);
    }
    if (rules.trimEnd > 0) {
      newName = newName.substring(0, newName.length - rules.trimEnd);
    }
    
    // Add prefix and suffix
    let finalName = rules.prefix + newName + rules.suffix;
    
    // Add auto numbering
    if (rules.autoNumberStart > 0) {
      const number = rules.autoNumberStart + index;
      finalName = `${number}_${finalName}`;
    }
    
    // Apply separator
    if (rules.separator !== 'none') {
      const separator = rules.separator === 'dash' ? '-' : rules.separator === 'underscore' ? '_' : ' ';
      finalName = finalName.replace(/[^a-zA-Z0-9]/g, separator);
    }
    
    return finalName;
  }, [rules]);

  const filePreviews: FilePreview[] = files.map((file, index) => ({
    originalName: file.name,
    newName: generateNewFileName(file.name, index),
    size: file.size,
  }));

  const handleDownload = async () => {
    setIsProcessing(true);
    try {
      const JSZip = (await import('jszip')).default;
      const { saveAs } = await import('file-saver');
      
      const zip = new JSZip();
      
      files.forEach((file, index) => {
        const newName = generateNewFileName(file.name, index);
        zip.file(newName, file);
      });
      
      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'renamed-files.zip');
    } catch (error) {
      console.error('Error creating ZIP:', error);
      alert('Terjadi kesalahan saat membuat file ZIP');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <HeroSection files={files} onFilesChange={handleFilesChange} language={language} />
      
      {files.length > 0 && (
        <div className="space-y-8 py-8">
          <RenameRules rules={rules} onRulesChange={handleRulesChange} language={language} />
          <PreviewTable files={filePreviews} language={language} />
          <DownloadZip 
            files={files} 
            isProcessing={isProcessing} 
            onDownload={handleDownload} 
            language={language}
          />
        </div>
      )}
      
      <HowItWorks language={language} />
      <CoreFeatures language={language} />
      <Footer language={language} />
    </main>
  );
}
