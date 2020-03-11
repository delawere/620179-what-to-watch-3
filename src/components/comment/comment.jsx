import React, {memo} from 'react';
import {number, string} from 'prop-types';
import {UserType} from '../../types.js';
import {getDate} from '../../utils/getDate.js';

const Comment = ({user: {name} = {}, rating, comment, date}) => {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime="2016-12-24">{getDate(date)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
};

Comment.propTypes = {
  user: UserType,
  rating: number,
  comment: string,
  date: string
};

export default memo(Comment);
