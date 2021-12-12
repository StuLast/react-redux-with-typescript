import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <h1>Search NPM Packages</h1>
      </div>
      <hr />
      <div className='container'>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
