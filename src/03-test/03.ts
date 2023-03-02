import {StudentType} from "../02-test/02";
import {CityType, governmentBuildings, HouseType} from "../02-test/02type";

const sum =  (a: number, b: number) => {
    return a + b
}
export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export function makeStudentActive(s:StudentType){
    s.isActive=true
}

export const doesStudentLiveIn = (s:StudentType,cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: governmentBuildings, budget: number) => {
    building.budget +=budget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}
export const toFireStaff = (governmentBuilding: governmentBuildings, number: number) => {
    governmentBuilding.staffCount -=number
}

export const toHireStaff = (governmentBuilding: governmentBuildings, number: number) => {
    governmentBuilding.staffCount +=number
}
export const createMessage = (props: CityType) => {
    //return 'Hello '+props.title+' citizens. I want you be happy.All '+props.citizensNumber+' people'
    return `Hello ${props.title} citizens. I want you be happy.All ${props.citizensNumber} people`
}