import PropTypes from 'prop-types';
import { FeedbackTitle } from './sections.styled';

export const Sections = ({ title, children }) => {
    return (
        <FeedbackTitle>
        {title && <h2>{title}</h2>}
        {children}
      </FeedbackTitle>
    )
}


Sections.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };