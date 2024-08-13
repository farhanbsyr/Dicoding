import React from "react";

const ContactImage = ({ imageUrl }) => {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default ContactImage;
