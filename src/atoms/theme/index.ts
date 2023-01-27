import { COLORS } from './constants/colors';
import { atom } from 'recoil';

const THEME_ATOM = 'THEME';

interface ThemeState {
  colors: typeof COLORS;
}

const initializeState: ThemeState = {
  colors: COLORS,
};

export const ThemeAtom = atom<ThemeState>({
  key: THEME_ATOM,
  default: initializeState,
});
