import React, {Fragment} from "react";
import Axios from "axios";

class AxiosClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            baseURL: props.baseURL,
            api_key: props.api_key,
            data:{}
        }

    }

    fetchData = async (url, api_key,callBack) =>{
         try{
            const response = await Axios.get(url,{
                headers: {
                    'x-rapidapi-host': url,
					'api_key': api_key
                },
			    params: {}
            }) 
            callBack(response);
         }catch(err){
            console.error(err);
         }
    }

    componentDidMount(){      
       this.fetchData(this.state.baseURL, this.state.api_key, (responceData)=>{
            console.log(responceData.data);
            this.setState({data: responceData})  
        });               
    }

    render(){        
        return(
            <Fragment>
                <h1>Axios -- Class Component</h1>                
            </Fragment>
        )
    }

}

export default AxiosClass