import React, { useState, useEffect } from 'react';
import {MIDIVal, MIDIValInput} from "@midival/core"

interface MidiListenerProps {
    selectedDeviceIdx: number | null;
    setSelectedDeviceIdx: (selectedDeviceIdx: number | null) => void;
}

const MidiListener: React.FC<MidiListenerProps> = ( {selectedDeviceIdx, setSelectedDeviceIdx }) => {
    const [MIDIDevices, setMIDIDevices] = useState<Record<string, number>>({});

    // Store connected MIDI devices in Object
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
        <p>MIDI Device: {(selectedDeviceIdx !== null) ? Object.keys(MIDIDevices).at(selectedDeviceIdx) : "No Device Selected"}</p>
        <p>MIDI id: {(selectedDeviceIdx !== null) ? selectedDeviceIdx : "No Device Selected"}</p>
        
        <select onChange={event => setSelectedDeviceIdx(MIDIDevices[event.target.value])}>
            {Object.keys(MIDIDevices).map((device, index) => (
                <option key={index} value={device}>
                    {device}
                </option>
            ))}
        </select>
        
    </div>
}

export default MidiListener;