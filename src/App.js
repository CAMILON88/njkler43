import React, { Component } from 'react';
import posts from './posts';



class App extends Component {
  constructor() {
    super()

    this.state = {
     
     busqueda: '',
     post: posts,
     

    }



  }




   textChange(event) {
  
  
    this.setState({
      busqueda: event.target.value,
     
      
  })

 

  }



  render() {
  


  
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" value={this.state.busqueda} onChange={this.textChange.bind(this)} />
        </div>
        <ul>
          
           {this.state.post.filter((contacto) => {return contacto.title.toLowerCase().indexOf(this.state.busqueda.toLowerCase()) != -1; }).map((list, index) => <li  key={index}>  <a href={list.url}><img src={list.image } /></a>  <p>{ list.title }</p> </li>)}
            
           
          
        </ul>
      </div>
    )
  }
}



export default App


