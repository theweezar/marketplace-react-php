export function Button(props) {
    var startIcon = !props.startIcon || <img className='item-start-icon' alt="" srcSet={props.startIcon} />;
    var endIcon = !props.endIcon || (
        <div className="item-end-icon d-flex justify-content-center align-items-center">
            {props.endIcon}
        </div>
    );
    
    return (
        <div className={props.className ? 'item-dropdown ' + props.className : 'item-dropdown'}>
            <div className={"item-select d-flex " + (props.endIcon ? 'justify-between':'justify-content-center')}>
                <div className="d-flex">
                    {startIcon}
                    <div className={props.startIcon ? "item-name ps-2 d-flex justify-content-center":""}>
                        {props.name ? props.name : 'Button'}
                    </div>
                </div>
                {endIcon}
            </div>
        </div>
    );
}

function Option(props) {
    return(
        <div></div>
    )
}

export function ButtonDropDown(props) {
    var selected = props.options[props.selectedIndex];

    var displayOptions = () => {
        if (Array.isArray(props.options)) {
            var options = props.options;
            return options.map(option => {
                return (<Option/>);
            });
        }
    };

    return (
        <div className="position-relative">
            <Button name={selected.name} startIcon={selected.startIcon} endIcon={selected.endIcon} className={props.className}/>
            {displayOptions()}
        </div>
    );
}