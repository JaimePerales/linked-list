import Node from "./node";

class LinkedList {
    head;

    tail;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const node = new Node();
        node.value = value;

        if (this.head === null) {
            this.head = node;
            this.head.nextNode = this.tail;

        }
        if (this.tail !== null) {
            this.tail.nextNode = node;

        }
        this.tail = node;

    }

    prepend(value) {
        const node = new Node();
        node.value = value;
        if (this.head === null) {
            this.head = node;
            this.head.nextNode = this.tail;
        }
        node.nextNode = this.head;
        this.head = node;

    }

    size() {
        let count = 0;
        let node = this.head;
        while (node !== null) {
            count += 1;
            node = node.nextNode;
        }
        return count;

    }

    print() {
        let node = this.head;
        if (node === null) {
            console.log("Empty List");
            return
        }
        while (node !== null) {
            console.log(node.value);
            node = node.nextNode;
        }
    }

}

export default LinkedList