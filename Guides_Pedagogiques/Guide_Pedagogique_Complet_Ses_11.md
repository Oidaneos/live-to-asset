# GUIDE PÉDAGOGIQUE ÉTALON — SESSION 11
## Session 11 : Industrialisation, Scalabilité & Sécurité

**Formation :** Concepteur & Développeur d'Applications IA No-Code — OIDANEOS  
**Intervenant(s) :** Pierre LACOMBE  
**Date du direct :** 17 Août 2026  
**Thématique :** Passage du prototype à l'environnement de production : gestion des volumes, clés sécurisées et supervision  
**Matière source :** Transcription intégrale de la séance Zoom & échanges du chat en direct  

---

## 1. Cadrage & Pourquoi cette séance est déterminante

L'industrialisation consiste à rendre son application stable lorsque plusieurs dizaines ou centaines d'utilisateurs s'y connectent simultanément.

---

## 2. Décryptage Théorique & Notions Fondamentales

### 1. Sécurisation des variables d'environnement
Ne jamais exposer ses clés d'API côté client. Utiliser un proxy serveur ou des fonctions serverless intermédiaires.

### 2. Supervision des coûts d'API (FinOps IA)
Mettre en place des quotas d'appels et des seuils d'alerte budgétaires pour éviter les mauvaises surprises de facturation.

---

## 3. Cas Pratiques & Méthodologie Appliquée

### Cas 1 : Revue des flux de données et sécurisation
Vérification des droits d'accès et mise en place de politiques de confidentialité conformes RGPD.

---

## 4. Outils & Technologies Clés Manipulés

- **Baserow Permissions**
- **Vercel / Supabase**
- **OpenAI Dashboard Usage**

---

## 5. Temps Forts & Éléments Partagés dans le Chat Zoom

| Horodatage | Intervenant | Message & Ressource Partagée |
| :--- | :--- | :--- |
| `01:05:00` | **Pierre Lacombe** | Une clé API exposée dans le code HTML est compromise en moins de 10 minutes par les robots du web. |

---

## 6. Checklist d'Action Stagiaire (Livrables & Consolidation)

- [ ] Sécuriser toutes ses clés d'accès dans des variables d'environnement
- [ ] Configurer une limite de dépenses mensuelle sur son compte d'API
- [ ] Documenter les règles de protection des données de son projet

---
*Document pédagogique de référence certifié OIDANEOS — Live-to-Asset 2026*
