// 使用的地方
import React, { Component } from 'react';
import LazyLoad from './LazyLoad.jsx'

const LazyLoadWrapper = (loadFunc) => {
  return (props) => (
    <LazyLoad load={loadFunc}>
      {(Com) => <Com {...props} />}
    </LazyLoad>
  )
}

class Xxx extends Component {
  render() {
    return (
      <div>
        {LazyLoadWrapper(()=> import('asdfg'))}
      </div>
    );
  }
}

export default Xxx;
