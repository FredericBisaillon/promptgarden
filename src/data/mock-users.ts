export interface User {
  id: string
  name: string
  avatar: string
  joinedYear: number
  prompts: UserPrompt[]
  favorites: UserPrompt[]
  likedPrompts: UserPrompt[]
}

export interface UserPrompt {
  id: string
  title: string
  imageUrl: string
  createdAt: string
}

export const mockUser: User = {
  id: "1",
  name: "Sophia Bennett",
  avatar: "/images/user-profile.png",
  joinedYear: 2022,
  prompts: [
    {
      id: "1",
      title: "Generate a realistic portrait of a cat wearing a suit",
      imageUrl: "https://placehold.co/176x176",
      createdAt: "2024-01-15"
    },
    {
      id: "2",
      title: "Create a logo for a tech startup with a minimalist design",
      imageUrl: "https://placehold.co/176x176",
      createdAt: "2024-01-20"
    },
    {
      id: "3",
      title: "Write a short story about a time traveler who visits the future",
      imageUrl: "https://placehold.co/176x176",
      createdAt: "2024-02-01"
    },
    {
      id: "4",
      title: "Design a website layout for a coffee shop with a modern aesthetic",
      imageUrl: "https://placehold.co/176x176",
      createdAt: "2024-02-10"
    },
    {
      id: "5",
      title: "Compose a haiku about the beauty of a sunset over the ocean",
      imageUrl: "https://placehold.co/176x176",
      createdAt: "2024-02-15"
    },
    {
      id: "6",
      title: "Develop a prompt for generating abstract art with vibrant colors",
      imageUrl: "https://placehold.co/176x176",
      createdAt: "2024-02-20"
    }
  ],
  favorites: [
    {
      id: "7",
      title: "Create a futuristic cityscape with flying cars",
      imageUrl: "https://placehold.co/176x176",
      createdAt: "2024-01-25"
    },
    {
      id: "8",
      title: "Generate a recipe for a healthy Mediterranean salad",
      imageUrl: "https://placehold.co/176x176",
      createdAt: "2024-02-05"
    }
  ],
  likedPrompts: [
    {
      id: "9",
      title: "Write a motivational speech for entrepreneurs",
      imageUrl: "https://placehold.co/176x176",
      createdAt: "2024-01-30"
    },
    {
      id: "10",
      title: "Design a minimalist business card",
      imageUrl: "https://placehold.co/176x176",
      createdAt: "2024-02-12"
    }
  ]
} 