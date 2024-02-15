import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { SingleArticle } from "../interface/singleArticleInterface";
import { useState } from "react";

const DetailComponent = () => {
  const { id } = useParams();
  console.log("id", id);
  const [article, setArticle] = useState<SingleArticle | null>(null);

  useEffect(() => {
    console.log("I am here");
    fetch("https://api.spaceflightnewsapi.net/v3/articles/" + id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => setArticle(data))
      .catch((error) => console.log(error));
  }, []);
  console.log("article", article);
  return (
    <Container>
      <Row>
        {article && (
          <Col sm={12} md={12} lg={12} className="mt-5">
            <Row>
              <Col sm={12} md={6} lg={4} className="mt-5">
                <Image
                  src={article?.imageUrl}
                  alt={article?.title}
                  fluid
                  style={{ height: "250px" }}
                />
              </Col>
              <Col
                sm={12}
                md={6}
                lg={8}
                className="mt-5 d-flex flex-column  justify-content-center"
              >
                <h1>{article?.title}</h1>
                <p>
                  Pubblicato il: {article.publishedAt.toString().split("T")[0]}
                </p>
                <p>
                  Modificato il: {article.updatedAt.toString().split("T")[0]}
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={12} className="mt-5">
                <p>{article?.summary}</p>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default DetailComponent;
