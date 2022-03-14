let urlHoy = "http://api.marketstack.com/v1/eod/latest?access_key=8b9d1359387bb5806739d1b6bc546e99&symbols=ITX.BMEX";
let urlYear = "http://api.marketstack.com/v1/eod/latest?access_key=8b9d1359387bb5806739d1b6bc546e99&symbols=ITX.BMEX&date_from=2022-01-01&date_to=2022-01-02";



var datosHoy;
var datosYear;

fetch(urlHoy)
.then(response => response.json() )
.then(data => {
    datosHoy = data.data[0].close;
})



fetch(urlYear)
.then(response => response.json() )
.then(data => {
    datosYear = data.data[0].close;
})


var parrafo = document.getElementById("parrafo")

parrafo.innerHTML = `<p> El precio de nuestra acción es de ${datosHoy} y el precio del día 1 de enero fue de ${datosYear}</p>`


//botones

// var btnHoy = document.getElementById("live");
// btnHoy.addEventListener("click", hoy);


// function hoy(){

//     parrafo.innerHTML = `<p> El precio de nuestra acción es de ${datosHoy}</p>`
// }


// var btnYear = document.getElementById("year");
// btnHoy.addEventListener("click", year);

// function year(){

//     parrafo.innerHTML = `<p> El precio de nuestra acción es de ${datosYear}</p>`
// }






function obtainNews()   {

    let pais = document.querySelector("#pais").value;

    const apikey = "0a60fdf748994c678fda4a5ffa99971e";
    const url = `https://newsapi.org/v2/top-headlines?category=business&country=${pais}&apikey=${apikey}`;
    

    const respuesta = await fetch(url);
    const rdo = await respuesta.json();
    console.log(rdo);
}


