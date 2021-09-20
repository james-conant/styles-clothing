import React from "react";
import "./footer-table.styles.scss";

const FooterTable = (props) => {
  const {
    table: { table, links },
  } = props;

  return (
    <div className="footer-table">
      <div className="footer-table__header">{table}</div>
      <div className="footer-table__items">
        {links.map((link, index) => (
          <div className="footer-table__link" key={index}>
            {link}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FooterTable;
