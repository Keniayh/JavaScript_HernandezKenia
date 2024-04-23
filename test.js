function displayHero(data){
    let heroInfo = document.getElementById("superHeroInfo");
    
    if (data.response === "error") {
        heroInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        heroInfo.innerHTML = `
        <h3>Información General</h3>
        <p>Nombre: ${data.name}</p>
        <br><img src="${data.image.url}"</br>
        
        <h3>Estadísticas de Poder</h3>
        <p>Combate: ${data.powerstats.combat}</p>
        <p>Durabilidad: ${data.powerstats.durability}</p>
        <p>Inteligencia: ${data.powerstats.intelligence}</p>
        <p>Poder: ${data.powerstats.power}</p>
        <p>Velocidad: ${data.powerstats.speed}</p>
        <p>Fuerza: ${data.powerstats.strength}</p>
        
        <h3>Trabajo</h3>
        <p>Ocupación: ${data.work.occupation}</p>
        <p>Base: ${data.work.base}</p>
        
        <h3>Conexiones</h3>
        <p>Grupo/Afiliación: ${data.connections["group-affiliation"]}</p>
        <p>Parientes: ${data.connections.relatives}</p>
        
        <h3>Apariencia</h3>
        <p>Color de ojos: ${data.appearance["eye-color"]}</p>
        <p>Género: ${data.appearance.gender}</p>
        <p>Color de cabello: ${data.appearance["hair-color"]}</p>
        <p>Raza: ${data.appearance.race}</p>
        <p>Altura: ${data.appearance.height[0]}, ${data.appearance.height[1]}</p>
        <p>Peso: ${data.appearance.weight[0]}, ${data.appearance.weight[1]}</p>
        
        <h3>Biografía</h3>
        <p>Nombre completo: ${data.biography["full-name"]}</p>
        <p>Alias: ${data.biography.aliases}</p>
        <p>Editorial: ${data.biography.publisher}</p>
        <p>Primera aparición: ${data.biography["first-appearance"]}</p>
        <p>Lugar de nacimiento: ${data.biography["place-of-birth"]}</p>
        <p>Alineación: ${data.biography.alignment}</p>
        <p>Alter ego: ${data.biography["alter-ego"]}</p>
        
        `;
    }
}

// const express = require('express');
// const fs = require('fs');
// const app = express();
// const PORT = 3000;

// app.use(express.json());
// app.use(express.static('public')); // Sirve archivos estáticos desde la carpeta 'public'

// app.post('/api/campers', (req, res) => {
//     const newCamper = req.body;
//     fs.readFile('campers.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error al leer el archivo de campers.');
//             return;
//         }
//         let campers = JSON.parse(data);
//         campers.push(newCamper);
//         fs.writeFile('campers.json', JSON.stringify(campers), (err) => {
//             if (err) {
//                 console.error(err);
//                 res.status(500).send('Error al escribir en el archivo de campers.');
//                 return;
//             }
//             res.status(200).send('Camper añadido correctamente.');
//         });
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Servidor escuchando en el puerto ${PORT}`);
// });


// function addCampers() {
//     // Cargar el diccionario existente de campers desde el almacenamiento local
//     let campersData = localStorage.getItem('campers');
//     let campers = campersData ? JSON.parse(campersData) : [];

//     // Solicitar datos del nuevo estudiante
//     const newCamperId = parseInt(prompt('Identificación: '));
//     const newCamper = {
//         id: newCamperId,
//         Nombres: prompt('Nombres: '),
//         Apellidos: prompt('Apellidos: '),
//         Direccion: prompt('Dirección: '),
//         Acudiente: prompt('Acudiente: '),
//         Contacto: {
//             Celular: parseInt(prompt('Celular: ')),
//             Fijo: parseInt(prompt('Fijo: '))
//         },
//         Riesgo: prompt('Riesgo: ')
//     };

//     // Evaluar si el camper pasa a inscrito
//     if (checkFieldsComplete(newCamper)) {
//         newCamper.Estado = 'Inscrito';
//         campers.push(newCamper);
//     } else { 
//         console.log("No se puede inscribir faltan datos");
//     }

//     // Escribir los datos actualizados de campers en el almacenamiento local
//     localStorage.setItem('campers', JSON.stringify(campers));

//     // Agregar el ID del nuevo camper a notas.json (simulado con console.log)
//     console.log("ID del nuevo camper: " + newCamperId);
// }

// function checkFieldsComplete(camper) {
//     // Verificar si todos los campos obligatorios están completos
//     const requiredFields = ['Nombres', 'Apellidos', 'Direccion', 'Acudiente', 'Contacto', 'Riesgo'];
//     for (const field of requiredFields) {
//         if (!camper[field]) {
//             return false;
//         }
//     }
//     return true;
// }

// // Llamar a la función principal
// addCampers();

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.method === 'POST' && req.url === '/addCamper') {
//         let body = '';
//         req.on('data', (chunk) => {
//             body += chunk.toString();
//         });
//         req.on('end', () => {
//             const newCamper = JSON.parse(body);
//             let campersData = [];
//             try {
//                 campersData = JSON.parse(fs.readFileSync('campers.json'));
//             } catch (err) {
//                 if (err.code !== 'ENOENT') {
//                     throw err;
//                 }
//             }
//             campersData.push(newCamper);
//             fs.writeFileSync('campers.json', JSON.stringify(campersData));
//             res.end('Camper added successfully');
//         });
//     } else {
//         res.end('Invalid request');
//     }
// });

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });

//----------------------------------------------JSON----------------------------------------------------------------------

// const cadenaJSON = '{"nombre: "pepito", "edad": 30}'


// //clon objeto

// const person = {
//     id: "1",
//     name: "joan",
//     age: 30,
//     address: {
//         city: "new york"
//     }
// };



// const clonedPerson = Object.assign({}, person);
// console.log(clonedPerson);

//array

// push, pop, toString, join, indexOf, lastIndexOf(),    
//array.join() -> unir elementos o cadenas (, ) agrega coma y espacio.
//toString.array()

// Parent class
// class Vehicle {
//     constructor(make, model, year) {
//       this.make = make;
//       this.model = model;
//       this.year = year;
//     }
  
//     displayDetails() {
//       console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
//     }
//   }
  
//   // Subclass
//   class Car extends Vehicle {
//     constructor(make, model, year, doors) {
//       super(make, model, year);
//       this.doors = doors;
//     }
  
//     displayDetails() {
//       super.displayDetails();
//       console.log(`Number of Doors: ${this.doors}`);
//     }
//   }
  
//   // Example usage
//   const myCar = new Car('Toyota', 'Camry', 2022, 4);
//   myCar.displayDetails();
  