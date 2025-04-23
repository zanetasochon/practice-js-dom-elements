console.log('DOM');

const buttonSettings = {
  attr: {
    className: 'btn',
    title: 'super button',
  },
  css: {
    border: '1px solid #336699',
    padding: '5px 20px',
    color: '#444',
  },
  text: 'Click me!',
};

const button = document.createElement('button');

for (const key in buttonSettings) {
  if (key === 'attr') {
    for (const key in buttonSettings.attr) {
      if (key === 'className') {
        button.classList.add(key);
      } else {
        button.setAttribute(key, buttonSettings.attr[key]);
      }
    }
  }

  key === 'text' ? (button.textContent = buttonSettings.text) : undefined;

  if (key === 'css') {
    for (const key in buttonSettings.css) {
      if (key === 'border') {
        button.style[key] = buttonSettings.css[key];
      } else if (key === 'padding') {
        button.style[key] = buttonSettings.css[key];
      } else if (key === 'color') {
        button.style[key] = buttonSettings.css[key];
      }
    }
  }
}

const sectionEl = document.querySelector('section');
sectionEl.appendChild(button);
