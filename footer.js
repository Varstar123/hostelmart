/**
 * HOSTEL MART - Footer Component
 * Automatically injects the premium footer at the end of the body
 */

function injectFooter() {
    const footerStyles = `
    <style>
        .site-footer { 
            /* Slightly different shade than main bg to create separation */
            background: #f1f5f9; 
            border-top: 1px solid var(--card-border); 
            padding: 70px 5% 30px; 
            margin-top: 80px; 
            transition: all 0.4s ease; 
            width: 100%;
            box-sizing: border-box;
            box-shadow: 0 -10px 30px -15px rgba(0,0,0,0.03);
        }
        
        body.dark-mode .site-footer {
            background: #0b1120; /* Deeper navy than the main dark bg */
        }

        .footer-container { 
            max-width: 1200px; 
            margin: 0 auto; 
            display: grid; 
            grid-template-columns: 1.5fr 1fr; 
            gap: 40px; 
        }
        .footer-brand h2 { font-size: 22px; margin-bottom: 15px; color: var(--btn-border); }
        .footer-brand p { color: var(--text-muted); font-size: 14px; line-height: 1.7; max-width: 380px; }
        
        .footer-links { display: flex; justify-content: flex-end; gap: 80px; }
        .footer-links h4 { font-size: 12px; margin-bottom: 22px; color: var(--text-main); letter-spacing: 1.5px; opacity: 0.9; }
        .footer-links a { display: block; color: var(--text-muted); text-decoration: none; font-size: 14px; margin-bottom: 12px; transition: 0.2s; }
        .footer-links a:hover { color: #2563eb; transform: translateX(4px); }
        
        .footer-bottom { 
            max-width: 1200px; 
            margin: 60px auto 0; 
            padding-top: 30px; 
            border-top: 1px solid rgba(0,0,0,0.05); 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
        }
        
        body.dark-mode .footer-bottom { border-top-color: rgba(255,255,255,0.05); }

        .footer-bottom p { font-size: 12px; color: var(--text-muted); font-weight: 500; opacity: 0.8; }
        .footer-socials { display: flex; gap: 20px; }
        .footer-socials svg { 
            width: 20px; 
            height: 20px; 
            stroke: var(--text-muted); 
            fill: none; 
            stroke-width: 2; 
            stroke-linecap: round; 
            stroke-linejoin: round; 
            transition: all 0.3s ease; 
        }
        .footer-socials a:hover svg { stroke: #2563eb; transform: translateY(-3px); }
        
        @media (max-width: 768px) {
            .footer-container { grid-template-columns: 1fr; gap: 50px; }
            .footer-links { justify-content: flex-start; gap: 50px; flex-wrap: wrap; }
            .footer-bottom { flex-direction: column; gap: 25px; text-align: center; }
        }
    </style>`;

    const footerHTML = `
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-brand">
                <h2 class="logo-font">Hostel Mart</h2>
                <p>The premium marketplace designed exclusively for students. Discover curated items and verified stays within your campus community.</p>
            </div>
            <div class="footer-links">
                <div>
                    <h4 class="logo-font">Marketplace</h4>
                    <a href="index.html">Marketplace</a>
                    <a href="sell.html">List an Item</a>
                    <a href="hostel.html">Room Finder</a>
                </div>
                <div>
                    <h4 class="logo-font">Support</h4>
                    <a href="#">Safety Tips</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Hostel Mart. Premium Campus Commerce.</p>
            <div class="footer-socials">
                <a href="#"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                <a href="#"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            </div>
        </div>
    </footer>`;

    document.head.insertAdjacentHTML('beforeend', footerStyles);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', injectFooter);