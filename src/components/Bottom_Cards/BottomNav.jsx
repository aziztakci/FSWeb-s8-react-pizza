const BottomNav = (props) => {
    const {mockDataCards} = props;
    return (
        <nav className="nav-container">
          {mockDataCards.map((obj) => {
            return (
              <button
                key={obj.id}
                className={
                  obj.isActive === "true" ? "nav-button-active" : "nav-button"
                }
              >
                <img src={obj.imgUrl} alt={obj.alt} />
                {obj.text}
              </button>
            );
          })}
        </nav>
    )
}

export default BottomNav;

