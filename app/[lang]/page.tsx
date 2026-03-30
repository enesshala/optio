import HomeIndex from "@/components/home/HomeIndex";

export default async function LangHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <HomeIndex lang={lang} />;
}
