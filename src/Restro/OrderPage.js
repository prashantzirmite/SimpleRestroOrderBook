import React, { Component } from 'react'
import {connect} from "react-redux"

class OrderPage extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
      }
 
      adder=(e)=>{
        //   alert(`added ${e.target.name} count ${this.props.counts}`)
          switch (e.target.name)
          {
              case "Burger":
                   return this.props.dispatch({
                      type:"ADD_BURGER"}  );
              case "Pizza":
                   return this.props.dispatch({
                           type:"ADD_PIZZA"}  );
               default:
                      return 0;
          }
    }
      remover=(e)=>{
        //   alert(`removed ${e.target.name}`)
          switch (e.target.name)
          {
              case "Burger":
                   return this.props.dispatch({
                      type:"REMOVE_BURGER"}  );
              case "Pizza":
                   return this.props.dispatch({
                           type:"REMOVE_PIZZA"}  );
               default:
                      return 0;
          }
        }
    
    render() {
     
        const count=this.props.counts;
        // console.log(count)
        return (
            <div>
                <h1 style={{textAlign:"center"}}>Wel-Come</h1>
                <div className="boxHorizontal" style={{size:"60vh"}}> 
                            <div className="boxVertical"> <span>{count.burger}</span>
                            <div className="inline-flex">
                                <input className="btn btn-success" type="button" value="+" onClick={this.adder} name="Burger"/>
                                <span style={{padding:"0px 10px"}}>Burger</span>
                                <input className="btn btn-danger" type="button" value="-" onClick={this.remover}name="Burger"/>
                            </div>
                            </div>
                            <div className="boxVertical"> <span>{count.pizza}</span>
                            <div className="inline-flex">
                                <input className="btn btn-success" type="button" value="+" onClick={this.adder} name="Pizza"/>
                                <span style={{padding:"0px 10px"}}>Pizza</span>
                                <input className="btn btn-danger" type="button" value="-" onClick={this.remover}name="Pizza"/>
                            </div>
                            </div>
                
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // ...state,
      counts: state
    };
 };
//  const mapDispatchToProps = (dispatch) => ({
//    dispatch
//  });
 
export default connect(mapStateToProps)(OrderPage);
