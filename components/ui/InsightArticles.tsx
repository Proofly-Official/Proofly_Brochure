import React from "react";

interface ArticleCard {
  image: string;
  url: string;
  alt?: string;
}

interface InsightArticlesProps {
  articles: ArticleCard[];
  cardSize?: { width: number; height: number };
}

export function InsightArticles({ articles, cardSize }: InsightArticlesProps) {
  const width = cardSize?.width || 420;
  const height = cardSize?.height || 280;
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center my-12">
      {articles.map((article, idx) => (
        <a
          key={idx}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          style={{ width, height }}
        >
          <img
            src={article.image}
            alt={article.alt || `Article ${idx + 1}`}
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
} 