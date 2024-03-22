'use client'

import React, { useEffect } from 'react';
import {MIDIVal, MIDIValInput} from "@midival/core"
import { access } from 'fs';

//let MIDIDevices: string[];

// Received an error the first time I compiled the MIDI object
const MidiListener: React.FC = () => {
    useEffect(() => {
        if (MIDIVal) {
            MIDIVal.connect().then((accessObject: any) => {
                if (!accessObject.inputs) {
                    console.warn("No MIDI inputs detected")
                    return;
                }
            });
        }
    }, []);

    return <div><p>Learning!</p></div>
}

export default MidiListener;