export function Button(props) {
    return (
        <div onClick={props.onClick} className={"btn-df " + (props.className || "")}>
            <div className={"d-flex " + (props.endIcon ? "justify-between" : "justify-content-center")}>
                <div className="d-flex">
                    {props.startIcon}
                    <div className={"btn-value " + (props.startIcon ? "ps-2 d-flex justify-content-center" : "")}>
                        {props.value || "Button"}
                    </div>
                </div>
                <div className="end-icon d-flex justify-content-center align-items-center">
                    {props.endIcon}
                </div>
            </div>
        </div>
    );
}