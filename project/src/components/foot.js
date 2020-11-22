const Foot = () => {
  return(
    <footer className="page-footer font-small stylish-color-dark pt-4 mt-5" style={{"backgroundColor":"#3E4551", "color": "white"}}>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Deca-Trading Platform</h5>
            <p>Our Platform Provide you with best user experience for creating your Demat account and managing your portfolio. 
              Simple select some stock from the given Nifty-50 list and add them to your portfolio
            </p>

          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-2 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Get to Know Us</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" style={{"textDecoration":"none", "color":"white"}}>About Us</a>
              </li>
              <li>
                <a href="#!" style={{"textDecoration":"none", "color":"white"}}>Careers</a>
              </li>
              <li>
                <a href="#!" style={{"textDecoration":"none", "color":"white"}}>Press Release</a>
              </li>
              <li>
                <a href="#!" style={{"textDecoration":"none", "color":"white"}}>Gift a Stock</a>
              </li>
            </ul>

          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-2 mx-auto">

            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Policy</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" style={{"textDecoration":"none", "color":"white"}}>Terms of Use</a>
              </li>
              <li>
                <a href="#!" style={{"textDecoration":"none", "color":"white"}}>Privacy</a>
              </li>
              <li>
                <a href="#!" style={{"textDecoration":"none", "color":"white"}}>Sitemap</a>
              </li>
            </ul>

          </div>
          

          <div className="col-md-2 mx-auto">

            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Help</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" style={{"textDecoration":"none", "color":"white"}}>FAQ</a>
              </li>
              <li>
                <a href="#!" style={{"textDecoration":"none", "color":"white"}}>Contact Us</a>
              </li>
              <li>
                <a href="#!" style={{"textDecoration":"none", "color":"white"}}>Report Someone</a>
              </li>
              <li>
                <a href="#!" style={{"textDecoration":"none", "color":"white"}}>Call support</a>
              </li>
            </ul>

          </div>

        </div>

      </div>
        <hr />
      <ul className="list-unstyled list-inline text-center py-2">
        <li className="list-inline-item">
          <h5 className="mb-1">Register for free</h5>
        </li>
        <li className="list-inline-item">
          <a href="#!" className="btn btn-danger btn-rounded">Sign up!</a>
        </li>
      </ul>
      <hr />
      <ul className="list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <a href="#page-footer">
            <i className="fab fa-facebook-f" style={{
              "padding": "20px",
              "fontSize": "18px",
              "width": "60px",
              "textAlign": "center",
              "textDecoration": "none",
              "margin": "5px 2px",
              "background": "#3B5998",
              "color": "white",
              "borderRadius" : "50%"
            }}> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#!" className="btn-floating btn-tw mx-1">
            <i className="fab fa-twitter" style={{
              "padding": "20px",
              "fontSize": "18px",
              "width": "60px",
              "textAlign": "center",
              "textDecoration": "none",
              "margin": "5px 2px",
              "background": "#55ACEE",
              "color": "white",
              "borderRadius" : "50%",
            }}> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#!" className="btn-floating btn-gplus mx-1">
            <i className="fab fa-google-plus-g" style={{
              "padding": "20px",
              "fontSize": "18px",
              "width": "60px",
              "textAlign": "center",
              "textDecoration": "none",
              "margin": "5px 2px",
              "background": "#dd4b39",
              "borderRadius" : "50%",
              "color": "white",
            }}> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#!" className="btn-floating btn-li mx-1">
            <i className="fab fa-linkedin-in" style={{
              "padding": "20px",
              "fontSize": "18px",
              "width": "60px",
              "textAlign": "center",
              "textDecoration": "none",
              "margin": "5px 2px",
              "background": "#007bb5",
              "color": "white",
              "borderRadius" : "50%"
            }}> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#!" className="btn-floating btn-dribbble mx-1">
            <i className="fab fa-dribbble" style={{
              "padding": "20px",
              "fontSize": "18px",
              "width": "60px",
              "textAlign": "center",
              "textDecoration": "none",
              "margin": "5px 2px",
              "background": "#ea4c89",
              "color": "white",
              "borderRadius": "50%"
            }}> </i>
          </a>
        </li>
      </ul>
      <div className="footer-copyright text-center py-3" style={{"backgroundColor": "#323741"}}>© 2020 Copyright:
        <a href="#!"> DecaTrading.com</a>
      </div>
    </footer>
  )
}

export default Foot;