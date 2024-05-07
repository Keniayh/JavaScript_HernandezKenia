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
