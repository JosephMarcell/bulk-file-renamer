import { FC } from 'react';
import { translations } from '../utils/translations';

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

interface RenameRulesProps {
  rules: RenameRule;
  onRulesChange: (rules: RenameRule) => void;
  language: 'en' | 'id';
}

const RenameRules: FC<RenameRulesProps> = ({ rules, onRulesChange, language }) => {
  const t = translations[language];

  const handleInputChange = (field: keyof RenameRule, value: string | number) => {
    onRulesChange({
      ...rules,
      [field]: value
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        {t.renameRulesTitle}
      </h3>
      
      {/* Basic and Advanced Rules in Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Rules */}
        <div className="space-y-6">
          <h4 className="font-medium text-gray-700 dark:text-gray-300 text-lg">{t.basicRules}</h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.prefix}
              </label>
              <input
                type="text"
                value={rules.prefix}
                onChange={(e) => handleInputChange('prefix', e.target.value)}
                placeholder="Contoh: foto_"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.suffix}
              </label>
              <input
                type="text"
                value={rules.suffix}
                onChange={(e) => handleInputChange('suffix', e.target.value)}
                placeholder="Contoh: _2024"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.replaceText}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={rules.replaceFrom}
                  onChange={(e) => handleInputChange('replaceFrom', e.target.value)}
                  placeholder={t.from}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="text"
                  value={rules.replaceTo}
                  onChange={(e) => handleInputChange('replaceTo', e.target.value)}
                  placeholder={t.to}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.autoNumbering}
              </label>
              <input
                type="number"
                value={rules.autoNumberStart}
                onChange={(e) => handleInputChange('autoNumberStart', parseInt(e.target.value) || 1)}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Advanced Rules */}
        <div className="space-y-6">
          <h4 className="font-medium text-gray-700 dark:text-gray-300 text-lg">{t.advancedRules}</h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.caseChange}
              </label>
              <select
                value={rules.caseChange}
                onChange={(e) => handleInputChange('caseChange', e.target.value as RenameRule['caseChange'])}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="none">{t.noChange}</option>
                <option value="lower">{t.lowercase}</option>
                <option value="upper">{t.uppercase}</option>
                <option value="capitalize">{t.capitalize}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.dateFormat}
              </label>
              <select
                value={rules.dateFormat}
                onChange={(e) => handleInputChange('dateFormat', e.target.value as RenameRule['dateFormat'])}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="none">{t.noDate}</option>
                <option value="creation">{t.creationDate}</option>
                <option value="modification">{t.modificationDate}</option>
                <option value="exif">{t.exifDate}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.datePattern}
              </label>
              <input
                type="text"
                value={rules.datePattern}
                onChange={(e) => handleInputChange('datePattern', e.target.value)}
                placeholder="YYYY-MM-DD"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.separator}
              </label>
              <select
                value={rules.separator}
                onChange={(e) => handleInputChange('separator', e.target.value as RenameRule['separator'])}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="none">{t.noSeparator}</option>
                <option value="dash">{t.dash}</option>
                <option value="underscore">{t.underscore}</option>
                <option value="space">{t.space}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Regex Section */}
      <div className="mt-8 space-y-4">
        <h4 className="font-medium text-gray-700 dark:text-gray-300 text-lg">{t.regexTitle}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.regexPattern}
            </label>
            <input
              type="text"
              value={rules.regexPattern}
              onChange={(e) => handleInputChange('regexPattern', e.target.value)}
              placeholder="Contoh: [0-9]+"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.regexReplace}
            </label>
            <input
              type="text"
              value={rules.regexReplace}
              onChange={(e) => handleInputChange('regexReplace', e.target.value)}
              placeholder="Teks pengganti"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Trim Section */}
      <div className="mt-8 space-y-4">
        <h4 className="font-medium text-gray-700 dark:text-gray-300 text-lg">{t.trimTitle}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.trimStart}
            </label>
            <input
              type="number"
              value={rules.trimStart}
              onChange={(e) => handleInputChange('trimStart', parseInt(e.target.value) || 0)}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.trimEnd}
            </label>
            <input
              type="number"
              value={rules.trimEnd}
              onChange={(e) => handleInputChange('trimEnd', parseInt(e.target.value) || 0)}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenameRules; 