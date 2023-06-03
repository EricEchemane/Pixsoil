import { Group } from '@mantine/core';
import MainContent from 'components/MainContent';
import MobileApp from 'components/MobileApp';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Pixsoil - Soil Type Scanner </title>
      </Head>

      <Group align={'flex-start'} position='center' p={'lg'} id='container'>
        <MobileApp />
        <MainContent />
      </Group>
    </>
  );
};

export default Home;
