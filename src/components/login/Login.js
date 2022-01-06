import React from "react";
import Rectancle from "../../assets/Rectangle 1.svg";
import GroupLogo from "../../assets/indexgrup 1.svg";
import WelcomeToIndex from "../../assets/Index Grup’ a Hoşgeldiniz.svg";
import User from "../../assets/user 1.svg";
import AccountIcon from "../../assets/Group.svg";
import PasswordIcon from "../../assets/1471112_general_key_key lock_lock_office_icon 1.svg";
import CheckboxIcon from "../../assets/Checkbox.svg";
import ApplyFormIcon from "../../assets/Group (2).svg";
import SeatchIcon from "../../assets/seatch 1.svg";
import "./login.css";
import {
  Container,
  MembershipHeading,
  Background,
  ContactArea,
  FormArea,
  LegalTerms,
  LogoGroup,
  MembershipText,
  PartnershipArea,
  WelcomeContent,
  WelcomeText,
} from "./login-styled";

const Login = () => {
  return (
    <Container>
      <Background src={Rectancle} />
      <ContactArea>
        <ul className="contact-area-list">
          <li>
            <h2>İletişim Bilgileri</h2>
          </li>
          <li>Deneme Mah. Deneme Sk. İstanbul / Ataşhehir </li>
          <li>(212) 212 12 12</li>
          <li>info@indexpazar.com</li>
          <li>www.indexpazar.com</li>
        </ul>
      </ContactArea>
      <LegalTerms>Yasal Uyarı Bilgilendirme Metni</LegalTerms>
      <PartnershipArea>Örnek İş Ortaklığı Sözleşmesi</PartnershipArea>

      {/* right panel */}
      <LogoGroup src={GroupLogo} />
      <WelcomeText src={WelcomeToIndex} />
      <WelcomeContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </WelcomeContent>
      <FormArea className="form">
        <div>
          <img src={AccountIcon} alt="account" />
          <input type="text" placeholder="Hesap Kodu" />
        </div>
        <div>
          <img src={User} alt="account" />
          <input type="text" placeholder="Kullanıcı" />
        </div>
        <div>
          <img src={PasswordIcon} alt="account" />
          <input type="text" placeholder="Şifre" />
        </div>
      </FormArea>
      <div className="remember-me">
        <img src={CheckboxIcon} alt="acceptIcon" />
        <p className="remember-text">Beni Hatırla</p>
        <div className="right">Şifremi Unuttum?</div>
      </div>
      <MembershipHeading>NASIL ÜYE OLURUM?</MembershipHeading>
      <MembershipText>
        Index Grup şirketlerinin bayilik başvuru süreci online olarak
        yapılabilmektedir. Index Grup şirketleri üyeliği için lütfen "Online
        Başvuru Formu" nu doldurunuz.
      </MembershipText>
      <img src={ApplyFormIcon} alt="applyIcon" className="apply-icon" />
      <p className="apply-form-text">Online Başvuru Formu</p>

      <img src={SeatchIcon} alt="seatch" />
      <p className="apply-trace">Online Başvuru Takibi</p>
    </Container>
  );
};

export default Login;
