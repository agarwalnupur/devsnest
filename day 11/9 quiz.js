const ques  = document.querySelector(".ques");
const subbtn  = document.querySelector(".subbtn");
const nextbtn  = document.querySelector(".nextbtn");
const prevbtn  = document.querySelector(".prevbtn");
const selected = document.querySelectorAll(".select");
const check = document.querySelectorAll(".check");
var Qindex = 0;


const myQuestion = [
         {
            question: "What is 10/2?",
            0: 5,
            1: 10 ,
            2:9 ,
            3: 8,
            correctAnswer: 0
          },
          {
            question: "What is 30/3?",
            0: 5 ,
            1: 90 ,
            2: 10 ,
            3: 21 ,
            correctAnswer: 2
          },
          {
            question: "What is 10/2?",
            0: 5,
            1: 10 ,
            2:9 ,
            3: 8,
            correctAnswer: 0
          },
         {
           question: "What is 30/3?",
          0: 5 ,
          1: 90 ,
          2: 10 ,
          3: 21 ,
          correctAnswer: 2
           }];


for (let m = 0; m < selected.length; m++) {
	selected[m].addEventListener("click", () => {
		check[m].checked = true;
	});
}

function showQuestions(Qindex){
    // check[Qindex].value = " ";
    ques.innerHTML = myQuestion[Qindex].question;
    selected[0].innerHTML = myQuestion[Qindex]['0'];
    selected[1].innerHTML = myQuestion[Qindex]['1'];
    selected[2].innerHTML = myQuestion[Qindex]['2'];
    selected[3].innerText = myQuestion[Qindex]['3'];
    prevdis();
    // console.log(Qindex);
  
}
window.onload = showQuestions(Qindex)

  function prevdis(){
  
  if(Qindex === 0) 
    {
      prevbtn.style.opacity = 0.7;
      prevbtn.style.cursor = "not-allowed";
    }
    else{
      prevbtn.style.opacity = 1;
      prevbtn.style.cursor = "pointer";

    }
    if(Qindex == (myQuestion.length - 1))
    {
      nextbtn.style.opacity = 0.7;
      nextbtn.style.cursor = "not-allowed";
    }
    else{
      nextbtn.style.opacity = 1;
      nextbtn.style.cursor = "pointer";

    }
  }

  nextbtn.addEventListener('click' , () => {
    nextbtn.style.cursor = "pointer";
    Qindex +=1 ;
    showQuestions(Qindex);
    for (let i = 0; i < check.length; i++) {
      if(selected[i].classList.contains("correct"))
      {
        selected[i].classList.toggle("correct");
      }
      else if(selected[i].classList.contains("incorrect"))
      selected[i].classList.remove("incorrect");

    }
    for (let k = 0; k <= check.length; k++) {
      if (check[k].checked) {
        check[k].checked = false;
      }
    }
    
  })

// subbtn.addEventListener('click' , () => {
//         for (let i = 0; i < check.length; i++) 
//         {
//           if (check[i].checked)
//               if(check[i].value == myQuestion[Qindex].correctAnswer)
//               {
//                   console.log("correct");
//                   selected[i].classList.add("correct");
//               }
                  
//               else
//               {
//                   console.log("incorrect");
//                   selected[i].classList.add("incorrect")

//               }
          
//         }
  
// })
prevbtn.addEventListener('click' , () => {
  Qindex -=1 ;
  showQuestions(Qindex);
  
})
for (let j = 0; j < check.length; j++) 
{
    check[j].addEventListener('click' , () => {
      for (let i = 0; i < check.length; i++) 
      {
        if (check[i].checked)
            if(check[i].value == myQuestion[Qindex].correctAnswer)
            {
                console.log("correct");
                selected[i].classList.add("correct");
            }
                
            else
            {
                console.log("incorrect");
                selected[i].classList.add("incorrect")

            }
        
      }

    })
}