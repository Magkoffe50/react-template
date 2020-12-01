import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStoreState } from '../types/store/rootStore';
import actionTypes from '../store/user/actionTypes';

export function useIsDarkMode(): boolean {
  const { darkMode } = useSelector((state: RootStoreState) => state.user);
  return darkMode;
}

export function useDarkModeToggle(): [boolean, () => void] {
  const dispatch = useDispatch();
  const darkMode = useIsDarkMode();

  const toggleSetDarkMode = useCallback(() => {
    dispatch({ type: actionTypes.TOGGLE_DARK_MODE, payload: !darkMode });
  }, [darkMode, dispatch]);

  return [darkMode, toggleSetDarkMode];
}
