import {
  ArrowDown,
  ArrowRight,
  Coffee,
  Croissant,
  GlassWater,
  Instagram,
  MapPin,
  Menu,
  Sparkles,
  Sunset,
  UtensilsCrossed,
  Waves,
  Wine,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Coffee,
    eyebrow: "Café de especialidad",
    title: "El ritual de cada día",
    text: "Espresso, filtrados, clásicos italianos y una carta pensada para acompañar la mañana frente al Atlántico.",
  },
  {
    icon: Croissant,
    eyebrow: "Pastelería & panadería",
    title: "Hecho para tentar",
    text: "Viennoiserie, tortas, laminados, dulces y salados preparados para convertir cualquier pausa en un plan.",
  },
  {
    icon: UtensilsCrossed,
    eyebrow: "Desayunos & meriendas",
    title: "Más tiempo en la mesa",
    text: "Opciones frescas, abundantes y contemporáneas para compartir, trabajar, encontrarse o simplemente mirar el mar.",
  },
  {
    icon: Wine,
    eyebrow: "Atardeceres",
    title: "Cuando cambia la luz",
    text: "Aperitivos, vinos, cócteles y pequeños platos para llevar Piazza di Mare desde el café hasta la primera noche.",
  },
];

const experiences = [
  ["Salón vidriado", "Luz natural, vistas abiertas y una arquitectura que hace del mar parte del interior."],
  ["Terraza marítima", "Mesas al aire libre para desayunos largos, tardes de sol y puestas de sol."],
  ["Encuentros & eventos", "Un escenario flexible para celebraciones íntimas, marcas y experiencias privadas."],
];

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Piazza di Mare">
          <span className="brand-mark"><Waves size={23} strokeWidth={1.5} /></span>
          <span>
            <strong>Piazza</strong>
            <small>di Mare</small>
          </span>
        </a>

        <nav className={open ? "nav nav-open" : "nav"} aria-label="Principal">
          <a href="#experiencia" onClick={() => setOpen(false)}>Experiencia</a>
          <a href="#carta" onClick={() => setOpen(false)}>Carta</a>
          <a href="#espacio" onClick={() => setOpen(false)}>El espacio</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        </nav>

        <a className="header-cta" href="#contacto">Visitanos <ArrowRight size={16} /></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          <Menu size={24} />
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-shade" />
        <div className="hero-grain" />
        <div className="hero-content">
          <p className="kicker"><MapPin size={15} /> Mar del Plata · Argentina</p>
          <h1>Un café<br /><em>frente al mar.</em></h1>
          <p className="hero-copy">
            Vidrio, luz, café y horizonte. Piazza di Mare nace para convertir cada encuentro
            en una experiencia costera inolvidable.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#carta">Descubrir Piazza <ArrowRight size={18} /></a>
            <a className="text-link" href="#espacio">Conocer el espacio <ArrowDown size={17} /></a>
          </div>
        </div>
        <div className="hero-side-note">
          <span>38° 00′ S</span>
          <span>Atlántico argentino</span>
        </div>
      </section>

      <section className="manifesto" id="experiencia">
        <div>
          <p className="section-label">La experiencia</p>
          <h2>Una confitería que se siente como estar <em>sobre el mar.</em></h2>
        </div>
        <div className="manifesto-copy">
          <p>
            Piazza di Mare combina hospitalidad clásica y diseño contemporáneo. La arquitectura
            privilegia el vidrio, la transparencia y las visuales abiertas para que el océano sea
            protagonista durante todo el día.
          </p>
          <p>
            Un lugar para el primer café, una reunión, una merienda, una sobremesa larga o una copa
            cuando baja el sol.
          </p>
        </div>
      </section>

      <section className="sea-window" id="espacio">
        <div className="sea-window-image" />
        <div className="sea-window-card">
          <p className="section-label">Arquitectura & paisaje</p>
          <h3>El horizonte entra al salón.</h3>
          <p>
            Materiales nobles, reflejos, vegetación costera y una envolvente transparente diseñada
            para amplificar la luz de Mar del Plata.
          </p>
          <div className="micro-stats">
            <span><Sparkles size={18} /> diseño contemporáneo</span>
            <span><Sunset size={18} /> vista abierta</span>
            <span><GlassWater size={18} /> interior + terraza</span>
          </div>
        </div>
      </section>

      <section className="services" id="carta">
        <div className="section-heading">
          <p className="section-label">Nuestra propuesta</p>
          <h2>Del primer espresso<br />al último brindis.</h2>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, eyebrow, title, text }) => (
            <article className="service-card" key={title}>
              <div className="service-icon"><Icon size={25} strokeWidth={1.5} /></div>
              <p>{eyebrow}</p>
              <h3>{title}</h3>
              <span>{text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-list">
        <div className="experience-photo" />
        <div className="experience-content">
          <p className="section-label">Piazza, todo el día</p>
          <h2>Un espacio.<br />Muchas formas de vivirlo.</h2>
          <div className="experience-items">
            {experiences.map(([title, text], index) => (
              <div className="experience-item" key={title}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="closing">
        <div>
          <p className="section-label light">Próximamente · Mar del Plata</p>
          <h2>Nos vemos<br /><em>frente al mar.</em></h2>
        </div>
        <div className="closing-copy">
          <p>Estamos preparando una nueva manera de encontrarnos con el café, la gastronomía y el Atlántico.</p>
          <a className="button button-outline" href="mailto:hola@piazzadimare.com.ar">Quiero saber más <ArrowRight size={18} /></a>
        </div>
      </section>

      <footer id="contacto">
        <div className="footer-brand">
          <span className="brand-mark"><Waves size={22} strokeWidth={1.5} /></span>
          <span><strong>Piazza</strong><small>di Mare</small></span>
        </div>
        <div className="footer-meta">
          <span>Mar del Plata · Buenos Aires · Argentina</span>
          <span>hola@piazzadimare.com.ar</span>
        </div>
        <a className="social" href="#" aria-label="Instagram"><Instagram size={20} /></a>
      </footer>
    </main>
  );
}
