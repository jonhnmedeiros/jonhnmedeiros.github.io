export type Language = "en" | "pt";

export const translations = {
  en: {
    nav: {
      about: "About me",
      aboutShort: "About",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Jonathan Medeiros",
      role: "Senior Software Engineer & Frontend Specialist",
      description:
        "Specializing in high-performance frontend ecosystems (Vue, Nuxt, Svelte) and currently expanding into React/Next.js. Proven experience in national-scale platforms and asynchronous, remote-first environments.",
      ctaContact: "Get in touch",
      ctaProjects: "View my experiences",
    },
    about: {
      title: "About me",
      yearsBold: "8 years of experience",
      p1Prefix: "With over",
      p1Suffix:
        "in the tech industry, I've transitioned from Technology Management to high-level Software Engineering. My expertise lies in the Vue/Nuxt ecosystem and TypeScript, with a solid foundation in building national-scale platforms like FGTS Digital.",
      p2: "I am a firm believer in asynchronous work, continuous learning, and the power of clean, maintainable code.",
    },
    experience: {
      title: "Experience & Projects",
      subtitle:
        "Professional experience across national-scale platforms, plus personal products I'm building and shipping on my own.",
      downloadCV: "📄 Download CV",
      nhs: {
        title: "NHS (Present)",
        desc: "Leading frontend across the EnergiView ecosystem for NHS Energia: a Quasar/Capacitor mobile app for inverter and nobreak monitoring, a React admin dashboard, and a Nuxt 4 landing page — architecture decisions and AI-assisted delivery included.",
      },
      axon: {
        title: "Axon Technology",
        desc: "Architected responsive interfaces with Svelte, achieving a 50% boost in user engagement.",
      },
      serpro: {
        title: "Serpro (FGTS Digital)",
        desc: "Contributed to a high-impact national platform, developing a reusable component library used by millions of Brazilian citizens.",
      },
      skills: {
        title: "Skills",
        frontend: { title: "Frontend", desc: "Vue, Nuxt, React, TypeScript, Svelte" },
        devops: { title: "DevOps", desc: "Docker, AWS, CI/CD" },
        soft: {
          title: "Soft Skills",
          desc: "Async Communication, Self-guided work, Technical Leadership",
        },
      },
      keyProjects: {
        title: "Key Projects",
        fgts: {
          title: "Enterprise Financial Platform (FGTS Digital):",
          desc: "Scalable Angular architecture serving millions of users nationwide. Focused on accessibility and high-performance design systems.",
        },
        energiview: {
          title: "EnergiView Ecosystem (NHS Energia):",
          desc: "Frontend architecture and development across four interconnected products: a Quasar/Capacitor mobile app (Android/iOS) for real-time monitoring of solar inverters and nobreaks; a React 19 + TanStack Query admin dashboard with Leaflet-based device mapping; a Quasar admin panel for managing devices, users and organizations, covered by Playwright E2E tests; and a Nuxt 4 marketing landing page deployed on AWS Lambda. AI-assisted workflows used throughout to optimize delivery and maintainability.",
        },
        axon: {
          title: "High-Performance Interfaces (Axon):",
          desc: "Architecture of Svelte-based applications with a 50% increase in user engagement through UX optimization.",
        },
      },
      personal: {
        title: "Personal Projects",
        subtitle:
          "Side projects I build and maintain on my own time to explore new stacks end-to-end, from database to UI.",
        visit: "Visit",
        projects: {
          reaperStrike:
            "Artisanal ultra-spicy hot sauce e-commerce, with catalog, cart and checkout via Mercado Pago.",
          finTrack:
            "Personal finance tracker with an investments module (stocks, REITs, crypto) and multi-user support.",
        },
      },
    },
    contact: {
      title: "Let's Connect!",
      subtitle: "Feel free to reach out on any of these platforms",
      footer: "© 2026 Jonathan Medeiros. Built with React & Tailwind CSS",
    },
  },
  pt: {
    nav: {
      about: "Sobre mim",
      aboutShort: "Sobre",
      experience: "Experiência",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou Jonathan Medeiros",
      role: "Engenheiro de Software Sênior & Especialista Frontend",
      description:
        "Especializado em ecossistemas frontend de alta performance (Vue, Nuxt, Svelte) e atualmente expandindo para React/Next.js. Experiência comprovada em plataformas de escala nacional e ambientes assíncronos e remotos.",
      ctaContact: "Entre em contato",
      ctaProjects: "Ver minhas experiências",
    },
    about: {
      title: "Sobre mim",
      yearsBold: "8 anos de experiência",
      p1Prefix: "Com mais de",
      p1Suffix:
        "na indústria de tecnologia, migrei de Gestão de Tecnologia para Engenharia de Software de alto nível. Minha expertise está no ecossistema Vue/Nuxt e TypeScript, com uma base sólida na construção de plataformas de escala nacional como o FGTS Digital.",
      p2: "Acredito firmemente no trabalho assíncrono, no aprendizado contínuo e no poder de um código limpo e sustentável.",
    },
    experience: {
      title: "Experiência & Projetos",
      subtitle:
        "Experiência profissional em plataformas de escala nacional, além de produtos pessoais que construo e publico por conta própria.",
      downloadCV: "📄 Baixar Currículo",
      nhs: {
        title: "NHS (Atual)",
        desc: "Liderando o frontend do ecossistema EnergiView da NHS Energia: um app mobile em Quasar/Capacitor para monitoramento de inversores e nobreaks, um dashboard admin em React e uma landing page em Nuxt 4 — incluindo decisões de arquitetura e entrega assistida por IA.",
      },
      axon: {
        title: "Axon Technology",
        desc: "Arquitetei interfaces responsivas com Svelte, alcançando um aumento de 50% no engajamento dos usuários.",
      },
      serpro: {
        title: "Serpro (FGTS Digital)",
        desc: "Contribuí para uma plataforma nacional de alto impacto, desenvolvendo uma biblioteca de componentes reutilizável usada por milhões de cidadãos brasileiros.",
      },
      skills: {
        title: "Habilidades",
        frontend: { title: "Frontend", desc: "Vue, Nuxt, React, TypeScript, Svelte" },
        devops: { title: "DevOps", desc: "Docker, AWS, CI/CD" },
        soft: {
          title: "Habilidades Interpessoais",
          desc: "Comunicação assíncrona, autonomia, liderança técnica",
        },
      },
      keyProjects: {
        title: "Principais Projetos",
        fgts: {
          title: "Plataforma Financeira Corporativa (FGTS Digital):",
          desc: "Arquitetura Angular escalável atendendo milhões de usuários em todo o país. Foco em acessibilidade e design systems de alta performance.",
        },
        energiview: {
          title: "Ecossistema EnergiView (NHS Energia):",
          desc: "Arquitetura e desenvolvimento de frontend em quatro produtos interligados: um app mobile em Quasar/Capacitor (Android/iOS) para monitoramento em tempo real de inversores solares e nobreaks; um dashboard admin em React 19 + TanStack Query com mapeamento de dispositivos via Leaflet; um painel admin em Quasar para gestão de dispositivos, usuários e organizações, coberto por testes E2E com Playwright; e uma landing page institucional em Nuxt 4 hospedada na AWS Lambda. Fluxos de trabalho assistidos por IA usados durante todo o processo para otimizar entrega e manutenibilidade.",
        },
        axon: {
          title: "Interfaces de Alta Performance (Axon):",
          desc: "Arquitetura de aplicações baseadas em Svelte com um aumento de 50% no engajamento dos usuários através de otimização de UX.",
        },
      },
      personal: {
        title: "Projetos Pessoais",
        subtitle:
          "Projetos paralelos que construo e mantenho no meu tempo livre para explorar novas stacks de ponta a ponta, do banco de dados à interface.",
        visit: "Acessar",
        projects: {
          reaperStrike:
            "E-commerce artesanal de molhos de pimenta ultra-picantes, com catálogo, carrinho e checkout via Mercado Pago.",
          finTrack:
            "Controle financeiro pessoal com módulo de investimentos (ações, FIIs, cripto) e suporte multi-usuário.",
        },
      },
    },
    contact: {
      title: "Vamos nos conectar!",
      subtitle: "Fique à vontade para me chamar em qualquer uma dessas plataformas",
      footer: "© 2026 Jonathan Medeiros. Feito com React & Tailwind CSS",
    },
  },
} as const;
