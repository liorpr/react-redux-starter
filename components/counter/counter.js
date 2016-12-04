
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../../actions/counter';

import './counter.scss';

const Counter = ( { value, onInc, onDec } ) => {
  return <div className="counter">

    <h1> { value } </h1>

    <button onClick={ onInc }> + </button>
    <button onClick={ onDec }> - </button>

  </div>;
};

const mapStateToProps = state => {
  return { value : state.counter };
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onInc : () => dispatch( increment() ),
    onDec : () => dispatch( decrement() )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Counter );
