//--------------------------------------------------------------
//-               PROYECTO DE PYTHON A JAVA SCRIPT             -
//--------------------------------------------------------------


// Letreros par ael menú
function letreroC(){
    console.log(`
    ------------------------------
    -       ROL COORDINACIÓN     -
    -          ACADÉMICA         -
    ------------------------------`);
}

function letreroT(){
    console.log(`
    ------------------------------
    -         ROL TRAINERS       -
    ------------------------------`);
}
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
                while (comeBackC == true){
                    letreroC();
                    console.log("Has ingresado a la sección de Trainers.");
                    console.log("¿Què deas hacer?");
                    console.log("1. Crear nuevo Trainer \t2. Asignar horario \t3.Ver Trainers \n4. Volver al menú anterior");
                    let optionT = prompt("Digite el número según la opción a la deseas ingresar: ");
                    if (optionT == 1) {
                        //aca va una impo
                    }
                    else if (optionT == 2){
                        //aca va otra impo
                    }
                    else if ( optionT == 3) {
                        //otra impo
                    }
                    else {
                        if (optionT == 4){
                            comeBackC = false;
                        }
                    }
                }
            }
            else if (optionC == 2) {
                let comeBackC = true
                while (comeBackC == true) {
                    letreroC();
                    console.log("Has ingresado a la sección de Campers");
                    console.log("¿Qué deseas hacer?");
                    console.log("1. Incripciones \t2. Matriculas \n3. Editar información \t4.Notas \n5. Volver al menú anterior");
                    let optionCa = prompt("Digite el número según la opción a la que deseas ingresar: ");
                    if (optionCa == 1) {
                        console.log("Favor ingresar datos de ");
                        //impo
                        //impo
                        console.log("Listo!");
                    }
                    else if (optionCa == 2) {
                        console.log("¿Deseas actualizar los campers que han sido aprobados?");
                        let optionSN = prompt("Ingresa si o no: ")
                        if (sd == 'si'){
                            //impo
                            
                        }
                    }
                }

            }
        
        
        }    
    } 


}   

