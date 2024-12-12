import { BASE_URL } from "./constants";

export const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = async (query) => {
  // Date for today and one week ago
  const today = new Date();
  const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  const fromDate = lastWeek.toISOString().split("T")[0];
  const toDate = today.toISOString().split("T")[0];

  try {
    const response = await fetch(
      `${BASE_URL}?q=${query}&from=${fromDate}&to=${toDate}&pageSize=100${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await response.json();

    // filter out invalid articles
    const validArticles = data.articles.filter(
      (article) =>
        article.urlToImage &&
        !article.urlToImage.includes("[Removed]") &&
        article.title &&
        !article.title.includes("[Removed]")
    );

    return {
      ok: true,
      data: validArticles,
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    return {
      ok: false,
      error: error.message,
    };
  }
};
