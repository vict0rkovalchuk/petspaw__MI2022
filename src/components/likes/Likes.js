import './Likes.scss';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import back from '../../icons/left.svg';
import gladSmile from '../../icons/gladsmile.svg';

import Searchbox from '../searchbox/Searchbox';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import NoItems from '../noItems/NoItems';

import CatService from '../../services/CatService';

const Likes = props => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState([]);
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
    if (props.likes.length === 0) {
      setLoading(false);
      return;
    }

    props.likes.forEach(item => {
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
                data-name="removeLikes"
                data-id={item.id}
                onClick={e => {
                  props.onRemoveFromLikes(e);
                  props.onReaction(e.target);
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

  let filteredLikesReactions = props.allReaction.filter(
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
          <div onClick={() => history.goBack()} className="location-back">
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
};

export default Likes;
