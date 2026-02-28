let currentPage = 0;
const imagePages = ['img/Seite1.jpg', 'img/Seite2.jpg', 'img/Seite3.jpg', 'img/Seite4.jpg', 'img/Seite5.jpg'];

window.addEventListener('message', function(event) {
    if (event.data.action === "open") {
        document.body.style.display = "flex";
        currentPage = 0;
        updatePages();
    }
});

function updatePages() {
    const leftPage = document.getElementById('left-page');
    const rightPage = document.getElementById('right-page');

    leftPage.style.backgroundImage = `url(${imagePages[currentPage * 2]})`;
    
    if (currentPage === 2) { 
        // Letzte Seite: Rein textbasiert auf beigem Grund
        rightPage.style.backgroundImage = 'none';
        rightPage.style.backgroundColor = '#e3d5c1'; 
        rightPage.innerHTML = `
            <div class="allergen-page">
                <section>
                    <h4>LEGENDE: ALLERGENE</h4>
                    <ul>
                        <li>1. Glutenhaltiges Getreide (Weizen) sowie daraus hergestellte Erzeugnisse</li>
                        <li>2. Krebstiere und Krebstiererzeugnisse</li>
                        <li>3. Eier und Eierzeugnisse</li>
                        <li>4. Fisch und Fischerzeugnisse</li>
                        <li>5. Erdnüsse und Erdnusserzeugnisse</li>
                        <li>6. Soja und Sojaerzeugnisse</li>
                        <li>7. Milch und Milcherzeugnisse (einschließlich Laktose)</li>
                        <li>8. Schalenfrüchte (Walnuss, Haselnuss, Mandeln, Cashew)</li>
                        <li>9. Sellerie und Sellerieerzeugnisse</li>
                        <li>10. Senf und Senferzeugnisse</li>
                        <li>11. Alkohol</li>
                        <li>12. Schwefeldioxid und Sulfite (> 10 mg/kg oder 10 mg/l)</li>
                        <li>13. Lupine</li>
                        <li>14. Sesamsamen und Sesamsamenerzeugnisse</li>
                        <li>15. Weichtiere (Mollusken) sowie Erzeugnisse daraus</li>
                        <li>16. Sulfite</li>
                    </ul>
                </section>
                <section>
                    <h4>ZUSATZSTOFFE</h4>
                    <div class="zusatz-grid">
                        <span>A. mit Farbstoff</span> <span>B. mit Konservierungsstoff</span>
                        <span>C. mit Antioxidationsmittel</span> <span>D. mit Geschmacksverstärker</span>
                        <span>E. geschwefelt</span> <span>F. geschwärzt</span>
                        <span>G. gewachst</span> <span>H. mit Süßungsmittel(n)</span>
                        <span>I. mit Säuerungssmittel(n)</span>
                    </div>
                </section>
            </div>
        `;
    } else {
        rightPage.style.backgroundImage = `url(${imagePages[(currentPage * 2) + 1]})`;
        rightPage.innerHTML = '';
    }
}

function changePage(dir) {
    if (dir === 1 && currentPage < 2) currentPage++;
    if (dir === -1 && currentPage > 0) currentPage--;
    updatePages();
}

document.onkeydown = function(data) {
    if (data.which == 27) {
        fetch(`https://${GetParentResourceName()}/close`, { method: 'POST' });
        document.body.style.display = "none";
    }
};