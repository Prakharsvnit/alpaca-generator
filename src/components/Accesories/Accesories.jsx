import React from "react";
import AccesoryNames from "../resources/AssecoryNames";
import Button from "../Button/Button";

export default function Accesories() {
  return (
    <div>
        {AccesoryNames.map((e) => {
          return <Button buttonText={e.buttonText} />;
        })}
    </div>
  );
}
