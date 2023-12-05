import '@shoelace-style/shoelace/dist/themes/dark.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/');

Meteor.startup(() => {
    document.documentElement.setAttribute('class', 'sl-theme-dark');
  });