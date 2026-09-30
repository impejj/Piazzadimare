import {
  ArrowRight,
  Clock3,
  Coffee,
  Croissant,
  Instagram,
  MapPin,
  Menu,
  Sparkles,
  Sun,
  Users,
  Waves,
  Wine,
} from "lucide-react";
import { useState } from "react";

const experienceCards = [
  {
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=88",
    title: "Sabores que inspiran",
    text: "Café de especialidad, pastelería artesanal y una carta pensada para cada momento.",
  },
  {
    icon: Sun,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=88",
    title: "Un entorno único",
    text: "La inmensidad del mar como escenario, en un espacio diseñado para disfrutar sin apuro.",
  },
  {
    icon: Users,
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=88",
    title: "Momentos que conectan",
    text: "Encuentros, charlas, celebraciones y atardeceres que se vuelven inolvidables.",
  },
];

const menuCards = [
  {
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=88",
    title: "Desayunos",
    text: "El mejor comienzo.",
  },
  {
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=88",
    title: "Meriendas",
    text: "Clásicos y creaciones.",
  },
  {
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=88",
    title: "Almuerzos",
    text: "Sabores del mar y la tierra.",
  },
  {
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=88",
    title: "Atardeceres",
    text: "Un ritual en la costa.",
  },
];

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Piazza di Mare">
          <strong>Piazza di Mare</strong>
          <small>Confitería · Café · Mar del Plata</small>
        </a>

        <nav className={open ? "nav nav-open" : "nav"}>
          <a href="#inicio">Inicio</a>
          <a href="#experiencia">La experiencia</a>
          <a href="#propuesta">Nuestra propuesta</a>
          <a href="#arquitectura">Galería</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="reserve-pill" href="#contacto">Reservar</a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          <Menu size={24} />
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">Mar del Plata · Argentina</p>
          <h1>Un café<br />frente al mar.</h1>
          <p className="hero-tagline">Buenos momentos, siempre saben mejor acá.</p>
          <a className="cta gold" href="#experiencia">Viví la experiencia <ArrowRight size={17} /></a>
        </div>
        <div className="hero-location"><MapPin size={16} /> Mar del Plata · Costa Atlántica</div>
      </section>

      <section className="experience-section" id="experiencia">
        <div className="experience-intro">
          <p className="eyebrow">La experiencia</p>
          <h2>Más que un café,<br />una forma de vivir<br />Mar del Plata.</h2>
          <p>
            Piazza di Mare es un punto de encuentro entre la buena gastronomía,
            el mar y los mejores momentos del día. Un lugar donde cada detalle
            invita a disfrutar.
          </p>
          <a className="cta gold" href="#arquitectura">Conocé nuestra historia <ArrowRight size={17} /></a>
        </div>

        <div className="experience-cards">
          {experienceCards.map(({ icon: Icon, image, title, text }) => (
            <article className="experience-card" key={title}>
              <img src={image} alt="" />
              <div>
                <Icon size={21} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="proposal" id="propuesta">
        <div className="proposal-copy">
          <p className="eyebrow light">Nuestra propuesta</p>
          <h2>Gastronomía<br />en armonía con el mar.</h2>
          <p>
            Una carta que combina tradición y contemporaneidad: café de especialidad,
            pastelería, productos frescos y opciones para acompañar cada momento del día.
          </p>
          <a className="cta gold" href="#contacto">Descubrir la propuesta <ArrowRight size={17} /></a>
        </div>

        <div className="menu-grid">
          {menuCards.map((item) => (
            <article className="menu-card" key={item.title}>
              <img src={item.image} alt="" />
              <span />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture" id="arquitectura">
        <div className="architecture-photo" />
        <div className="architecture-copy">
          <p className="eyebrow">Arquitectura & paisaje</p>
          <h2>Un diseño que enmarca<br />lo extraordinario.</h2>
          <p>
            Espacios luminosos, líneas modernas y una conexión natural con el entorno.
            Piazza di Mare integra arquitectura, paisaje y gastronomía en perfecta armonía.
          </p>
          <div className="features">
            <div><Sparkles size={22} /><b>Espacios abiertos</b></div>
            <div><Waves size={22} /><b>Vistas privilegiadas</b></div>
            <div><Sun size={22} /><b>Luz natural todo el día</b></div>
          </div>
        </div>
      </section>

      <section className="moment">
        <div className="moment-image" />
        <div className="moment-copy">
          <p className="eyebrow">Desayunos, meriendas y atardeceres</p>
          <h2>Cada momento<br />tiene su sabor.</h2>
          <p>
            Desde un desayuno frente al mar hasta una copa cuando baja el sol,
            Piazza di Mare siempre invita a quedarse un poco más.
          </p>
          <a className="cta gold" href="#contacto">Reservá tu mesa <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="events" id="eventos">
        <div className="events-overlay" />
        <div className="events-copy">
          <p className="eyebrow light">Encuentros & eventos</p>
          <h2>Un escenario para<br />momentos especiales.</h2>
          <p>
            Celebraciones íntimas, encuentros corporativos, presentaciones de marca y experiencias
            privadas con el Atlántico como telón de fondo.
          </p>
          <div className="event-tags">
            <span><CalendarDays size={17} /> Eventos privados</span>
            <span><Users size={17} /> Encuentros & grupos</span>
            <span><Wine size={17} /> Atardeceres especiales</span>
          </div>
          <a className="cta outline-light" href="#contacto">Consultar experiencias <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div>
          <p className="eyebrow light">Contacto</p>
          <h2>Te esperamos<br />en la costa.</h2>
        </div>
        <div className="contact-data">
          <span><MapPin size={18} /> Mar del Plata, Buenos Aires</span>
          <span><Clock3 size={18} /> Próximamente</span>
          <span><Coffee size={18} /> Café · Pastelería · Gastronomía</span>
          <span><Wine size={18} /> Desayunos · Meriendas · Atardeceres</span>
        </div>
        <a className="cta gold" href="mailto:hola@piazzadimare.com.ar">Quiero saber más <ArrowRight size={17} /></a>
      </section>

      <footer>
        <div className="footer-brand">
          <strong>Piazza di Mare</strong>
          <small>Confitería · Café · Mar del Plata</small>
        </div>
        <span>Mar del Plata siempre es una buena idea.</span>
        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
      </footer>
    </main>
  );
}
