import react, { createContext, Component } from 'react'

export const PartialStockContext = createContext();

class PartialStockContextProvider extends Component {
  state = { 
    partialstock: []
  }

  addToPartial = (stock, type) => {
    const stockList = [...this.state.partialstock, stock]
    this.setState({partialstock: stockList});
  }

  deleteFromPartial = (stock) => {
    let stocks = this.state.partialstock.filter(item => {
      return item.symbol !== stock.symbol;
    })
    this.setState({
      partialstock: stocks
    })
  }
  render() { 
    return ( 
      <PartialStockContext.Provider value={{...this.state, addToPartial:this.addToPartial, deleteFromPartial:this.deleteFromPartial}}>
        {this.props.children}
      </PartialStockContext.Provider>
     );
  }
}
 
export default PartialStockContextProvider;