export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-4 px-6 py-24 sm:px-10 lg:px-[73px]">
      <h1 className="text-4xl font-extrabold capitalize">{title}</h1>
      <p className="max-w-xl text-white/70">
        This page is coming soon. Keep chatting with Fusion to fill in the{" "}
        {title} section.
      </p>
    </div>
  );
}
