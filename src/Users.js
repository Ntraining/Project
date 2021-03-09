// import React from 'react';


// class Users extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//           username:'Ntraining',
//           data:[],
//           loading:'false',
//           location:'virginia'
//         }
//       }
    
//     inputName=(e)=>{
//         this.setState({username:e.target.value});
//     }

//     async componentDidMount(){
        
        
//         // let s=this.getData(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=4e8fe55b900263c5f83603ed631e15ad`);

//         // this.setState({data:s});

//          await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=4e8fe55b900263c5f83603ed631e15ad`).then((d)=>{
            
//             return d.json();
        
    
//         }).then((d)=>{
//             this.setState({data:d}); 
//             console.log(this.state.data);
    
//         // this.setState({data:p});
          
//         }).catch(e=>console.log(e));

//     }

//       getUser=()=>{

//     this.getData(`https://api.github.com/users/${this.state.username}`);
//     }
//    getData= async (url)=>{

//         //  this.setState({loading:true});
        
//       let result= await fetch(url).then((d)=>{
            
//             return d.json();
        
    
//         }).then((d)=>{
//          return d;
//     // this.setState({data:d});
          
//         }).catch(e=>console.log(e));
//         console.log(result);
//        return result;
//     }
// render(){
//     return(
//         <div>
//             <input type="text" onChange={this.inputName} value={this.state.username}/>
//             <button onClick={ this.getUser}>Get UserDetails</button>
//             {this.loading && 'Loading...'}
            
//             {JSON.stringify(this.state.data)}
//             <table>
//                 <tr>
//                 <th>loaction</th>
//                 <th>Weather</th>
//                 </tr>
//                 {this.state.data.length >0 && this.state.data.map(r =>{
//                     return (
//                         <tr>
//                             <td>{r.location}</td>
//                             <td>{r.weather}</td>
    
//                         </tr>
//                     )
//                 })}
//             </table>

//         </div>
//     )

    
// }

// }
// export default Users;

import React from 'react';

class Users extends React.Component{
    constructor(props){
        super(props);
        this.state= {
          weatherData:'',
          userData: '',
          name: 'Ntraining',
        }
      }
    
    inputName=(e)=>{
         this.setState({name:e.target.value});
    }
    

    async componentDidMount(){
        let user= await this.serviceCall(`https://api.github.com/users/${this.state.name}`);
        this.setState({userData:user});
        console.log(user);
          let data = await this.serviceCall(`https://api.openweathermap.org/data/2.5/weather?q=${user.location}&appid=4e8fe55b900263c5f83603ed631e15ad`);       
          this.setState({weatherData:data}); 
    
        // this.setState({data:p});

    }

    getUser=async()=>{

       let s = await this.serviceCall(`https://api.github.com/users/${this.state.name}`);
        this.setState({userData: s})
        
    }
    
       
    serviceCall=(url)=>{
      let res= fetch(url).then((d)=>{
            
        return d.json();
    

    }).then((d)=>{
        return d;
    }).catch(e=>console.log(e));
    return res;
}

render(){
     
    return(
        <div>
            <input type="text" onChange={this.inputName} value={this.state.name}/>
            <button onClick={this.getUser}>Get UserDetails</button>
            {this.loading && 'Loading...'}
            
            {JSON.stringify(this.state.weatherData)}

            {JSON.stringify(this.state.userData)}

        </div>
    ) 
            }
            }
       
        export default Users;