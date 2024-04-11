// ***************** FUNCION SIN RETORNO Y SIN PARAMETROS *****************
function funcionNormal(){
    console.log("Mi función");
}

// ***************** FUNCION SIN RETORNO Y CON PARAMETROS *****************
function suma(a,b){
    console.log(a+b);
}
// ***************** FUNCION CON RETORNO Y CON PARAMETROS *****************
function sumaR(a,b){
    //console.log(a+b);
    return a+b;
}
// ***************** FUNCION CON RETORNO Y SIN PARAMETROS *****************
function salonFavorito(){
    //console.log(a+b);
    return "P1";
}

//****************************************************************
//************* Conversor de unidades de temperatura *************
//****************************************************************


function conversor(c){
    f = 32 + (9*c/5);
    console.log(f);
}

conversor(20);

function conversorD(f){
    c = 20;
    f = 32 + (9*c/5);
    return f
}

console.log(conversorD(f))

// 肯亞·尤莉絲·埃爾南德斯·迪亞茲 - 哥倫比亞