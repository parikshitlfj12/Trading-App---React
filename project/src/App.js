import Mainpage from './components/mainpage';
import Portfolio from './components/portfolio'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Navbar, Nav, FormControl, Form} from 'react-bootstrap'
import StockContextProvider from './contexts/stockContext'
import PartialStockContextProvider from './contexts/partialStock'

function App() {


  return(
    <div>
      <PartialStockContextProvider>
        <StockContextProvider>
        <Router>
          {/* #4CA1AF  #C4E0E5*/}
        <div style={{background: "linear-gradient(to top right, #cfd9df 0%, #E8E8E8 100%)"}}>
          <div className="aboveheader" align="center" style={{"backgroundColor": "#bfbfbf"}}>
          <i class='fas fa-chess-queen'></i> &nbsp;Flat 40% off <small>on subscribing Premium Membership </small> View Benefits...
          </div>
          <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand><Link to="/" style={{color:"white", textDecoration:"none"}}>Deca-Trading</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link><Link to="/" style={{color:"white"}}>Home</Link></Nav.Link>
                <Nav.Link><Link to="/portfolio" style={{color:"white"}}>My-Portfolio</Link></Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              </Form>
            </Navbar.Collapse>
          </Navbar>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/portfolio">
              <Portfolio/>
            </Route>
            <Route path="/">
              <Mainpage/>
            </Route>
          </Switch>
        </div>
      </Router>
      </StockContextProvider>
    </PartialStockContextProvider>
    </div>
    
  )
}

export default App;
