export function setCurrentDropDownAction(name) {
    return {
        type: name
    };
}

export function sideBarAction(currentState) {
    return {
        type: !currentState
    };
}