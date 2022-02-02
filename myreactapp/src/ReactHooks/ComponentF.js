import React from 'react';
import {UserContext} from '../App'
import {CityContext} from '../App'

 function ComponentF() {
     console.log('Component F')
  return (
      <div>
          {/* <UserContext.Consumer>
              {
                  username =>{
                        return(
                            <CityContext.Consumer>
                                {
                                    cityname =>{
                                        return(
                                            <div> Component F Consume {username} from {cityname} </div>
                                        )
                                    }}
                            </CityContext.Consumer>
                        ) 
                  }
              }
          </UserContext.Consumer> */} 
      </div>
  )

 }
export default ComponentF
