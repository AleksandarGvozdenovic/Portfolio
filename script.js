//=================FLOATING NAV==================

const floatingNavs=document.querySelectorAll('.floating__nav a');

const removeActiveClass=()=>{
  floatingNavs.forEach(nav => {
    nav.classList.remove('active')
  })
}

floatingNavs.forEach(nav =>{
  nav.addEventListener('click',() =>{
    removeActiveClass();
    nav.classList.add('active')
  })
})


//=================RESUME==================

const resumeRight = document.querySelector('.resume__right');

//EXPERIENCE
const experienceContent = `
          <h4>Experience</h4>  
          <p>
            I have worked on personal and freelance projects to build practical skills in web development. Here are a few highlights:
          </p>
          <ul>
            <li>
              <h6>2024</h6>
              <h5>GG Almont Website</h5>
              <p>
                Designed and developed a responsive website using HTML, CSS, and JavaScript. 
                Focused on creating an intuitive user interface and ensuring accessibility across different devices.
              </p>
            </li>
            <li>
              <h6>2025</h6>
              <h5>Weather App</h5>
              <p>Built a weather application that fetches live data using a public API and features a user-friendly interface.</p>
            </li>
            <li>
              <h6>2025</h6>
              <h5>Time Tracker</h5>
              <p>Developed a time-tracking tool to manage tasks and improve productivity using JavaScript and local storage.</p>
            </li>
          </ul>`


const experienceBtn= document.querySelector('.experience__btn');
experienceBtn.addEventListener('click',()=>{
  resumeRight.innerHTML = experienceContent; 
  resumeRight.className="resume__right";
  experienceBtn.classList.add('primary');
  aboutBtn.classList.remove('primary');   
  skillsBtn.classList.remove('primary'); 
  educationBtn.classList.remove('primary'); 
});
resumeRight.innerHTML = experienceContent ;    



 //EDUCATION

 const educationBtn=document.querySelector('.education__btn');
 const educationContent=`
          <h4>Education</h4>  
          <ul>
            <li>
              <h5>Bachelor's Degree in Computer Science and Informatics</h5>
              <p>Faculty of Technical Sciences</p>
              <p>(2017 - 2021)</p>
            </li>
            <li>
              <h5>Udemy Course: The Complete JavaScript Course </h5>
              <p>Covered advanced JavaScript concepts, including ES6+, asynchronous programming, and DOM manipulation.</p>
              <p>(2024)</p>
            </li>
            <li>
              <h5>Udemy Course: Node.js, Express, MongoDB</h5>
              <p>Focusing on back-end development with Node.js, database management, and RESTful API design.</p>
              <p>(present)</p>
            </li>
          </ul>`;
 
 educationBtn.addEventListener('click',()=>{
   resumeRight.innerHTML = educationContent;
   resumeRight.className = 'resume__right education';
   educationBtn.classList.add('primary');
   aboutBtn.classList.remove('primary');   
   skillsBtn.classList.remove('primary'); 
   experienceBtn.classList.remove('primary'); 
 });


  //Skills

 const skillsBtn=document.querySelector('.skills__btn');
 const skillsContent=`
          <h4>Skills</h4>  
          <p>
            Below are the technologies and tools I am familiar with:
          </p>
          <ul>
            <li><h6>HTML5</h6></li>
            <li><h6>CSS3</h6></li>
            <li><h6>SQL</h6></li>
            <li><h6>GitHub</h6></li>
            <li><h6>JS</h6></li>
          </ul>`;
 
 skillsBtn.addEventListener('click',()=>{
   resumeRight.innerHTML = skillsContent;
   resumeRight.className= 'resume__right skills';
   skillsBtn.classList.add('primary');
   aboutBtn.classList.remove('primary');   
   educationBtn.classList.remove('primary'); 
   experienceBtn.classList.remove('primary'); 
 });


   //ABOUT ME

 const aboutBtn=document.querySelector('.about__btn');
 const aboutContent=`
          <h4>About me</h4>  
          <p>
            I am a motivated and detail-oriented aspiring software developer with a passion for solving problems and creating impactful digital solutions. 
            My educational background has given me a solid foundation in object-oriented programming, SQL, and software engineering principles,
            while my personal projects have allowed me to gain hands-on experience with JavaScript and web development.
            I am eager to learn, grow, and contribute to innovative projects as part of a collaborative team.
          </p>
         `;
 
 aboutBtn.addEventListener('click',()=>{
   resumeRight.innerHTML = aboutContent;
   resumeRight.className= 'resume__right about';
   aboutBtn.classList.add('primary');
   skillsBtn.classList.remove('primary');   
   educationBtn.classList.remove('primary'); 
   experienceBtn.classList.remove('primary'); 
 });


 //=================MIX(projects section)==================
const buttons = document.querySelectorAll('.projects__categories .btn');
const projects = document.querySelectorAll('.project');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    projects.forEach(project => {
      if (filter === '*' || project.classList.contains(filter.substring(1))) {
        project.style.display = 'block'; 
      } else {
        project.style.display = 'none'; 
      }
    });

    
    buttons.forEach(btn => btn.classList.remove('primary'));
    button.classList.add('primary');
  });
});

//==================================THEME==================
const themeToggler = document.querySelector('.nav__theme-btn');
themeToggler.addEventListener('click',() => {
  document.body.classList.toggle('dark-theme-variables')
  if(document.body.classList == ''){
    themeToggler.innerHTML=`<i class="uil uil-moon"></i>`
    window.localStorage.setItem('portfolio-theme', '');
  } else{
    themeToggler.innerHTML=`<i class="uil uil-sun"></i>`
    window.localStorage.setItem('portfolio-theme', 'dark-theme-variables'); 
  }
});

//use theme from local storage on page load
const bodyClass = window.localStorage.getItem('portfolio-theme');
document.body.className = bodyClass;
