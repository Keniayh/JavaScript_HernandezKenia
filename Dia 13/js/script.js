document.addEventListener("DOMContentLoaded", function() {
    // Event listener para el botón "Guardar Heroe"
    document.querySelector(".btn-primary").addEventListener("click", function() {
        // Recolectar la información del héroe
        const characterName = document.getElementById("characterName").value.trim();
        const actorName = document.getElementById("actorName").value.trim();
        const age = document.getElementById("age").value.trim();
        const cityName = document.getElementById("cityName").value.trim();
        const poster = document.getElementById("poster").value.trim();
        const dateAppears = document.getElementById("dateAppears").value.trim();
        const producer = document.getElementById("producer").value.trim();
        
        // Recolectar la información de los trajes
        const suits = [];
        const suitDivs = document.querySelectorAll(".body-detail > div");
        suitDivs.forEach(suitDiv => {
            const suitName = suitDiv.querySelector("input#suitName").value.trim();
            const suitImage = suitDiv.querySelector("input#suitImage").value.trim();
            if (suitName !== "" && suitImage !== "") {
                suits.push({ name: suitName, image: suitImage });
            }
        });
        
        // Guardar la información del héroe y los trajes (aquí puedes hacer lo que necesites con esta información)
        console.log("Información del héroe:", { characterName, actorName, age, cityName, poster, dateAppears, producer });
        console.log("Información de los trajes:", suits);
        
        // Limpiar los campos del formulario después de guardar
        document.getElementById("frmDataHero").reset();
        document.querySelector(".body-detail").innerHTML = "";
    });
    
    // Event listener para el botón "+" de añadir trajes
    document.getElementById("addSuite").addEventListener("click", function() {
        const suitInput = document.getElementById("suitForm");
        suitInput.style.display = "block";
    });
    
    // Event listener para el botón "Guardar Traje"
    document.getElementById("saveSuit").addEventListener("click", function() {
        const suitName = document.getElementById("suitName").value.trim();
        const suitImage = document.getElementById("suitImage").value.trim();
        
        if (suitName !== "" && suitImage !== "") {
            const bodyDetail = document.querySelector(".body-detail");
            const suitDiv = document.createElement("div");
            suitDiv.classList.add("mb-3");
            suitDiv.innerHTML = `
                <div class="input-group">
                    <input type="text" class="form-control" value="${suitName}" readonly>
                    <input type="text" class="form-control" value="${suitImage}" readonly>
                </div>
            `;
            bodyDetail.appendChild(suitDiv);
            
            // Ocultar el formulario después de guardar
            const suitForm = document.getElementById("suitForm");
            suitForm.style.display = "none";
            
            // Limpiar los campos del formulario después de guardar
            suitForm.reset();
        } else {
            alert("Por favor ingrese un nombre y una imagen para el traje.");
        }
    });
});

// // Array para almacenar los héroes
// let heroes = [];

// // Función para guardar los datos del formulario en un objeto
// function guardarHeroe() {
//     // Obtener los valores de los campos del formulario
//     const characterName = document.getElementById("characterName").value.trim();
//     const actorName = document.getElementById("actorName").value.trim();
//     const age = document.getElementById("age").value.trim();
//     const cityName = document.getElementById("cityName").value.trim();
//     const poster = document.getElementById("poster").value.trim();
//     const dateAppears = document.getElementById("dateAppears").value.trim();
//     const producer = document.getElementById("producer").value;

//     // Obtener los nombres de los trajes del personaje
//     const suits = [];
//     const suitElements = document.querySelectorAll(".body-detail input[type='text']");
//     suitElements.forEach(suitElement => {
//         const suitName = suitElement.value.trim();
//         if (suitName !== "") {
//             suits.push(suitName);
//         }
//     });

//     // Crear un objeto con los datos del héroe
//     const heroe = {
//         characterName: characterName,
//         actorName: actorName,
//         age: age,
//         cityName: cityName,
//         poster: poster,
//         dateAppears: dateAppears,
//         producer: producer,
//         suits: suits
//     };

//     // Agregar el héroe al array
//     heroes.push(heroe);

//     // Limpiar el formulario
//     document.getElementById("frmDataHero").reset();

//     // Limpiar la sección de trajes del personaje
//     document.querySelector(".body-detail").innerHTML = "";

//     // Mostrar mensaje de éxito
//     alert("Héroe guardado exitosamente");

//     console.log(heroes); // Puedes mostrar los héroes en la consola para verificar
// }

// // Event listener para el botón "Guardar Heroe"
// document.querySelector(".btn-primary").addEventListener("click", function() {
//     guardarHeroe();
// });

// // Event listener para el botón "Agregar Traje"
// document.getElementById("addSuite").addEventListener("click", function() {
//     document.getElementById("suitForm").style.display = "block";
// });

// // Event listener para el botón "Guardar Traje"
// document.getElementById("saveSuit").addEventListener("click", function() {
//     const suitName = document.getElementById("suitName").value.trim();
//     const suitImage = document.getElementById("suitImage").value.trim();
    
//     if (suitName !== "" && suitImage !== "") {
//         // Crear el div del traje
//         const bodyDetail = document.querySelector(".body-detail");
//         const suitDiv = document.createElement("div");
//         suitDiv.classList.add("mb-3");
//         suitDiv.innerHTML = `
//             <div class="input-group">
//                 <input type="text" class="form-control" value="${suitName}" readonly>
//                 <button class="btn btn-outline-danger" type="button">Eliminar</button>
//             </div>
//             <div class="mt-2">
//                 <img src="${suitImage}" alt="Traje" class="img-fluid">
//             </div>
//         `;
//         bodyDetail.appendChild(suitDiv);
        
//         // Ocultar el formulario
//         document.getElementById("suitForm").style.display = "none";
        
//         // Limpiar los campos del formulario
//         document.getElementById("suitName").value = "";
//         document.getElementById("suitImage").value = "";
//     } else {
//         alert("Por favor ingrese un nombre y un enlace de imagen para el traje.");
//     }
// });

// // Event listener para eliminar trajes del personaje
// document.querySelector(".body-detail").addEventListener("click", function(event) {
//     if (event.target.classList.contains("btn-outline-danger")) {
//         event.target.closest(".mb-3").remove();
//     }
// });

