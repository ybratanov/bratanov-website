function openVideoModal(videoSrc) {
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('modal-video');

  video.src = videoSrc;
  modal.style.display = 'block';
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('modal-video');

  video.pause();
  video.currentTime = 0;
  modal.style.display = 'none';
}

// Затваряйте модалното прозорче, ако потребителят кликне извън видеото
window.onclick = function (event) {
  const modal = document.getElementById('video-modal');
  if (event.target === modal) {
    closeVideoModal();
  }
};