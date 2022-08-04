/* eslint-disable @next/next/no-img-element */
import { DropImage } from 'components/dropzone';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { labels } from 'model/labels';
import { Box, Group, Paper, Stack } from '@mantine/core';
import FileInfo from 'components/FileInfo';
import Result from 'components/Results';

const Web: NextPage = () => {
    const [imgSrc, setImgSrc] = useState<string>();
    const [file, setFile] = useState<File>();
    const [classifying, setClassifying] = useState(false);
    const [prediction, setPrediction] = useState<{
        type: string;
        confidence: number;
    }>();

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

        const model = await tf.loadLayersModel('/tfjs_files/model.json');
        const imageTensor = tf.browser.fromPixels(img)
            .expandDims(0)
            .expandDims(-1)
            .div(255.0)
            .reshape([-1, 256, 256, 3]);
        const pred: any = model.predict(imageTensor);
        const results = await pred.data();
        const max = Math.max(...results);
        const index = results.findIndex((r: any) => r === max);

        setPrediction({ confidence: max, type: labels[index] });
        setClassifying(false);
    }

    return (
        <>
            <Head>
                <title> Pixsoil Web </title>
            </Head>

            <Paper shadow={'md'} px={'lg'} mb={'lg'}>
                <img src='/logo.png' alt='logo' width={'100px'} />
                <sup><strong>web</strong></sup>
            </Paper>

            <Group p={'lg'}>
                <DropImage onDrop={handleDrop} imgsrc={imgSrc} />
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
        </>
    );
};

export default Web;
