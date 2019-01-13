import React from 'react';

export const useConsumer = Consumer => mapContextToProps => WrappedComponent => (props) => (
  <Consumer>
    {
      (context) => (
        <WrappedComponent
          {...mapContextToProps(context)}
          {...props}
        />
      )
    }
  </Consumer>
);

