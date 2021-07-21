import './style.css';


const Boxes = ({boxClr}) =>{
    return(
            <div className = {boxClr === 'bb'?'blackbox':'whitebox'}></div>
    )
}
export default Boxes;
