// pages/intro.js
import React from 'react';
import Head from 'next/head';
import stylesheet from 'styles/main.scss'

import Intro from '../components/articles/Intro';

const IntroPage = () => {
  return (
    <>
      <Head>
        <title>Intro | Next.js Starter</title>
      </Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Intro />
    </>
  );
};
export default IntroPage;