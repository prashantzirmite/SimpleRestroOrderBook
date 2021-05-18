import React, { Component } from 'react'
import { connect } from 'react-redux';

class BillPage extends Component {
    render() {
        const{items}=this.props;
        // var n=items.length();
        // console.log(n)
        var n=1;
        console.log(items)
        return (
            <div className="boxHorizontal">
                <table className="table table-striped" style={{width:"90vh",margin:"20px",textAlign:"left"}}>
                    <thead>
                        <tr>
                            <th>Sr. No. </th><th>Menu Item</th><th>Rate</th><th>Quantity</th><th>Bill</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr><td>1</td><td>Burger</td><td>89</td><td>{items.burger}</td><td>{items.burger*89}</td></tr>
                            <tr><td>2</td><td>Pizza</td><td>119</td><td>{items.pizza}</td><td>{items.pizza*119}</td></tr>
                            <tr><th colSpan="3">Total</th><th>{items.burger+items.pizza}</th><th>{items.burger*89+items.pizza*119}</th></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // ...state,
      items: state
    };
 };
export default connect(mapStateToProps) (BillPage)
