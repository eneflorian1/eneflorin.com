# Ghid de Deploy și Debugging (Hostico)

## Problema: "Văd pagina default Hostico"

Dacă după deploy vezi în continuare "Site Under Construction" sau pagina Hostico:

1.  **Cauza:** În folderul `public_html` există un fișier (ex: `index.php` sau `default.html`) care are prioritate.
2.  **Rezolvare:**
    *   Intră în cPanel -> File Manager.
    *   Șterge fișierul `index.php` (cel implicit) sau `default.html`.
    *   Lasă doar fișierele tale (`index.html`, `_next`, etc.).

## Cum funcționează acest setup?

Acest proiect folosește **Static Export** (`output: 'export'` în `next.config.js`).

*   **NU** este nevoie de Node.js instalat pe serverul Hostico.
*   **NU** trebuie să rulezi `npm start` sau `npm run dev` pe server.
*   GitHub Actions compilează site-ul în HTML/CSS/JS și le copiază prin FTP.

## Automatizare completă (Periculos)

Dacă vrei ca GitHub să șteargă automat fișierele vechi (inclusiv pagina default Hostico):
1.  Deschide `.github/workflows/deploy.yml`.
2.  Setează `dangerous-clean-slate: true`.
3.  **Atenție:** Asta va șterge TOT din `public_html` la fiecare deploy.
