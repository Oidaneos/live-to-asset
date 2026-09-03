# GUIDE PÉDAGOGIQUE ÉTALON — SESSION 4
## Session 4 : Fondations IA, LLM & Changement de Paradigme

**Formation :** Concepteur & Développeur d'Applications IA No-Code — OIDANEOS  
**Intervenant(s) :** Pierre LACOMBE (Expert IA)  
**Date du direct :** 01 Juillet 2026  
**Thématique :** Fonctionnement profond des Transformers, tokens, multimodalité, tool calling et révolution des interfaces  
**Matière source :** Transcription intégrale de la séance Zoom & échanges du chat en direct  

---

## 1. Cadrage & Pourquoi cette séance est déterminante

Immersion dans le moteur des intelligences artificielles modernes. Pierre démystifie le fonctionnement interne des LLMs pour en faire de véritables briques d'ingénierie.

---

## 2. Décryptage Théorique & Notions Fondamentales

### 1. Des Transformers aux Tokens : Le calcul probabiliste
Comprendre que le modèle ne comprend pas le sens comme nous, mais calcule des vecteurs d'attention et des probabilités de jetons (tokens). 1 000 tokens ≈ 750 mots.

### 2. Du Terminal (CLI) au Langage Naturel
Le langage humain devient le nouveau langage de programmation. L'art du prompting n'est pas de la magie mais de la spécification logicielle rigoureuse.

### 3. Modèles Propriétaires vs Open Source & Puissance de Calcul
Les enjeux géopolitiques des clusters de GPU (H100/B200), les compromis de latence et le choix entre API fermée (OpenAI/Anthropic) et modèles ouverts (Llama/Mistral).

### 4. Tool Calling & Automatisation
Comment doter un modèle de bras et de jambes grâce aux appels de fonctions (function calling / API) pour qu'il agisse sur le monde réel.

---

## 3. Cas Pratiques & Méthodologie Appliquée

### Cas 1 : Calculateur de coût et de consommation de tokens
Évaluation du coût d'un prompt complexe sur GPT-4o vs Claude 3.5 Sonnet vs modèles légers (Haiku / Flash).

### Cas 2 : Démonstration d'un appel d'API avec payload JSON
Envoi d'une requête structurée avec schéma strict pour garantir une réponse exploitable par un programme.

---

## 4. Outils & Technologies Clés Manipulés

- **OpenAI API**
- **Anthropic Claude**
- **Hugging Face**
- **Postman / Curl**
- **Make / n8n**

---

## 5. Temps Forts & Éléments Partagés dans le Chat Zoom

| Horodatage | Intervenant | Message & Ressource Partagée |
| :--- | :--- | :--- |
| `00:09:57` | **Alain Valero** | N'hésitez pas à mettre vos caméras pour les sessions de Pierre ! |
| `00:45:18` | **Pierre Lacombe** | Le token n'est pas un mot complet : c'est un sous-ensemble syllabique mathématique. |
| `01:12:30` | **Pierre Lacombe** | Le Tool Calling transforme le chatbot en un orchestrateur de processus métier. |

---

## 6. Checklist d'Action Stagiaire (Livrables & Consolidation)

- [ ] Créer sa clé API sur la console OpenAI ou Anthropic
- [ ] Tester la différence de réponse entre prompt direct et prompt avec schéma JSON imposé
- [ ] Lister les 2 actions externes que son application devra déclencher via API

---
*Document pédagogique de référence certifié OIDANEOS — Live-to-Asset 2026*
