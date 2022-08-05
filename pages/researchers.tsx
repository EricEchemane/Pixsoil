import { ActionIcon, Avatar, Container, Group, Paper, Stack, Text, Title } from '@mantine/core';
import Head from 'next/head';
import React from 'react';
import { IconBrandFacebook, IconBrandInstagram, IconBrandGithub } from '@tabler/icons';

const profileLinks = [
    'https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/286581054_5197144237019366_1076574913624150808_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGfseTrQ7IGC_1u9CK44vHQ_ccPSpVWP-j9xw9KlVY_6AZvuOXjlqnLX6Tvr1BNHFGBPgB354YKS5IM2dwyjYWH&_nc_ohc=3XzPNWlFKLgAX9fJPKJ&_nc_ht=scontent.fmnl3-4.fna&oh=00_AT-zYb4r7UupmmL6tJ8qMvDV3LQa0f0guqStxgzFW4vgfQ&oe=62F1B32B',
    'https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.6435-9/194508521_1419068428427913_8980144066639030982_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHs2tWA1bPTGGvZtEokII_Xa205d_3g4D1rbTl3_eDgPeoWmLXJn6Gr-6TmDx6fH8_1HjwXCmOIUqqEvoprvOiE&_nc_ohc=nl_-xrHPCI0AX_61Gww&_nc_ht=scontent.fmnl3-1.fna&oh=00_AT-fLVuma52IxL92ZI_2U8JAFBy0_21eyUnZWib7a3eKug&oe=63141162',
    'https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/296293896_2108781229302603_1465947936553881731_n.jpg?stp=cp1_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGEj2gmJCpMKxaklAksaDmVtxRZLswogwe3FFkuzCiDB_7qs0kRoP1K4v1XCXxgIphW2LDGTGMmk_hk0RvKeaHL&_nc_ohc=W2oxk7TgYzoAX8i9IsM&_nc_ht=scontent.fmnl3-4.fna&oh=00_AT9TATfQiHImkHG3JwuU2X5iCSuriLKw7eXvpKStZdZD-w&oe=62F17968',
];


export default function researchers() {
    return (
        <>
            <Head>
                <title> Pixsoil Researchers </title>
            </Head>
            <Container py={'xl'}>
                <Stack spacing={'lg'}>

                    <Title> The Researchers </Title>
                    <Text> We are in coming 4th year computer science students at University of Muntinlupa. </Text>

                    <Paper p='md' shadow={'md'}>
                        <Group>
                            <Avatar
                                component="a"
                                href="https://www.facebook.com/e.echemane/"
                                target="_blank"
                                radius={'md'}
                                src={profileLinks[0]}
                                alt='Eric Echemane profile'
                                size={'xl'} />
                            <Stack>
                                <Title order={4}>Eric Echemane</Title>
                                <Group>
                                    <ActionIcon
                                        component='a'
                                        target={'_blank'}
                                        href='https://www.facebook.com/e.echemane/'
                                        color={'blue'}
                                        variant='light'> <IconBrandFacebook /> </ActionIcon>
                                    <ActionIcon
                                        component='a'
                                        target={'_blank'}
                                        href='https://www.instagram.com/ericechemane/'
                                        color={'red'}
                                        variant='light'> <IconBrandInstagram /> </ActionIcon>
                                    <ActionIcon
                                        component='a'
                                        target={'_blank'}
                                        href='https://github.com/EricEchemane'
                                        variant='light'> <IconBrandGithub /> </ActionIcon>
                                </Group>
                            </Stack>
                        </Group>
                    </Paper>

                </Stack>
            </Container>
        </>
    );
}


