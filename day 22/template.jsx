
const Template = ({templates, setMeme}) =>{
    return(
        <div>
            {templates.map(item =>(
                <div key= {item.id} className= "template" onClick = {() => setMeme(item)}>
                    <img src= {item.url} alt = "meme"></img>
                </div>
            ))}
         </div>
    )
}

export default Template;