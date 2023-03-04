export const getVaccines = async () => {
    const vaccinesFetch = await fetch(`http://localhost:3000/vaccinesType`)
    const response = await vaccinesFetch.json()
    const result = await response
    return result
}