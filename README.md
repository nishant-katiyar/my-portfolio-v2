# nishant-katiyar-portfolio

🚀 Nishant Katiyar - Portfolio Website
A modern, responsive portfolio website showcasing my experience as a Software Engineer with 6+ years of expertise in frontend development, specializing in Angular and modern web technologies.
<img width="1452" height="732" alt="image" src="https://github.com/user-attachments/assets/ee210634-e3dd-474b-943b-0e09679eac1c" />

<img width="1345" height="722" alt="image" src="https://github.com/user-attachments/assets/b8526738-9577-4dcc-ace9-4936eff4dba4" />

<img width="1434" height="761" alt="image" src="https://github.com/user-attachments/assets/63e0b496-4b40-4305-8e4c-28baea16bfa0" />

📋 Table of Contents

About
Features
Technologies Used
Sections
Installation
Deployment
Customization
Contact
License

🎯 About
This portfolio website is a comprehensive showcase of my professional journey, technical skills, and projects. Built with modern web technologies, it features smooth animations, responsive design, and an intuitive user interface.
Key Highlights:

6+ years of frontend development experience
Specialized in Angular, TypeScript, and modern JavaScript
Proven track record in AdTech and FinTech domains
Led UI modernization initiatives and built design systems
Converted hackathon prototype to revenue-generating product in 30 days

✨ Features

Responsive Design - Fully responsive across all devices (mobile, tablet, desktop)
Smooth Animations - Engaging scroll animations using ScrollReveal.js
Typed Effect - Dynamic text animation with Typed.js
Interactive Resume Section - Tabbed interface showcasing Experience, Education, Skills, and About Me
Project Portfolio - Showcase of key projects and achievements
Contact Form - Integrated contact form for easy communication
Modern UI/UX - Clean, professional design with smooth transitions
Cross-browser Compatible - Works seamlessly across all modern browsers
SEO Optimized - Proper meta tags and semantic HTML structure
Fast Loading - Optimized assets for quick page loads

🛠️ Technologies Used
Frontend

HTML5 - Semantic markup
CSS3 - Custom styling with CSS variables
JavaScript (ES6+) - Interactive functionality
Poppins Font - Modern, clean typography

Libraries & Frameworks

Typed.js - Typing animation effect
ScrollReveal.js - Scroll animations
Boxicons - Icon library

Tools & Deployment

Git - Version control
Netlify - Hosting and deployment
VS Code - Development environment

📄 Sections
1. Home

Introduction with dynamic typing effect
Social media links (LinkedIn, GitHub, Email, Portfolio)
Resume download button
Professional summary

2. About

Detailed professional background
Career highlights and achievements
Personal introduction

3. Resume
Interactive tabbed section with:

Experience - 6+ years across PubMatic and Infosys
Education - B.Tech in Computer Science + Certifications
Skills - Technical skills with icons (HTML5, CSS3, JavaScript, Angular, TypeScript, React, Bootstrap, Node.js, Git, GitHub, Jasmine/Karma)
About Me - Personal details and professional information

4. Skills
Three main expertise areas:

Frontend Development
Testing & Quality Assurance
UI/UX Design Systems

5. Portfolio
Showcase of 6 major projects:

Helios Design System
Ad Quality Suite
Angular 15 Migration
Hackathon to Production MVP
FinTech Platform
PMCC Components

6. Contact

Contact form (Formspree integration)
Email and location information
Quick action buttons

🚀 Installation
Prerequisites

A modern web browser
Text editor (VS Code recommended)
Git (optional)

Local Setup

Clone the repository

bashgit clone https://github.com/nishant-katiyar/portfolio.git
cd portfolio

Open in browser

bash# Simply open index.html in your browser
# Or use Live Server extension in VS Code

Customize content


Update personal information in index.html
Replace placeholder images with your photos
Update contact form action with your Formspree ID

📦 Deployment
Deploy to Netlify

