// export function Option(props) {
//     return(
        // <li className="nav-item" key={props.setKey}>
        //     {props.children}
        // </li>
//     )
// }

// export function Select(props) {
//     return (
//         <div className={props.className}>
//             {props.children[0]}
//             <div className="item-list position-relative">
//                 <div className="position-absolute ul-container">
//                     <ul className="nav flex-column text-white">
//                         {props.children.slice(1,)}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

export function Item({...props}) {
    props.className = 'nav-item ' + (props.className || '');
    return (
        <li {...props}>
            {props.children}
        </li>
    );
}

export function ListViewColumn({...props}) {
    props.className = 'position-relative listview-container ' + (props.className || '');
    return (
        <div {...props}>
            <ul className="nav flex-column">
                {props.children}
            </ul>
        </div>
    )
}

export function ListViewColumnAbsolute({...props}) {
    props.className = 'position-relative listview-container ' + (props.className || '');
    return (
        <div {...props}>
            <div className='position-absolute'>
                <ul className='nav flex-column'>
                    {props.children}
                </ul>
            </div>
        </div>
    )
}