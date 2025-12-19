interface TitleProps {
  bigtitle: string;
  subtitle: string;
}

export default function Title({ bigtitle, subtitle }: TitleProps) {
  return (
    <div className="flex flex-col gap-4 items-center mt-[200px] page_title font-kr">
      <div className="text-[50px] title">{bigtitle}</div>
      <p>{subtitle}</p>
    </div>
  );
}
