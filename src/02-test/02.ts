type LocalCityType = {
    title: string,
    country: string
}
type AddressType = {
    city: LocalCityType,
    streetTitle: string
}
type TechnologiesType= {
    id: number,
    title: string
}
export type StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
    id: 1,
    name:'Dima',
    age: 32,
    isActive: false,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            country: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'Html'
        },
        {
            id: 2,
            title: 'JS'
        },
        {
            id: 3,
            title: 'React'
        },
    ]
}

console.log(student.technologies[2].title)