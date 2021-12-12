import React, { useState, useEffect, useRef } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const searchInput = useRef<HTMLInputElement | null>(null);
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector((state) => state.repositories);

  useEffect(() => {
    if (!searchInput.current) {
      return;
    }
    searchInput.current.focus();
  }, []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);

    if (!searchInput.current) {
      return;
    }
    searchInput.current.focus();
    setTerm('');
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='input-group'>
          <input
            className='form-control border border-primary'
            ref={searchInput}
            value={term}
            placeholder='search term'
            type='text'
            onChange={onInputChange}
          />
          <button className='btn btn-outline-primary'>Search</button>
        </div>
      </form>
      <hr />
      <div>
        {loading && (
          <div>
            {' '}
            <h3>Getting data ... </h3>
          </div>
        )}
        {error && (
          <div>
            <h3> Unable to get data. Please try again </h3>
            <div>{error}</div>
          </div>
        )}
        {data.length > 0 && !error && !loading && (
          <h3> Here are your results...</h3>
        )}
        {data && data.map((repo) => <div key={repo}>{repo}</div>)}
      </div>
    </div>
  );
};

export default RepositoriesList;
