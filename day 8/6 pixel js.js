var sel=document.querySelectorAll(".box");
for(let i=0; i<sel.length ; i++)
{
    sel[i].addEventListener("click",function(){
       if(sel[i].classList.contains("clicked"))
       {
           sel[i].classList.remove("clicked")
       }
       else{
           sel[i].classList.add("clicked")
       }
    })
}