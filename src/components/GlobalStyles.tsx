export const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&display=swap');
    
    * { 
      box-sizing: border-box; 
      margin: 0; 
      padding: 0; 
    }
    
    :root {
      --gold: #c8912a;
      --gold-light: #f4a535;
      --dark: #2a1a0e;
      --cream: #faf7f2;
      --warm: #f5ede0;
      --rust: #9b3a1a;
      --green: #3a6b35;
    }
    
    body { 
      overflow-x: hidden; 
      font-family: 'Playfair Display', 'Georgia', serif;
      background: #faf7f2;
      min-height: 100vh;
      color: #2a1a0e;
    }
    
    .btn-gold {
      background: linear-gradient(135deg, #c8912a, #f4a535);
      color: white;
      border: none;
      padding: 12px 28px;
      border-radius: 4px;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 4px 15px rgba(200,145,42,0.3);
    }
    
    .btn-gold:hover { 
      transform: translateY(-2px); 
      box-shadow: 0 8px 25px rgba(200,145,42,0.45); 
    }
    
    .btn-gold:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .btn-outline {
      background: transparent;
      color: #c8912a;
      border: 2px solid #c8912a;
      padding: 11px 28px;
      border-radius: 4px;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .btn-outline:hover { 
      background: #c8912a; 
      color: white; 
    }
    
    .section-title {
      font-size: clamp(2rem, 5vw, 3.2rem);
      font-weight: 700;
      color: #2a1a0e;
      text-align: center;
      margin-bottom: 8px;
    }
    
    .section-sub {
      text-align: center;
      color: #8a6a50;
      font-family: 'Lato', sans-serif;
      font-size: 15px;
      margin-bottom: 50px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    
    .divider {
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #c8912a, #f4a535);
      margin: 16px auto 20px;
      border-radius: 2px;
    }
    
    input, select, textarea {
      width: 100%;
      padding: 12px 16px;
      border: 1.5px solid #e0d5c5;
      border-radius: 4px;
      font-family: 'Lato', sans-serif;
      font-size: 14px;
      background: white;
      color: #2a1a0e;
      transition: border-color 0.2s;
      outline: none;
    }
    
    input:focus, select:focus, textarea:focus { 
      border-color: #c8912a; 
    }
    
    label { 
      font-family: 'Lato', sans-serif; 
      font-size: 12px; 
      letter-spacing: 1px; 
      text-transform: uppercase; 
      color: #8a6a50; 
      margin-bottom: 6px; 
      display: block; 
      font-weight: 700; 
    }
    
    .card-hover { 
      transition: transform 0.3s, box-shadow 0.3s; 
    }
    
    .card-hover:hover { 
      transform: translateY(-6px); 
      box-shadow: 0 20px 50px rgba(42,26,14,0.15) !important; 
    }
    
    @keyframes fadeInUp { 
      from { opacity: 0; transform: translateY(30px); } 
      to { opacity: 1; transform: translateY(0); } 
    }
    
    @keyframes slideIn { 
      from { transform: translateX(100%); } 
      to { transform: translateX(0); } 
    }
    
    @keyframes pulse { 
      0%,100% { transform: scale(1); } 
      50% { transform: scale(1.05); } 
    }
    
    @keyframes shimmer { 
      0% { background-position: -1000px 0; } 
      100% { background-position: 1000px 0; } 
    }
    
    .fade-in { 
      animation: fadeInUp 0.6s ease forwards; 
    }
    
    ::-webkit-scrollbar { 
      width: 6px; 
    }
    
    ::-webkit-scrollbar-thumb { 
      background: #c8912a; 
      border-radius: 3px; 
    }
    
    /* utility container for consistent page padding */
    .container {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 5%;
    }

    /* make images scale nicely on small viewports */
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    @media (max-width: 768px) {
      .two-col {
        grid-template-columns: 1fr !important;
      }
    }

    @media (max-width: 768px) {
      .desktop-nav { 
        display: none !important; 
      }
      
      .mobile-menu-btn { 
        display: flex !important; 
      }
      /* reduce spacing on tiny screens */
      .container {
        padding: 0 4%;
      }
    }
    
    @media (min-width: 769px) {
      .mobile-menu-btn { 
        display: none !important; 
      }
      
      .mobile-nav { 
        display: none !important; 
      }
    }
  `}</style>
);
