interface TitleProps {
  bigtitle: string;
  subtitle: string;
}

export default function Title({ bigtitle, subtitle }: TitleProps) {
  return (
    <div className="flex flex-col gap-[clamp(8px,2vw,16px)] items-center mt-[clamp(160px,15vw,200px)] page_title font-kr">
      <div className="text-[clamp(32px,4vw,50px)] title">{bigtitle}</div>
      <p>{subtitle}</p>
    </div>
  );
}
