const btn = document.querySelector("#btn");
const input = document.querySelector("#ipbox");
const output = document.querySelector(".output");
const name = document.querySelector("#username");
const repo = document.querySelector("#repo");

btn.addEventListener('click', () => {
    fetch('https://api.github.com/users/' + input.value).then(response => response.json())
    .then(data => {

        // console.log(data);
        output.setAttribute("src" , data.avatar_url);
        username.innerHTML = data.login;

        fetch('https://api.github.com/users/'+input.value+'/repos').then(response => response.json())
        .then(data =>{
            // console.log(data);
            for (let i = 0; i < data.length; i++) {
                // console.log(data[i].name);
                let newdiv = document.createElement("div");
                newdiv.className = "reponame";
                repo.appendChild(newdiv);
                
                newdiv.innerHTML = data[i].name;
                
            }
        })
    })
})  
    
