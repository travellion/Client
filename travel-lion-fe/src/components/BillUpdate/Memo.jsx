import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';

export default function Memo({ setValue }) {
  const [inputMemo, setInputMemo] = useState('');
  const [memoError, setMemoError] = useState(false);

  const handleMemoChange = (e) => {
    const value = e.target.value;
    setInputMemo(value);
    setMemoError(value === '');

    setValue(value);
  };

  // 메모 부분 넓이 변경 코드//
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // 높이 초기화
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 실제 컨텐츠 높이로 설정
    }
  }, [inputMemo]);

  return (
    <>
      <InputContainer>
        <Demand>
          메모사항<Rq>(선택)</Rq>
        </Demand>
        <TextareaMemo
          rows="1"
          ref={textareaRef}
          value={inputMemo}
          onChange={handleMemoChange}
          error={memoError}
        />
      </InputContainer>
    </>
  );
}

const InputContainer = styled.div`
  width: 87%;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 70px;
`;

const Demand = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #525252;
  margin-top: 35px;
`;

const Rq = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;

  width: 29px;
  height: 14px;
`;

const TextareaMemo = styled.textarea`
  width: 100%;
  resize: none;
  overflow: hidden;

  background-color: #f3f3f3;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#05b70c')};
  cursor: pointer;

  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  padding: 15px;
`;
