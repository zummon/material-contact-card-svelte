import './app.css';
import '@material-tailwind/html/scripts/ripple.js'
import App from './App.svelte';

const app = new App({
	target: document.getElementById('app'),
});

export default app;
