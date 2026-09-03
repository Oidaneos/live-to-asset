# GUIDE PÉDAGOGIQUE APPROFONDI — SESSION 9
## Contexte IA : Personnalisation, Données & Identité du Projet

**Formation :** Concepteur & Développeur d'Applications IA No-Code — OIDANEOS  
**Intervenant :** Pierre Lacombe | **Coordination :** Milène | **Durée :** 2h00 de Live | **Date :** 3 août 2026  
**Matière source :** Transcription intégrale de la séance & échanges réels du chat

---

## 1. Introduction & Pourquoi cette séance est un tournant

Jusqu'ici dans le cursus, nous avons appris à manipuler les outils de façon isolée (poser une question à ChatGPT, brancher une base de données Baserow, créer une interface Celestory). 

Cette **Session 9** marque le passage du *"bricolage avec des prompts"* à la **conception d'une application IA professionnelle et sur-mesure**. 

> **Le constat de départ de Pierre Lacombe :**  
> Si vous ne donnez pas de contexte à un modèle de langage, il vous répondra toujours de manière générique, fade et impersonnelle. Pour qu'une IA produise du contenu ou du code qui ressemble à votre entreprise, à votre marque ou à votre projet, vous devez lui injecter un **contexte structuré et maîtrisé**.

---

## 2. Décryptage Théorique : Comment un LLM "pense"-t-il réellement ?

### A. Le LLM comme compresseur de données probabiliste
Pierre rappelle une notion fondamentale que trop de développeurs oublient :
- **Un modèle de langage (GPT-4, Claude, Gemini) ne raisonne pas comme un être humain.**
- C'est un **système probabiliste** issu de la compression gigantissime de milliards de textes du web.
- Quand vous lui soumettez un début de phrase, son seul travail mathématique est de calculer : *« Quel est le mot le plus probable qui vient ensuite ? »*.

### B. Le rôle architectural du Contexte
Puisque le modèle fonctionne aux probabilités :
- Si vous lui dites : *"Rédige un e-mail de prospection"*, la probabilité moyenne produit un texte d'e-mail vu 100 000 fois sur LinkedIn, sans âme.
- Mais si vous lui fournissez un **contexte précis** (votre ton, votre secteur, votre proposition de valeur, vos interdictions lexicales, votre public cible), vous **contraignez les probabilités** : le modèle est forcé de choisir les mots rares et spécifiques qui correspondent exactement à votre identité.

---

## 3. L'Exercice Pratique du "Roast" : Révéler le profil que l'IA a de vous

Au cours de la séance, un exercice marquant a été réalisé en direct avec les participants.

### Le Prompt officiel (partagé par Milène à 00:56:39) :
```text
"Fais un roast positif sur tout ce que tu sais de moi."
```

### Pourquoi cet exercice est génial pédagogiquement :
1. **Qu'est-ce qu'un "Roast" ?** Dans la tradition américaine, c'est un discours humoristique et taquin qui se moque affectueusement d'une personne en mettant en lumière ses manies et ses traits saillants.
2. **Ce que l'exercice révèle :** 
   - Si vous utilisez Claude ou ChatGPT depuis plusieurs semaines pour votre projet, l'IA a mémorisé dans son historique vos tics de langage, vos doutes récurrents, vos sujets favoris, et votre façon d'ordonner vos idées.
   - En lui demandant ce roast, elle "crache le morceau" : elle vous renvoie un miroir exact de la façon dont elle vous perçoit.
3. **Comment l'exploiter professionnellement :**
   - Cette analyse permet d'isoler **votre lexique, votre style littéraire et votre voix de marque**. Vous pouvez ensuite demander à l'IA : *"À partir de ce que tu viens de dire, formalise-moi un guide de style en 10 règles pour mes futures productions"*.

---

## 4. Pourquoi le Markdown est le format roi pour l'IA (vs Word / PDF)

Pierre insiste longuement sur un piège technique récurrent : le format de fichier utilisé pour transmettre le contexte.

| Format | Comportement avec l'IA | Verdict Technique |
|---|---|---|
| **PDF (`.pdf`)** | L'IA doit d'abord exécuter un OCR ou parser la structure graphique. Cela consomme une quantité énorme de **tokens**, génère des erreurs de mise en page et ralentit la réponse. | ❌ À bannir pour du contexte récurrent. |
| **Word (`.docx`)** | Fichier binaire lourd rempli de métadonnées invisibles inutiles au modèle. | ⚠️ Éviter si possible. |
| **Markdown (`.md`)** | **Texte pur**, universel, ultra-léger. L'IA le comprend nativement à 100 % (titres `#`, listes `-`, gras `**`, tableaux `\|`). Zéro gaspillage de tokens. | ✅ **Le format standard d'ingénierie IA.** |

### L'outil recommandé par Pierre : `getdesign.md`
- **Lien :** [https://getdesign.md/](https://getdesign.md/) (partagé à 01:18:19 dans le chat)
- **À quoi ça sert ?** C'est un standard pour rédiger une **charte graphique et un design system complet en Markdown pur**.
- Vous y définissez : vos codes hexadécimaux de couleurs, vos polices, vos règles de boutons, vos espacements. Vous le copiez-collez dans le contexte de votre IA, et elle génère immédiatement des interfaces web qui respectent votre design au pixel près.

---

## 5. Structuration des Données : CSV, JSON et Baserow

Une application IA vivante a besoin de manipuler des données réelles. Pierre montre la distinction essentielle :
- **Pour le formateur / l'humain :** Un tableau Excel ou Google Sheets est lisible.
- **Pour l'IA et les bases de données (Baserow) :** Le format **CSV** ou **JSON** est indispensable.
- Dans votre projet, préparez en amont :
  - La liste des colonnes de vos tables (ex: `Nom_Stagiaire`, `Date_Session`, `Note_Quiz`, `Statut_Emargement`).
  - Les variables dynamiques qui devront être injectées dans vos prompts Celestory.

---

## 6. Graphismes Vectoriels (SVG) & Vibe Coding

La deuxième moitié de la séance aborde la création visuelle par le code :
- **L'erreur classique :** Demander à Midjourney ou DALL-E de générer un logo ou une icône avec du texte (souvent déformé, image matricielle non modifiable).
- **L'approche de Pierre :** Demander au LLM (Claude ou GPT-4) de générer directement du code **SVG** :
  ```xml
  <svg width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="#6D28A6" />
    <path d="..." fill="#D6398F" />
  </svg>
  ```
- **L'avantage énorme :** Le SVG est du texte pur ! Vous pouvez changer la couleur, la taille, l'animer en CSS ou l'intégrer directement dans votre code en direct (la pratique du **Vibe Coding**).

---

## 7. Plan d'Action Concret pour la Session 10 (Checklist stagiaire)

Pour être prêt pour la session suivante avec Pierre, voici le livrable attendu :

- [ ] **1. Identité du projet :** Rédiger un paragraphe de 10 lignes résumant exactement la mission de votre application IA.
- [ ] **2. Guide de style :** Extraire votre voix d'écriture (grâce au prompt de Roast) et la formater en 5 règles Markdown.
- [ ] **3. Charte graphique Markdown :** Créer un fichier `design.md` contenant vos 3 couleurs principales et votre typographie.
- [ ] **4. Données Baserow :** Préparer le fichier CSV ou les colonnes de votre première table de données.
- [ ] **5. Test Vibe Coding :** Essayer de faire générer un composant d'interface ou un SVG par Claude et le tester dans votre navigateur.
