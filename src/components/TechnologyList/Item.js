import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styled from 'styled-components';
import Icon from '../Icon';

const StyledLink = styled(Link)`
  color: #1f2228;
  display: flex;
  align-items: center;
  font-weight: 500;
  padding: 15px 10px;
  text-decoration: none;

  &:hover {
    background-color: #f2f2f2;
  }

  > svg {
    margin-left: 8px;
    margin-right: 5px;
  }
`;

const MetaText = styled.span`
  color: #999999;
  display: block;
  font-size: 90%;
  font-weight: normal;
  margin-top: 2px;
`;

const Item = props => {
  return (
    <StyledLink to={props.href}>
      <Icon name="code" fill="grey" />
      <span>
        {props.text}
        <MetaText>{props.meta}</MetaText>
      </span>
    </StyledLink>
  );
};

Item.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  meta: PropTypes.string
};

export default Item;
