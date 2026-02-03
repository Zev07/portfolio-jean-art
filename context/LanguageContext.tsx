"use client"
import React, { createContext, useContext, useState } from 'react'

const translations = {
  pt: {
    title: "Portfólio",
    toggleTheme: "Alternar Tema",
    changeLang: "Mudar Idioma",
    welcome: "Bem-vindo ao meu portfólio",
    home: "Início",
    about: "Sobre",
    contact: "Contato",
    works: "Obras",
    
    // Home Page
    homeTitle: "Bem vindo ao meu Mundo",
    homeSubtitle: "Detalhes fazem a perfeição, mas a perfeição não é um detalhe.",
    viewFullPortfolio: "Ver o Portfólio Completo",
    aboutProcess: "Sobre o Processo",
    homeQuote: "Minha arte não é sobre a resposta, é sobre a pergunta. Eu busco nas texturas urbanas e na natureza as formas que dialogam com o silêncio interior.",
    readBiography: "Ler biografia",
    recentWorks: "Obras Recentes",
    interestedInCommission: "Interessado em pedir uma obra?",
    contactForDetails: "Entre em contato para comissões ou para mais detalhes.",
    talkToMe: "Fale Comigo",
    
    // About Page
    biography: "Biografia",
    trajectory: "Trajetória",
    visualArtist: "Artista Visual & Designer",
    bioParagraph1: "A arte começou para mim como uma forma de silenciar o ruído do mundo moderno. Nascido no Rio de Janeiro, sempre fui fascinado pelo contraste entre a natureza brutal das montanhas e a geometria rígida do concreto urbano.",
    bioParagraph2: "Minha pesquisa visual foca na decomposição dessas formas. Não busco retratar a realidade como ela é, mas como ela é sentida. O uso de texturas ásperas em contraposição a cores suaves reflete minha busca pessoal por equilíbrio em meio ao caos.",
    bioParagraph3: "Hoje, trabalho principalmente com óleo sobre tela e técnicas mistas, explorando a materialidade da tinta como uma extensão da própria pele.",
    
    // Works Page
    gallery: "Galeria",
    galleryDescription: "Uma curadoria dos trabalhos desenvolvidos nos últimos anos, desde estudos rápidos até peças de grande formato.",
    mainWorks: "Obras Principais",
    sketchesStudies: "Sketches & Estudos",
    creativeProcess: "Processo Criativo",
    
    // Contact Page
    createSomethingUnique: "Vamos criar algo único?",
    contactDescription: "Estou disponível para comissões personalizadas, colaborações em projetos e exposições. Conte-me sobre sua ideia.",
    email: "Email",
    studio: "Ateliê",
    followOnSocial: "Siga nas redes",
    requestQuote: "Solicitar Orçamento",
    yourName: "Seu Nome",
    yourEmail: "Seu Email",
    typeOfInterest: "Tipo de Interesse",
    message: "Mensagem",
    sendMessage: "Enviar Mensagem",
    sending: "Enviando...",
    messageSent: "Mensagem Enviada!",
    thankYouMessage: "Obrigado pelo contato. Responderei em até 24 horas úteis.",
    sendNewMessage: "Enviar nova mensagem",
    
    // Form Options
    customCommission: "Comissão de Obra (Personalizada)",
    buyExisting: "Compra de Obra Existente",
    exhibition: "Exposição / Galeria",
    otherSubject: "Outro Assunto",
    messagePlaceholder: "Conte um pouco sobre o que você procura...",
    namePlaceholder: "Ex: João Silva",
    emailPlaceholder: "Ex: joao@email.com",
    
    // Footer
    navigation: "Navegação",
    socialNetworks: "Redes",
    backToTop: "Voltar ao topo",
    footerDescription: "Explorando a complexidade humana através de traços, cores e texturas.",
    allRightsReserved: "All rights reserved.",
    
    // CV Types
    cvExhibition: "Exposição",
    award: "Prêmio",
    education: "Formação"
  },
  en: {
    title: "Portfolio",
    toggleTheme: "Toggle Theme",
    changeLang: "Change Language",
    welcome: "Welcome to my portfolio",
    home: "Home",
    about: "About",
    contact: "Contact",
    works: "Works",
    
    // Home Page
    homeTitle: "Welcome to my World",
    homeSubtitle: "Details make perfection, but perfection is not a detail.",
    viewFullPortfolio: "View Full Portfolio",
    aboutProcess: "About the Process",
    homeQuote: "My art is not about the answer, it's about the question. I seek in urban textures and nature the forms that dialogue with inner silence.",
    readBiography: "Read biography",
    recentWorks: "Recent Works",
    interestedInCommission: "Interested in commissioning a piece?",
    contactForDetails: "Get in touch for commissions or more details.",
    talkToMe: "Talk to Me",
    
    // About Page
    biography: "Biography",
    trajectory: "Trajectory",
    visualArtist: "Visual Artist & Designer",
    bioParagraph1: "Art began for me as a way to silence the noise of the modern world. Born in Rio de Janeiro, I have always been fascinated by the contrast between the brutal nature of the mountains and the rigid geometry of urban concrete.",
    bioParagraph2: "My visual research focuses on the decomposition of these forms. I don't seek to portray reality as it is, but as it is felt. The use of rough textures in contrast to soft colors reflects my personal search for balance amidst chaos.",
    bioParagraph3: "Today, I work mainly with oil on canvas and mixed techniques, exploring the materiality of paint as an extension of the skin itself.",
    
    // Works Page
    gallery: "Gallery",
    galleryDescription: "A curation of works developed in recent years, from quick studies to large-format pieces.",
    mainWorks: "Main Works",
    sketchesStudies: "Sketches & Studies",
    creativeProcess: "Creative Process",
    
    // Contact Page
    createSomethingUnique: "Let's create something unique?",
    contactDescription: "I am available for custom commissions, project collaborations, and exhibitions. Tell me about your idea.",
    email: "Email",
    studio: "Studio",
    followOnSocial: "Follow on social",
    requestQuote: "Request Quote",
    yourName: "Your Name",
    yourEmail: "Your Email",
    typeOfInterest: "Type of Interest",
    message: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    messageSent: "Message Sent!",
    thankYouMessage: "Thank you for contacting me. I will respond within 24 business hours.",
    sendNewMessage: "Send new message",
    
    // Form Options
    customCommission: "Custom Artwork Commission",
    buyExisting: "Purchase Existing Artwork",
    exhibition: "Exhibition / Gallery",
    otherSubject: "Other Subject",
    messagePlaceholder: "Tell me a bit about what you're looking for...",
    namePlaceholder: "Ex: John Smith",
    emailPlaceholder: "Ex: john@email.com",
    
    // Footer
    navigation: "Navigation",
    socialNetworks: "Social",
    backToTop: "Back to top",
    footerDescription: "Exploring human complexity through strokes, colors and textures.",
    allRightsReserved: "All rights reserved.",
    
    // CV Types
    cvExhibition: "Exhibition",
    award: "Award",
    education: "Education"
  }
}

type Language = 'pt' | 'en'
type Translations = typeof translations.pt

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem('lang') as Language
      return (saved === 'pt' || saved === 'en') ? saved : 'pt'
    }
    return 'pt'
  })

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem('lang', lang)
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language]
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage deve ser usado dentro de LanguageProvider')
  return context
}