import { Size } from '../model/types';

export const getAs = (size: Size) => {
  switch (size) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'caption':
      return 'span';
    case 'p':
    case 'pb':
    default:
      return 'p';
  }
};
