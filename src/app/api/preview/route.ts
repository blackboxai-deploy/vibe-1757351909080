import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const templateId = searchParams.get('templateId')

  if (!templateId) {
    return new NextResponse('Missing templateId', { status: 400 })
  }

  // Get all form data from query params
  const data: Record<string, string> = {}
  searchParams.forEach((value, key) => {
    if (key !== 'templateId') {
      data[key] = value
    }
  })

  // Generate HTML based on template
  let htmlContent = ''
  
  if (templateId === 'anstallningsintyg') {
    htmlContent = `
      <!DOCTYPE html>
      <html lang="sv">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Anställningsintyg</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; }
          .header { text-align: center; margin-bottom: 40px; }
          .content { max-width: 600px; margin: 0 auto; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; }
          h1 { color: #2563eb; margin-bottom: 30px; }
        </style>
      </head>
      <body>
        <div class="content">
          <div class="header">
            <h1>ANSTÄLLNINGSINTYG</h1>
          </div>
          
          <div class="field">
            <span class="label">Namn på anställd:</span> ${data.recipient_name || '[Namn saknas]'}
          </div>
          
          <div class="field">
            <span class="label">Personnummer:</span> ${data.personal_number || '[Personnummer saknas]'}
          </div>
          
          <div class="field">
            <span class="label">Företagsnamn:</span> ${data.company_name || '[Företag saknas]'}
          </div>
          
          <div class="field">
            <span class="label">Befattning:</span> ${data.position || '[Befattning saknas]'}
          </div>
          
          <div class="field">
            <span class="label">Startdatum:</span> ${data.start_date || '[Startdatum saknas]'}
          </div>
          
          ${data.end_date ? `<div class="field"><span class="label">Slutdatum:</span> ${data.end_date}</div>` : ''}
          
          <div class="field" style="margin-top: 30px;">
            <span class="label">Beskrivning av arbetsuppgifter:</span><br><br>
            ${data.body || '[Beskrivning saknas]'}
          </div>
          
          <div style="margin-top: 50px; text-align: center; color: #666;">
            <p><em>Detta dokument är genererat digitalt</em></p>
          </div>
        </div>
      </body>
      </html>
    `
  } else if (templateId === 'hyresavi') {
    htmlContent = `
      <!DOCTYPE html>
      <html lang="sv">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hyresavi</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; }
          .header { text-align: center; margin-bottom: 40px; }
          .content { max-width: 600px; margin: 0 auto; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; }
          h1 { color: #059669; margin-bottom: 30px; }
          .amount { font-size: 1.2em; color: #059669; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="content">
          <div class="header">
            <h1>HYRESAVI</h1>
          </div>
          
          <div class="field">
            <span class="label">Hyresgäst:</span> ${data.tenant_name || '[Namn saknas]'}
          </div>
          
          <div class="field">
            <span class="label">Adress:</span> ${data.address || '[Adress saknas]'}
          </div>
          
          <div class="field">
            <span class="label">Period:</span> ${data.period || '[Period saknas]'}
          </div>
          
          <div class="field">
            <span class="label">Hyresbelopp:</span> 
            <span class="amount">${data.rent_amount || '0'} SEK</span>
          </div>
          
          <div class="field">
            <span class="label">Förfallodatum:</span> ${data.due_date || '[Datum saknas]'}
          </div>
          
          <div class="field" style="margin-top: 30px;">
            <span class="label">Hyresvärd:</span> ${data.landlord_name || '[Hyresvärd saknas]'}
          </div>
          
          <div style="margin-top: 50px; text-align: center; color: #666;">
            <p><em>Betala senast angivet förfallodatum</em></p>
          </div>
        </div>
      </body>
      </html>
    `
  } else {
    // Generate generic preview for other templates
    htmlContent = `
      <!DOCTYPE html>
      <html lang="sv">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${getTemplateName(templateId)}</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            padding: 40px; 
            line-height: 1.6; 
            background: #f8fafc;
          }
          .container {
            background: white;
            max-width: 700px;
            margin: 0 auto;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .header { 
            text-align: center; 
            margin-bottom: 40px; 
            padding-bottom: 20px;
            border-bottom: 3px solid #3b82f6;
          }
          .field { 
            margin-bottom: 20px;
            padding: 15px;
            background: #f1f5f9;
            border-left: 4px solid #3b82f6;
            border-radius: 6px;
          }
          .label { 
            font-weight: bold; 
            color: #1e40af;
            display: block;
            margin-bottom: 5px;
          }
          .value {
            color: #374151;
          }
          h1 { 
            color: #1e40af; 
            margin-bottom: 10px;
            font-size: 2.2em;
          }
          .preview-badge {
            display: inline-block;
            background: #fef3c7;
            color: #92400e;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9em;
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="preview-badge">📋 Förhandsvisning</div>
            <h1>${getTemplateName(templateId).toUpperCase()}</h1>
          </div>
          
          ${generatePreviewFields(data)}
          
          <div style="margin-top: 50px; text-align: center; color: #6b7280; font-size: 0.9em;">
            <p><em>Detta dokument genereras automatiskt av DokumentPro</em></p>
            <p>🔒 Säkert • ⚖️ Juridiskt korrekt • 📋 GDPR-kompatibelt</p>
          </div>
        </div>
      </body>
      </html>
    `
  }

  function getTemplateName(templateId: string): string {
    const names: Record<string, string> = {
      'anstallningsintyg': 'Anställningsintyg',
      'hyresavi': 'Hyresavi',
      'kvitto': 'Kvitto',
      'anstallningsavtal': 'Anställningsavtal',
      'lonespecifikation': 'Lönespecifikation',
      'gymnasiebetyg': 'Gymnasiebetyg',
      'arbetsgivarintyg': 'Arbetsgivarintyg',
      'simkortsregistering': 'Simkortsregistrering',
      'kontoutdrag': 'Kontoutdrag',
      'lakarintyg': 'Läkarintyg/Sjukintyg'
    }
    return names[templateId] || 'Okänt dokument'
  }

  function generatePreviewFields(data: Record<string, string>): string {
    if (Object.keys(data).length === 0) {
      return '<div class="field"><div class="value" style="text-align: center; font-style: italic; color: #6b7280;">Fyll i formuläret för att se förhandsvisning</div></div>'
    }

    return Object.entries(data)
      .map(([key, value]) => {
        const label = formatFieldLabel(key)
        return `
          <div class="field">
            <span class="label">${label}:</span>
            <div class="value">${value || '[Ej angivet]'}</div>
          </div>
        `
      })
      .join('')
  }

  function formatFieldLabel(key: string): string {
    const labels: Record<string, string> = {
      'recipient_name': 'Namn på anställd',
      'personal_number': 'Personnummer',
      'company_name': 'Företagsnamn',
      'start_date': 'Startdatum',
      'end_date': 'Slutdatum',
      'position': 'Befattning',
      'body': 'Beskrivning av arbetsuppgifter',
      'tenant_name': 'Hyresgästens namn',
      'address': 'Adress',
      'period': 'Period',
      'rent_amount': 'Hyresbelopp (SEK)',
      'due_date': 'Förfallodatum',
      'landlord_name': 'Hyresvärdens namn',
      'customer_name': 'Kundnamn',
      'receipt_number': 'Kvittonummer',
      'date': 'Datum',
      'items': 'Produkter/Tjänster',
      'total_amount': 'Totalsumma (SEK)',
      'payment_method': 'Betalmetod',
      'employee_name': 'Anställds namn',
      'employment_type': 'Anställningstyp',
      'salary': 'Månadslön (SEK)',
      'working_hours': 'Arbetstid per vecka',
      'job_description': 'Arbetsuppgifter',
      'patient_name': 'Patientens namn',
      'doctor_name': 'Läkarens namn',
      'clinic_name': 'Klinik/Vårdcentral',
      'diagnosis_date': 'Diagnosdatum',
      'certificate_type': 'Intygstyp',
      'student_name': 'Elevens namn',
      'school_name': 'Skolans namn',
      'program': 'Program',
      'graduation_date': 'Examendatum',
      'grade_level': 'Betygsnivå',
      'merit_points': 'Meritpoäng',
      'iccid': 'ICCID-nummer',
      'operator': 'Operatör',
      'phone_number': 'Telefonnummer',
      'account_holder': 'Kontoinnehavare',
      'bank_name': 'Banknamn',
      'account_number': 'Kontonummer'
    }
    
    return labels[key] || key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  }

  return new NextResponse(htmlContent, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
}