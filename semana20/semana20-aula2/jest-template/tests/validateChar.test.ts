import { validateChar } from '../src/validateChar';

//Exercicio 1 A
describe('Hello world', () => {
    test("Should return false for empty name", () => {
        const result = validateChar({
            name: '',
            life: 19600,
            strength: 2152,
            defense: 723
        })

        expect(result).toBe(false)
    })
    // B
    test("Should return false for life is 0", () => {
        const result = validateChar({
            name: 'Keqing',
            life: 0,
            strength: 2152,
            defense: 723
        })

        expect(result).toBe(false)
    })
    // C
    test("Should return false for strength is 0", () => {
        const result = validateChar({
            name: 'Keqing',
            life: 19600,
            strength: 0,
            defense: 723
        })

        expect(result).toBe(false)
    })
    // D
    test("Should return false for defense is 0", () => {
        const result = validateChar({
            name: 'Keqing',
            life: 19600,
            strength: 2152,
            defense: 0
        })

        expect(result).toBe(false)
    })
    // F
    test("Should return false for strength is negative", () => {
        const result = validateChar({
            name: 'Keqing',
            life: 19600,
            strength: -3650,
            defense: 723
        })

        expect(result).toBe(false)
    })

    test("Should return true for all occurrence its ok", () => {
        const result = validateChar({
            name: 'Keqing',
            life: 19600,
            strength: 2152,
            defense: 723
        })

        expect(result).toBe(true)
    })
})