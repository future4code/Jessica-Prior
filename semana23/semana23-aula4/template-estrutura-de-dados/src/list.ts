export class listNode{
    constructor(
        public val: any,
        public near: listNode | null = null
    ){}
}

export const Node: listNode = new listNode(
    "1",
    new listNode(
       "2",
       new listNode(
           "3",
           new listNode(
                "4",
                new listNode(
                    "5"
            ) 
         ) 
       ) 
    )
)