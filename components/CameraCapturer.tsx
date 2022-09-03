import { ActionIcon } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons";
import html2canvas from "html2canvas";
import { useEffect } from "react";

export default function CameraCapturer(props: {
    onCaptured: (dataUrl: string) => void;
    onClose: () => void;
    opened: boolean;
    isMobileDevice: boolean;
}
) {
    const openCamera = async () => {
        const camera = document.getElementById('camera');
        if (!camera) return;

        camera.onfullscreenchange = e => {
            const fullScreenExited = !document.fullscreenElement;
            if (fullScreenExited) {
                props.onClose();
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
            }).catch(error => {
                alert(`${error} is not yet supported`);
                props.onClose();
            });
    };

    useEffect(() => {
        openCamera();
        return () => {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.opened]);

    const capture = () => {
        html2canvas(document.querySelectorAll('video')[0]).then((canvas) => {
            const dataUrl = canvas.toDataURL("image/png");
            props.onCaptured(dataUrl);
            props.onClose();
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
                    bottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem'
                }}>
                <ActionIcon
                    onClick={props.onClose}
                    radius={50}
                    size='lg'
                    variant="filled">
                    <IconX size={30} />
                </ActionIcon>
                <ActionIcon
                    onClick={capture}
                    radius={50}
                    size='lg'
                    variant="filled">
                    <IconCheck size={30} />
                </ActionIcon>
            </div>
        </div>
    );
    return <></>;
}
