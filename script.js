const scroller = document.querySelector('.scroller-container');
const sections = document.querySelectorAll('.page-section');
const navNumbers = document.querySelectorAll('.numbers span');

scroller.addEventListener('scroll', () => {
  let current = '';
  const scrollPos = scroller.scrollTop + (scroller.clientHeight / 2);

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop) {
      current = section.getAttribute('id');
    }
  });

  navNumbers.forEach(span => {
    span.classList.remove('active');
    if (span.getAttribute('data-section') === current) {
      span.classList.add('active');
    }
  });
});

navNumbers.forEach(span => {
    span.addEventListener('click', () => {
        const id = span.getAttribute('data-section');
        const target = document.getElementById(id);
        
        scroller.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

const section2 = document.querySelector('.section-2');
const pony = document.querySelector('.heart-photo');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      section2.classList.add('animate');  
      pony.classList.add('animate'); 
    } else {
      section2.classList.remove('animate'); 
      pony.classList.remove('animate');
    }
  });
}, { threshold: 0.3 }); 

observer.observe(section2);