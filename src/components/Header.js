import logo from "../img/schl/bssm-h/main/logo.png";
import searchIcon from "../img/template/1088/common/btn_search_w.png";

export default function Header() {
    return (
        <div class="area_header">
            <header class="Header">
                <a href="http://bssm.hs.kr" target="_self">
                    <img src={logo} alt="부산소프트웨어마이스터고등학교"/>
                </a>
                <div className="top_menu">
                    <ul>
                        <li class="li1"><a href="http://bssm.hs.kr" target="_self">홈</a></li>
                        <li><a href="https://school.busanedu.net/bssm-h/lo/login/loginPage.do" title="로그인">로그인</a></li>
                        <li><a href="https://school.busanedu.net/bssm-h/sb/sbscrb/insertSbscrbInfo01.do" title="회원가입">회원가입</a></li>
                        <li><a href="/bssm-h/sitemap.do" title="사이트맵">사이트맵</a></li>
                    </ul>
                </div>
                <div class="serach">
                    <input type="text" placeholder="검색어를 입력해주세요." class="header--input"></input>
                    <img src={searchIcon} class="header-search-icon" alt="검색"/>
                </div>
            </header>
            <hr class="solid"></hr>
            <nav class="headerList">
                <a class="nav--block" href="\">학교 소개</a>
                <a class="nav--block" href="\">입학안내</a>
                <a class="nav--block" href="\">학과 소개</a>
                <a class="nav--block" href="\">학교알림</a>
                <a class="nav--block" href="\">교수-학습 자료</a>
                <a class="nav--block" href="\">정보공개</a>
                <a class="nav--block" href="\">연구학교</a>
                <a class="nav--block" href="\">학부모마당</a>
            </nav>
        </div>
    );
}