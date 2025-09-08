'use client'

import { useState, useEffect } from 'react'

const templates = {
  'anstallningsintyg': {
    id: 'anstallningsintyg',
    name: 'Anställningsintyg',
    fields: [
      { id: 'recipient_name', label: 'Namn på anställd', type: 'text', required: true },
      { id: 'personal_number', label: 'Personnummer', type: 'text', required: true },
      { id: 'company_name', label: 'Företagsnamn', type: 'text', required: true },
      { id: 'start_date', label: 'Startdatum', type: 'date', required: true },
      { id: 'end_date', label: 'Slutdatum', type: 'date', required: false },
      { id: 'position', label: 'Befattning', type: 'text', required: true },
      { id: 'body', label: 'Beskrivning av arbetsuppgifter', type: 'textarea', required: true }
    ]
  },
  'hyresavi': {
    id: 'hyresavi',
    name: 'Hyresavi',
    fields: [
      { id: 'tenant_name', label: 'Hyresgästens namn', type: 'text', required: true },
      { id: 'address', label: 'Adress', type: 'text', required: true },
      { id: 'period', label: 'Period (månad)', type: 'text', required: true },
      { id: 'rent_amount', label: 'Hyresbelopp (SEK)', type: 'number', required: true },
      { id: 'due_date', label: 'Förfallodatum', type: 'date', required: true },
      { id: 'landlord_name', label: 'Hyresvärdens namn', type: 'text', required: true }
    ]
  },
  'kvitto': {
    id: 'kvitto',
    name: 'Kvitto (generering)',
    fields: [
      { id: 'company_name', label: 'Företagsnamn', type: 'text', required: true },
      { id: 'company_address', label: 'Företagsadress', type: 'text', required: true },
      { id: 'customer_name', label: 'Kundnamn', type: 'text', required: true },
      { id: 'receipt_number', label: 'Kvittonummer', type: 'text', required: true },
      { id: 'date', label: 'Datum', type: 'date', required: true },
      { id: 'items', label: 'Produkter/Tjänster', type: 'textarea', required: true },
      { id: 'total_amount', label: 'Totalsumma (SEK)', type: 'number', required: true },
      { id: 'payment_method', label: 'Betalmetod', type: 'text', required: true }
    ]
  },
  'anstallningsavtal': {
    id: 'anstallningsavtal',
    name: 'Anställningsavtal',
    fields: [
      { id: 'employee_name', label: 'Anställds namn', type: 'text', required: true },
      { id: 'personal_number', label: 'Personnummer', type: 'text', required: true },
      { id: 'company_name', label: 'Företagsnamn', type: 'text', required: true },
      { id: 'position', label: 'Befattning', type: 'text', required: true },
      { id: 'start_date', label: 'Startdatum', type: 'date', required: true },
      { id: 'employment_type', label: 'Anställningstyp', type: 'select', options: ['Tillsvidare', 'Visstid', 'Projektanställning'], required: true },
      { id: 'salary', label: 'Månadslön (SEK)', type: 'number', required: true },
      { id: 'working_hours', label: 'Arbetstid per vecka', type: 'number', required: true },
      { id: 'probation_period', label: 'Prövotid (månader)', type: 'number', required: false },
      { id: 'job_description', label: 'Arbetsuppgifter', type: 'textarea', required: true }
    ]
  },
  'lonespecifikation': {
    id: 'lonespecifikation',
    name: 'Lönespecifikation',
    fields: [
      { id: 'employee_name', label: 'Anställds namn', type: 'text', required: true },
      { id: 'personal_number', label: 'Personnummer', type: 'text', required: true },
      { id: 'company_name', label: 'Företagsnamn', type: 'text', required: true },
      { id: 'period', label: 'Löneperiod', type: 'text', required: true },
      { id: 'basic_salary', label: 'Grundlön (SEK)', type: 'number', required: true },
      { id: 'overtime_pay', label: 'Övertidsersättning (SEK)', type: 'number', required: false },
      { id: 'bonus', label: 'Bonus/Provision (SEK)', type: 'number', required: false },
      { id: 'gross_salary', label: 'Bruttolön (SEK)', type: 'number', required: true },
      { id: 'tax', label: 'Skatt (SEK)', type: 'number', required: true },
      { id: 'social_fees', label: 'Sociala avgifter (SEK)', type: 'number', required: true },
      { id: 'net_salary', label: 'Nettolön (SEK)', type: 'number', required: true }
    ]
  },
  'gymnasiebetyg': {
    id: 'gymnasiebetyg',
    name: 'Gymnasiebetyg',
    fields: [
      { id: 'student_name', label: 'Elevens namn', type: 'text', required: true },
      { id: 'personal_number', label: 'Personnummer', type: 'text', required: true },
      { id: 'school_name', label: 'Skolans namn', type: 'text', required: true },
      { id: 'program', label: 'Program', type: 'text', required: true },
      { id: 'graduation_date', label: 'Examendatum', type: 'date', required: true },
      { id: 'grade_level', label: 'Betygsnivå', type: 'select', options: ['Topbetyg (A)', 'Hög nivå (A/B mix)', 'Genomsnittlig (B/C mix)', 'Lägre nivå (C/D mix)'], required: true },
      { id: 'specialization', label: 'Inriktning/Specialisering', type: 'text', required: true },
      { id: 'merit_points', label: 'Meritpoäng', type: 'number', required: true }
    ]
  },
  'arbetsgivarintyg': {
    id: 'arbetsgivarintyg',
    name: 'Arbetsgivarintyg',
    fields: [
      { id: 'employee_name', label: 'Anställds namn', type: 'text', required: true },
      { id: 'personal_number', label: 'Personnummer', type: 'text', required: true },
      { id: 'company_name', label: 'Företagsnamn', type: 'text', required: true },
      { id: 'position', label: 'Befattning', type: 'text', required: true },
      { id: 'start_date', label: 'Startdatum', type: 'date', required: true },
      { id: 'end_date', label: 'Slutdatum', type: 'date', required: false },
      { id: 'employment_type', label: 'Anställningsform', type: 'text', required: true },
      { id: 'work_performance', label: 'Arbetsprestanda', type: 'textarea', required: true },
      { id: 'reason_for_leaving', label: 'Anledning till uppsägning', type: 'text', required: false }
    ]
  },
  'simkortsregistering': {
    id: 'simkortsregistering',
    name: 'Simkortsregistrering',
    fields: [
      { id: 'iccid', label: 'ICCID-nummer', type: 'text', required: true },
      { id: 'operator', label: 'Operatör', type: 'select', options: ['Tele2', 'Telia', 'Telenor', 'Tre', 'Halebop', 'Comviq', 'Hallon'], required: true },
      { id: 'customer_name', label: 'Kundnamn', type: 'text', required: true },
      { id: 'personal_number', label: 'Personnummer', type: 'text', required: true },
      { id: 'phone_number', label: 'Telefonnummer', type: 'text', required: true },
      { id: 'registration_date', label: 'Registreringsdatum', type: 'date', required: true }
    ]
  },
  'kontoutdrag': {
    id: 'kontoutdrag',
    name: 'Kontoutdrag',
    fields: [
      { id: 'account_holder', label: 'Kontoinnehavare', type: 'text', required: true },
      { id: 'personal_number', label: 'Personnummer', type: 'text', required: true },
      { id: 'bank_name', label: 'Banknamn', type: 'text', required: true },
      { id: 'account_number', label: 'Kontonummer', type: 'text', required: true },
      { id: 'period_from', label: 'Period från', type: 'date', required: true },
      { id: 'period_to', label: 'Period till', type: 'date', required: true },
      { id: 'special_requirements', label: 'Speciella krav/Detaljer', type: 'textarea', required: true }
    ]
  },
  'lakarintyg': {
    id: 'lakarintyg',
    name: 'Läkarintyg/Sjukintyg',
    fields: [
      { id: 'patient_name', label: 'Patientens namn', type: 'text', required: true },
      { id: 'personal_number', label: 'Personnummer', type: 'text', required: true },
      { id: 'certificate_type', label: 'Intygstyp', type: 'select', options: ['ADHD-utredning', 'Förhandlingslam', 'Ej anpassad för arbete', 'Allmänt sjukintyg', 'Stressrelaterad ohälsa', 'Fysisk skada/åkomma'], required: true },
      { id: 'doctor_name', label: 'Läkarens namn', type: 'text', required: true },
      { id: 'clinic_name', label: 'Klinik/Vårdcentral', type: 'text', required: true },
      { id: 'diagnosis_date', label: 'Diagnosdatum', type: 'date', required: true },
      { id: 'valid_from', label: 'Giltigt från', type: 'date', required: true },
      { id: 'valid_to', label: 'Giltigt till', type: 'date', required: false },
      { id: 'work_capacity', label: 'Arbetsförmåga (%)', type: 'select', options: ['0%', '25%', '50%', '75%', '100%'], required: true },
      { id: 'medical_description', label: 'Medicinsk beskrivning', type: 'textarea', required: true },
      { id: 'restrictions', label: 'Begränsningar/Rekommendationer', type: 'textarea', required: true }
    ]
  }
}

