const makeRandomString = (startStr, length, isOnlyNumber) => {
  let charSet = isOnlyNumber
    ? "0123456789"
    : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  let randomPosition = "";
  for (let i = 0; i < length; i++) {
    randomPosition = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPosition, randomPosition + 1);
  }
  return startStr + randomString;
};
const generateItem = () => {
  let modal = {
    txHash: makeRandomString("0x", 18).toLowerCase(),
    action: "Buy Axie",
    block: makeRandomString("", 7, true),
    age: "28 secs ago",
    status: "success",
    from: makeRandomString("ronin:", 20),
    to: "Axie Contract",
    value: Math.floor(Math.random() * 100 - 1),
  };
  return modal;
};
const generateArrayofItems = ( numberofRecords ) => {
  let records = [];
  for (let i = 0; i < numberofRecords; i++) {
    records.push(generateItem());
  }
  return records;
};

const calcNumberofPage = ( numberofRecords, perPage ) => {
  return perPage === 0 ? 0 : Math.ceil(numberofRecords / perPage);
}

const read = () => {
  return {
    type: "READ_TABLE",
  };
};
const write = (data) => {
  return {
    type: "WRITE_TABLE",
    data: data,
  };
};

export default {
  read: read,
  write: write,
  generate: generateArrayofItems,
  calcNoP : calcNumberofPage,
};
