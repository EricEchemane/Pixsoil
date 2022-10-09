/* eslint-disable @next/next/no-img-element */
import { Box, Group, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import MainContent from 'components/MainContent';
import MobileApp from 'components/MobileApp';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const match = useMediaQuery('(max-width: 877px)', false);
  return (
    <>
      <Head>
        <title> Pixsoil - Soil Type Scanner </title>
      </Head>

      <Group
        align={'flex-start'}
        position='center'>
        <Box>
          <MobileApp />
        </Box>
        <Box px='xl' style={{ marginTop: match ? '508px' : '0' }}>
          <MainContent />
        </Box>
      </Group>
    </>
  );
};

export default Home;
