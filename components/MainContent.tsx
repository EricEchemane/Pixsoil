/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IconArrowNarrowRight, IconDownload } from '@tabler/icons';
import Link from 'next/link';
import { Box, Button, Group, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Oleo_Script } from 'next/font/google';

const oleo = Oleo_Script({ weight: '700', subsets: ['latin'], preload: true });
const pixsoil = `${oleo.className} pixsoil`;

export default function MainContent() {
  const match = useMediaQuery('(max-width: 980px)', false);

  return (
    <Box px={'xl'}>
      <Title align={match ? 'center' : 'left'} className={pixsoil}>
        Pixsoil
        <sup>
          <img src='/growing_plant.gif' alt='logo' width={'100px'} />
        </sup>
      </Title>
      <Title align={match ? 'center' : 'left'} order={2}>
        Scan your soil for better plant decision making
      </Title>
      <Text align={match ? 'center' : 'left'} mt='xs'>
        A machine learning application for soil type classification
      </Text>

      <Group mt='5rem' position={match ? 'center' : 'left'}>
        <Link href={'/app/Pixsoil.apk'} download>
          <Button size='lg' style={{ backgroundColor: '#86d72f' }}>
            Download android app &nbsp; <IconDownload />
          </Button>
        </Link>
        <Link href={'/web'}>
          <Button size='lg' style={{ backgroundColor: '#815115' }}>
            Try Pixsoil for web &nbsp; <IconArrowNarrowRight />
          </Button>
        </Link>
      </Group>

      <Group mt='6rem' spacing={'md'} position={match ? 'center' : 'left'}>
        <Link href={'/about'} passHref>
          <Text style={{ cursor: 'pointer' }}>What is Pixsoil?</Text>
        </Link>
        <Link href={'/researchers'} passHref>
          <Text style={{ cursor: 'pointer' }}>The Researchers</Text>
        </Link>
      </Group>
    </Box>
  );
}
