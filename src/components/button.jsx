// export function Button(props) {
//     return (
//         <div onClick={props.onClick} className={"btn-df " + (props.className || "")}>
//             <div className={"d-flex " + (props.endIcon ? "justify-between" : "justify-content-center")}>
//                 <div className="d-flex">
//                     {props.startIcon}
//                     <div className={"btn-value " + (props.startIcon ? "ps-2 d-flex justify-content-center" : "")}>
//                         {props.value || "Button"}
//                     </div>
//                 </div>
//                 <div className="end-icon d-flex justify-content-center align-items-center">
//                     {props.endIcon}
//                 </div>
//             </div>
//         </div>
//     );
// }

export function Button({...props}) {
    props.className = 'btn-df ' + (props.className || '');
    return (
        <button {...props}>
            
        </button>
    );
}

export function Button3E({...props}) {
    props.className = 'btn-df ' + (props.className || '');
    const children = props.children || [];
    return (
        <button {...props}>
            <div className={"d-flex " + (children[2] ? "justify-between" : "justify-content-center")}>
                <div className="d-flex">
                    {children[0]}
                    <div className={"btn-value " + (children[0] ? "ps-2 d-flex justify-content-center" : "")}>
                        {children[1] || "Button"}
                    </div>
                </div>
                <div className="end-icon d-flex justify-content-center align-items-center">
                    {children[2]}
                </div>
            </div>
        </button>
    );
}