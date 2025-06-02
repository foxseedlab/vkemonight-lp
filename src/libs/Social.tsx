import sendGAEvent from './analytics/google';
import type { Assets } from './stores/assets';
import type { SocialLink, SocialLinkType } from './stores/people';
import { randomString } from './utils/random';

type Props = {
  socials: SocialLink[];
  assets: Assets;
  className?: string;
};

type LogoProperty = {
  url: string;
  height: string;
};

export default function Social({ socials, assets, className = '' }: Props) {
  const logos = new Map<SocialLinkType, LogoProperty>([
    ['X', { url: assets.social_logos.twitter.url, height: 'h-[20px]' }],
    ['Bluesky', { url: assets.social_logos.bluesky.url, height: 'h-[20px]' }],
    [
      'Facebook',
      { url: assets.social_logos.facebook.url, height: 'h-[27.5px]' },
    ],
    [
      'Instagram',
      { url: assets.social_logos.instagram.url, height: 'h-[20px]' },
    ],
    ['YouTube', { url: assets.social_logos.youtube.url, height: 'h-[20px]' }],
    ['Mixcloud', { url: assets.social_logos.mixcloud.url, height: 'h-[20px]' }],
    ['VRChat', { url: assets.social_logos.vrchat.url, height: 'h-[20px]' }],
    ['GitHub', { url: assets.social_logos.github.url, height: 'h-[23px]' }],
    ['Booth', { url: assets.social_logos.booth.url, height: 'h-[24px]' }],
    ['Linktree', { url: assets.social_logos.linktree.url, height: 'h-[20px]' }],
    ['homepage', { url: assets.social_logos.homepage.url, height: 'h-[28px]' }],
  ]);

  const handleClick = (social: SocialLink) => {
    sendGAEvent('social_click', {
      category: 'engagement',
      label: 'social_click',
      value: 1,
      social: social.type[0],
      destination_url: social.url,
    });
  };

  return (
    <div className={`w-full flex gap-3 ${className}`}>
      {socials.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick(social)}
          key={randomString(10)}
        >
          <div className="h-full flex flex-col items-center justify-center">
            <img
              src={logos.get(social.type[0])?.url}
              alt={social.type[0]}
              className={logos.get(social.type[0])?.height}
              key={randomString(10)}
            />
          </div>
        </a>
      ))}
    </div>
  );
}
