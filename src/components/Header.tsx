import { Link, useLocation} from "wouter";
import Logo from '../assets/images/logo.png';

const Header = () => {
  const [location] = useLocation();

  return (
    <header>
      <h1><img src={Logo} alt='Interactive Projects' /></h1>
      <nav>
        <ul>
          <li><Link href="/" className={location === '/' ? 'active': ''}>HOME</Link></li>
          <li><Link href="/contact" className={location === '/contact' ? 'active': ''}>CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
}
 
export default Header;