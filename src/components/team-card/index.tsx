import "./team-card.sass";

import Image from "next/image";

interface TeamCardProps {
  team: {
    name: string;
    role: string;
    imageSrc: string;
  };
}

const TeamCard = ({ team: { name, role, imageSrc } }: TeamCardProps) => {
  return (
    <div className="team">
      <div className="photo">
        <Image src={imageSrc} alt="Photo Employee" width={130} height={130} />
      </div>

      <div className="team__content">
        <h3 className="title">{name}</h3>
        <span className="function">{role}</span>
      </div>
      <ul className="contact">
        <li>
          <a title="facebook">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a title="google-plus">
            <i className="fab fa-google-plus"></i>
          </a>
        </li>
        <li>
          <a title="twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a title="linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TeamCard;
