function fetchPerson() {
    let xhr = new XMLHttpRequest();
    let personID = document.getElementById('personId').value;
    console.log(personID);
    let url = `https://swapi.py4e.com/api/people/${personID}`;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status == 200){
            let response= JSON.parse(this.responseText);
            console.log(response);
            displayPeople(response)
            peopleInfo(response)
        }
        else if(this.readyState == 4){
            console.log('Errot:', this.statusText)
        }
    };
    xhr.send();
}

function displayPeople(data){
    let personInfo = document.getElementById("peopleInfo");
    
    if (data.response === "error") {
        personInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        personInfo.innerHTML = `
        <h3>Datos de la persona</h3>
        <p>Nombre: ${data.name}</p>
        <p>Height: ${data.height}</p>
        <p>Mass: ${data.mass}</p>
        <p>Hair Color: ${data.hair_color}</p>
        <p>Skin Color: ${data.skin_color}</p>
        <p>Birth Year: ${data.birth_year}</p>
        <p>Gender: ${data.gender}</p>
        <br></br>
        <p>Homeworld: ${data.homeworld}</p>
        <br></br>
        <p>Films: ${data.films}</p>
        <br></br>
        <p>Species: ${data.species}</p>
        <br></br>
        <p>Vehicles: ${data.vehicles}</p>
        <br></br>
        <p>Starships: ${data.starships}</p>
        <br></br>
        <p><Created: ${data.created}/p>
        <p>Edited: ${data.edited}</p>
        <p>URL: ${data.url}</p>
        `;
    }
    
}