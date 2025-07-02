import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types pour TypeScript
export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: 'new' | 'read' | 'replied'
  ip_address?: string
  user_agent?: string
  created_at: string
  updated_at: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Fonction pour envoyer un message de contact
export async function sendContactMessage(formData: ContactFormData): Promise<{ success: boolean; message: string; id?: string }> {
  try {
    const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Erreur lors de l\'envoi du message')
    }

    return result
  } catch (error) {
    console.error('Error sending contact message:', error)
    throw error
  }
}

// Fonction pour récupérer les messages (admin uniquement)
export async function getContactMessages(): Promise<ContactMessage[]> {
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return data || []
}

// Fonction pour marquer un message comme lu
export async function markMessageAsRead(messageId: string): Promise<void> {
  const { error } = await supabase
    .from('contact_messages')
    .update({ status: 'read' })
    .eq('id', messageId)

  if (error) {
    throw error
  }
}

// Fonction pour marquer un message comme répondu
export async function markMessageAsReplied(messageId: string): Promise<void> {
  const { error } = await supabase
    .from('contact_messages')
    .update({ status: 'replied' })
    .eq('id', messageId)

  if (error) {
    throw error
  }
}