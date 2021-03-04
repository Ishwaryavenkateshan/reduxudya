import React from 'react';
import { connect } from 'react-redux';
import {userGetFetch} from '../redux/actions/login.actions';
import './login.styles.css';

class Logins extends React.Component {
   
  constructor(props) {
    super(props);
    
    this.state = {
      persons:[]
    };
  }

  renderTableData() {
    
    return this.props.get?.map((person) => {
        const { id} = person
               
        return (
            <tr key={id}>
               <td>{person.id}</td>
               <td>{person.name}</td>
               <td>{person.username}</td>
               <td>{person.email}</td>
            </tr>
            
         )
                //   <tr key={id}>
                //     <td>
                //       <p>{person.name}</p>
                //     </td>
                //     <td>
                //       {' '}
                //       <p>{person.email}</p>
                //     </td>
                //   </tr>
    
              
    })
}

            
  render() {

    console.log("login",this.props);
   
    return (
        <div>
            {/* <button
              onClick={() => {
                this.props.userGetFetch()
              }}
            >
             click me
            </button> */}

<button onClick={() => { this.props.userGetFetch()}}>
       Click Me!
      </button>
      
          <table id='tab'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>



        </div>
    );
  }
}

//AppContainer.js
const mapStateToProps = (state) => ({
  get: state.get,
});

const mapDispatchToProps = {
  userGetFetch,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Logins);

export default AppContainer;