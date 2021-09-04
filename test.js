// console.log(parseInt("B1C59640"));
// const data = [177, 197, 150, 64];
const data = [240, 180, 151, 65];
// Create a buffer
var buf = new ArrayBuffer(4);
// Create a data view of it
var view = new DataView(buf);

// set bytes
data.forEach(function (b, i) {
  view.setUint8(i, b);
});

var num = view.getFloat32(0, true);

console.log(num);
