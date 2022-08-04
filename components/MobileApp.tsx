/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function MobileApp() {
    return (
        <div className='mobile'>
            <video src="/app_demo.mp4" muted autoPlay loop></video>
            <img className='frame' src="/android_frame.png" alt="mobile app frame" />
        </div>
    );
}
