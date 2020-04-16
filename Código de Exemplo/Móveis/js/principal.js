var banners =
["Do lixo ao Luxo", "Reaproveitar é Aproveitar"];
var bannerAtual = 0;
function trocaBanner() {
bannerAtual = (bannerAtual + 1) % 2;
document.querySelector('h2#mensagem').textContent =
banners[bannerAtual];
}
setInterval(trocaBanner, 1000);
