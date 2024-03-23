'use client'

import React, { useEffect, useState } from "react";
import MidiListener from "./MidiListener";

const MidiParent: React.FC = () => {
    const [selectedDeviceIdx, setSelectedDevice] = useState<number | null>(0);

    useEffect(() => {
        console.log("Selected device idx is: ", selectedDeviceIdx);
    }, [selectedDeviceIdx]);

    return <div>
        <MidiListener selectedDeviceIdx={selectedDeviceIdx} setSelectedDeviceIdx={setSelectedDevice}></MidiListener>
    </div>
}

export default MidiParent;