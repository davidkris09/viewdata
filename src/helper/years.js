import response from '../../viewData.json'

export const Years = () => {
    let uniqueYear = []
    response.data.forEach(v => {
        if (!uniqueYear.includes(v)) {
            uniqueYear.push(v.createOn.slice(0,4));
        }
    })

    uniqueYear = [...new Set(uniqueYear)]
    return uniqueYear
}