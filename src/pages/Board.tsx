import { useState } from "react";
import Title from "../ui/Title"

export default function Board() {

  const [action, setAction] = useState<number | null>(null);


  interface BoardItem {
    subject: string;
    content: string;
  }

  const boardlist: BoardItem[] = [
    {
      subject: "신규 기능 업데이트 안내",
      content:
        "최근 업데이트로 검색 기능이 개선되고 모바일 화면 최적화가 이루어졌습니다. 더 나은 서비스를 제공하기 위해 지속적으로 개선하겠습니다."
    },
    {
      subject: "서버 점검 일정 공지",
      content:
        "서비스 안정성 강화를 위한 정기 서버 점검이 예정되어 있습니다. 점검 시간 동안 일부 기능이 제한될 수 있으니 이용에 참고 부탁드립니다."
    },
    {
      subject: "커뮤니티 규칙 개정 안내",
      content:
        "건전한 이용환경을 위해 일부 커뮤니티 규칙이 개정되었습니다. 욕설, 광고, 도배 제재 규정이 강화되었으며 신고 기능이 개선되었습니다."
    },
    {
      subject: "이벤트 참여 안내",
      content:
        "이번 주말부터 커뮤니티 참여 이벤트가 진행됩니다. 게시글 작성 및 댓글 활동을 통해 포인트를 얻고 추첨을 통해 상품도 받을 수 있습니다."
    },
    {
      subject: "개인정보 처리방침 변경 안내",
      content:
        "새로운 법령 적용에 따라 개인정보 처리방침 일부가 수정될 예정입니다. 변경 내용과 적용일은 공지사항에서 자세히 확인하실 수 있습니다."
    }
  ];


  return (
    <section>
        <Title  bigtitle="커뮤니티" subtitle="열린 마음으로 고객의 소리를 담습니다." ></Title>
        <ul className="text-white text-[36px] mx-auto w-[1024px] flex flex-col gap-4 mt-20">
          {
            boardlist.map( (item, idx ) => <li className="border-b-2" key={idx}>
              <h3 className="text-2xl font-bold mb-2" 
               onClick={ ()=>{ setAction(action === idx ? null : idx); } } > {item.subject} </h3>
              {
                action === idx && <p className="text-xl">{item.content}</p>
              }              
            </li> )
          }
        </ul>
    </section>
  )
}
