export const indexOf = (source: string, query: string): void => {

    const split = source.split("")

    let res: number;

    split.map((letter, i) => {
        if (letter === query) {
            res = i

        }

        return res
    })

    console.log(res)
}

indexOf("Shingeki no Kyojin", "y")