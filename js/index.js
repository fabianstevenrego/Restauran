const urlJsonClientes = "https://johnfredyb.github.io/ApiPersonas/Persona.json?authuser=0";
const urlCategoria = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

function listarClientes() {
    fetch(urlJsonClientes)
        .then(response => response.json())
        .then(data => {
            const menuClientes = document.getElementById("cliente");
            data.Personas.forEach(persona => {
                const opcionCliente = document.createElement("option");
                opcionCliente.textContent = persona.ID;
                menuClientes.appendChild(opcionCliente);
            });
        })
        .catch(error => console.error(error));
}

function listarCategoria() {
    fetch(urlCategoria)
        .then(response => response.json())
        .then(data => {
            const menuClientes = document.getElementById("categoria");
            data.meals.forEach(meals => {
                const opcionMenu = document.createElement("option");
                opcionMenu.textContent = meals.strCategory;
                menuClientes.appendChild(opcionMenu);
            });
        })
        .catch(error => console.error(error));
}
listarClientes();
listarCategoria();



function cargarCliente() {
    let cliente = document.getElementById("cliente").value;
    let categoria = document.getElementById("categoria").value;
    
    localStorage.setItem("cliente", cliente);
    localStorage.setItem("categoria", categoria);

    console.log(localStorage.getItem("cliente"));
    console.log(localStorage.getItem("categoria"));
}