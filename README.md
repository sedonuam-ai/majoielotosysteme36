# AZARAKOR LOTO SYSTÈME

Générateur de grilles par groupe de chiffre (1 à 90), avec suivi statistique des
tirages officiels (écart, fréquence, chaud/froid, prédiction, historique) et
compteurs persistants pendant la session. L'application fonctionne **entièrement
hors connexion** une fois installée.

> Rappel : ce système regroupe les numéros par chiffre commun et fournit des
> outils de suivi statistique. Il ne s'agit pas d'une méthode de prédiction
> réelle — le loto reste un jeu de hasard pur, chaque numéro conservant à
> chaque tirage exactement la même probabilité de sortie.

---

## 1. Mettre l'application sur GitHub

> ⚠️ **Important** : conserve exactement les noms de fichiers et la structure de
> dossiers ci-dessous (notamment le dossier `icons/` et les noms en anglais comme
> `icon-192.png`, `apple-touch-icon.png`). Si un outil ou une interface renomme
> ou déplace ces fichiers automatiquement, le logo ne s'affichera pas et
> l'installation de l'application sera refusée par le navigateur.

1. Crée un compte GitHub si tu n'en as pas déjà un : https://github.com/signup
2. Crée un nouveau dépôt (repository) :
   - Clique sur **"New repository"**
   - Nom suggéré : `azarakor-loto-systeme`
   - Coche **Public**
   - Ne coche aucune case d'initialisation (pas de README auto), tu vas envoyer les fichiers fournis
3. Sur ton ordinateur, décompresse le fichier ZIP fourni, puis dans le dossier obtenu :

```bash
git init
git add .
git commit -m "Première version - AZARAKOR LOTO SYSTÈME"
git branch -M main
git remote add origin https://github.com/TON-NOM-UTILISATEUR/azarakor-loto-systeme.git
git push -u origin main
```

(Remplace `TON-NOM-UTILISATEUR` par ton nom d'utilisateur GitHub.)

Si tu préfères ne pas utiliser la ligne de commande, tu peux aussi glisser-déposer
tous les fichiers du dossier directement dans l'interface GitHub via
**"Add file" → "Upload files"**.

---

## 2. Activer l'hébergement gratuit (GitHub Pages)

1. Dans ton dépôt GitHub, va dans **Settings** (Paramètres)
2. Dans le menu de gauche, clique sur **Pages**
3. Sous "Build and deployment" → **Source**, choisis **Deploy from a branch**
4. Choisis la branche **main** et le dossier **/ (root)**, puis **Save**
5. Après 1 à 2 minutes, ton application sera accessible à une adresse du type :

```
https://TON-NOM-UTILISATEUR.github.io/azarakor-loto-systeme/
```

---

## 3. Installer l'application (hors connexion)

Une fois l'adresse ci-dessus ouverte dans un navigateur (Chrome, Edge, Safari...) :

### Sur téléphone (Android)
- Ouvre le lien dans Chrome
- Menu **⋮** → **"Ajouter à l'écran d'accueil"** (ou une bannière d'installation apparaît automatiquement)
- L'icône AZARAKOR apparaît comme une application normale, utilisable sans connexion

### Sur iPhone / iPad (Safari)
- Ouvre le lien dans Safari
- Bouton **Partager** (carré avec flèche) → **"Sur l'écran d'accueil"**
- L'application s'installe avec son icône et fonctionne hors connexion

### Sur ordinateur (Chrome / Edge)
- Ouvre le lien
- Une icône **d'installation** apparaît dans la barre d'adresse (à droite), ou menu **⋮** → **"Installer AZARAKOR..."**
- L'application s'ouvre alors dans sa propre fenêtre, comme un logiciel installé

Après cette première visite en ligne, l'application se met en cache automatiquement
(grâce au fichier `sw.js`) et reste utilisable **sans aucune connexion internet**
par la suite — y compris pour générer des grilles, saisir des tirages et consulter
les statistiques.

---

## 4. Contenu du dossier

```
azarakor-loto-systeme/
├── index.html          → l'application complète
├── manifest.json        → configuration de l'installation (nom, icône, couleurs)
├── sw.js                 → service worker (mode hors connexion)
├── icons/
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── apple-touch-icon.png
│   ├── favicon-32.png
│   └── favicon-16.png
└── README.md            → ce fichier
```

---

## 6. En cas de logo "G" Google au lieu du logo AZARAKOR

Ce problème signifie que le navigateur ne trouve pas les fichiers d'icônes. C'est
presque toujours dû à une structure de dossier incorrecte lors de l'envoi sur
GitHub. Vérifie que la racine de ton dépôt contient bien un **dossier nommé
`icons`** (en anglais, tout en minuscules) contenant les 5 fichiers PNG, et non
des fichiers isolés à la racine ou renommés en français.

**Solution la plus fiable** : supprime tous les fichiers actuellement dans ton
dépôt, puis renvoie l'intégralité du contenu de ce ZIP en une seule fois, sans
passer par un outil intermédiaire qui pourrait renommer ou déplacer les fichiers
(par exemple en utilisant directement `git push`, voir section 1).

---

## 5. Notes importantes

- Les compteurs, l'historique et les statistiques sont conservés **en mémoire
  pendant que l'application est ouverte**. Si tu fermes complètement
  l'application ou vides le cache du navigateur, l'historique saisi est perdu
  (aucune sauvegarde permanente n'est intégrée dans cette version).
- Aucune donnée n'est envoyée à un serveur : tout le calcul se fait localement,
  sur ton appareil.
