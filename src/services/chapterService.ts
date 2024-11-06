import chapterData from '../mock/chapterData.json'
import { Chapter } from '../components/sections/main/types';

export const fetchChapters = (): Promise<Chapter[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(chapterData as Chapter[]);
    }, 100); // network delay
  });
};
