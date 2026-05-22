import { Server, Code, Briefcase, Users, Lock, Layout } from "lucide-react";

export type Lang = "en" | "uk";
export type SearchParams = Record<string, string | string[] | undefined>;

export const TRANSLATIONS = {
  en: {
    nav: {
      about: "About Me",
      challenges: "Solutions",
      expertise: "Expertise",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      cta: "Let's Talk",
    },
    hero: {
      badge: "Atlassian Certified Expert",
      titleTop: "The Atlassian System of Work",
      titleHighlight: "delivered with outcomes",
      desc: "I design and automate Atlassian Cloud setups - processes, automation, integrations, and reporting - so teams ship faster, support meets SLAs, and leadership gets real visibility.",
      btnPrimary: "View Services",
      btnSecondary: "Discuss Project",
    },
    about: {
      title: "What I Do",
      p1: "End-to-end Atlassian delivery: organization administration, permissions, project setup, Jira Service Management portals and SLAs, Confluence knowledge bases, Assets (CMDB), and enterprise-grade automation.",
      p2: "My focus is measurable impact: fewer manual steps, clearer ownership, cleaner data, lower license waste, and smoother cross-team delivery.",
      stat1: "Years of Exp",
      stat2: "Certified Expert",
    },
    tech: {
      title: "Tech Stack & Certifications",
      certsTitle: "Atlassian Certifications",
      certs: [
        {
          text: "ACP-OA Atlassian Cloud Organization Admin (ACP-520)",
          link: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=5b693d520b3f583d9e7087ae&ccat=52&date=2023-8-25",
          icon: "https://api.certmetrics.com/atlassian/badges/2/52.png",
        },
        {
          text: "ACP-JCA Jira Administrator for Cloud (ACP-120)",
          link: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=5b693d520b3f583d9e7087ae&ccat=26&date=2021-12-23",
          icon: "https://api.certmetrics.com/atlassian/badges/2/26.png",
        },
        {
          text: "ACP-MJCP Managing Jira Projects Cloud (ACP-620)",
          link: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=5b693d520b3f583d9e7087ae&ccat=30&date=2021-9-13",
          icon: "https://api.certmetrics.com/atlassian/badges/2/30.png",
        },
        {
          text: "Issue Security in Jira (ASB-152)",
          link: "https://cp.certmetrics.com/atlassian/en/public/transcript/HNCM16CKKMV41MSG",
          icon: "https://api.certmetrics.com/atlassian/badges/2/22.png",
        },
        "Agile in Jira",
        "ITSM with Jira Service Management Foundations",
      ],
      stack: [
        {
          category: "Scripting & Automation",
          items: "Automation for Jira (Smart Values, JSON), ScriptRunner (Groovy), Python",
        },
        { category: "Integration & Dev", items: "REST API, Webhooks, Forge, OAuth" },
        {
          category: "Advanced Apps",
          items: "Assets (Insight CMDB), EazyBI (BI Reports), Xray (QA/Test)",
        },
        { category: "Security & Infra", items: "Atlassian Guard (SSO/SCIM), AWS / Azure basics" },
      ],
    },
  challenges: {
    title: "Challenges I Solve",
    desc: "Typical bottlenecks organizations face and how they are addressed using the Atlassian ecosystem.",
    items: [
      {
        problem: "Process chaos and inconsistent standards",
        solution:
          "Pragmatic governance is implemented, workflows are normalized, and clear ownership and operating procedures are established across teams.",
      },
      {
        problem: "Disconnected tools and data silos",
        solution:
          "Jira is integrated with CI/CD, CRM, and collaboration tools via REST APIs and webhooks to create a cohesive delivery system.",
      },
      {
        problem: "Low visibility for management",
        solution:
          "Dashboards, reporting, and planning views are built to reflect the actual delivery state rather than raw ticket counts.",
      },
      {
        problem: "Slow support response and missed SLAs",
        solution:
          "Queues, SLAs, automations, and self-service portals are optimized to reduce MTTR and increase request deflection.",
      },
      {
        problem: "Compliance and security gaps",
        solution:
          "Permission models are hardened, access reviews are conducted, and configurations are aligned with GDPR and ISO-style requirements.",
      },
      {
        problem: "License cost waste",
        solution:
          "Usage and access paths are audited, licensing is optimized, and legacy projects are cleaned up to reduce total cost of ownership. Ongoing license management is automated.",
      },
    ],
  },
    areas: {
      title: "Areas of Expertise",
      desc: "I tailor Atlassian tooling to business processes across departments.",
      items: [
        {
          title: "IT & Operations (ITSM)",
          list: [
            "Incident/Change/Request management",
            "Asset Management (Assets/Insight)",
            "JSM Operations (Opsgenie) on-call setup",
          ],
          icon: "Server",
        },
        {
          title: "Software Delivery (DevOps)",
          list: ["Agile at scale", "CI/CD integrations (Bitbucket/GitLab/GitHub)", "Release and change enablement"],
          icon: "Code",
        },
        {
          title: "Project Management",
          list: ["Resource planning", "Advanced Roadmaps (Plans)", "Hybrid delivery models"],
          icon: "Briefcase",
        },
        {
          title: "HR & People Ops",
          list: ["Onboarding/offboarding automation", "Employee service desk", "Knowledge base enablement"],
          icon: "Users",
        },
        {
          title: "Legal & Finance",
          list: ["Approvals and controls", "Confluence documentation workflows", "Procurement and audit trails"],
          icon: "Lock",
        },
        {
          title: "Marketing & Sales",
          list: ["Campaign execution tracking", "CRM integrations", "Cross-team intake and triage"],
          icon: "Layout",
        },
      ],
    },
    services: {
      title: "Service Packages",
      desc: "Personalized collaboration models tailored to your goals.",
      items: [
        {
          title: "Basic Consulting",
          desc: "Practical improvements and safe configuration changes to stabilize your environment.",
          features: ["Instance health check", "User and license management", "Baseline setup", "Admin workshops"],
        },
        {
          title: "Atlassian Tech Assessment",
          desc: "Deep technical analysis to identify bottlenecks and risks.",
          features: ["Performance review", "Security check", "Migration planning", "Architecture review"],
        },
        {
          title: "Proof of Value (PoV)",
          desc: "Demonstrate value with a pilot before scaling company-wide.",
          features: ["Pilot delivery", "Targeted customization", "Hypothesis testing", "Value and ROI summary"],
        },
        {
          title: "R&D & Custom Dev",
          desc: "Automation and integrations for unique requirements.",
          features: ["Forge apps and extensions", "Automation design", "External integrations", "Platform hardening"],
        },
      ],
    },
    projects: {
      title: "Selected Projects",
      desc: "Enterprise-level system migration and optimization cases.",
      items: [
        {
          category: "Banking • Security & Compliance",
          title: "Atlassian Security Audit & Platform Hardening",
          desc: "Deep technical audit of Atlassian infrastructure for a major bank. Identified vulnerabilities and optimized performance under high load.",
          outcomes: ["Permission model redesigned", "Audit-ready controls improved", "GDPR/ISO readiness supported"],
          tags: ["Security", "Compliance", "Permissions"],
        },
        {
          category: "Telecom • ITSM Operations",
          title: "L1-L3 Support Model Optimization",
          desc: "Unified service desk for a global provider. Streamlined incident management and automated request fulfillment.",
          outcomes: ["MTTR reduced by ~40%", "Escalation flow redesigned", "24/7 on-call process improved"],
          tags: ["JSM", "SLA", "On-call"],
        },
        {
          category: "MSP • Multi-client Operations",
          title: "Multi-tenant Service Management Setup",
          desc: "Architecture for an IT service provider to support multiple external clients within a single Atlassian instance.",
          outcomes: ["Client data segregation improved", "Billing reports automated", "Governance model standardized"],
          tags: ["Multi-tenancy", "Governance", "Tempo"],
        },
        {
          category: "Enterprise • Migration & Governance",
          title: "Jira Consolidation and Workflow Unification",
          desc: "Merging 20+ disparate Jira Cloud/DC instances into a single target instance and implementing a unified methodology.",
          outcomes: ["20+ instances consolidated", "Global workflows standardized", "License costs optimized"],
          tags: ["Migration", "Data Center", "Governance"],
        },
      ],
    },
    contact: {
      title: "Let's Discuss Your Project",
      desc: "Fill out the form or contact me directly. I take on audits, migrations, automation, and integration work.",
      form: {
        name: "Your Name",
        email: "Email Address",
        message: "Message",
        submit: "Send Request",
        success: "Your message has been sent successfully! I'll get back to you shortly.",
        error: "Something went wrong. Please try again later or contact me directly via email.",
      },
      footer: "Based on professional expertise and hands-on delivery experience.",
    },
  },
  uk: {
    nav: {
      about: "Про мене",
      challenges: "Рішення",
      expertise: "Експертиза",
      services: "Послуги",
      projects: "Проєкти",
      contact: "Контакти",
      cta: "Зв'язатися",
    },
    hero: {
      badge: "Atlassian Certified Expert",
      titleTop: "Екосистема Atlassian",
      titleHighlight: "з результатами для бізнесу",
      desc: "Проєктую та автоматизую Atlassian Cloud - процеси, управління (governance), інтеграції та звітність - щоб команди працювали швидше, підтримка виконувала SLA, а менеджмент бачив реальну картину.",
      btnPrimary: "Оглянути послуги",
      btnSecondary: "Обговорити проєкт",
    },
    about: {
      title: "Чим я займаюся",
      p1: "Повний цикл впровадження Atlassian: адміністрування організації, схеми доступу, налаштування проєктів, портали та SLA в Jira Service Management, база знань у Confluence, Assets (CMDB) та автоматизації.",
      p2: "Фокус на вимірюваному ефекті: менше ручної роботи, чітка відповідальність, чисті дані, оптимізація витрат на ліцензії та краща взаємодія між командами.",
      stat1: "Років досвіду",
      stat2: "Certified Expert",
    },
    tech: {
      title: "Технології та Сертифікації",
      certsTitle: "Сертифікати Atlassian",
      certs: [
        {
          text: "ACP-OA Atlassian Cloud Organization Admin",
          link: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=5b693d520b3f583d9e7087ae&ccat=52&date=2023-8-25",
          icon: "https://api.certmetrics.com/atlassian/badges/2/52.png",
        },
        {
          text: "ACP-JCA Jira Administrator for Cloud",
          link: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=5b693d520b3f583d9e7087ae&ccat=26&date=2021-12-23",
          icon: "https://api.certmetrics.com/atlassian/badges/2/26.png",
        },
        {
          text: "ACP-MJCP Managing Jira Projects Cloud",
          link: "https://cp.certmetrics.com/atlassian/en/public/badge/c?id=5b693d520b3f583d9e7087ae&ccat=30&date=2021-9-13",
          icon: "https://api.certmetrics.com/atlassian/badges/2/30.png",
        },
        {
          text: "ASB-152 Issue Security in Jira",
          link: "https://cp.certmetrics.com/atlassian/en/public/transcript/HNCM16CKKMV41MSG",
          icon: "https://api.certmetrics.com/atlassian/badges/2/22.png",
        },
        "Agile in Jira",
        "ITSM with Jira Service Management Foundations",
      ],
      stack: [
        {
          category: "Scripting & Automation",
          items: "Automation for Jira (Smart Values, JSON), ScriptRunner (Groovy), Python",
        },
        { category: "Integration & Dev", items: "REST API, Webhooks, Forge, OAuth" },
        {
          category: "Advanced Apps",
          items: "Assets (Insight CMDB), EazyBI (BI Reports), Xray (QA/Test)",
        },
        { category: "Security & Infra", items: "Atlassian Guard (SSO/SCIM), AWS / Azure basics" },
      ],
    },
    challenges: {
      title: "Проблеми, які я вирішую",
      desc: "Типові вузькі місця та способи їх усунення за допомогою продуктів Atlassian.",
      items: [
        {
          problem: "Хаос у процесах та відсутність стандартів",
          solution:
            "Впроваджую практичне управління та стандарти, уніфікую робочі процеси і закріплюю відповідальних та правила роботи команд.",
        },
        {
          problem: "Ізольовані інструменти та дані",
          solution:
            "Інтегрую Jira з CI/CD, CRM та комунікаційними інструментами через REST API та вебхуки.",
        },
        {
          problem: "Немає прозорості для менеджменту",
          solution:
            "Будую звітність і дашборди, які показують реальний стан виконання, а не просто кількість задач.",
        },
        {
          problem: "Повільна підтримка та збої в SLA",
          solution:
            "Оптимізую черги, SLA, автоматизації та портали самообслуговування для зменшення MTTR та зростання самообслуговування (менше звернень до агентів).",
        },
        {
          problem: "Прогалини в безпеці та відповідності вимогам",
          solution:
            "Підсилюю модель прав доступу, проводжу перегляд доступів і документую зміни під вимоги GDPR/ISO-подібних стандартів.",
        },
        {
          problem: "Зайві витрати на ліцензії",
          solution:
            "Аналізую використання та доступ, оптимізую ліцензії, автоматизую процес ефективного управління ліцензіями.",
        },
      ],
    },
    areas: {
      title: "Сфери експертизи",
      desc: "Адаптую інструменти Atlassian під бізнес-процеси різних департаментів.",
      items: [
        {
          title: "IT та Оперейшн (ITSM)",
          list: [
            "Управління інцидентами/змінами/запитами",
            "Управління активами (Assets/Insight)",
            "JSM Operations (Opsgenie): налаштування on-call чергувань",
          ],
          icon: "Server",
        },
        {
          title: "Розробка та DevOps",
          list: ["Agile у масштабі", "Інтеграції CI/CD (Bitbucket/GitLab/GitHub)", "Релізи та керування змінами (change enablement)"],
          icon: "Code",
        },
        {
          title: "Управління проєктами",
          list: ["Планування ресурсів", "Advanced Roadmaps (Plans)", "Гібридні моделі виконання"],
          icon: "Briefcase",
        },
        {
          title: "HR та People Ops",
          list: ["Автоматизація онбордингу/офбордингу", "Сервіс-деск для співробітників", "Розвиток бази знань"],
          icon: "Users",
        },
        {
          title: "Юридичний та фінансовий департамент",
          list: ["Погодження та контроль", "Процеси документації в Confluence", "Закупівлі та аудиторські сліди (audit trail)"],
          icon: "Lock",
        },
        {
          title: "Маркетинг і продажі",
          list: ["Відстеження виконання кампаній", "Інтеграції з CRM", "Прийом і тріаж запитів між командами"],
          icon: "Layout",
        },
      ],
    },
    services: {
      title: "Пакети послуг",
      desc: "Персоналізовані моделі співпраці відповідно до ваших цілей.",
      items: [
        {
          title: "Базовий консалтинг",
          desc: "Практичні покращення та безпечні зміни конфігурації для стабілізації середовища.",
          features: ["Перевірка стану інстансу", "Керування користувачами та ліцензіями", "Базові налаштування", "Воркшопи для адміністраторів"],
        },
        {
          title: "Технічний аудит Atlassian",
          desc: "Глибокий технічний аналіз вузьких місць і ризиків.",
          features: ["Огляд продуктивності", "Перевірка безпеки", "План міграції", "Архітектурний рев'ю"],
        },
        {
          title: "Proof of Value (PoV)",
          desc: "Пілот, який показує цінність перед масштабуванням.",
          features: ["Пілот delivery", "Цільова кастомізація", "Тестування гіпотез", "Підсумок цінності та ROI"],
        },
        {
          title: "R&D та індивідуальна розробка",
          desc: "Автоматизації та інтеграції під нестандартні вимоги.",
          features: ["Forge-додатки", "Дизайн автоматизацій", "Зовнішні інтеграції", "Підсилення платформи"],
        },
      ],
    },
    projects: {
      title: "Вибрані проєкти",
      desc: "Кейси з міграції та оптимізації систем корпоративного рівня.",
      items: [
        {
          category: "Banking • Security & Compliance",
          title: "Аудит безпеки Atlassian та зміцнення платформи",
          desc: "Глибокий технічний аудит інфраструктури Atlassian для великого банку. Виявлення вразливостей та оптимізація продуктивності.",
          outcomes: ["Редизайн моделі прав доступу", "Покращено контроль для аудиту", "Підтримка відповідності GDPR/ISO"],
          tags: ["Security", "Compliance", "Permissions"],
        },
        {
          category: "Telecom • ITSM Operations",
          title: "Оптимізація моделі підтримки L1-L3",
          desc: "Побудова єдиного Service Desk для глобального провайдера. Оптимізація інцидентів та автоматизація запитів.",
          outcomes: ["MTTR скорочено на ~40%", "Редизайн процесу ескалацій", "Покращено чергування 24/7"],
          tags: ["JSM", "SLA", "On-call"],
        },
        {
          category: "MSP • Multi-client Operations",
          title: "Налаштування мультитенантного сервісного менеджменту",
          desc: "Архітектура для IT-провайдера, що дозволяє обслуговувати багатьох зовнішніх клієнтів в одному інстансі.",
          outcomes: ["Покращено сегрегацію даних клієнтів", "Автоматизовано білінгові звіти", "Стандартизовано модель управління"],
          tags: ["Multi-tenancy", "Governance", "Tempo"],
        },
        {
          category: "Enterprise • Migration & Governance",
          title: "Консолідація Jira та уніфікація воркфлоу",
          desc: "Злиття 20+ розрізнених Jira Cloud/DC в один таргет-інстанс та впровадження єдиної методології.",
          outcomes: ["Консолідовано 20+ інстансів", "Стандартизовано глобальні воркфлоу", "Оптимізовано витрати на ліцензії"],
          tags: ["Migration", "Data Center", "Governance"],
        },
      ],
    },
    contact: {
      title: "Давайте обговоримо ваш проєкт",
      desc: "Заповніть форму або напишіть напряму. Беру в роботу аудити, міграції, автоматизації та інтеграції.",
      form: {
        name: "Ваше ім'я",
        email: "Email",
        message: "Повідомлення",
        submit: "Відправити запит",
        success: "Ваше повідомлення успішно надіслано! Я зв'яжуся з вами найближчим часом.",
        error: "Щось пішло не так. Будь ласка, спробуйте ще раз пізніше або зв'яжіться зі мною напряму поштою.",
      },
      footer: "На основі професійної експертизи та практичного досвіду впроваджень.",
    },
  },
} as const;
