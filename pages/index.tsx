/* eslint-disable @next/next/no-img-element */
import { Group } from '@mantine/core';
import MobileApp from 'components/MobileApp';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Pixsoil - Soil Type Scanner </title>
      </Head>

      <Group>
        <MobileApp />
      </Group>
    </>
  );
};

export default Home;
