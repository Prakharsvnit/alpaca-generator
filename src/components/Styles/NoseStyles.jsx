import React from "react";
import NoseStyles from "../resources/NoseStyles";
import Button from "../Button/Button";

export default function Accesories() {
  return (
    <div>
      {NoseStyles.map((e) => {
        return <Button buttonText={e.buttonText} />;
      })}
    </div>
  );
}
