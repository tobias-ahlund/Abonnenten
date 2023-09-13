export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      subscriptions: {
        Row: {
          id: string
          user_id: string
          name: string
          cost: string
          inserted_at: string
        }
        Insert: {
          id?: string
          user_id?: string
          name?: string
          cost?: string
          inserted_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          cost?: string
          inserted_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
