// Initialisation de la carte
const map = L.map('map').setView([48.92, 2.42], 11.49);

// Ajouter la couche de tuiles
var leaf = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
}
);

var ortho1950 = L.tileLayer(
'https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ORTHOIMAGERY.ORTHOPHOTOS.1950-1965&STYLE=BDORTHOHISTORIQUE&TILEMATRIXSET=PM&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&FORMAT=image/png',
{
 attribution: '© IGN',
 maxZoom: 19,
}
);

var ortho2020 = L.tileLayer(
'https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=HR.ORTHOIMAGERY.ORTHOPHOTOS&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&FORMAT=image/jpeg',
{
 attribution: '© IGN',
 maxZoom: 19,
}
);

var ign1950 = L.tileLayer(
'https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN50.1950&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&FORMAT=image/jpeg',
{
 attribution: '© IGN',
 maxZoom: 19,
}
);

var etatMajor = L.tileLayer(
'https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&FORMAT=image/jpeg',
{
 attribution: '© IGN',
 maxZoom: 19,
}
);


leaf.addTo(map);
L.control.layers(
{
    "OpenStreetMap": leaf,
    "IGN ORTHO20m": ortho2020,
    "IGN ORTHO1950": ortho1950,
    "IGN SCAN1950": ign1950,
    "Cartes d'Etat-major": etatMajor
}
).addTo(map);

// Styles des géométries
function style(feature) {
    return {
        fillColor: '#393946',
        weight: 2,
        opacity: 1,
        color: '#393946',
        dashArray: '3',
        fillOpacity: 0.1
    };
}

function style2(feature) {
    return {
        fillColor: '#393946',
        weight: 1,
        opacity: 1,
        color: '#393946',
        dashArray: '3',
        fillOpacity: 0
    };
}

function style3(feature) {
    return {
        fillColor: 'rgba(46,14,114,0.95)',
        weight: 1,
        opacity: 1,
        color: 'rgba(46,14,114,0.95)',
        dashArray: '1',
        fillOpacity: 1
    };
}

