import {Server} from 'miragejs';
import image1 from '../assets/Constants/Images/image1.com.png';
import image2 from '../assets/Constants/Images/image2.com.png';
import image3 from '../assets/Constants/Images/image3.com.png';
import image4 from '../assets/Constants/Images/image4.com.png';
import image5 from '../assets/Constants/Images/image4.com.png';
import image6 from '../assets/Constants/Images/image4.com.png';
export function makeServer() {
  let server = new Server({
    routes() {
      // this.namespace = 'api';
      this.get('/api/shoes', () => [
        {
          id: 1,
          name: 'Buffalo - Striploin',
          price: 39.11,
          photo: image1,
          // photo: '../assets/Constants/Images/image1.com.png',
          quantity: 1,
        },
        {
          id: 2,
          name: 'Bacardi Breezer - Tropical',
          price: 257.92,
          photo: image2,
          quantity: 1,
        },
        {
          id: 3,
          name: 'Wine - Gato Negro Cabernet',
          price: 51.01,
          photo: image3,
          quantity: 1,
        },
        {
          id: 4,
          name: 'Cabbage - Nappa',
          price: 250.9,
          photo: image4,
          quantity: 1,
        },
        {
          id: 5,
          name: 'Sping Loaded Cup Dispenser',
          price: 175.85,
          photo: image5,
          quantity: 1,
        },
        {
          id: 6,
          name: 'Bread - Malt',
          price: 82.61,
          photo: image6,
          quantity: 1,
        },
      ]);
    },
  });
  return server;
}
