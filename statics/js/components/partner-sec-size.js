function adjustTestBoxHeight() {
    // partnyor-item yüksekliğini al
    const partnyorItem = document.querySelector('.partnyor-item');
    const partnyorTestBox = document.querySelector('.partnyor-test-box');

    if (partnyorItem && partnyorTestBox) {
        const partnyorItemHeight = partnyorItem.offsetHeight; // Yüksekliği al
        partnyorTestBox.style.height = `${partnyorItemHeight}px`; // Test kutusuna uygula
    }
}

// Sayfa yüklendiğinde ve ekran boyutu değiştiğinde yüksekliği ayarla
window.addEventListener('load', adjustTestBoxHeight);  // Sayfa yüklendiğinde
window.addEventListener('resize', adjustTestBoxHeight);