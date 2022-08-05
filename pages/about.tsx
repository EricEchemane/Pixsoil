import { Anchor, Container, List, Stack, Text, Title } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function about() {
    return (
        <>
            <Head>
                <title> What Pixsoil is all about? </title>
            </Head>

            <Container py='lg'>
                <Stack spacing={'xl'}>
                    <Title> What Pixsoil is all about? </Title>
                    <Text>
                        <span className='oleo'>Pixsoil</span> is the product of our Thesis entitled <i>Image Processing for Soil Type Classification</i>, presented to the faculty of the College of
                        Information Technology and Computer Studies in
                        University of Muntinlupa -
                        Muntinlupa City, Philippines.
                    </Text>
                    <Text>
                        The overall objective of the study is to develop a system that can classify the type of a soil and identify its properties that will help planters in making an accurate decision with regards to planting. Now, our objective came into life!
                    </Text>
                    <Title order={3}> Why classify the type of the soil? </Title>
                    <Text>
                        Soil analysis is the number one process in urban gardening. One of the major problems of the gardeners or new to planting is that they lack the basic knowledge on how to classify the soil and they do not fully understand the capabilities of the properties of the certain type. Hence, they tend to plant whatever plants they have in mind to the soil that they have with the hope of growing it just by simply watering it and exposing it to sunlight every day. This routine leads the plants to grow malnourished and/or die, wasting the time, effort, and money.
                    </Text>

                    <Title order={4}> The Problems Pixsoil aims to solve </Title>
                    <List withPadding>
                        <List.Item>
                            There is no accessible application/tool for soil analysis for better plant decision making.
                        </List.Item>
                        <List.Item>
                            It is difficult to identify whether a certain plant will grow on the current available soil.
                        </List.Item>
                        <List.Item>
                            Soil classification is expensive and time consuming because it has to undergo laboratory.
                        </List.Item>
                        <List.Item>
                            Lack of user-specific information on what particular amendment that should be added on the soil to enhance its quality based on the classification results.
                        </List.Item>
                        <List.Item>
                            Develop methodology that works well on identifying the type of soil based on its physical characteristics.
                        </List.Item>
                    </List>

                    <Title order={3}> The Significance </Title>
                    <Text>
                        The research uses image processing techniques to assist gardeners in classifying soil types and identifying which plants or crops are suitable for them. The discovery of this sort of soil will aid gardeners in expanding their knowledge to enhance their ability to choose the appropriate plants or crops for it.
                    </Text>
                    <Text>
                        <i>For gardeners</i>, this study will help the gardeners/farmers to further expand their knowledge on the proper approach to the soil and improve their decision making with regards to handling their plants.
                    </Text>
                    <Text>
                        <i>The Agricultural Sector</i>, this study will help the agriculture sector since the main goal of this study is to develop a system that can classify the soil type. The outcome of this study will provide ease to the sector. The system may also be used by the sector in their future projects and research.
                    </Text>
                    <Text>
                        <i>{'The Future researcher(s)'}</i>, the process and outcome of this research will serve as a reference and/or inspiration for future study. Furthermore, the results of this study will also serve as a basis for future researchers to enhance and further expound the research that will lead to accurate and more beneficial results.
                    </Text>

                    <Title order={3}> Contribution and Acknowledgement </Title>
                    <Text>
                        <i>Pixsoil was made possible by the following stakeholders. They put significant amount of efforts in this project.</i>
                    </Text>
                    <List withPadding>
                        <List.Item> Eric Echemane </List.Item>
                        <List.Item> Mark Alcel Bautista </List.Item>
                        <List.Item> Jamel Varela </List.Item>
                        <List.Item> Our Research Adviser </List.Item>
                        <List.Item> Our Research Panels </List.Item>
                        <List.Item> The University of Muntinlupa </List.Item>
                    </List>
                    <Text>
                        For more information about the researchers, visit <Link href='/researchers'>The Researchers</Link> page.
                        Or if you want to contribute to this project, Pixsoil is open source. Just visit the following codebases,
                        <Anchor href='https://github.com/EricEchemane/Soil-Type-Classifier-Through-Image-Processing' target={'_blank'}> Model Training</Anchor>,
                        <Anchor href='https://github.com/EricEchemane/Pixsoil' target={'_blank'}> Pixsoil for Web</Anchor>, and
                        <Anchor href='https://github.com/EricEchemane/Soil-type-classifier-using-convolutional-neural-network/tree/main/leafjem_app' target={'_blank'}> Pixsoil for Android</Anchor>,
                        then contact the <Anchor href='https://github.com/EricEchemane/' target={'_blank'}> developer.</Anchor>
                    </Text>
                </Stack>
            </Container>
        </>
    );
}
