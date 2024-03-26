import React, { useEffect, useRef} from "react";
import { MIDIVal, MIDIValInput } from "@midival/core";
import { access } from "fs";

interface MidiStringStreamProps {
    selectedDeviceIdx: number | null;
}

const MidiStringStream: React.FC<MidiStringStreamProps> = ({selectedDeviceIdx}) => {
    const inputRef = useRef<MIDIValInput | null>(null);

    useEffect(() => {
        if (selectedDeviceIdx !== null) {
            MIDIVal.connect().then(access => {
                inputRef.current = new MIDIValInput(access.inputs[selectedDeviceIdx]);
                inputRef.current.onAllNoteOn(message => {
                    console.log("Note On", message);
                    
                    const timestamp: any = performance.now();
                    console.log(timestamp);
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
        <p>The midi device ID is: {selectedDeviceIdx}</p>
    </div>
}

export default MidiStringStream;