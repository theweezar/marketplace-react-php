const read = () => {
    return {
      type: "READ",
    };
  };
  const write = (data) => {
    return {
      type: "WRITE",
      
    keyid: data.keyid,
    name: data.name,
    route: data.route
    };
  };
  
  export default {
      read: read,
      write: write,
  };
  