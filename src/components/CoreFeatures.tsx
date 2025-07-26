import { FC } from 'react';
import Image from 'next/image';
import { translations } from '../utils/translations';

interface CoreFeaturesProps {
  language: 'en' | 'id';
}

const CoreFeatures: FC<CoreFeaturesProps> = ({ language }) => {
  const t = translations[language];

  const features = [
    {
      icon: '/file.svg',
      title: t.fileUpload,
      desc: t.fileUploadDesc,
    },
    {
      icon: '/globe.svg',
      title: t.renameEngine,
      desc: t.renameEngineDesc,
    },
    {
      icon: '/window.svg',
      title: t.livePreview,
      desc: t.livePreviewDesc,
    },
    {
      icon: '/vercel.svg',
      title: t.downloadZip,
      desc: t.downloadZipDesc,
    },
    {
      icon: '/file.svg',
      title: t.freeTier,
      desc: t.freeTierDesc,
    },
    {
      icon: '/globe.svg',
      title: t.undoRename,
      desc: t.undoRenameDesc,
    },
    {
      icon: '/window.svg',
      title: t.batchPresets,
      desc: t.batchPresetsDesc,
    },
  ];

  return (
    <section className="w-full px-6 py-16 md:py-24 bg-gray-50 dark:bg-gray-900" id="features">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          {t.coreFeaturesTitle}
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          {t.coreFeaturesSubtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-50 dark:bg-gray-700 rounded-full p-3 mb-4 w-fit">
                <Image src={feature.icon} alt={feature.title} width={32} height={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures; 