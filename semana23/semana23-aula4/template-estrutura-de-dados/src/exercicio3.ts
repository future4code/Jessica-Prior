import { listL } from './exercicio1';
import { listNode } from './list';

export class Queue {
    constructor(public node: listL = new listL()) { }

    public empty = (): boolean => this.node.outset === null

    public enQueue(val: any) { this.node.addTail(val) }

    public deQueue(): listNode | null {
        if (!this.node.outset)
            return null

        const remove: listNode = this.node.outset

        this.node.outset = this.node.outset.near
        return remove
    }

}

export const queue: Queue = new Queue()