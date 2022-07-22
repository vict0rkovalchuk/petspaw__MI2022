import './Dislikes.scss';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import back from '../../icons/left.svg';
import sadSmile from '../../icons/sadsmile.svg';

import Searchbox from '../searchbox/Searchbox';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import NoItems from '../noItems/NoItems';

import CatService from '../../services/CatService';

const Dislikes = props => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const catService = new CatService();

  const history = useHistory();

  useEffect(() => {
    updateRandomCat();
  }, []);

  const onRandomCatLoaded = cat => {
    setCats(cats => [...cats, cat]);
    setLoading(false);
    setError(false);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const updateRandomCat = () => {
    if (props.dislikes.length === 0) {
      setLoading(false);
      return;
    }

    props.dislikes.forEach(item => {
      catService.getCatById(item).then(onRandomCatLoaded).catch(onError);
    });
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  let likedCats = cats.map((item, i) => {
    return (
      <div key={i} className="grid-image">
        <img className="image" src={item.image} alt="cat" />

        <div className="grid-hover">
          <div className="box">
            <div className="hover-appear">
              <div
                data-name="removeDislikes"
                // data-listtype="dislikes"
                data-id={item.id}
                onClick={e => {
                  // props.onRemove(e);
                  props.onRemoveFromDislikes(e);
                  props.onReaction(e.target);
                }}
                className="hover-img"
              >
                <img
                  data-name="removeDislikes"
                  // data-listtype="dislikes"
                  data-id={item.id}
                  className="img"
                  src={sadSmile}
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

  let filteredDislikesReactions = props.allReaction.filter(
    item => item.name === 'removeDislikes'
  );
  let userActions = filteredDislikesReactions.reverse().map(item => {
    return (
      <div key={item.id} className="history-item">
        <div className="history-item-data">
          <div className="history-item-date">{item.time}</div>
          <div className="history-item-descr">
            <p>
              Image ID: <span>${item.id}</span> was removed from Dislikes
            </p>
          </div>
        </div>
        <div className="history-item-img">{null}</div>
      </div>
    );
  });

  return (
    <div className="app__box dislikes block">
      <Searchbox />
      <div className="dislikes__content block__content">
        <div className="location">
          <div onClick={() => history.goBack()} className="location-back">
            <img src={back} alt="back" />
          </div>
          <div className="location-title">
            <p>DISLIKES</p>
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
};

export default Dislikes;
