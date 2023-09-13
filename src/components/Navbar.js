import { Link , useNavigate , useLocation } from 'react-router-dom'
export default function Navbar({handleMode,mode}){
  const navigate = useNavigate();
  const location = useLocation();
  // useHistory is replace by useNavigate in v6.
  const handleSearch = (e) =>{
    e.preventDefault()
    let value =  document.getElementById('search').value;
    let arr=['business','entertainment','health','science','technology','sports']
    value=value.toLowerCase().trim();
    if(arr.includes(value)){
        navigate(`/${value}`)
    }
    else{
       navigate('/')
    }
  
      

  } 
 
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme={mode==='light'?'light':'dark'} style={{zIndex:20}}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bolder" to="/">
            JetSetJournal.com
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/'?'active':'inactive'}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
            
              <li className='nav-item'><Link to='/business' className={`nav-link ${location.pathname==='/business'?'active':'inactive'} text-capitalize`} >business</Link></li>
              <li className='nav-item'><Link to='/entertainment' className={`nav-link ${location.pathname==='/entertainment'?'active':'inactive'} text-capitalize`} >entertainment</Link></li>
              <li className='nav-item'><Link to='/health' className={`nav-link ${location.pathname==='/health'?'active':'inactive'} text-capitalize`} >health</Link></li>
              <li className='nav-item'><Link to='/science' className={`nav-link ${location.pathname==='/science'?'active':'inactive'} text-capitalize`} >science</Link></li>
              <li className='nav-item'><Link to='/sports' className={`nav-link ${location.pathname==='/sports'?'active':'inactive'} text-capitalize`} >sports</Link></li>
              <li className='nav-item'><Link to='/technology' className={`nav-link ${location.pathname==='/technology'?'active':'inactive'} text-capitalize`} >technology</Link></li>
              
           
            </ul>

  
            <form className="d-flex me-2" role="search" onSubmit={handleSearch} autoComplete='on'>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id='search'
                name="search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>  
            <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={handleMode} />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{color:mode==='light'?'black':'#fff'}}>{mode==='light'?'Enable':'Disable'} dark mode</label>
</div>
          </div>
        </div>
      </nav>
    )
  }
