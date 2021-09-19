import { FaCheck, FaCircle } from 'react-icons/fa';
import { useState } from 'react';

export function CheckBox({...props}) {
    props.className = "d-flex check-box-df " + (props.className || "");

    const [checked, setChecked] = useState(props.checked || false);
    
    return (
        <div {...props}>
            <label htmlFor={props.dataid} className="d-flex align-items-center pointer">
                <input type="checkbox" name="checkbox" id={props.dataid} onChange={() => setChecked(!checked)} />
                <div className={"checkbox-square me-1 d-flex align-items-center justify-content-center " + (checked ? "active" : "")}>
                    <FaCheck/>
                </div>
                {props.children}
            </label>
        </div>
    );
}

export function SliderTrack({...props}) {
    props.className = "slider-tracking-wrapper-df position-relative " + (props.className || "");

    return (
        <div {...props}>
            <div className="tracking-bar w-100 rounded-lg">
                <div className="tracking-start-pointer">
                    <FaCircle/>
                    <div className="text-center tracking-flag">1</div>
                </div>
                <div className="tracking-end-pointer">
                    <FaCircle/>
                    <div className="text-center tracking-flag">7</div>
                </div>
            </div>
        </div>
    );
}