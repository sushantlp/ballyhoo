import React from "react";
import SweetAlert from "sweetalert2-react";

const Sweet = props => {
  return (
    <SweetAlert
      show={true}
      title="Ballyhoo"
      imageUrl="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_50/v1539007601/ballyhoo/EMAIL/ballyhoo_black.png"
      text="We will be sending the otp to the mentioned email."
      onConfirm={() => props.sweetAlertButtonClick()}
    />
  );
};

export default Sweet;
