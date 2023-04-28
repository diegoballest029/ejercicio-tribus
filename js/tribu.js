fetch('data/datos.json')
.then(Response => Response.json())
.then(data => {
   document.getElementById('datos-json').innerHTML = `
   <p>ID ${data.idTribu}</p>
   <p>Tribu ${data.tribu}</p>
   <p>Puntos ${data.puntos}</p>`;
})

.catch(error => console.log(error));as













