import React from "react";
import NeckStyles from "../resources/NeckStyles";
import Button from "../Button/Button";

export default function Accesories() {
  return (
    <div>
      {NeckStyles.map((e) => {
        return <Button buttonText={e.buttonText} />;
      })}
    </div>
  );
}
