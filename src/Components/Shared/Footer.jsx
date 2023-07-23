import React from "react";
import logo from "../../../public/logo.svg";

function Footer() {
  return (
    <div>
      <div className="text-center py-6 mt-20 border-t">
        <img src={logo} className="mx-auto" />
        <p className="mt-3 mx-96">
          JobBox is the heart of the design community and the best resource to
          discover and connect with designers and jobs worldwide.
        </p>
        <div className="py-4 mt-8">
          <p className="text-sm">Copyright © 2022. JobBox all right reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
