import { LinkedList, Node } from "./script.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.insertAt("elephant", 3);
list.removeAt(5);

list.toString();