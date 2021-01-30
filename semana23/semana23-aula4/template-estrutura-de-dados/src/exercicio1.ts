import { listNode } from './list';

export class listL{
    constructor( public outset: listNode | null = null){}

    public addTail(val: number){
        if(!this.outset){
            this.outset = new listNode(val)
            return
        }

        let currentNode: listNode = this.outset

        while(currentNode.near) currentNode = currentNode.near

        currentNode.near = new listNode(val)
    }
}

export const list: listL = new listL()

