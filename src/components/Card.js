import React from 'react';

const Card = (props) => {
    const { name, email, id } = props
    return(
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
        <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
    );
};

export default Card;

//cardㅇ,렇게만들면 계속 쓸수 있는거지 컴포넌트!!!


//const { name, email, id} = props로 하면 된다 props.name props. emial
//props.id 를 name, emial, id로 줄일수 있게 된ㄴ거지