function toHexString(byteArray) {
  return Array.from(byteArray, function (byte) {
    return ("0" + (byte & 0xff).toString(16)).slice(-2);
  }).join("");
}

console.log(parseInt(toHexString([177, 197, 150, 64])));

[177, 197, 150, 64];
