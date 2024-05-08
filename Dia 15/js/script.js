function fetchUser(){
    let xhr=new XMLHttpRequest();
    let url='https://randomuser.me/api/';
    xhr.open('GET',url,true);
    xhr.onreadystatechange=function(){
        if(this.readyState == 4 && this.status ===200){
            let dato= JSON.parse(this.responseText);
            displayUser(dato)
        }else{
            return ("Habemus error!");
        }
    }
    xhr.send()
}

function displayUser(dato){
                //Comando para obtener nombre
                nombre=((dato["results"][0]["name"]["first"])+" "+(dato["results"][0]["name"]["last"]))
                //Comando para obtener correo
                correo=(dato["results"][0]["email"])
    
                //Comando para obtener fecha de nacimiento
                variable= dato["results"][0]["dob"]["date"];
                variable= variable.slice(0,10);
                arrayFechas=variable.split('-');
                ano=arrayFechas[0]
                mes=arrayFechas[1]
                dia=arrayFechas[2]
                fechaFinal=mes+"/"+dia+"/"+ano
                //Comando para obtener dirección
                direccion=((dato["results"][0]['location']['street']['number'])+" "+(dato["results"][0]['location']['street']['name']))
                //Comando para obtener telefono
                telefonoCompleto=dato["results"][0]['phone'];
                arrayTel=telefonoCompleto.split(' ');
                telefonoFinal="("+arrayTel[0]+")"+" "+arrayTel[1]+"-"+arrayTel[2]+arrayTel[3];
                //Comando para obtener password
                contrasena=(dato["results"][0]["login"]["password"])
                console.log(contrasena)
                //Comando para la foto
                foto=(dato["results"][0]['picture']['large'])
                let userInfo=document.getElementById('userInfo');
                if(dato.response == "Habemus error!"){
                    userInfo.innerHTML=`<h1>HABEMUS ERROR!!!</h1>`
                }else{
                    userInfo.innerHTML=`
                    <div class="super">
                        <div class="mini">                    
                            <img src='${foto}' id="foti"></img>
                            <h1>${nombre}</h1>
                            <h1>${correo}</h1>
                            <h1>${fechaFinal}</h1>
                            <h1>${direccion}</h1>
                            <h1>${contrasena}</h1>
                        </div>
                    </div>

                    `
                }
}
fetchUser()