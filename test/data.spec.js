import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
// import { example, anotherExample } from '../src/data.js';
import { typeFilter } from '../src/settings-js/data.js';


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

const dataPokemon = [
  {
  "num": "001",
  "name": "bulbasaur",
  "generation": {"num": "generation i", "name": "kanto"},
  "pokemon-rarity": "normal",
  "type": ["grass", "poison"],
  },
  {
  "num": "006",
  "name": "charizard",
  "generation": {"num": "generation i", "name": "kanto"},
  "pokemon-rarity": "normal",
  "type": ["fire", "flying"],
}]

describe('typeFilter', () => {
  it('typeFilter is a function', () => {
    expect(typeof typeFilter).toBe('function');
  });

  it('Retorna os pokémons filtrados', () => {
    expect(typeFilter()).toBe('OMG');
    const type = "fire";
    const esperado = typeFilter(dataPokemon, type);
    expect(esperado.length).toEqual(1);
    expect(esperado[0].type).toEqual(type);
  });
});