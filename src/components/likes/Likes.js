import './Likes.scss';

import { Component } from 'react';

import Searchbox from '../searchbox/Searchbox';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import NoItems from '../noItems/NoItems';

import back from '../../icons/left.svg';
import gladSmile from '../../icons/gladsmile.svg';

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

  // onRandomCatLoading = () => {
  //   this.setState({ loading: true });
  // };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateRandomCat = () => {
    // this.onRandomCatLoading();
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

    const spinner = loading ? <Spinner /> : null;

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
        <div key={item.id} className="voting__history-item">
          <div className="voting__history-item-data">
            <div className="voting__history-item-date">{item.time}</div>
            <div className="voting__history-item-descr">
              <p>
                Image ID: <span>${item.id}</span> was removed from Likes
              </p>
            </div>
          </div>
          <div className="voting__history-item-img">{null}</div>
        </div>
      );
    });

    return (
      <div className="app__box likes">
        <Searchbox />
        <div className="likes__content">
          <div className="location">
            <div className="location-back">
              <img src={back} alt="back" />
            </div>
            <div className="location-title">
              <p>LIKES</p>
            </div>
          </div>
          {/* {spinner} */}
          {spinnerOrContent}
          {/*  Above is good ! */}
          {errorMessage}
          {/* {content.length ? <div className="grid">{content}</div> : <NoItems />} */}

          {userActions.length !== 0 ? (
            <div className="voting__history">{userActions}</div>
          ) : null}
        </div>
        <div className="divider" style={{ height: '30px' }}></div>
      </div>
    );
  }
}

export default Likes;
