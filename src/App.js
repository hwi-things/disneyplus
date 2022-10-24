import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import { UploadOutlined } from "@ant-design/icons";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import UploadPage from "./components/UploadPage";
import { Button } from "antd";

const App = () => {
  let navigate = useNavigate();

  return (
    <>
      <div class="wrap">
        <div id="header">
          <div id="header-area">
            <div class="gnb">
            <Link to="/">
              <img src="images/icons/logo.svg" alt="logo" />
            </Link>
              <h2>검색</h2>
              <h2>관심 콘텐츠</h2>
              <h2>오리지널</h2>
              <h2>영화</h2>
              <h2>시리즈</h2>
            </div>
            <Button
              size="large"
              icon={<UploadOutlined />}
              onClick={() => {
                navigate("/upload");
              }}
            >
              회차 업로드
            </Button>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Routes>
        <div id="footer">
          <img src="./images/logo.svg" alt="" />
          <div className="footer_02">
            <a href="#">디즈니+이용약관</a>
            <a href="#">취소 및 환불 정책</a>
            <a href="#">사업자 정보</a>
            <a href="#">청소년 보호 정책</a>
            <a href="#">개인정보 수집 및 이용</a>
            <a href="#">개인정보 처리방침</a>
            <a href="#">개인정보 처리방침 부속서</a>
            <a href="#">관심 기반 광고</a>
            <a href="#">고객센터</a>
            <a href="#">지원되는 기기</a>
            <a href="#">디즈니+소개</a>
          </div>
          <a href="#" className="footer_03">
            © 2022 Disney and its related entities. All Rights Reserved.
          </a>
        </div>
      </div>
    </>
  );
};
export default App;
