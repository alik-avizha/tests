import {StudentType} from "../02-test/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(()=> {
    student=  {
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
})

test ('new tech skill should be added to student',()=>{
    expect(student.technologies.length).toBe(3)

    addSkill(student,'Redux');

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('Redux')
    expect(student.technologies[3].id).toBeDefined()//определен

})

test ('student should be made active',()=>{
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)

})

test ('does student live in city?',()=>{

    let result1 = doesStudentLiveIn(student,'Moscow');
    let result2 = doesStudentLiveIn(student,'Minsk');

   expect(result1).toBe(false);
   expect(result2).toBe(true);

})
