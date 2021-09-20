import { FaCheck, FaCircle, FaAngleDown } from 'react-icons/fa';
import { Button3E } from '../components/Button';
import { ListViewColumnAbsolute, Item } from '../components/List';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setCurrentDropDownAction } from '../scripts/redux/actions/mainAction';

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

export function DropDownMenu3E({...props}) {
    const options = props.options;
    const name = props.name;

    const [selectedIndex, setSelectedIndex] = useState(props.index || 0);
    const currentDropdown = useSelector(state => state.currentDropdown);
    const dispatch = useDispatch();

    return (
        <div className={props.className}>
            <Button3E className="btn-selected w-100" onClick={() => dispatch(setCurrentDropDownAction(currentDropdown !== name ? name:""))}>
                {options[selectedIndex].start}
                {options[selectedIndex].value}
                <FaAngleDown />
            </Button3E>
            <ListViewColumnAbsolute className={"list-option " + (name !== currentDropdown ? "d-none":"")}>
                {options.map((option, index) => {
                    return (
                        <Item key={option.id}>
                            <Button3E className="option w-100" onClick={() => {
                                setSelectedIndex(index);
                                dispatch(setCurrentDropDownAction(""));
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