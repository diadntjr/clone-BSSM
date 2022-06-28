import image from '../img/template/1088/common - 복사본/1088_board_bg2.png'

export default function GreenBar() {
    return(
        <div class="greenBar">
            <span class="noticeText">공지사항</span>
            <img src={image} />
            <span class="contentText">2022 부울경 중학생 알고리즘 경진대회 최종 수상자 발표 및 상품 수령 안내</span>
        </div>
    )
}