import React from "react";
import LegStyles from "../resources/LegStyles";
import Button from "../Button/Button";

export default function Accesories() {
  return (
    <div>
      {LegStyles.map((e) => {
        return <Button buttonText={e.buttonText} />;
      })}
    </div>
  );
}
