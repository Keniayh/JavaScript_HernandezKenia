function fetchPerson() {
    let xhr = new XMLHttpRequest();
    let personID = document.getElementById('personId').value;
    let url = `https://swapi.py4e.com/api/people/${personID}`;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                let response = JSON.parse(this.responseText);
                console.log(response);
                mostrarPersona(response);
            } else {
                console.log('Error:', this.statusText);
                mostrarError(this.statusText);
            }
        }
    };
    xhr.send();
}

function mostrarPersona(data) {
    let personInfo = document.getElementById("peopleInfo");

    personInfo.innerHTML = `
    <h3>Datos de la persona</h3>
    <div class="table-responsive">
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col">Campo</th>
                <th scope="col">Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Nombre</td>
                <td>${data.name}</td>
            </tr>
            <tr>
                <td>Altura</td>
                <td>${data.height}</td>
            </tr>
            <tr>
                <td>Peso</td>
                <td>${data.mass}</td>
            </tr>
            <tr>
                <td>Color de pelo</td>
                <td>${data.hair_color}</td>
            </tr>
            <tr>
                <td>Color de piel</td>
                <td>${data.skin_color}</td>
            </tr>
            <tr>
                <td>Año de nacimiento</td>
                <td>${data.birth_year}</td>
            </tr>
            <tr>
                <td>Género</td>
                <td>${data.gender}</td>
            </tr>
            <tr>
                <td>Planeta natal</td>
                <td><span id="homeworld"></span></td>
            </tr>
            <tr>
                <td>Películas</td>
                <td><span id="films"></span></td>
            </tr>
            <tr>
                <td>Especies</td>
                <td><span id="species"></span></td>
            </tr>
            <tr>
                <td>Vehículos</td>
                <td><span id="vehicles"></span></td>
            </tr>
            <tr>
                <td>Naves estelares</td>
                <td><span id="starships"></span></td>
            </tr>
            <tr>
                <td>Creado</td>
                <td>${data.created}</td>
            </tr>
            <tr>
                <td>Editado</td>
                <td>${data.edited}</td>
            </tr>
            <tr>
                <td>URL</td>
                <td>${data.url}</td>
            </tr>
        </tbody>
    </table>
    </div>
    `;

    // Obtener detalles adicionales
    obtenerDetalle(data.homeworld, "homeworld");
    obtenerDetalles(data.films, "films");
    obtenerDetalles(data.species, "species");
    obtenerDetalles(data.vehicles, "vehicles");
    obtenerDetalles(data.starships, "starships");
}

function obtenerDetalle(url, elementId) {
    let elemento = document.getElementById(elementId);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            elemento.innerHTML = JSON.stringify(data);
        })
        .catch(error => console.error('Error al obtener detalles adicionales:', error));
}

function obtenerDetalles(urls, elementId) {
    let elemento = document.getElementById(elementId);
    urls.forEach(url => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (elemento.innerHTML !== "") {
                    elemento.innerHTML += "<br>";
                }
                elemento.innerHTML += JSON.stringify(data);
            })
            .catch(error => console.error('Error al obtener detalles adicionales:', error));
    });
}

function mostrarError(error) {
    let personInfo = document.getElementById("peopleInfo");
    personInfo.innerHTML = `<p>Error: ${error}</p>`;
}
