import { useEffect, useState } from "react";

export default function useIsMobileDevice() {
    const [isMobileDevice, setIsMobileDevice] = useState(true);
    useEffect(() => {
        setIsMobileDevice(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }, []);
    return isMobileDevice;
}
