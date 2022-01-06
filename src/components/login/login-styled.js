import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;

  background: #ffffff;
`;
export const Background = styled.img`
  position: absolute;
  width: 1297px;
  height: 1080px;
  left: 0px;
  top: 0px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url("../../assets/Rectangle 1.svg");
`;
export const ContactArea = styled.div`
  position: absolute;
  width: 532px;
  height: 290px;
  left: 383px;
  top: 395px;

  background: rgba(255, 255, 255, 0.45);
  border-radius: 28px;
`;

export const LegalTerms = styled.div`
  position: absolute;
  width: 311px;
  height: 30px;
  left: 23px;
  top: 1021px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  color: #ffffff;
`;

export const PartnershipArea = styled.a`
  position: absolute;
  width: 288px;
  height: 30px;
  left: 983px;
  top: 1021px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  text-align: right;

  color: #ffffff;
`;

export const LogoGroup = styled.img`
  position: absolute;
  width: 270px;
  height: 98px;
  left: 1476px;
  top: 28px;

  background: url(indexgrup.png);
`;

export const WelcomeText = styled.img`
  position: absolute;
  width: 419px;
  height: 53px;
  left: 1407px;
  top: 185px;
`;
export const WelcomeContent = styled.p`
  position: absolute;
  width: 469px;
  height: 26px;
  left: 1377px;
  top: 243px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 25px;
  /* identical to box height */

  text-align: center;

  color: #a4a4a4;
`;
export const FormArea = styled.form`
  position: absolute;
  width: 452px;
  height: 331.3px;
  left: 1386px;
  top: 374px;

  display: flex;
  flex-direction: column;
`;

export const MembershipHeading = styled.h2`
  position: absolute;
  width: 198px;
  height: 30px;
  left: 1510px;
  top: 883px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #808080;
`;

export const MembershipText = styled.p`
  position: absolute;
  width: 540px;
  height: 42px;
  left: 1338px;
  top: 919px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #808080;
`;