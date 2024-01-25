import "./css/main.css";

function App() {
  return (
    <>
      <main className="main-container">
        <section className="home">
          <article className="landing-content">
            <p className="first">HI THERE!</p>
            <p className="second">
              I'M <span>TYNNETH</span>
            </p>
            <p className="third">FULL STACK WEB DEVELOPER</p>
            <p className="describe-me">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
              quia totam alias ut ipsam dolore expedita repudiandae voluptas eos
              fugit iure magni, laboriosam nemo fuga adipisci doloremque minus
              corrupti quod laborum impedit, amet animi. Consectetur deserunt
              cupiditate ut quibusdam quia. Eius, quod odio. Nam modi, incidunt
              officia tempore voluptatum officiis?
            </p>
            <button className="about">MORE ABOUT ME</button>
          </article>
          <img className="dev-activity" src="/dev-activity.svg" alt="me.jpg" />
        </section>
        <aside>
          <div>home-icon</div>
          <div>about-icon</div>
          <div>resume-icon</div>
          <div>portfolio-icon</div>
          <div>contact-icon</div>
        </aside>
      </main>
    </>
  );
}

export default App;
