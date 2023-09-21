import React, { useState } from 'react';
import Header from '../components/NewBillPage/header';
import Emoji from '../components/NewBillPage/Emoji';
import Who from '../components/NewBillPage/Who.jsx';
import Category from '../components/NewBillPage/Category';
import BillMemo from '../components/NewBillPage/BillMemo';
import Btn from '../components/NewBillPage/Btn';

export default function NewBillPage() {
  const [selectedBillInfo, setSelectedBillInfo] = useState({
    bill: '',
    memo: '',
  });

  function onClickEmoji(selectedEmoji) {
    console.log('선택한 이모지:', selectedEmoji);
  }

  const onClickWho = (selectedValue) => {
    console.log(`선택한 작성자: ${selectedValue}`);
  };

  function handleCategorySelection(selectedCategory) {
    console.log('선택한 카테고리:', selectedCategory);
  }

  function handleMemoSelection(billInfo) {
    console.log('입력한 가격:', billInfo.bill);
    console.log('입력한 메모:', billInfo.memo);

    // 가격과 메모 정보를 상태로 저장
    setSelectedBillInfo(billInfo);
  }

  return (
    <>
      <Header />
      <Emoji onClickEmoji={onClickEmoji} />
      <Who onClickWho={onClickWho} />
      <Category onClickCategory={handleCategorySelection} />
      <BillMemo onBillChange={handleMemoSelection} />
      <Btn />
    </>
  );
}
