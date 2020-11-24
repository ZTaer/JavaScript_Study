import React from "react";
import { HeaderContainerStyled } from "./header.styles";
import { withRouter } from "react-router-dom";
import { Button, Link } from "@material-ui/core";

const Header = (props) => {
  const { history } = props;

  return (
    <HeaderContainerStyled>
      <h1>React-js-redux-base初始化配置</h1>
      <Button
        component={Link}
        variant="contained"
        onClick={() => history.push("/")}
      >
        Home
      </Button>
      <Button
        component={Link}
        variant="contained"
        onClick={() => history.push("/example")}
      >
        Example
      </Button>
      <Button
        component={Link}
        variant="contained"
        onClick={() => history.push("/test")}
      >
        Test
      </Button>
      <Button
        component={Link}
        variant="contained"
        onClick={() => history.push("/ske")}
      >
        Ske
      </Button>
      <Button
        component={Link}
        variant="contained"
        onClick={() => history.goBack()}
      >
        Back
      </Button>
    </HeaderContainerStyled>
  );
};

export default withRouter(Header);
