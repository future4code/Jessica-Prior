export class Stack {
    constructor( public node: number[] = []){}

    public empty = (): boolean => this.node.length === null;

    public push(val: number): void {
        this.node.length ++
        this.node[this.node.length -1] = val
    } 

    public pop(): any {
        const remove: any = this.node[this.node.length -1]
        this.node.length --

        return remove
    }

    public print(): any{
        for(let i=0; i < this.node.length; i++){
            console.log(`Item ${i + 1} da pilha:`, this.node[i])
        }
    }
}

export const stack: Stack = new Stack()