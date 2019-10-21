import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks : [] //id, name, status
    }
  }

  //Khi truy cap toi, ham duoi se duoc tu dong goi va chi goi 1 lan
  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : tasks 
      })
    }
  }

  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID(){
    return this.s4() + this.s4() + '-' + this.s4();
  }
  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: 'Hoc lap trinh',
        status: true       
      },
      {
        id: this.generateID(),
        name: 'Hoc lap trinh 02',
        status: false       
      },
      {
        id: this.generateID(),
        name: 'Hoc lap trinh 03',
        status: true       
      }
    ];
    this.setState({
      tasks : tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  render() {
    var {tasks} = this.state; //var tasks = this.state.tasks 
    return (
      <div className="container">
        <h1>Quản Lý Công Việc</h1>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/*Form */}
            <TaskForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            <button type="button" className="btn btn-success ml-5" onClick={this.onGenerateData}>
              Generate Data
            </button>
            {/* Search - Sort */}
            <Control />
            {/** List */}
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks = { tasks }/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;