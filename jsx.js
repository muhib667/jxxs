npx create-react-app product-app
cd product-app
// src/product.js

const product = {
    name: "Product Name",
    price: "$19.99",
    description: "Product Description",
    image: "https://example.com/product-image.jpg"
  };
  
  export default product;
  // src/components/Name.js
import React from "react";

const Name = ({ name }) => <h2>{name}</h2>;

export default Name;
// src/components/Price.js
import React from "react";

const Price = ({ price }) => <p>{price}</p>;

export default Price;
// src/components/Description.js
import React from "react";

const Description = ({ description }) => <p>{description}</p>;

export default Description;
// src/components/Image.js
import React from "react";

const Image = ({ imageUrl }) => <img src={imageUrl} alt="Product" />;

export default Image;
// src/App.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import product from "./product";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = ""; // Enter your first name here

const App = () => {
  return (
    <Container>
      <Card style={{ width: "18rem", margin: "auto", marginTop: "2rem" }}>
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
          <Image imageUrl={product.image} />
        </Card.Body>
      </Card>
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </p>
      {firstName && (
        <div style={{ textAlign: "center" }}>
          <Image imageUrl="https://via.placeholder.com/150" />
        </div>
      )}
    </Container>
  );
};

export default App;
npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
npm start
