import { Header } from 'components/Header/Header';
import sectionCSS from './Section.module.css';
import propTypes from 'prop-types';

export const Section = ({ title, title_style, section_style, children }) => {
  return (
    <section className={sectionCSS[`${section_style}`]}>
      <Header title={title} styles={title_style} />
      {children}
    </section>
  );
};

Section.propTypes = {
  section_style: propTypes.string,
  children: propTypes.any.isRequired,
};
