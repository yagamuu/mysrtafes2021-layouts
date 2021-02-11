import { Social } from '@/types/Social';

export const socialOrder = {
  twitter: 0,
  twitch: 1,
  youtube: 2,
  nico: 3,
} as const;

export const searchExistsSocial = (social: Social): number[] => {
  const exists = [];
  if (social.twitter) exists.push(socialOrder.twitter);
  if (social.twitch) exists.push(socialOrder.twitch);
  if (social.youtube) exists.push(socialOrder.youtube);
  if (social.nico) exists.push(socialOrder.nico);

  return exists;
};

export const formatSeconds = (baseSeconds: number): string => {
  const seconds = baseSeconds % 60;
  const minutes = Math.floor(baseSeconds / 60) % 60;
  const hours = Math.floor(baseSeconds / 3600);

  const zeroPadding = (num: number): string => num.toString().padStart(2, '0');

  return `${hours ? `${hours}:` : ''}${zeroPadding(minutes)}:${zeroPadding(seconds)}`;
};

export const formatSecondsToStartInTime = (baseSeconds: number): string => {
  const minutes = Math.floor(baseSeconds / 60) % 60;
  const hours = Math.floor(baseSeconds / 3600);

  const zeroPadding = (num: number): string => num.toString().padStart(2, '0');

  return `${hours ? `${hours}時間` : ''}${zeroPadding(minutes)}分`;
};
