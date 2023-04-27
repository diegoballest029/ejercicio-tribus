const URL_API ="data/datos.json";
function loadData(){
    fetch(URL_API)
    .then((Response) =>{
        return Response.json();
    })
    .then((data) => {
        viewHTML(data);
    })
}
function viewHTML(myData){
    const divContenedor = document.querySelector('#contenedor');
    const {idTribu, tribu, puntos} = myData;
    divContenedor.innerHTML= /* HTML*/`
    <p>idTribu:${idTribu}</p>
    <p>nombre:${tribu}</p>
    <p>puntos:${puntos}</p>
    `
}



