export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const API_KEY =
  process.env.NODE_ENV === "production"
    ? "00000000000000000000000000000000"
    : import.meta.env.VITE_NEWS_API_KEY;
