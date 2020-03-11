import React, {PureComponent} from 'react';
import {func} from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {CommentsType, MatchType} from '../../types.js';
import {getDate} from '../../utils/getDate.js'
import {getComments} from '../../reducer/films/selectors';
import {Operation as FilmsOperation} from "../../reducer/films/films.js";

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

class Comments extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadComments, match: {
      params: {
        id
      }
    }} = this.props;
    loadComments(id);
  }

  render() {
    const {commentsData = []} = this.props;

    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {commentsData.map(({id, ...data}) => <Comment key={id} {...data}/>)}
        </div>
      </div>);
  }
}

Comments.propTypes = {
  commentsData: CommentsType,
  match: MatchType,
  loadComments: func
};

const mapStateToProps = (state) => ({
  commentsData: getComments(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(FilmsOperation.loadComments(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Comments));
