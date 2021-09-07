import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import ChocoComponent from './ChocoComponent';


class AllDataAPI extends Component {
    constructor(props) {
        super(props);
        this.state={
            allDataApi:[],
        }
    }

    async componentDidMount(){
        let dataApi = await axios.get(`${process.env.REACT_APP_SERVER}/getallData`);
        this.setState({
            allDataApi:dataApi.data,
        })
    }
    addToMyFav= async(imageUrl,title)=>{
        let {user}=this.props.auth0;
        if (user.email){
            let obj={
             email:user.email,
             imageUrl:imageUrl,
             title:title,

            }
            await axios.post(`${process.env.REACT_APP_SERVER}/addDataToFav`,obj);
            
        }
        

    }
   
    render() {
        return (
            <div>
              {this.state.allDataApi &&(
                  this.state.allDataApi.map((e,key)=>{
                      return(
<ChocoComponent  
key={key}
imageUrl={e.imageUrl}title={e.title}addToMyFav={this.addToMyFav}/>
                      );
                  })
              )}  
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
