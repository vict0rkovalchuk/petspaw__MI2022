import './Dislikes.scss';

import { Component } from 'react';

import Searchbox from '../searchbox/Searchbox';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import NoItems from '../noItems/NoItems';

import back from '../../icons/left.svg';
import cat from '../../images/cat.jpg';
import heart from '../../icons/full-heart.svg';
import sadSmile from '../../icons/sadsmile.svg';

import CatService from '../../services/CatService';

class Dislikes extends Component {
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
    if (this.props.dislikes.length === 0) {
      this.setState({ loading: false });
      return;
    }

    this.props.dislikes.forEach(item => {
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
                <div className="hover-img">
                  <img className="img" src={sadSmile} alt="like" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    const content = !(loading || error) ? likedCats : [];

    return (
      <div className="app__box dislikes">
        <Searchbox />
        <div className="dislikes__content">
          <div className="location">
            <div className="location-back">
              <img src={back} alt="back" />
            </div>
            <div className="location-title">
              <p>DISLIKES</p>
            </div>
          </div>
          {spinner}
          {errorMessage}
          {content.length ? <div className="grid">{content}</div> : <NoItems />}
        </div>
        <div className="divider" style={{ height: '30px' }}></div>
      </div>
    );
  }
}

export default Dislikes;
