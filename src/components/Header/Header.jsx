import Icon from '../Icon/Icon';
import './Header.css';

const Header = ({ content }) => {
  return (
    <header className="header">
      <div className="header--group">
        <h1 className="header--title">
          {content.greeting}
          <br />
          {content.name}
        </h1>
        <p className="header--intro">{content.intro}</p>
        <div className="header--apps">
          {Object.keys(content.social).map((key) => (
            <Icon
              name={key}
              link={content.social[key]}
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
