import React from "react";

import { Message } from "semantic-ui-react/dist/commonjs";

const Error = props => {
  return (
    <Message negative>
      <Message.Header>Oops error</Message.Header>
      <p>{props.errorText}</p>
    </Message>
  );
};

export default Error;
