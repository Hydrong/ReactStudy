import "./App.css";
import styled from "styled-components";
import logo from "./logo.svg";

function App() {
  const click = () => {
    console.log("click");
  };
  return (
    <div>
      <Layout>
        <a
          style={{
            maxWidth: "377px",
          }}
          href="/"
        >
          <img src={logo} width={252.58} height={64}></img>
        </a>
        <div>
          <a
            style={{ marginRight: 32, lineHeight: "100%", height: "100%" }}
            href="/검색"
          >
            검색
          </a>
          <a style={{ lineHeight: "88px", height: "88px" }} href="/로그인">
            로그인
          </a>
        </div>
      </Layout>
    </div>
  );
}

export default App;

const Layout = styled.div`
  height: 88px;
  margin: 0 auto;
  display: flex;
  font-size: 13px;
  color: #787a87;
  justify-content: space-between;
  width: 80.625%;
  max-width: 1032px;

  @media screen and (max-width: 768px) {
    height: 64px;
    margin: 0 16px;
  }
`;

const styledInput = styled.input``;
