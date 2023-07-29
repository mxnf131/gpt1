export interface ChatMessage {
  role: Role
  content: string
  special?: "default" | "locked" | "temporary"
}

export type Role = "system" | "user" | "assistant" | "error"
export type Model = "gpt-3.5-turbo-16k" | "gpt-4" | "gpt-4-32k" | "gpt-3.5-turbo"
