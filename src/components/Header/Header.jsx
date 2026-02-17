import Icon from '../Icon/Icon';
import './Header.css';

const social = {
  linkedin: 'https://www.linkedin.com/in/anayadesign/',
  github: 'https://github.com/anayadesign/',
};

const Header = () => {
  return (
    <header className="header">
      <div className="header--group">
        <h1 className="header--title">
          Hey there,
          <br />
          I'm David Anaya
        </h1>
        <p className="header--intro">
          I'm a frontend engineer based in Oakland, CA.
        </p>
        <div className="header--apps">
          {Object.keys(social).map((key) => (
            <Icon
              name={key}
              link={social[key]}
              key={key}
              className="icon-social"
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
