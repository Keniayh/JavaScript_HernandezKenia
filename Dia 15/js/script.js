function fetchUser() {
    let xhr = new XMLHttpRequest();
    let url = 'https://randomuser.me/api/';
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status === 200) {
            let dato = JSON.parse(this.responseText);
            displayUser(dato)
        } else {
            return ("Habemus error!");
        }
    }
    xhr.send()
}

function displayUser(dato) {

    
    //Comando para obtener nombre
    nombre = ((dato["results"][0]["name"]["first"]) + " " + (dato["results"][0]["name"]["last"]))
    //Comando para obtener correo
    correo = (dato["results"][0]["email"])

    //Comando para obtener fecha de nacimiento
    variable = dato["results"][0]["dob"]["date"];
    variable = variable.slice(0, 10);
    arrayFechas = variable.split('-');
    ano = arrayFechas[0]
    mes = arrayFechas[1]
    dia = arrayFechas[2]
    fechaFinal = mes + "/" + dia + "/" + ano
    //Comando para obtener dirección
    direccion = ((dato["results"][0]['location']['street']['number']) + " " + (dato["results"][0]['location']['street']['name']))
    //Comando para obtener telefono
    telefonoCompleto = dato["results"][0]['phone'];
    arrayTel = telefonoCompleto.split(' ');
    telefonoFinal = "(" + arrayTel[0] + ")" + " " + arrayTel[1] + "-" + arrayTel[2] + arrayTel[3];
    //Comando para obtener password
    contrasena = (dato["results"][0]["login"]["password"])
    //Comando para la foto
    foto = (dato["results"][0]['picture']['large'])
    let buttom = document.getElementById('hola')
    let userInfo = document.getElementById('userInfo');
    if (dato.response == "Habemus error!") {
        userInfo.innerHTML = `<h1>HABEMUS ERROR!!!</h1>`
        buttom.innerHTML = `<h1>HABEMUS ERROR!!!</h1>`
    } else {
        userInfo.innerHTML = `
                    
            <img src='${foto}' id="foti"></img>

        `;
        buttom.innerHTML = `           
            <ul class="values_list horizontal_center" id="values_list">
                <li data-title="Hi, My name is" data-value="${nombre}" data-label="name" class="active" id="elemento"></li>
                <li data-title="My email address is" data-value="${correo}" data-label="email" class=" " id="elemento"></li>
                <li data-title="My birthday is" data-value="${fechaFinal}" data-label="birthday" class=" " id="elemento"></li>
                <li data-title="My address is" data-value="${direccion}" data-label="address" class=" " id="elemento"></li>
                <li data-title="My phone number is" data-value="${telefonoCompleto}" data-label="phone" class=" " id="elemento"></li>
                <li data-title="My password is" data-value="${contrasena}" data-label="password" class=" " id="elemento"></li>
            </ul>
        `;
        addEventListenerToLiElements();
    }
}

// Esta función agrega el event listener a los elementos <li>
function addEventListenerToLiElements() {
    var elementos = document.querySelectorAll("#values_list li");
    var infoDisplay = document.getElementById("info_Display");

    // Agrega un event listener a cada elemento
    elementos.forEach(function(elemento) {
        elemento.addEventListener("mouseover", function() {
            // Desactiva todos los elementos
            elementos.forEach(function(e) {
                e.classList.remove("active");
            });
            // Activa solo el elemento actual
            elemento.classList.add("active");

            // Muestra los datos del elemento activo
            var dataTitle = elemento.getAttribute("data-title");
            var dataValue = elemento.getAttribute("data-value");
            infoDisplay.innerHTML = "<p>" + dataTitle + "</p>"  + "<h3>" + dataValue + "</h3>";
        });
    });
}
fetchUser()