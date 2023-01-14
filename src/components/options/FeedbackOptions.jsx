
import { ButtonStyled, ButtonDiv } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export const ButtonList = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonDiv>
            {options.map(option => (
                <ButtonStyled
                    key={option}
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}
                >
                    {option}
                </ButtonStyled>
            ))}
        </ButtonDiv>
    )
}

ButtonList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};