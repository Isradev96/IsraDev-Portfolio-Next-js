import { icons } from "lucide-react";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoGithub
} from "react-icons/bi";

const socials = [
    {
        icon: <BiLogoFacebook />,
        path:"https://www.facebook.com/israel.pelayo.961/",
    },
    {
        icon: <BiLogoGithub />,
        path:"https://github.com/Isradev96",
    },
    {
        icon: <BiLogoLinkedin />,
        path:"https://www.linkedin.com/in/israel-de-jes%C3%BAs-cort%C3%A9s-pelayo-814118252/",
    },
    
]

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
        return (
            <Link key={index} className={iconStyles} href={item.path} target="blank">
                {item.icon}
            </Link>
        )
    })}
  </div>;
};

export default Socials;
