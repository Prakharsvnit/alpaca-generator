import React from "react";
import MouthStyles from "../resources/MouthStyles";
import Button from "../Button/Button";

export default function Accesories() {
  return (
    <div>
      {MouthStyles.map((e) => {
        return <Button buttonText={e.buttonText} />;
      })}
    </div>
  );
}
