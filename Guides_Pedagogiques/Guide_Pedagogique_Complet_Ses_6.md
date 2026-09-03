# GUIDE PÉDAGOGIQUE ÉTALON — SESSION 6
## Session 6 : Architecture Avancée & Automatisation

**Formation :** Concepteur & Développeur d'Applications IA No-Code — OIDANEOS  
**Intervenant(s) :** Pierre LACOMBE  
**Date du direct :** 13 Juillet 2026  
**Thématique :** Connexions d'API en direct, synchronisation Baserow et préparation aux flux métiers complexes  
**Matière source :** Transcription intégrale de la séance Zoom & échanges du chat en direct  

---

## 1. Cadrage & Pourquoi cette séance est déterminante

Cette session connecte le cerveau de l'IA à la mémoire de données Baserow, permettant d'exécuter des flux métiers sans intervention manuelle.

---

## 2. Décryptage Théorique & Notions Fondamentales

### 1. Architecture événementielle (Webhooks)
Déclencher un calcul ou une action immédiatement dès qu'une nouvelle ligne est insérée dans la base de données.

### 2. Gestion robuste des erreurs d'API
Mettre en place des mécanismes de retry et de fallback lorsque le serveur de l'IA ou de la base renvoie une erreur 500 ou 429 (Rate Limit).

---

## 3. Cas Pratiques & Méthodologie Appliquée

### Cas 1 : Envoi automatique d'un rapport de séance
Pipeline complet : extraction des présences Baserow → synthèse par l'IA → notification automatique.

---

## 4. Outils & Technologies Clés Manipulés

- **Baserow Webhooks**
- **Make**
- **Postman**
- **Claude 3.5 Sonnet**

---

## 5. Temps Forts & Éléments Partagés dans le Chat Zoom

| Horodatage | Intervenant | Message & Ressource Partagée |
| :--- | :--- | :--- |
| `00:36:12` | **Coordinatrice OIDANEOS** | Oui, les webhooks sont compatibles avec toutes les versions cloud. |
| `01:24:00` | **Pierre Lacombe** | Pensez toujours au timeout de vos requêtes : 30 secondes maximum. |

---

## 6. Checklist d'Action Stagiaire (Livrables & Consolidation)

- [ ] Configurer un webhook sur sa table Baserow
- [ ] Tester la réception d'un événement dans son outil d'automatisation
- [ ] Vérifier la bonne gestion des codes de statut HTTP (200, 400, 500)

---
*Document pédagogique de référence certifié OIDANEOS — Live-to-Asset 2026*
