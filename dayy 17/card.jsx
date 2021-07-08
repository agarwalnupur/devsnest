import './style.css'

const Card = ({food , cal}) => {
    return(
        <div className = "card">
            <h2>{food}</h2><br/>
            <span>You have consumed </span><span>{cal}</span><span> calories today</span>
        </div>
    );
}
export default Card;