import { AppStateType } from '../src/interface/recoil/app';
import { atom } from 'recoil';

export const appGlobalState = atom<AppStateType>({
  key: 'appState',
  default: {
    isDark: false,
  },
});
