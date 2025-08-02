document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll to the QR Code section if it exists (after generation)
    const qrCodeSection = document.getElementById('qr-code-section');
    if (qrCodeSection) {
        qrCodeSection.scrollIntoView({
            behavior: 'smooth', // Smooth animation
            block: 'start'      // Align the top of the element with the top of the viewport
        });
    }
});