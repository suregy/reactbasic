import React, { Component } from 'react';
import './LifeCycleComp.css';
import { connect } from 'react-redux';

class LifeCycleComp extends Component {
  constructor(props) {
    super();

    this.state = {
      count: 1,
    };
    console.log('constructor');
  }

  static getDerivedFromProps(porps, state) {
    console.log('getDerivedFromProps');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
    // setTimeout(() => {
    //     this.setState({
    //         count: 2
    //     })
    // }, 5000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group('shouldComponentUpdate');
    console.log('nexProps', 'nextProps');
    console.log('nextState', nextState);
    console.log('this state', this.state);
    console.groupEnd('');
    //kondisi jika state ingin dibatasi agar component tidak di update
    if (nextState.count >= 4) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  onChangeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log('render');
    return (
      <>
        <p>Component Button</p>
        <button className="btn" onClick={this.onChangeCount}>
          Component Button {this.state.count}
        </button>
        <p>totalOder: {this.props.order}</p>
      </>
    );
  }
}

const mapsStateToProps = state => {
  return {
    order: state.totalOrder,
  };
};

export default connect(mapsStateToProps)(LifeCycleComp);
