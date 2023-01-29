import { Link, useLocation} from "wouter";
import Logo from '@assets/images/logo.png';

const Header = () => {
  const [location] = useLocation();

  return (
    <header className='header'>
      <h1 className='logo'><img src={Logo} alt='' /></h1>
      <nav className='gnb'>
        <ul>
          <li><Link href="/" className={location === '/' ? 'active': ''}>HOME</Link></li>
          <li><Link href="/contact" className={location === '/contact' ? 'active': ''}>CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
}
 
export default Header;