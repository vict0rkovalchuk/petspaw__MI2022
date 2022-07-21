import './Likes.scss';

import { Component } from 'react';

import back from '../../icons/left.svg';
import gladSmile from '../../icons/gladsmile.svg';

import Searchbox from '../searchbox/Searchbox';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import NoItems from '../noItems/NoItems';

import CatService from '../../services/CatService';

class Likes extends Component {
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

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateRandomCat = () => {
    if (this.props.likes.length === 0) {
      this.setState({ loading: false });
      return;
    }

    this.props.likes.forEach(item => {
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
                  data-name="removeLikes"
                  data-id={item.id}
                  onClick={e => {
                    this.props.onRemoveFromLikes(e);
                    this.props.onReaction(e.target);
                  }}
                  className="hover-img"
                >
                  <img
                    data-name="removeFromLikes"
                    data-id={item.id}
                    className="img"
                    src={gladSmile}
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

    let filteredLikesReactions = this.props.allReaction.filter(
      item => item.name === 'removeFromLikes'
    );
    let userActions = filteredLikesReactions.reverse().map(item => {
      return (
        <div key={item.id} className="history-item">
          <div className="history-item-data">
            <div className="history-item-date">{item.time}</div>
            <div className="history-item-descr">
              <p>
                Image ID: <span>${item.id}</span> was removed from Likes
              </p>
            </div>
          </div>
          <div className="history-item-img">{null}</div>
        </div>
      );
    });

    return (
      <div className="app__box likes block">
        <Searchbox />
        <div className="likes__content block__content">
          <div className="location">
            <div className="location-back">
              <img src={back} alt="back" />
            </div>
            <div className="location-title">
              <p>LIKES</p>
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

export default Likes;
