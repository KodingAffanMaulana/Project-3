import React from 'react';
import Contact from './Contact';

const Body: React.FC = () => {
  return (
    <main>
      <section className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home__title">
            Hi, I'am <br />
            <span className="home__title-color">Affan </span>Maulana
          </h1>

          <a href="https://www.linkedin.com/in/fanmaul/" target="_blank" className="button">Contact
          </a>
        </div>

        <div className="home__social">
          <a target="_blank" href="lnkedin.com/in/fanmaul/" className="home__social-icon">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/affan_maulaana" className="home__social-icon">
            <i className="bx bxl-instagram"></i>
          </a>
          <a target="_blank" href="https://github.com/KodingAffanMaulana" className="home__social-icon">
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <div id="container_home__img">
          <img className="home__img" src="/assets/img/profile.png" />
        </div>
      </section>

      <section className="about-section" id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container bd-grid">
          <div className="about__img">
            <img src="/assets/img/about.jpg" alt="" />
          </div>

          <div>
            <p className="about__text">
              Hey there! I'm Affan Maulana, but you can call me Affan or Maul for short. If we go
              way back, you might know me as Fan or Ul.
              <br />
              <br />
              I hail from a quaint little village called Kampung Bogatama, nestled in Tulang Bawang,
              Lampung. I proudly hold a Bachelor's degree in Informatics Engineering from Lampung
              University (details👆), and I currently thrive as a Software Engineer - primarily in
              the realm of Web Platforms (although you might know it better as "Front-end
              Engineering").
              <br />
              <br />Beyond the world of coding, you'll often find me immersed in the world of music,
              whether it's playing an instrument or simply enjoying a good tune.
            </p>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <h2 className="section-title">Work</h2>

        <div className="container_work">
          <div className="card_work">
            <h3>Software Engineer</h3>
            <p>PT GITS Indonesia</p>
            <p className="date">16 Februari 2023 - 30 Juni 2023</p>
            <p className="description">
              The Software Engineer will be assigned to develop and implement the application or
              project contained in the Objectives and Key Results later.
            </p>
          </div>
          <div className="card_work">
            <h3>Frontend Engineering</h3>
            <p>PT Ruang Raya Indonesia</p>
            <p className="date">18 Agu 2022 - 28 Des 2022</p>
            <p className="description">
              Creating high-quality websites and dynamic applications to provide the best user
              experience is essential to increase the competitiveness of a product or service.
            </p>
          </div>
          <div className="card_work">
            <h3>Teknik Informatika</h3>
            <p>Universitas Lampung</p>
            <p className="date">Aug 2020 - Jan 2024</p>
            <p className="description">
              I am currently studying S1 Informatics Engineering at one of my dream universities
              since childhood, namely the University of Lampung. I am currently working in the field
              of Frontend Web Developer.
            </p>
          </div>
          <div className="card_work">
            <h3>Generasi GIGIH Full Stack Engineer</h3>
            <p>GoTo Impact Foundation</p>
            <p className="date">Aug 2020 - Jan 2024</p>
            <p className="description">
              Developing applications using the MERN Stack and Next.js. I was recruited through the
              Industry Partner’s Capstone Project Program under the Generasi Gigih initiative by the
              Goto Impact Foundation.
            </p>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" id="education" className="education-section">
        <div className="header-container">
          <h2 className="section-title">Education</h2>
        </div>
        <div className="cards-container">
          <article className="card">
            <div className="image-container">
              <img src="/assets/img/unila.jpeg" alt="unila" />
            </div>
            <h2>Universitas Lampung</h2>
            <p className="detail_edu">Teknik Informatika</p>
            <p className="detail_edu">IPK 3.91</p>
            <p className="detail_edu">2020 - 2024</p>
          </article>
          <br />
          <article className="card">
            <div className="image-container">
              <img src="/assets/img/sma.jpeg" alt="sma" />
            </div>
            <h2>SMA YP UNILA</h2>
            <p className="detail_edu">MIPA</p>
            <p className="detail_edu">Average Report (88/100)</p>
            <p className="detail_edu">2017 - 2020</p>
          </article>
          <br />
          <article className="card">
            <div className="image-container">
              <img src="/assets/img/smp.jpg" alt="smp" />
            </div>
            <h2>SMPN 02 Penawartama</h2>
            <p className="detail_edu">IPA</p>
            <p className="detail_edu">General Champion</p>
            <p className="detail_edu">2014 - 2017</p>
          </article>
          <br />
          <article className="card">
            <div className="image-container">
              <img src="/assets/img/sd.jpeg" alt="sd" />
            </div>
            <h2>SDN 01 Bogatama</h2>
            <p className="detail_edu">2008 - 2014</p>
          </article>
        </div>
      </section>

      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills__container bd-grid">
          <div>
            <h2 className="skills__subtitle">Profesional Skills</h2>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-html5 skills__icon"></i>
                <span className="skills__name">HTML</span>
              </div>
              <div className="skills__bar skills__html"></div>
              <div>
                <span className="skills__percentage">100%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-css3 skills__icon"></i>
                <span className="skills__name">CSS3</span>
              </div>
              <div className="skills__bar skills__css"></div>
              <div>
                <span className="skills__percentage">80%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-javascript skills__icon"></i>
                <span className="skills__name">JAVASCRIPT</span>
              </div>
              <div className="skills__bar skills__js"></div>
              <div>
                <span className="skills__percentage">80%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className='bx bxl-react skills__icon'></i>
                <span className="skills__name">React</span>
              </div>
              <div className="skills__bar skills__react"></div>
              <div>
                <span className="skills__percentage">80%</span>
              </div>
            </div>
          </div>

          <div>
            <img src="/assets/img/work2.png" alt="" className="skills__img" />
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <img src="/assets/img/andalas.png" alt="MERN E-Commerce Andalas Books" />
            <div className="project-info">
              <h2>MERN E-Commerce Andalas Books</h2>
              <p>
                Andalas Books is an e-commerce platform that provides various books with MERN
                technology (MongoDB, Express.js, React.js, Node.js).
              </p>
              <p className="project-date">Created At: 2024-03-02</p>
              <p className="project-tech">Technology: MongoDB, Express.js, React, Node, Tailwind</p>
              <a target="_blank" href="https://e-andalas.onrender.com/" className="project-link">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <img src="/assets/img/JCC.png" alt="Jabar Coding Camp Revamp v2" />
            <div className="project-info">
              <h2>Jabar Coding Camp Revamp v2</h2>
              <p>
                The Jabar Coding Camp landing page website was built with the NEXT.JS framework,
                which has additional alumni features.
              </p>
              <p className="project-date">Created At: 2023-12-01</p>
              <p className="project-tech">Technology: Next.js</p>
              <a target="_blank" href="https://jabar-coding-camp-v2.vercel.app/" className="project-link">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <img src="/assets/img/tokplay.png" alt="Tokoplay Affan" />
            <div className="project-info">
              <h2>Tokoplay Affan</h2>
              <p>
                My final project for Generasi GIGIH 3.0s Full Stack Engineering program. The
                development of this application utilized the MERN stack and emulates the
                functionality of the Tokopedia Play platform.
              </p>
              <p className="project-date">Created At: 2023-11-01</p>
              <p className="project-tech">Technology: MongoDB, Express.js, React, Node, Tailwind</p>
              <a target="_blank" href="https://github.com/KodingAffanMaulana/TokoPlayfan-FinalProject"
                className="project-link">View Source</a>
            </div>
          </div>
          <div className="project-card">
            <img src="/assets/img/spotifyfan.png" alt="Spotify Clone" />
            <div className="project-info">
              <h2>Spotify Clone</h2>
              <p>
                The Spotify Clone repository is a software project aimed at replicating key features
                from the popular music streaming application, Spotify. This project is built using a
                technology stack that includes React, Tailwind CSS, and integrates with the Spotify
                API.
              </p>
              <p className="project-date">Created At: 2023-08-01</p>
              <p className="project-tech">Technology: React, Tailwind</p>
              <a target="_blank" href="https://github.com/KodingAffanMaulana/Spotify-Clone" className="project-link">View
                Source</a>
            </div>
          </div>
          <div className="project-card">
            <img src="/assets/img/marketplacecrown.png" alt="Ecommerce React Crown" />
            <div className="project-info">
              <h2>Ecommerce React Crown</h2>
              <p>Capstone project course udemy ZhangMYihua/crwn-clothing-v2:lesson-1.</p>
              <p className="project-date">Created At: 2023-08-01</p>
              <p className="project-tech">Technology: React, Scss</p>
              <a target="_blank" href="https://github.com/KodingAffanMaulana/Marketplace-v1" className="project-link">View
                Source</a>
            </div>
          </div>
          <div className="project-card">
            <img src="/assets/img/fanyugioh.png" alt="FanYugiOh! Website" />
            <div className="project-info">
              <h2>FanYugiOh! Website</h2>
              <p>Fan-made Yu-Gi-Oh! website</p>
              <p className="project-date">Created At: 2023-08-01</p>
              <p className="project-tech">Technology: React, Tailwind</p>
              <a target="_blank" href="https://github.com/KodingAffanMaulana/react-final-project-v1"
                className="project-link">View Source</a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  )
}

export default Body