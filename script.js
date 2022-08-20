const mapboxTiles1 = L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
});

const map2 = L.map('example2')
    .setView([5.86590, 102.51217], 13)
    .addLayer(mapboxTiles1);



map2.pm.addControls({
    drawMarker: true,
    drawPolygon: true,
    editPolygon: true,
    drawPolyline: true,
    deleteLayer: true,
});