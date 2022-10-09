/* eslint-disable @next/next/no-img-element */
import { DropImage } from 'components/dropzone';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { labels } from 'model/labels';
import { Box, Button, Container, Group, Paper, Stack, Text, Title } from '@mantine/core';
import FileInfo from 'components/FileInfo';
import Result from 'components/Results';
import { IconCamera } from '@tabler/icons';
import CameraCapturer from 'components/CameraCapturer';
import useIsMobileDevice from 'hooks/useIsMobileDevice';

const Web: NextPage = () => {
    const isMobileDevice = useIsMobileDevice();
    const [imgSrc, setImgSrc] = useState<string>();
    const [file, setFile] = useState<File>();
    const [classifying, setClassifying] = useState(false);
    const [cameraIsOpen, setCameraIsOpen] = useState(false);
    const [notRecognized, setNotRecognized] = useState(false);
    const [notSoilType, setNotSoilType] = useState<string | null>(null);
    const [prediction, setPrediction] = useState<{
        type: string;
        confidence: number;
    } | null>();

    async function handleDrop(files: File[]) {
        const file = files[0];
        if (!file) return;
        setClassifying(true);
        setFile(file);
        setImgSrc(URL.createObjectURL(file));

        const img = document.createElement('img');
        img.width = 256;
        img.height = 256;
        img.src = URL.createObjectURL(file);

        predict(img);
    }

    const predictFromCamera = (dataUrl: string) => {
        setClassifying(true);
        const img = document.createElement('img');
        img.width = 256;
        img.height = 256;
        img.src = dataUrl;
        setImgSrc(dataUrl);
        predict(img);
    };

    const predict = async (img: HTMLImageElement) => {
        setNotRecognized(false);
        const model = await tf.loadLayersModel('/tfjs_files/model.json');
        const imageTensor = tf.browser.fromPixels(img)
            .expandDims(0)
            .expandDims(-1)
            .div(255.0)
            .reshape([-1, 256, 256, 3]);

        const pred: any = model.predict(imageTensor);
        const results = await pred.data();
        const confidence = Math.max(...results);
        const index = results.findIndex((r: any) => r === confidence);
        const type = labels[index];

        console.log(type, confidence);

        if (type === "not" || type === "alike" || confidence < .75) {
            setNotSoilType(type);
            setNotRecognized(true);
            setClassifying(false);
            setPrediction(null);
            return;
        }

        setPrediction({ confidence, type });
        setClassifying(false);
    };

    // const openCamera = () => {
    //     if (!navigator || !navigator.mediaDevices) {
    //         alert('This feature is not supported on your browser');
    //         return;
    //     }
    //     setCameraIsOpen(true);
    // };

    return (
        <>
            <Head>
                <title> Pixsoil Web - Run Pixsoil on your browser </title>
            </Head>

            <Paper shadow={'md'} px={'lg'} mb={'lg'}>
                <Container>
                    <img src='/logo.png' alt='logo' width={'70px'} />
                    <sup>
                        <strong>🌱web</strong>
                    </sup>
                </Container>
            </Paper>

            <Container>
                <Group p={'lg'} align='flex-start'>
                    <Stack align='stretch' style={{ width: isMobileDevice ? '100%' : 'auto' }}>
                        <DropImage
                            onDrop={handleDrop}
                            imgsrc={imgSrc}
                            loading={classifying} />
                        {/* {isMobileDevice && <Button
                            onClick={openCamera}
                            rightIcon={<IconCamera />}
                            variant='light'
                            size='lg'>
                            Open Camera
                        </Button>} */}
                    </Stack>
                    <FileInfo file={file} />
                </Group>

                {prediction &&
                    <Box p={'lg'}>
                        <Result
                            accuracy_score={prediction.confidence}
                            accuracy_score_rounded={(prediction.confidence * 100).toFixed(2)}
                            classifying={classifying}
                            soil_type={prediction.type}
                        />
                    </Box>
                }
                {notRecognized && <Box p={'lg'}>
                    <Title
                        order={2}
                        align="center"
                        sx={{ color: "orange" }}>
                        Hmmm🤔, seems like the image is not a soil.
                    </Title>
                    <Text align="center" size={'xl'} mt=".5rem">
                        Remove unnecessary objects on top of your soil or select a different one.
                    </Text>
                </Box>}

                <CameraCapturer
                    isMobileDevice={isMobileDevice}
                    opened={cameraIsOpen}
                    onCaptured={predictFromCamera}
                    onClose={() => setCameraIsOpen(false)}
                />
            </Container>
        </>
    );
};

export default Web;
