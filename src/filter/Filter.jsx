import { Button } from "../components/Button";
import { ListViewColumn, Item } from "../components/List";
import { CheckBox, SliderTrack } from "../components/Input";
import { GiChaingun } from "react-icons/gi";
import { randomColorHex, randomString } from "../script/randomHelpers";

export function Filter() {

    const loopCheckbox = (length) => {
        var array = Array(length).fill(undefined);
        return array.map(() => {
            const id = randomString(8);
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
        <div className="filter-wrapper col-12 col-lg-3 text-white d-none d-lg-block">
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
            <div className="d-flex mt-1 filter-type">
                <Button className="w-100 active">
                    General
                </Button>
                <Button className="w-100">
                    Parts
                </Button>
                <Button className="w-100">
                    Stat
                </Button>
            </div>
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
