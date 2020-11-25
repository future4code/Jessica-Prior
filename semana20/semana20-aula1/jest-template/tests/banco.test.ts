import  performPurchase  from "../src/banco"
import { User1 } from "../src/data"

describe('Hello world', () => {
    test("Testing balance greater than value", () => {
        const user: User1 = {
            name: "jess",
            balance: 150
        }

        const result = performPurchase(user, 38)

        expect(result).toEqual({
            ...user,
            balance: 112
        })
    })

    test("Testing balance greater than value", () => {
        const user: User1 = {
            name: "jess",
            balance: 23
        }

        const result = performPurchase(user, 23)

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("Testing balance greater than value", () => {
        const user: User1 = {
            name: "jess",
            balance: 23
        }

        const result = performPurchase(user, 54)

        expect(result).toEqual(undefined)
    })

})