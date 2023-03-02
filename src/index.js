import LinkedList from "./linkedList";

const list = new LinkedList;
list.append("Hello");
list.append("World!");
list.prepend('yo,');
list.prepend('lets, go!');
list.append('bingo');
list.append(3);

list.insertAt("Pizza", 3);
list.insertAt("cube", 20);





// console.log(`The popped value is ${list.pop().value}`);
// console.log('The new list is: ')
// list.print();
// console.log(`The popped value is ${list.pop().value}`);
// console.log('The new list is: ')
// list.print();
console.log(list.contains("Hello", list.head));
console.log(list.contains("bingos", list.head));

console.log(list.find(3, list.head, 0));

console.log(list.toString());