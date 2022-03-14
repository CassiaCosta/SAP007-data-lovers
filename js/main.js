import { alphabeticalFilter, calculos, rarityFilter, regionFilter, searchName, sizeFilter, typeFilter } from './data.js';
import data from '../data/pokemon/pokemon.js';

let selectType = document.getElementById('typeFilter');
let selectRarity = document.getElementById('rarityFilter');
let selectRegion = document.getElementById('regionFilter');
let selectOrder = document.getElementById('orderFilter');
let inputName = document.getElementById('nameFilter');
let clearButton = document.getElementById('clearButton');
let calculationBar = document.getElementById('calculation');
let buttonTop = document.getElementById('buttonTop');

function showPokemon(data) {
    document.getElementById('pokemonList').innerHTML = data.map((item) => `
    <button aria-label="clique para mais infomacoes" class="cards" onclick="(this.classList.toggle('active'))">
        <section class="front-cards" id="frontCards">
            <p class="numberPokemon">${item.num}</p>
            <picture>
                <img class="image-card" src="${item.img}" alt="imagem do Pokémon">
            </picture>
            <div class="info-cards">
                <p class="namePokemon">${item.name}</p>
                <p class="typePokemon"> <b>Tipo:</b> ${item.type}</p>
                <p class="regionPokemon"> <b>Região:</b> ${item.generation["name"]}</p>
            </div>
        </section>
        <section class="back-cards" id="backCards">
            <p class="heightPokemon"> <b> Altura:</b> ${item.size["height"]}</p>
            <p class="weightPokemon"> <b> Peso: </b> ${item.size["weight"]}</p>
            <p class="rarityPokemon"> <b>Raridade:</b> ${item["pokemon-rarity"]}</p>
            <p class="specialAttackPokemon"> <b>Ataque especial:</b> <br> ${item["special-attack"][0].name}</p>
        </section>
    </button>
    `).join('')
}

function searchByType(e) {
    const resultEspecie = typeFilter(data.pokemon, e.target.value)
    calculationBar.innerHTML = `Este tipo de pokémon representa ${calculos(data.pokemon.length, resultEspecie.length)}% 
        do total`
    return showPokemon(resultEspecie)
}

function searchByRarity(e) {
    const resultRarity = rarityFilter(data.pokemon, e.target.value)
    calculationBar.innerHTML = `Esta raridade de pokémon representa ${calculos(data.pokemon.length, resultRarity.length)}% 
        do total`
    return showPokemon(resultRarity)
}

function searchByRegion(e) {
    const resultRegion = regionFilter(data.pokemon, e.target.value)
    calculationBar.innerHTML = `${calculos(data.pokemon.length, resultRegion.length)}% dos Pokémons pertencem a esta região`
    return showPokemon(resultRegion)
}

function searchByOrderAlphabetical() {
    if(selectOrder.value == "a-z") {
        calculationBar.innerHTML = `Pokémons ordenados de A à Z`
        return showPokemon(alphabeticalFilter(data.pokemon, selectOrder.value))
    } else if(selectOrder.value == "z-a") {
        calculationBar.innerHTML = `Pokémons ordenados de Z à A`
        return showPokemon(alphabeticalFilter(data.pokemon, selectOrder.value))
    }
}

function searchByHeightOrder() {
    if(selectOrder.value == "shortHigh") {
        calculationBar.innerHTML = `Pokémons ordenados do mais baixo para o mais alto`
        return showPokemon(sizeFilter(data.pokemon, "height", selectOrder.value))
    } else if(selectOrder.value == "highShort") {
        calculationBar.innerHTML = `Pokémons ordenados do mais alto para o mais baixo`
        return showPokemon(sizeFilter(data.pokemon, "height", selectOrder.value))
    }
}

function searchByWeightOrder() {
    if(selectOrder.value == "lightHeavy") {
        calculationBar.innerHTML = `Pokémons ordenados do mais leve para o mais pesado`
        return showPokemon(sizeFilter(data.pokemon, "weight", selectOrder.value))
    } else if(selectOrder.value == "heavyLight") {
        calculationBar.innerHTML = `Pokémons ordenados do mais pesado para o mais leve`
        return showPokemon(sizeFilter(data.pokemon, "weight", selectOrder.value))
    }
}

function searchByName() {
    if(inputName.value !== ""){
        calculationBar.innerHTML = `Busca por nome...`
    } else if(inputName.value == "") {
        calculationBar.innerHTML = `Você está vendo todos os Pokémons!`
    }
    return showPokemon(searchName(data.pokemon, inputName.value))
}

function cleanFilters() {
    window.location.reload()
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

showPokemon(data.pokemon);
selectType.addEventListener('change', searchByType);
selectRarity.addEventListener('change', searchByRarity);
selectRegion.addEventListener('change', searchByRegion);
selectOrder.addEventListener('change', searchByOrderAlphabetical);
selectOrder.addEventListener('change', searchByHeightOrder);
selectOrder.addEventListener('change', searchByWeightOrder);
inputName.addEventListener('input', searchByName);
clearButton.addEventListener('click', cleanFilters);
buttonTop.addEventListener('click', scrollToTop)