'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('Home');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id') || 'home';
            setCurrentSection(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleNavClick = (section: string) => {
    setCurrentSection(section);
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Telah terkirim!');
    e.currentTarget.reset();
  };

  return (
    <>
      <header className={`header ${mobileMenuOpen ? 'active' : ''}`}>
        <Link href="#home" className="Logo">Joe Nickson Lie</Link>
        
        <nav className="navbar">
          <Link href="#home" className="Nav">Home</Link>
          <Link href="#education" className="Nav">Education</Link>
          <Link href="#services" className="Nav">Services</Link>
          <Link href="#portfolio" className="Nav">Portfolio</Link>
          <Link href="#contact" className="Nav">Contact</Link>
        </nav>

        <div className="MHeader">
          <Link href="#home" className="Mlogo">Joe Nickson Lie</Link>
          <div 
            className={`MHMenu ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="MHNavbar">{currentSection}</span>
            <i className='bx bx-chevron-down Micon'></i>
          </div>
        </div>
      </header>

      <div className={`MHNavBagi ${mobileMenuOpen ? 'active' : ''}`}>
        <Link href="#home" className="MHButtonNav" onClick={() => handleNavClick('Home')}>Home</Link>
        <Link href="#education" className="MHButtonNav" onClick={() => handleNavClick('Education')}>Education</Link>
        <Link href="#services" className="MHButtonNav" onClick={() => handleNavClick('Services')}>Services</Link>
        <Link href="#portfolio" className="MHButtonNav" onClick={() => handleNavClick('Portfolio')}>Portfolio</Link>
        <Link href="#contact" className="MHButtonNav" onClick={() => handleNavClick('Contact')}>Contact</Link>
      </div>

      <section className="ContainerHome" id="home" data-aos="fade">
        <div className="HomeBox">
          <div className="JustDisableMr">
            <h6>Hi All <span>It's Joe</span></h6>
            <h5>I am an Designer<span></span></h5>
            <p>ordinary people and nothing special, do what ever you want, i am more active in individual and L crowd if something make me interesting i will do it until end then cause i didnt know what iam gonna telling you all so i will add Lorem in here. Lorem ipsum, dolor...</p>
            <div>
              <p className="MyItem">My Item:</p>
              <div className="ButtonMyItem" style={{ display: 'flex'}}>
                <a target="_blank" className="Icon" style={{ fontSize: '10px' }}>My CV</a>
                <a target="_blank" className="Icon">Hire Me</a>
                <Link href="#contact" className="Icon">ContactMe</Link>
              </div>
            </div>
            <button 
              className="LebihLanjut" 
              onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lebih Lanjut
            </button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/Img/Me.jpg" alt="Profile" className="HomeImage" width={400} height={400} priority />
          </div>
        </div>
      </section>

      <section className="ContainerEducation" id="education" data-aos="fade">
        <div className="EducationBox">
          <div className="EducationText" style={{ width: 'auto' }}>
            <h2>Education</h2>
            <p style={{ display: 'flex', justifyContent: 'center' }}>My educational history. from acient till today</p>
          </div>

          <div className="EducationMe">
            <div className="BoxMs">
              <Image src="/Img/sd.png" alt="SD Logo" width={80} height={80} />
              <div className="BoxText">
                <h3>Sekolah Bunda Mulia/Widuri Indah II</h3>
                <p>2012 - 2018</p>
              </div>
            </div>

            <div className="BoxMs">
              <Image src="/Img/smp.png" alt="SMP Logo" width={80} height={80} />
              <div className="BoxText">
                <h3>SMP Permata Bunda</h3>
                <p>2018 - 2021</p>
              </div>
            </div>

            <div className="BoxMs">
              <Image src="/Img/smk.png" alt="SMK" width={80} height={80} />
              <div className="BoxText">
                <h3>SMK Pelita IV</h3>
                <p>2021 - 2024</p>
              </div>
            </div>

            <div className="BoxMs">
              <Image src="/Img/untar.png" alt="untar" width={80} height={80} />
              <div className="BoxText">
                <h3>University Tarumanagara</h3>
                <p>2024 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ContainerEducation" id="services" data-aos="fade">
        <div className="EducationBox">
          <div className="EducationText">
            <h2>Services</h2>
            <p style={{ display: 'flex', justifyContent: 'center' }}>Beberapa skill yang sering saya gunakan.</p>
          </div>
          <div className="EducationCard">
            {[
              {
                img: '/Img/sc1.png',
                title: 'FrontEnd',
                desc: 'Membangun tampilan website yang modern, responsif, dan user-friendly menggunakan HTML, CSS, dan Tailwind CSS.',
                skills: ['/Img/html.png', '/Img/css.png', '/Img/twd.png']
              },
              {
                img: '/Img/sc2.png',
                title: 'Design | Editing',
                desc: 'desain grafis serta video editing/animasi menggunakan Adobe Premiere Pro, Illustrator, dan After Effects.',
                skills: ['/Img/adb.png', '/Img/pr.png', '/Img/ai.png', '/Img/ae.png']
              },
              {
                img: '/Img/sc3.png',
                title: '3D Design',
                desc: 'Membuat model 3D atau desain dan Unity untuk kebutuhan game dan mempermudah desain grafis.',
                skills: ['/Img/blender.png', '/Img/unity.png']
              },
              {
                img: '/Img/sc4.jpg',
                title: 'Pc/Laptop Maintenance',
                desc: 'perawatan dan perbaikan PC atau laptop, mulai dari instalasi software, upgrade hardware, hingga troubleshooting.',
                skills: ['/Img/pc1.png', '/Img/pc2.png', '/Img/pc3.png']
              }
            ].map((service, idx) => (
              <div className="Card" key={idx}>
                <Image src={service.img} alt="services" className="CardImg" width={400} height={300} />
                <div className="Overlay"></div>
                <div className="IsiDalamnya">
                  <h2>{service.title}</h2>
                  <p>{service.desc}</p>
                  <div className="CardIcon">
                    <div className="IconBar">
                      {service.skills.map((skill, i) => (
                        <img key={i} src={skill} alt="skill" className="DisplaySkill" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ContainerEducation" id="portfolio" data-aos="fade">
        <div className="EducationBox">
          <div className="EducationText">
            <h2>Portfolio</h2>
            <p>Beberapa proyek terbaik yang pernah saya kerjakan, menampilkan kreativitas, desain, dan pengembangan web.</p>
          </div>
          <div className="PortfolioContent">
            {[
              {
                img: '/Img/Portfolio1.png',
                title: 'Website Game',
                desc: 'Berupa game ringan yang bisa dimainkan diberbagai device dan mudah dipahami, game ini adalah sebuah menekan tombol dimana pemain hanya mengklik secepat mungkin dengan waktu yang terbatas.'
              },
              {
                img: '/Img/Portfolio2.png',
                title: 'Website Sekolah',
                desc: 'Pembaruan website sekolah kami selepas adanya pembaruan gedung, dimana website kali ini dibuat lebih moderen dan tidak template yang biasa dapat ditemui di berbagai website sekolah.'
              },
              {
                img: '/Img/Portfolio3.png',
                title: 'Website Asuransi',
                desc: 'Website asuransi dengan desain glassmorphism dan minimalist. pembuatan glassmorphism ini harus memiliki warna yang cocok dengaannya jika tidak walau terlihat baik tapi aslinya tidak'
              },
              {
                img: '/Img/Portfolio4.png',
                title: 'Website Online Learning',
                desc: 'Trainity adalah situs belajar pemrograman gratis dimana proyek ini dibangun untuk membuat proses belajar pemrograman menjadi mudah dan efisien.'
              }
            ].map((item, idx) => (
              <div className="PortfolioDis" key={idx}>
                <div className="Portfolioimg">
                  <Image src={item.img} alt={item.title} width={600} height={400} />
                </div>
                <div className="PortfolioText">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ContainerHome" id="contact" data-aos="fade">
        <div className="HomeBoxC">
          <div className="ContactBox">
            <h2>Contact Me</h2>
            <p>Anda dapat menghubungi saya melalui email atau sosial media di bawah ini. Saya akan membalas pesan Anda secepat mungkin. <br />Terima Kasih</p>
            <form className="ContactForm" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea rows={5} placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="ContactMe">
            {[
              { icon: 'bxl-instagram', title: 'Instagram', handle: '@tuknwm' },
              { icon: 'bxl-twitter', title: 'Twitter', handle: 'nahh' },
              { icon: 'bxl-github', title: 'Github', handle: 'Tuknwm' },
              { icon: 'bxl-whatsapp', title: 'Whatsapp', handle: 'Tuknwm' },
              { icon: 'bxl-discord', title: 'Discord', handle: 'Tuknwm' }
            ].map((contact, idx) => (
              <div className="BoxMs" key={idx}>
                <i className={`bx ${contact.icon}`}></i>
                <div className="BoxText">
                  <h3>{contact.title}</h3>
                  <p>{contact.handle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="Footer">
        <p>&copy; All rights reserved.</p>
      </footer>
    </>
  );
}