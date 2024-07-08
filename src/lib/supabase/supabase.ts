export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      // cars: {
      //   Row: {
      //     brand: string | null
      //     model: string | null
      //     price: number | null
      //     year: string | null
      //   }
      //   Insert: {
      //     brand?: string | null
      //     model?: string | null
      //     price?: number | null
      //     year?: string | null
      //   }
      //   Update: {
      //     brand?: string | null
      //     model?: string | null
      //     price?: number | null
      //     year?: string | null
      //   }
      //   Relationships: []
      // }
      // categories: {
      //   Row: {
      //     category_id: number
      //     category_name: string | null
      //     description: string | null
      //   }
      //   Insert: {
      //     category_id?: number
      //     category_name?: string | null
      //     description?: string | null
      //   }
      //   Update: {
      //     category_id?: number
      //     category_name?: string | null
      //     description?: string | null
      //   }
      //   Relationships: []
      // }
      // customers: {
      //   Row: {
      //     address: string | null
      //     city: string | null
      //     contact_name: string | null
      //     country: string | null
      //     customer_id: number
      //     customer_name: string | null
      //     postal_code: string | null
      //   }
      //   Insert: {
      //     address?: string | null
      //     city?: string | null
      //     contact_name?: string | null
      //     country?: string | null
      //     customer_id?: number
      //     customer_name?: string | null
      //     postal_code?: string | null
      //   }
      //   Update: {
      //     address?: string | null
      //     city?: string | null
      //     contact_name?: string | null
      //     country?: string | null
      //     customer_id?: number
      //     customer_name?: string | null
      //     postal_code?: string | null
      //   }
      //   Relationships: []
      // }
      // dev_order_items: {
      //   Row: {
      //     created_at: string
      //     id: number
      //     order_id: number
      //     product_id: number
      //     quantity: number
      //     size: string
      //   }
      //   Insert: {
      //     created_at?: string
      //     id?: number
      //     order_id: number
      //     product_id: number
      //     quantity?: number
      //     size?: string
      //   }
      //   Update: {
      //     created_at?: string
      //     id?: number
      //     order_id?: number
      //     product_id?: number
      //     quantity?: number
      //     size?: string
      //   }
      //   Relationships: [
      //     {
      //       foreignKeyName: "public_dev_order_items_order_id_fkey"
      //       columns: ["order_id"]
      //       isOneToOne: false
      //       referencedRelation: "dev_orders"
      //       referencedColumns: ["id"]
      //     },
      //     {
      //       foreignKeyName: "public_dev_order_items_product_id_fkey"
      //       columns: ["product_id"]
      //       isOneToOne: false
      //       referencedRelation: "dev_products"
      //       referencedColumns: ["id"]
      //     },
      //   ]
      // }
      // dev_orders: {
      //   Row: {
      //     created_at: string
      //     id: number
      //     status: string
      //     total: number
      //     user_id: string
      //   }
      //   Insert: {
      //     created_at?: string
      //     id?: number
      //     status?: string
      //     total: number
      //     user_id: string
      //   }
      //   Update: {
      //     created_at?: string
      //     id?: number
      //     status?: string
      //     total?: number
      //     user_id?: string
      //   }
      //   Relationships: [
      //     {
      //       foreignKeyName: "public_dev_orders_user_id_fkey"
      //       columns: ["user_id"]
      //       isOneToOne: false
      //       referencedRelation: "profiles"
      //       referencedColumns: ["id"]
      //     },
      //   ]
      // }
      // dev_products: {
      //   Row: {
      //     created_at: string
      //     created_by: string
      //     id: number
      //     image: string | null
      //     name: string
      //     price: Json
      //   }
      //   Insert: {
      //     created_at?: string
      //     created_by?: string
      //     id?: number
      //     image?: string | null
      //     name: string
      //     price: Json
      //   }
      //   Update: {
      //     created_at?: string
      //     created_by?: string
      //     id?: number
      //     image?: string | null
      //     name?: string
      //     price?: Json
      //   }
      //   Relationships: []
      // }
      job_offers: {
        Row: {
          badgeLetters: string
          company: string
          daysAgo: number
          id: number
          title: string,
        }
        Insert: {
          badgeLetters?: string | null
          company?: string | null
          daysAgo?: number | null
          id: number
          title?: string | null
        }
        Update: {
          badgeLetters?: string | null
          company?: string | null
          daysAgo?: number | null
          id?: number
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "job_offers_details_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "job_offers_details"
            referencedColumns: ["id"]
          },
        ]
      }
      job_offers_details: {
        Row: {
          companyURL: string
          coverImgURL: string
          description: string
          duration: string
          id: number
          location: string
          qualifications: string
          reviews: string
          salary: string
        }
        Insert: {
          companyURL?: string | null
          coverImgURL?: string | null
          description?: string | null
          duration?: string | null
          id: number
          location?: string | null
          qualifications?: string | null
          reviews?: string | null
          salary?: string | null
        }
        Update: {
          companyURL?: string | null
          coverImgURL?: string | null
          description?: string | null
          duration?: string | null
          id?: number
          location?: string | null
          qualifications?: string | null
          reviews?: string | null
          salary?: string | null
        }
        Relationships: []
      }
      // order_details: {
      //   Row: {
      //     order_detail_id: number
      //     order_id: number | null
      //     product_id: number | null
      //     quantity: number | null
      //   }
      //   Insert: {
      //     order_detail_id?: number
      //     order_id?: number | null
      //     product_id?: number | null
      //     quantity?: number | null
      //   }
      //   Update: {
      //     order_detail_id?: number
      //     order_id?: number | null
      //     product_id?: number | null
      //     quantity?: number | null
      //   }
      //   Relationships: []
      // }
      // orders: {
      //   Row: {
      //     customer_id: number | null
      //     order_date: string | null
      //     order_id: number
      //   }
      //   Insert: {
      //     customer_id?: number | null
      //     order_date?: string | null
      //     order_id?: number
      //   }
      //   Update: {
      //     customer_id?: number | null
      //     order_date?: string | null
      //     order_id?: number
      //   }
      //   Relationships: []
      // }
      // products: {
      //   Row: {
      //     category_id: number | null
      //     price: number | null
      //     product_id: number
      //     product_name: string | null
      //     unit: string | null
      //   }
      //   Insert: {
      //     category_id?: number | null
      //     price?: number | null
      //     product_id?: number
      //     product_name?: string | null
      //     unit?: string | null
      //   }
      //   Update: {
      //     category_id?: number | null
      //     price?: number | null
      //     product_id?: number
      //     product_name?: string | null
      //     unit?: string | null
      //   }
      //   Relationships: []
      // }
      // profiles: {
      //   Row: {
      //     avatar_url: string | null
      //     full_name: string | null
      //     group: string
      //     id: string
      //     push_tokens: string | null
      //     updated_at: string | null
      //     username: string | null
      //     website: string | null
      //   }
      //   Insert: {
      //     avatar_url?: string | null
      //     full_name?: string | null
      //     group?: string
      //     id: string
      //     push_tokens?: string | null
      //     updated_at?: string | null
      //     username?: string | null
      //     website?: string | null
      //   }
      //   Update: {
      //     avatar_url?: string | null
      //     full_name?: string | null
      //     group?: string
      //     id?: string
      //     push_tokens?: string | null
      //     updated_at?: string | null
      //     username?: string | null
      //     website?: string | null
      //   }
      //   Relationships: [
      //     {
      //       foreignKeyName: "profiles_id_fkey"
      //       columns: ["id"]
      //       isOneToOne: true
      //       referencedRelation: "users"
      //       referencedColumns: ["id"]
      //     },
      //   ]
      // }
      // testproducts: {
      //   Row: {
      //     category_id: number | null
      //     product_name: string | null
      //     testproduct_id: number
      //   }
      //   Insert: {
      //     category_id?: number | null
      //     product_name?: string | null
      //     testproduct_id?: number
      //   }
      //   Update: {
      //     category_id?: number | null
      //     product_name?: string | null
      //     testproduct_id?: number
      //   }
      //   Relationships: []
      // }
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
