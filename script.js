mapboxgl.accessToken = 'pk.eyJ1IjoiYWhtYWRhc2hyYWYxNTQiLCJhIjoiY2xyaTYzNXlsMDM0eDJpcnhtY3lnb2QzdCJ9.PUhrzYu0LU7a6_Up5_Q-eA'; //Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
container: 'my-map', // map container ID
style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
center: [-79.3887,43.6510], // starting position [lng, lat]
zoom: 13, // starting zoom
});

map.on('load', () => {
    //Add a data source containing GeoJSON data
    map.addSource('uoft-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.39865237301687,
                            43.662343395037766
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }
    });
    // Add a data source from a GeoJSON file
    map.addSource('buildings-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/ahmadashraf1/GGR472-ex5/main/buildings.geojson' // Your URL to your buildings.geojson file
    });

    map.addLayer({
        'id': 'buildings-point',
        'type': 'circle',
        'source': 'buildings-data',
        'paint': {
            'circle-radius': 5,
            'circle-color': '#007cbf' }
    });
});