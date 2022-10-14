export const accelerometerSensor = () => {
  if (window.Accelerometer) {
    const sensor = new Accelerometer({ frequency: 60 });

    sensor.addEventListener('reading', () => {});

    sensor.start();

    return {
      x: sensor.x,
      y: sensor.y,
      z: sensor.z,
      activated: sensor.activated,
    };
  }

  return null;
};
