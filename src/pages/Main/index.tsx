import React from 'react';
import styles from './styles.module.scss';
import { useDarkModeToggle } from '../../utils/helperHooks';
import { StyledButton as Button } from '../../components';
import { Title } from '../../components/Title';

const Main = () => {
  const [darkMode, toggleDarkMode] = useDarkModeToggle();
  console.log(darkMode);
  return (
    <div className={styles.main}>
        <Title>BUTTON AS BUTTON</Title>
        <Button onClick={() => toggleDarkMode()} variant='secondary'>
          Change theme
        </Button>
        <Title>BUTTON AS LINK</Title>
        <Button variant='tertiary' text='Link' to='123/' />
        <Title>BUTTON AS ANCHOR</Title>
        <Button
          text='href'
          href='https://reactrouter.com/web/guides/quick-start'
        />
    </div>
  );
};

export default Main;
