import React, { Component } from "react";
import "./About.css";
import profile_img from "./about_profile.jpg";

class About extends Component {
  render() {
    return (
      <div className="about_me" id="a">
        <div className="about_me_title">
          <h1 className="hedding">About Me</h1>
        </div>
        <div className="about_profile">
          <div className="about_me_content1">
            <h3 className="sub_title">Profile</h3>
            <div className="profile">
              <img className="profile_img" src={profile_img} alt="증명사진" />
              <ul className="personal_info">
                <li className="name">이 환 승</li>
                <li className="part">Front-end Developer [신입]</li>
                <li className="part">1993.03.28</li>
                <li>서울특별시 금천구</li>
                <li>010-5777-6284</li>
                <li>lhwan12@naver.com</li>
              </ul>
            </div>
            <ul className="character">
              <li>. 실패를 두려워 하지 않는 도전정신</li>
              <li>. 새로운 업무에 두려움이 없으며 적극적으로 배우는 자세</li>
              <li>. 업무에 있어서는 신중한 태도</li>
              <li>. 밝고 활발한 성격으로 분위기 메이커</li>
            </ul>
            <div className="education">
              <h3>학력</h3>
              <ul className="edu_list">
                <li>
                  <p>대림대학교</p>
                  <p>컴퓨터소프트 웨어과(졸업)</p>
                  <p className="date">2012.02 - 2017.02</p>
                </li>
                <li>
                  <p>(주)시터스</p>
                  <p>기술연구부(퇴사)</p>
                  <p className="date">2016.11 - 2019.11</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="about_me_content2">
            <div className="career">
              <h3>경력사항</h3>
              <ul className="career_list">
                <li>2016년 터널통합 원격관리 시스템</li>
                <li>한국지엠 자동차 내비게이션 S/W 유지보수</li>
                <li>교통정보시스템 통합유지관리 용역</li>
                <li>KT상용차 네비게이션 유지보수</li>
                <li>KT상용차 내비게이션 SendtoCar 기능개발</li>
                <li>2019년 한국지엠 자동차 내비게이션 S/W 유지보수</li>
              </ul>
            </div>

            <h1>새로운 것에 도전하는 개발자</h1>
            <section className="about_me_section">
              <p>
                초등학교때부터 호기심이 많아 과학경시대회 등과 같은 발명대회
                에서 수상을 하면서 도전에 대한 흥미와 열정을 느끼게 되었고
                그때부터 개발자를 꿈꾸게 되었습니다. 소프트웨어 회사에서
                근무하면서 SI터널 원격통합프로젝트 참여를 통해서 Javascript가
                가지고 있는 가능성과 다양성에 매력을 느끼게 되었습니다.
              </p>

              <p>
                이에따라 저는 '도전하는' 개발자가 되는것을 목표로 삼았습니다.
                터널 원격통합, 네비게이션 유지보수 등 과 같은 다양한 프로젝트를
                수행하며 얻은 경험과 주변 동료들과 상사들로 부터 새로운 것에
                대한 습득력이 빠르다는 평가를 받아왔습니다. 이러한 경험을 통해
                얻은 개발에 대한 자신감과 습득력으로 새롭고 다양한 것을 개발하는
                개발자가 되고 싶습니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
