import React from 'react';
import {UserContext} from '../App'


function ComponentF() {
  return (
      <div>
          <UserContext.Consumer>
              {
                  username =>{
                      return <div> 
                          Component F Consumers {username} from App Component
                           </div>
                  }
              }
          </UserContext.Consumer>
      </div>
  )
  

}
  export default ComponentF;
