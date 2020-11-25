import { char } from "./model/char";

export const validateChar = (i: char): boolean => {
    if (
        !i.name ||
        i.life === undefined ||
        i.strength === undefined ||
        i.defense === undefined
    ) {
        return false;
    }

    if (i.life <= 0 || i.strength <= 0 || i.defense <= 0) {
        return false;
    }
    return true;
};