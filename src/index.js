import './styles.css';
import * as displayController from './scripts/displayController';
import Icon from './images/github.svg';

const githubIcon = new Image();
githubIcon.src = Icon;
githubIcon.classList.add('icon');
githubIcon.alt = 'github icon';

document.querySelector('body > footer > p > a').appendChild(githubIcon);

// User will click load Game
displayController.loadStartScreen();
