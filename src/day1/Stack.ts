type Node<T> = {
    value: T,
    prev?: Node<T>
}

export default class Stack<T> {
    public length: number
    private tail?: Node<T>

    constructor() {
        this.tail = undefined
        this.length = 0;
    }

    // add node to endthe stack [1,2,3,4,5]
    push(item: T): void {
        const node: Node<T> = { value: item, prev: this.tail }
        this.tail = node
        this.length++
    }

    // remove the last node of the stack and returns its value [1,2,3,4,5] (5)
    pop(): T | undefined {
        if (!this.tail) {
            return undefined
        }
        const poppedValue = this.tail.value
        this.tail = this.tail.prev
        this.length--
        return poppedValue
    }

    // get the value of the top node and return it
    peek(): T | undefined {
        return this.tail?.value
    }
}
