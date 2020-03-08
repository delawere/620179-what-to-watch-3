import React from 'react';
import {number, string, func, bool, object} from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {Operation as FilmsOperation} from '../../reducer/films/films.js';
import {getLoading} from '../../reducer/films/selectors.js';
import {getError} from '../../reducer/films/selectors.js';
import Logo from '../logo/logo.jsx';

const DISABLE = {
  opacity: 0.2,
  cursor: `initial`
};

const COMMENT_MIN_LENGTH = 50;
const COMMENT_MAX_LENGTH = 400;

const AddReview = ({history, onSubmit, loading, error, id, comment, rating, onChangeComment, onChangeRating}) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    onSubmit(id, {
      rating,
      comment,
    }, () => {
      history.push(`/`);
    });
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review" style={loading ? DISABLE : {}}>
        <form action="#" className="add-review__form" onSubmit={handleOnSubmit}>
          <div className="rating">
            <div className="rating__stars" onChange={onChangeRating}>
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" defaultChecked={rating === 1}/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" defaultChecked={rating === 2}/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked={rating === 3}/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" defaultChecked={rating === 4}/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" defaultChecked={rating === 5} />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          {error ? <div>{`При отправке возникла ошибка: ${error}`}</div> : null}
          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              minLength={COMMENT_MIN_LENGTH}
              maxLength={COMMENT_MAX_LENGTH}
              value={comment}
              onChange={onChangeComment}
            ></textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                style={comment.length < COMMENT_MIN_LENGTH ? DISABLE : {}}
              >
                Post
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  history: object,
  loading: bool,
  onSubmit: func,
  id: number,
  comment: string,
  rating: number,
  onChangeComment: func,
  onChangeRating: func,
  error: string
};

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  error: getError(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, data, cb) {
    dispatch(FilmsOperation.addComment(id, data, cb));
  },
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddReview));
