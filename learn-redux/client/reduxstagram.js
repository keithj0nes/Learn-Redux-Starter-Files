import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter, Match, Miss } from 'react-router';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

//import components
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

//import css
import css from './styles/style.styl';

// const router = (
//   <BrowserRouter>
//     <div>
//       <Match exactly path="/" component={Main}/>
//       <Match path="/a" component={Single}/>
//     </div>
//   </BrowserRouter>
// )

const router = (
  <Provider store={store}>

    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>

)

render(router, document.getElementById('root'));
