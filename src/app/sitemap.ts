export default function sitemap() {
  const baseUrl = 'https://dokumentpro.se'
  
  const templates = [
    'anstallningsintyg',
    'hyresavi', 
    'lakarintyg',
    'kontoutdrag',
    'lonespecifikation',
    'gymnasiebetyg',
    'arbetsgivarintyg',
    'simkortsregistering',
    'kvitto',
    'anstallningsavtal'
  ]

  const templateUrls = templates.map(template => ({
    url: `${baseUrl}/editor/${template}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...templateUrls,
  ]
}