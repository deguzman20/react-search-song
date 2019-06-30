import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';


const App = () => {
	return(
      <React.Fragment>
      	<SongList />
      	<SongDetail />
      </React.Fragment> 
	);
};

export default App;