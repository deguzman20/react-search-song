import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
	renderList(){
    return this.props.songs.map( (song) => {
      	return(
 		 <React.Fragment>
      	   <div className="item" key={song.title}>
             <button onClick={() => this.props.selectSong(song)}>Select</button>
      	   </div>
      	   <div className="content">
      	    {song.title}
      	   </div>
      	 </React.Fragment>
      	)
      })
	}

	render(){
	 return <div>{this.renderList()}</div>
	}
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
  	songs: state.songs
  }
}


// const mapDispatchToProps = (dispatch) => {
//   return {
//   	selectSong: (song) => { dispatch({ type: 'SONG_SELECTED', payload: song })}
//   }
// }

export default connect(
mapStateToProps,
{ selectSong })
(SongList);