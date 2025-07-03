export interface PromptDetail {
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

export interface Comment {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  createdAt: string
}

export const mockPromptDetail: PromptDetail = {
  id: "1",
  title: "Crafting Compelling Narratives: A Guide to Storytelling Prompts",
  description: "This prompt helps you generate creative and engaging story ideas, focusing on character development, plot structure, and thematic elements. Use it to overcome writer's block or to explore new narrative possibilities.",
  content: `You are a master storyteller and creative writing expert. Your task is to help me craft a compelling narrative with the following elements:

1. **Character Development**: Create a protagonist with clear motivations, flaws, and growth potential. Consider their background, personality traits, and what drives them forward.

2. **Plot Structure**: Develop a three-act structure with:
   - Act 1: Setup and inciting incident
   - Act 2: Rising action and complications
   - Act 3: Climax and resolution

3. **Thematic Elements**: Incorporate universal themes such as love, loss, redemption, or the hero's journey.

4. **Setting**: Establish a vivid, immersive world that enhances the story.

5. **Conflict**: Introduce both internal and external conflicts that challenge the protagonist.

Please provide:
- A detailed character profile
- A plot outline with key scenes
- Suggested themes and motifs
- Setting descriptions
- Potential plot twists or complications

Make the story engaging, emotionally resonant, and suitable for [GENRE] with a target audience of [AUDIENCE].`,
  author: {
    id: "1",
    name: "Ethan Carter",
    avatar: "https://placehold.co/128x128",
    publishedAt: "July 15, 2024"
  },
  tags: ["Storytelling", "Creative Writing", "Narrative Design"],
  interactions: {
    likes: 234,
    copies: 120,
    comments: 2
  },
  comments: [
    {
      id: "1",
      author: {
        name: "Sophia Bennett",
        avatar: "https://placehold.co/40x40"
      },
      content: "This is a fantastic prompt! I used it to write a short story that I'm really proud of. The focus on character development and plot structure was particularly helpful.",
      createdAt: "2 days ago"
    },
    {
      id: "2",
      author: {
        name: "Liam Harper",
        avatar: "https://placehold.co/40x40"
      },
      content: "I love the idea of a hidden world beneath the city. It's such a rich concept with endless possibilities. I'm excited to see what I can create with this prompt.",
      createdAt: "1 week ago"
    }
  ]
} 