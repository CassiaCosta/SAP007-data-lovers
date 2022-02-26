import { orderFilter, regionFilter, searchName, typeFilter } from './data.js';
import data from './data/pokemon/pokemon.js';


let selectType = document.getElementById('typeFilter');
// let selectSize = document.getElementById('sizeFilter');
let selectRegion = document.getElementById('regionFilter');
let selectOrder = document.getElementById('orderFilter');
let inputName = document.getElementById('nameFilter');

let clearButton = document.getElementById('clearButton');


// FUNÇÃO DE MOSTRAR OS CARDS

function showPokemon(data) {
    document.getElementById('pokemonList').innerHTML = data.map((item) => `
    <div class="cards">
        <section class="front_cards">
            <p class="numberPokemon">${item.num}</p>
            <picture>
                <img class="image_card" src="${item.img}" alt="imagem do Pokémon">
            </picture>
            <div class="info_cards">
                <p class="namePokemon">${item.name}</p>
                <p class="typePokemon"> <b>Tipo:</b> ${item.type}</p>
                <p class="regionPokemon"> <b>Região:</b> ${item.generation["name"]}</p>
            </div>
            </section>
            <section class="back_cards">
                <p class="heightPokemon"> <b> Altura:</b> ${item.size["height"]}</p>
                <p class="weightPokemon"> <b> Peso: </b> ${item.size["weight"]}</p>
                <p class="rarityPokemon"> <b>Raridade:</b> ${item["pokemon-rarity"]}</p>
                <p class="specialAttackPokemon"> <b>Ataque especial:</b> <br> ${item["special-attack"][0].name}</p>
            </section>
    </div>
    `).join('')
}

showPokemon(data.pokemon);


function searchByType() {
    return showPokemon(typeFilter(data.pokemon, selectType.value))
}

// function searchBySize() {
//     return sizeFilter
// }

function searchByRegion() {
    return showPokemon(regionFilter(data.pokemon, selectRegion.value))
}

function searchByOrder() {
    return showPokemon(orderFilter(data.pokemon, selectOrder.value))
}

function searchByName() {
    return showPokemon(searchName(data.pokemon, inputName.value))
}

function cleanFilters() {
    selectType.value = ""
    // selectSize.value = ""
    selectRegion.value = ""
    selectOrder.value = ""
    inputName.value = ""
    showPokemon(data.pokemon)
}


selectType.addEventListener('change', searchByType);
// selectSize.addEventListener('change', searchBySize);
selectRegion.addEventListener('change', searchByRegion);
selectOrder.addEventListener('change', searchByOrder);
inputName.addEventListener('keypress', searchByName);

clearButton.addEventListener('click', cleanFilters);