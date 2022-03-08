
let cotizacion = "aaaa";
let timeFrame = "bbbbblet ";



let tiempoReal = async () => {
    let peticion = await fetch("http://api.marketstack.com/v1/eod/latest?access_key=8b9d1359387bb5806739d1b6bc546e99&symbols=ITX.BMEX", {
        method: "GET",
    } );

    if(peticion.status === 200) {
        let cotEndOfDay = await peticion.json();
        cotizacion = cotEndOfDay.data.close;
        timeFrame = "al último cierre";
        $("#parrafo").html("La cotización " + timeFrame + "es de "+ cotizacion);
    }

};

//La idea era hacer lo mismo que en tiempoReal en cada uno de los botones, pero tengo un problema 



//let lastYear = () => {

//};


//let yearToDate = () => {

//};

// let parrafo = $("#parrafo");
// parrafo.html("La cotización " + timeFrame + "es de "+ cotizacion);



