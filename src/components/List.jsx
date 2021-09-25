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
            <div className='position-absolute w-100 z-1'>
                <ul className='nav flex-column'>
                    {props.children}
                </ul>
            </div>
        </div>
    )
}