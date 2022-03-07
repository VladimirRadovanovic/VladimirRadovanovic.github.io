import React from "react";

const SocialShare = [
  {
    iconName: "facebook",
    link: "https://www.facebook.com/",
  },
  { iconName: "twitter", link: "https://twitter.com/" },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/",
  },
  { iconName: "dribbble", link: "https://dribbble.com/" },
  {
    iconName: "tik-tok",
    link: "https://www.tiktok.com/",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {/* {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))} */}
        <li>
           <a href='https://www.linkedin.com/in/vladimir-radovanovic-476311224/' target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin-in svg"></i>
            </a>
        </li>
        <li>
           <a href='https://github.com/VladimirRadovanovic' target="_blank" rel="noreferrer">
           <i className="fa-brands fa-github-square svg"></i>
            </a>
        </li>
        <li>
           <a href='https://angel.co/u/vladimir-radovanovic-2' target="_blank" rel="noreferrer">
           <i className="fa-brands fa-angellist svg"></i>
            </a>
        </li>
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
