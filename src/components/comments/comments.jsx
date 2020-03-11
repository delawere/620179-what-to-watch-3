import React, {PureComponent} from 'react';
import {func} from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {CommentsType, MatchType} from '../../types.js';
import {getComments} from '../../reducer/films/selectors';
import {Operation as FilmsOperation} from "../../reducer/films/films.js";
import Comment from '../comment/comment.jsx';

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
          {commentsData.map((data) => {
            const {id} = data;
            return <Comment key={id} {...data}/>;
          })}
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

export {Comments};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Comments));
