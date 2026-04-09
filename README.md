<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CÉLESTIN FLEMME BOT</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Orbitron', sans-serif;
      background: linear-gradient(to bottom, #0a0a0a, #1a1a1a);
      color: #00F5FF;
      text-align: center;
      scroll-behavior: smooth;
    }

    header {
      margin-top: 40px;
    }

    /* ==== Animation du texte ==== */
    .texte-anime {
      font-size: 50px;
      color: #00F5FF;
      white-space: nowrap;
      overflow: hidden;
      border-right: 4px solid #00F5FF;
      width: 0;
      animation: typing 4s steps(60, end) forwards, blink 0.75s step-end infinite;
      margin: 0 auto;
    }

    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }

    @keyframes blink {
      50% { border-color: transparent; }
    }

    img {
      margin-top: 20px;
      max-width: 90%;
      border-radius: 15px;
      box-shadow: 0 0 20px #00F5FF50;
    }

    section {
      padding: 30px 20px;
      margin: 20px auto;
      max-width: 900px;
      background: rgba(0, 245, 255, 0.05);
      border-radius: 15px;
      box-shadow: 0 0 20px #00F5FF10;
    }

    h2 {
      color: #FF69B4;
      margin-bottom: 20px;
    }

    ul {
      text-align: left;
      margin: 0 auto;
      max-width: 700px;
    }

    pre {
      background: #111;
      padding: 15px;
      border-radius: 10px;
      text-align: left;
      overflow-x: auto;
      color: #00F5FF;
    }

    /* ==== Boutons ==== */
    .bouton-deploiement {
      display: inline-block;
      padding: 10px 20px;
      margin: 10px;
      border-radius: 10px;
      font-weight: bold;
      transition: all 0.3s;
      cursor: pointer;
    }
    .bouton-deploiement:hover {
      transform: scale(1.05);
    }
    .talkdrove { background: #8A2BE2; color: white; }
    .replit { background: orange; color: white; }
    .koyeb { background: blue; color: white; }
    .railway { background: black; color: white; }
    .glitch { background: pink; color: white; }
    .codespace { background: navy; color: white; }
    .render { background: maroon; color: white; }

    /* Sommaire */
    nav a {
      color: #00F5FF;
      margin: 0 10px;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;
    }
    nav a:hover { color: #FF69B4; }
  </style>
</head>
<body>

  <!-- Header avec animation Typing -->
  <header>
    <div class="texte-anime">CÉLESTIN FLEMME BOT - Version 1.0.0 - Créé par CÉLESTIN</div>
    <img src="https://i.ibb.co/kstFd1cN/fyi7jw.jpg" alt="Célestin Bot">
  </header>

  <!-- Sommaire -->
  <section>
    <nav>
      <a href="#fork">Fork</a> |
      <a href="#deploiement">Déploiement</a> |
      <a href="#fonctionnalites">Fonctionnalités</a> |
      <a href="#configuration">Configuration</a> |
      <a href="#cicd">CI/CD</a> |
      <a href="#support">Support</a>
    </nav>
  </section>

  <!-- Fork -->
  <section id="fork">
    <h2>🗿🪽 Fork du Repository</h2>
    <p>Obtiens ta propre copie et commence à personnaliser :</p>
    <a href="https://github.com/3voldi/Flemme/fork" class="bouton-deploiement github">FORK REPO</a>
  </section>

  <!-- Déploiement -->
  <section id="deploiement">
    <h2>🌸 Déploiement Rapide</h2>
    <a href="https://host.talkdrove.com/dashboard/select-bot/prepare-deployment?botId=51" class="bouton-deploiement talkdrove">TalkDrove</a>
    <a href="https://repl.it/github/3voldi/Flemme" class="bouton-deploiement replit">Replit</a>
    <a href="https://app.koyeb.com/auth/signin" class="bouton-deploiement koyeb">Koyeb</a>
    <a href="https://railway.app/new" class="bouton-deploiement railway">Railway</a>
    <p>Autres options :</p>
    <a href="https://glitch.com/signup" class="bouton-deploiement glitch">Glitch</a>
    <a href="https://github.com/codespaces/new" class="bouton-deploiement codespace">Codespaces</a>
    <a href="https://dashboard.render.com" class="bouton-deploiement render">Render</a>
  </section>

  <!-- Fonctionnalités -->
  <section id="fonctionnalites">
    <h2>⚡ Fonctionnalités Principales</h2>
    <ul>
      <li>Réponses automatiques avec <strong>CÉLESTIN</strong></li>
      <li>Mini-jeux et interactions amusantes</li>
      <li>Commandes personnalisables</li>
      <li>Multi-plateformes et facile à déployer</li>
      <li>Support pour extensions et plugins</li>
    </ul>
  </section>

  <!-- Configuration -->
  <section id="configuration">
    <h2>⚙️ Configuration</h2>
    <ul>
      <li><code>TOKEN</code> — Token du bot Discord/plateforme</li>
      <li><code>PREFIX</code> — Préfixe des commandes (ex: <code>!</code>)</li>
      <li>Variables API supplémentaires selon vos besoins</li>
    </ul>
    <pre>
TOKEN=TonTokenIci
PREFIX=!
API_KEY=TaCléAPI
    </pre>
  </section>

  <!-- CI/CD -->
  <section id="cicd">
    <h2>⚡ Exemple CI/CD</h2>
    <pre>
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [20.x]
    steps:
      - name: Checkout du code
        uses: actions/checkout@v3
      - name: Installer Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
      - name: Installer les dépendances
        run: npm install
      - name: Démarrer l'application
        run: npm start
    </pre>
  </section>

  <!-- Support -->
  <section id="support">
    <h2>📬 Support & Contact</h2>
    <p>Discord / TalkDrove : <strong>CÉLESTIN#0001</strong></p>
    <p>Signaler un bug : <a href="https://github.com/3voldi/Flemme/issues">GitHub Issues</a></p>
    <p>Suggestions & Feedback : via GitHub Discussions ou e-mail</p>
  </section>

</body>
</html>
