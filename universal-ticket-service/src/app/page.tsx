'use client'

import UTSButton from "./components/uts_button";
import UTSInput from "./components/uts_input_box";

import React from "react";
import { useState, useEffect } from "react";
import {AuthService, UTSUser} from "./service/auth_service";

export default function Page() {

  const authService = new AuthService();
  const [user, setUser] = useState<UTSUser|null>(null);

  useEffect(()=>{
    // setUser(authService.getUser());/
  },[])

  return (
    <div className="main-box">
      <div className="p-8 mx-auto uts-box border">
        <div className=" py-8 px-4 lg:px-24">
          <form className="mt-6">
            <UTSInput label="Email" type="string"></UTSInput>
            <UTSInput label="Password" type="password"></UTSInput>
          </form>
          <UTSButton label="Log in"></UTSButton>
        </div>
      </div>
    </div>
  )
}
