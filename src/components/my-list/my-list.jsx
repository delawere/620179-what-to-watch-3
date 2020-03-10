// Libs
import React, {PureComponent} from "react";
import {array, func} from 'prop-types';
import {connect} from "react-redux";
// Utils
import {Operation as FavoritesOpearion} from "../../reducer/favorites/favorites.js";
import {getFavorites} from "../../reducer/favorites/selectors.js";
// Components
import Logo from "../logo/logo.jsx";
import Footer from "../footer/footer.jsx";
import Avatar from '../avatar/avatar.jsx';
import MovieCard from "../movie-card/movie-card.jsx";

class MyList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavorites} = this.props;
    loadFavorites();
  }

  render() {
    const {favorites = []} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <Avatar />
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {favorites.map((film) => {
              const {id} = film;
              return <MovieCard key={id} {...film}/>;
            })}
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

MyList.propTypes = {
  favorites: array,
  loadFavorites: func
};

const mapStateToProps = (state) => ({
  favorites: getFavorites(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites() {
    dispatch(FavoritesOpearion.loadFavorites());
  }
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
