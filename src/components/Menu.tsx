import type { Assets } from '@/libs/stores/assets';
import { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';

type Props = {
  assets: Assets;
};

export default function Menu({ assets }: Props) {
  // ウィンドウ全体のスクロール位置を追跡
  const { y } = useWindowScroll();

  const [isHero, setIsHero] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // 各セクションへの参照を作成
  const aboutRef = useRef<HTMLElement | null>(null);
  const guestsRef = useRef<HTMLElement | null>(null);
  const timescheduleRef = useRef<HTMLElement | null>(null);
  const contributeRef = useRef<HTMLElement | null>(null);
  const staffsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  // DOMが読み込まれた後に各セクションの要素を取得
  useEffect(() => {
    aboutRef.current = document.getElementById('about');
    guestsRef.current = document.getElementById('guests');
    timescheduleRef.current = document.getElementById('timeschedule');
    contributeRef.current = document.getElementById('contribute');
    staffsRef.current = document.getElementById('staffs');
    contactRef.current = document.getElementById('contact');
  }, []);

  // スクロール位置に基づいて現在のセクションを更新
  useEffect(() => {
    // スクロール位置が取得できない場合は処理しない
    if (y === undefined) return;

    // デフォルトではアクティブなセクションなし
    setActiveSection('');
    setIsHero(true);

    // 各セクションをチェックし、表示されていれば対応するセクションをアクティブに設定
    if (aboutRef.current && y >= aboutRef.current.offsetTop - 300) {
      setActiveSection('about');
      setIsHero(false);
    }
    if (guestsRef.current && y >= guestsRef.current.offsetTop - 300) {
      setActiveSection('guests');
      setIsHero(false);
    }
    if (timescheduleRef.current && y >= timescheduleRef.current.offsetTop) {
      setActiveSection('timeschedule');
      setIsHero(false);
    }
    if (contributeRef.current && y >= contributeRef.current.offsetTop - 300) {
      setActiveSection('contribute');
      setIsHero(false);
    }
    if (staffsRef.current && y >= staffsRef.current.offsetTop - 300) {
      setActiveSection('staffs');
      setIsHero(false);
    }
    if (contactRef.current && y >= contactRef.current.offsetTop - 300) {
      setActiveSection('contact');
      setIsHero(false);
    }
  }, [y]);

  return (
    <section className="mx-auto flex flex-col items-center fixed top-8 inset-x-0 z-40">
      <menu
        className="px-8 text-center text-primary tracking-wider leading-[3.5rem] font-display
        bg-primary/30 border-1 border-primary/20 backdrop-blur-lg rounded-full
      "
      >
        <ul className="flex flex-row md:gap-4 xl:gap-8">
          {!isHero && (
            <li className="h-[3.5rem]">
              <a href="#hero">
                <img
                  src={assets.logos.black.url}
                  alt="バーチャルケモナイト"
                  className="py-2 h-full"
                />
              </a>
            </li>
          )}

          <li
            className={
              activeSection === 'timeschedule'
                ? 'text-black transition-colors duration-300 ease-in-out'
                : 'text-primary transition-colors duration-300 ease-in-out'
            }
          >
            <a href="#about">about</a>
          </li>
          <li
            className={
              activeSection === 'timeschedule'
                ? 'text-black transition-colors duration-300 ease-in-out'
                : 'text-primary transition-colors duration-300 ease-in-out'
            }
          >
            <a href="#guests">guests</a>
          </li>
          <li
            className={
              activeSection === 'timeschedule'
                ? 'text-black transition-colors duration-300 ease-in-out'
                : 'text-primary transition-colors duration-300 ease-in-out'
            }
          >
            <a href="#timeschedule">timeschedule</a>
          </li>
          <li
            className={
              activeSection === 'timeschedule'
                ? 'text-black transition-colors duration-300 ease-in-out'
                : 'text-primary transition-colors duration-300 ease-in-out'
            }
          >
            <a href="#contribute">contribute</a>
          </li>
          <li
            className={
              activeSection === 'timeschedule'
                ? 'text-black transition-colors duration-300 ease-in-out'
                : 'text-primary transition-colors duration-300 ease-in-out'
            }
          >
            <a href="#staffs">staffs</a>
          </li>
          <li
            className={
              activeSection === 'timeschedule'
                ? 'text-black transition-colors duration-300 ease-in-out'
                : 'text-primary transition-colors duration-300 ease-in-out'
            }
          >
            <a href="#contact">contact</a>
          </li>
        </ul>
      </menu>
    </section>
  );
}
