import './Hero.css'; 

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Carlos Hernández</h1>
        
        <h2 className="hero-subtitle">
          Software Engineer
          <span className="hero-stack"> Backend • Frontend • Cloud • APIs</span>
        </h2>
        
        <p className="hero-description">
          Diseño e implementación de arquitecturas sólidas y soluciones escalables para problemas estructurales complejos.
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">Ver proyectos</a>
          <a href="src/assets/pdf/CV.pdf" className="btn btn-secondary" download>Descargar CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;