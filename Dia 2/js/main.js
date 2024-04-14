//--------------------------------------------------------------
//-               PROYECTO DE PYTHON A JAVA SCRIPT             -
//--------------------------------------------------------------
import {
    letreroC,
    letreroT
} from "./modulo/fuction.js";
import {
    addCampers
} from "./modulo/campers.js";
import {
    addTrainers
} from "./modulo/trainers.js";
//------------------------------------------------------------
//-                            MENÚ                          -
//------------------------------------------------------------

let end = true;

while (end == true) {
    console.log("-----------------------------");
    console.log("         BIENVENIDO A        ");
    console.log("         CAMPUSLANDS         ");
    console.log("-----------------------------");
    console.log("");
    console.log("Selecciona el cargo al que perteneces: ");
    console.log("1. Coordinador \t2. Trainer \t3.Salir");

    let answer = prompt("Ingrese el nùmero segùn el rol: ");

    if (answer == 1) {
        let comeBack = true;
        while (comeBack == true) {
            letreroC();
            console.log("¿A qué área deseas ingresar?");
            console.log("1. Trainers \t2. Campers \n3. Rutas de entrenamiento  \t4. Reportes \n5. Volver al menú principal");
            optionC = prompt(" Ingresa el número según el área a la cual deseas ingresar: ");
            if (optionC == 1) {
                let comeBackC = true;
                while (comeBackC == true) {
                    letreroC();
                    console.log("Has ingresado a la sección de Trainers.");
                    console.log("¿Què deas hacer?");
                    console.log("1. Crear nuevo Trainer \t2. Asignar horario \t3.Ver Trainers \n4. Volver al menú anterior");
                    let optionT = prompt("Digite el número según la opción a la deseas ingresar: ");
                    if (optionT == 1) {
                        addTrainers();
                    }
                    else if (optionT == 2) {
                        //aca va otra impo
                    }
                    else if (optionT == 3) {
                        //otra impo
                    }
                    else {
                        if (optionT == 4) {
                            comeBackC = false;
                        }
                    }
                }
            }
            else if (optionC == 2) {
                let comeBackC = true;
                while (comeBackC == true) {
                    letreroC();
                    console.log("Has ingresado a la sección de Campers");
                    console.log("¿Qué deseas hacer?");
                    console.log("1. Incripciones \t2. Matriculas \n3. Editar información \t4.Notas \n5. Volver al menú anterior");
                    let optionCa = prompt("Digite el número según la opción a la que deseas ingresar: ");
                    if (optionCa == 1) {
                        console.log("Favor ingresar los datos del nuevo camper: ");
                        //impo
                        addCampers();
                        console.log("Listo!");
                    }
                    else if (optionCa == 2) {
                        console.log("¿Deseas actualizar los campers que han sido aprobados?");
                        let optionSN = prompt("Ingresa si o no: ")
                        if (optionSN == 'si') {
                            //impo
                            console.log("Se ha actualizado con éxito puedes ver los cambios en 'Reportes'"); 
                        }
                        else if (optionSN == 'no') {
                            console.log("");
                        }
                    }
                    else if (optionCa == 3) {
                        console.log("");
                    }
                    else if (optionCa == 4) {
                        console.log("Has ingresado a la sección de notas");
                        console.log("1. Nota inicial \t2. Nota modulos");
                        let optN = prompt("Dijite número según la opción a la que deseas ingresar: ");
                        if (optN == 1) {
                            //impo
                        }
                        else if (optN == 2) {
                            console.log("");
                        }
                    }
                    else {
                        if (optionCa == 5) {
                            comeBackC = false;
                        }
                    }
                }
            }
            else if (optionC == 3) {
                let comeBackR = true;
                while (comeBackR == true) {
                    letreroC();
                    console.log("Has ingresado a la sección Rutas de entrenamiento");
                    console.log("¿Qué deseas hacer?");
                    console.log("1. Motrar Rutas \t 2. Crear rutas de entrenamiento \n3. Volver al menú anterior");
                    let optionR = prompt("Dígite el número según la opción a la deseas ingresar: ");
                    if (optionR == 1) {
                        letreroC();
                        console.log("Rutas de entrenamiento: ");
                        //impo
                    }
                    else if (optionR == 2) {
                        letreroC();
                        console.log("Has ingresado a la sección de crear rutas.")
                        //impo
                        console.log("Felicidades has creado la ruta con éxito!")
                    }
                    else {
                        if (optionR == 3) {
                            comeBackR = false;
                        }
                    }
                }
            }
            else if (optionC  == 4) {
                let comeBackRe = true;
                while (comeBackRe == true) {
                    letreroC();
                    console.log("Has entrado a la sección de reportes");
                    console.log("¿Qué deseas ver?");
                    console.log("1. Campers que se encuentran inscritos \n2. Campers que aprobaron el examen inicial\n3. Entrenadores que se encuentran trabajando con CampusLands");
                    console.log("4. Campers que se encuentran con bajo rendimiento \n5. Campers y los trainer que se encuentren asociados a una ruta de entrenamiento");
                    console.log("6. Número de campers que perdieron y aprobaron cada uno de los módulos \n7. Regresar al modulo anterior.");
                    let optR = prompt("Dígite el número según la sección a la deseas ingresar: ");
                    if (optR == 1){
                        //impo
                    }
                    else if (optR == 1){
                        //impo
                    }
                    else if (optR == 2){
                        //impo
                    }
                    else if (optR == 3){
                        //impo
                    }
                    else if (optR == 4){
                        //impo
                    }
                    else if (optR == 5){
                        //impo
                    }
                    else if (optR == 6){
                        //impo
                    }
                    else {
                        if (optR == 7) {
                            comeBackRe = false;
                        }
                    }
                }
            }
            else {
                if (optionC == 5) {
                    comeBack = false;
                }
            }
        }
    }
    else if (answer == 2) {
        let comeBackT = true;
        while (comeBackT == true) {
            letreroT();
            console.log("Bienvenido al rol de Trainer");
            console.log("¿Qué deseas hacer?");
            console.log("1. Horario \t2. Volver al inicio");
            let optionH = prompt ("Ingresa el número según el área a la cual deseas ingresar: ");
            if (optionH == 1) {
                letreroT();
                console.log("Has ingresado a la sección de Horarios");
                console.log("Completa la siguiente información para saber tu horario de trabajo: ");
                //let ID = prompt("Ingresa tu número de identificación: ");
            }
            else {
                if (optionH == 2){
                    comeBackT = false;
                }
            }
        }
    }
    else {
        if (answer == 3) {
            end = false
        }
    }
}   