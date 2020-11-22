import { createContext, Component } from 'react'
import stockList from '../stocklist'
import axios from 'axios';


export const StockContext = createContext();

class StockContextProvider extends Component {
  // Fetching data from NSE API
  componentDidMount() {
    const stockdata = []
    stockList.forEach(onesymbol => {
      axios.get("http://localhost:5000/nse/get_quote_info?companyName="+onesymbol)
      .then(res => {
        const obj = {symbol: onesymbol, ...res.data.data[0]};
        stockdata.push(obj);
        this.setState({stockData: [...this.state.stockData, obj]});
      })
      .catch(err => {
        console.log(err)
      })
    })
    // setTimeout(() => {
    //   this.componentDidMount();
    //   console.log("API IS FETCHING DATA EVERY 4 SECOND...")
    // }, 4000);
  }
  // The States
  state = { 
    stockData: [
      
    ],
    portfolioData: [
      
    ]
  }
  // Functionalities to add or delete from portfolio
  addToPortfolio = (stockList) => {
    const stocklist = [...this.state.portfolioData, stockList];
    this.setState({portfolioData: stocklist});  
  }
  deleteFromPortfolio = (stock) => {
    // 
  }
  render() { 
    return (
      <StockContext.Provider value={{...this.state, addToPortfolio: this.addToPortfolio, deleteFromPortfolio: this.deleteFromPortfolio}}>
        {this.props.children}
      </StockContext.Provider>
    );
  }
}
 
export default StockContextProvider;