/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function MobileApp() {
    return (
        <div className='mobile'>
            <video src="https://res.cloudinary.com/dmwjwtg1g/video/upload/v1659630588/samples/app_demo_a6evsn.mp4" muted autoPlay loop></video>
            <img className='frame' src="/android_frame.png" alt="mobile app frame" />
        </div>
    );
}
