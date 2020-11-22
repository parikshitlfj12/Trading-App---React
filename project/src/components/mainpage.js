import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col, Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {StockContext} from '../contexts/stockContext'
import {PartialStockContext} from '../contexts/partialStock'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import Foot from './foot'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:"#F0F0F0"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));


function Mainpage(props) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  let addedToFinalPortfolio = false;
  return(
    <PartialStockContext.Consumer>{(PartialContext) => (
      <StockContext.Consumer>{(AllStockContext) => {
        
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
          text: <span>Order Type <small>(Tap To Change)</small></span>,
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
          dataField: 'deletestock',
          text: 'Delete Stock',
          align:"center",
          editable: false
        },
        
        ];
        const products = [...PartialContext.partialstock];

        const handleBuy = (stocktoadd) => {
          stocktoadd['key'] = stocktoadd.symbol
          stocktoadd['type'] = "BUY"
          if(PartialContext.partialstock.length < 10){
            PartialContext.addToPartial(stocktoadd);
          }

        }
        const handleSell = (stocktoadd) => {
          stocktoadd['key'] = stocktoadd.symbol
          stocktoadd['type'] = "SELL"
          if(PartialContext.partialstock.length < 10){
            PartialContext.addToPartial(stocktoadd);
          }
        }

        const deletefrompartial = (item) => {
          PartialContext.deleteFromPartial(item);
        }
        products.forEach(item => {
          item['deletestock'] = <div><i style={{"color": "red"}} onClick={() => deletefrompartial(item)} class="fa fa-remove"></i></div>;
        })
        
        // const addToMainPortfolio = () => {
        //   console.log("CLICKED ADD TO MAIN PORTAFOLIO")
        //   AllStockContext.addToPortfolio(...PartialContext.partialstock);
        //   addedToFinalPortfolio=true;
        // }

        setTimeout(() => {
          if(addedToFinalPortfolio){
            handleShow();
          }
        }, 2000);
        const PartialPortIsEmpty = PartialContext.partialstock.length;
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);




        // Return JSX
        return (
          <div>
            <div className="container-fluid" style={{"marginBottom": "100px"}}>
              <div  align="center">
                <h1 className="mt-4" style={{fontFamily: "Arial, Helvetica, sans-serif", fontWeight:"bold"}}>
                Nifty-50 index -  Stock List </h1>
                <span style={{fontSize:18, color:"grey"}} className="mt-3">- Click on the Buy/Sell button to add to your portfolio</span>
                
              </div>
                <Row>
                  <Col xs={5} md={5} lg={5} sm={5} style={{padding: 0, marginLeft: 20, marginTop:48,height:650 , overflowY: "scroll"}} >
                    {AllStockContext.stockData.map(item => {
                      let percentage = item.pChange > 0 ?
                        <span variant="success"> <i className="fa fa-arrow-circle-up" style={{color:"green", fontSize:15}}></i>&nbsp;&nbsp;
                          {item.pChange}%
                        </span> 
                        : 
                        <span variant="danger"> <i className="fa fa-arrow-circle-down" style={{color:"red", fontSize:15}}></i>&nbsp;&nbsp;
                          {item.pChange}%
                        </span>
                      return(
                        <div className="Stock-table container-fluid" style={{ maxHeight:50, marginBottom:"80px", width:630, padding:0}}>
                          <Card className={classes.root}>
                          <Container>
                              <Row>
                              <Col>
                                <div className={classes.details}>
                                  <CardContent className={classes.content}>
                                    <Typography component="h4" variant="h6">
                                      {item.symbol}
                                    </Typography>
                                    <Typography variant="5" color="textSecondary">
                                      {item.companyName} 
                                    </Typography><br />
                                    <Typography variant="subtitle5" color="textSecondary">
                                    ₹{item.lastPrice}&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
                                    {percentage}
                                  </Typography>
                                  </CardContent>
                                </div>
                              </Col>
                              <Col>
                                <div style={{float:"right"}}>
                                  <div style={{paddingRight:"6vh", paddingTop:"3.2vh"}}>
                                    <ArrowDropUpIcon fontSize="large" style={{ color: "green", fontSize: 60 }}/>
                                    <Button onClick={() => handleBuy(item)} variant="success">Buy</Button>
                                    <ArrowDropDownIcon fontSize="large" style={{ color: "red", fontSize: 60 }}/>
                                    <Button onClick={() => handleSell(item)} variant="danger">Sell</Button>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                          </Card>
                          <hr/>
                        </div>
                      )
                    })}
                  </Col>

                  {/* Portfolio */}
                  <Col className="mt-5 mr-5">
                    <BootstrapTable 
                      striped 
                      keyField='key' 
                      data={ products } 
                      columns={ columns }  
                      cellEdit={ cellEditFactory({
                        mode: 'click',
                        blurToSave: true
                      }) }
                    ></BootstrapTable>
                    {PartialPortIsEmpty ? 
                    <Button style={{"float": "right"}}><Link to="/portfolio" style={{color:"white"}}>Go-To My-Portfolio</Link></Button>
                    : 
                    <div class="alert alert-danger" align="center" style={{fontSize: "20px"}}>
                      <i class='far fa-frown-open' style={{fontSize: "25px"}}></i>&nbsp; Sorry,  no Selections...
                    </div>}
                    {addedToFinalPortfolio ? 
                    <div>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Added Successfully</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, Stocks Added <h5>GO TO PORTFOLIO SECTION !!!</h5></Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                    :
                    <></>
                    } 
                    {(PartialContext.partialstock.length === 10) ? <span><div class="alert alert-danger" role="alert">
                        You've Exceeded the Limit of  &nbsp;&nbsp;<h5 style={{display: "inline"}}>10 Stocks...</h5> To add more, Purchase the <h5 style={{display: "inline"}}>Premium Version</h5>
                      </div></span>
                      :
                      <></>}
                  </Col>
                </Row>
              
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

export default Mainpage;