export default function EditorPage({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [previewUrl, setPreviewUrl] = useState('')

  const template = templates[params.id as keyof typeof templates]

  useEffect(() => {
    if (template) {
      const searchParams = new URLSearchParams({
        templateId: template.id,
        ...formData
      })
      setPreviewUrl(`/api/preview?${searchParams.toString()}`)
    }
  }, [formData, template])

  // Auto-fill demo data for testing
  useEffect(() => {
    if (template) {
      const demoData = getDemoData(template.id)
      setFormData(demoData)
    }
  }, [template])

  const getDemoData = (templateId: string): Record<string, string> => {
    const demos: Record<string, Record<string, string>> = {
      'anstallningsintyg': {
        'recipient_name': 'Anna Andersson',
        'personal_number': '19850315-1234',
        'company_name': 'TechSweden AB',
        'start_date': '2023-01-15',
        'position': 'Frontend Developer',
        'body': 'Anna arbetar som frontend-utvecklare med fokus på React och TypeScript. Hon är ansvarig för utveckling av användargränssnitt och har visat utmärkt prestation i sitt arbete.'
      },
      'hyresavi': {
        'tenant_name': 'Erik Johansson',
        'address': 'Storgatan 15, 111 23 Stockholm',
        'period': 'Mars 2024', 
        'rent_amount': '12500',
        'due_date': '2024-03-31',
        'landlord_name': 'Stockholms Bostäder AB'
      },
      'lakarintyg': {
        'patient_name': 'Maria Lindberg',
        'personal_number': '19900520-5678',
        'certificate_type': 'Stressrelaterad ohälsa',
        'doctor_name': 'Dr. Hans Petersson',
        'clinic_name': 'Vårdcentralen Östermalm',
        'diagnosis_date': '2024-02-15',
        'valid_from': '2024-02-15',
        'valid_to': '2024-05-15',
        'work_capacity': '50%',
        'medical_description': 'Patienten lider av stressrelaterad ohälsa med symtom som trötthet, koncentrationssvårigheter och sömnproblem.',
        'restrictions': 'Rekommenderas arbetstidsreduktion till 50% samt undvikande av stressiga arbetsuppgifter.'
      },
      'kontoutdrag': {
        'account_holder': 'Lars Nilsson',
        'personal_number': '19751201-9012',
        'bank_name': 'Handelsbanken',
        'account_number': '6000 12345678',
        'period_from': '2024-01-01',
        'period_to': '2024-01-31',
        'special_requirements': 'Kontoutdrag behövs för låneansökan. Ska visa alla in- och utgående transaktioner samt månadssaldo.'
      },
      'lonespecifikation': {
        'employee_name': 'Sofia Karlsson',
        'personal_number': '19880910-3456',
        'company_name': 'Konsult Sverige AB',
        'period': 'Februari 2024',
        'basic_salary': '35000',
        'overtime_pay': '2500',
        'bonus': '1000',
        'gross_salary': '38500',
        'tax': '11550',
        'social_fees': '2310',
        'net_salary': '24640'
      }
    }
    return demos[templateId] || {}
  }

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Mall hittades inte</p>
          <a href="/" className="text-blue-600 hover:underline">← Tillbaka till startsidan</a>
        </div>
      </div>
    )
  }

  const handleInputChange = (fieldId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors">
            ← Tillbaka till startsidan
          </a>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Redigera: {template.name}
          </h1>
          <p className="text-gray-600">
            Fyll i fälten nedan för att anpassa ditt dokument
          </p>
        </div>

        {/* Special message for kontoutdrag */}
        {template.id === 'kontoutdrag' && (
          <div className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-lg p-6">
            <div className="flex">
              <span className="text-yellow-400 text-2xl mr-3">⚠️</span>
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Speciell hantering för kontoutdrag</h3>
                <p className="text-yellow-700">
                  För kontoutdrag kan du inte anpassa dokumentet själv. Efter betalning kommer vi att kontakta dig 
                  inom 24 timmar för att få detaljerade uppgifter och skapa ett anpassat kontoutdrag åt dig.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-blue-600">📝</span>
              </div>
              Dokumentinformation
            </h2>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">Fyll i automatiskt för att testa:</span>
                <button
                  onClick={() => setFormData(getDemoData(template.id))}
                  className="text-sm bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  ✨ Fyll i demo-data
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {template.fields.map((field) => (
                <div key={field.id}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      value={formData[field.id] || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      placeholder={`Ange ${field.label.toLowerCase()}`}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                      value={formData[field.id] || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                    >
                      <option value="">Välj alternativ...</option>
                      {(field as any).options?.map((option: string) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      value={formData[field.id] || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      placeholder={`Ange ${field.label.toLowerCase()}`}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm text-gray-500">
                    {Object.keys(formData).length} / {template.fields.filter(f => f.required).length} required fields
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${Math.min(100, (Object.keys(formData).length / template.fields.filter(f => f.required).length) * 100)}%` 
                    }}
                  ></div>
                </div>
              </div>
              
              <button 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                onClick={() => {
                  alert('Checkout-funktionen kommer snart! Din data har sparats och du kommer att omdirigeras till betalning.')
                }}
              >
                <span className="mr-2">💳</span>
                Gå till betalning →
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-3">
                Säker betalning via Stripe & Klarna
              </p>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-green-600">👁️</span>
              </div>
              Förhandsvisning
            </h2>
            <div className="border-2 border-dashed border-gray-200 rounded-xl overflow-hidden" style={{ height: '600px' }}>
              {previewUrl ? (
                <iframe
                  src={previewUrl}
                  className="w-full h-full"
                  title="Dokumentförhandsvisning"
                />
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 p-8">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">📄</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Ingen förhandsvisning än</h3>
                  <p className="text-center">
                    Fyll i fälten till vänster för att se hur ditt dokument kommer att se ut
                  </p>
                </div>
              )}
            </div>
            
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>🔒 SSL-krypterat</span>
              <span>📋 GDPR-kompatibelt</span>
              <span>⚖️ Juridiskt korrekt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}