import {CityType, governmentBuildings} from '../02-test/02type';

export function demolishHousesOnTheStreet (city:CityType, street: string) {
 city.houses = city.houses.filter(h => h.address.street.title !== street)

}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<governmentBuildings>, number: number) => {
    return buildings.filter(b => b.staffCount > 500)
}