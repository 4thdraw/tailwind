import Title from "../ui/Title"

export default function Board() {

  const boardlist: string[] = [
    "첫 번째 게시글입니다.",
    "새로운 공지사항을 알려드립니다.",
    "행사 일정 변경 안내드립니다.",
    "고객 문의 답변 관련 안내",
    "서비스 점검 예정 공지",
    "커뮤니티 이용 가이드라인",
    "자주 묻는 질문 모음",
    "신규 기능 업데이트 안내",
    "오늘의 소소한 이야기 공유",
    "커뮤니티 참여 이벤트 안내",
  ];

  return (
    <section>
        <Title  bigtitle="커뮤니티" subtitle="열린 마음으로 고객의 소리를 담습니다." ></Title>
        <ul className="text-white text-[36px] mx-auto w-[1024px] flex flex-col gap-4 mt-20">
          {
            boardlist.map( (item) => <li className="border-b-2">{item}</li> )
          }
        </ul>
    </section>
  )
}
