# 🛠️ Minecraft Server Files - Modpack Klasowy

To repozytorium pełni rolę **zdalnego serwera plików** dla dedykowanego launchera. Znajdują się tutaj wszystkie mody, konfiguracje oraz silnik gry, które są automatycznie synchronizowane z aplikacją gracza.

---

## 🚀 Specyfikacja Techniczna
* **Wersja Gry:** `1.20.1`
* **Silnik:** `Forge`
* **Wersja Loadera:** `47.2.0`
* **Java:** `17`

---

## 📁 Struktura Repozytorium
* `mods/` - Wszystkie modyfikacje (`.jar`) wymagane do wejścia na serwer.
* `config/` - Pliki konfiguracyjne modów (synchronizowane z folderem gracza).
* `manifest.json` - **Główny plik sterujący.** Zawiera listę plików, ich sumy kontrolne (SHA1) oraz instrukcje dla launchera.
* `gen.js` - Skrypt automatyzujący generowanie manifestu.

---

## 🛠️ Jak zaktualizować paczkę modów?

Jeśli dodajesz nowego moda lub zmieniasz wersję istniejącego, wykonaj poniższe kroki:

1.  **Dodaj plik:** Wrzuć nowy plik `.jar` do folderu `/mods`.
2.  **Generuj manifest:** Otwórz terminal w tym folderze i wpisz:
    ```bash
    node gen.js
    ```
    *Skrypt automatycznie obliczy hashe SHA1 i zaktualizuje plik `manifest.json`.*
3.  **Wyślij na GitHub:**
    * Otwórz **GitHub Desktop**.
    * Wpisz nazwę zmiany (np. `Dodano JEI`).
    * Kliknij `Commit to main`, a następnie `Push origin`.

---

## 🔗 Linki dla Launchera
Launcher korzysta z bezpośrednich linków (RAW), aby pobierać pliki:
* **Manifest:** `https://raw.githubusercontent.com/surikenno/mc-server-files/main/manifest.json`

---

## ⚠️ Uwagi
* Zawsze sprawdzaj, czy po wygenerowaniu manifestu nazwy plików w `manifest.json` zgadzają się z tymi w folderze `mods/`.
* Limit wielkości pojedynczego pliku na GitHub to **100 MB**.