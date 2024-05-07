function fetchCaratersPreview(){
    let xhr = new XMLHttpRequest();
    let url = `https://randomuser.me/api/?results=1`
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            mostrarPersona(response);
        }
        else if( this.readyState == 4 ){
            console.log('Error:',this.statusText);
        }
    };
    xhr.send();
}
fetchCaratersPreview();

function mostrarPersona(data) {
    let personInfo = document.getElementById("person");

    personInfo.innerHTML = `
    
    `;
}


console.log("hi")