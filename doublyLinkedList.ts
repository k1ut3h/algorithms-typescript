type QNode<T> = {
  value: T,
  prev?: QNode<T>,
  next?: QNode<T>
}

class DoublyLinkedList<T>{
  public length:number;
  private head?:QNode<T>;
  private tail?:QNode<T>;

  constructor(){
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  prepend(item:T):void{
    let node = {value:item} as QNode<T>;
    this.length++;
    if (!this.head){
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(item:T, idx:number):void{
    if (idx>this.length){
      throw new Error("Index greater than length");
    } 

    if (idx==this.length){
      this.append(item);
      return;
    } else if (idx==0){
      this.prepend(item);
      return;
    }

    this.length++;
    let curr = this.head;
    for (let i=0; i<idx && curr; ++i){
      curr = curr.next;
    }
    curr = curr as QNode<T>;
    let node = {value:item} as QNode<T>;
    node.next = curr;
    node.prev = curr.prev;
    curr.prev = node;
    curr.prev.next = node;
  }

  append(item:T):void{
    let node = {value:item} as QNode<T>;    
    this.length++;
    if (!this.tail){
      this.head = this.tail = node;
      return;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  remove(item:T):T|undefined{
    let curr = this.head;
    for (let i=0; curr && i<this.length; ++i){
      if (curr.value === item){
        break;
      }
      curr = curr.next;
    }
    if (!curr){
      return undefined;
    }
    this.length--;

    if(this.length===0){
      const out = this.head?.value;
      this.head = this.tail = undefined;      
      return out;
    }
    if (curr.prev){
      curr.prev = curr.next;
    }

    if (curr.next){
      curr.next = curr.prev;
    }

    if (curr == this.head){
      this.head = curr.next;
    }
     if (curr = this.tail){
      this.tail = curr.prev;
    }

    return curr?.value;
  }

  get(idx:number):T|undefined{
    let curr = this.head;
    for (let i=0; i<idx && curr; ++i){
      curr = curr.next;
    }
    return curr?.value;
  }

  removeAt(idx:number):T|undefined{
    let curr = this.head;    
    for (let i=0; i<idx && curr; ++i){
      curr = curr.next;
    }

    curr = curr as QNode<T>;

    if (!curr){
      return undefined;
    }

    this.length--;

    if(this.length===0){
      const out = this.head?.value;
      this.head = this.tail = undefined;      
      return out;
    }
    if (curr.prev){
      curr.prev = curr.next;
    }

    if (curr.next){
      curr.next = curr.prev;
    }

    if (curr == this.head){
      this.head = curr.next;
    }
     if (curr = this.tail){
      this.tail = curr.prev;
    }

    return curr?.value;
    
  }
}
