import * as React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { SET_USERS, GET_USERS } from './actions';

class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="container" >
        {(this.props.users || []).map(user => {
          return (
            <div className="row">
              <div className="col-6" >
                {user.name}
              </div>
              <div className="col-6">
                <a href={user.email}> {user.email}</a>
              </div>
            </div>
          )
        })}
      </div >
    )
  }
}

const mapStateTopProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers:() => {
      dispatch({type: GET_USERS});
    }
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Users);
