import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
   { title: 'No Scrubs', duration: '4.05' },
   { title: 'No Scrubsss', duration: '4.01' }
  ]	
}

const selectedSongReducer = (selectedSong = null, action) => {
	if(action.type === 'SONG_SELECTED'){
		return action.payload;
	}
	return selectedSong;
}

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
})