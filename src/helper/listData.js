import response from '../../viewData.json'
import { Years } from './years'
import { Months } from './months'

export const Data = () => {
    let objYear = {}
    let objMonth = {}
    let data = {}

    for(var i=0; i<Years().length; i++){
        for(var j=0; j<Months().length; j++){
            objMonth[Months()[j]] = data
        }
        objYear[Years()[i]] = objMonth
    }

    return objYear
}