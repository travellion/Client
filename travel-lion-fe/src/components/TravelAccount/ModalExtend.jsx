import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import search from '../../images/TravelAccount/search.svg';
import backarrow from '../../images/TravelAccount/backarrow.svg';
import axios from 'axios';

function ModalExtend({ onCurrencySelect, onCloseModalExtend }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    axios
      .get('http://13.125.174.198/exchanges')
      .then((response) => {
        setCurrencyData(response.data);
      })
      .catch((error) => {
        console.error('환율 데이터 가져오기 오류', error);
      });
  }, []);

  const filteredData = searchTerm
    ? currencyData.filter(
        (country) =>
          country.countryName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          country.curUnit.toLowerCase().includes(searchTerm.toLowerCase()) ||
          country.curNm
            .split('-')[1]
            .trim()
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
      )
    : currencyData;

  return (
    <ModalWrapper>
      <SearchWrapper>
        <ImgDiv onClick={onCloseModalExtend}>
          <img src={backarrow} alt="<" />
        </ImgDiv>

        <SearchInput
          type="text"
          placeholder="국가명 또는 통화 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ImgDiv>
          <img src={search} alt="🔍" />
        </ImgDiv>
      </SearchWrapper>
      <CurrencyList>
        {filteredData.map((country) => (
          <CurrencyItem
            key={country.curUnit}
            onClick={() => onCurrencySelect(country.curUnit)}
          >
            {country.countryName} - {country.curUnit}(
            {country.curNm.split('-')[1].trim()})<SelectBtn>선택</SelectBtn>
          </CurrencyItem>
        ))}
      </CurrencyList>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 390px;
  height: 100%;
  background-color: white;
  overflow-y: auto;
  z-index: 10;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #adb6bd;
`;

const ImgDiv = styled.div`
  display: flex;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  margin-left: 20px;
  font-size: 19px;
  outline: none;
  border: 0;
`;

const CurrencyList = styled.ul`
  margin-top: 28px;
  margin-left: 30px;
`;

const CurrencyItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 27px;
`;

const SelectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  margin-right: 30px;

  width: 46px;
  height: 23px;

  border-radius: 5px;
  background: var(--Lightgray, #f5f5f5);

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--Darkgray, #353a40);

  cursor: pointer;
`;

export default ModalExtend;
