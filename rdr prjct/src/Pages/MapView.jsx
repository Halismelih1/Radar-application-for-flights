import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useSelector } from 'react-redux'

const MapView = ({setShowDetail, openDetail}) => {

  const state = useSelector((store)=>store);

  var myIcon = L.icon({
    iconUrl: 'https://www.pngall.com/wp-content/uploads/2/Aircraft.png',
    iconSize: [14, 14],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
   
});
  return (
    <div>
      
      <MapContainer center={[39.146078, 34.159499]} zoom={6} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
  state?.flights.map((fly) => (
    <Marker position={[fly.lat, fly.lan]} icon={myIcon} addTo={MapView}>
      <Popup>
        <div className='popup'>
          <span>&#128205;</span>
          <span>Fly Code: {fly.code}</span>
          <a onClick={() => openDetail(fly.id)}>
            &#128270; See Detail
          </a>
        </div>
      </Popup>
    </Marker>
  ))
}

    
  </MapContainer>
  </div>
  )
}

export default MapView