import { ActionIcon, Avatar, Container, Group, Paper, Stack, Text, Title } from '@mantine/core';
import Head from 'next/head';
import React from 'react';
import { IconBrandFacebook, IconBrandInstagram, IconBrandGithub } from '@tabler/icons';

const researchers = [
    {
        name: 'Eric Echemane',
        facebookUrl: 'https://www.facebook.com/e.echemane/',
        photoUrl: 'https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/286581054_5197144237019366_1076574913624150808_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGfseTrQ7IGC_1u9CK44vHQ_ccPSpVWP-j9xw9KlVY_6AZvuOXjlqnLX6Tvr1BNHFGBPgB354YKS5IM2dwyjYWH&_nc_ohc=3XzPNWlFKLgAX9fJPKJ&_nc_ht=scontent.fmnl3-4.fna&oh=00_AT-zYb4r7UupmmL6tJ8qMvDV3LQa0f0guqStxgzFW4vgfQ&oe=62F1B32B',
        instagramUrl: 'https://www.instagram.com/ericechemane/',
        githubUrl: 'https://github.com/EricEchemane'
    },
    {
        name: 'Mark Alcel Bautista',
        facebookUrl: 'https://www.facebook.com/alcelbautista26',
        photoUrl: 'https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.6435-9/194508521_1419068428427913_8980144066639030982_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHs2tWA1bPTGGvZtEokII_Xa205d_3g4D1rbTl3_eDgPeoWmLXJn6Gr-6TmDx6fH8_1HjwXCmOIUqqEvoprvOiE&_nc_ohc=nl_-xrHPCI0AX_61Gww&_nc_ht=scontent.fmnl3-1.fna&oh=00_AT-fLVuma52IxL92ZI_2U8JAFBy0_21eyUnZWib7a3eKug&oe=63141162',
        instagramUrl: 'https://www.instagram.com/alcelbautista17/',
        githubUrl: null
    },
    {
        name: 'Jamel Varela',
        facebookUrl: 'https://www.facebook.com/profile.php?id=100005122395396',
        photoUrl: 'https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/278377894_2027343424113051_7484067277452223183_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG2gHkMOQJ062ScG0sUpnpz9aPcoBvzjTb1o9ygG_ONNj2FZdTG0URnBZWZjnDzAAGJ6T4WwGJmWGDINTFYfejF&_nc_ohc=qcZVEzuP_RMAX_S23YH&_nc_ht=scontent.fmnl3-2.fna&oh=00_AT8y0ichmUxK1-A3J98JlyaJJHaDL5OOBnJekeU2TQADxw&oe=62F30F8E',
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


