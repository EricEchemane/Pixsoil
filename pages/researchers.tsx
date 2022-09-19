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
        githubUrl: 'https://github.com/EricEchemane',
        role: "Software Engineer & Reseacher"
    },
    {
        name: 'Mark Alcel Bautista',
        facebookUrl: 'https://www.facebook.com/alcelbautista26',
        photoUrl: '/profiles/alcel.jpg',
        instagramUrl: 'https://www.instagram.com/alcelbautista17/',
        githubUrl: null,
        role: "Documentor & Reseacher"
    },
    {
        name: 'Jamel Varela',
        facebookUrl: 'https://www.facebook.com/profile.php?id=100005122395396',
        photoUrl: '/profiles/jamel.jpg',
        instagramUrl: 'https://www.instagram.com/jamvrla/',
        githubUrl: null,
        role: "Documentor & Reseacher"
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
                    <Text> 4th year computer science students at University of Muntinlupa. </Text>

                    {researchers.map(({ facebookUrl, githubUrl, instagramUrl, name, photoUrl, role }, index) => {
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
                                    <Stack spacing={0}>
                                        <Title order={4}> {name} </Title>
                                        <Text weight={'bold'} color='dimmed'> {role} </Text>
                                        <Group mt={8}>
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


