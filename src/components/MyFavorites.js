import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Favcomponent from './Favcomponent';
// import e from 'express';
import UpdateForm from './UpdateForm.js';

class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      FavoritChoclet:[],
      email:'',
      _id:'',
      showForm:false,
    }
  }
  
  async componentDidMount(){
    let {user}= this.props.auth0;
    if(user.email){
      let FavoriteChocoData= await axios.get(`${process.env.REACT_APP_SERVER}/getFavChoco?email=${user.email}`);
      this.setState({
        FavoritChoclet:FavoriteChocoData.data,
      })
    }

  }
  deleteChoco=async(id,email)=>{
console.log("heloo from dalet",id);
    let dataAfterDelete= await axios
    .delete(`${process.env.REACT_APP_SERVER}/deleteDataFromFav?id=${id}&email=${email}`);
    this.setState({
      FavoritChoclet:dataAfterDelete.data,
    })
  }
  showFormMethod=(email,id)=>{
if(this.state.showForm===false){
  this.setState({
    showForm:true,
    email:email,
    _id:id,
  })
}else{
  this.setState({
    showForm:false,
    email:'',
    _id:'',
  })
 
}
  }
  updataDtatOfChoco= async(e,id,email)=>{
    e.preventDefault();
    let newTitle = e.target.chocotitle.value;
    if(newTitle){
      let obj ={
        email:this.state.email,
        _id : this.state._id,
        title:newTitle,

      }
      let updataChoco = await axios.put(`${process.env.REACT_APP_SERVER}/updateDataOfChoco`,obj);
      this.setState({
        FavoritChoclet :updataChoco.data,
      })
    }
    

  }

  render() {
    return(
      <>
      <>
      {this.state.showForm &&(
        <UpdateForm
        updataDtatOfChoco={this.updataDtatOfChoco}/>
      )}
        {this.state.FavoritChoclet &&(
                  this.state.FavoritChoclet.map((e,key)=>{
                      return(
<Favcomponent  
deleteChoco={this.deleteChoco}
showFormMethod={this.showFormMethod}
key={key}
_id={e._id}
email={e.email}
imageUrl={e.imageUrl}title={e.title}addToMyFav={this.addToMyFav}/>
                      );
                  })
              )} 
             
      </>
    
       
    </>)
  }
}

export default withAuth0(MyFavorites);

