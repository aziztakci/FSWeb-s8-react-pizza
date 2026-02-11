const SocialMediaPics = (props) => {
  const { data2 } = props;
  return (
    <div className="insta-nav">
      <h3>Instagram</h3>
      <div className="images">
        {data2.map((obj) => {
          return <img key={obj.id} src={obj.imgUrl} alt={obj.alt} />;
        })}
      </div>
    </div>
  );
};

export default SocialMediaPics;
