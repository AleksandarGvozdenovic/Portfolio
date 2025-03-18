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
             <h6>2025</h6>
             <h5>Project Management App (React – Udemy Course Project)</h5>
             <p>
               Built an interactive application for managing projects and tasks, focusing on effective state management, dynamic UI updates, and responsive design principles learned through a React-focused course.
             </p>
           </li>

           <li>
            <h6>2025</h6>
            <h5>Tic Tac Toe (React – Udemy Course Project)</h5>
            <p>
              Developed an interactive Tic Tac Toe game during a React-focused course. Features dynamic rendering, intuitive interactions, and responsive design, demonstrating fundamental React skills.
            </p>
           </li>

           <li>
             <h6>2024</h6>
             <h5>GG Almont Website</h5>
             <p>
              Designed and developed a responsive website using HTML, CSS, and JavaScript. 
              Focused on creating an intuitive user interface and ensuring accessibility across different devices.
             </p>
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
              <h5>Udemy Course: React – The Complete Guide</h5>
              <p>Focusing on React fundamentals, component-based architecture, state management, hooks, routing, and building responsive user interfaces.</p>
            </li>
            <li>
              <h5>JavaScript Algorithms and Data Structures</h5>
              <p>Focusing on JavaScript, algorithms, data structures, and problem-solving techniques.</p>
            </li>
            <li>
              <h5>Udemy Course: The Complete JavaScript Course </h5>
              <p>Covered advanced JavaScript concepts, including ES6+, asynchronous programming, and DOM manipulation.</p>
              <p>(2024)</p>
            </li>
            <li>
              <h5>Bachelor's Degree in Computer Science and Informatics</h5>
              <p>Faculty of Technical Sciences</p>
              <p>(2017 - 2021)</p>
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
           <li><h6>Tailwind CSS</h6></li>
           <li><h6>JavaScript (ES6+)</h6></li>
           <li><h6>React</h6></li>
           <li><h6>SQL</h6></li>
           <li><h6>GitHub</h6></li>
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
             I am a motivated and detail-oriented aspiring software developer with a Bachelor's degree in Computer Science and Informatics. 
             My educational background provided me with a solid understanding of software development principles, algorithms, and data structures. 
             Through personal and course projects, I have gained hands-on experience with JavaScript, React, and responsive web design. 
             I am passionate about continuous learning and expanding my skills in both frontend and backend development.
             Eager to contribute to innovative projects, I thrive in collaborative, growth-oriented team environments.
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
