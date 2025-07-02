import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface EmailPayload {
  to: string[]
  subject: string
  html: string
  from?: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Vérifier que c'est une requête POST
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Récupérer les données du formulaire
    const formData: ContactFormData = await req.json()
    
    // Validation des données
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return new Response(
        JSON.stringify({ error: 'Tous les champs sont requis' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: 'Email invalide' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Validation longueur
    if (formData.name.trim().length < 2 || 
        formData.subject.trim().length < 5 || 
        formData.message.trim().length < 10) {
      return new Response(
        JSON.stringify({ error: 'Les champs ne respectent pas la longueur minimale' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Initialiser Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Récupérer l'adresse IP et User-Agent
    const clientIP = req.headers.get('x-forwarded-for') || 
                    req.headers.get('x-real-ip') || 
                    'unknown'
    const userAgent = req.headers.get('user-agent') || 'unknown'

    // Vérifier le rate limiting
    const { data: rateLimitCheck, error: rateLimitError } = await supabase
      .rpc('check_rate_limit', { user_email: formData.email })

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError)
    } else if (!rateLimitCheck) {
      return new Response(
        JSON.stringify({ 
          error: 'Trop de messages envoyés. Veuillez attendre avant de renvoyer un message.' 
        }),
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Sauvegarder le message dans la base de données
    const { data: savedMessage, error: dbError } = await supabase
      .from('contact_messages')
      .insert({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        ip_address: clientIP,
        user_agent: userAgent
      })
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      return new Response(
        JSON.stringify({ error: 'Erreur lors de la sauvegarde du message' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Préparer l'email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau message de contact - ${formData.subject}</title>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #1f2937 0%, #374151 100%); color: white; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: 600; color: #374151; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
            .field-value { background-color: #f8fafc; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #3b82f6; }
            .message-content { background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; white-space: pre-wrap; }
            .footer { background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb; }
            .footer p { margin: 0; color: #6b7280; font-size: 14px; }
            .metadata { background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-top: 20px; }
            .metadata-item { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 12px; color: #64748b; }
            .metadata-item:last-child { margin-bottom: 0; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 Nouveau Message de Contact</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">theoblondel.ch</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Nom</div>
                <div class="field-value">${formData.name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📧 Email</div>
                <div class="field-value">
                  <a href="mailto:${formData.email}" style="color: #3b82f6; text-decoration: none;">
                    ${formData.email}
                  </a>
                </div>
              </div>
              
              <div class="field">
                <div class="field-label">📝 Sujet</div>
                <div class="field-value">${formData.subject}</div>
              </div>
              
              <div class="field">
                <div class="field-label">💬 Message</div>
                <div class="message-content">${formData.message}</div>
              </div>

              <div class="metadata">
                <div class="metadata-item">
                  <span><strong>ID du message:</strong></span>
                  <span>${savedMessage.id}</span>
                </div>
                <div class="metadata-item">
                  <span><strong>Date de réception:</strong></span>
                  <span>${new Date().toLocaleString('fr-FR', { 
                    timeZone: 'Europe/Zurich',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</span>
                </div>
                <div class="metadata-item">
                  <span><strong>Adresse IP:</strong></span>
                  <span>${clientIP}</span>
                </div>
                <div class="metadata-item">
                  <span><strong>Navigateur:</strong></span>
                  <span>${userAgent.substring(0, 50)}${userAgent.length > 50 ? '...' : ''}</span>
                </div>
              </div>

              <div style="text-align: center;">
                <a href="mailto:${formData.email}?subject=Re: ${formData.subject}" class="cta-button">
                  ↩️ Répondre directement
                </a>
              </div>
            </div>
            
            <div class="footer">
              <p>Ce message a été envoyé depuis le formulaire de contact de <strong>theoblondel.ch</strong></p>
              <p style="margin-top: 10px; font-size: 12px;">
                Message automatiquement sauvegardé dans Supabase • ID: ${savedMessage.id}
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Envoyer l'email via Resend (vous devrez configurer votre clé API Resend)
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    
    if (resendApiKey) {
      try {
        const emailPayload: EmailPayload = {
          from: 'Contact Form <noreply@theoblondel.ch>',
          to: ['hello@theoblondel.ch'], // Remplacez par votre email
          subject: `💼 Nouveau contact: ${formData.subject}`,
          html: emailHtml
        }

        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailPayload),
        })

        if (!emailResponse.ok) {
          const emailError = await emailResponse.text()
          console.error('Email sending failed:', emailError)
          // Ne pas faire échouer la requête si l'email échoue
        } else {
          console.log('Email sent successfully')
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError)
        // Ne pas faire échouer la requête si l'email échoue
      }
    } else {
      console.log('RESEND_API_KEY not configured, skipping email sending')
    }

    // Réponse de succès
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message envoyé avec succès',
        id: savedMessage.id
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Erreur interne du serveur',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})