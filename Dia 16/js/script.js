class UserInfo extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <div id="userInfo" class="userInfo"></div>
        `;
    }

    connectedCallback() {
        this.fetchUser();
    }

    fetchUser() {
        let xhr = new XMLHttpRequest();
        let url = 'https://randomuser.me/api/';
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status === 200) {
                let dato = JSON.parse(xhr.responseText);
                this.displayUser(dato);
            } else {
                this.displayError();
            }
        }
        xhr.send();
    }

    displayUser(dato) {
        const user = dato.results[0];
        const nombre = `${user.name.first} ${user.name.last}`;
        const correo = user.email;
        const fecha = new Date(user.dob.date);
        const fechaFinal = `${fecha.getMonth() + 1}/${fecha.getDate()}/${fecha.getFullYear()}`;
        const direccion = `${user.location.street.number} ${user.location.street.name}`;
        const telefonoCompleto = user.phone;
        const arrayTel = telefonoCompleto.split(' ');
        const telefonoFinal = `(${arrayTel[0]}) ${arrayTel[1]}-${arrayTel[2]}${arrayTel[3]}`;
        const contrasena = user.login.password;
        const foto = user.picture.large;
        const buttom = this.getElementById('hola');
        const userInfo = this.shadowRoot.getElementById('userInfo');

        userInfo.innerHTML = `
            <img src="${foto}" id="foti"></img>
            <ul class="values_list horizontal_center" id="values_list">
                <li data-title="Hi, My name is" data-value="${nombre}" data-label="name" class="active" id="elemento"></li>
                <li data-title="My email address is" data-value="${correo}" data-label="email" class=" " id="elemento"></li>
                <li data-title="My birthday is" data-value="${fechaFinal}" data-label="birthday" class=" " id="elemento"></li>
                <li data-title="My address is" data-value="${direccion}" data-label="address" class=" " id="elemento"></li>
                <li data-title="My phone number is" data-value="${telefonoCompleto}" data-label="phone" class=" " id="elemento"></li>
                <li data-title="My password is" data-value="${contrasena}" data-label="password" class=" " id="elemento"></li>
            </ul>
        `;
        this.addEventListenerToLiElements();
    }

    displayError() {
        const userInfo = this.shadowRoot.getElementById('userInfo');
        userInfo.innerHTML = `<h1>HABEMUS ERROR!!!</h1>`;
        const buttom = document.getElementById('hola');
        buttom.innerHTML = `<h1>HABEMUS ERROR!!!</h1>`;
    }

    addEventListenerToLiElements() {
        const elementos = this.shadowRoot.querySelectorAll("#values_list li");
        const infoDisplay = document.getElementById("info_Display");

        elementos.forEach(elemento => {
            if (elemento.classList.contains("active")) {
                const dataTitle = elemento.getAttribute("data-title");
                const dataValue = elemento.getAttribute("data-value");
                infoDisplay.innerHTML = "<p>" + dataTitle + "</p>" + "<h3>" + dataValue + "</h3>";
            }

            elemento.addEventListener("mouseover", () => {
                elementos.forEach(e => {
                    e.classList.remove("active");
                });
                elemento.classList.add("active");
                const dataTitle = elemento.getAttribute("data-title");
                const dataValue = elemento.getAttribute("data-value");
                infoDisplay.innerHTML = "<p>" + dataTitle + "</p>" + "<h3>" + dataValue + "</h3>";
            });
        });
    }
}

customElements.define('user-info', UserInfo);

// Iniciar la búsqueda del usuario al cargar la página
fetchUser();
