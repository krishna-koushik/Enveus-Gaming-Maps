import { Landmarks } from '../firebase';
import { v4 } from 'uuid';

class LandmarkService {
  static async addLandmark(position, icon, message) {
    return Landmarks.doc().set({
      x: position.lng,
      y: position.lat,
      icon: icon.id,
      message,
      id: v4(),
    });
  }

  static async updateLandmark(landmark, marker) {
    const location = marker.getLatLng();
    return await Landmarks.where('id', '==', landmark.id).onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        doc.ref.update({
          x: location.lng,
          y: location.lat,
        });
      });
    });
  }
}

export default LandmarkService;