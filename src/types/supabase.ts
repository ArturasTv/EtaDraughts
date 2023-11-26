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
      games: {
        Row: {
          black_player_id: string | null;
          end_time: string | null;
          game_id: number;
          moves: string | null;
          result: number | null;
          start_time: string | null;
          time_control_id: string | null;
          white_player_id: string | null;
        };
        Insert: {
          black_player_id?: string | null;
          end_time?: string | null;
          game_id?: number;
          moves?: string | null;
          result?: number | null;
          start_time?: string | null;
          time_control_id?: string | null;
          white_player_id?: string | null;
        };
        Update: {
          black_player_id?: string | null;
          end_time?: string | null;
          game_id?: number;
          moves?: string | null;
          result?: number | null;
          start_time?: string | null;
          time_control_id?: string | null;
          white_player_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'games_black_player_id_fkey';
            columns: ['black_player_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['user_id'];
          },
          {
            foreignKeyName: 'games_time_control_id_fkey';
            columns: ['time_control_id'];
            isOneToOne: false;
            referencedRelation: 'time_controls';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'games_white_player_id_fkey';
            columns: ['white_player_id'];
            isOneToOne: false;
            referencedRelation: 'profiles';
            referencedColumns: ['user_id'];
          },
        ];
      };
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

export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row'];
export type Enums<T extends keyof Database['public']['Enums']> =
  Database['public']['Enums'][T];
