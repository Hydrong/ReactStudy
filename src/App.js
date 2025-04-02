import "./App.css";

function App() {
  const click = () => {
    console.log("click");
  };
  return (
    <div>
      <div className="header-wrapper">
        <div className="header template">
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
      <div className="dropdown-bar template">
        <div className="dropdown-bar__dropdown-item-container">
          <div
            className="dropdown-bar__item dropdown-bar__dropdown-item"
            data-url-path=""
          >
            디지털
          </div>
          <div
            className="dropdown-bar__item dropdown-bar__dropdown-item"
            data-url-path=""
          >
            컴퓨터
          </div>
          <div
            className="dropdown-bar__item dropdown-bar__dropdown-item"
            data-url-path=""
          >
            가전
          </div>
          <div
            className="dropdown-bar__item dropdown-bar__dropdown-item"
            data-url-path=""
          >
            뷰티
          </div>
          <div
            className="dropdown-bar__item dropdown-bar__dropdown-item"
            data-url-path=""
          >
            패션
          </div>
          <div
            className="dropdown-bar__item dropdown-bar__dropdown-item"
            data-url-path=""
          >
            패션잡화
          </div>
          <div
            className="dropdown-bar__item dropdown-bar__dropdown-item"
            data-url-path=""
          >
            스마트폰
          </div>
          <div
            className="dropdown-bar__item dropdown-bar__dropdown-item"
            data-url-path=""
          >
            라이프스타일
          </div>
        </div>
        <div className="dropdown-bar__normal-item-container">
          <div className="dropdown-bar__item">콘텐츠</div>
          <div className="dropdown-bar__item">혜택/이벤트</div>
          <div className="dropdown-bar__item">브랜드</div>
        </div>
      </div>
      <div className="dropdown-menu template">
        <div className="dropdown-menu__category">
          <div className="dropdown-menu__category__title">태블릿PC</div>
          <div className="dropdown-menu__category__item">태블릿PC</div>
          <div className="dropdown-menu__category__item">터치펜</div>
        </div>
        <div className="dropdown-menu__category">
          <div className="dropdown-menu__category__title">스마트 워치/밴드</div>
          <div className="dropdown-menu__category__item">스마트 워치</div>
          <div className="dropdown-menu__category__item">스마트 밴드</div>
        </div>
      </div>
    </div>
  );
}

export default App;
