import React from "react";
import ContactImage from "./ContactImage";
import ContactItemBody from "./ContactItemBody copy";
import DeleteApp from "./DeleteApp";

const ContactItem = ({ onDelete, name, tag, imageUrl, id }) => {
  return (
    <div className="contact-item">
      <ContactImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteApp id={id} onDelete={onDelete} />
    </div>
  );
};

export default ContactItem;
