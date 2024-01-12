import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends React.Component { //
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // when make your own method.. keep in mind
    // 요렇게 onSearchChange (event) { 였던거를 밑에잇는것처럼 바꿔라

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users =>{this.setState({robots:users})})
    } //그냥 흐르는건데 여기세 setState로 이걸 설정하면 constructor쪽 state를 설정한거지

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value}) //this.state.searchfield = 이렇게하면안됀다 반드시 this.setState()
    }

    render(){
        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length){
            return <h1>Loading</h1>
        } else {
        return(
        <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
    )
    }
}}

export default App;

/**
 * 자 정리하자면
 * we have app component that has two states(robots, searchfield)
 * state에서 값을 받고 props로 함수 실행한다
 * searchchange에서얻은정보로 cardlist와 소통하여
 * hey, i want to filter robots (this.state.robots)
 * 로봇이름을 tolowercase한 애랑 serachfield소문자로 한 애를 include하는지
 * 
 */