import { MarketplaceHeader } from "./MarketplaceHeader";
import { RightSideBar } from "./RightSideBar";
import { useSelector, useDispatch } from "react-redux";

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
    return (
        <div className="layout-wrapper position-relative">
            <BlurBackground />
            <RightSideBar />
            <Veil/>
            <MarketplaceHeader />
            {children}
        </div>
    );
}
