import React, { useEffect, useRef, useState} from "react";
import { MIDIVal, MIDIValInput } from "@midival/core";
import { access } from "fs";

interface MidiStringStreamProps {
    selectedDeviceIdx: number | null;
}

const MidiStringStream: React.FC<MidiStringStreamProps> = ({selectedDeviceIdx}) => {
    const inputRef = useRef<MIDIValInput | null>(null);
    const [textboxText, setTextboxText] = useState('No MIDI data yet...');

    useEffect(() => {
        if (selectedDeviceIdx !== null) {
            MIDIVal.connect().then(access => {
                inputRef.current = new MIDIValInput(access.inputs[selectedDeviceIdx]);
                inputRef.current.onAllNoteOn(message => {
                    const timestamp: string = performance.now().toFixed(1).toString();
                    setTextboxText(prevTextboxText => `Timestamp: ${timestamp}, Note:${message.note}` + '\n' + prevTextboxText);
                });
            });
        }

        return () => {
            if (inputRef.current) {
                inputRef.current.disconnect();
            }
        };
    }, [selectedDeviceIdx]);

    
    return <div>
        <textarea readOnly value={textboxText}></textarea>
    </div>
}

export default MidiStringStream;