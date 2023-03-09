import {governmentBuildings, HouseType} from '../02-test/02type';

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<governmentBuildings>) => {
    return buildings.map( b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map( b => b.address.street.title)
}


export function createMessages(houses: Array<HouseType>){
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}