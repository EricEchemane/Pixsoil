import React from 'react';
import { IconArrowNarrowRight, IconDownload } from '@tabler/icons';
import Link from 'next/link';
import { Anchor, Box, Button, Group, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function MainContent() {
    const match = useMediaQuery('(max-width: 877px)', false);
    return (
        <Box>
            <Title align={match ? 'center' : 'left'} className='pixsoil'> Pixsoil<sup>🌱</sup> </Title>
            <Title align={match ? 'center' : 'left'} order={2}> Scan your soil for better plant decision making  </Title>
            <Text align={match ? 'center' : 'left'} mt='xs'>
                A machine learning web and mobile application for soil type classification
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
                <Link href={'/about'}>
                    <Text style={{ cursor: 'pointer' }}>What is Pixsoil?</Text>
                </Link>
                <Link href={'/researchers'}>
                    <Text style={{ cursor: 'pointer' }}>The Researchers</Text>
                </Link>
            </Group>
        </Box>
    );
}
