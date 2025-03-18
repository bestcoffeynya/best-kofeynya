import React, { useState, useEffect } from "react";
import "./styles.css";

const menuItems = [
  { id: 1, name: "Кофе", image: "images/coffee.jpg", link: "https://docs.google.com/document/d/1stAboRqbtF5RCJfRsX6vEizMDI9EUH1OBDbKPP2tG-k/edit?tab=t.0" },
  { id: 2, name: "Выпечка", image: "images/bakery.jpg", link: "https://docs.google.com/document/d/13TIKAiuQvkats2YYTWpcIMcn5mhdWenfFP_V778_XRA/edit?tab=t.0" },
  { id: 3, name: "Десерты", image: "images/snacks.jpg", link: "https://docs.google.com/document/d/1u2fSMAQs4kFAUD6MP6RFa2e8AgmIJWtmcUZDOAeACPc/edit?tab=t.0" },
  { id: 4, name: "Салаты", image: "images/salads.jpg", link: "https://docs.google.com/document/d/1t_jGSlWHfCgg0L9YNfIfh9tj5dlDQpc-NNvc0ch-tqg/edit?tab=t.0" },
  { id: 5, name: "Хлеба", image: "images/bread.jpg", link: "https://docs.google.com/document/d/1XCUokj1ovb6hoFmLfBm6br3NLewY5sdY-_hrO9V898A/edit?tab=t.0" },
  { id: 6, name: "Горячие блюда", image: "images/lunch.jpg", link: "https://docs.google.com/document/d/1TpNqmLVKDJqqbzXMpg5GjRCzXVV0DkpSK3Xi3ZHzDQc/edit?tab=t.0" }
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className={container ${isVisible ? "fade-in" : ""}}>
      <header>
        <h1>Best кOfейня</h1>
        <p>Кофейня и Пекарня в г. Кыштым</p>
      </header>

      <section className="menu">
        <h2>Меню</h2>
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className={menu-item fade-in delay-${index}}> 
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </a>
          ))}
        </div>
      </section>

      <button className="call-button" onClick={() => setIsModalOpen(true)}>📞 Заказать звонок</button>

      {isModalOpen && (
        <div className="modal fade-in">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <h2>Оставьте ваш номер</h2>
            <input type="text" placeholder="Введите номер телефона" />
            <button className="submit-call">Отправить</button>
          </div>
        </div>
      )}

      <section className="map fade-in">
        <h2>Мы на карте</h2>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=60.542896%2C55.707524&mode=poi&poi%5Bpoint%5D=60.542122%2C55.707600&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D169298887071&z=19.56"
          width="100%" height="400" frameBorder="1" allowFullScreen
        ></iframe>
      </section>

      <footer>
        <p>© 2025 Best кOfейня - Кофейня и Пекарня. Все права защищены.</p>
      </footer>
    </div>
  );
}