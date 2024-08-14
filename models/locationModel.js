class locationModel {
    constructor(location) {
      this.coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        accuracy: location.coords.accuracy,
        altitude: location.coords.altitude,
        altitudeAccuracy: location.coords.altitudeAccuracy,
        heading: location.coords.heading,
        speed: location.coords.speed,
      };
      this.timestamp = location.timestamp;
    }
  
    static fromFirestore(data) {
      return new locationModel({
        coords: data.coords,
        timestamp: data.timestamp,
      });
    }
  
    toFirestore() {
      return {
        coords: this.coords,
        timestamp: this.timestamp,
      };
    }
  }
  
  export default locationModel;
  