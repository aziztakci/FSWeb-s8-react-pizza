export default function Footer () {

    return(
        <>
         <footer>
    <div className="footer-nav">
      <h2>Teknolojik<br></br>Yemekler</h2>
      <div className="contact-items">
        <div className="itemC">
          <img src="/assets/icons/location.svg" alt="" />
          <p>341 Londonderry Road,<br></br>Istanbul Türkiye</p>
        </div>
        <div className="itemC">
          <img src="/assets/icons/envelope.svg" alt="" />
          <p>aciktim@teknolojikyemekler.com</p>
        </div>
        <div className="itemC">
          <img src="/assets/icons/phone.svg" alt="" />
          <p>+90 216 123 45 67</p>
        </div>
      </div>
      <div className="hot-menu">
        <h3>Hot Menu</h3>
        <p>Terminal Pizza</p>
        <p>5 Kişilik Hackathlon Pizza</p>
        <p>useEffect Tavuklu Pizza</p>
        <p>Beyaz Console Frosty</p>
        <p>Testler Geçti Mutlu Burger</p>
        <p>Position Absolute Acı Burger</p>
      </div>
      <div className="insta-nav">
        <h3>Instagram</h3>
        <div className="images">
          <img src="/assets/images/instapizza.svg" alt="" />
          <img src="/assets/images/instabbq.svg" alt="" />
          <img src="/assets/images/instapep.svg" alt="" />
          <img src="/assets/images/instabur1.svg" alt="" />
          <img src="/assets/images/instabur2.svg" alt="" />
          <img src="/assets/images/instabur3.svg" alt="" />
        </div>
      </div>
    </div>
  </footer>
        </>
    )
}