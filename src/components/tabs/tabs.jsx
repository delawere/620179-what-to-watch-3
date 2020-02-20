import React from 'react';
import {withRouter} from "react-router-dom";

const Tabs = ({match}) => {
  const renderOverview = () => (
      <>
    <div className="movie-rating">
      <div className="movie-rating__score">8,9</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">240 ratings</span>
      </p>
    </div>

  <div className="movie-card__text">
    <p>
      In the 1930s, the Grand Budapest Hotel is a popular European
      ski resort, presided over by concierge Gustave H. (Ralph
      Fiennes). Zero, a junior lobby boy, becomes Gustave&#39;s friend
      and protege.
    </p>

    <p>
      Gustave prides himself on providing first-class service to the
      hotel&#39;s guests, including satisfying the sexual needs of the
      many elderly women who stay there. When one of Gustave&#39;s
      lovers dies mysteriously, Gustave finds himself the recipient
      of a priceless painting and the chief suspect in her murder.
    </p>

    <p className="movie-card__director">
      <strong>Director: Wes Andreson</strong>
    </p>

    <p className="movie-card__starring">
      <strong>
        Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe
        and other
      </strong>
    </p>
  </div>
  </>
  );

  const renderDetails = () => (
      <>
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">Wes Andreson</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
          Bill Murray,
          Edward Norton,
          Jude Law,
          Willem Dafoe,
          Saoirse Ronan,
          Tony Revoloru,
          Tilda Swinton,
          Tom Wilkinson,
          Owen Wilkinson,
          Adrien Brody,
          Ralph Fiennes,
          Jeff Goldblum
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">1h 39m</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">Comedy</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">2014</span>
        </p>
      </div>
    </div>
  </>
  );

  const renderReviews = () => (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&#39s funniest and most exquisitely designed movies in years.</p>

            <footer className="review__details">
              <cite className="review__author">Kate Muir</cite>
              <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,9</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">Anderson&#39s films are too precious for some, but for those of us willing to lose ourselves in them, they&#39re a delight. &#34The Grand Budapest Hotel&#34 is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>

            <footer className="review__details">
              <cite className="review__author">Bill Goodykoontz</cite>
              <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,0</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">I didn&#39t find it amusing, and while I can appreciate the creativity, it&#39s an hour and 40 minutes I wish I could take back.</p>

            <footer className="review__details">
              <cite className="review__author">Amanda Greever</cite>
              <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,0</div>
        </div>
      </div>
      <div className="movie-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

            <footer className="review__details">
              <cite className="review__author">Matthew Lickona</cite>
              <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">7,2</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

            <footer className="review__details">
              <cite className="review__author">Paula Fleri-Soler</cite>
              <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">7,6</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

            <footer className="review__details">
              <cite className="review__author">Paula Fleri-Soler</cite>
              <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">7,0</div>
        </div>
      </div>
    </div>
  );

  const renderActiveTab = () => {
    const {params: {tab}} = match;

    if (tab === `details`) {
      return renderDetails();
    } else if (tab === `reviews`) {
      return renderReviews();
    } else {
      return renderOverview();
    }

  };

  return (
    renderActiveTab()
  );
};

export {Tabs};
export default withRouter(Tabs);

