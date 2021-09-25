const read = () => {
  return {
    type: "READ",
  };
};
const write = () => {
  return {
    type: "WRITE",
  };
};

export default {
    read: read,
    write: write,
};
