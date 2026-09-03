# GUIDE PÉDAGOGIQUE ÉTALON — SESSION 5
## Session 5 : Bases de Données Relationnelles & Baserow

**Formation :** Concepteur & Développeur d'Applications IA No-Code — OIDANEOS  
**Intervenant(s) :** Pierre LACOMBE  
**Date du direct :** 06 Juillet 2026  
**Thématique :** Pourquoi Excel n'est pas une base de données : Modélisation, CRUD, formules avancées, rollups et sécurité  
**Matière source :** Transcription intégrale de la séance Zoom & échanges du chat en direct  

---

## 1. Cadrage & Pourquoi cette séance est déterminante

Séance fondatrice pour la robustesse applicative. Pierre démontre pourquoi toute application sérieuse doit reposer sur un modèle relationnel strict sous Baserow.

---

## 2. Décryptage Théorique & Notions Fondamentales

### 1. Différences fondamentales : Tableur (Excel) vs BDD Relationnelle
Le tableur stocke du texte libre propice aux erreurs de frappe. La BDD impose des types de données stricts, garantit l'intégrité référentielle et évite la duplication.

### 2. Les relations 1-N (Un à Plusieurs) et N-N
Comment relier une table 'Apprenants' à une table 'Émargements' ou 'Formations' grâce aux clés primaires (UUID) et clés étrangères.

### 3. Le cycle CRUD (Create, Read, Update, Delete)
Les 4 opérations élémentaires qui sous-tendent toute interaction avec les données dans une application.

### 4. Sécurité et hachage des identifiants
Ne jamais stocker de mots de passe en clair : utilisation de chaînes aléatoires, d'identifiants uniques UUID et de permissions par rôle.

---

## 3. Cas Pratiques & Méthodologie Appliquée

### Cas 1 : Construction en direct de la base de données de formation
Création des tables Utilisateurs, Séances, Présences, avec champs liés (Rollup) et formules conditionnelles.

### Cas 2 : Mise en place de filtres et vues Kanban / Galerie
Affichage adapté selon les rôles : vue restreinte pour l'étudiant, vue complète pour l'administrateur.

---

## 4. Outils & Technologies Clés Manipulés

- **Baserow**
- **PostgreSQL**
- **Airtable**
- **JSON Generator**

---

## 5. Temps Forts & Éléments Partagés dans le Chat Zoom

| Horodatage | Intervenant | Message & Ressource Partagée |
| :--- | :--- | :--- |
| `00:41:17` | **Anthony MACAL** | Déjà utilisé dans mes projets précédents ! |
| `00:51:41` | **Anthony MACAL** | Clé primaire |
| `01:15:00` | **Pierre Lacombe** | Le rollup permet d'agréger les données d'une table liée sans dupliquer une seule ligne. |

---

## 6. Checklist d'Action Stagiaire (Livrables & Consolidation)

- [ ] Créer son workspace sur Baserow
- [ ] Modéliser au minimum 2 tables liées par une clé de relation
- [ ] Créer une vue filtrée et une formule conditionnelle (IF)
- [ ] Générer une clé API Baserow avec permissions en lecture/écriture

---
*Document pédagogique de référence certifié OIDANEOS — Live-to-Asset 2026*
