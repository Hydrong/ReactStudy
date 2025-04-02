import "./App.css";
import styled from "styled-components";

function App() {
  const click = () => {
    console.log("click");
  };
  return (
    <div>
      <div className="header">
        <a className="logo" href="/">
          everyuneez 학생복지스토어
        </a>
        <div className="nav">
          <a className="nav__search" href="/검색">
            검색
          </a>
          <a className="nav__login" href="/로그인">
            로그인
          </a>
          <a className="nav__my" href="/마이페이지">
            마이페이지
          </a>
          <a className="nav__cart" href="/장바구니">
            장바구니
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
