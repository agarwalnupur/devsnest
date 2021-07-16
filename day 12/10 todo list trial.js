const todoInput = document.querySelector("#todoinput");
const btn = document.querySelector("#btn");
const clearbtn = document.querySelector("#clearbtn");
const savebtn = document.querySelector("#savebtn");
const mainop = document.querySelector(".mainop");


function striked(){
    var output = document.querySelectorAll(".output");

    console.log(output.length);
    for (let i = 0; i < output.length; i++) {
            
        output[i].addEventListener('click' , () => {
            output[i].style.textDecoration = "line-through";
        })
        
    }
}

// var j= parseInt( localStorage.getItem('TodoList') );
// console.log(j);


btn.addEventListener('click', () =>{

    // console.log(todoInput.value);
    var newdiv = document.createElement("div");
    newdiv.className = "output";
    mainop.appendChild(newdiv);
    newdiv.innerHTML = todoInput.value;
    var x = parseInt(localStorage.getItem("index"));
    localStorage.setItem(x,todoInput.value);
    x+=1;
    localStorage.setItem("index" , x)
    todoInput.value = "" ;
    todoInput.focus();


    var output = document.querySelectorAll(".output");
    
   
    // j +=1;
   
     striked();
    })


 clearbtn.addEventListener('click' , () =>{
    
    var output = document.querySelectorAll(".output");

     for (let i = 0; i < output.length; i++) {
        mainop.removeChild(output[i]);
    }
     localStorage.clear();
 })

// savebtn.addEventListener('click', () => {
//     var output = document.querySelectorAll(".output");
//     for (let i = 0; i < output.length; i++) {
//         console.log(output.length)
//         localStorage.setItem("TodoList" , JSON.stringify(output[i].textContent));
        
//     }
   
// })
    