import React from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import goBack from '../../images/goBack.png';
import share from '../../images/share.png';
import auImg from '../../images/AU.png';
import { travelData } from '../../data/TravelData';

export default function Header() {
  const firstTravel = travelData[1];

  return (
    <>
      <HeaderContainer>
        <NavLeft to="/">
          <GoBackImg src={goBack} />
        </NavLeft>
        <TravelInfoDiv>
          <Image src={auImg} />
          <TravelName>{firstTravel.title}</TravelName>
          <br />
          <TravelLocation>{`${firstTravel.country}-${firstTravel.city} | `}</TravelLocation>
          <TravelDate>{`${(firstTravel.firstDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${firstTravel.firstDate
            .getDate()
            .toString()
            .padStart(2, '0')} ~ ${(firstTravel.lastDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${firstTravel.lastDate
            .getDate()
            .toString()
            .padStart(2, '0')}`}</TravelDate>
        </TravelInfoDiv>
        <Share to="">
          <ShareImg src={share} />
        </Share>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  width: 390px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  background: #00bc78;
  color: #ffffff;
`;

const NavLeft = styled(NavLink)`
  float: left;
  margin: 20px;
`;

const GoBackImg = styled.img`
  width: 22px;
`;

const Share = styled(NavLink)`
  float: right;
  margin: 20px;
`;

const ShareImg = styled.img`
  width: 18px;
  height: 20px;
  top: 52px;
  left: 343px;
`;

const TravelInfoDiv = styled.div`
  align-items: center;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 26px;
  margin-left: 11%;
  margin-right: 5%;
`;

const TravelName = styled.span`
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;

const TravelLocation = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
`;

const TravelDate = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
`;
