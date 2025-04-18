import type { Assets } from '@/libs/stores/assets';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';

type Props = {
  assets: Assets;
};

const sections = [
  { id: 'about', label: 'about', offset: 300 },
  { id: 'guests', label: 'guests', offset: 300 },
  { id: 'timeschedule', label: 'timeschedule', offset: 300 },
  { id: 'contribute', label: 'contribute', offset: 300 },
  { id: 'staffs', label: 'staffs', offset: 300 },
  { id: 'contact', label: 'contact', offset: 300 },
];

export default function Menu({ assets }: Props) {
  const { y } = useWindowScroll();
  const [activeSection, setActiveSection] = useState<string>('');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    for (const { id } of sections) {
      sectionRefs.current[id] = document.getElementById(id);
    }
  }, []);

  useEffect(() => {
    if (y === undefined) {
      return;
    }

    let currentActiveSection = '';

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = sectionRefs.current[section.id];

      if (element && y >= element.offsetTop - section.offset) {
        currentActiveSection = section.id;
        break;
      }
    }

    setActiveSection(currentActiveSection);
  }, [y]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const isTimeScheduleActive = activeSection === 'timeschedule';
  const textColorClass = isTimeScheduleActive ? 'text-black' : 'text-primary';

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <section className="fixed inset-x-0 top-8 z-40 mx-auto hidden md:flex flex-col items-center">
        <menu
          className="px-8 h-[3.5rem] text-primary tracking-wider font-display
          rounded-full border-1 border-primary/20 bg-primary/30 backdrop-blur-lg"
        >
          <ul className="h-full flex flex-row md:gap-4 xl:gap-8">
            <motion.li
              initial={{ width: 0 }}
              animate={{
                width: activeSection !== '' ? 'auto' : 0,
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="h-full flex-shrink-0 relative"
              style={{ overflow: 'hidden' }}
              aria-hidden={activeSection === ''}
            >
              <a
                href="#hero"
                tabIndex={activeSection === '' ? -1 : undefined}
                className="block h-full"
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeSection !== '' ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
                  src={assets.logos.black.url}
                  alt="バーチャルケモナイト ロゴ"
                  className="h-full py-2 object-cover object-left"
                />
              </a>
            </motion.li>

            {sections.map(({ id, label }) => (
              <li
                key={id}
                className={`${textColorClass} outlined-text-shadow-2xs text-shadow-current
                  transition-colors duration-300 ease-in-out
                  relative after:absolute after:bottom-[0.5rem] after:left-0 after:h-[1px] after:w-full
                  after:origin-bottom-right after:scale-x-0 after:bg-current
                  after:transition-transform after:duration-300 after:ease-in-out
                  after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100`}
              >
                <a href={`#${id}`}>
                  <div className="h-full flex items-center justify-center px-2">
                    {label}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </menu>
      </section>

      <header className="fixed inset-x-0 top-2 z-40 flex md:hidden h-[50px] items-center justify-end px-4">
        <button
          type="button"
          onClick={handleMenuToggle}
          className="hamburger relative w-10 bg-transparent border-none cursor-pointer md:hidden"
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block absolute w-full h-[0.2rem] transition-all duration-400 ease-in-out ${
              isMenuOpen
                ? 'bg-neutral-900 top-[calc(50%-1px)] transform rotate-45'
                : `${isTimeScheduleActive ? 'bg-neutral-900/50' : 'bg-primary/50'} top-[calc(50%-16px)]`
            }`}
            aria-hidden="true"
          />
          <span
            className={`block absolute w-full h-[0.2rem] transition-all duration-400 ease-in-out ${
              isMenuOpen
                ? 'bg-neutral-900 opacity-0'
                : `${isTimeScheduleActive ? 'bg-neutral-900/50' : 'bg-primary/50'} top-[calc(50%-1px)] opacity-100`
            }`}
            aria-hidden="true"
          />
          <span
            className={`block absolute w-full h-[0.2rem] transition-all duration-400 ease-in-out ${
              isMenuOpen
                ? 'bg-neutral-900 top-[calc(50%-1px)] transform -rotate-45'
                : `${isTimeScheduleActive ? 'bg-neutral-900/50' : 'bg-primary/50'} top-[calc(50%+14px)]`
            }`}
            aria-hidden="true"
          />
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="fixed inset-0 z-30 bg-black/30 md:hidden"
              onClick={handleMenuToggle}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="fixed top-0 right-0 h-screen w-[80%] max-w-[300px] z-30 md:hidden bg-white shadow-lg flex flex-col"
              aria-labelledby="mobile-menu-title"
            >
              <div className="flex-grow flex items-center justify-center">
                <ul className="flex flex-col items-center space-y-6 px-8 py-6">
                  <li className="mb-10">
                    {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                    <a
                      href="#hero"
                      className="w-full appearance-none bg-transparent border-none cursor-pointer p-0"
                      onClick={handleMobileLinkClick}
                      aria-current={
                        activeSection === 'hero' ? 'page' : undefined
                      }
                    >
                      <img
                        src={assets.logos.black.url}
                        alt="バーチャルケモナイト ロゴ"
                        className="h-full object-contain"
                      />
                    </a>
                  </li>
                  {sections.map(({ id, label }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={handleMobileLinkClick}
                        className="block px-3 py-2 text-xl font-display outlined-text-shadow-xs text-shadow-current text-neutral-900 hover:text-primary transition-colors"
                        aria-current={activeSection === id ? 'page' : undefined}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
