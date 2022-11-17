import React from "react";
import HairStyles from "../resources/HairStyles";
import Button from "../Button/Button";

export default function Accesories() {
  return (
    <div>
      {HairStyles.map((e) => {
        return <Button buttonText={e.buttonText} />;
      })}
    </div>
  );
}
