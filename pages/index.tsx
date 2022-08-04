/* eslint-disable @next/next/no-img-element */
import { Button, Group, Stack, Text } from '@mantine/core';
import { NextLink } from '@mantine/next';
import type { NextPage } from 'next';
import Head from 'next/head';
import { IconArrowNarrowRight, IconDownload } from '@tabler/icons';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Pixsoil - Soil Type Scanner </title>
      </Head>

      <Stack align={'center'} spacing={0}>
        <img src='/logo.png' alt='logo' width={'250px'} />
        <Text size={'xl'} > Scan your soil for better planting  </Text>
        <Text color={'dimmed'} >
          A machine learning web and mobile application soil type classification for plant decision making
        </Text>

        <Group position='center' mt='5rem'>
          <Button href={'/app/Pixsoil.apk'} download component={NextLink} size='lg' style={{ backgroundColor: '#a68c67' }}>
            Download Android App &nbsp; <IconDownload />
          </Button>
          <Button href={'/web'} component={NextLink} size='lg' style={{ backgroundColor: '#a68c67' }}>
            Try Pixsoil for Web &nbsp; <IconArrowNarrowRight />
          </Button>
        </Group>
      </Stack>
    </>
  );
};

export default Home;
