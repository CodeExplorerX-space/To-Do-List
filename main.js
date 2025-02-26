let taskInput = document.querySelector('.task')
let taskButton = document.querySelector('.taskBtn')
let taskList = document.querySelector('.list')

let taskArray = []

taskButton.addEventListener('click', function() {
    taskArray.push(taskInput.value)
    addTodo();
})

function addTodo(){
    console.log(taskArray)
    taskList.innerHTML = '';
    taskArray.map((item)=>{
        taskList.innerHTML += `<li>${item}</li> <button 
        class="delete">Delete</button>`

        let removeBtn = document.querySelectorAll('.delete')

        removeBtn.forEach((item, index)=>{
              item.addEventListener('click', function(){
                taskArray.splice(index, 1)
                console.log(taskArray)
                addTodo()
            })       
        })
    })
}