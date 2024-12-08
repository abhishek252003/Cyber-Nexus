import "./Hero.css";
import { hero } from "../../assets";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="Hero">
        <div className="HeroTitile">
            <span className="HeroTitleLg">Unite, Learn, Secure.</span>
            <span className="HeroTitleMd">Come to Cyber Nexus</span>
            <span className="HeroTitleSm">Connecting Minds, <a>Securing the Future</a></span>
            {/* "Cyber Nexus: Connecting Minds, Securing the Future" */}

            <Link to="/write"><div className="button">
                <a>Create your Blog</a>
            </div></Link>
        </div>
        <img className="HeroImg" src={hero}/>
    </div>

  )
}
