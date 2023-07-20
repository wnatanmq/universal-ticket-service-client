
import React from "react";

interface UTSButtonInterface {
  label : string
}

export default function UTSButton(
  props : UTSButtonInterface
) {

    const {
      label, 
    } : UTSButtonInterface = props;

    return (
            <div className="flex items-center justify-center mt-8">
            <button
            className="
                        uts-button
                        border
                        py-2
                        px-4
                        uppercase
                        shadow
                        hover:shadow-lg
                        font-medium
                        transition
                        transform
                        hover:-translate-y-0.5
            ">
            {label}
            </button>
            </div>

    )
  }
  

