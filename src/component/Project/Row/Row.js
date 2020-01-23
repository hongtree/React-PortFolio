import React from "react";
import gangneung from "./img/megabox.png";
import github from "./img/github-logo.svg";
import "./Row.css";
import megabox from "./img/gangneung.png";
import yogerpresso from "./img/yogerpresso.png";
import youtube from "./img/youtube.png";

const Row = () => (
  <div className="Row">
    <div className="Box">
      <div className="Box_image">
        <a href="http://www.lhs423.com/RENEWAL1/index.html">
          {" "}
          <img src={gangneung} alt="gangneung" className="image"></img>
        </a>
      </div>
      <div className="Box_info">
        <h1 className="Box_title">강릉관광 웹사이트 리뉴얼</h1>

        <h2 className="name">개발기간 :2018.08.10~ 2018.11.30</h2>
        <p className="Box_content">
          원페이지 스타일로 여행 정보를 배치하여 효과적으로 <br />
          전달되도록 하였고 반응형 작업을 진행한 사이트입니다. <br />
          이미지 슬라이더, 컨버스 등 활용하였습니다.
        </p>
        <ul className="Box_ul">
          <li className="Box_li">#HTML</li>
          <li className="Box_li">#CSS</li>
          <li className="Box_li">#Java Script</li>
        </ul>
        <ul className="Box_ul">
          <li className="Box_li">
            <a href="https://github.com/hongtree/Gangneung" alt="github">
              <img src={github} alt="github" className="icon_image" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="Box">
      <div className="Box_image">
        <a href="http://www.lhs423.com/RENEWAL2/index.html">
          <img src={megabox} alt="megabox" className="image"></img>
        </a>
      </div>
      <div className="Box_info">
        <h1 className="Box_title">메가박스 반응형 웹사이트 리뉴얼</h1>

        <h2 className="name">개발기간 :2018.05.26~2018.07.09</h2>
        <p className="Box_content">
          이미지 슬라이더, 탭메뉴, 모달 등 다양한 스크립트 요소를 <br />
          활용하여 반응형 작업을 진행한 사이트 입니다. <br />
          Swiper플러그인을 이용해서 CSS효과를 주었습니다.
        </p>
        <ul className="Box_ul">
          <li className="Box_li">#HTML</li>
          <li className="Box_li">#CSS</li>
          <li className="Box_li">#Java Script</li>
          <li className="Box_li">#jQuery</li>
        </ul>
        <ul className="Box_ul">
          <li className="Box_li">
            <a href="https://github.com/hongtree/Megabox" alt="github">
              {" "}
              <img src={github} alt="github" className="icon_image" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="Box">
      <div className="Box_image">
        <a href="http://www.lhs423.com/RENEWAL3/index.html">
          <img src={yogerpresso} alt="yogerpresso" className="image"></img>{" "}
        </a>
      </div>
      <div className="Box_info">
        <h1 className="Box_title">요거프레소 웹사이트 리뉴얼</h1>

        <h2 className="name">개발기간 :2018.03.10~2018.06.09</h2>
        <p className="Box_content">
          메인컬러인 빨간색 컬러를 중심으로 강렬하고 심플함을 주었고 <br />
          신제품, 공지사항을 한눈에 볼수있도록 수정했습니다. <br />
          banner_slider플러그인을 이용해서 css 효과를 주었습니다.
        </p>
        <ul className="Box_ul">
          <li className="Box_li">#HTML5</li>
          <li className="Box_li">#CSS</li>
          <li className="Box_li">#Java Script</li>
          <li className="Box_li">#jQuery</li>
        </ul>
        <ul className="Box_ul">
          <li className="Box_li">
            <a href="https://github.com/hongtree/Yogerpresso" alt="github">
              <img src={github} alt="github" className="icon_image" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="Box">
      <div className="Box_image">
        <a href="https://github.com/hongtree/Youtube-Clone">
          <img src={youtube} alt="youtube" className="image"></img>
        </a>
      </div>
      <div className="Box_info">
        <h1 className="Box_title">유튜브 클론 사이트</h1>

        <h2 className="name">개발기간: 개발중</h2>
        <p className="Box_content">
          React + Redux + Node.js(Koa) + MongoDB를 이용하여 <br />
          로그인 기능 구현과 동영상 업로드 기능 구현한 사이트 입니다.
          <br /> 추후 기능 추가예정.
        </p>
        <ul className="Box_ul">
          <li className="Box_li">#React</li>
          <li className="Box_li">#Redux</li>
          <li className="Box_li">#Node.js(Koa)</li>
          <li className="Box_li">#MongoDB</li>
        </ul>
        <ul className="Box_ul">
          <li className="Box_li">
            <a href="https://github.com/hongtree/Youtube-Clone" alt="github">
              {" "}
              <img src={github} alt="github" className="icon_image" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Row;