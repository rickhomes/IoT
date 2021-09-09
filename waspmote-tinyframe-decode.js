function decodeUplink(input) {
 
  var TEMP = [input.bytes[3], input.bytes[4], input.bytes[5], input.bytes[6]];//134

  var PH_CALC = [
    input.bytes[8],
    input.bytes[9],
    input.bytes[10],
    input.bytes[11],
  ];//130
 var EC=[
    input.bytes[13],
    input.bytes[14],
    input.bytes[15],
    input.bytes[16],
  ]//133

 var DO=[
    input.bytes[18],
    input.bytes[19],
    input.bytes[20],
    input.bytes[21],
  ]//132

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
      temp: arrayBytesToDouble(TEMP),
      pH: arrayBytesToDouble(PH_CALC),
      ec:arrayBytesToDouble(EC),
      dO:arrayBytesToDouble(DO),
      field1:arrayBytesToDouble(TEMP),
      field2:arrayBytesToDouble(PH_CALC),
      field3:arrayBytesToDouble(EC),
      field4:arrayBytesToDouble(DO)
      
    },
  };
}

