type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node: Node<T> = { value: item, next: this.head };
        this.head = node;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (!this.head || idx >= this.length || idx < 0) {
            return undefined;
        }
        const node: Node<T> = { value: item };
        if (idx === 0) {
            node.next = this.head;
            this.head = node;
            this.length++;
        }
        let current = this.head as any;
        for (let i = 0; i < idx; i++) {
            if (i + 1 === idx) {
                current.next = node
                node.next = current.next.next
                this.length++
            } else {
                current = current.next
            }
        }
    }

    append(item: T): void {
        const node: Node<T> = { value: item };
        if (!this.head || !this.tail) {
            this.head = this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        }
        if (this.head.value === item) {
            let removedHead = this.head;
            this.head = this.head.next;
            this.length--;
            return removedHead.value;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.value === item) {
                let removedHead = current.next;
                current.next = current.next.next;
                this.length--;
                return removedHead.value;
            } else {
                current = current.next;
            }
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        if (!this.head || idx >= this.length || idx < 0) {
            return undefined;
        }
        let current: Node<T> | undefined = this.head;
        for (let i = 0; i < idx; i++) {
            current = current?.next;
        }
        return current?.value;
    }

    removeAt(idx: number): T | undefined {
        if (!this.head || idx >= this.length || idx < 0) {
            return undefined;
        }
        if (idx === 0) {
            let removedHead = this.head;
            this.head = this.head.next;
            this.length--;
            return removedHead.value;
        }
        let current = this.head as any;
        for (let i = 0; i < idx; i++) {
            if (i + 1 === idx) {
                const removedHead = current.next;
                current.next = current.next.next;
                this.length--;
                return removedHead.value;
            } else {
                current = current.next;
            }
        }
        return undefined;
    }
}
