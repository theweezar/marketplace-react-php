function makeRandomString(startStr, length, isOnlyNumber) {
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
}
function generateItem() {
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
}
function generateArrayofItems(numberofItem) {
  let records = [];
  for (let i = 0; i < numberofItem; i++) {
    records.push(generateItem());
  }
  return records;
}

const read = () => {
  return {
    type: "READ",
  };
};
const write = (data) => {
  return {
    type: "WRITE",
    data: data,
  };
};
const generate = (n) => {
    return {
      type: "WRITE",
      data: generateArrayofItems(n),
    };
  };

export default {
  read: read,
  write: write,
  generate: generate
};
