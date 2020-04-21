let data = [{
    id:1,
    title: "Estudar HTML"
},
    {
        id:2,
        title : "Estudar Italiano"
}];

function renderTodo (){



data.forEach(task =>{

        let li = document.createElement('li');
        li.innerHTML = 
       
        `<input type="checkbox" name="" id="task-${task.id}">
        <label for="task-${task.id}">${task.title} </label>`;

        li.querySelector('input').addEventListener("change", e=>{
            if(e.target.checked){
                li.classList.add('complete');
            }else{
                li.classList.remove('complete');
            }
        });
        
        document.querySelector('.todo').append(li);
})};

document.querySelector('#new-task').addEventListener('keyup',e =>{
    if(e.key === 'Enter'){
        console.log(e.target.value);  
        
        data.push({
            id:data.length+1,
            title:e.target.value
        });
        
        e.target.value="";
        renderTodo();
    }
});

document.querySelector();