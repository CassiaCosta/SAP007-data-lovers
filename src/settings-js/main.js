import { aggregateCalculation, alphabeticalFilter, heightFilter, rarityFilter, regionFilter, searchName, typeFilter, weightFilter, } from './data.js';
import data from '../data/pokemon/pokemon.js';

let selectType = document.getElementById('typeFilter');
let selectRarity = document.getElementById('rarityFilter');
let selectRegion = document.getElementById('regionFilter');
let selectOrder = document.getElementById('orderFilter');
let inputName = document.getElementById('nameFilter');
let clearButton = document.getElementById('clearButton');
let calculationBar = document.getElementById('calculation');

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
    calculationBar.innerHTML = "Você está vendo todos os cards!"
}

function searchByType() {
    return showPokemon(typeFilter(data.pokemon, selectType.value))
}

function searchByRarity() {
    return showPokemon(rarityFilter(data.pokemon, selectRarity.value))
}

function searchByRegion() {
    return showPokemon(regionFilter(data.pokemon, selectRegion.value))
}

function searchByOrderAlphabetical() {
    return showPokemon(alphabeticalFilter(data.pokemon, selectOrder.value))
}

function searchByHeightOrder() {
    return showPokemon(heightFilter(data.pokemon, selectOrder.value))
}

function searchByWeightOrder() {
    return showPokemon(weightFilter(data.pokemon, selectOrder.value))
}

function searchByName() {
    return showPokemon(searchName(data.pokemon, inputName.value))
}

function cleanFilters() {
    window.location.reload()
}

function filterPercentage() {
    const calcType = searchByType.value;
    let result = aggregateCalculation(data.pokemon, calcType);
    calculationBar.innerHTML = `Este tipo de Pokémon representa ${result}% do total`
}

showPokemon(data.pokemon);
selectType.addEventListener('change', searchByType);
selectType.addEventListener('change', filterPercentage);
selectRarity.addEventListener('change', searchByRarity);
selectRegion.addEventListener('change', searchByRegion);
selectOrder.addEventListener('change', searchByOrderAlphabetical);
selectOrder.addEventListener('change', searchByHeightOrder);
selectOrder.addEventListener('change', searchByWeightOrder);
inputName.addEventListener('keypress', searchByName);
clearButton.addEventListener('click', cleanFilters);