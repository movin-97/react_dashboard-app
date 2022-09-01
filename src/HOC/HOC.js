import React, { Component } from 'react';
import axios from 'axios';
const HOC = (OrginalComponent,path) => {
  return class extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            search:'',
        }
    }
    componentDidMount(){
       let fatchAllData = async() => {
            await axios.get(`https://jsonplaceholder.typicode.com/${path}`).then((res)=>{
                this.setState({...this.state.data,data:res.data})
            }).catch((err)=>console.log(err))
       }
       fatchAllData();
    }
    
    render(){
        let {search,data} = this.state;
        let filterUserData = data.filter((item)=>{
            if(path === "users"){
                const {name} = item;
                return name.indexOf(search) >= 0
            }
            if(path === "todos"){
                const {title} = item;
                return title.indexOf(search) >= 0
            }
            if(path === "posts"){
                const {title} = item;
                return title.indexOf(search) >= 0
            }
        })
        return (
            <div className="">
                <h1>{path}</h1>
                <div className="col-6 mt-3 mb-3">
                    <input 
                    type="text" 
                    className='form-control' 
                    value={this.state.search} 
                    onChange={(e)=>this.setState({...this.state,search:e.target.value})}
                    />
                </div>
                <OrginalComponent data={filterUserData}></OrginalComponent>
            </div>
        )
    }
  }
}

export default HOC