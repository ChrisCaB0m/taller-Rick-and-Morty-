document.addEventListener("DOMContentLoaded", function () {
    const charactersContainer = document.getElementById("characters-container");
  
    // Reemplaza 'URL_DEL_API' con el verdadero endpoint del API
    const apiUrl = 'https://rickandmortyapi.com/api/character/1,183,5,6,1,23,5';
  
    // Realiza la solicitud al API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Itera sobre los personajes y crea tarjetas
        data.forEach(character => {
          const card = createCharacterCard(character);
          charactersContainer.appendChild(card);
        });
      })
      .catch(error => console.error('Error al obtener datos del API:', error));
  
    // Función para crear una tarjeta de personaje
    function createCharacterCard(character) {
      const card = document.createElement("div");
      card.classList.add("character-card");
  
      const image = document.createElement("img");
      image.src = character.image;
      image.alt = character.name;
      image.classList.add("character-image");
  
      const name = document.createElement("h2");
      name.textContent = character.name;
  
      const status = document.createElement("p");
      status.textContent = `Estado: ${character.status}`;
  
      // Agrega más detalles según la estructura del objeto del personaje
  
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(status);
  
      return card;
    }
  });
