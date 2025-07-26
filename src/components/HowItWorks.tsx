import { FC } from 'react';
import Image from 'next/image';
import { translations } from '../utils/translations';

interface HowItWorksProps {
  language: 'en' | 'id';
}

const HowItWorks: FC<HowItWorksProps> = ({ language }) => {
  const t = translations[language];

  const steps = [
    {
      icon: '/file.svg',
      title: t.step1,
      desc: t.step1Desc,
    },
    {
      icon: '/globe.svg',
      title: t.step2,
      desc: t.step2Desc,
    },
    {
      icon: '/vercel.svg',
      title: t.step3,
      desc: t.step3Desc,
    },
  ];

  return (
    <section className="w-full px-6 py-16 md:py-24 bg-white dark:bg-gray-950" id="how-it-works">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">{t.howItWorksTitle}</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        {steps.map((step, idx) => (
          <div key={step.title} className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-blue-50 dark:bg-gray-900 rounded-full p-4 mb-4 shadow">
              <Image src={step.icon} alt={step.title} width={48} height={48} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">{`${idx + 1}. ${step.title}`}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-base">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks; 