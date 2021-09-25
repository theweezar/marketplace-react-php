// Dependencies
import React from "react";
// Components
import Sponsor from "./footer/sponsor";
import Visit from "./footer/visit";
import Social from "./footer/social";
import { FaFacebook, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";
/**
 * Use in layout/transaction
 * Header/nav includes 3 small Components:
 *     - Sponsor
 *     - Visit
 *     - Social
 * @param {*} props
 * @returns
 */
const Footer = (props) => {
  // =STATES=================================================
  const SPONSOR_COPYWRITING = "© 2021 Sky Mavis";
  const VISIT_LIST = [
    {
      keyid: "visit-sublist-01",
      items: [
        {
          keyid: "visit-out-products",
          route: "#",
          text: "Out Products",
          headinMobile: true,
        },
        {
          keyid: "visit-careers",
          route: "#",
          text: "Careers",
        },
      ],
    },
    {
      keyid: "visit-sublist-02",
      items: [
        {
          keyid: "visit-blog",
          route: "#",
          text: "Blog",
          headinMobile: true,
        },
        {
          keyid: "visit-contact-us",
          route: "#",
          text: "Contact Us",
        },
      ],
    },
  ];
  const SOCIAL_LIST = [
    {
      keyid: "social-discord",
      route: "#",
      svg: <FaDiscord />,
    },
    {
      keyid: "social-twitter",
      route: "#",
      svg: <FaTwitter />,
    },
    {
      keyid: "social-linkin",
      route: "#",
      svg: <FaLinkedin />,
    },
    {
      keyid: "social-facebook",
      route: "#",
      svg: <FaFacebook />,
    },
  ];
  // =FUNC=================================================
  return (
    <footer>
      {/* --1.CONTAINER ------------------------------------ */}
      <div className="footer-container row align-items-center">
        {/* --1.1.SPONSOR ------------------------------------ */}
        <Sponsor
          thisClassName="col-lg-4 col-12 footer__sponsor_area"
          sponsorCopyWriting={SPONSOR_COPYWRITING}
        />
        {/* --1.2.VISIT ------------------------------------ */}
        <Visit
          thisClassName="col-lg-6 col-12 footer__visit_area"
          visitList={VISIT_LIST}
        />
        {/* --1.3.SOCIAL ------------------------------------ */}
        <Social
          thisClassName="col-12 col-lg-2 footer__social_area"
          socialList={SOCIAL_LIST}
        />
      </div>
    </footer>
  );
};

export default Footer;
