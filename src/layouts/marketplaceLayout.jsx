import { MarketplaceHeader } from "./MarketplaceHeader";
import { RightSideBar } from "./RightSideBar";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentDropDownAction } from '../scripts/redux/actions/mainAction';

function BlurBackground({...props}) {
    const isSideBarOpen = useSelector(state => state.isSideBarOpen);
    const dispatch = useDispatch();
    const toggle = () => {
        return {
            type: !isSideBarOpen
        };
    }
    return (
        <div className={"blur-bg " + (isSideBarOpen ? "":"d-none")} onClick={() => dispatch(toggle())}></div>
    );
}

function Veil() {
    return (
        <div className="veil d-none"></div>
    );
}

export function MarketplaceLayout({ children }) {
    const dispatch = useDispatch();
    const currentDropdown = useSelector(state => state.currentDropdown);

    const dropdownHandle = () => {
        if (currentDropdown !== "") {
            dispatch(setCurrentDropDownAction(""));
        }
    }

    return (
        <div className="layout-wrapper position-relative" onClick={dropdownHandle}>
            <BlurBackground />
            <RightSideBar />
            <Veil/>
            <MarketplaceHeader />
            {children}
        </div>
    );
}
