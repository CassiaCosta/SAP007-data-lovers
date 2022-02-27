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
    const filterOrder = data.sort((a, b) => {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
    })
    switch(chosenOrder) {
        case "a-z":
            return filterOrder
        case "z-a":
            return filterOrder.reverse()
    }
}

export const searchName = (data, name) => {
    const filterName = data.filter(pokemonName => pokemonName.name.includes(name))
    return filterName
}