export const getGpsCoordinates = async () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.watchPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      },
    );
  });
