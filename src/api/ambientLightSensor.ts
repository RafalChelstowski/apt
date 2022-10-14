export const getAmbientLightSensorReadings = () => {
  if (window.AmbientLightSensor) {
    const sensor = new AmbientLightSensor();
    sensor.start();
  }
};
