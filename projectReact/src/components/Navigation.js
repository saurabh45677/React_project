import {Link} from 'react-router-dom';
const navigation = () => {
  const cartstyle={
  background:'#F59E0D',
  display:'flex',
  padding:'6px 12px',
  borderRadius:'50px'

  }
  
    
  return (

    <>
    
     <nav className="container mx auto flex items-center justify-between py-4 ml-16">
   
        <Link to="/">
            <img style={{height:50}} src="/images/logo.png" alt="logo" />
        </Link>
      <ul className="flex items-center">
        <li ><Link to="/">Home</Link></li>
        <li className="ml-6"><Link to="/products">Products</Link></li>
        <li className="ml-6">
        <Link to="/cart">

          <div style={cartstyle}>
            <span>10</span>
            <img className="ml-2" src="/images/cart.png"  alt="cartsec"></img>
          </div>
        </Link>
        </li>
      </ul>

     </nav>

    </>

  )
}

export default navigation