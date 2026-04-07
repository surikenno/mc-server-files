const fs = require('fs');
const path = require('path');

// --- KONFIGURACJA ---
const foldersToScan = ['mods', 'resourcepacks']; 
const manifestName = 'manifest.json';
const baseUrl = 'https://raw.githubusercontent.com/surikenno/mc-server-files/main/';
const minecraftVersion = '1.20.1';
const modLoader = 'forge'; // Możesz zmienić na 'fabric'

function generateManifest() {
    console.log('--- GENEROWANIE MANIFESTU (Mods & Resourcepacks) ---');

    try {
        const manifestData = {
            minecraftVersion: minecraftVersion,
            modLoader: modLoader,
            files: []
        };

        foldersToScan.forEach(folder => {
            const folderPath = path.join(__dirname, folder);

            if (fs.existsSync(folderPath)) {
                const files = fs.readdirSync(folderPath);
                
                files.forEach(file => {
                    const fullPath = path.join(folderPath, file);
                    
                    // Sprawdzamy czy to plik (paczki zasobów MUSZĄ być w .zip)
                    if (fs.statSync(fullPath).isFile()) {
                        manifestData.files.push({
                            path: `${folder}/${file}`,
                            url: `${baseUrl}${folder}/${file}`
                        });
                        console.log(`+ [${folder.toUpperCase()}] Dodano: ${file}`);
                    }
                });
            } else {
                console.warn(`⚠️ Folder ${folder} nie istnieje w tej lokalizacji.`);
            }
        });

        // Zapis do manifest.json
        fs.writeFileSync(manifestName, JSON.stringify(manifestData, null, 4));
        
        console.log(`\n✅ GOTOWE! Plik ${manifestName} został zaktualizowany.`);
        console.log(`Łączna liczba plików: ${manifestData.files.length}`);

    } catch (err) {
        console.error('❌ Błąd krytyczny:', err.message);
    }
}

generateManifest();