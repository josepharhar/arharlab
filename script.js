const nav = document.querySelector('nav');
const navItems = [
  ['index.html', 'Home'],
  ['research.html', 'Research'],
  ['team.html', 'Team'],
  ['publications.html', 'Publications'],
  ['join.html', 'Join us'],
  ['contact.html', 'Contact']
];

function isCurrentUrl(url) {
  if (location.pathname.endsWith(url)) {
    return true;
  }
  if (location.pathname == '/' && url.endsWith('index.html')) {
    return true;
  }
  return false;
}

for (const navItem of navItems) {
  const a = document.createElement('a');
  a.href = navItem[0];
  a.textContent = navItem[1];
  if (isCurrentUrl(navItem[0])) {
    a.classList.add('active');
  }
  nav.appendChild(a);
}


const navDialog = document.createElement('dialog');
navDialog.classList.add('navdialog');
navDialog.innerHTML = `
<div class=twocolumns>
  <div class=navcol></div>
  <div class=close>
    <button>x</button>
  </div>
</div>
`;

navDialog.querySelector('button').onclick = () => navDialog.close();

const navcol = navDialog.querySelector('.navcol');
for (const navItem of navItems) {
  const a = document.createElement('a');
  a.href = navItem[0];
  a.textContent = navItem[1];
  if (isCurrentUrl(navItem[0])) {
    a.classList.add('active');
  }
  const div = document.createElement('div');
  navcol.appendChild(div);
  div.appendChild(a);
}

document.body.appendChild(navDialog);


const navButton = document.createElement('button');
navButton.textContent = 'Navigation';
navButton.classList.add('navbutton');
navButton.onclick = () => navDialog.showModal();
nav.appendChild(navButton);
