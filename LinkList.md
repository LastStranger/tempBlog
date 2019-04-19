## SingleLinkList 数据结构
1. prepend 是O(1)
2. append 是O(1)
3. insert 是O(n)
4. delete 是O(n)
5. lookup 是O(n)
## DoublyLinkedList
1. 这个相比较与单链表, 它的search是比单链表要快,但是由于存储了前面节点的地址,所以它的插入删除操作要比单链表要慢,  
而且双链表要占用额外的内存空间
## 单链表的实现(包含单链表的翻转)
```js
class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = {
			value: value,
			next: null
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = {
			value: value,
			next: null
		};
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	printList() {
		const arr = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			arr.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return arr;
	}

	insert(index, value) {
		if (index >= this.length) {
			this.append(value);
		}
		const newNode = {
			value: value,
			next: null
		};
		const leader = this.traverseToIndex(index - 1);
		newNode.next = leader.next;
		leader.next = newNode;
		// const holdingPointer = leader.next;
		// leader.next = newNode;
		// newNode.next = holdingPointer;
		this.length++;
		return this.printList();
	}

	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	remove(index) {
		const leader = this.traverseToIndex(index -1);
		leader.next = leader.next.next;
		this.length --;
		return this.printList();
	}
	

	reverse() {
		if(!this.head.next) {
			return this.head;
		}
		let prevNode = this.head;
		// this.tail = this.head;
		let current = prevNode.next;

		// let second = this.head.next;
		// temp.next = this.head;


		while (current) {
			const nextNode = current.next;
			current.next = prevNode;
			prevNode = current;
			current = nextNode;
			// const temp = second.next;
			// second.next = first;
			// first = second;
			// second = temp;
		}
		this.head.next = null;
		this.head = prevNode;
		return  this.printList();
	}
}

const list= new LinkedList("name");
list.append("age");
list.append("sex");
list.append("like");
list.insert(1, 'dislike');
// list.remove(1);
// console.log(list.append("up"));
console.log(list.printList());
console.log(list.reverse());
```
