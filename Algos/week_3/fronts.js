class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null
        this.tail = null
    }

    addFront (val=null) {
        const newNode = new Node(val)
        newNode.next = this.head
        if (this.tail===null) this.tail = newNode
        this.head = newNode
        return this
    }

    removeFront(){
        if (this.head===null) return null
        this.head = this.head.next
        if (this.head===null) {
            this.tail = null
            return null
        }        
        return this
    }
    
    front(){
        if (this.head===null) return null
        return this.head.data
    }

    display() {
        let displayData = ''
        let currentNode = this.head
        while (currentNode) {
            displayData += `${currentNode.data}, `
            currentNode = currentNode.next
        }
        console.log(displayData);
    }
}


let mySLL = new SLL()
console.log(mySLL.removeFront());
console.log(mySLL.addFront(18))
console.log(mySLL.addFront(5))
console.log(mySLL.addFront(73))
console.log(mySLL.removeFront());
console.log(mySLL.removeFront());
console.log(mySLL.front());
console.log(mySLL.removeFront());
console.log(mySLL.front());
console.log();
console.log();
console.log();
mySLL.addFront(76)
mySLL.addFront(2)
mySLL.display()
mySLL.addFront(11.41)
mySLL.display()