import React from "react";
import EyesStyles from "../resources/EyesStyles";
import Button from "../Button/Button";

export default function Accesories() {
  return (
    <div>
      {EyesStyles.map((e) => {
        return <Button buttonText={e.buttonText} />;
      })}
    </div>
  );
}
