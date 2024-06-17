import React from "react";
import Information from "../componets/componetsFooter/Information";
import ForClients from "../componets/componetsFooter/ForClients";
import MacFooter from "../componets/componetsFooter/MacFooter";
import IpadFooter from "../componets/componetsFooter/IpadFooter";
import Iphonefooter from "../componets/componetsFooter/Iphonefooter";
import AppleWatchFooter from "../componets/componetsFooter/AppleWatchFooter";
import SocialNetworkFooter from "../componets/componetsFooter/SocialNetworkFooter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content_footer">
        {" "}
        <SocialNetworkFooter />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Information />
          <ForClients />
          <MacFooter />
          <IpadFooter />
          <Iphonefooter />
          <AppleWatchFooter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
