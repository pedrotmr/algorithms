type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    // insert item on the tail (push()) [1,2,3,5]
    enqueue(item: T): void {
        const node: Node<T> = { value: item };
        this.length++;
        if (!this.head || !this.tail) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    // remove the first node of the queue and return its value (shift()) [1,2,3,4]
    dequeue(): T | undefined {
        if (!this.head || this.length === 0) {
            return undefined;
        }
        const currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        return currentHead.value;
    }

    // get the value of the head and returns it
    peek(): T | undefined {
        return this.head?.value;
    }
}

class AsyncRequestQueue {
    private queue = new Queue<() => Promise<any>>();
    private concurrentRequests = 0;
    private maxConcurrentRequests: number;

    constructor(maxConcurrentRequests: number = 3) {
        this.maxConcurrentRequests = maxConcurrentRequests;
    }

    // Add a new request to the queue
    enqueue(request: () => Promise<any>): void {
        this.queue.enqueue(request);
        this.processQueue();
    }

    private processQueue(): void {
        while (this.concurrentRequests < this.maxConcurrentRequests && this.queue.length > 0) {
            this.concurrentRequests++;
            const nextRequest = this.queue.dequeue();
            if (nextRequest) {
                nextRequest()
                    .then(() => {
                        this.concurrentRequests--;
                        this.processQueue();
                    })
                    .catch(() => {
                        this.concurrentRequests--;
                        this.processQueue();
                    });
            }
        }
    }
}

// Example usage:
const requestQueue = new AsyncRequestQueue(3);

const simulateRequest = (id: number) => () => {
    return new Promise((resolve) => {
        console.log(`START ${id}`);
        setTimeout(() => {
            console.log(`COMPLETE ${id}`);
            resolve(id);
        }, Math.random() * 2000 + 1000);
    });
};
for (let i = 1; i <= 10; i++) {
    requestQueue.enqueue(simulateRequest(i));
}
