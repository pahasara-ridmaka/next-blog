import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/NewsList";

export default async function LatestPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={latestNews} />
    </>
  );
}
