// exercicio 1 e 2
export interface User1 {
    name: string
    balance: number
}



// exercicio 3, 4, 5
export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}

export interface User2 {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}

export interface Casino {
    name: string;
    location: LOCATION;
}

export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}

export interface ResultItem {
    allowed: string[];
    unallowed: string[];
}


// exercicio 6, 7
