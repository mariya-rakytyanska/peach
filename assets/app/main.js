var imageUrl = 'https://mariya-rakytyanska.github.io/peach/assets/img/plan.gif',
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




var plan_b10etage1 = L.map('plan_b10etage1', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('assets/img/b10etage1.png', bounds).addTo(plan_b10etage1);
plan_b10etage1.fitBounds(bounds);

var plan_b10etage2 = L.map('plan_b10etage2', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
    
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('assets/img/b10etage2.png', bounds).addTo(plan_b10etage2);
plan_b10etage2.fitBounds(bounds);



var plan_b10rdc = L.map('plan_b10rdc', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('assets/img/b10.gif', bounds).addTo(plan_b10rdc);
plan_b10rdc.fitBounds(bounds);

var plan_b10sousol = L.map('plan_b10sousol', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('assets/img/b10.gif', bounds).addTo(plan_b10sousol);
plan_b10sousol.fitBounds(bounds);

var plan_b17sousol = L.map('plan_b17sousol', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('assets/img/b17sousol.jpeg', bounds).addTo(plan_b17sousol);
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
var image = L.imageOverlay('assets/img/b17rezdechaus.jpeg', bounds).addTo(plan_b17rdc);
plan_b17rdc.fitBounds(bounds);

var plan_b17etage1 = L.map('plan_b17etage1', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('assets/img/b17etage1.png', bounds).addTo(plan_b17etage1);
plan_b17etage1.fitBounds(bounds);

var plan_b17etage2 = L.map('plan_b17etage2', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('assets/img/b17etage2.png', bounds).addTo(plan_b17etage2);
plan_b17etage2.fitBounds(bounds);

var plan_mtetage1 = L.map('plan_mtetage1', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('assets/img/mtetage1.png', bounds).addTo(plan_mtetage1);
plan_mtetage1.fitBounds(bounds);

var plan_mtetage2 = L.map('plan_mtetage2', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('assets/img/mtetage2.png', bounds).addTo(plan_mtetage2);
plan_mtetage2.fitBounds(bounds);

var plan_mtrdc = L.map('plan_mtrdc', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('assets/img/mt.jpeg', bounds).addTo(plan_mtrdc);
plan_mtrdc.fitBounds(bounds);

var plan_mtsousol = L.map('plan_mtsousol', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    dragging: false,
    zoomControl:false
});
var bounds = [[0,0], [459,548]];
var image = L.imageOverlay('assets/img/mt.jpeg', bounds).addTo(plan_mtsousol);
plan_mtsousol.fitBounds(bounds);



var sds = L.circle([80,80], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b17sousol);
sds.bindPopup("Cette salle de sport se situe au sous sol du B17. Il y a des marquages au sol qui indiques différents terrains pour la pratique du multiple sport. Cette salle peut aussi servir de salle de présentation grâce à une scène");
var myIcon = L.icon({
    iconUrl: 'assets/img/localisation.png',
    iconSize: [30, 40],
});  

var auditorium = L.circle([80,80], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b17rdc);
auditorium.bindPopup(" ");
var myIcon = L.icon({
    iconUrl: 'assets/img/localisation.png',
    iconSize: [30, 40],
}); 

var salleds = L.circle([80,80], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b17etage2);
salleds.bindPopup("L’auditorium est un espace de travail, de présentation, de rassemblement. Plusieurs fonctions peuvent être assurer la.");
var myIcon = L.icon({
    iconUrl: 'assets/img/localisation.png',
    iconSize: [30, 40],
}); 

var polyv = L.circle([80,80], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b10sousol);
polyv.bindPopup("C’est là où se déroulent les examens pour les élèves, c’est aussi une salle où peuvent y avoir des répétions et elle sert de chapelle.");
var myIcon = L.icon({
    iconUrl: 'assets/img/localisation.png',
    iconSize: [30, 40],
}); 

var salledp = L.circle([90,80], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b17etage2);
salledp.bindPopup("C’est l’espace des professeur du lycée, interdite aux élèves.");
var myIcon = L.icon({
    iconUrl: 'assets/img/localisation.png',
    iconSize: [30, 40],
}); 

var recept = L.circle([80,80], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_mtrdc);
recept.bindPopup("Ici, toutes les informations dont vous pourriez avoir besoin vous serrons donner, les réceptionnistes sont disponible toute la journée pendant les cours. ");
var myIcon = L.icon({
    iconUrl: 'assets/img/localisation.png',
    iconSize: [30, 40],
}); 

var viesc = L.circle([80,80], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b10etage2);
viesc.bindPopup("- La vie scolaire est là où vous pouvez aller si vous avez un retard, un départ en milieu de journée ou n’importe quel sorte de problème pour lequel la réception ne peut vous aider.");
var myIcon = L.icon({
    iconUrl: 'assets/img/localisation.png',
    iconSize: [30, 40],
}); 

var labor = L.circle([90,80], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b10rdc);
labor.bindPopup("- Ce laboratoire est destinée aux sciences de la vie et de la terre. Il peut s’y dérouler des expériences. Il est composé de paillasse pour les élèves, un tableau interactif pour les profs, et plusieurs éléments indispensables à la réalisation d’un travail pratique.");
var myIcon = L.icon({
    iconUrl: 'assets/img/localisation.png',
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

