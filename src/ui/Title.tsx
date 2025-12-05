interface TitleProps {
  bigtitle: string;
  subtitle: string;
}

export default function Title({ bigtitle, subtitle }: TitleProps) {
  return (
    <div className="flex flex-col gap-4 items-center mt-[200px] text-white">
      <div className="text-[50px]">{bigtitle}</div>
      <p>{subtitle}</p>
    </div>
  );
}
