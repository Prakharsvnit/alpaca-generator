import React from "react";
import EarStyles from "../resources/EarStyles";
import Button from "../Button/Button";

export default function Accesories() {
  return (
    <div>
      {EarStyles.map((e) => {
        return <Button buttonText={e.buttonText} />;
      })}
    </div>
  );
}
