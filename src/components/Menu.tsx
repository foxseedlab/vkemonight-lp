import type { Assets } from '@/libs/stores/assets';
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

  const isTimeScheduleActive = activeSection === 'timeschedule';
  const textColorClass = isTimeScheduleActive ? 'text-black' : 'text-primary';

  return (
    <section className="fixed inset-x-0 top-8 z-40 mx-auto flex flex-col items-center">
      <menu
        className="px-8 text-primary leading-[3.5rem] tracking-wider font-display
        rounded-full border-1 border-primary/20 bg-primary/30 backdrop-blur-lg"
      >
        <ul className="flex flex-row md:gap-4 xl:gap-8">
          {activeSection !== '' && (
            <li className="h-[3.5rem]">
              <a href="#hero">
                <img
                  src={assets.logos.black.url}
                  alt="バーチャルケモナイト ロゴ"
                  className="h-full py-2"
                />
              </a>
            </li>
          )}

          {sections.map(({ id, label }) => (
            <li
              key={id}
              className={`${textColorClass} outlined-text-shadow-2xs text-shadow-current transition-colors duration-300 ease-in-out`}
            >
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
      </menu>
    </section>
  );
}
