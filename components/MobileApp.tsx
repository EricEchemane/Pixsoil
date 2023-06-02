/* eslint-disable @next/next/no-img-element */

export default function MobileApp() {
  return (
    <div className='mobile'>
      <video
        poster='/mobile_app_poster.png'
        src='https://res.cloudinary.com/dmwjwtg1g/video/upload/v1685713960/app_demo_mmdwv2.mp4'
        muted
        autoPlay
        loop
      />
      <img className='frame' src='/android_frame.png' alt='mobile app frame' />
    </div>
  );
}
