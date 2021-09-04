function decodeUplink(input) {
  // var bytes=input.bytes
  var T = [input.bytes[3], input.bytes[4], input.bytes[5], input.bytes[6]];

  var PH_CALC = [
    input.bytes[8],
    input.bytes[9],
    input.bytes[10],
    input.bytes[11],
  ];
  // var PH=Array.from(bytes[6].toString()).map(Number)[1]

  function arrayBytesToDouble(array) {
    // Create a buffer
    var buf = new ArrayBuffer(4);
    // Create a data view of it
    var view = new DataView(buf);

    // set bytes
    array.forEach(function (b, i) {
      view.setUint8(i, b);
    });

    var num = view.getFloat32(0, true);
    return num;
  }

  return {
    data: {
      main: input,
      temp: arrayBytesToDouble(T),
      pH: arrayBytesToDouble(PH_CALC),
    },
  };
}
