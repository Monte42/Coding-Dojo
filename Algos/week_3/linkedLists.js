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

    contains(value){
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.data === value) return true
            currentNode = currentNode.next
        }
        return false
    }

    length() {
        let len = 0
        let currentNode = this.head
        while (currentNode) {
            len++
            currentNode = currentNode.next
        }
        return len
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

    min() {
        let min = this.head.data
        let currentNode = this.head
        while (currentNode) {
            min = Math.min(min,currentNode.data)
            currentNode = currentNode.next
        }
        return min
    }

    max() {
        let max = this.head.data
        let currentNode = this.head
        while (currentNode) {
            max = Math.max(max,currentNode.data)
            currentNode = currentNode.next
        }
        return max
    }

    average() {
        let sum = 0
        let len = 0
        let currentNode = this.head
        while (currentNode) {
            sum += currentNode.data
            len++
            currentNode = currentNode.next
        }
        return sum/len
    }
}


let mySLL = new SLL()
console.log(mySLL.removeFront());
console.log(mySLL.addFront(18))
console.log(mySLL.addFront(5))
console.log('Length ',mySLL.length())
console.log(mySLL.addFront(73))
console.log('Length ',mySLL.length())
console.log('contains 5 ',mySLL.contains(5))
console.log('contains 9 ',mySLL.contains(9))
console.log('min ',mySLL.min())
console.log('max ',mySLL.max())
console.log('average ',mySLL.average())
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
