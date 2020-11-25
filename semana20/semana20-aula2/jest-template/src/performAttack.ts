import { char } from "./model/char";
import { validateChar } from "./validateChar";

export const performAttack = (attacker: char, defender: char) => {
    if (!validateChar(attacker) || !validateChar(defender)) {
        throw new Error("Invalid character");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
};

export const performAttack2 = (
    attacker: char,
    defender: char,
    validator: (input: char) => boolean
) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
    if(defender.life <= 0){
        throw new Error("ざん ねん だ")
    }
};