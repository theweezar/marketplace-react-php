const toggle = () => {
  return{ 
    type: 'TOGGLE'
  };
};
const show = () => {
  return{
    type: 'SHOW'
  }
}
const hide = () => {
  return{
    type: 'HIDE'
  }
}
const all = {
  toggle: toggle,
  show: show,
  hide: hide
}
export default all;
