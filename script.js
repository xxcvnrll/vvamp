const newYear = new Date("January 1, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = newYear - now;

  if (diff <= 0) {
    document.getElementById("timer").innerText = "🎉 С НОВЫМ ГОДОМ!!! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerText =
    `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}, 1000);

function openGift() {
  document.getElementById("secret").classList.remove("hidden");
  document.getElementById("img1").classList.remove("hidden");
  document.getElementById("img2").classList.remove("hidden");
}

