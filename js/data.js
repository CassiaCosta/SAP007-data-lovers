export const typeFilter = (data, type) => {
    const filteredType = data.filter(pokemonType => pokemonType.type.find(item => item === type) === type)
    return filteredType
}

export const rarityFilter = (data, rarity) => {
    const filteredRarity = data.filter(pokemonRarity => pokemonRarity["pokemon-rarity"] == rarity)
    return filteredRarity
}

export const regionFilter = (data, region) => {
    const filteredRegion = data.filter(pokemonRegion => pokemonRegion.generation["name"] == region)
    return filteredRegion
}

export const alphabeticalFilter = (data, chosenOrder) => {
    const dataCopy = [...data]
    const alphabeticalOrder = dataCopy.sort((a, b) => {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 1);
    })
    if(chosenOrder == "a-z") {
        return alphabeticalOrder
    } else if(chosenOrder == "z-a") {
        return alphabeticalOrder.reverse()
    }
}

export const heightFilter = (data, chosenOrder) => {
    const dataCopy = [...data]
    const orderByHeight = dataCopy.sort((a, b) => {
        return (a.size["height"] > b.size["height"] ? 1 : ((b.size["height"] > a.size["height"] ? -1 : 1)))
    })
    if(chosenOrder == "shortHigh") {
        return orderByHeight
    } else if(chosenOrder == "highShort") {
        return orderByHeight.reverse()
    }
}

export const weightFilter = (data, chosenOrder) => {
    const dataCopy = [...data]
    const orderByWeight = dataCopy.sort((a, b) => {
        return (a.size["weight"] > b.size["weight"] ? 1 : ((b.size["weight"] > a.size["weight"] ? -1 : 1)))
    })
    if(chosenOrder == "lightHeavy") {
        return orderByWeight
    } else if (chosenOrder == "heavyLight"){
        return orderByWeight.reverse()
    }
}

export const searchName = (data, name) => {
    const filterName = data.filter(pokemonName => pokemonName.name.includes(name))
    return filterName
}

export const calculos = (total, portion) => {
    const porcentagem = Math.round((portion * 100) / total)
    return porcentagem
};