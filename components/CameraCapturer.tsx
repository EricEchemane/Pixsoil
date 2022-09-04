import { ActionIcon } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons";
import html2canvas from "html2canvas";
import { useEffect, useRef } from "react";

export default function CameraCapturer(props: {
    onCaptured: (dataUrl: string) => void;
    onClose: () => void;
    opened: boolean;
    isMobileDevice: boolean;
}
) {
    const stream = useRef<MediaStream>();

    const closeCamera = () => {
        stream.current?.getTracks().forEach(function (track) {
            track.stop();
        });
        props.onClose();
    };

    const openCamera = async () => {
        const camera = document.getElementById('camera');
        if (!camera) return;

        camera.onfullscreenchange = e => {
            const fullScreenExited = !document.fullscreenElement;
            if (fullScreenExited) {
                closeCamera();
            }
        };

        if (!document.fullscreenElement)
            await camera.requestFullscreen();

        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                facingMode: 'environment'
            }
        })
            .then(mediaStream => {
                const videoElement = document.querySelector('video');
                if (!videoElement) return;
                videoElement.srcObject = mediaStream;
                stream.current = mediaStream;
            }).catch(error => {
                alert(`${error} is not yet supported`);
                closeCamera();
            });
    };

    useEffect(() => {
        openCamera();
        return () => {
            if (document.fullscreenElement) {
                closeCamera();
                document.exitFullscreen();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.opened]);

    const capture = () => {
        html2canvas(document.querySelectorAll('video')[0]).then((canvas) => {
            const dataUrl = canvas.toDataURL("image/png");
            props.onCaptured(dataUrl);
            closeCamera();
        });
    };

    if (props.opened) return (
        <div id='camera' style={{
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            top: 0,
        }}>
            <video autoPlay style={{
                width: '100%',
                transform: !props.isMobileDevice ? 'rotateY(180deg)' : ''
            }} />
            <div
                style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: '5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '3rem'
                }}>
                <ActionIcon
                    onClick={props.onClose}
                    radius={50}
                    size='xl'
                    variant="filled">
                    <IconX size={30} />
                </ActionIcon>
                <ActionIcon
                    onClick={capture}
                    radius={50}
                    size='xl'
                    variant="filled">
                    <IconCheck size={30} />
                </ActionIcon>
            </div>
        </div>
    );
    return <></>;
}
