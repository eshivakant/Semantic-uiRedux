import * as React from 'react';

import { AnyAction, Dispatch } from 'redux';

import { connect } from 'react-redux';

// Component

interface IQueryStateProps { }

interface IQueryDispatchProps { }

interface IQueryProps extends IQueryStateProps, IQueryDispatchProps { }

interface IQueryState { }



export class Query extends React.Component<IQueryProps, IQueryState> {
  public render() {
    return (
      <span>Body</span>
    );
  }
}

// Container

interface IQueryOwnProps { }

const mapStateToProps = (state: IGlobalState, ownProps: IQueryOwnProps): IQueryStateProps => {
  return {
    // ...mapStateToProps
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: IQueryOwnProps): IQueryDispatchProps => {
  return {
    // ...mapDispatchToProps
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Query);