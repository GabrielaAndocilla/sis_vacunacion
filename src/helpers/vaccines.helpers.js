export const getVaccines = async () => {
    const vaccinesFetch = await fetch(`http://localhost:3002/vaccinesType`)
    const response = await vaccinesFetch.json()
    const result = await response
    return result
}