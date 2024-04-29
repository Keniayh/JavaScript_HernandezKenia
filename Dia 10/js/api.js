//Enter fuction
var input = document.getElementById("pokemonId");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("enter").click();
    }
});
/////////////

function fetchPokemon() {
    let xhr = new XMLHttpRequest();
    let pokemonID = document.getElementById('pokemonId').value;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                let response = JSON.parse(this.responseText);
                console.log(pokemonID);
                console.log(response.name);
                console.log(response.order);
                console.log(response.sprites.other.showdown.front_default);
            } else {
                console.log('Error:', this.statusText);
                mostrarError(this.statusText);
            }
        }
    };
    xhr.send();
}
