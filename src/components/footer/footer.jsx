import React, {memo} from "react";
import Logo from "../logo/logo.jsx";

const Footer = () => (
  <footer className="page-footer">
    <Logo />

    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
);

export default memo(Footer);
