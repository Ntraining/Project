import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state={
        location:'virginia',
        
        
        data:[],
        loading:'false'
      }
    }
  
  inputName=(e)=>{
      this.setState({location:e.target.value});
  }

  componentDidMount(){
      this.getData();
  }

   getData=()=> {
       this.setState({loading:true});
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=4e8fe55b900263c5f83603ed631e15ad`).then((d)=>{
          return d.json();
      }).then((d)=>{
          this.setState({data:d});
      }).catch(e=>console.log(e));
      this.setState({loading:false});
      console.log(this.state.data);
  }
render(){
  return(
      <div>
        <label>Enter Location</label>
          <input type="text" onChange={this.inputName} value={this.state.location}/>
        
          {this.loading && 'Loading...'}
          { JSON.stringify(this.state.data)}

      </div>
  )

  
}

}

export default App;
