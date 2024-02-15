import { useState } from "react";
import { useEffect } from "react";
import { Articles } from "../interface/articlesInterface";
import { Container, Row } from "react-bootstrap";
import SingleArticle from "./SingleArticle";

function ArticleList() {
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    console.log("I am here");
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => setArticles(data))
      .catch((error) => console.log(error));
  }, []);
  console.log("articles", articles);
  return (
    <Container>
      <Row className="justify-content-center g-3 ">
        {articles.map((article) => (
          <SingleArticle key={article.id} article={article} />
        ))}
      </Row>
    </Container>
  );
}

export default ArticleList;
