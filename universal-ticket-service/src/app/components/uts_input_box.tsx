import React from "react";

interface UTSInputInterface {
  type : string,
  label : string
}

export default function UTSInput(
  props : UTSInputInterface
) {

    const {
      label, 
      type
    } : UTSInputInterface = props;

    return (
              <div className="relative py-2">
              <div className="
                              left-1
                              inset-y-0
                              flex
                              items-center
                              px-4
              ">
                <p className="text-center text-md uts-dark-label">{label}</p>
              </div>
              <input
                  className="
                          pl-12
                          uts-input 
                          shadow-sm 
                          w-full 
                          py-3
                          focus:outline-none 
                          focus:shadow-outline
                          border
                  "
                  id={label.toLowerCase()}
                  type={type}
                />
              </div>
    )
  }
  