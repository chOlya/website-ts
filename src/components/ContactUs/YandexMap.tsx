import coordinatesSokolniki from './coordinatesSokolniki'
import coordinatesPreobrazhenskayaSquare from './coordinatesPreobrazhenskayaSquare'
import { Map, Placemark, Polyline, YMaps } from 'react-yandex-maps';
import React from 'react';

const YandexMap: React.FC = () => (
    <YMaps >
        <div>
            <Map defaultState={{ center: [55.798312, 37.696001], zoom: 13 }} width='100%'  >
                <Placemark
                    geometry={[55.798682, 37.695816]} properties={{ iconContent: "Колодезный переулок, д.2а", }} options={{ preset: "islands#blueStretchyIcon" }} />
                <Placemark
                    geometry={[55.789148, 37.679319]} />
                <Placemark
                    geometry={[55.796103, 37.715060]} />
                <Polyline
                    geometry={coordinatesSokolniki}
                    options={{
                        balloonCloseButton: false,
                        strokeColor: '#179fc1',
                        strokeWidth: 4,
                        strokeOpacity: 0.7,
                    }}
                />
                <Polyline
                    geometry={coordinatesPreobrazhenskayaSquare}
                    options={{
                        balloonCloseButton: false,
                        strokeColor: '#16a086',
                        strokeWidth: 4,
                        strokeOpacity: 0.7,
                    }}
                />
            </Map>
        </div>
    </YMaps>
);

export default YandexMap;