// Icônes personnalisées
const icons = {
    default: new L.Icon({
        iconUrl: './images/ticon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    }),
    born: new L.Icon({
        iconUrl: './images/born.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    }),
    fontaine: new L.Icon({
        iconUrl: './images/font.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    }),
    fontaine2: new L.Icon({
        iconUrl: './images/font2.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    }),
    moulin: new L.Icon({
        iconUrl: './images/moulin3.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    }),
    lavoir: new L.Icon({
        iconUrl: './images/lavio.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    }),
    lavoir2: new L.Icon({
        iconUrl: './images/lavio2.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    }),
    chateaudeau: new L.Icon({
        iconUrl: './images/chateaudeau.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    }),
    chateaudeau2: new L.Icon({
        iconUrl: './images/chateaudeau2.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    }),
    lavoir1b: new L.Icon({
        iconUrl: './images/lavio.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    }),
    lavoir2b: new L.Icon({
        iconUrl: './images/lavio2.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    }),
    fontaine1b: new L.Icon({
        iconUrl: './images/font.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    }),
    fontaine2b: new L.Icon({
        iconUrl: './images/font2.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    }),
    moulin1b: new L.Icon({
        iconUrl: './images/moulin3.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    }),
    chateaudeau1b: new L.Icon({
        iconUrl: './images/chateaudeau.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    }),
    chateaudeau2b: new L.Icon({
        iconUrl: './images/chateaudeau2.png',
        iconSize: [30, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: './images/shadow2.png',
        shadowSize: [35, 41]
    })
};

// Fonction pour obtenir l'icône
function getIcon(feature, type) {
    if (type === 'lavoirs') {
        return feature.properties.PR__S_DISP === 'Présent' ? icons.lavoir : icons.lavoir2;
    } else if (type === 'fontaines') {
        return feature.properties.disp_non === 'Présent' ? icons.fontaine : icons.fontaine2;
    } else if (type === 'moulins') {
        return icons.moulin;
    } else if (type === 'chateaudeau') {
        return feature.properties.pr_disp === 'présent' ? icons.chateaudeau : icons.chateaudeau2;
    } else if (type === 'fontaines2') {
        return feature.properties.disp_non === 'Présent' ? icons.fontaine1b : icons.fontaine2b;
    } else if (type === 'moulins2') {
        return icons.moulin1b;
    } else if (type === 'lavoirs2') {
        return feature.properties.PR__S_DISP === 'Présent' ? icons.lavoir1b : icons.lavoir2b;
    } else if (type === 'chateaudeau2') {
        return feature.properties.pr_disp === 'présent' ? icons.chateaudeau1b : icons.chateaudeau2b;           
    } else {
        return icons.default;
    }
}

// Fonction pour obtenir le popup
function getPopup(feature) {
    if (feature.properties.NOM) {
        return `<div>
            <h3>${feature.properties.NOM}</h3>
            <img src="./${feature.properties.IMAGE_URL}" alt="Image de ${feature.properties.NOM}" style="width: 100%;">
            <p>${feature.properties.ADRESSE}, ${feature.properties.INSEE} ${feature.properties.COMMUNE}</p>
        </div>`;
    } else {
        return `<b>${feature.properties.Nom}</b><br>${feature.properties.Code_Insee} ${feature.properties.Commune}`;
    }
}
// Créer les clusters
let lavoirsCluster = L.markerClusterGroup();
let fontainesCluster = L.markerClusterGroup();
let moulinsCluster = L.markerClusterGroup();
let chateaudeauCluster = L.markerClusterGroup();
let fusionCluster = L.markerClusterGroup();

// Créer des couches GeoJSON spécifiques et les ajouter aux clusters
// Adresse GeoServer WFS

const geoserverURL =
"http://localhost:8080/geoserver/Patrimoine_eau/ows";


function getWFS(layerName){

    return `${geoserverURL}?service=WFS&version=1.0.0&request=GetFeature&typeName=Patrimoine_eau:${layerName}&outputFormat=application/json`;

}



async function loadWFS(layerName){

    const response = await fetch(getWFS(layerName));


    if(!response.ok){

        throw new Error(
            `Erreur GeoServer ${layerName} : ${response.status}`
        );

    }


    return await response.json();

}

// Chargement Lavoirs

let lavoirsLayer;

loadWFS("lavoirs")
.then(data=>{


    lavoirsLayer = L.geoJSON(data,{
        
        pointToLayer:function(feature,latlng){

            return L.marker(
                latlng,
                {
                    icon:getIcon(feature,'lavoirs')
                }
            )
            .bindPopup(getPopup(feature));

        }

    });


    lavoirsLayer.addTo(lavoirsCluster);


})
.catch(console.error);

// Chargement Fontaines

let fontainesLayer;


loadWFS("fontaines")
.then(data=>{


    fontainesLayer = L.geoJSON(data,{

        pointToLayer:function(feature,latlng){

            return L.marker(
                latlng,
                {
                    icon:getIcon(feature,'fontaines')
                }
            )
            .bindPopup(getPopup(feature));

        }

    });


    fontainesLayer.addTo(fontainesCluster);


})
.catch(console.error);

// Chargement Moulins

let moulinsLayer;


loadWFS("moulins")
.then(data=>{


    moulinsLayer = L.geoJSON(data,{

        pointToLayer:function(feature,latlng){

            return L.marker(
                latlng,
                {
                    icon:getIcon(feature,'moulins')
                }
            )
            .bindPopup(getPopup(feature));

        }

    });


    moulinsLayer.addTo(moulinsCluster);


})
.catch(console.error);

// Chargement Châteaux d'eau

let chateaudeauLayer;


loadWFS("chateaudeau")
.then(data=>{


    chateaudeauLayer = L.geoJSON(data,{

        pointToLayer:function(feature,latlng){

            return L.marker(
                latlng,
                {
                    icon:getIcon(feature,'chateaudeau')
                }
            )
            .bindPopup(getPopup(feature));

        }

    });


    chateaudeauLayer.addTo(chateaudeauCluster);


})
.catch(console.error);

// Chargement Bornes (fusion)

let fusionLayer;


loadWFS("bornes")
.then(data=>{


    fusionLayer = L.geoJSON(data,{

        pointToLayer:function(feature,latlng){

            return L.marker(
                latlng,
                {
                    icon:getIcon(feature,'born')
                }
            )
            .bindPopup(getPopup(feature));

        }

    });


    fusionLayer.addTo(fusionCluster);


})
.catch(console.error);

// Les clusters sont ajoutés immédiatement.
// Les données seront injectées dedans quand les fetch WFS seront terminés.

lavoirsCluster.addTo(map);
fontainesCluster.addTo(map);
moulinsCluster.addTo(map);
chateaudeauCluster.addTo(map);
fusionCluster.addTo(map);

let lavoirs2Layer;
let fontaines2Layer;
let moulins2Layer;
let chateaudeau2Layer;



fetch(getWFS("lavoirs2"))

.then(response => response.json())

.then(data => {


    lavoirs2Layer = L.geoJSON(data, {

        pointToLayer: function(feature, latlng){

            return L.marker(
                latlng,
                {
                    icon:getIcon(feature,'lavoirs2')
                }
            )
            .bindPopup(getPopup(feature));

        }

    });


});





fetch(getWFS("fontaines3"))

.then(response => response.json())

.then(data => {


    fontaines2Layer = L.geoJSON(data, {

        pointToLayer: function(feature, latlng){

            return L.marker(
                latlng,
                {
                    icon:getIcon(feature,'fontaines2')
                }
            )
            .bindPopup(getPopup(feature));

        }

    });


});





fetch(getWFS("moulins2"))

.then(response => response.json())

.then(data => {


    moulins2Layer = L.geoJSON(data, {

        pointToLayer: function(feature, latlng){

            return L.marker(
                latlng,
                {
                    icon:getIcon(feature,'moulins2')
                }
            )
            .bindPopup(getPopup(feature));

        }

    });


});





fetch(getWFS("chateauxdeau2"))

.then(response => response.json())

.then(data => {


    chateaudeau2Layer = L.geoJSON(data, {

        pointToLayer: function(feature, latlng){

            return L.marker(
                latlng,
                {
                    icon:getIcon(feature,'chateaudeau2')
                }
            )
            .bindPopup(getPopup(feature));

        }

    });


});

let rudoLayer;


fetch(getWFS("rusdeau"))

.then(response => response.json())

.then(data => {


    rudoLayer = L.geoJSON(data, {

        style:function(feature){

            return {
                weight:2,
                color:"orange"
            };

        },


        onEachFeature:function(feature,layer){

            layer.bindPopup(
                `<b>${feature.properties.nom_voie_ban_droite}</b><br>
                Cette rue fait référence au patrimoine de l'eau présent ou passé`
            );

        }

    });

    rudoLayer.addTo(map);

});


let eauLayer;


fetch(getWFS("rus_anciens__rus_ancien"))

.then(response => response.json())

.then(data => {


    eauLayer = L.geoJSON(data, {


        style:function(feature){

            return {
                weight:2,
                color:"blue"
            };

        },


        onEachFeature:function(feature,layer){

            if(feature.properties && feature.properties.nom){

                layer.bindPopup(
                    `<b>${feature.properties.nom}</b>`
                );

            }
            else{

                layer.bindPopup(
                    "Aucune donnée disponible."
                );

            }

        }

    });

    eauLayer.addTo(map);
    
});


function updateLayers() {


    let ensemble =
    document.getElementById('ensembleCheckbox').checked;



    if (ensemble) {



        map.removeLayer(lavoirsCluster);
        map.removeLayer(fontainesCluster);
        map.removeLayer(moulinsCluster);
        map.removeLayer(chateaudeauCluster);



        if(fusionCluster){
            map.addLayer(fusionCluster);
        }


        if(rudoLayer){
            map.addLayer(rudoLayer);
        }


        if(eauLayer){
            map.addLayer(eauLayer);
        }



    } 

    else {



        map.removeLayer(fusionCluster);



        if(document.getElementById('lavoirs').checked){

            map.addLayer(lavoirsCluster);

        }
        else{

            map.removeLayer(lavoirsCluster);

        }




        if(document.getElementById('fontaines').checked){

            map.addLayer(fontainesCluster);

        }
        else{

            map.removeLayer(fontainesCluster);

        }




        if(document.getElementById('moulins').checked){

            map.addLayer(moulinsCluster);

        }
        else{

            map.removeLayer(moulinsCluster);

        }




        if(document.getElementById('chateaudeau').checked){

            map.addLayer(chateaudeauCluster);

        }
        else{

            map.removeLayer(chateaudeauCluster);

        }





        if(document.getElementById('ruesdeau').checked
        && rudoLayer){

            map.addLayer(rudoLayer);

        }
        else if(rudoLayer){

            map.removeLayer(rudoLayer);

        }





        if(document.getElementById('rus1820').checked
        && eauLayer){

            map.addLayer(eauLayer);

        }
        else if(eauLayer){

            map.removeLayer(eauLayer);

        }

    }


    updateZoomLayers();

}

function updateZoomLayers() {


    const currentZoom = map.getZoom();

    const ensemble =
    document.getElementById('ensembleCheckbox').checked;



    if(currentZoom >= 14){



        map.removeLayer(fusionCluster);



        if(ensemble){



            if(lavoirs2Layer){
                map.addLayer(lavoirs2Layer);
            }


            if(fontaines2Layer){
                map.addLayer(fontaines2Layer);
            }


            if(moulins2Layer){
                map.addLayer(moulins2Layer);
            }


            if(chateaudeau2Layer){
                map.addLayer(chateaudeau2Layer);
            }


        }



    }


    else {



        if(ensemble){

            if(fusionCluster){
                map.addLayer(fusionCluster);
            }

        }


        if(lavoirs2Layer){
    map.removeLayer(lavoirs2Layer);
}

if(fontaines2Layer){
    map.removeLayer(fontaines2Layer);
}

if(moulins2Layer){
    map.removeLayer(moulins2Layer);
}

if(chateaudeau2Layer){
    map.removeLayer(chateaudeau2Layer);
}


    }

}

// Ajouter l'événement de zoom pour afficher ou masquer les couches de points
map.on('zoomend', updateZoomLayers);

// Ajouter des événements de changement pour les cases à cocher
document.getElementById('lavoirs').addEventListener('change', updateLayers);
document.getElementById('fontaines').addEventListener('change', updateLayers);
document.getElementById('moulins').addEventListener('change', updateLayers);
document.getElementById('chateaudeau').addEventListener('change', updateLayers);
document.getElementById('ruesdeau').addEventListener('change', updateLayers);
document.getElementById('rus1820').addEventListener('change', updateLayers);
document.getElementById('ensembleCheckbox').addEventListener('change', function () {
    const isChecked = this.checked;

    // Mettre à jour l'état des autres cases à cocher en fonction de la case "Ensemble"
    document.getElementById('lavoirs').checked = isChecked;
    document.getElementById('fontaines').checked = isChecked;
    document.getElementById('moulins').checked = isChecked;
    document.getElementById('chateaudeau').checked = isChecked;
    document.getElementById('ruesdeau').checked = isChecked;
    document.getElementById('rus1820').checked = isChecked;

    // Mettre à jour les couches affichées sur la carte
    updateLayers();
});

// Ajouter les autres couches GeoJSON à la carte
fetch(getWFS("communes"))
.then(response => response.json())
.then(data=>{
    L.geoJSON(data,{
        style:style2
    }).addTo(map);
});
// Appeler la fonction updateLayers initialement pour configurer les couches
updateLayers();