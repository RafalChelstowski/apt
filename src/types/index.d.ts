export {};

declare global {
  interface Window {
    ReactQueryClientContext: never;
  }
}
