import React from "react";
import FooterTable from "../footer-table/footer-table.component";
import "./footer-tables.styles.scss";

const FooterTables = () => {
  const propsTables = [
    {
      table: "HELP",
      links: [
        "FAQ",
        "Delivery Information",
        "Returns Policy",
        "Make A Return",
        "Orders",
      ],
    },
    {
      table: "MY ACCOUNT",
      links: ["Login", "Register"],
    },
    {
      table: "PAGES",
      links: ["Styles-Clothing Central", "About Us", "Careers", "Blogs"],
    },
  ];

  return (
    <div className="footer-tables">
      {propsTables.map((table, index) => {
        return <FooterTable table={table} key={index}></FooterTable>;
      })}
    </div>
  );
};
export default FooterTables;
