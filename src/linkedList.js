import Node from "./node";

class LinkedList {


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

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        let currentNode = this.head;
        let i = 0;
        while (currentNode !== null && i !== index) {
            currentNode = currentNode.nextNode;
            i += 1;
        }

        return currentNode;
    }

    pop() {
        const poppedElement = this.tail;
        let currentNode = this.head;
        while (currentNode.nextNode !== this.tail) {
            currentNode = currentNode.nextNode;
        }
        this.tail = currentNode;
        this.tail.nextNode = null;
        return poppedElement;
    }

    // Solved with Recurrion
    // check if first element contains value, else run method starting at next node;
    // if next null is null, list does not contatin value

    contains(value, node) {
        if (node === null) {
            return false
        }
        if (node.value === value) {
            return true;
        }


        return this.contains(value, node.nextNode);


    }

    find(value, node, index) {
        if (node === null) {
            return false
        }
        if (node.value === value) {
            return index;
        }

        let count = index;
        count += 1;

        return this.find(value, node.nextNode, count);


    }

    insertAt(value, index) {

        // If placing value at beggining of list runs prepend to update head
        if (index === 0) {
            this.prepend(value);
            return;
        }

        // Gets the node pointing to the node at the provided index
        const nodeBeforeIndex = this.at(index - 1);

        // Getes the node at the index
        const nodeAtIndex = this.at(index);

        // If the index is greater than the size of the list, append value
        if (nodeAtIndex === null) {
            this.append(value);
            return;
        }
        // Creates new node
        const newNode = new Node;
        newNode.value = value;

        // Updates node before index to point at new node
        nodeBeforeIndex.nextNode = newNode;

        // Updates node to point at previous node at index
        newNode.nextNode = nodeAtIndex;
    }

    removeAt(index) {

        if (index === 0) { this.head = this.head.nextNode; return }

        // Gets the node pointing to the node at the provided index
        const nodeBeforeIndex = this.at(index - 1);

        // Gets the node at the index
        const nodeAtIndex = this.at(index);
        // If the index is greater than the size of the list, append value
        if (nodeAtIndex === null) {

            return;
        }

        nodeBeforeIndex.nextNode = nodeAtIndex.nextNode;
    }

    toString() {
        let node = this.head;
        if (node === null) {

            return "Empty List"
        }
        let returnString = '';
        while (node !== null) {
            returnString += `( ${node.value} ) -> `;
            node = node.nextNode;
        }
        returnString += 'null';
        return returnString;
    }

}

export default LinkedList