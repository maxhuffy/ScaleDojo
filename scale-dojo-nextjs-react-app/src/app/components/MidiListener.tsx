'use client'

import React, { useState, useEffect } from 'react';
import {MIDIVal, MIDIValInput} from "@midival/core"
import { access } from 'fs';


// Received an error the first time I compiled the MIDI object
const MidiListener: React.FC = () => {
    const [MIDIDevices, setMIDIDevices] = useState<string[]>([]);

    // Get connected MIDI devices
    useEffect(() => {
        if (MIDIVal) {
            MIDIVal.connect().then((accessObject: any) => {
                if (!accessObject.inputs) {
                    console.warn("No MIDI inputs detected")
                    return;
                }
                
                setMIDIDevices([]);
                accessObject.inputs.forEach( function (element: any) {
                    setMIDIDevices(prevDevices => [...prevDevices, element.name]);
                });

            });
        }
    }, []);

    // Log the MIDI device options when the items change
    useEffect(() => {
        if (MIDIDevices.length != 0)
            console.log(MIDIDevices);
    }, [MIDIDevices]);

    

    return <div><p>Learning!</p></div>
}

export default MidiListener;