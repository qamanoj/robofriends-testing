import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './MainPage.css';
import Header from '../components/Header';



class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }

  filterRobots = () => {
    return this.props.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }

  render() {
    const { onSearchChange, robots, isPending } = this.props;
    return (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            { isPending ? <h1>Loading</h1> :
            <CardList robots={this.filterRobots(robots)} />
            }
          </Scroll>
        </div>
      );
    }
  }


export default MainPage;
