const read = () => {
    return {
      type: "READ",
    };
  };
  const write = ({keyid,name,route}) => {
    return {
      type: "WRITE",
      keyid,
      name,
      route,
    // {keyid: data.keyid,
    // name: data.name,
    // route: data.route}
    };
  };
  
  export default {
      read: read,
      write: write,
  };
  