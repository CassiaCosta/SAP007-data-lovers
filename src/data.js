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

export const orderFilter = (data, chosenOrder) => {
    const alphabeticalOrder = data.sort((a, b) => {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
    })
    const orderByHeight = data.sort((a, b) => {
        return (a.size["height"] > b.size["height"] ? 1 : ((b.size["height"] > a.size["height"] ? -1 : 0)))
    })
    const orderByWeight = data.sort((a, b) => {
        return (a.size["weight"] > b.size["weight"] ? 1 : ((b.size["weight"] > a.size["weight"] ? -1 : 0)))
    })
    if(chosenOrder == "a-z") {
        return alphabeticalOrder
    } else if(chosenOrder == "z-a") {
        return alphabeticalOrder.reverse()
    } else if(chosenOrder == "shortHigh") {
        return orderByHeight
    } else if(chosenOrder == "highShort") {
        return orderByHeight.reverse()
    } else if(chosenOrder == "lightHeavy") {
        return orderByWeight
    } else {
        return orderByWeight.reverse()
    }
    // switch(chosenOrder) {
    //     case "a-z":
    //         return filterOrder
    //     case "z-a":
    //         return filterOrder.reverse()
    // }
}

export const searchName = (data, name) => {
    const filterName = data.filter(pokemonName => pokemonName.name.includes(name))
    return filterName
}