import './App.scss';

import { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   Redirect,
//   NavLink
// } from 'react-router-dom';

// import logo from '../../icons/logo.svg';
// import bigClose from '../../icons/big-close.svg';
// import voting from '../../images/cards/vote-table.png';
// import breeds from '../../images/cards/pet-breeds.png';
// import gallery from '../../images/cards/images-search.png';
import girlWithPet from '../../images/girl-and-pet-main.png';
// import openEye from '../../icons/open-eye.svg';
// import closedEye from '../../icons/closed-eye.svg';

// import Voting from '../voting/Voting';
// import Breeds from '../breeds/Breeds';
// import Gallery from '../gallery/Gallery';
// import Likes from '../likes/Likes';
// import Favourites from '../favourites/Favourites';
// import Dislikes from '../dislikes/Dislikes';
// import Search from '../search/Search';
// import ErrorBoundary from '../errorBoundary/ErrorBoundary';
// import BreedInfo from '../breedInfo/BreedInfo';
// import { ReactComponent as PetsPaw } from '../../icons/pets-paw.svg';

class App extends Component {
  // state = {
  //   likes: [],
  //   favourites: [],
  //   dislikes: [],
  //   allReactions: [],
  //   checked: true
  // };

  // onReaction = target => {
  //   let name = target.dataset.name;
  //   let id = target.dataset.id;
  //   let today = new Date();
  //   let hours =
  //     today.getHours().toString().length === 1
  //       ? '0' + today.getHours()
  //       : today.getHours();
  //   let minutes =
  //     today.getMinutes().toString().length === 1
  //       ? '0' + today.getMinutes()
  //       : today.getMinutes();

  //   let time = hours + ':' + minutes;

  //   if (name === 'likes' || name === 'favourites' || name === 'dislikes') {
  //     this.setState({
  //       [name]: [...this.state[name], id]
  //     });
  //   }

  //   this.setState(({ allReactions }) => {
  //     return {
  //       allReactions: [...allReactions, { name, id, time }]
  //     };
  //   });
  // };

  // onRemoveFromFavourites = e => {
  //   e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  //   this.setState(({ favourites }) => {
  //     return {
  //       favourites: favourites.filter(item => item !== e.target.dataset.id)
  //     };
  //   });
  // };

  // onRemoveFromLikes = e => {
  //   e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  //   this.setState(({ likes }) => {
  //     return {
  //       likes: likes.filter(item => item !== e.target.dataset.id)
  //     };
  //   });
  // };

  // onRemoveFromDislikes = e => {
  //   e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  //   this.setState(({ dislikes }) => {
  //     return {
  //       dislikes: dislikes.filter(item => item !== e.target.dataset.id)
  //     };
  //   });
  // };

  render() {
    return (
      <>
        <div className="app__box"></div>
        <img className="app__image" src={girlWithPet} alt="girl-and-pet" />
      </>
    );
  }
}

// function View() {
//   return (
//     <>
//       <div className="app__box"></div>
//       <img className="app__image" src={girlWithPet} alt="girl-and-pet" />
//     </>
//   );
// }

export default App;
