export function Option(props) {
    return(
        <li className="nav-item" key={props.setKey}>
            {props.children}
        </li>
    )
}

export function Select(props) {
    return (
        <div className={props.className}>
            {props.children[0]}
            <div className="item-list position-relative">
                <div className="position-absolute ul-container">
                    <ul className="nav flex-column text-white">
                        {props.children.slice(1,)}
                    </ul>
                </div>
            </div>
        </div>
    );
}