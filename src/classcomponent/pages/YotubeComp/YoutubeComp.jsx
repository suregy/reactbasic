import React, { Component } from 'react';

import YoutubeComp from '../../../functioncomponent/YoutubeComp/YoutubeComp';

class YoutubeCompPage extends Component {
  render() {
    return (
      <>
        <YoutubeComp
          time="6:30"
          title="Belajar React Bag 1"
          desc="Akan belajar instalasi"
        />
        <YoutubeComp
          time="7:10"
          title="Belajar React Bag 2"
          desc="Akan belajar inisiasi"
        />
        <YoutubeComp
          time="05:00"
          title="Belajar React Bag 3"
          desc="Akan belajar eksekusi"
        />
        <YoutubeComp />
      </>
    );
  }
}

export default YoutubeCompPage;
