import { FC } from 'react';

interface FooterProps {
  language: 'en' | 'id';
}

const Footer: FC<FooterProps> = ({ language }) => {
  return (
    <footer className="w-full py-8 px-4 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="text-gray-600 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} FileRenamer.com. {language === 'en' ? 'All rights reserved.' : 'Seluruh hak cipta.'}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/your-github-username/bulk-file-renamer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <span className="text-gray-400">|</span>
          <span className="text-gray-500 text-xs">{language === 'en' ? 'Built with Next.js & Tailwind CSS' : 'Built by JosephMarcell.com'}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 