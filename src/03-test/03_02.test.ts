import {CityType} from "../02-test/02type";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                buildedAt: 2000,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Bad street'
                    }
                }
            }],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    },
                    number: 105
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    },
                    number: 106
                }
            }
        ],
        citizensNumber: 100000
    }
})
// 01. создайте в отдельном файле функциюб чтобы тесты прошли
test("Budget should be for changed fot HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
});


// 02. Тест должен пройти
test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000);
});


// 03. создайте в том же файле еще одну функцию, чтобы тесты прошли
test("House shoulhd be repared", () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});


// 04. создайте в том же файле еще одну функцию, чтобы тесты прошли
test("staff should be increased", () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
});


// 05. создайте в том же файле еще одну функцию, чтобы тесты прошли
test("House sholhd be repared", () => {
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
});


// 06.
test("Greeting message should be correct for city", () => {

    expect(createMessage(city)).toBe('Hello New York citizens. I want you be happy.All 100000 people');
});