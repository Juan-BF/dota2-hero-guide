async function ApiHeroDota(){
    const response = await fetch('https://docs.stratz.com/api/v1/Hero')
    const result = await response.json()
    return result
    
}

export { ApiHeroDota }