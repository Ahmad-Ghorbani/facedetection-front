import React from "react";
import "./Rnak.css";

const Rank = ({ userName, userEntries }) => {
  return (
    <div>
      <div className="profilrName">
        {`${userName}, your current entry count is...`}
      </div>
      <div className="Entries">{`${userEntries}`}</div>
    </div>
  );
};

export default Rank;
