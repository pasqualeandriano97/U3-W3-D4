import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailComponent = () => {
  const { id } = useParams();
  console.log("id", id);
  
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
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  });
  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={12} className="mb-4">
            <Image src={}
        </Col>
      </Row>
    </Container>
  );
};

export default DetailComponent;
