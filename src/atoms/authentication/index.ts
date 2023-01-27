import { atom, useRecoilState } from 'recoil';

const THEME_ATOM = 'THEME';

interface AuthenticationState {
  authorized: boolean;
}

const initializeState: AuthenticationState = {
  authorized: false,
};

export const AuthenticationAtom = atom<AuthenticationState>({
  key: THEME_ATOM,
  default: initializeState,
});

export const useAuthenticationState = () => {
  return useRecoilState(AuthenticationAtom);
};
