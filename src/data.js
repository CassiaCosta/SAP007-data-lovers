// estas funciones son de ejemplo

import pokemon from "./data/pokemon/pokemon";

// export const example = () => {
//   return 'example';
// };


// export const anotherExample = () => {
//   return 'OMG';
// };

export const searchType = (pokemon) => {
  let inputType = document.getElementById('type_filter').value;

  return (pokemon.type == inputType);
}

let typeList = [];
typeList = pokemon.filter(searchType);

console.log(typeList);