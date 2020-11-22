import 'bootstrap/dist/css/bootstrap.min.css';
import {StockContext} from '../contexts/stockContext'
import {PartialStockContext} from '../contexts/partialStock'
import BootstrapTable from 'react-bootstrap-table-next';
import { Type } from 'react-bootstrap-table2-editor';
import Foot from './foot'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

function Portfolio(props) {

  return(
    <PartialStockContext.Consumer>{(PartialContext) => (
      <StockContext.Consumer>{(AllStockContext) => {

        const { SearchBar } = Search;
        // Functions
        const columns = [{
          dataField: 'symbol',
          text: <span>Instrument<i class="fas fa-sort" style={{"float":"right", "marginTop":"2%"}}></i></span>,
          sort: true
        }, {
          dataField: 'companyName',
          text: <span>Company Name<i class="fas fa-sort" style={{"float":"right", "marginTop":"2%"}}></i></span>,
          sort: true,
        }, 
        {
          dataField: 'averagePrice',
          text: 'Average Cost'
        },
        {
          dataField: 'type',
          text: <span>Order Type</span>,
          editor: {
            type: Type.SELECT,
            options: [{
              value: 'SELL',
              label: 'SELL'
            }, {
              value: 'BUY',
              label: 'BUY'
            },
          ]
          },
        },
        {
          dataField: 'lastPrice',
          text: <span>Current Value<i class="fas fa-sort" style={{"float":"right", "marginTop":"2%"}}></i></span>,
          sort: true,
        },
        {
          dataField: 'pnl',
          text: 'Profit & Loss',
          sort: true
        },
        {
          dataField: 'netchg',
          text: 'Net Change'
        },
        
        ];
        const products = [...PartialContext.partialstock]
        products.forEach(item => {
          // Profit and Loss in amout
          let profitloss = (parseFloat(parseFloat(item.lastPrice.replace(/,/g, '')) - item.averagePrice.replace(/,/g, ''))).toFixed(2); 
          const fin = profitloss > 0 ? <span style={{color: "green"}}>₹ {profitloss}</span> : <span style={{color: "red"}}>₹ {profitloss}</span>
          item['pnl'] = fin;

          // Net Change in Percentage
          profitloss = (profitloss*100/parseFloat(item.averagePrice.replace(/,/g, ''))).toFixed(2);
          const net = profitloss > 0 ? <span style={{color: "green"}}>{profitloss} %</span> : <span style={{color: "red"}}>{profitloss} %</span>
          item['netchg'] = net;
        })
        // Return JSX
        return (
          <div>
            <div className="container-fluid" style={{"marginBottom": "30px"}}>
            <div  align="center">
                <h1 className="mt-4" style={{fontFamily: "Arial, Helvetica, sans-serif", fontWeight:"bold"}}>
                Manage Your Portfolio</h1>
                <span style={{fontSize:18, color:"grey"}} className="mt-3">-Having different types of stocks in your portfolio can enhance returns <br/><span style={{width: "70%",float: "right"}}>~ KENNETH FISHER</span></span>
                
              </div>
            </div>
            <div style={{"margin": "0px 50px 100px 50px", }}>
              <ToolkitProvider
                keyField="id"
                data={ products }
                columns={ columns }
                search
              >
                {
                  props => (
                    <div>
                      <SearchBar { ...props.searchProps } />
                      <hr />
                      <BootstrapTable
                        striped
                        { ...props.baseProps }
                      />
                    </div>
                  )
                }
              </ToolkitProvider>
            </div>
            {/* Footer */}
            <Foot/>
          </div>
        )
      }}
      </StockContext.Consumer>
     )}
    </PartialStockContext.Consumer>
  )
}

export default Portfolio;
