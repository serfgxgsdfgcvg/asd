# Portfolio Theo Blondel

Portfolio professionnel avec formulaire de contact intégré utilisant Supabase.

## 🚀 Fonctionnalités

- **Portfolio interactif** avec projets Behance
- **Formulaire de contact sécurisé** avec validation côté client et serveur
- **Base de données Supabase** pour stocker les messages
- **Envoi d'emails automatique** via Resend
- **Protection anti-spam** avec rate limiting
- **Interface responsive** et accessible
- **Mode sombre/clair** avec support multilingue

## 📧 Système de Contact

### Fonctionnalités du formulaire:
- ✅ Validation en temps réel
- ✅ Protection anti-spam (3 messages/heure par email)
- ✅ Sauvegarde sécurisée en base de données
- ✅ Envoi d'email automatique avec template HTML
- ✅ Gestion d'erreurs complète
- ✅ Interface utilisateur intuitive

### Architecture technique:
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Supabase Edge Functions
- **Base de données**: PostgreSQL (Supabase)
- **Emails**: Resend API
- **Sécurité**: RLS (Row Level Security) + Rate limiting

## 🛠️ Configuration

### 1. Prérequis
- Node.js 18+
- Compte Supabase
- Compte Resend (pour les emails)

### 2. Installation
```bash
npm install
```

### 3. Configuration Supabase

1. **Créer un projet Supabase**
   - Allez sur [supabase.com](https://supabase.com)
   - Créez un nouveau projet

2. **Configurer la base de données**
   ```bash
   # La migration sera appliquée automatiquement
   # Fichier: supabase/migrations/create_contact_messages.sql
   ```

3. **Déployer la fonction Edge**
   ```bash
   # La fonction sera déployée automatiquement
   # Fichier: supabase/functions/send-contact-email/index.ts
   ```

### 4. Configuration des variables d'environnement

1. **Copiez le fichier d'exemple**
   ```bash
   cp .env.example .env.local
   ```

2. **Remplissez vos clés**
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key
   RESEND_API_KEY=re_your_resend_key
   ```

3. **Trouvez vos clés Supabase**
   - Allez dans votre projet Supabase
   - Settings > API
   - Copiez l'URL et la clé anonyme

4. **Configurez Resend**
   - Créez un compte sur [resend.com](https://resend.com)
   - Vérifiez votre domaine
   - Générez une clé API

### 5. Lancement
```bash
npm run dev
```

## 📊 Gestion des messages

### Accès aux messages
Les messages sont stockés dans la table `contact_messages` avec:
- Informations du contact (nom, email, sujet, message)
- Métadonnées (IP, User-Agent, timestamps)
- Statut (new, read, replied)

### Sécurité
- **RLS activé**: Seuls les administrateurs peuvent lire les messages
- **Rate limiting**: Maximum 3 messages par heure par email
- **Validation**: Côté client et serveur
- **Sanitisation**: Protection contre les injections

### API disponible
```typescript
// Envoyer un message
await sendContactMessage({
  name: "John Doe",
  email: "john@example.com", 
  subject: "Demande de collaboration",
  message: "Bonjour, je souhaiterais..."
})

// Récupérer les messages (admin)
const messages = await getContactMessages()

// Marquer comme lu
await markMessageAsRead(messageId)

// Marquer comme répondu  
await markMessageAsReplied(messageId)
```

## 🔧 Personnalisation

### Modifier l'email de réception
Dans `supabase/functions/send-contact-email/index.ts`:
```typescript
to: ['votre-email@domain.com']
```

### Personnaliser le template email
Modifiez la variable `emailHtml` dans la fonction Edge.

### Ajuster le rate limiting
Dans la migration SQL, modifiez la fonction `check_rate_limit`.

## 🚀 Déploiement

### Netlify (recommandé)
```bash
npm run build
# Déployez le dossier dist/
```

### Variables d'environnement en production
Ajoutez dans votre plateforme de déploiement:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Configuration Supabase en production
- Configurez les domaines autorisés dans Authentication > URL Configuration
- Ajoutez votre domaine de production

## 📝 Support

Pour toute question ou problème:
1. Vérifiez que Supabase est correctement configuré
2. Vérifiez que Resend est configuré et le domaine vérifié
3. Consultez les logs dans Supabase > Edge Functions
4. Testez la fonction Edge directement dans l'interface Supabase

## 🔒 Sécurité

- Toutes les données sont validées côté client et serveur
- Protection anti-spam avec rate limiting
- RLS activé sur toutes les tables
- Logs d'audit avec IP et User-Agent
- Sanitisation des entrées utilisateur

---

Développé avec ❤️ par Theo Blondel