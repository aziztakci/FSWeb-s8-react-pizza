export default function OrderCount (props) {
    const {decreaseNum,increaseNum,num}= props;
    return(
        
        <div className="counter-container">
          <button type="button" onClick={decreaseNum}>
            -
          </button>
          <div className="count-display">{num}</div>
          <button type="button" onClick={increaseNum}>
            +
          </button>
        </div>
    )
}