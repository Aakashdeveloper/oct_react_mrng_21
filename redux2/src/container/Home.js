import React,{Component} from 'react';
import {connect} from 'react-redux';
import {latestNews} from '../action/actionFile';
import LatestDisplay from '../component/Home/LatestDisplay';

class Home extends Component {
    // call action 
    componentDidMount(){
        this.props.dispatch(latestNews())
    }

    render(){
        return(
            <div>
                <LatestDisplay ldata={this.props.datalist.latestnews}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        datalist:state.article
    }
}

export default connect(mapStateToProps)(Home)