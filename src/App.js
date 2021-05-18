import './App.css';
// import Layout from './OrderBook/Layout';
import OrderPage from './Restro/OrderPage';
import AllPost from './CURD/AllPost';
import PostForm from './CURD/PostForm';
import BillPage from './Restro/BillPage';
// import {connect} from 'react-redux';
function App() {
  return (
    <div className="App">
    {/* // <h1>Hello</h1>
    // <Layout/>*/}
    <OrderPage/>
    <BillPage/>
      {/* <PostForm/> */}
      {/* <AllPost/> */}
    </div>
  );
}

export default App;
