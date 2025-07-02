/*
  # Création de la table pour les messages de contact

  1. Nouvelle table
    - `contact_messages`
      - `id` (uuid, clé primaire)
      - `name` (text, nom du contact)
      - `email` (text, email du contact)
      - `subject` (text, sujet du message)
      - `message` (text, contenu du message)
      - `status` (text, statut du message: 'new', 'read', 'replied')
      - `ip_address` (text, adresse IP pour la sécurité)
      - `user_agent` (text, navigateur utilisé)
      - `created_at` (timestamp, date de création)
      - `updated_at` (timestamp, date de mise à jour)

  2. Sécurité
    - Activer RLS sur la table `contact_messages`
    - Politique pour permettre l'insertion publique (pour le formulaire)
    - Politique pour la lecture admin uniquement

  3. Index
    - Index sur `created_at` pour les performances
    - Index sur `status` pour filtrer les messages
    - Index sur `email` pour éviter le spam
*/

-- Créer la table contact_messages
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (length(trim(name)) >= 2),
  email text NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  subject text NOT NULL CHECK (length(trim(subject)) >= 5),
  message text NOT NULL CHECK (length(trim(message)) >= 10),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  ip_address inet,
  user_agent text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Activer RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre l'insertion publique (formulaire de contact)
CREATE POLICY "Allow public insert for contact form"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Politique pour la lecture (admin uniquement via service role)
CREATE POLICY "Allow service role to read all messages"
  ON contact_messages
  FOR SELECT
  TO service_role
  USING (true);

-- Politique pour la mise à jour (admin uniquement via service role)
CREATE POLICY "Allow service role to update messages"
  ON contact_messages
  FOR UPDATE
  TO service_role
  USING (true);

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);

-- Fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger pour mettre à jour updated_at automatiquement
DROP TRIGGER IF EXISTS update_contact_messages_updated_at ON contact_messages;
CREATE TRIGGER update_contact_messages_updated_at
  BEFORE UPDATE ON contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Fonction pour limiter le spam (max 3 messages par email par heure)
CREATE OR REPLACE FUNCTION check_rate_limit(user_email text)
RETURNS boolean AS $$
DECLARE
  message_count integer;
BEGIN
  SELECT COUNT(*)
  INTO message_count
  FROM contact_messages
  WHERE email = user_email
    AND created_at > now() - interval '1 hour';
  
  RETURN message_count < 3;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;