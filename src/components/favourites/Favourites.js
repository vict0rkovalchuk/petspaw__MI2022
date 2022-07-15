import './Favourites.scss';

import { Component } from 'react';

import Searchbox from '../searchbox/Searchbox';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import NoItems from '../noItems/NoItems';

import back from '../../icons/left.svg';
import heart from '../../icons/full-heart.svg';

import CatService from '../../services/CatService';

class Favourites extends Component {
  state = {
    cats: [],
    loading: true,
    error: false
  };

  catService = new CatService();

  componentDidMount() {
    this.updateRandomCat();
  }

  onRandomCatLoaded = cat => {
    this.setState({
      cats: [...this.state.cats, cat],
      loading: false,
      error: false
    });
  };

  // onRandomCatLoading = () => {
  //   this.setState({ loading: true });
  // };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateRandomCat = () => {
    // this.onRandomCatLoading();
    if (this.props.favourites.length === 0) {
      this.setState({ loading: false });
      return;
    }

    this.props.favourites.forEach(item => {
      this.catService
        .getCatById(item)
        .then(this.onRandomCatLoaded)
        .catch(this.onError);
    });
  };

  render() {
    const { cats, loading, error } = this.state;

    const errorMessage = error ? <ErrorMessage /> : null;

    let likedCats = cats.map((item, i) => {
      return (
        <div key={i} className="grid-image">
          <img className="image" src={item.image} alt="cat" />

          <div className="grid-hover">
            <div className="box">
              <div className="hover-appear">
                <div
                  data-name="removeFavourites"
                  data-id={item.id}
                  onClick={e => {
                    this.props.onRemoveFromFavourites(e);
                    this.props.onReaction(e.target);
                  }}
                  className="hover-img"
                >
                  <img
                    data-name="removeFromFavourites"
                    data-id={item.id}
                    className="img"
                    src={heart}
                    alt="like"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    const content = !(loading || error) ? likedCats : [];

    const spinnerOrContent = loading ? (
      <Spinner />
    ) : content.length ? (
      <div className="grid">{content}</div>
    ) : (
      <NoItems />
    );

    let filteredFavouritesReactions = this.props.allReaction.filter(
      item => item.name === 'removeFromFavourites'
    );
    let userActions = filteredFavouritesReactions.reverse().map(item => {
      return (
        <div key={item.id} className="history-item">
          <div className="history-item-data">
            <div className="history-item-date">{item.time}</div>
            <div className="history-item-descr">
              <p>
                Image ID: <span>${item.id}</span> was removed from Favourites
              </p>
            </div>
          </div>
          <div className="history-item-img">{null}</div>
        </div>
      );
    });

    return (
      <div className="app__box favourites block">
        <Searchbox />
        <div className="favourites__content block__content">
          <div className="location">
            <div className="location-back">
              <img src={back} alt="back" />
            </div>
            <div className="location-title">
              <p>FAVOURITES</p>
            </div>
          </div>
          {spinnerOrContent}
          {errorMessage}
          {content.length !== 0 && userActions.length !== 0 ? (
            <div className="history">{userActions}</div>
          ) : null}
        </div>
        <div className="divider" style={{ height: '30px' }}></div>
      </div>
    );
  }
}

export default Favourites;
