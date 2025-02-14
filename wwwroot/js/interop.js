// Inclure Chart.js via un CDN

// Fonction pour afficher une alerte
function createAlerte() {
    alert('Welcome to Levanti!');
}

// Fonction pour générer un graphique avec Chart.js
let chartInstance = null;

function GenerateBars(data, labels) {
    const ctx = document.getElementById("testchart").getContext("2d");

    // Détruire l'ancien graphique si existant
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Créer un nouveau graphique
    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Coupons of Bond',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function GenerateBarsDuration(data, labels) {
    const ctx = document.getElementById("DurationChart").getContext("2d");

    // Détruire l'ancien graphique si existant
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Créer un nouveau graphique
    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Duration',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}



function initializeDataTable(json) {
    // Parse le JSON reçu pour obtenir les données sous forme d'objet JavaScript
    const data = JSON.parse(json);

    // Exemple simple : Log des données
    console.log("Données reçues :", data);

    // Si tu veux générer un tableau HTML dynamiquement :
    const table = document.getElementById("dataTable");

    // Efface le contenu précédent du tableau
    table.innerHTML = "";

    // Ajoute les en-têtes
    if (data.length > 0) {
        const thead = table.createTHead();
        const headerRow = thead.insertRow();

        Object.keys(data[0]).forEach((key) => {
            const th = document.createElement("th");
            th.textContent = key;
            headerRow.appendChild(th);
        });
    }

    // Ajoute les données
    const tbody = table.createTBody();

    data.forEach((row) => {
        const tr = tbody.insertRow();

        Object.values(row).forEach((value) => {
            const td = tr.insertCell();
            td.textContent = value !== null ? value : ""; // Gestion des valeurs nulles
        });
    });

    // Initialisation de DataTables.js avec $(document).ready() pour s'assurer que le DOM est prêt

}





function initializeDataTable1(json) {
    // Parse le JSON reçu pour obtenir les données sous forme d'objet JavaScript
    const data = JSON.parse(json);

    // Exemple simple : Log des données
    console.log("Données reçues :", data);

    // Si tu veux générer un tableau HTML dynamiquement :
    const table = document.getElementById("dataTable1");

    // Efface le contenu précédent du tableau
    table.innerHTML = "";

    // Ajoute les en-têtes
    if (data.length > 0) {
        const thead = table.createTHead();
        const headerRow = thead.insertRow();

        Object.keys(data[0]).forEach((key) => {
            const th = document.createElement("th");
            th.textContent = key;
            headerRow.appendChild(th);
        });
    }

    // Ajoute les données
    const tbody = table.createTBody();

    data.forEach((row) => {
        const tr = tbody.insertRow();

        Object.values(row).forEach((value) => {
            const td = tr.insertCell();
            td.textContent = value !== null ? value : ""; // Gestion des valeurs nulles
        });
    });

    // Si DataTable existe déjà, on le détruit avant de réinitialiser
    if ($.fn.dataTable.isDataTable('#dataTable1')) {
        $('#dataTable1').DataTable().clear().destroy();
    }

    // Initialisation de DataTables.js avec $(document).ready() pour s'assurer que le DOM est prêt
    $(document).ready(function () {
        if ($.fn.DataTable) {
            $(table).DataTable({
                paging: true, // Activer la pagination
                searching: true, // Activer le champ de recherche
                ordering: true, // Activer le tri
                pageLength: 10, // Nombre de lignes affichées par page
                lengthMenu: [5, 10, 25, 50, 100], // Options pour le nombre de lignes par page
                language: {
                    search: "Rechercher :", // Texte pour le champ de recherche
                    lengthMenu: "Afficher _MENU_ enregistrements par page",
                    info: "Affichage de _START_ à _END_ sur _TOTAL_ enregistrements",
                    paginate: {
                        first: "Première",
                        last: "Dernière",
                        next: "Suivant",
                        previous: "Précédent",
                    },
                },
            });
        } else {
            console.error("DataTables.js n'est pas chargé. Assurez-vous que la bibliothèque est incluse.");
        }
    });
}

function resetDataTable1() {
    // Vérifie si la DataTable existe déjà
    if ($.fn.dataTable.isDataTable('#dataTable1')) {
        $('#dataTable1').DataTable().clear().destroy(); // Supprime les anciennes données
    }
    // Réinitialise le tableau pour qu'il reste vide
    $('#dataTable1').empty();
}

function resetDataTable() {
    if ($.fn.dataTable.isDataTable('#dataTable')) {
        $('#dataTable').DataTable().clear().destroy();
    }
    $('#dataTable').empty();
}




function resetDataRate() {
    if ($.fn.dataTable.isDataTable('#dataTableRate')) {
        $('#dataTableRate').DataTable().clear().destroy();
    }
    $('#dataTableRate').empty();
}



function initializeDataRate(json) {
    // Parse le JSON reçu pour obtenir les données sous forme d'objet JavaScript
    const data = JSON.parse(json);

    // Exemple simple : Log des données
    console.log("Données reçues :", data);

    // Si tu veux générer un tableau HTML dynamiquement :
    const table = document.getElementById("dataTableRate");

    // Efface le contenu précédent du tableau
    table.innerHTML = "";

    // Ajoute les en-têtes
    if (data.length > 0) {
        const thead = table.createTHead();
        const headerRow = thead.insertRow();

        Object.keys(data[0]).forEach((key) => {
            const th = document.createElement("th");
            th.textContent = key;
            headerRow.appendChild(th);
        });
    }

    // Ajoute les données
    const tbody = table.createTBody();

    data.forEach((row) => {
        const tr = tbody.insertRow();

        Object.values(row).forEach((value) => {
            const td = tr.insertCell();
            td.textContent = value !== null ? value : ""; // Gestion des valeurs nulles
        });
    });

    // Si DataTable existe déjà, on le détruit avant de réinitialiser
    if ($.fn.dataTable.isDataTable('#dataTableRate')) {
        $('#dataTableRate').DataTable().clear().destroy();
    }

    // Initialisation de DataTables.js avec $(document).ready() pour s'assurer que le DOM est prêt
    $(document).ready(function () {
        if ($.fn.DataTable) {
            $(table).DataTable({
                paging: true, // Activer la pagination
                searching: true, // Activer le champ de recherche
                ordering: true, // Activer le tri
                pageLength: 10, // Nombre de lignes affichées par page
                lengthMenu: [5, 10, 25, 50, 100], // Options pour le nombre de lignes par page
                language: {
                    search: "Rechercher :", // Texte pour le champ de recherche
                    lengthMenu: "Afficher _MENU_ enregistrements par page",
                    info: "Affichage de _START_ à _END_ sur _TOTAL_ enregistrements",
                    paginate: {
                        first: "Première",
                        last: "Dernière",
                        next: "Suivant",
                        previous: "Précédent",
                    },
                },
            });
        } else {
            console.error("DataTables.js n'est pas chargé. Assurez-vous que la bibliothèque est incluse.");
        }
    });
}


function GenerateLineRate(data, labels) {
    const ctx = document.getElementById("RateChart").getContext("2d");

    // Détruire l'ancien graphique s'il existe
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Palette de couleurs pour chaque courbe
    const colors = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(50,205,50,1)',
        'rgba(220,20,60,1)',
        'rgba(70,130,180,1)'
    ];

    let datasets = [];
    let colorIndex = 0;
    let allValues = [];

    // Construire un dataset par taux d'intérêt
    for (const rate in data) {
        const prices = data[rate];

        datasets.push({
            label: rate, // Nom du taux d'intérêt
            data: prices,
            borderColor: colors[colorIndex % colors.length],
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 2,
            tension: 0.1
        });

        allValues = allValues.concat(prices);
        colorIndex++;
    }

    // Calcul du min et max pour ajuster l'échelle Y
    const minVal = Math.min(...allValues);
    const maxVal = Math.max(...allValues);

    // Création du graphique multi-courbes
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    suggestedMin: minVal * 0.9,  // Ajuste la marge basse
                    suggestedMax: maxVal * 1.1,  // Ajuste la marge haute
                    ticks: {
                        stepSize: (maxVal - minVal) / 5
                    }
                }
            }
        }
    });
}
