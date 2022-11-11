import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { initTodos } from "../slices/todo";
import Image from 'next/image';
import Head from 'next/head';
import Form from '../components/Form';
import List from '../components/List';
import Footer from '../components/Footer';

import { Card, StyledDiv, StyledHeader } from "../styles/Home.styled";

export default function Home({ themeActive, setThemeActive }) {

  const dispatch = useDispatch();
  const [status, setStatus] = useState('all');
  const mounted = useRef(0);
  mounted.current++;

  useEffect(() => {
    dispatch(initTodos(localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : []));
    // Get Theme from LS
    const theme = localStorage.getItem('theme');
    if(theme) {
      setThemeActive(JSON.parse(theme));
    }
  }, []);

  useEffect(() => {
    if(mounted.current > 1) {
      localStorage.setItem('theme', JSON.stringify(themeActive));
    }
  }, [themeActive]);

  const handleThemeButtonClick = () => {
    setThemeActive((prev) => prev === 'LIGHT' ? 'DARK' : 'LIGHT');
  }

  return (
    <StyledDiv themeActive={themeActive}>
      <Head>
        <title>Welcome</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      <Card>
        <StyledHeader>
          <h1>Todo</h1>
          <button onClick={handleThemeButtonClick}>
            {themeActive === 'LIGHT' ? (
              <Image src="/icon-moon.svg" width={30} height={30} alt="light theme" />
            ) : (
              <Image src="/icon-sun.svg" width={30} height={30} alt="dark theme" />
            )}
          </button>
        </StyledHeader>
        <Form />
        <List status={status} /> 
        <Footer status={status} setStatus={setStatus} />
      </Card>
    </StyledDiv>
  )
}
