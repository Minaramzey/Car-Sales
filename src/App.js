import React from 'react';
import { connect } from 'react-redux';


import { addFeature, removeFeature } from './reducers/actions'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AddedFeatures';
import Total from './components/Total';

const App = (props) => {
  console.log("pkjhgopkdfnhgd",props)


  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  
  };

  return (
    <div className="boxes">
      <div className="box">
      <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
      <AdditionalFeatures store={props.store} addFeature={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features,
    car: state.car.features,
    store: state.store,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App);