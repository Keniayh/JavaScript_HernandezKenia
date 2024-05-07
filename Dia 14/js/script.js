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
    <div class="name">
            <img src= ${data.results[0].picture.medium} alt="hi" id="img">
            </div>
            <div class="icons">
                <div class="tooltip">
                    <button><img src="./img/card_icons.png" alt="name"></button>
                    <div class="tooltiptext"> Hi my name is: <br></br> ${data.results[0].name.first} ${data.results[0].name.last}</div>
                </div>
                <div class="tooltip">
                    <button><img src="./img/card_icons (1).png" alt="email"></button>
                    <div class="tooltiptext">My email address is: <br></br> ${data.results[0].email}<br></br></div>
                </div>
                <div class="tooltip">
                    <button><img src="./img/card_icons (2).png" alt="birthday"></button>
                    <div class="tooltiptext">My birthday is: <br></br> ${data.results[0].dob.date}</div>
                </div>
                <div class="tooltip">
                    <button><img src="./img/card_icons (3).png" alt="address"> </button>
                    <div class="tooltiptext">My address is: <br></br> ${data.results[0].location.street.number} ${data.results[0].location.street.name}</div>
                </div>
                <div class="tooltip">
                    <button><img src="./img/card_icons (5).png" alt="number"></button>
                    <div class="tooltiptext">My address is: <br></br> ${data.results[0].phone}</div>
                </div>
                <div class="tooltip">
                    <button><img src="./img/card_icons (4).png" alt="password"></button>
                <div class="tooltiptext">My password is: <br></br> ${data.results[0].login.password}<br></br></div>
            </div>
    </div>
    `;
}


console.log("hi");