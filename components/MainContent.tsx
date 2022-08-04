import React from 'react';
import { IconArrowNarrowRight, IconDownload } from '@tabler/icons';
import Link from 'next/link';
import { Button, Group, Stack, Text, Title } from '@mantine/core';

export default function MainContent() {
    return (
        <Stack align={'center'} spacing={0}>
            <Title className='pixsoil'> Pixsoil </Title>
            <Text align='center' px={'md'} size={'xl'} > Scan your soil for better plant decision making  </Text>
            <Text align='center' px={'md'} color={'dimmed'} >
                A machine learning web and mobile application for soil type classification
            </Text>

            <Group position='center' mt='5rem'>
                <Link href={'/app/Pixsoil.apk'} download>
                    <Button size='lg' style={{ backgroundColor: '#815115' }}>
                        Download Android App &nbsp; <IconDownload />
                    </Button>
                </Link>
                <Link href={'/web'}>
                    <Button size='lg' style={{ backgroundColor: '#815115' }}>
                        Try Pixsoil for Web &nbsp; <IconArrowNarrowRight />
                    </Button>
                </Link>
            </Group>
        </Stack>
    );
}
