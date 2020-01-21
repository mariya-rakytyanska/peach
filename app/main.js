var imageUrl = 'https://mariya-rakytyanska.github.io/peach/img/plan.gif',
    imageBounds = [[46.180529, 6.121130], [46.182590, 6.123502]];

var map = L.map('map', {
    attributionControl: false,
    zoomControl: false,
    zoom: 17.55,
    minZoom: 17.55,
    maxZoom: 17.55,
    dragging: false,
    maxBounds: imageBounds
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11'
}).addTo(map);

L.imageOverlay(imageUrl, imageBounds).addTo(map);




var plan_b10 = L.map('plan_b10', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('img/b10.gif', bounds).addTo(plan_b10);
plan_b10.fitBounds(bounds);

var plan_mt = L.map('plan_mt', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('img/mt.jpeg', bounds).addTo(plan_mt);
plan_mt.fitBounds(bounds);

var plan_b17sousol = L.map('plan_b17sousol', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('img/b17sousol.jpeg', bounds).addTo(plan_b17sousol);
plan_b17sousol.fitBounds(bounds);

var plan_b17rdc = L.map('plan_b17rdc', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('img/b17rezdechaus.jpeg', bounds).addTo(plan_b17rdc);
plan_b17rdc.fitBounds(bounds);

var plan_b17etage = L.map('plan_b17etage', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('img/b17etage2.jpeg', bounds).addTo(plan_b17etage);
plan_b17etage.fitBounds(bounds);







var labo = L.polygon([
    [374,340],
    [424,340],
    [424,440],
    [374,440]
]).addTo(plan_b10);
labo.bindPopup("<a href='https://www.sanpellegrino.com/intl/en'>room</a>");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});

var gymnase = L.polygon([
    [374,340],
    [424,340],
    [424,440],
    [374,440]
]).addTo(plan_b17sousol);
labo.bindPopup("<a href='https://www.sanpellegrino.com/intl/en'>room</a>");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});

var auditorium = L.polygon([
    [374,340],
    [424,340],
    [424,440],
    [374,440]
]).addTo(plan_b17rdc);
labo.bindPopup("<a href='https://www.sanpellegrino.com/intl/en'>room</a>");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});

var sds = L.polygon([
    [374,340],
    [424,340],
    [424,440],
    [374,440]
]).addTo(plan_b17etage);
labo.bindPopup("<a href='https://www.sanpellegrino.com/intl/en'>room</a>");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});
var poly = L.polygon([
    [200,320],
    [304,300],
    [404,300],
    [324,340]
]).addTo(plan_b10);
labo.bindPopup("<a href='https://www.sanpellegrino.com/intl/en'>room</a>");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});
var salledp = L.polygon([
    [45,340],
    [04,340],
    [14,440],
    [154,440]
]).addTo(plan_b17etage);
labo.bindPopup("<a href='https://www.sanpellegrino.com/intl/en'>room</a>");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});
var reception = L.polygon([
    [374,340],
    [424,340],
    [424,440],
    [374,440]
]).addTo(plan_mt);
labo.bindPopup("<a href='https://www.sanpellegrino.com/intl/en'>room</a>");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});
var vs = L.polygon([
    [74,340],
    [24,340],
    [24,440],
    [74,440]
]).addTo(plan_b10);
labo.bindPopup("<a href='https://www.sanpellegrino.com/intl/en'>room</a>");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});
function onLocationFound(e) {
    var radius = e.accuracy / 2;
    L.marker((e.latlng), {icon: myIcon}).addTo(map);
    //.bindPopup("You are within " + radius + " meters from this point").openPopup();
    // L.circle(e.latlng, radius).addTo(map);
    
}
function onLocationError(e) {
    alert(e.message);
}
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
map.locate({ setView: true, maxZoom: 21 });

var theMarker = {};

var gymnase = [46.182020, 6.122567, "tab2", "plan2"];
var auditorium = [46.181800, 6.122119, "tab3", "plan3"];
var sd = [46.181918, 6.122595, "tab4", "plan4"];
var poly = [46.181297, 6.122451, "tab1", "plan1"];

var sdp = [46.182166, 6.122394, "tab4", "plan4"];
var reception = [46.181689, 6.122689, "tab0", "plan0"];
var vs = [46.181297, 6.122451, "tab1", "plan1"];
var labo = [46.1813108, 6.1226701, "tab1", "plan1"];
var locations = [gymnase, auditorium, sd, poly, sdp, reception, vs, labo];

function showMarker(id) {

    if (theMarker != undefined) {
        map.removeLayer(theMarker);
    };

    theMarker = L.marker([locations[id][0], locations[id][1]]).addTo(map);

    var tabs = document.getElementById("tabs");
    var x = tabs.getElementsByClassName("is-active");
    while (x.length)
        x[0].className = x[0].className.replace(/\bis-active\b/g, "");
    var current_tab = document.getElementById(locations[id][2]);
    current_tab.classList.add("is-active");
    var current_plan = document.getElementById(locations[id][3]);
    current_plan.classList.add("is-active");
}

