import React from 'react';
import { StyledButton as Button, Title } from 'components';
import { useDarkModeToggle } from 'utils';
import styles from './styles.module.scss';

const Main = () => {
  const [, toggleDarkMode] = useDarkModeToggle();
  return (
    <div className={styles.main}>
      <Title>BUTTON AS BUTTON</Title>
      <Button onClick={() => toggleDarkMode()} variant="secondary">
        Change theme
      </Button>
      <Title>BUTTON AS LINK</Title>
      <Button variant="tertiary" text="Link" to="123/" />
      <Title>BUTTON AS ANCHOR</Title>
      <Button
        text="href"
        href="https://reactrouter.com/web/guides/quick-start"
      />
    </div>
  );
};

export default Main;
