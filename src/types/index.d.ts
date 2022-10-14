export {};

declare global {
  interface Window {
    ReactQueryClientContext: never;
    AmbientLightSensor: AmbientLightSensor;
    Accelerometer: Accelerometer;
  }
}
