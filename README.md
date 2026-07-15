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

## ⚠️ Installation sur mobile : à lire avant de commencer

Si tu envoies ces fichiers depuis un téléphone Android, **ne renomme et ne
retape aucun nom de fichier toi-même**. Le clavier corrige automatiquement des
mots comme "icon" en "icône", ce qui casse l'application (logo introuvable,
installation refusée).

Tous les fichiers de ce ZIP sont **déjà nommés correctement et à plat** (aucun
dossier à créer). La seule chose à faire est de les envoyer tels quels, sans
aucune modification de nom.

---

## 1. Mettre l'application sur GitHub

1. Crée un compte GitHub si tu n'en as pas déjà un : https://github.com/signup
2. Crée un nouveau dépôt (repository), ou réutilise le tien en supprimant
   d'abord tous les fichiers existants (pour repartir sur une base propre)
3. Décompresse le ZIP fourni sur ton téléphone ou ton ordinateur
4. Dans ton dépôt GitHub, clique **"Add file" → "Upload files"**
5. Utilise le bouton **"choose your files"** et **sélectionne tous les
   fichiers en une seule fois** (les 9 fichiers du dossier décompressé,
   tous au même niveau — aucun ne doit rester non sélectionné)
6. Ne touche à aucun champ de nom de fichier avant de valider
7. Clique **"Commit changes"**

### Alternative (ordinateur, plus fiable) : ligne de commande

```bash
git init
git add .
git commit -m "AZARAKOR LOTO SYSTÈME"
git branch -M main
git remote add origin https://github.com/TON-NOM-UTILISATEUR/TON-DEPOT.git
git push -u origin main
```

---

## 2. Activer l'hébergement gratuit (GitHub Pages)

1. Dans ton dépôt GitHub, va dans **Settings** (Paramètres)
2. Dans le menu de gauche, clique sur **Pages**
3. Sous "Build and deployment" → **Source**, choisis **Deploy from a branch**
4. Choisis la branche **main** et le dossier **/ (root)**, puis **Save**
5. Après 1 à 2 minutes, ton application sera accessible à une adresse du type :

```
https://TON-NOM-UTILISATEUR.github.io/TON-DEPOT/
```

---

## 3. Installer l'application (hors connexion)

Une fois l'adresse ci-dessus ouverte dans un navigateur (Chrome, Edge, Safari...) :

### Sur téléphone (Android)
- Ouvre le lien dans Chrome, en navigation privée de préférence pour la
  première vérification (évite un cache d'une version précédente)
- Menu **⋮** → **"Installer l'application"** (si cette option n'apparaît pas
  et que seul "Ajouter à l'écran d'accueil" est proposé, vois la section 6)

### Sur iPhone / iPad (Safari)
- Ouvre le lien dans Safari
- Bouton **Partager** (carré avec flèche) → **"Sur l'écran d'accueil"**

### Sur ordinateur (Chrome / Edge)
- Une icône d'installation apparaît dans la barre d'adresse (à droite), ou
  menu **⋮** → **"Installer AZARAKOR..."**

Après cette première visite en ligne, l'application se met en cache
automatiquement (fichier `sw.js`) et reste utilisable **sans connexion
internet** par la suite.

---

## 4. Contenu du dossier

```
azarakor-loto-systeme/
├── index.html
├── manifest.json
├── sw.js
├── azarakor-192.png
├── azarakor-512.png
├── azarakor-touch.png
├── azarakor-fav32.png
├── azarakor-fav16.png
└── README.md
```

Tous les fichiers sont au même niveau, sans sous-dossier — c'est volontaire,
pour éviter tout problème d'upload depuis un téléphone.

---

## 5. En cas de logo "G" Google au lieu du logo AZARAKOR

Cela signifie que le navigateur ne trouve pas un des fichiers ci-dessus (erreur
404). Vérifie sur la page principale de ton dépôt GitHub que les 9 fichiers
listés en section 4 sont bien présents, **à la racine**, avec exactement ces
noms (aucun accent, aucun sous-dossier).

Si un nom diffère (par exemple `azarakor-192.png` est devenu autre chose),
supprime ce fichier et renvoie-le depuis le ZIP d'origine sans jamais
retaper son nom manuellement.

---

## 6. Notes importantes

- Les compteurs, l'historique et les statistiques sont conservés **en mémoire
  pendant que l'application est ouverte**. Si tu fermes complètement
  l'application ou vides le cache du navigateur, l'historique saisi est perdu
  (aucune sauvegarde permanente n'est intégrée dans cette version).
- Aucune donnée n'est envoyée à un serveur : tout le calcul se fait localement,
  sur ton appareil.
