export const typeFilter = (data, type) => {
    const filterType = data.filter(pokemonType => pokemonType.type.find(item => item === type) === type)
    return filterType
}

export const rarityFilter = (data, rarity) => {
    const filterRarity = data.filter(pokemonRarity => pokemonRarity["pokemon-rarity"] == rarity)
    return filterRarity
}

export const regionFilter = (data, region) => {
    const filterRegion = data.filter(pokemonRegion => pokemonRegion.generation["name"] == region)
    return filterRegion
}

export const alphabeticalFilter = (data, chosenOrder) => {
    const alphabeticalOrder = data.sort((a, b) => {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
    })
    if(chosenOrder == "a-z") {
        return alphabeticalOrder
    } else if(chosenOrder == "z-a") {
        return alphabeticalOrder.reverse()
    }
}

export const heightFilter = (data, chosenOrder) => {
    const orderByHeight = data.sort((a, b) => {
        return (a.size["height"] > b.size["height"] ? 1 : ((b.size["height"] > a.size["height"] ? -1 : 0)))
    })
    if(chosenOrder == "shortHigh") {
        return orderByHeight
    } else if(chosenOrder == "highShort") {
        return orderByHeight.reverse()
    }
}

export const weightFilter = (data, chosenOrder) => {
    const orderByWeight = data.sort((a, b) => {
        return (a.size["weight"] > b.size["weight"] ? 1 : ((b.size["weight"] > a.size["weight"] ? -1 : 0)))
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

export const aggregateCalculation = (data, filterCalculation) => {
    const calcPerc = data.filter((item) => item.type.includes(filterCalculation));
    return Math.round((calcPerc.length / data.length) * 100);
};