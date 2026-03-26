const sections = {
accueil: `
        <div class="section-container" style="padding: 10px; box-sizing: border-box;">
            <img src="img/actuel.jpeg" class="img-portrait" 
                 style="width: 100%; max-width: 220px; height: auto; display: block; margin: 0 auto 20px; border-radius: 20px; border: 3px solid var(--accent); object-fit: cover; box-sizing: border-box;">
            
            <h1 style="text-align:center; font-size: 2.3rem;">Aminata <span style="color:var(--accent)">Sita Camara</span></h1>
            <p style="text-align:center; color:var(--green); font-weight:bold;">● Étudiante en BUT 1 Informatique | Aix-Marseille Université (AMU)</p>
            
            <div class="card" style="margin-top:30px; text-align:center; width: 100%; box-sizing: border-box;">
               <div class="hero-content-half">
                <div class="content-wrapper">
                    <span class="status-indicator" style="color: var(--green); font-size: 0.9rem;">● Disponible pour de nouveaux défis</span>
                    <p class="bio-text" style="margin-top: 15px; line-height: 1.6;">
                        Future experte en développement logiciel passionnée par l'élégance du code et l'innovation numérique. 
                        Mon parcours est un pont entre mes racines en Guinée dans le domaine de la nouvelle technologie de l'information et de la communication (NTIC) et mon ambition technologique en France.
                        Mon parcours est guidé par la rigueur technique et une vision créative du numérique. 
                        Bienvenue dans mon univers. 🦁.
                    </p>
                    <div class="cta-links" style="margin-top: 25px; display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                        <a href="assets/mon-cv.pdf" target="_blank" class="main-link" style="padding: 10px 20px; background: var(--accent); color: white; border-radius: 8px; text-decoration: none; font-weight: bold;">Télécharger mon CV</a>
                        <a href="https://github.com/AminataCamara24" target="_blank" class="secondary-link" style="padding: 10px 20px; border: 1px solid var(--accent); color: var(--text); border-radius: 8px; text-decoration: none;">GitHub</a>
                    </div>
                </div>
            </div>
            </div>
        </div>`,

    formations: `
        <div class="section-container">
            <h2 style="color:var(--accent); margin-bottom:20px;">Mon Parcours</h2>
            <div class="card">
                    <span class="badge">Actuel</span>
                    <span class="date">2025 - 2026</span>
                    <h3>BUT Informatique (B.U.T 1)</h3>
                    <p class="school">Aix-Marseille Université (AMU) - France</p>
                    <p class="desc">Algorithmique, programmation C++, gestion de bases de données SQL et architectures systèmes.</p>
            </div>
            <div class="card">
                    <span class="date">2023-2025</span>
                    <h3>Licence Informatique</h3>
                    <p class="school">Université Gamal Abdel Nasser de Conakry (UGANC) - Guinée</p>
                    <p class="desc">Bases de l'informatique et Nouvelles Technologies de l'Information (NTIC).</p>
            </div>
            <div class="card">
                    <span class="date">2022-2023</span>
                    <h3>Baccalauréat Scientifique</h3>
                    <p class="school">Complexe Scolaire et Universitaire INSET - Guinée</p>
                    <p class="desc">Obtention du diplôme avec mention.</p>
            </div>
        </div>`,

   competences: `
<div class="section-container animate-in">
    <h2 style="color:var(--accent); margin-bottom:25px;">Expertise Technique & SAÉ</h2>
    
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:20px;">
        
        <div class="card" style="border-top: 3px solid var(--accent);">
            <h3 style="display:flex; align-items:center; gap:10px; color:var(--accent);">
                <span style="font-size:1.5rem;">💻</span> Développement
            </h3>
            <div style="margin-top:15px; display:flex; flex-wrap:wrap; gap:8px;">
                <span style="background:rgba(121, 40, 202, 0.1); padding:5px 12px; border-radius:15px; font-size:0.9rem; border:1px solid var(--accent);">C++</span>
                <span style="background:rgba(0, 112, 243, 0.1); padding:5px 12px; border-radius:15px; font-size:0.9rem; border:1px solid #0070f3;">SQL / Postgres</span>
                <span style="background:rgba(0, 255, 136, 0.1); padding:5px 12px; border-radius:15px; font-size:0.9rem; border:1px solid #00ff88;">JavaScript (ES6+)</span>
                <span style="background:rgba(255, 255, 255, 0.05); padding:5px 12px; border-radius:15px; font-size:0.9rem; border:1px solid #ccc;">Python</span>
            </div>
        </div>

        <div class="card" style="border-top: 3px solid #0070f3;">
            <h3 style="display:flex; align-items:center; gap:10px; color:#0070f3;">
                <span style="font-size:1.5rem;">✨</span> Innovation & Web 3D
            </h3>
            <div style="margin-top:15px; display:flex; flex-wrap:wrap; gap:8px;">
                <span style="background:rgba(168, 85, 247, 0.1); padding:5px 12px; border-radius:15px; font-size:0.9rem; border:1px solid #a855f7;">Three.js</span>
                <span style="background:rgba(6, 182, 212, 0.1); padding:5px 12px; border-radius:15px; font-size:0.9rem; border:1px solid #06b6d4;">React Fiber</span>
                <span style="background:rgba(255, 255, 255, 0.05); padding:5px 12px; border-radius:15px; font-size:0.9rem; border:1px solid #ccc;">UI / UX Design</span>
            </div>
        </div>
    </div>

    <div class="card" style="margin-top:25px; border-left: 6px solid var(--accent); background: linear-gradient(to right, rgba(121, 40, 202, 0.05), transparent);">
        <h3 style="margin-bottom:5px; color:var(--accent);">Situations d'Apprentissage Évaluées (SAÉ)</h3>
        <p style="font-size:0.85rem; opacity:0.7; margin-bottom:20px; font-style:italic;">Projets académiques concrets mettant en pratique les compétences du BUT Informatique.</p>
        
        <div style="display:flex; flex-direction:column; gap:15px;">
            <div style="padding-left:15px; border-left: 2px solid rgba(255,255,255,0.1);">
                <p><strong>SAÉ 1.01 :</strong> Implémentation d'un besoin client (Langage C++)</p>
            </div>
            <div style="padding-left:15px; border-left: 2px solid rgba(255,255,255,0.1);">
                <p><strong>SAÉ 1.02 :</strong> Comparaison et optimisation d'algorithmes (Analyse de tris)</p>
            </div>
            <div style="padding-left:15px; border-left: 2px solid rgba(255,255,255,0.1);">
                <p><strong>SAÉ 1.04 :</strong> Création et gestion d'une base de données SQL (Postgres)</p>
            </div>
        </div>
    </div>
</div>`,

projets: `
    <div class="card" style="border-top: 4px solid #a855f7;">
        <span style="float:right; font-size:0.8rem; background:#a855f7; padding:2px 8px; border-radius:10px; color:white;">Innovation 3D</span>
        <h3>Projet Hypoxia</h3>
        <p style="margin:10px 0;">Visualisation interactive de l'impact écologique du numérique. Création d'un environnement 3D avec effets de résonance et échos numériques pour matérialiser l'empreinte invisible des données.</p>
        <p><strong>Rôle :</strong> Développeuse Environnement (Team Nebula)</p>
        <p><strong>Technologies :</strong> React Three Fiber, Three.js, GSAP</p>
        
        <a href="https://nebula-gray-seven.vercel.app/" target="_blank" style="display: inline-block; margin-top: 15px; padding: 8px 15px; background: #a855f7; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 0.9rem;">Voir le projet live 🚀</a>
    </div>

    <div class="card" style="border-top: 4px solid var(--green); margin: 20px 0;">
        <span style="float:right; font-size:0.8rem; background:var(--green); padding:2px 8px; border-radius:10px; color:white;">Parcours Licence</span>
        <h3>Formation & Expertise NTIC</h3>
        <p style="margin:10px 0;">Fondations techniques solides acquises à l'Université Gamal Abdel Nasser de Conakry (UGANC).</p>
        
        <div style="display: flex; align-items: center; gap: 20px; margin-top: 15px; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 10px;">
            <img src="img/UGANC.jpeg" alt="Logo UGANC" style="height: 120px; width: auto; border-radius: 40px;">
             <strong>UGANC & Centre Informatique
             Conakry, Guinée</strong><br>
                
            <img src="img/CI.jpeg" alt="Logo Centre Informatique" style="height: 120px; width: auto; border-radius: 40px;">
            <div style="font-size: 0.85rem; opacity: 0.9;">
               
            </div>
        </div>
    </div>

    <div class="card" style="border-top: 4px solid #ff4500;">
        <span style="float:right; font-size:0.8rem; background:#ff4500; padding:2px 8px; border-radius:10px; color:white;">Systèmes Embarqués</span>
        <h3>Détecteur de Chaleur Intelligent</h3>
        <p style="margin:10px 0;">Conception d'un système de sécurité thermique avec déclenchement automatique d'un buzzer en cas de dépassement de seuil de température.</p>
        <p><strong>Technologies :</strong> Arduino (C++), Capteur LM35, Buzzer</p>
    </div>

    <div class="card" style="border-top: 4px solid #00ced1;">
        <span style="float:right; font-size:0.8rem; background:#00ced1; padding:2px 8px; border-radius:10px; color:white;">IoT / Robotique</span>
        <h3>Poubelle Intelligente</h3>
        <p style="margin:10px 0;">Réalisation d'un dispositif automatique d'ouverture et de gestion des déchets via des capteurs de proximité.</p>
        <p><strong>Technologies :</strong> Microcontrôleur, Capteur Ultrason, Servomoteur</p>
    </div>`,
    contact: `
<div class="section-container animate-in">
    <h2 style="color:var(--accent); margin-bottom:25px; font-size:2rem;">Prête pour de nouveaux défis 🦁</h2>
    
    <div class="card contact-grid" style="padding:0; overflow:hidden; display:flex; flex-wrap:wrap; border: 1px solid rgba(121, 40, 202, 0.4);">
        
        <div class="contact-photo-box" style="flex:1; min-width:250px; background:var(--accent);">
            <img src="img/dernier.jpeg" style="width:100%; height:100%; object-fit:cover; display:block; min-height:350px;">
        </div>

        <div class="contact-info-box" style="flex:1.5; padding:30px; min-width:300px; display:flex; flex-direction:column; justify-content:center; gap:15px;">
            <h3 style="color:var(--green); margin-bottom:10px; font-size:1.5rem;">Parlons Innovation</h3>
            
            <p><span style="color:var(--accent); font-size:1.2rem;">📧</span> <strong>Email-Personnel :</strong> <br> <span style="opacity:0.9;">aminatasitacamara190@gmail.com</span></p>
            
            <p><span style="color:var(--accent); font-size:1.2rem;">🎓</span> <strong>Email-Universitaire :</strong> <br> <span style="opacity:0.9;">aminata-sita.CAMARA@etu.univ-amu.fr</span></p>
            
            <p><span style="color:var(--accent); font-size:1.2rem;">📍</span> <strong>Localisation :</strong> <br> <span style="opacity:0.9;">Nîmes - France</span></p>
            
            <p><span style="color:var(--accent); font-size:1.2rem;">🦁</span> <strong>Totem :</strong> <br> <span style="font-weight:bold; color:var(--accent);">La Lionne</span></p>
            
            <div style="margin-top:20px; padding-top:15px; border-top:1px solid rgba(255,255,255,0.1); font-style:italic; font-size:0.9rem; opacity:0.7;">
                "Construire le futur, un pixel à la fois."
            </div>
        </div>
    </div>
</div>`
    
};

function showSection(id) {
    const main = document.getElementById('main-content');
    if (sections[id]) {
        main.innerHTML = sections[id];
        document.getElementById('nav-menu').classList.remove('active');
        window.scrollTo(0,0);
    }
}

function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}

const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = () => {
    document.body.classList.toggle('light-mode');
};

window.onload = () => showSection('accueil');