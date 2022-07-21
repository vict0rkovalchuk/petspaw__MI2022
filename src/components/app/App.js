import './App.scss';

import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom';

import logo from '../../icons/logo.svg';
import voting from '../../images/cards/vote-table.png';
import breeds from '../../images/cards/pet-breeds.png';
import gallery from '../../images/cards/images-search.png';
import girlWithPet from '../../images/girl-and-pet-main.png';

import Voting from '../voting/Voting';
import Breeds from '../breeds/Breeds';
import Gallery from '../gallery/Gallery';
import Likes from '../likes/Likes';
import Favourites from '../favourites/Favourites';
import Dislikes from '../dislikes/Dislikes';
import Search from '../search/Search';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import BreedInfo from '../breedInfo/BreedInfo';

class App extends Component {
  state = {
    likes: [],
    favourites: [],
    dislikes: [],
    allReactions: []
  };

  onReaction = target => {
    let name = target.dataset.name;
    let id = target.dataset.id;
    let today = new Date();
    let hours =
      today.getHours().toString().length === 1
        ? '0' + today.getHours()
        : today.getHours();
    let minutes =
      today.getMinutes().toString().length === 1
        ? '0' + today.getMinutes()
        : today.getMinutes();

    let time = hours + ':' + minutes;

    if (name === 'likes' || name === 'favourites' || name === 'dislikes') {
      this.setState({
        [name]: [...this.state[name], id]
      });
    }

    this.setState(({ allReactions }) => {
      return {
        allReactions: [...allReactions, { name, id, time }]
      };
    });
  };

  onRemoveFromFavourites = e => {
    this.setState(({ favourites }) => {
      return {
        favourites: favourites.filter(item => item !== e.target.dataset.id)
      };
    });
  };

  onRemoveFromLikes = e => {
    this.setState(({ likes }) => {
      return {
        likes: likes.filter(item => item !== e.target.dataset.id)
      };
    });
  };

  onRemoveFromDislikes = e => {
    this.setState(({ dislikes }) => {
      return {
        dislikes: dislikes.filter(item => item !== e.target.dataset.id)
      };
    });
  };

  render() {
    return (
      <Router>
        <div id="app" className="app">
          <div className="app__menu">
            <Link to="/" className="app__logo">
              <img src={logo} alt="petspaw logo" />
            </Link>

            <div className="app__cards">
              <div className="app__title">Hi intern!</div>
              <div className="app__greeting">
                Welcome to MI 2022 Front-end test
              </div>
              <div className="app__subtitle">Lets start using The Cat API</div>
              <div className="app__cards-items">
                <NavLink
                  exact
                  activeClassName="activeCard"
                  to="/voting"
                  className="app__card-item"
                >
                  <div className="app__card-image card-image voting">
                    <img src={voting} alt="vote-table" />
                  </div>
                  <button className="app__card-button card-btn">Voting</button>
                </NavLink>
                <NavLink
                  exact
                  activeClassName="activeCard"
                  to="/breeds"
                  className="app__card-item"
                >
                  <div className="app__card-image card-image breeds">
                    <img src={breeds} alt="vote-table" />
                  </div>
                  <button className="app__card-button card-btn">BREEDS</button>
                </NavLink>
                <NavLink
                  exact
                  activeClassName="activeCard"
                  to="/gallery"
                  className="app__card-item"
                >
                  <div className="app__card-image card-image gallery">
                    <img src={gallery} alt="vote-table" />
                  </div>
                  <button className="app__card-button card-btn">GALLERY</button>
                </NavLink>
              </div>
            </div>
          </div>

          <Switch>
            <Route exact path="/">
              <View />
            </Route>

            <Route exact path="/voting">
              <ErrorBoundary>
                <Voting
                  onReaction={this.onReaction}
                  allReaction={this.state.allReactions}
                />
              </ErrorBoundary>
            </Route>

            <Route exact path="/breeds">
              <Breeds />
            </Route>

            <Route exact path="/breeds/:breedId">
              <BreedInfo />
            </Route>

            <Route exact path="/gallery">
              <Gallery />
            </Route>

            <Route exact path="/search">
              <Search />
            </Route>

            <Route exact path="/likes">
              <Likes
                onReaction={this.onReaction}
                onRemoveFromLikes={this.onRemoveFromLikes}
                likes={this.state.likes}
                allReaction={this.state.allReactions}
              />
            </Route>

            <Route exact path="/favourites">
              <Favourites
                onReaction={this.onReaction}
                onRemoveFromFavourites={this.onRemoveFromFavourites}
                favourites={this.state.favourites}
                allReaction={this.state.allReactions}
              />
            </Route>

            <Route exact path="/dislikes">
              <Dislikes
                onReaction={this.onReaction}
                onRemoveFromDislikes={this.onRemoveFromDislikes}
                allReaction={this.state.allReactions}
                dislikes={this.state.dislikes}
              />
            </Route>

            {/* <Redirect to="/" /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

function View() {
  return (
    <>
      <div className="app__image app__box"></div>
      <img src={girlWithPet} alt="girl-and-pet" />
    </>
  );
}

export default App;
