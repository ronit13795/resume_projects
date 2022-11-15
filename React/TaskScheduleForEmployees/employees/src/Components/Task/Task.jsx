import React from "react";
import Description from "../Description/Description";
import { useState } from "react";

export default function Task(props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <div
        onClick={() => setShowDetails(true)}
        style={{ border: "1px solid black", backgroundColor: "ghostwhite" }}
      >
        <p>task name: {props.name}</p>
        <p>task responsibility : {props.responsibility}</p>
      </div>
      {showDetails && (
        <Description
          description={props.description}
          name={props.name}
          index={props.index}
          setShowDetails={setShowDetails}
          showDetails={showDetails}
        />
      )}
    </div>
  );
}
