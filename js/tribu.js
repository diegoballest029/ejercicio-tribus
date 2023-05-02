const url = ('data/datos.json')
fetch('data/datos.json')
.then(Response => Response.json())
.then(data =>{
   verDatos(data)
})
function verDatos (data){
   const datos = document.querySelector('#datos-json');
   const second = document.querySelector('.info');
       data.forEach(element => {
         const{idTribu, tribu, puntos, campers } = element
         datos.innerHTML = 
         `<p> ID ${idTribu}</p>
          <p> Tribu ${tribu}</p>  
          <p> Puntos ${puntos}</p>
          <p> Campers</p>      
         `
         campers.forEach(element => {
             const {id, nombre, edad, ingles, rol, img } = element
             second.innerHTML+= `
             <p> ID ${id}</p>
             <p> Nombre ${nombre}</p>
             <p> Edad ${edad}</p>
             <p> Ingles ${ingles}</p>
             <p> Rol ${rol}</p>
             <p> Img ${img}</p> `
      
      }
         
         
         );
         })
}







