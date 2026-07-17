// Initialisation de la carte
const map = L.map('map').setView([48.91, 2.47], 11.45);

// Ajouter la couche de tuiles
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
}).addTo(map);

// Styles des géométries
function style(feature) {
    return {
        fillColor: '#00008B',
        weight: 2,
        opacity: 1,
        color: '#00008B',
        dashArray: '3',
        fillOpacity: 0.1
    };
}

function style2(feature) {
    return {
        fillColor: '#00008B',
        weight: 1,
        opacity: 1,
        color: '#00008B',
        dashArray: '3',
        fillOpacity: 0
    };
}

function style3(feature) {
    return {
        fillColor: 'blue',
        weight: 1,
        opacity: 1,
        color: 'blue',
        dashArray: '3',
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
let lavoirsLayer = L.geoJSON(Lavoirs, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: getIcon(feature, 'lavoirs') }).bindPopup(getPopup(feature));
    }
}).addTo(lavoirsCluster);

let fontainesLayer = L.geoJSON(Fontaines, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: getIcon(feature, 'fontaines') }).bindPopup(getPopup(feature));
    }
}).addTo(fontainesCluster);

let moulinsLayer = L.geoJSON(Moulins, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: getIcon(feature, 'moulins') }).bindPopup(getPopup(feature));
    }
}).addTo(moulinsCluster);

let chateaudeauLayer = L.geoJSON(Chateaudeau, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: getIcon(feature, 'chateaudeau') }).bindPopup(getPopup(feature));
    }
}).addTo(chateaudeauCluster);

let fusionLayer = L.geoJSON(Fusionne, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: getIcon(feature, 'born') }).bindPopup(getPopup(feature));
    }
}).addTo(fusionCluster);

let lavoirs2Layer = L.geoJSON(Lavoirs2, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: getIcon(feature, 'lavoirs2') }).bindPopup(getPopup(feature));
    }
});

let fontaines2Layer = L.geoJSON(Fontaines2, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: getIcon(feature, 'fontaines2') }).bindPopup(getPopup(feature));
    }
});

let moulins2Layer = L.geoJSON(Moulins2, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: getIcon(feature, 'moulins2') }).bindPopup(getPopup(feature));
    }
});

let chateaudeau2Layer = L.geoJSON(Chateaudeau2, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: getIcon(feature, 'chateaudeau2') }).bindPopup(getPopup(feature));
    }
});

let rudoLayer = L.geoJSON(Ruesdeau, {
    style: function (feature) {
        return {
            weight: 2,
            color: "orange"
        };
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(`<b>${feature.properties.nom_voie_ban_droite}</b><br> Cette rue fait référence au patrimoine de l'eau présent ou passé`);
    }
});

// Ajouter les clusters à la carte
lavoirsCluster.addTo(map);
fontainesCluster.addTo(map);
moulinsCluster.addTo(map);
chateaudeauCluster.addTo(map);
rudoLayer.addTo(map);
fusionCluster.addTo(map);

// Fonction pour mettre à jour les couches affichées
function updateLayers() {
    if (document.getElementById('ensembleCheckbox').checked) {
        // Si "Ensemble" est coché, afficher uniquement le cluster fusion et masquer les clusters individuels
        map.removeLayer(lavoirsCluster);
        map.removeLayer(fontainesCluster);
        map.removeLayer(moulinsCluster);
        map.removeLayer(chateaudeauCluster);
        map.removeLayer(rudoLayer);
        map.addLayer(fusionCluster);
    } else {
        // Si "Ensemble" est décoché, gérer les clusters individuels en fonction de leurs cases à cocher
        map.removeLayer(fusionCluster);
        if (document.getElementById('lavoirs').checked) {
            map.addLayer(lavoirsCluster);
        } else {
            map.removeLayer(lavoirsCluster);
        }
        if (document.getElementById('fontaines').checked) {
            map.addLayer(fontainesCluster);
        } else {
            map.removeLayer(fontainesCluster);
        }
        if (document.getElementById('moulins').checked) {
            map.addLayer(moulinsCluster);
        } else {
            map.removeLayer(moulinsCluster);
        }
        if (document.getElementById('chateaudeau').checked) {
            map.addLayer(chateaudeauCluster);
        } else {
            map.removeLayer(chateaudeauCluster);
        }
        if (document.getElementById('ruesdeau').checked) {
            map.addLayer(rudoLayer);
        } else {
            map.removeLayer(rudoLayer);
        }
    }
    updateZoomLayers();
}

// Fonction pour gérer les couches en fonction du zoom
function updateZoomLayers() {
    const currentZoom = map.getZoom();
    if (currentZoom >= 14) {
        // Supprimer fusionCluster si le zoom est de 15 ou plus
        map.removeLayer(fusionCluster);
        // Ajouter les couches lavoirs2, fontaines2, moulins2 et chateaudeau2 si Ensemble est coché
        if (document.getElementById('ensembleCheckbox').checked) {
            map.addLayer(lavoirs2Layer);
            map.addLayer(fontaines2Layer);
            map.addLayer(moulins2Layer);
            map.addLayer(chateaudeau2Layer);
            map.addLayer(rudoLayer);
        }
    } else {
        // Ajouter fusionCluster si le zoom est inférieur à 15 et Ensemble est coché
        if (document.getElementById('ensembleCheckbox').checked) {
            map.addLayer(fusionCluster);
        }
        // Supprimer les couches lavoirs2, fontaines2, moulins2 et chateaudeau2
        map.removeLayer(lavoirs2Layer);
        map.removeLayer(fontaines2Layer);
        map.removeLayer(moulins2Layer);
        map.removeLayer(chateaudeau2Layer);
        map.removeLayer(rudoLayer);
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
document.getElementById('ensembleCheckbox').addEventListener('change', function () {
    const isChecked = this.checked;

    // Mettre à jour l'état des autres cases à cocher en fonction de la case "Ensemble"
    document.getElementById('lavoirs').checked = isChecked;
    document.getElementById('fontaines').checked = isChecked;
    document.getElementById('moulins').checked = isChecked;
    document.getElementById('chateaudeau').checked = isChecked;
    document.getElementById('ruesdeau').checked = isChecked;

    // Mettre à jour les couches affichées sur la carte
    updateLayers();
});

// Ajouter les autres couches GeoJSON à la carte
L.geoJSON(Rus1820,{ 
    onEachFeature: function (feature, layer) {
    layer.bindPopup(`<b>${feature.properties.nom}</b>`);
}
}).addTo(map);
L.geoJSON(Canaux).addTo(map);
L.geoJSON(Surfeau_access, { style: style3 }).addTo(map);
L.geoJSON(Rivieres,{ style: style3 }).addTo(map); 
L.geoJSON(Communes, { style: style2 }).addTo(map);
L.geoJSON(Departement, { style: style }).addTo(map);

// Appeler la fonction updateLayers initialement pour configurer les couches
updateLayers();