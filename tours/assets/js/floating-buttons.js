// WhatsApp + Scroll-Up butonlarını otomatik olarak ekle
document.addEventListener("DOMContentLoaded", () => {
    const floatContainer = document.createElement("div");
    floatContainer.className = "floating-buttons";
    floatContainer.innerHTML = `
    <a href="https://wa.me/19732517610" class="whatsapp-float" target="_blank" aria-label="WhatsApp">
      <i class="ri-whatsapp-line"></i>
    </a>
    <a href="#" class="scrollup" id="scroll-up" aria-label="Yukarı Çık">
      <i class="ri-arrow-up-line scrollup__icon"></i>
    </a>
  `;
    document.body.appendChild(floatContainer);
});
