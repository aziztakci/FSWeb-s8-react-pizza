import Contacts from "./Contacts";
import { mockDataContacts } from "../../Mock_Datas/mockDataFooter";
import FooterMenu from "./FooterMenu";
import SocialMediaPics from "./SocialMediaPics";
import { mockDataSocials } from "../../Mock_Datas/mockDataFooter";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-nav">
          <h2>
            Teknolojik<br></br>Yemekler
          </h2>
          <Contacts data1={mockDataContacts} />
          <FooterMenu />
          <SocialMediaPics data2={mockDataSocials}/>
        </div>
      </footer>
    </>
  );
}
