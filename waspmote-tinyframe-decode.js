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

function getSensorValues(frameBytes, sensorIds) {
  const sensors = {
    134: "Temperature",
    130: "PH_CALC",
    133: "EC",
    132: "DO",
  };
  const sensorValues = {};

  for (let i = 4; i < frameBytes.length; i += 5) {
    const sensorId = frameBytes[i];

    if (i + 4 < frameBytes.length) {
      const valueBytes = frameBytes.slice(i + 1, i + 5);
      const sensorValue = arrayBytesToDouble(valueBytes);

      if (sensorIds.includes(sensorId)) {
        sensorValues[sensors[sensorId]] = sensorValue;
      }
    }
  }

  return sensorValues;
}

function getThingsSpeakValues(sensorValues) {
  const thingsSpeak = {
    Temperature: "field1",
    PH_CALC: "field2",
    EC: "field3",
    DO: "field4",
  };
  const thingsSpeakValues = {};

  for (const sensorName in sensorValues) {
    const sensorValue = sensorValues[sensorName];
    const thingsSpeakField = thingsSpeak[sensorName];

    thingsSpeakValues[thingsSpeakField] = sensorValue;
  }
  return thingsSpeakValues;
}

function decodeUplink(input) {
  const frameBytes = input.bytes;
  const sensorIds = [132, 133, 134, 130];

  const sensorValues = getSensorValues(frameBytes, sensorIds);
  const thinksSpeakValues = getThingsSpeakValues(sensorValues);

  return {
    data: {
      main: input,
      ...sensorValues,
      ...thinksSpeakValues,
    },
  };
}
