import Leaflet from 'leaflet';

import mapMarkerImg from '../assets/imgs/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 3]
  });

export default mapIcon;