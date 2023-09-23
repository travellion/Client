import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import NewBillPage from './pages/NewBillPage';
import AccountManage from './components/MyPage/AccountManage';
import BillUpdatePage from './pages/BillUpdatePage';
import BillListPage from './pages/BIllListPage';
import TravelAccountBookPage from './pages/TravelAccountBookPage';
import ModalExtend from './components/TravelAccount/ModalExtend';
import AddSchedulePage from './pages/AddSchedulePage';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/account" element={<AccountManage />} />
          <Route path="/newbill" element={<NewBillPage />} />
          <Route path="/billupdate/:index" element={<BillUpdatePage />} />
          <Route path="/billlist" element={<BillListPage />} />
          <Route path="/travelaccountbook" element={<TravelAccountBookPage />} />
          <Route path="/selectunit" element={<ModalExtend />} />
          <Route path="/addSchedule" element={<AddSchedulePage />} />
        </Routes >
      </BrowserRouter >
    </>
  );
}
