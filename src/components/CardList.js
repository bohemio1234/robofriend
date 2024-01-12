import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
    //if(true){
        //throw new Error("Siballlllll") //이건 그냥 에러를 소환하는거임
    //}
    return (
        <div>
            {
           robots.map((user, i) => {
        return( <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}/>
        )})}
      </div>
    )
}

export default CardList;