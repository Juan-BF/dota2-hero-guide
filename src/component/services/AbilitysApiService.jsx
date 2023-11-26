async function ApiAbilityHeroes(){
    const response = await fetch('https://docs.stratz.com/api/v1/Ability')
    const result = await response.json()

    return result
    
}

export { ApiAbilityHeroes }