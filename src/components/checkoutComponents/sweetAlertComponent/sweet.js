import React from "react";
import SweetAlert from "sweetalert2-react";

const Sweet = props => {
  return (
    <SweetAlert
      show={true}
      type={props.flag}
      title="Ballyhoo"
      text={props.message}
      onConfirm={() => props.sweetAlertButtonClick()}
    />
  );
};

export default Sweet;
