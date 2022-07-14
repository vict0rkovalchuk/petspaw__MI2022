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

    const errorMessage = error ? <ErrorMessage /> : null;
    let likedCats = cats.map((item, i) => {
      return (
        <div key={i} className="grid-image">
          <img className="image" src={item.image} alt="cat" />

          <div className="grid-hover">
            <div className="box">
              <div className="hover-appear">
                <div className="hover-img">
                  <img className="img" src={gladSmile} alt="like" />
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
        </div>
        <div className="divider" style={{ height: '30px' }}></div>
      </div>
    );
  }
}

export default Likes;