Via Drag & Drop

Go to Netlify
Drag and drop your project folder
Done! Your site is live


Via Git Integration

bash# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main

# Connect GitHub repo to Netlify
# Netlify will auto-deploy on every push
Deploy to Vercel
bashnpm i -g vercel
vercel
Deploy to GitHub Pages
bash# Push to gh-pages branch
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main

# Enable GitHub Pages in repository settings
🎨 Customization
Update Personal Information
In index.html, update:

Contact Details

html<a href="mailto:YOUR_EMAIL">YOUR_EMAIL</a>
<!-- Update phone number -->
(+91) YOUR_PHONE_NUMBER

Social Links

html<a href="YOUR_LINKEDIN_URL" target="_blank">
<a href="YOUR_GITHUB_URL" target="_blank">

Resume Link

html<a href="YOUR_RESUME_LINK" target="_blank" class="btn">Download Resume</a>

Contact Form

html<!-- Sign up at formspree.io and get your form ID -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
Update Images
  
html<!-- Home section image -->
<img width="600" height="731" alt="nishant_img37_600x731" src="https://github.com/user-attachments/assets/8da50a07-a58f-4339-b6dc-4395088ee1fa" />


<!-- About section image -->
<img width="600" height="731" alt="nishant_img51" src="https://github.com/user-attachments/assets/50c1870f-8037-4198-a626-9868ec451728" />


<!-- Portfolio images (400x300 recommended) -->
![portfolio1](https://github.com/user-attachments/assets/c6c7a4ae-f4f4-4cd8-8a28-08c21b9763a1)

Customize Colors
Update CSS variables in the <style> section:
css:root{
    --bg-color: #040405;          /* Background color */
    --second-bg-color: #323946;   /* Secondary background */
    --text-color: #fff;           /* Text color */
    --main-color: #0ef;           /* Accent color (cyan) */
}
Update Typed.js Strings
Modify the professions array:
javascriptconst professions = [
    { text: "Your Title 1", article: "a" },
    { text: "Your Title 2", article: "an" },
    { text: "Your Title 3", article: "a" },
    { text: "Your Title 4", article: "a" }
];
📱 Responsive Breakpoints

Desktop: 1200px and above
Laptop: 992px - 1199px
Tablet: 768px - 991px
Mobile: Below 768px
Small Mobile: Below 450px

🌟 Key Features Breakdown
Animations

Slide Animations: Elements slide in from different directions
Zoom Effect: Images zoom in on load
Float Effect: Continuous floating animation on profile image
Scroll Reveal: Elements reveal as you scroll
Typing Effect: Dynamic text typing animation

Interactive Elements

Sticky Navigation: Nav bar sticks to top on scroll
Active Links: Current section highlighted in navigation
Mobile Menu: Hamburger menu for mobile devices
Hover Effects: Smooth transitions on buttons and links
Tab Switching: Interactive resume section tabs
Portfolio Overlay: Hover effect on project cards

📧 Contact
Nishant Katiyar

📧 Email: inishantkatiyar@gmail.com
💼 LinkedIn: nishantkatiyar2803
🐱 GitHub: nishant-katiyar
🌐 Portfolio: nishant-katiyar.netlify.app

📄 License
This project is open source and available under the MIT License.

🙏 Acknowledgments

Typed.js for the typing animation
ScrollReveal.js for scroll animations
Boxicons for the beautiful icons
Google Fonts for Poppins font
Formspree for contact form backend


📈 Future Enhancements

 Add blog section
 Integrate analytics (Google Analytics)
 Add dark/light theme toggle
 Add more projects to portfolio
 Integrate with GitHub API for dynamic project showcase
 Add testimonials section
 Implement backend for contact form
 Add downloadable resume feature
 SEO optimization improvements
 Performance optimization


⭐ If you find this portfolio helpful, please consider giving it a star!
Made with ❤️ by Nishant Katiyar
Last Updated: January 2026
