import './Search.scss';

import { Component } from 'react';

import Searchbox from '../searchbox/Searchbox';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import NoItems from '../noItems/NoItems';

import back from '../../icons/left.svg';
import gladSmile from '../../icons/gladsmile.svg';

import CatService from '../../services/CatService';

class Search extends Component {
  state = {
    queryString: '',
    cats: [],
    loading: true,
    error: false
  };

  catService = new CatService();

  componentDidMount() {
    this.updateRandomCat();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.queryString !== prevState.queryString) {
      this.updateRandomCat();
    }
  }

  updateData = value => {
    this.setState({ queryString: value });
  };

  onRandomCatLoaded = list => {
    this.setState({ cats: list, loading: false, error: false });
  };

  onRandomCatLoading = () => {
    this.setState({ loading: true });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateRandomCat = () => {
    this.onRandomCatLoading();
    this.catService
      .getImagesForQuery(this.state.queryString)
      .then(this.onRandomCatLoaded)
      .catch(this.onError);
  };

  render() {
    const { cats, error, loading, queryString } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && queryString.length > 0 ? <Spinner /> : null;

    const breedsImagesGrid = cats.map(item => {
      return (
        <div key={item.id} className="grid-image">
          <img className="image" src={item.url} alt={item.breeds[0].name} />

          <div className="grid-hover">
            <div className="box">
              <div className="hover-effect">
                <div className="hover-text">
                  <div>{item.breeds[0].name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    const content = !(loading || error) ? (
      <div className="grid">{breedsImagesGrid}</div>
    ) : null;

    return (
      <div className="app__box searcbox block">
        <Searchbox updateData={this.updateData} />
        <div className="searcbox__content block__content">
          <div className="location">
            <div className="location-back">
              <img src={back} alt="back" />
            </div>
            <div className="location-title">
              <p>SEARCH</p>
            </div>
          </div>
          <div className="searchbox__results">
            Search results for: <span className="bold">{queryString}</span>
          </div>
          {errorMessage}
          {spinner}
          {content}
        </div>

        <div className="divider" style={{ height: '30px' }}></div>
      </div>
    );
  }
}

export default Search;
