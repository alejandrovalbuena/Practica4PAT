
function obtainNews()   {

    let pais = document.querySelector("#pais").value;

    const apikey = "0a60fdf748994c678fda4a5ffa99971e";
    const url = `https://newsapi.org/v2/top-headlines?category=business&country=${pais}&apikey=${apikey}`;
    

    const respuesta = fetch(url).then()
    console.log(rdo);
}