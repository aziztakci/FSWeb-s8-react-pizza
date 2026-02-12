import mockDataTopNav from "../Mock_Datas/mockDataTopNav";

export default function MenuCategories() {
  
  return (
    <>
      <section className="menu-categories">
        <nav>
          <ul>
            {mockDataTopNav.map((object) => {
              return (
                <li key={object.id}>
                  <a href="#">
                    <img src={object.imgUrl} alt={object.alt} />
                    <span>{object.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </>
  );
}
