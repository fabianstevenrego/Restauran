const urlJsonClientes = "https://johnfredyb.github.io/ApiPersonas/Persona.json";

let clienteGuardado = localStorage.getItem("cliente");

var clienteId = clienteGuardado;

function listarClientes() {
  fetch(urlJsonClientes)
    .then(response => response.json())
    .then(data => {

      let img ="";
      let style="";
      let style2="";

      if (data.Personas[clienteId - 1].Sexo == "Mujer") {
        img = "../img/logoMujer.png";
        style ='style="background-color: #e5a2f6;"'
        style2 ='style="background-color: #d6c0d5fc;"'

    } else if (data.Personas[clienteId - 1].Sexo == "Hombre") {
        img = "../img/logoHombre.jpeg";
        style ='style="background-color: #90ca76;"'
        style2 ='style="background-color: #d7f0cb;"'
    }
    console.log(img);
      const contenedor = document.getElementById('contenedor');
      contenedor.innerHTML = `
      <div class="container d-flex justify-content-center align-items-center vh-100" >
      <div class="card text-center" style="width: 18rem;" >
      <div class="container" ${style}>
      <div class="row">
      
        <img src="${img}" class="card-img-top rounded-circle" alt="Imagen" >
        <div class="card-body">
        
        
          <h5 class="card-title">${data.Personas[clienteId - 1].Nombre}  ${data.Personas[clienteId - 1].Apellidos}</h5>
          <ul class="list-group" >
              <li class="list-group-item" ${style2}> Email : ${data.Personas[clienteId - 1].Email}</li>
              <li class="list-group-item" ${style2}> Fecha de nacimiento: ${data.Personas[clienteId - 1]['Fecha Nacimiento']}</li>
              <li class="list-group-item" ${style2}> Celular: ${data.Personas[clienteId - 1].Celular}</li>
            </ul> 
       
      </div>
    </div>
  </div>
</div>
      `;

      console.log(clienteGuardado);
      console.log(categoriaGuardada);
      console.log(data);
      console.log(clienteId);

      
    })
    .catch(error => console.error(error));
}

listarClientes();

