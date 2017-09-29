//alert('connected');

//👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

//function highlightLink()  {
//  const linkCoords = this.getBoundingClientRect();
//  console.log(linkCoords);
//  highlight.style.width = `${linkCoords.width}px`; 
//  highlight.style.height = `${linkCoords.height}px`;
//  highlight.style.transform = `transform($//{linkCoords.left}px, ${linkCoords.top}px)`;
//}

triggers.forEach(a => a. addEventListener('mouseenter', highlightLink));

