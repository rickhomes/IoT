// function toHexString(byteArray) {
//       return Array.from(byteArray, function(byte) {
//         return ('0' + (byte & 0xFF).toString(16)).slice(-2);
//       }).join('')
//     }

// console.log( toHexString([177,
//     197,
//     150,
//     64]))

// console.log(parseInt("B1C59640"));
// const data = [177, 197, 150, 64];
// // Create a buffer
// var buf = new ArrayBuffer(4);
// // Create a data view of it
// var view = new DataView(buf);

// // set bytes
// data.forEach(function (b, i) {
//   view.setUint8(i, b);
// });

// Read the bits as a float; note that by doing this, we're implicitly
// converting it from a 32-bit float into JavaScript's native 64-bit double
// var num = view.getFloat32(0);
// Done
// console.log(num);
// const data = [177, 197, 150, 64];

// const data = [0, 7, 148, 65];

// Buffer.from(data, "binary").readFloatLE(0)

console.log(Buffer.from([177, 197, 150, 64], "binary").readFloatLE(0));
