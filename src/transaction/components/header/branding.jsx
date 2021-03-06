// DEPENDENCES
import { useEffect, useRef, useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import badgeAction from "../../../redux/actions/badgeAction";
// COMPONENTS

/**
 * Use in layout/transaction/components/header
 * Include 3 components
 *      -   LogoBox
 *      -   BrandingBadge
 *      -   SelectBrandingBadgeBox
 * @param {*} props
 * @returns
 */
function Branding(props) {
  // =STATES=================================================
  const BRAND_NAME = props.brandName;
  const BRAND_BADGES = props.brandBadges;
  const badge = useSelector((state) => state.badge);
  const dispatch = useDispatch();
  const [openModalBox, setOpenModalBox] = useState(false);
  const node = useRef();
  // =FUNC=================================================
  useEffect(() => {
    dispatch(badgeAction.write(BRAND_BADGES[0]));
  }, []);
  useOnClickOutside(node, () => setOpenModalBox(false));
  const onClickBadgeButton = () => {
    setOpenModalBox(!openModalBox);
  };

  return (
    <div className={props.thisClassName} ref={node}>
      {/* --1-BRANDING_LOGOBOX -------------- */}
      <div className="logobox">
        <svg
          width="82"
          height="32"
          viewBox="0 0 82 32"
          fill="none"
          className="lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.47892 0H20.1412C21.5103 0 22.6202 1.10985 22.6202 2.47892V21.8758C22.6202 22.8091 22.1994 23.6928 21.4749 24.2812L12.4821 31.584C11.7992 32.1386 10.821 32.1386 10.1381 31.584L1.14527 24.2812C0.420723 23.6928 0 22.8091 0 21.8758V2.47892C0 1.10985 1.10985 0 2.47892 0Z"
            fill="#1273EA"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.042 3.71826C18.0688 3.71826 18.9012 4.55065 18.9012 5.57745V11.5744L18.9006 11.6234C18.8749 12.8464 17.8884 13.8332 16.6655 13.8592L16.6157 13.8598L16.6648 13.8603C17.8878 13.886 18.8745 14.8725 18.9006 16.0955L18.9012 16.1452V19.8965C18.9012 20.4301 18.6718 20.9381 18.2715 21.291L13.6012 25.4087L13.6013 17.0045C13.6013 15.9777 12.7689 15.1453 11.7421 15.1453H9.01763L9.01755 25.4087L4.3474 21.291C3.9471 20.9381 3.71777 20.4301 3.71777 19.8965V5.57745C3.71777 4.55065 4.55016 3.71826 5.57696 3.71826H17.042ZM13.6013 6.28935H9.01763V12.0029H11.7421C12.7689 12.0029 13.6013 11.1705 13.6013 10.1437V6.28935Z"
            fill="white"
          ></path>
          <path
            d="M33.2 21.3808V17.9712H35.8063L38.1678 21.3808H41.2115L38.4652 17.4466C39.2698 17.0969 39.8908 16.5928 40.3281 15.9341C40.7654 15.2755 40.9841 14.4916 40.9841 13.5824C40.9841 12.6731 40.7683 11.8863 40.3369 11.2219C39.9054 10.5574 39.2902 10.0445 38.4914 9.68317C37.6926 9.3218 36.7509 9.14112 35.6664 9.14112H30.3662V21.3808H33.2ZM35.6389 15.8032H33.3099V11.4651H35.6389C36.4975 11.4651 37.1503 11.6518 37.5973 12.0252C38.0443 12.3985 38.2678 12.9349 38.2678 13.6342C38.2678 14.3216 38.0443 14.855 37.5973 15.2343C37.1503 15.6136 36.4975 15.8032 35.6389 15.8032ZM47.65 21.5357C48.6453 21.5357 49.5352 21.3272 50.3197 20.9103C51.1043 20.4933 51.719 19.9148 52.164 19.1748C52.609 18.4348 52.8314 17.595 52.8314 16.6554C52.8314 15.7157 52.609 14.8759 52.164 14.1359C51.719 13.3959 51.1043 12.8174 50.3197 12.4004C49.5352 11.9835 48.6453 11.775 47.65 11.775C46.6547 11.775 45.7618 11.9835 44.9714 12.4004C44.181 12.8174 43.5634 13.3959 43.1184 14.1359C42.6734 14.8759 42.451 15.7157 42.451 16.6554C42.451 17.595 42.6734 18.4348 43.1184 19.1748C43.5634 19.9148 44.181 20.4933 44.9714 20.9103C45.7618 21.3272 46.6547 21.5357 47.65 21.5357ZM47.6499 19.3667C46.9513 19.3667 46.375 19.128 45.9209 18.6508C45.4668 18.1735 45.2397 17.5342 45.2397 16.7328C45.2397 15.9315 45.4668 15.2922 45.9209 14.8149C46.375 14.3376 46.9513 14.099 47.6499 14.099C48.3485 14.099 48.922 14.3376 49.3702 14.8149C49.8185 15.2922 50.0426 15.9315 50.0426 16.7328C50.0426 17.5342 49.8185 18.1735 49.3702 18.6508C48.922 19.128 48.3485 19.3667 47.6499 19.3667ZM57.2603 21.3808V16.701C57.2603 15.8566 57.464 15.2203 57.8715 14.7922C58.2791 14.3641 58.8263 14.15 59.5133 14.15C60.1304 14.15 60.6019 14.3348 60.9279 14.7042C61.2539 15.0737 61.417 15.6337 61.417 16.3844V21.3808H64.1415V15.9621C64.1415 14.5781 63.7835 13.5343 63.0674 12.8306C62.3513 12.1268 61.4111 11.775 60.2468 11.775C59.6064 11.775 59.0184 11.8835 58.4828 12.1004C57.9472 12.3174 57.4989 12.6253 57.138 13.0241V11.9157H54.5357V21.3808H57.2603ZM68.0148 10.6904C68.5185 10.6904 68.9284 10.5391 69.2447 10.2363C69.561 9.93359 69.7191 9.55071 69.7191 9.0877C69.7191 8.6603 69.561 8.30413 69.2447 8.0192C68.9284 7.73426 68.5185 7.5918 68.0148 7.5918C67.5112 7.5918 67.1012 7.7402 66.785 8.03701C66.4687 8.33381 66.3106 8.70185 66.3106 9.14112C66.3106 9.5804 66.4687 9.94843 66.785 10.2452C67.1012 10.542 67.5112 10.6904 68.0148 10.6904ZM69.4092 21.3808V11.9299H66.6204V21.3808H69.4092ZM74.6127 21.3808V16.701C74.6127 15.8566 74.8165 15.2203 75.224 14.7922C75.6315 14.3641 76.1787 14.15 76.8657 14.15C77.4828 14.15 77.9544 14.3348 78.2804 14.7042C78.6064 15.0737 78.7694 15.6337 78.7694 16.3844V21.3808H81.494V15.9621C81.494 14.5781 81.1359 13.5343 80.4199 12.8306C79.7038 12.1268 78.7636 11.775 77.5992 11.775C76.9588 11.775 76.3709 11.8835 75.8353 12.1004C75.2997 12.3174 74.8514 12.6253 74.4904 13.0241V11.9157H71.8881V21.3808H74.6127Z"
            fill="#2E3A59"
          ></path>
        </svg>
      </div>

      {/* --2-BRANDING_BADEGE_BOX ------------ */}
      <div className="branding__badge_box d-flex align-items-center">
        <div
          className="custom-badge background-info text-uppercase "
        >
          {badge.name}
        </div>
        <button
          className="btn select-btn d-none d-lg-block "
          onClick={onClickBadgeButton}
        >
          <BsFillCaretDownFill />
        </button>
      </div>

      {/* --3-BRANDING_BADEGE_SELECT_BOX ------------ */}
      <div
        className={
          (openModalBox ? "" : "d-none") +
          " select_box branding__badge_select_box border "
        }
      >
        {BRAND_BADGES.map((item) => {
          if (item.keyid !== badge.keyid) {
            return (
              <a className="item" href="#" key={item.keyid}>
                <span className="custom-dot">
                  <GoPrimitiveDot />
                </span>
                <span className="info">
                  {BRAND_NAME} {item.name}
                </span>
              </a>
            );
          } else { return ""; }
        })}
      </div>
    </div>
  );
}

export default Branding;
