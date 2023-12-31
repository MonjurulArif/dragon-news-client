import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error());
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} className="mb-2 rounded-2" variant="outline-primary">
          {" "}
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button className="mb-2 rounded-2" variant="outline-dark">
          {" "}
          <FaGithub></FaGithub> Login with GitHub
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp>WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
