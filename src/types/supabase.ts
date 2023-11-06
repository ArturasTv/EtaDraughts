export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          created_at: string;
          deletion_initiated: boolean;
          email: string | null;
          name: string;
          rating: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          deletion_initiated?: boolean;
          email?: string | null;
          name: string;
          rating?: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          deletion_initiated?: boolean;
          email?: string | null;
          name?: string;
          rating?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      time_controls: {
        Row: {
          created_at: string;
          id: string;
          initial_time: number | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          initial_time?: number | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          initial_time?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
