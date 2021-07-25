import { useState } from "react";

const Meme = ({meme, setMeme}) =>{
const [form , setForm] = useState({
    template_id :meme.id , 
    username : "NupurAgarwal" , 
    password : "He8@88j97n@ByuT" , 
    boxes : []

})
const createMeme =() =>{
    let url = ` https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box,index) =>{
        url +=`&boxes[${index}][text]=${box.text}`
       
    })
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.data.url)
        setMeme({...meme, url : data.data.url})
    })

}
return (<div className= "meme"> 
        <img src = {meme.url} alt="meme"></img><br/>
        <div>
            {
                [...Array(meme.box_count)].map((_, index) => (
                    <input type = "text" key= {index} placeholder = {`Meme Caption ${index + 1}`} onChange = {(e) =>{
                        const newBoxes = form.boxes;
                        newBoxes[index] = {text : e.target.value}
                        setForm({...form , boxes : newBoxes})
                    }}>
                    </input>
                ))
            }
        </div>
            <button onClick={createMeme}>Create Meme</button>
            <button onClick= {() => setMeme(null) }>Choose Template</button>
        </div>);
}

export default Meme;