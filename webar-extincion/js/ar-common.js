/* ===== WildAR — ar-common.js ===== */
/* Shared logic for all AR species pages */

'use strict';

let arStarted = false;
let speechSynth = window.speechSynthesis;
let currentUtterance = null;
let isPlaying = false;

// ─── Start AR Flow ───
function startAR() {
  const permScreen = document.getElementById('cam-permission');
  const loadingScreen = document.getElementById('loading-screen');
  const arScene = document.getElementById('ar-scene');

  permScreen.classList.add('hidden');
  loadingScreen.classList.remove('hidden');

  // Request camera access
  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false })
    .then(() => {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        arScene.classList.remove('hidden');
        arStarted = true;
        setupMarkerEvents();
      }, 1800);
    })
    .catch((err) => {
      console.warn('Camera error:', err);
      // Still show scene (browser will request again)
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        arScene.classList.remove('hidden');
        arStarted = true;
        setupMarkerEvents();
      }, 1800);
    });
}

// ─── Marker Events ───
function setupMarkerEvents() {
  const markers = document.querySelectorAll('a-marker');
  const hint = document.getElementById('ar-hint');

  markers.forEach(marker => {
    marker.addEventListener('markerFound', () => {
      if (hint) hint.classList.add('hidden');
      document.getElementById('info-panel').style.borderTopColor = 'rgba(200,72,10,0.5)';
    });
    marker.addEventListener('markerLost', () => {
      if (hint) hint.classList.remove('hidden');
    });
  });
}

// ─── Tab Navigation ───
function showTab(tabId, btn) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  // Show selected
  const target = document.getElementById('tab-' + tabId);
  if (target) target.classList.add('active');
  if (btn) btn.classList.add('active');
}

// ─── Audio (Text-to-Speech) ───
function toggleAudio() {
  const btn = document.getElementById('audio-btn');
  const label = document.getElementById('audio-label');

  if (isPlaying) {
    stopAudio();
    return;
  }

  // Get species text from page
  const text = (typeof SPECIES_TEXT !== 'undefined')
    ? SPECIES_TEXT
    : 'Información no disponible.';

  if ('speechSynthesis' in window) {
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'es-MX';
    currentUtterance.rate = 0.9;
    currentUtterance.pitch = 1;

    // Pick Spanish voice if available
    const voices = speechSynth.getVoices();
    const spanishVoice = voices.find(v =>
      v.lang.startsWith('es') && (v.lang.includes('MX') || v.lang.includes('419'))
    ) || voices.find(v => v.lang.startsWith('es'));
    if (spanishVoice) currentUtterance.voice = spanishVoice;

    currentUtterance.onend = () => {
      isPlaying = false;
      btn.classList.remove('playing');
      label.textContent = 'Escuchar información';
    };
    currentUtterance.onerror = () => {
      isPlaying = false;
      btn.classList.remove('playing');
      label.textContent = 'Escuchar información';
    };

    speechSynth.speak(currentUtterance);
    isPlaying = true;
    btn.classList.add('playing');
    label.textContent = 'Detener audio ◼';
  } else {
    label.textContent = 'Audio no soportado';
  }
}

function stopAudio() {
  speechSynth.cancel();
  isPlaying = false;
  const btn = document.getElementById('audio-btn');
  const label = document.getElementById('audio-label');
  if (btn) btn.classList.remove('playing');
  if (label) label.textContent = 'Escuchar información';
}

// ─── Panel drag (mobile) ───
(function setupPanelDrag() {
  window.addEventListener('DOMContentLoaded', () => {
    const panel = document.getElementById('info-panel');
    if (!panel) return;

    let startY = 0;
    let startScroll = 0;

    panel.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
      startScroll = panel.scrollTop;
    }, { passive: true });

    // Allow swipe down to minimize when at top
    panel.addEventListener('touchmove', (e) => {
      const dy = e.touches[0].clientY - startY;
      if (panel.scrollTop === 0 && dy > 60) {
        panel.style.transform = `translateY(${Math.min(dy - 60, 200)}px)`;
      }
    }, { passive: true });

    panel.addEventListener('touchend', (e) => {
      panel.style.transform = '';
    }, { passive: true });
  });
})();

// ─── Stop audio on page hide ───
document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopAudio();
});
