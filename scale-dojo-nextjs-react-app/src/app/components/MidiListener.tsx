'use client'

import React, { useState, useEffect } from 'react';
import {MIDIVal, MIDIValInput} from "@midival/core"

// Received an error the first time I compiled the MIDI object
const MidiListener: React.FC = () => {
    const [MIDIDevices, setMIDIDevices] = useState<Record<string, number>>({});
    const [selectedDeviceString, setSelectedDevice] = useState<string | null>(null);

    // Get connected MIDI devices
    useEffect(() => {
        if (MIDIVal) {
            MIDIVal.connect().then((accessObject: any) => {
                if (!accessObject.inputs) {
                    console.warn("No MIDI inputs detected")
                    return;
                }
                
                setMIDIDevices({});
                let value: number = 0;
                accessObject.inputs.forEach( function (element: any) {
                    let updatedValue: object = {};
                    let key: string = element.name;
                    updatedValue = {[key]:value};
                    setMIDIDevices(MIDIDevices => ({
                        ...MIDIDevices,
                        ...updatedValue
                    }));
                    value++;
                });

            });
        }
    }, []);

    // Log the MIDI device options when the items change
    useEffect(() => {
        if (!(Object.keys(MIDIDevices).length === 0))
            console.log(MIDIDevices);
    }, [MIDIDevices]);

    return <div>
        <p>MIDI Device: {(selectedDeviceString !== null) ? selectedDeviceString : "No Device Selected"}</p>
        <p>MIDI id: {(selectedDeviceString !== null) ? MIDIDevices[selectedDeviceString] : "No Device Selected"}</p>
        
        <select onChange={event => setSelectedDevice(event.target.value)}>
            {Object.keys(MIDIDevices).map((device, index) => (
                <option key={index} value={device}>
                    {device}
                </option>
            ))}
        </select>
        
    </div>
}

export default MidiListener;