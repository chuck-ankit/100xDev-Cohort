import { useState, useRef } from "react";
import { Button } from "./button";

export function Otp() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    const [disabled, setDisabled] = useState(true);

    return (
        <div className="">
            <div className=" flex justify-center">
            <SubOtpBox reference={ref1} onDone={() => ref2.current.focus()} disabled={disabled} />
            <SubOtpBox reference={ref2} onDone={() => ref3.current.focus()} disabled={disabled} />
            <SubOtpBox reference={ref3} onDone={() => ref4.current.focus()} disabled={disabled} />
            <SubOtpBox reference={ref4} onDone={() => ref5.current.focus()} disabled={disabled} />
            <SubOtpBox reference={ref5} onDone={() => ref6.current.focus()} disabled={disabled} />
            <SubOtpBox reference={ref6} onDone={() => setDisabled(false)} disabled={disabled} />
            </div>
            <Button disabled={disabled}>Sing Up</Button>
        </div>
        
    );
}

function SubOtpBox({ reference, onDone, disabled }) {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        if (e.target.value.length === 1) {
            onDone();
        }
    };

    return (
        <div>
            <input 
                ref={reference}
                type="text" 
                maxLength="1"
                value={value}
                onChange={handleChange}
                className="w-11 h-13 p-2 text-center text-white bg-blue-500 border-2 border-gray-400 rounded-2xl m-1 px-3 mb-4" 
            />
            <br />
        </div>
    );
}

