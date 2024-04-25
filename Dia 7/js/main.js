function fetchSuperHero() {
    let xhr = new XMLHttpRequest();
    let heroID = document.getElementById('heroId').value;
    console.log(heroID);
    let apiKey = "ba61442990951c9c1a0e3005ff48295f";
    let url = `https://superheroapi.com/api.php/${apiKey}/${heroID}`;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status == 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayHero(response)
        }
        else if(this.readyState == 4){
            console.log('Errot:', this.statusText)
        }
    };
    xhr.send();
}

function displayHero(data) {
    let heroInfo = document.getElementById('superHeroInfo');
    if (data.response === "error"){
        heroInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    }
    else {
        heroInfo.innerHTML = `
        <p>Name: ${data.name}</p>
        <p>Inteligencia: ${data.powerstats.intelligence}</p>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Data</th>
      <th scope="col">Information</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ID</th>
      <td>${data.id}</td>
    </tr>
    <tr>
      <th scope="row">Name:</th>
      <td>${data.name}</td>
    </tr>
    <tr>
      <th scope="row">Photito</th>
      <td colspan="2"><img src="${data.image.url}" alt="sexyretrato"></td>
    </tr>
    <tr>
      <th scope="row">Powerstats:</th>
      <td colspan="2">
      Intelligence: ${data.powerstats.intelligence}
      <br></br>
      Strength: ${data.powerstats.strength}
      <br></br>
      Speed: ${data.powerstats.speed}
      <br></br>
      Durability: ${data.powerstats.durability}
      <br></br>
      Power: ${data.powerstats.power}
      <br></br>
      Combat: ${data.powerstats.combat}
      </td>
    </tr>
    <tr>
      <th scope="row">Biography</th>
      <td colspan="2">
        Full name: ${data.biography["full-name"]}
        <br></br>
        Alter egos: ${data.biography["ater-egos"]}
        <br></br>
        Aliases: ${data.biography.aliases}
        <br></br>
        Place of birth: ${data.biography["place-of-birth"]}
        <br></br>
        First appearance: ${data.biography["first-appearance"]}
        <br></br>
        Publisher: ${data.biography.publisher}
        <br></br>
        Alignment: ${data.biography.alignment}
      </td>
    </tr>
    <tr>
      <th scope="row">Appearance</th>
      <td>
        Gender: ${data.appearance.gender}
        <br></br>
        Race: ${data.appearance.race}
        <br></br>
        Height: ${data.appearance.height}
        <br></br>
        Weight: ${data.appearance.weight}
        <br></br>
        Eye color: ${data.appearance["eye-color"]}
        <br></br>
        Hair color: ${data.appearance["hair-color"]}
      </td>
    </tr>
    <tr>
      <th scope="row">Work</th>
      <td colspan="2">
      Occupation: ${data.work.occupation}
      <br></br>
      Base: ${data.work.base}
      </td>
    </tr>
    <tr>
      <th scope="row">Connections</th>
      <td colspan="2">
      Group affiliation: ${data.connections["group-affiliation"]}
      <br></br>
      Relatives: ${data.connections.relatives}
      </td>
    </tr>
  </tbody>
</table>
        `
    }
}