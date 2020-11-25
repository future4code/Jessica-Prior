import { char } from '../src/model/char';
import { performAttack2 } from '../src/performAttack';


describe('Hello world', () => {
    // exercicio 4

    // test("Creating Mocks", () => {
    //     const validatorMock = jest.fn(() => {
    //             return true //or false
    //         });
    // });

    // exercicio 5 A
    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: char = {
            name: "Keqing",
            life: 15000,
            defense: 550,
            strength: 600,
        };

        const defender: char = {
            name: "Qiqi",
            life: 9875,
            defense: 400,
            strength: 500,
        };

        performAttack2(attacker, defender, validatorMock as any);

        expect(defender.life).toEqual(9675);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    });

    // B
    test("Should return invalid character error", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
            return false;
        });

        const attacker: char = {
            name: "",
            life: 6500,
            defense: 650,
            strength: 1532,
        };

        const defender: char = {
            name: "Qiqi",
            life: 4350,
            defense: 710,
            strength: 1500,
        };

        try {
            performAttack2(attacker, defender, validatorMock as any);
        } catch (error) {
            expect(error.message).toBe("Invalid character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    });

    // exercicio 6

    test("Should return character is dead ", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: char = {
            name: "Keqing",
            life: 6500,
            defense: 650,
            strength: 1532,
        };

        const defender: char = {
            name: "Qiqi",
            life: 1500,
            defense: 0,
            strength: 1500,
        };

        try {
            performAttack2(attacker, defender, validatorMock as any);
            expect(defender.life).toEqual(0);
        } catch (error) {
            expect(error.message).toBe("ざん ねん だ")
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(2);
            expect(validatorMock).toHaveReturnedTimes(2);
        }
    });

    test("Should return character receive damage with negative defense ", () => {
        expect.assertions(1);
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: char = {
            name: "Keqing",
            life: 6500,
            defense: 650,
            strength: 0,
        };

        const defender: char = {
            name: "Qiqi",
            life: 4550,
            defense: -500,
            strength: 1500,
        };

        try {
            performAttack2(attacker, defender, validatorMock as any);
            expect(defender.life).toEqual(4050);
        } catch (error) {
            expect(error.message).toBe("ざん ねん だ")
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    });

    test("Should return one character have a strength negative and other defense negative, canceling the attack that the defender will suffer ", () => {
        //expect.assertions(1);
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: char = {
            name: "Keqing",
            life: 500,
            defense: -350,
            strength: -150,
        };

        const defender: char = {
            name: "Qiqi",
            life: 250,
            defense: -150,
            strength: 300,
        };

        try {
            performAttack2(attacker, defender, validatorMock as any);
            expect(defender.life).toEqual(250);
        } catch (error) {
            expect(error.message).toBe("ざん ねん だ")
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    });

    test("Should return one character have a strength 0 and other defense 0 ", () => {
        expect.assertions(1);
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: char = {
            name: "Keqing",
            life: 400,
            defense: 600,
            strength: 0,
        };

        const defender: char = {
            name: "Qiqi",
            life: 300,
            defense: 0,
            strength: 1500,
        };

        try {
            performAttack2(attacker, defender, validatorMock as any);
            expect(defender.life).toEqual(300);
        } catch (error) {
            expect(error.message).toBe("ざん ねん だ")
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    });

})