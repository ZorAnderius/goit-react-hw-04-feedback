import headerCSS from './Header.module.css';
import propTypes from 'prop-types';

export const Header = ({ title, styles }) => {
  return (
    <>
      <p className={headerCSS[`${styles}`]}>{title}</p>
    </>
  );
};

Header.propTypes = {
  title: propTypes.string.isRequired,
  styles: propTypes.string,
};
