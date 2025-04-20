import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__wrap container">
          <div className="footer__content row">
            <div className="footer__topSection bottomNav">
              <div className="bottomNav__listsWrap">
                <ul className="bottomNav__list">
                  <li className="bottomNav__listItem">
                    <div className="bottomNav__itemLink bottomNav__itemLink_accent">Інвестору</div>
                  </li>
                  <li className="bottomNav__listItem">
                    <Link to="/" className="bottomNav__itemLink">Каталоги</Link>
                  </li>
                  <li className="bottomNav__listItem">
                    <Link to="/market" className="bottomNav__itemLink">Стартапи</Link>
                  </li>
                  <li className="bottomNav__listItem">
                    <Link to="/market" className="bottomNav__itemLink">Інвестпроекти</Link>
                  </li>
                </ul>
                
                <ul className="bottomNav__list">
                  <li className="bottomNav__listItem">
                    <div className="bottomNav__itemLink bottomNav__itemLink_accent">Підприємцю</div>
                  </li>
                  <li className="bottomNav__listItem">
                    <Link to="/investors" className="bottomNav__itemLink">Знайти Інвестиції</Link>
                  </li>
                  <li className="bottomNav__listItem">
                    <Link to="/market" className="bottomNav__itemLink">Продати Бізнес</Link>
                  </li>
                  <li className="bottomNav__listItem">
                    <Link to="/market" className="bottomNav__itemLink">Запити Інвесторів</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer__bottomSection">
            <div className="footer__bottomContent">
              <ul className="footer__countries">
                <li className="footer__countryItem">
                  <Link to="/" className="footer__countryLink">США</Link>
                </li>
                <li className="footer__countryItem">
                  <Link to="/" className="footer__countryLink">Індія</Link>
                </li>
                <li className="footer__countryItem">
                  <Link to="/" className="footer__countryLink">Польща</Link>
                </li>
                <li className="footer__countryItem">
                  <Link to="/" className="footer__countryLink">Казахстан</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;