import React from 'react';
import css from './App.module.scss';

import Tag from './components/tag/Tag';

function App() {
  return (
    <div className={css.container}>
      <Tag placeholder='Type something...' />
    </div>
  );
}

export default App;
