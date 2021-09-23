import { useState } from "react";
import { useSelector } from "react-redux";
import { GiChaingun } from "react-icons/gi";

import { Button } from "../components/Button";
import { ListViewColumn, Item } from "../components/List";
import { CheckBox, SliderTrack } from "../components/Input";
import { randomColorHex, randomString } from "../scripts/randomHelpers";

function FilterTab({...props}) {
    props.className = 'd-flex ' + (props.className || '');

    const [filterTab, setFilterTab] = useState(1);
    
    return (
        <div {...props}>
            <Button className={"w-100 " + (filterTab === 1 ? "active":"")} onClick={() => setFilterTab(1)}>
                General
            </Button>
            <Button className={"w-100 " + (filterTab === 2 ? "active":"")} onClick={() => setFilterTab(2)}>
                Parts
            </Button>
            <Button className={"w-100 " + (filterTab === 3 ? "active":"")} onClick={() => setFilterTab(3)}>
                Stat
            </Button>
        </div>
    );
}

export function Filter() {
    const isFilterOpen = useSelector(state => state.isFilterOpen);
    const loopCheckbox = (length) => {
        var array = Array(length).fill(undefined);
        return array.map(() => {
            const id = randomString(5);
            return (
                <Item key={id} className="mb-2">
                    <CheckBox dataid={id}>
                        <GiChaingun style={{color: randomColorHex()}}/>
                        <span className="ms-1">{id}</span>
                    </CheckBox>
                </Item>
            );
        });
    }

    return (
        <div className="filter-wrapper col-12 text-white d-none d-md-block">
            <div className="d-flex justify-between">
                <div className="filter-title">
                    Filter (0)
                </div>
                <div>
                    <Button className="btn-clear-filter">
                        Clear filter
                    </Button>
                </div>
            </div>
            <FilterTab className="mt-1 mt-md-3 filter-type"/>
            <div className="filter-component filter-class">
                <div className="title">
                    class
                </div>
                <div className="row m-0">
                    <ListViewColumn className="col-6 ps-0">
                        {loopCheckbox(3)}
                    </ListViewColumn>
                    <ListViewColumn className="col-6 ps-0">
                        {loopCheckbox(2)}
                    </ListViewColumn>
                </div>
            </div>
            <div className="filter-component filter-stage">
                <div className="title">
                    stage
                </div>
                <div className="row m-0">
                    <ListViewColumn className="col-6 ps-0">
                        {loopCheckbox(1)}
                    </ListViewColumn>
                    <ListViewColumn className="col-6 ps-0">
                        {loopCheckbox(1)}
                    </ListViewColumn>
                </div>
            </div>
            <div className="filter-component filter-breed-count">
                <div className="title">
                    breed count
                </div>
                <div className="">
                    <SliderTrack/>
                </div>
            </div>
        </div>
    );
}
