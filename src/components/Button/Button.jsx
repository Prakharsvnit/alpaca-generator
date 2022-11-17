import React from "react";

export default function Button(props) {
  return (
      <button class="rounded-full border border-blue-500 hover:border-blue-900 hover:border-2 focus:bg-blue-800 mx-1">
        <p class="text-xl py-3 px-6 text-blue-500 hover:text-white hover:font-[450]">
          {props.buttonText}
        </p>
      </button>
  );
}

