/* Guida della Suite Allenatore: pulsante "?" accanto a Home e quaderno sfogliabile dell'app.
   Uso: <script src="../guida/guida.js" data-app="lavagna"></script> prima di </body>.
   Le pagine sono le stesse della landing; le immagini sono in guida/img (funziona anche senza internet).
   Per rifare le schermate: .claude/imgwork/tour.html e tour2.html (vedi memoria del progetto). */
(function () {
  var me = document.currentScript;
  if (!me) return;
  var app = me.getAttribute('data-app');
  var base = new URL('.', me.src).href;
  var BOOKS = {"lavagna": [{"img": "img/lav-1.webp", "t": "Imposta la seduta", "d": "Data, categoria, numero della seduta, durata, obiettivo e materiale: li scrivi una volta in alto e finiscono nell’intestazione del PDF.", "hl": {"x": 0.0427, "y": 0.329, "w": 0.9146, "h": 0.1876}}, {"img": "img/lav-2.webp", "t": "Trascina giocatori e attrezzi", "d": "Pedine colorate, giocatori di fronte, di spalle e in corsa, coni, porte, scale e ostacoli: li trascini sul campo, li ruoti e li ridimensioni. La maglia dei giocatori cambia colore con un tocco.", "hl": {"x": 0.0427, "y": 0.128, "w": 0.1106, "h": 0.8831}}, {"img": "img/lav-3.webp", "t": "Disegna i movimenti", "d": "Scegli passaggio, corsa, conduzione o tiro e tira la freccia sul campo: con le maniglie la allunghi o la curvi. Linee e zone servono a delimitare gli spazi.", "hl": {"x": 0.0427, "y": 0.0107, "w": 0.9146, "h": 0.1173}}, {"img": "img/lav-4.webp", "t": "Esercizio solo testo", "d": "Se vai di fretta scrivi l’esercizio a parole, con durata e materiale. Nel PDF esce come riquadro di testo al posto del campo.", "hl": {"x": 0.1683, "y": 0.1608, "w": 0.7889, "h": 0.5407}}, {"img": "img/lav-5.webp", "t": "Salva e stampa", "d": "Salva la seduta come file sul dispositivo e riaprila quando vuoi. Con Stampa / PDF ottieni la seduta pronta da stampare o da inviare.", "hl": {"x": 0.6458, "y": 0.2265, "w": 0.3115, "h": 0.0529}}, {"img": "img/lav-6.webp", "t": "Logo, firma e colori", "d": "Dal menu ☰ carichi il logo della squadra, aggiungi la tua firma e scegli il colore: valgono per tutte le app della suite.", "hl": {"x": 0.7563, "y": 0.1541, "w": 0.201, "h": 0.4201}}], "posizionamenti": [{"img": "img/pos-1.webp", "t": "Dati della gara", "d": "Avversario, data, tipo di gara, sede e modulo. In alto scegli calcio a 11 o a 9: ognuno ha le sue tabelle.", "hl": {"x": 0.0243, "y": 0.2117, "w": 0.9514, "h": 0.209}}, {"img": "img/pos-2.webp", "t": "Formazione", "d": "Titolari e panchina con i numeri di maglia. Con il roster della squadra scegli i nomi da un elenco e il numero si mette da solo.", "hl": {"x": 0.0243, "y": 0.0188, "w": 0.3138, "h": 0.9812}}, {"img": "img/pos-3.webp", "t": "Tabelle a misura tua", "d": "Rinomini titoli e voci, aggiungi righe con ＋ e con ↕ Sposta le metti dove servono. Le tabelle che non usi si nascondono.", "hl": {"x": 0.3431, "y": 0.0322, "w": 0.3138, "h": 0.6742}}, {"img": "img/pos-4.webp", "t": "Lo schieramento in campo", "d": "I giocatori della formazione compaiono sul campo secondo il modulo: li trascini dove vuoi e aggiungi frecce.", "hl": {"x": 0.0846, "y": 0.0858, "w": 0.8308, "h": 0.8993}}, {"img": "img/pos-5.webp", "t": "Gli schemi delle palle inattive", "d": "Corner e punizioni si disegnano da soli con i nomi delle tabelle. Sposti le pedine, aggiungi note e frecce.", "hl": {"x": 0.0762, "y": 0.0189, "w": 0.8476, "h": 0.8126}}, {"img": "img/pos-6.webp", "t": "PDF per lo spogliatoio", "d": "Nell’anteprima scegli le pagine da salvare: la scheda, lo schieramento e uno schema per pagina.", "hl": {"x": 0, "y": 0.0844, "w": 1, "h": 0.1688}}], "report": [{"img": "img/rep-1.webp", "t": "Dati della gara", "d": "Data, avversario, tipo di gara, sede e gol. Scegli il formato (a 11, 9, 7 o 5), il modulo e quanti tempi da quanti minuti: il totale si calcola da solo.", "hl": {"x": 0.0521, "y": 0.0033, "w": 0.8958, "h": 0.4642}}, {"img": "img/rep-2.webp", "t": "Chi era in campo", "d": "Tocchi un posto vuoto (+) sul campo e scegli il giocatore: il numero di maglia viene dalla posizione. In panchina il secondo portiere prende il 12, gli altri 13, 14… e puoi cambiarli toccando il numero.", "hl": {"x": 0.0698, "y": 0.171, "w": 0.8604, "h": 0.829}}, {"img": "img/rep-3.webp", "t": "Il cambio sulla pedina", "d": "Tocchi la pedina di chi esce, scrivi il minuto del tempo e scegli chi entra: i minuti si calcolano da soli (45' + 30' = 75'). Con «Togli dal campo» lasci il posto vuoto, ↶ Annulla toglie l’ultimo cambio.", "hl": {"x": 0.5219, "y": 0.171, "w": 0.4083, "h": 0.7651}}, {"img": "img/rep-4.webp", "t": "La pagella", "d": "Solo chi ha giocato, con i minuti di ogni tempo. Per ognuno il ruolo nella partita, il voto a pallino (verde, giallo, rosso) e una nota.", "hl": {"x": 0.0698, "y": 0.0669, "w": 0.8604, "h": 0.9331}}, {"img": "img/rep-5.webp", "t": "Marcatori, note e file", "d": "Marcatori, assist e gol subiti dai portieri, poi le note sulla gara. Salvi la partita come file sul dispositivo e la riapri quando vuoi.", "hl": {"x": 0.0521, "y": 0.0396, "w": 0.8958, "h": 0.6458}}, {"img": "img/rep-6.webp", "t": "Il PDF della gara", "d": "Nell’anteprima vedi il report con risultato, formazione iniziale, cambi, marcatori e la tabella dei minuti per tempo. Con Conferma e salva hai il PDF con logo e colori del club.", "hl": {"x": 0.0802, "y": 0.1383, "w": 0.8396, "h": 0.8617}}], "match": [{"img": "img/mat-1.webp", "t": "Squadre e data", "d": "Scrivi le squadre, la data e il risultato: finiscono nel report e nello storico.", "hl": {"x": 0.0595, "y": 0.2184, "w": 0.8811, "h": 0.075}}, {"img": "img/mat-2.webp", "t": "Quattro modi di lavorare", "d": "Modalità video per registrare dal filmato, Live in tribuna durante la partita, Analisi video per rivedere, Storico per confrontare le partite.", "hl": {"x": 0.0419, "y": 0.327, "w": 0.9162, "h": 0.0737}}, {"img": "img/mat-3.webp", "t": "Il campo a zone", "d": "Tocchi una delle 16 zone del campo e scegli l’evento dalla lista, compresi quelli che aggiungi tu. Ogni evento ha il suo minuto.", "hl": {"x": 0.5025, "y": 0.272, "w": 0.4548, "h": 0.4769}}, {"img": "img/mat-4.webp", "t": "Analisi video", "d": "Rivedi il video con zoom fermo, laser e testi che compaiono a tempo, e tagli le clip delle azioni con i testi compresi.", "hl": {"x": 0.4504, "y": 0.0322, "w": 0.1785, "h": 0.0549}}, {"img": "img/mat-5.webp", "t": "Salva e PDF", "d": "A fine partita salvi il file sul dispositivo o il PDF del report con le statistiche.", "hl": {"x": 0.0419, "y": 0.3938, "w": 0.9162, "h": 0.1085}}], "postura": [{"img": "img/pst-1.webp", "t": "Tre foto", "d": "Carichi una foto di fronte, una di spalle e una di lato. L’app trova i punti del corpo sul dispositivo: le foto non vengono inviate a nessuno.", "hl": {"x": 0.0084, "y": 0.005, "w": 0.9832, "h": 0.7652}}, {"img": "img/pst-2.webp", "t": "Scheletro e angoli", "d": "Con gli interruttori mostri o nascondi scheletro e angoli; con Zoom atleta ingrandisci la persona.", "hl": {"x": 0.0209, "y": 0.1933, "w": 0.9581, "h": 0.0616}}, {"img": "img/pst-3.webp", "t": "Valori di riferimento e report", "d": "I colori confrontano le misure con valori di riferimento per la persona in piedi. Sotto scrivi le tue conclusioni.", "hl": {"x": 0.0084, "y": 0.604, "w": 0.9832, "h": 0.2767}}, {"img": "img/pst-4.webp", "t": "Salva e PDF", "d": "Nome dell’atleta e data, poi salvi il file o crei il PDF. Strumento per l’allenamento, non una valutazione medica.", "hl": {"x": 0.0209, "y": 0.2764, "w": 0.9581, "h": 0.0704}}], "movimento": [{"img": "img/mov-1.webp", "t": "Carica il gesto", "d": "Carichi un video o una foto e scegli cosa misurare: tutto, gambe, busto o nessun segno sul corpo. C’è anche il cronometro al millesimo.", "hl": {"x": 0.0209, "y": 0.0251, "w": 0.66, "h": 0.134}}, {"img": "img/mov-2.webp", "t": "Fotogramma per fotogramma", "d": "Fermi il video, vai avanti e indietro di un fotogramma e vedi scheletro e angoli nel punto esatto del gesto.", "hl": {"x": 0.0209, "y": 0.1591, "w": 0.66, "h": 0.6968}}, {"img": "img/mov-3.webp", "t": "Misure e fotogrammi per il PDF", "d": "A destra leggi gli angoli del fotogramma; con Aggiungi al PDF metti da parte i momenti chiave, con Foto PNG li salvi come immagini.", "hl": {"x": 0.6968, "y": 0.005, "w": 0.2948, "h": 0.3288}}, {"img": "img/mov-4.webp", "t": "Report e PDF", "d": "Scrivi le conclusioni sul gesto e crei il PDF con i fotogrammi scelti. Strumento per l’allenamento, non una valutazione medica.", "hl": {"x": 0.0209, "y": 0.2764, "w": 0.9581, "h": 0.0704}}]};
  var NAMES = { lavagna: 'Lavagna', posizionamenti: 'Posizionamenti', report: 'Report', match: 'Match', postura: 'Postura', movimento: 'Movimento' };
  var NOTES = { match: 'Video e dati di esempio.', postura: 'Schermate dell’app senza foto di esempio.', movimento: 'Schermate dell’app senza video di esempio.' };
  var pages = BOOKS[app];
  if (!pages) return;

  var accent = '#7a1f2b';
  try { var c = JSON.parse(localStorage.getItem('clubAccentColor') || 'null'); c = typeof c === 'string' ? c : (c && (c.accent || c.color)); if (c) accent = c; } catch (e) {}

  var css = document.createElement('style');
  css.textContent = [
    '#suite-guida{position:fixed;left:126px;bottom:14px;z-index:2147483000;width:44px;height:44px;box-sizing:border-box;margin:0;border-radius:50%;border:2px solid #fff;touch-action:manipulation;-webkit-tap-highlight-color:transparent;',
    'background:var(--gd-accent);color:#fff;font:700 21px/1 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;cursor:pointer;',
    'box-shadow:0 4px 16px rgba(0,0,0,.28);transition:transform .15s;padding:0}',
    '#suite-guida:hover{transform:scale(1.07)}',
    '#suite-guida.gd-new{animation:gdPulse 1.6s ease-in-out 4}',
    '@keyframes gdPulse{50%{box-shadow:0 0 0 9px color-mix(in srgb,var(--gd-accent) 30%,transparent),0 4px 16px rgba(0,0,0,.28)}}',
    '@media print{#suite-guida,#gd-ov{display:none!important}}',
    /* finestra fatta con un semplice livello sopra la pagina: si apre allo stesso modo su ogni versione di Safari */
    '#gd-ov{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483600;background:rgba(0,0,0,.55);display:none;align-items:center;justify-content:center;padding:12px;box-sizing:border-box}',
    '#gd-ov.open{display:flex}',
    '#gd-dlg{box-sizing:border-box;margin:0;border:1px solid #e2ded6;border-radius:22px;padding:0;width:900px;max-width:100%;max-height:100%;overflow:hidden;background:#fff;color:#1b1b1b;',
    'font:16px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.35)}',
    '#gd-dlg .gd-in{display:grid;gap:14px;padding:18px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 24px);box-sizing:border-box}',
    '#gd-dlg .gd-head{display:flex;align-items:center;gap:12px}',
    '#gd-dlg .gd-head h3{margin:0;font-size:21px;flex:1}',
    '#gd-dlg .gd-count{color:#6b6b6b;font-size:14px;font-variant-numeric:tabular-nums}',
    '#gd-dlg .gd-x,#gd-dlg .gd-arrow{width:44px;height:44px;border-radius:50%;border:1px solid #e2ded6;background:#fff;color:#1b1b1b;font-size:18px;cursor:pointer;flex:none;padding:0}',
    '#gd-dlg .gd-x:hover,#gd-dlg .gd-arrow:hover:not(:disabled){border-color:var(--gd-accent);color:var(--gd-accent)}',
    '#gd-dlg .gd-arrow:disabled{opacity:.35;cursor:default}',
    '#gd-dlg .gd-stage{position:relative;border-radius:12px;overflow:hidden;border:1px solid #e2ded6;background:#fff;perspective:1400px;touch-action:pan-y;user-select:none;-webkit-user-select:none}',
    '#gd-dlg .gd-page{position:relative}',
    '#gd-dlg .gd-page img{display:block;width:100%;height:auto;aspect-ratio:16/10;object-fit:cover;object-position:top left;max-width:100%}',
    '#gd-dlg .gd-page.gd-next{animation:gdNext .45s ease both;transform-origin:left center}',
    '#gd-dlg .gd-page.gd-prev{animation:gdPrev .45s ease both;transform-origin:right center}',
    '@keyframes gdNext{from{transform:rotateY(-14deg) translateX(18px);opacity:.25}}',
    '@keyframes gdPrev{from{transform:rotateY(14deg) translateX(-18px);opacity:.25}}',
    '#gd-dlg .gd-hl{position:absolute;border:3px solid var(--gd-accent);border-radius:12px;box-shadow:0 0 0 9999px rgba(20,10,12,.38);pointer-events:none;animation:gdHl 1.8s ease-in-out infinite}',
    '@keyframes gdHl{50%{border-color:#fff}}',
    '#gd-dlg .gd-cap{display:grid;gap:4px;min-height:5.2em}',
    '#gd-dlg .gd-cap h4{margin:0;font-size:19px}',
    '#gd-dlg .gd-cap p{margin:0;color:#6b6b6b;max-width:70ch}',
    '#gd-dlg .gd-nav{display:flex;align-items:center;gap:12px}',
    '#gd-dlg .gd-dots{flex:1;display:flex;justify-content:center;gap:7px}',
    '#gd-dlg .gd-dot{width:9px;height:9px;border-radius:50%;border:0;padding:0;background:#e2ded6;cursor:pointer}',
    '#gd-dlg .gd-dot[aria-current="true"]{background:var(--gd-accent);width:22px;border-radius:5px}',
    '#gd-dlg .gd-note{margin:0;font-size:13px;color:#6b6b6b}',
    '@media (prefers-reduced-motion:reduce){#gd-dlg .gd-page.gd-next,#gd-dlg .gd-page.gd-prev,#gd-dlg .gd-hl,#suite-guida.gd-new{animation:none}}'
  ].join('');
  document.head.appendChild(css);

  var btn = document.createElement('button');
  btn.type = 'button'; btn.id = 'suite-guida'; btn.textContent = '?';
  btn.title = 'Guida di ' + NAMES[app]; btn.setAttribute('aria-label', 'Guida di ' + NAMES[app]);
  btn.style.setProperty('--gd-accent', accent);
  var seenKey = 'suiteGuidaVista_' + app, seen = false;
  try { seen = localStorage.getItem(seenKey) === '1'; } catch (e) {}
  if (!seen) btn.classList.add('gd-new');
  document.body.appendChild(btn);

  // subito a destra del pulsante Home, alla stessa altezza: si parte dalla posizione fissa di Home
  // (non dall'altezza della finestra, che su iPad cambia con la barra di Safari)
  function place() {
    var h = document.getElementById('suite-home');
    if (!h || !h.offsetWidth) return;
    var cs = getComputedStyle(h), left = parseFloat(cs.left), bottom = parseFloat(cs.bottom);
    if (isNaN(left)) left = 14; if (isNaN(bottom)) bottom = 14;
    btn.style.left = Math.round(left + h.offsetWidth + 8) + 'px';
    btn.style.bottom = Math.round(bottom + (h.offsetHeight - btn.offsetHeight) / 2) + 'px';
  }
  place(); window.addEventListener('resize', place); window.addEventListener('load', place); setTimeout(place, 500);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);

  var ov = document.createElement('div');
  ov.id = 'gd-ov'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', 'Guida di ' + NAMES[app]);
  var dlg = document.createElement('div');
  dlg.id = 'gd-dlg'; dlg.style.setProperty('--gd-accent', accent);
  dlg.innerHTML =
    '<div class="gd-in">' +
      '<div class="gd-head"><h3>Guida · ' + NAMES[app] + '</h3><span class="gd-count"></span><button type="button" class="gd-x" aria-label="Chiudi">×</button></div>' +
      '<div class="gd-stage"><div class="gd-page"><img alt=""><div class="gd-hl"></div></div></div>' +
      '<div class="gd-cap"><h4></h4><p></p></div>' +
      '<div class="gd-nav"><button type="button" class="gd-arrow gd-prevb" aria-label="Pagina precedente">←</button><div class="gd-dots"></div><button type="button" class="gd-arrow gd-nextb" aria-label="Pagina successiva">→</button></div>' +
      '<p class="gd-note">' + (NOTES[app] || 'Schermate con dati di esempio.') + ' Sfoglia con le frecce o col dito.</p>' +
    '</div>';
  ov.appendChild(dlg);
  document.body.appendChild(ov);
  function apri() { ov.classList.add('open'); var x = q('.gd-x'); if (x) try { x.focus({ preventScroll: true }); } catch (e) {} }
  function chiudi() { ov.classList.remove('open'); }
  var q = function (s) { return dlg.querySelector(s); };
  var page = 0;
  function show(dir) {
    var pg = pages[page], img = q('.gd-page img'), hl = q('.gd-hl'), h = pg.hl;
    img.src = base + pg.img; img.alt = NAMES[app] + ': ' + pg.t;
    hl.style.display = h ? '' : 'none';
    if (h) { hl.style.left = h.x * 100 + '%'; hl.style.top = h.y * 100 + '%'; hl.style.width = h.w * 100 + '%'; hl.style.height = h.h * 100 + '%'; }
    q('.gd-cap h4').textContent = pg.t; q('.gd-cap p').textContent = pg.d;
    q('.gd-count').textContent = (page + 1) + ' / ' + pages.length;
    q('.gd-prevb').disabled = page === 0; q('.gd-nextb').disabled = page === pages.length - 1;
    q('.gd-dots').innerHTML = pages.map(function (_, i) { return '<button type="button" class="gd-dot" data-i="' + i + '" aria-label="Pagina ' + (i + 1) + '"' + (i === page ? ' aria-current="true"' : '') + '></button>'; }).join('');
    var el = q('.gd-page'); el.classList.remove('gd-next', 'gd-prev');
    if (dir) { void el.offsetWidth; el.classList.add(dir > 0 ? 'gd-next' : 'gd-prev'); }
  }
  function go(d) { var n = Math.max(0, Math.min(pages.length - 1, page + d)); if (n !== page) { page = n; show(d); } }
  btn.addEventListener('click', function () {
    page = 0; show(0);
    btn.classList.remove('gd-new'); try { localStorage.setItem(seenKey, '1'); } catch (e) {}
    apri();
  });
  q('.gd-x').addEventListener('click', chiudi);
  q('.gd-prevb').addEventListener('click', function () { go(-1); });
  q('.gd-nextb').addEventListener('click', function () { go(1); });
  q('.gd-dots').addEventListener('click', function (e) { var d = e.target.closest('.gd-dot'); if (!d) return; var n = +d.getAttribute('data-i'); if (n !== page) { var dir = n > page ? 1 : -1; page = n; show(dir); } });
  ov.addEventListener('click', function (e) { if (e.target === ov) chiudi(); });
  // i tasti restano nella guida: non arrivano all'app sotto (es. Canc in Lavagna)
  ov.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    else if (e.key === 'Escape') { e.preventDefault(); chiudi(); }
    e.stopPropagation();
  });
  var sx = null, st = q('.gd-stage');
  st.addEventListener('pointerdown', function (e) { sx = e.clientX; });
  st.addEventListener('pointerup', function (e) { if (sx === null) return; var dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1); });
})();
