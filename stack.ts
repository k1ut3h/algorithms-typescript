type QNode<T> = {
  value: T,
  prev?: QNode<T>
}

class Stack<T>{
  public length:number;
  private head?:QNode<T>;
  constructor(){
    this.head = undefined;      
    this.length = 0;
  }
  pop():T|undefined{
    this.length = Math.max(0, this.length-1);
    if (this.length === 0){
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }

    const head = this.head as QNode<T>;
    this.head = head.prev;
    return head.value;
  } 
  push(item:T){
    this.length++;
    const node = {value:item} as QNode<T>;
    if (!this.head){
      this.head = node;
      return;
    }    
    node.prev = this.head;
    this.head = node;
  }
  peek():T|undefined{
    return this.head?.value;
  }
}