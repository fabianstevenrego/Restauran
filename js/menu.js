
let CategoriaGuardada = localStorage.getItem("categoria");


fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${CategoriaGuardada}`)
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('contenedor');
    contenedor.classList.add('row'); // Agrega la clase 'row' de Bootstrap

    data.meals.forEach(meal => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.classList.add('col-md-2'); // Agrega la clase 'col-md-3' para mostrar 4 columnas en pantallas medianas
      card.style.margin = '5px'; // Aplica un margen de 10px a la tarjeta

      
      const img = document.createElement('img');
      img.src = meal.strMealThumb;
      img.classList.add('card-img-top'); // Agrega la clase 'card-img-top' de Bootstrap
      img.style.marginRight = '3px'; // Aplica un margen de 10px a la tarjeta
      img.style.marginTop = '10px'; // Aplica un margen de 10px a la tarjeta
      
      
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.innerText = meal.strMeal;
      title.style ="color: white;"

      const description = document.createElement('p');
      description.classList.add('card-text');
      description.style ="color: white;"
      description.innerText = "precio: "+"$"+meal.idMeal;



      cardBody.appendChild(title);
      cardBody.appendChild(description);

      card.appendChild(img);
      card.appendChild(cardBody);

      contenedor.appendChild(card);

      console.log(meal.strMeal, meal.strMealThumb, meal.idMeal);
    });
  })
  .catch(error => console.log(error));
