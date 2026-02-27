function setGlobalFavicon() {
  // 1. FIND OR CREATE THE FAVICON LINK TAG
  let favicon = document.querySelector("link[rel~='icon']");
  
  if (!favicon) {
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    document.head.appendChild(favicon);
  }
  
  // 2. SET THE LOGO PATH (This fixes the Earth icon)
  favicon.href = 'hm.png';
}

// Keep this function so your existing profile button still works
window.toggleSidebar = function() {
  const sb = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sb && overlay) {
    sb.classList.toggle('active');
    overlay.classList.toggle('active');
  }
};

// Run only the favicon fix when the page loads
document.addEventListener('DOMContentLoaded', setGlobalFavicon);