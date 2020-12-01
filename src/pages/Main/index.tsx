import React from 'react';
import styles from './styles.module.scss';
import { Wrapper, Title } from '../../components/Title';
import { useDarkModeToggle } from '../../utils/helperHooks';
import { StyledButton as Button } from '../../components';

const Main = () => {
  const [darkMode, toggleDarkMode] = useDarkModeToggle();
  console.log(darkMode);
  return (
    <div className={styles.main}>
      <Wrapper>
        <Title>123</Title>
        <Button onClick={() => toggleDarkMode()} variant='secondary'>
          Normal
        </Button>
        <Button variant='tertiary' text='Link' to='123/' />
        <Button
          text='href'
          href='https://reactrouter.com/web/guides/quick-start'
        />
      </Wrapper>
    </div>
  );
};

export default Main;
