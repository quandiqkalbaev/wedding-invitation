try {
	 AOS.init();
	const TARGET = new Date('2026-03-29T18:00:00');

	const pad = n => String(n).padStart(2, '0');

	function tick() {
		const diff = TARGET - Date.now();

		if (diff <= 0) {
			document.getElementById('grid').innerHTML =
				'<p class="done">Этот день настал ✦</p>';
			return;
		}

		document.getElementById('d').textContent = pad(
			Math.floor(diff / 86400000),
		);
		document.getElementById('h').textContent = pad(
			Math.floor((diff % 86400000) / 3600000),
		);
		document.getElementById('m').textContent = pad(
			Math.floor((diff % 3600000) / 60000),
		);
		document.getElementById('s').textContent = pad(
			Math.floor((diff % 60000) / 1000),
		);
	}

	tick();
	setInterval(tick, 1000);
} catch (e) {}

try {
	const audio = document.getElementById('music-bg');

	function startMusic() {
		audio.muted = false;
		audio.play();
	}

	document.addEventListener('click', startMusic, { once: true });
	document.addEventListener('touchstart', startMusic, { once: true });
} catch (e) {}

try {
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});
} catch (e) {}