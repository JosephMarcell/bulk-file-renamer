import { FC, useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  language: 'en' | 'id';
  onLanguageChange: (lang: 'en' | 'id') => void;
}

const Header: FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-950 shadow-sm backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
      <div className="flex items-center gap-2">
        <Image src="/file.svg" alt="FileRenamer.com Logo" width={32} height={32} />
        <span className="font-bold text-lg tracking-tight text-gray-900 dark:text-white">FileRenamer.com</span>
      </div>
      <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 text-sm">
        <a href="#hero" className="hover:underline">{language === 'en' ? 'Home' : 'Halaman Utama'}</a>
        <a href="#how-it-works" className="hover:underline">{language === 'en' ? 'How It Works' : 'Cara Kerja'}</a>
        <a href="#features" className="hover:underline">{language === 'en' ? 'Features' : 'Fitur'}</a>
      </nav>
      <div className="flex items-center gap-2">
        <select
          value={language}
          onChange={e => onLanguageChange(e.target.value as 'en' | 'id')}
          className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition focus:outline-none"
          aria-label="Select language"
        >
          <option value="en">English</option>
          <option value="id">Indonesia</option>
        </select>
        <button className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Buka menu" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </header>
  );
};

export default Header; 