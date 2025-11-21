import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapController({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.flyTo(center, zoom, {
                duration: 1.5
            });
        }
    }, [center, zoom, map]);
    return null;
}

export default function MapComponent({ events, center, zoom = 13 }) {
    // Filter events with coordinates
    const markers = events.filter(e => e.coordinates);
    const polylinePositions = markers.map(e => e.coordinates);

    // Calculate center if not provided
    const mapCenter = center || (markers.length > 0 ? markers[0].coordinates : [37.5665, 126.9780]);

    return (
        <MapContainer
            center={mapCenter}
            zoom={zoom}
            style={{ height: '100%', width: '100%' }}
            zoomControl={false}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapController center={center} zoom={zoom} />

            {markers.map((event, idx) => (
                <Marker key={idx} position={event.coordinates}>
                    <Popup>
                        <div className="font-display">
                            <h3 className="font-bold">{event.title}</h3>
                            <p className="text-sm">{event.time}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}

            {polylinePositions.length > 1 && (
                <Polyline
                    positions={polylinePositions}
                    pathOptions={{ color: '#2b8cee', weight: 4, opacity: 0.7, dashArray: '10, 10' }}
                />
            )}
        </MapContainer>
    );
}
