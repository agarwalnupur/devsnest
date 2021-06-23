const x = document.querySelectorAll(".seat");
var avail = 36;
var booked = 0;
for(let i=0 ; i<x.length ; i++)
{
    x[i].addEventListener("click" , function()
        {
             if(x[i].classList.contains("clicked"))
             {
                const y = confirm("Are you sure you wanna unbook?")  
                avail +=1;
                booked -= 1;
                x[i].classList.remove("clicked");
                document.querySelector(".avl").innerText= avail;
                document.querySelector(".book").innerText= booked;
             }
             else
                {
                    avail -= 1;
                    booked += 1;
                    x[i].classList.add("clicked");
                    document.querySelector(".avl").innerText= avail;
                    document.querySelector(".book").innerText= booked;
                    
                }
                
            
        }
    )
}