import React from "react";
import SweetAlert from "sweetalert2-react";

const Sweet = props => {
  return (
    <SweetAlert
      show={true}
      title="Ballyhoo"
      imageUrl="http://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_30/v1503906380/ballyhoo/EMAIL/logo.png"
      text="We will be sending the otp to the mentioned email."
      onConfirm={() => props.sweetAlertButtonClick()}
    />
  );
};

export default Sweet;
