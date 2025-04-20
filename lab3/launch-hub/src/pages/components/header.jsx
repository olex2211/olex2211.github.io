import "./header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Header() {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1020) {
        const slogan = document.querySelector(".slogan");
        if (!slogan) return;

        const sloganRect = slogan.getBoundingClientRect();
        const shouldBeTransparent = sloganRect.bottom > 0 && sloganRect.top < window.innerHeight;
        
        setIsTransparent(shouldBeTransparent);
      }
    };

    // Додаємо слухач події при монтуванні
    window.addEventListener('scroll', handleScroll);
    
    // Викликаємо одразу для початкової перевірки
    handleScroll();

    // Прибираємо слухач при демонтуванні компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isTransparent ? 'transparent' : ''}>
        {/* Мобільна навігація */}
        <nav className="mobile-nav">
          <ul className="mobile-ul">
            <li>
              <Link to="/">Мій стартап</Link>
            </li>
            <li>
              <Link to="/market">Ринок</Link>
            </li>
            <li>
              <Link to="/investors">Інвестори</Link>
            </li>
          </ul>
        </nav>

        {/* Десктопна навігація */}
        <nav className="desktop-nav">
          <ul className="desktop-ul">
            <li>
              <Link to="/">Мій стартап</Link>
            </li>
            <li>
              <Link to="/market">Ринок</Link>
            </li>
            <li>
              <Link to="/investors">Інвестори</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="slogan">
        {/* <img src="logo.png" className="logo" alt="logo" /> */}
        <h2 className="headerText">
          LaunchHub допомагає початківцям і досвідченим підприємцям знайти
          фінансування для інвестиційних проектів та діючих бізнесів
        </h2>
      </div>
    </>
  );
}

export default Header;
