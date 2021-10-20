let random = Math.round(Math.random() * 150) + 1;

window.onload = function () {
  getPokemon(random).then((pokemon) => {
    generateContent(pokemon);
  });
};

function interval(index = 1) {
  setTimeout(() => {
    getPokemon(index).then((pokemon) => {
      generateContent(pokemon);
    });
    return index == 150 ? interval() : interval(index + 1);
  }, 30000);
}

interval();

function btnListener() {
  random = Math.round(Math.random() * 150) + 1;
  getPokemon(random).then((pokemon) => {
    generateContent(pokemon);
  });
}

let contentDiv = document.getElementById("content");

function generateContent(pokemon) {
  contentDiv.innerHTML = '';

  let imageDiv = document.createElement("div");
  let pokeImg = document.createElement("img");
  let pokeImgShiny = document.createElement("img");
  let pokeName = document.createElement("h3");

  pokeImg.src = pokemon.sprites.front_default;
  pokeImg.width = 200;

  pokeImgShiny.src = pokemon.sprites.front_shiny;
  pokeImgShiny.width = 200;

  pokeName.innerHTML = `${pokemon.order}: ${pokemon.name}`;

  imageDiv.append(pokeName);
  imageDiv.append(pokeImg);
  imageDiv.append(pokeImgShiny);

  imageDiv.classList.add("img-fluid", "principal", "mt-5");

  contentDiv.append(imageDiv);

  let propsDiv = document.createElement("div");
  let skillsTitle = document.createElement('strong');
  skillsTitle.innerHTML = `<h3 class="mt-5">${pokemon.name} abilities</h3>`;
  propsDiv.append(skillsTitle);

  pokemon.abilities.forEach((skill) => {
    let prop = document.createElement("p");
    prop.innerHTML = skill.ability.name;
    prop.classList.add("properties");
    propsDiv.append(prop);
  });

  contentDiv.append(propsDiv);
}
