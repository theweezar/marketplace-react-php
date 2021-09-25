import { useState, useRef, useEffect } from 'react';
import { FaCheck, FaCircle, FaAngleDown } from 'react-icons/fa';

import { Button3E } from '../components/Button';
import { ListViewColumnAbsolute, Item } from '../components/List';

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

export function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                console.log(ref);    
                handler();
            };
            document.addEventListener("mousedown", listener);
            // document.addEventListener("touchstart", listener);
            // return clean up function below
            return () => {
                document.removeEventListener("mousedown", listener);
                // document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}

export function DropDownMenu3E({...props}) {
    const options = props.options;
    
    const [selectedIndex, setSelectedIndex] = useState(props.index || 0);
    const [dropDown, setDropDown] = useState(false)
    const ref = useRef();
    
    useOnClickOutside(ref, () => setDropDown(false));

    return (
        <div className={props.className} ref={ref}>
            <Button3E className="btn-selected w-100" onClick={() => setDropDown(!dropDown)}>
                {options[selectedIndex].start}
                {options[selectedIndex].value}
                <FaAngleDown />
            </Button3E>
            <ListViewColumnAbsolute className={"list-option " + (!dropDown ? "d-none":"")}>
                {options.map((option, index) => {
                    return (
                        <Item key={option.id}>
                            <Button3E className="option w-100" onClick={() => {
                                setSelectedIndex(index);
                                setDropDown(false);
                            }}>
                                <></>
                                <span>{option.value}</span>
                                <></>
                            </Button3E>
                        </Item>
                    );
                })}
            </ListViewColumnAbsolute>
        </div>
    )
}