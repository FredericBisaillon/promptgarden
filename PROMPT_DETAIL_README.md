# Page de Détail des Prompts

## Vue d'ensemble

La page de détail des prompts (`PromptDetailPage`) permet aux utilisateurs de voir toutes les informations d'un prompt spécifique, d'interagir avec celui-ci et de laisser des commentaires.

## Structure

### Fichiers créés/modifiés

1. **`src/data/mock-prompt-detail.ts`** - Données mockées pour la page de détail
2. **`src/components/PromptDetailPage.tsx`** - Composant principal de la page de détail
3. **`src/app/(public)/prompt/[id]/page.tsx`** - Route Next.js pour la page de détail
4. **`src/components/PromptCard.tsx`** - Modifié pour ajouter la navigation
5. **`src/components/ProfilePromptCard.tsx`** - Modifié pour ajouter la navigation
6. **`src/components/Tag.tsx`** - Simplifié pour utiliser uniquement TailwindCSS

## Fonctionnalités

### Navigation
- **Fil d'Ariane** : Explore / Prompt
- **Navigation depuis les cartes** : Clic sur une carte dans Explore ou Profile redirige vers `/prompt/[id]`

### Contenu de la page
- **Titre et description** du prompt
- **Tags** associés au prompt
- **Section auteur** avec photo, nom et date de publication
- **Contenu du prompt** dans une boîte stylisée
- **Barre d'interactions** avec likes, commentaires et bouton de copie
- **Section commentaires** avec liste des commentaires existants
- **Formulaire** pour ajouter un nouveau commentaire

### Interactions
- **Copie du prompt** : Bouton pour copier le contenu dans le presse-papiers
- **Commentaires** : Affichage des commentaires existants et possibilité d'en ajouter
- **Likes/Commentaires** : Affichage des statistiques (mockées)

## Design

### Responsive
- **Max-width** : 960px
- **Padding latéral** : 160px (px-40)
- **Centrage** : Auto avec mx-auto

### Styling
- **TailwindCSS uniquement** (pas de librairies externes)
- **Couleurs** : Palette de gris cohérente
- **Composants** : Cards avec bordures et ombres subtiles
- **Typographie** : Inter font family

## Données mockées

### Structure des données
```typescript
interface PromptDetail {
  id: string
  title: string
  description: string
  content: string
  author: {
    id: string
    name: string
    avatar: string
    publishedAt: string
  }
  tags: string[]
  interactions: {
    likes: number
    copies: number
    comments: number
  }
  comments: Comment[]
}
```

### Exemple de données
- **Prompt** : "Crafting Compelling Narratives: A Guide to Storytelling Prompts"
- **Auteur** : Ethan Carter
- **Tags** : Storytelling, Creative Writing, Narrative Design
- **Interactions** : 234 likes, 120 copies, 2 commentaires

## Intégration future

### Base de données
Le code est structuré pour faciliter l'intégration avec une base de données :
- Interfaces TypeScript bien définies
- Séparation claire entre données et composants
- Fonctions prêtes pour les appels API

### API Routes
Les fonctions suivantes devront être implémentées :
- `GET /api/prompts/[id]` - Récupérer les détails d'un prompt
- `POST /api/prompts/[id]/comments` - Ajouter un commentaire
- `POST /api/prompts/[id]/like` - Liker un prompt
- `POST /api/prompts/[id]/copy` - Incrémenter le compteur de copies

## Utilisation

1. **Depuis Explore** : Cliquer sur une carte de prompt
2. **Depuis Profile** : Cliquer sur une carte dans "My Prompts", "Favorites" ou "Liked Prompts"
3. **URL directe** : Naviguer vers `/prompt/[id]` où `[id]` est l'ID du prompt

## Tests

Pour tester la fonctionnalité :
1. Lancer `npm run dev`
2. Aller sur `/explore`
3. Cliquer sur une carte de prompt
4. Vérifier que la page de détail s'affiche correctement
5. Tester les interactions (copie, commentaires) 