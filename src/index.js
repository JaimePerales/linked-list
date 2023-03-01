import LinkedList from "./linkedList";

const list = new LinkedList;
list.append("Hello");
list.append("World!");
list.prepend('yo,');
list.prepend('lets, go!');

list.print();