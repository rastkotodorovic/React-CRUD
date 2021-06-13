import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import Header from './components/Header';
import StreamList from './components/streams/StreamList';
import StreamDelete from './components/streams/StreamDelete';
import StreamEdit from './components/streams/StreamEdit';
import StreamCreate from './components/streams/StreamCreate';
import StreamShow from './components/streams/StreamShow';

function App() {
    return (
        <div className="container">
            <Router history={ history } >
                <Header />
                <Switch>
                    <Route path="/" exact component={ StreamList } />
                    <Route path="/streams/new" exact component={ StreamCreate } />
                    <Route path="/streams/delete/:id" exact component={ StreamDelete } />
                    <Route path="/streams/edit/:id" exact component={ StreamEdit } />
                    <Route path="/streams/:id" exact component={ StreamShow } />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
