import LinkedList from "./linkedList";

const list = new LinkedList;
list.append("Hello");
list.append("World!");
list.prepend('yo,');
list.prepend('lets, go!');



console.log(`The Size of the Linked List is: ${list.size()}`)
list.print();