/* eslint-disable @next/next/no-img-element */

export default function MobileApp() {
  return (
    <div className='mobile'>
      <video
        poster='/mobile_app_poster.png'
        // src='https://res.cloudinary.com/dmwjwtg1g/video/upload/v1659630588/samples/app_demo_a6evsn.mp4'
        src='/app_demo.mp4'
        muted
        autoPlay
        loop
      />
      <img className='frame' src='/android_frame.png' alt='mobile app frame' />
    </div>
  );
}
