import { ActionIcon, Avatar, Container, Group, Paper, Stack, Text, Title } from '@mantine/core';
import Head from 'next/head';
import React from 'react';
import { IconBrandFacebook, IconBrandInstagram, IconBrandGithub } from '@tabler/icons';

const researchers = [
    {
        name: 'Eric Echemane',
        facebookUrl: 'https://www.facebook.com/e.echemane/',
        photoUrl: '/profiles/eric.jpg',
        instagramUrl: 'https://www.instagram.com/ericechemane/',
        githubUrl: 'https://github.com/EricEchemane'
    },
    {
        name: 'Mark Alcel Bautista',
        facebookUrl: 'https://www.facebook.com/alcelbautista26',
        photoUrl: '/profiles/alcel.jpg',
        instagramUrl: 'https://www.instagram.com/alcelbautista17/',
        githubUrl: null
    },
    {
        name: 'Jamel Varela',
        facebookUrl: 'https://www.facebook.com/profile.php?id=100005122395396',
        photoUrl: '/profiles/jamel.jpg',
        instagramUrl: 'https://www.instagram.com/jamvrla/',
        githubUrl: null
    },
];

export default function Researchers() {
    return (
        <>
            <Head>
                <title> Pixsoil Researchers </title>
            </Head>
            <Container py={'xl'}>
                <Stack spacing={'lg'}>

                    <Title> The Researchers </Title>
                    <Text> We are in coming 4th year computer science students at University of Muntinlupa. </Text>

                    {researchers.map(({ facebookUrl, githubUrl, instagramUrl, name, photoUrl }, index) => {
                        return (
                            <Paper p='md' shadow={'md'} key={index}>
                                <Group>
                                    <Avatar
                                        component="a"
                                        href={facebookUrl}
                                        target="_blank"
                                        radius={'md'}
                                        src={photoUrl}
                                        alt={`${name}'s photo`}
                                        size={'xl'} />
                                    <Stack>
                                        <Title order={4}> {name} </Title>
                                        <Group>
                                            <ActionIcon
                                                component='a'
                                                target={'_blank'}
                                                href={facebookUrl}
                                                color={'blue'}
                                                variant='light'> <IconBrandFacebook /> </ActionIcon>
                                            <ActionIcon
                                                component='a'
                                                target={'_blank'}
                                                href={instagramUrl}
                                                color={'red'}
                                                variant='light'> <IconBrandInstagram /> </ActionIcon>
                                            {githubUrl && <ActionIcon
                                                component='a'
                                                target={'_blank'}
                                                href={githubUrl}
                                                variant='light'> <IconBrandGithub /> </ActionIcon>}
                                        </Group>
                                    </Stack>
                                </Group>
                            </Paper>
                        );
                    })}


                </Stack>
            </Container>
        </>
    );
}


