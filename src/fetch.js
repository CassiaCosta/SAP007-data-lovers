// window.onload = function() {
//     showPokemon();
// };

// const pokemonList = document.getElementById('pokemonList');
// const url = './data/pokemon/pokemon.json';

// function showPokemon(element) {
//     return document.createElement(element);
// }

// function append(parent, el) {
//     return parent.appendChild(el);
// }

// fetch(url)
// .then(function(data))



// function showPokemon(element) {
//     fetch('./data/pokemon/pokemon.json') // Endereço da API escolhida
//     .then(response => { // Criação da primeira promessa que recebe a função response
//         return response.json(); // Conversão dos dados json em objetos que poderão ser manipulados com JS
//     })
//     .then(data => { //Segunda promessa, para manipulação dos obejetos
//         let pokemons = data["pokemon"].filter(poke => {  //
//             if (element != null){
//                 return poke["element"].includes(element);
//             }else {
//                 return poke;
//             }
//         })
//         let pokemonData = document.getElementById("mainList");
//         pokemonData.innerHTML = `
//         ${pokemons.map((pokemon) => `
//         <div class="card">
//         <h3>${pokemon["name"]}</h3>
//         <img src="${pokemon["img"]}">
//         <h3>Altura: ${pokemon.size["height"]}</h3>
//         <h3>Peso: ${pokemon.size["weight"]}</h3>
//         <h3>Candies: ${candiesCount(pokemon.evolution["candy"])}</h3>
//         ${pokemon["type"].map(tipo => `
//         <button class="type-poke color-${tipo}">${translate(tipo)}</button>
//         `).join("")}
//         </div>
//         `).join("")}
//         `
//     });

//     function candiesCount (name){
//         if (name === undefined) {
//             return "Não Evolui";
//         } else {
//             return name;
//         }
//     }

//     function translate (type){
//         switch (type){
//             case "Water":
//             return "Água"
//             case "Dragon":
//             return "Dragão"
//             case "Electric":
//             return "Elétrico"
//             case "Ghost":
//             return "Fantasma"
//             case "Fire":
//             return "Fogo"
//             case "Ice":
//             return "Gelo"
//             case "Bug":
//             return "Inseto"
//             case "Fighting":
//             return "Lutador"
//             case "Normal":
//             return "Normal"
//             case "Rock":
//             return "Pedra"
//             case "Grass":
//             return "Planta"
//             case "Psychic":
//             return "Psíquico"
//             case "Ground":
//             return "Terra"
//             case "Poison":
//             return "Venenoso"
//             case "Flying":
//             return "Voador"
//         }
//     }
// }