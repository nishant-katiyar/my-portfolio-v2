      // Typed.js with smart article switching
      const professions = [
          { text: "Frontend Developer", article: "a" },
          { text: "Angular Expert", article: "an" },
          { text: "Tech Enthusiast", article: "a" },
          { text: "Problem Solver", article: "a" }
      ];
      
      let currentIndex = 0;
      const articleElement = document.getElementById('article');
      
      const typed = new Typed(".multiple-text", {
          strings: professions.map(p => p.text),
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true,
          preStringTyped: (arrayPos) => {
              articleElement.textContent = professions[arrayPos].article;
          }
      });
      
      const resumeBtns = document.querySelectorAll('.resume-btn');

      resumeBtns.forEach((btn, idx) => {
          btn.addEventListener('click', () => {
              const resumeDetails = document.querySelectorAll('.resume-detail');
              
              resumeBtns.forEach(btn => {
                  btn.classList.remove('active');
              });
              btn.classList.add('active');

              resumeDetails.forEach(detail => {
                  detail.classList.remove('active');
              });
              resumeDetails[idx].classList.add('active');
          });
      });

      /*======================= toggle icon navbar =======================*/   
      let menuIcon = document.querySelector('#menu-icon');
      let navbar = document.querySelector('.navbar');

      menuIcon.onclick = () => {
          menuIcon.classList.toggle('bx-x');
          navbar.classList.toggle('active');
      }

      /*======================= scroll sections active link =======================*/        
      let sections = document.querySelectorAll('section');
      let navLinks = document.querySelectorAll('header nav a');

      window.onscroll = () => {
          sections.forEach(sec => {
              let top = window.scrollY;
              let offset = sec.offsetTop - 150;
              let height = sec.offsetHeight;
              let id = sec.getAttribute('id');

              if(top >= offset && top < offset + height){
                  navLinks.forEach(links => {
                      links.classList.remove('active');
                      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                  });
              }
          });

          /*======================= sticky navbar =======================*/        
          let header = document.querySelector('header');

          header.classList.toggle('sticky', window.scrollY > 100); 

          /*======================= remove toggle icon and navbar when click navbar link (scroll) =======================*/   
          menuIcon.classList.remove('bx-x');
          navbar.classList.remove('active');
      };

      /*======================= scroll reveal ============*/        
      ScrollReveal({ 
          reset: true,
          distance: '80px',
          duration: 2000,
          delay: 200
      });

      ScrollReveal().reveal('.home-content, .heading, .resume-detail-experience-heading', { origin: 'top' });
      ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
      ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
      ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });