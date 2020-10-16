import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../assets/imgs/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

import '../styles/pages/orphanages-map.css';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(res => {
      setOrphanages(res.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="" />

          <h2>Escolha um orfanato no mapa.</h2>
          <p>Muitas crianças estão esperando a sua visita! :)</p>


        </header>

        <footer>
          <strong>
            Porto Alegre
          </strong>
          <span>
            Rio Grande do Sul
          </span>
        </footer>
      </aside>

      <Map center={[ -30.0642248, -51.2108403 ]}
      zoom={13} style={{ width:'100%', height:'100%' }}>
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        
        {orphanages.map(orphanage => {
          console.log(orphanage);
          return (
            <Marker 
              icon={mapIcon}
              position={[ orphanage.latitude, orphanage.longitude ]}
              key={orphanage.id}>
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                <span>{ orphanage.name }</span>
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF"></FiArrowRight>
                </Link>
              </Popup>
          </Marker>
          );
        })}

      </Map>
      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={30} color="#fff"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;
