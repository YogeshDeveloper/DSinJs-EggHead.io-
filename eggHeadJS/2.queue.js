function createQueue()
{
    const queue = []
    return {
        // add or enqueue
        enqueue(item)
        {
            queue.unshift(item)
        },
        // remove or dequeue
        dequeue ()
        {
          return queue.pop()
        },
        // peek
        peek()
        {
           return queue[queue.length-1]
        },
        // length
       get length()
       {
           
       }
        // isEmpty
    }

}