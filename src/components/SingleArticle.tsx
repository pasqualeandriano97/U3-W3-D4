import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Articles } from "../interface/articlesInterface";
import { Link } from "react-router-dom";

interface articleProps {
  article: Articles;
}
const SingleArticle = ({ article }: articleProps) => {
  return (
    <Col sm={12} md={4} lg={3} className="mb-4">
      <Link to={"/details/" + article.id} className="text-decoration-none">
        <Card className="h-100">
          <Card.Img
            variant="top"
            style={{ height: "250px" }}
            src={article.imageUrl}
          />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>
              Pubblicato il:
              {article.publishedAt.toString().split("T")[0]}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default SingleArticle;
