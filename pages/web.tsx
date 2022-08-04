/* eslint-disable @next/next/no-img-element */
import { DropImage } from 'components/dropzone';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { labels } from 'model/labels';

const Web: NextPage = () => {
    const [imgSrc, setImgSrc] = useState<string>();

    async function handleDrop(files: File[]) {
        const file = files[0];
        if (!file) return;
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
        console.log(labels[index], max);
    }

    return (
        <>
            <Head>
                <title> Pixsoil Web </title>
            </Head>
            <DropImage onDrop={handleDrop} />
            {imgSrc && <img
                id='image'
                src={imgSrc}
                alt="soil image"
                height={"256"}
                width={"256"} />}
        </>
    );
};

export default Web;
