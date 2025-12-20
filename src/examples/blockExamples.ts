/**
 * Example Block Configurations
 * Ready-to-use examples for common blocks
 * 
 * PURPOSE:
 * These examples serve as:
 * 1. Demonstrations of block capabilities
 * 2. Starting templates for users
 * 3. Reference implementations for developers
 * 
 * USAGE:
 * - Import specific examples: import { heroExample } from '@/examples/blockExamples';
 * - Get example by name: getExample('hero')
 * - Get all examples: allExamples
 * 
 * ADDING NEW EXAMPLES:
 * 1. Create a new BaseBlockConfig constant
 * 2. Add it to the allExamples array
 * 3. Add it to the examples object in getExample()
 */

import { BaseBlockConfig, BlockCategory } from '@/types/blockTypes';

/**
 * Example: Hero Section with CTA
 */
export const heroExample: BaseBlockConfig = {
  id: 'example_hero',
  type: 'cta',
  name: 'Hero секція',
  category: BlockCategory.INTERACTIVE,
  config: {
    type: 'cta',
    layout: 'cover',
    title: 'Створюйте Чудові Сайти',
    subtitle: 'За Лічені Хвилини',
    description: 'Потужний конструктор блоків для WordPress з повною підтримкою Elementor',
    button: {
      text: 'Почати зараз',
      link: '#',
      icon: 'arrow-right',
    },
    secondaryButton: {
      text: 'Дізнатись більше',
      link: '#about',
    },
    imagePosition: 'background',
  },
  spacing: {
    padding: {
      desktop: { all: '80px 40px' },
      mobile: { all: '60px 20px' },
    },
  },
  background: {
    type: 'gradient',
    gradient: {
      type: 'linear',
      angle: 135,
      colors: [
        { color: '#667eea', position: 0 },
        { color: '#764ba2', position: 100 },
      ],
    },
  },
  animation: {
    type: 'fadeInUp',
    duration: 800,
    trigger: 'on-load',
  },
};

/**
 * Example: Feature List with Icons
 */
export const featuresExample: BaseBlockConfig = {
  id: 'example_features',
  type: 'list',
  name: 'Список переваг',
  category: BlockCategory.TEXT,
  config: {
    type: 'list',
    listType: 'icon',
    items: [
      {
        id: '1',
        content: 'Drag & Drop інтерфейс',
        icon: 'mouse-pointer',
      },
      {
        id: '2',
        content: 'Responsive дизайн',
        icon: 'smartphone',
      },
      {
        id: '3',
        content: '60+ готових блоків',
        icon: 'grid',
      },
      {
        id: '4',
        content: 'Експорт в Elementor',
        icon: 'download',
      },
    ],
    iconPosition: 'left',
    iconColor: '#10b981',
  },
  spacing: {
    gap: { desktop: '16px' },
    padding: { desktop: { all: '40px' } },
  },
};

/**
 * Example: Pricing Table
 */
export const pricingExample: BaseBlockConfig = {
  id: 'example_pricing',
  type: 'pricing-table',
  name: 'Таблиця цін',
  category: BlockCategory.ECOMMERCE,
  config: {
    type: 'pricing-table',
    columns: { desktop: 3, tablet: 2, mobile: 1 },
    plans: [
      {
        id: '1',
        name: 'Базовий',
        price: '299',
        period: '/міс',
        features: [
          { text: '10 блоків', included: true },
          { text: 'Базова підтримка', included: true },
          { text: '1 сайт', included: true },
          { text: 'Преміум блоки', included: false },
        ],
        button: { text: 'Вибрати', link: '#' },
      },
      {
        id: '2',
        name: 'Професійний',
        price: '599',
        period: '/міс',
        featured: true,
        badge: 'Популярний',
        features: [
          { text: 'Всі блоки', included: true },
          { text: 'Пріоритетна підтримка', included: true },
          { text: '5 сайтів', included: true },
          { text: 'Преміум блоки', included: true },
        ],
        button: { text: 'Вибрати', link: '#' },
      },
      {
        id: '3',
        name: 'Корпоративний',
        price: '1299',
        period: '/міс',
        features: [
          { text: 'Всі блоки + кастомні', included: true },
          { text: 'Персональна підтримка', included: true },
          { text: 'Необмежено сайтів', included: true },
          { text: 'White-label', included: true },
        ],
        button: { text: 'Зв\'язатись', link: '#' },
      },
    ],
  },
  spacing: {
    padding: { desktop: { all: '60px 20px' } },
    gap: { desktop: '24px' },
  },
};

/**
 * Example: Image Gallery
 */
export const galleryExample: BaseBlockConfig = {
  id: 'example_gallery',
  type: 'gallery',
  name: 'Галерея проектів',
  category: BlockCategory.MEDIA,
  config: {
    type: 'gallery',
    layout: 'grid',
    columns: { desktop: 4, tablet: 2, mobile: 1 },
    gap: '16px',
    images: [
      { id: '1', src: 'https://via.placeholder.com/400x300', alt: 'Проект 1', caption: 'Веб-сайт' },
      { id: '2', src: 'https://via.placeholder.com/400x300', alt: 'Проект 2', caption: 'Лендінг' },
      { id: '3', src: 'https://via.placeholder.com/400x300', alt: 'Проект 3', caption: 'E-commerce' },
      { id: '4', src: 'https://via.placeholder.com/400x300', alt: 'Проект 4', caption: 'Блог' },
    ],
    lightbox: true,
    hoverEffect: 'grow',
  },
  spacing: {
    padding: { desktop: { all: '40px' } },
  },
};

/**
 * Example: Testimonials Slider
 */
export const testimonialsExample: BaseBlockConfig = {
  id: 'example_testimonials',
  type: 'testimonial',
  name: 'Відгуки клієнтів',
  category: BlockCategory.SOCIAL,
  config: {
    type: 'testimonial',
    layout: 'slider',
    testimonials: [
      {
        id: '1',
        name: 'Олександр Петренко',
        title: 'CEO',
        company: 'TechStart',
        avatar: 'https://i.pravatar.cc/150?img=1',
        rating: 5,
        content: 'Чудовий інструмент! Тепер створення блоків займає хвилини замість годин.',
      },
      {
        id: '2',
        name: 'Марія Коваленко',
        title: 'Дизайнер',
        company: 'Creative Studio',
        avatar: 'https://i.pravatar.cc/150?img=2',
        rating: 5,
        content: 'Інтуїтивний інтерфейс та величезна бібліотека готових блоків. Рекомендую!',
      },
      {
        id: '3',
        name: 'Ігор Сидоренко',
        title: 'Розробник',
        company: 'WebPro',
        avatar: 'https://i.pravatar.cc/150?img=3',
        rating: 5,
        content: 'Економить тонни часу. Тепер можу зосередитись на логіці, а не на верстці.',
      },
    ],
    showRating: true,
    showAvatar: true,
    sliderSettings: {
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      dots: true,
    },
  },
  spacing: {
    padding: { desktop: { all: '60px 40px' } },
  },
  background: {
    type: 'color',
    color: '#f9fafb',
  },
};

/**
 * Example: Contact Form
 */
export const contactFormExample: BaseBlockConfig = {
  id: 'example_contact',
  type: 'contact-form',
  name: 'Форма зв\'язку',
  category: BlockCategory.FORMS,
  config: {
    type: 'contact-form',
    fields: [
      {
        id: '1',
        type: 'text',
        label: 'Ім\'я',
        placeholder: 'Введіть ваше ім\'я',
        required: true,
        width: { desktop: 'half' },
      },
      {
        id: '2',
        type: 'email',
        label: 'Email',
        placeholder: 'your@email.com',
        required: true,
        width: { desktop: 'half' },
      },
      {
        id: '3',
        type: 'tel',
        label: 'Телефон',
        placeholder: '+380',
        required: false,
        width: { desktop: 'half' },
      },
      {
        id: '4',
        type: 'select',
        label: 'Тема',
        required: true,
        width: { desktop: 'half' },
        options: [
          { label: 'Загальне питання', value: 'general' },
          { label: 'Технічна підтримка', value: 'support' },
          { label: 'Продажі', value: 'sales' },
        ],
      },
      {
        id: '5',
        type: 'textarea',
        label: 'Повідомлення',
        placeholder: 'Розкажіть нам більше...',
        required: true,
        width: { desktop: 'full' },
      },
    ],
    submitButton: {
      text: 'Відправити',
      position: 'left',
    },
    successMessage: 'Дякуємо! Ми зв\'яжемось з вами найближчим часом.',
  },
  spacing: {
    padding: { desktop: { all: '40px' } },
  },
  border: {
    width: '1px',
    style: 'solid',
    color: '#e5e7eb',
    radius: { all: '12px' },
  },
  shadow: {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
};

/**
 * Example: FAQ Accordion
 */
export const faqExample: BaseBlockConfig = {
  id: 'example_faq',
  type: 'faq',
  name: 'Часті питання',
  category: BlockCategory.INTERACTIVE,
  config: {
    type: 'faq',
    layout: 'accordion',
    items: [
      {
        id: '1',
        question: 'Як додати новий блок?',
        answer: 'Натисніть кнопку "+" та виберіть потрібний блок із списку. Доступно 60+ різних типів блоків.',
      },
      {
        id: '2',
        question: 'Чи підтримується адаптивний дизайн?',
        answer: 'Так! Всі блоки повністю адаптивні. Ви можете налаштувати окремі параметри для mobile, tablet та desktop.',
      },
      {
        id: '3',
        question: 'Як експортувати блоки в Elementor?',
        answer: 'Після налаштування блоку, натисніть "Експорт" або "Копіювати". Отриманий HTML/CSS код можна вставити у віджет HTML в Elementor.',
      },
      {
        id: '4',
        question: 'Чи можна додавати власні блоки?',
        answer: 'Звісно! Система спроектована для легкого розширення. Дивіться документацію в BLOCK_SYSTEM_README.md',
      },
    ],
    searchable: true,
    schema: true,
  },
  spacing: {
    padding: { desktop: { all: '40px' } },
  },
};

/**
 * Example: Team Members Grid
 */
export const teamExample: BaseBlockConfig = {
  id: 'example_team',
  type: 'team-member',
  name: 'Наша команда',
  category: BlockCategory.TEAM_CONTACTS,
  config: {
    type: 'team-member',
    layout: 'grid',
    columns: { desktop: 3, tablet: 2, mobile: 1 },
    members: [
      {
        id: '1',
        name: 'Олена Шевченко',
        position: 'CEO & Founder',
        bio: 'Досвід у веб-розробці 10+ років',
        image: 'https://i.pravatar.cc/300?img=10',
        social: [
          { network: 'linkedin', url: '#' },
          { network: 'twitter', url: '#' },
        ],
      },
      {
        id: '2',
        name: 'Дмитро Мельник',
        position: 'Lead Developer',
        bio: 'Full-stack розробник, експерт у React та Node.js',
        image: 'https://i.pravatar.cc/300?img=11',
        social: [
          { network: 'github', url: '#' },
          { network: 'linkedin', url: '#' },
        ],
      },
      {
        id: '3',
        name: 'Анна Бондаренко',
        position: 'UX/UI Designer',
        bio: 'Створює інтуїтивні та красиві інтерфейси',
        image: 'https://i.pravatar.cc/300?img=12',
        social: [
          { network: 'behance', url: '#' },
          { network: 'dribbble', url: '#' },
        ],
      },
    ],
    showSocial: true,
    hoverEffect: 'lift',
  },
  spacing: {
    padding: { desktop: { all: '60px 40px' } },
    gap: { desktop: '24px' },
  },
};

/**
 * Example: Newsletter Signup
 * Modern newsletter subscription form with GDPR compliance
 */
export const newsletterExample: BaseBlockConfig = {
  id: 'example_newsletter',
  type: 'newsletter-form',
  name: 'Підписка на розсилку',
  category: BlockCategory.FORMS,
  config: {
    type: 'newsletter-form',
    title: '📧 Будьте в курсі подій',
    description: 'Отримуйте новини та оновлення безпосередньо на вашу пошту',
    placeholder: 'Ваш email...',
    buttonText: 'Підписатись',
    layout: 'inline',
    gdprCheckbox: {
      enabled: true,
      text: 'Я погоджуюсь з умовами обробки персональних даних',
    },
    successMessage: 'Дякуємо за підписку! Перевірте свою пошту.',
  },
  spacing: {
    padding: { desktop: { all: '50px 40px' } },
  },
  background: {
    type: 'gradient',
    gradient: {
      type: 'linear',
      angle: 45,
      colors: [
        { color: '#4F46E5', position: 0 },
        { color: '#7C3AED', position: 100 },
      ],
    },
  },
  border: {
    radius: { all: '16px' },
  },
};

/**
 * Example: Stats Counter
 * Animated statistics counters showcasing key metrics
 */
export const statsExample: BaseBlockConfig = {
  id: 'example_stats',
  type: 'counter',
  name: 'Статистика',
  category: BlockCategory.DATA_STATS,
  config: {
    type: 'counter',
    layout: { desktop: 'grid' },
    columns: { desktop: 4, tablet: 2, mobile: 1 },
    counters: [
      {
        id: '1',
        startValue: 0,
        endValue: 10000,
        suffix: '+',
        label: 'Задоволених клієнтів',
        icon: '😊',
        duration: 2000,
      },
      {
        id: '2',
        startValue: 0,
        endValue: 250,
        suffix: '+',
        label: 'Завершених проектів',
        icon: '🚀',
        duration: 2000,
      },
      {
        id: '3',
        startValue: 0,
        endValue: 50,
        suffix: '+',
        label: 'Членів команди',
        icon: '👥',
        duration: 2000,
      },
      {
        id: '4',
        startValue: 0,
        endValue: 15,
        suffix: ' років',
        label: 'Досвіду',
        icon: '⭐',
        duration: 2000,
      },
    ],
    animateOnScroll: true,
  },
  spacing: {
    padding: { desktop: { all: '60px 20px' } },
    gap: { desktop: '32px' },
  },
  background: {
    type: 'color',
    color: '#F9FAFB',
  },
};

/**
 * Example: Service Cards
 * Grid of service/feature cards with icons
 */
export const servicesExample: BaseBlockConfig = {
  id: 'example_services',
  type: 'feature-box',
  name: 'Наші послуги',
  category: BlockCategory.INFO,
  config: {
    type: 'feature-box',
    layout: 'grid',
    columns: { desktop: 3, tablet: 2, mobile: 1 },
    iconPosition: 'top',
    features: [
      {
        id: '1',
        icon: '🎨',
        title: 'Веб-дизайн',
        description: 'Створюємо красиві та функціональні інтерфейси',
        link: '#design',
      },
      {
        id: '2',
        icon: '💻',
        title: 'Розробка',
        description: 'Професійна розробка веб-додатків',
        link: '#development',
      },
      {
        id: '3',
        icon: '📱',
        title: 'Мобільні додатки',
        description: 'Нативні та крос-платформені рішення',
        link: '#mobile',
      },
      {
        id: '4',
        icon: '🚀',
        title: 'SEO оптимізація',
        description: 'Виведемо ваш сайт в ТОП Google',
        link: '#seo',
      },
      {
        id: '5',
        icon: '🛡️',
        title: 'Безпека',
        description: 'Захист даних та інфраструктури',
        link: '#security',
      },
      {
        id: '6',
        icon: '📊',
        title: 'Аналітика',
        description: 'Відстеження та аналіз метрик',
        link: '#analytics',
      },
    ],
  },
  spacing: {
    padding: { desktop: { all: '60px 40px' } },
    gap: { desktop: '32px' },
  },
};

/**
 * Example: Video Background Hero
 * Hero section with video background
 */
export const videoHeroExample: BaseBlockConfig = {
  id: 'example_video_hero',
  type: 'video-background',
  name: 'Hero з відео фоном',
  category: BlockCategory.MEDIA,
  config: {
    type: 'video-background',
    videoUrl: 'https://example.com/hero-video.mp4',
    autoplay: true,
    loop: true,
    muted: true,
    overlay: {
      enabled: true,
      color: '#000000',
      opacity: 0.5,
    },
    minHeight: '600px',
    content: [
      {
        id: 'content_1',
        type: 'heading',
        config: {
          type: 'heading',
          tag: 'h1',
          content: 'Інновації у дії',
          typography: {
            fontSize: { desktop: '56px', tablet: '42px', mobile: '32px' },
            color: '#FFFFFF',
            fontWeight: '700',
          },
        },
      },
    ],
  },
  spacing: {
    padding: { desktop: { all: '100px 40px' } },
  },
};

/**
 * Example: Product Showcase
 * E-commerce product grid with filters
 */
export const productShowcaseExample: BaseBlockConfig = {
  id: 'example_products',
  type: 'product-grid',
  name: 'Каталог товарів',
  category: BlockCategory.ECOMMERCE,
  config: {
    type: 'product-grid',
    layout: 'grid',
    columns: { desktop: 4, tablet: 3, mobile: 2 },
    productsPerPage: 12,
    showFilters: true,
    showSorting: true,
    showQuickView: true,
    showWishlist: true,
    hoverEffect: 'lift',
    pagination: true,
  },
  spacing: {
    padding: { desktop: { all: '40px' } },
    gap: { desktop: '24px' },
  },
};

/**
 * Example: Timeline / History
 * Company history or process timeline
 */
export const timelineExample: BaseBlockConfig = {
  id: 'example_timeline',
  type: 'timeline',
  name: 'Історія компанії',
  category: BlockCategory.DATA_STATS,
  config: {
    type: 'timeline',
    orientation: { desktop: 'vertical' },
    alternating: true,
    items: [
      {
        id: '1',
        date: '2015',
        title: 'Заснування компанії',
        description: 'Почали з невеликого стартапу з 3 людьми',
        icon: '🎯',
      },
      {
        id: '2',
        date: '2017',
        title: 'Перший великий проект',
        description: 'Запустили платформу для 100,000+ користувачів',
        icon: '🚀',
      },
      {
        id: '3',
        date: '2019',
        title: 'Розширення команди',
        description: 'Зросли до 20+ професіоналів',
        icon: '👥',
      },
      {
        id: '4',
        date: '2021',
        title: 'Міжнародний ринок',
        description: 'Вийшли на європейський ринок',
        icon: '🌍',
      },
      {
        id: '5',
        date: '2024',
        title: 'Лідери індустрії',
        description: 'ТОП-10 компаній в нашій сфері',
        icon: '🏆',
      },
    ],
    lineColor: '#3B82F6',
    iconStyle: {
      backgroundColor: '#3B82F6',
      color: '#FFFFFF',
      size: '48px',
    },
  },
  spacing: {
    padding: { desktop: { all: '60px 40px' } },
  },
};

/**
 * All examples collection
 * Complete list of all available examples
 */
export const allExamples: BaseBlockConfig[] = [
  heroExample,
  featuresExample,
  pricingExample,
  galleryExample,
  testimonialsExample,
  contactFormExample,
  faqExample,
  teamExample,
  newsletterExample,
  statsExample,
  servicesExample,
  videoHeroExample,
  productShowcaseExample,
  timelineExample,
];

/**
 * Get example by name
 * @param name - Example identifier (e.g., 'hero', 'pricing')
 * @returns BaseBlockConfig or undefined if not found
 */
export function getExample(name: string): BaseBlockConfig | undefined {
  const examples: Record<string, BaseBlockConfig> = {
    hero: heroExample,
    features: featuresExample,
    pricing: pricingExample,
    gallery: galleryExample,
    testimonials: testimonialsExample,
    contact: contactFormExample,
    faq: faqExample,
    team: teamExample,
    newsletter: newsletterExample,
    stats: statsExample,
    services: servicesExample,
    'video-hero': videoHeroExample,
    products: productShowcaseExample,
    timeline: timelineExample,
  };
  
  return examples[name];
}

/**
 * Get examples by category
 * @param category - BlockCategory to filter by
 * @returns Array of examples in the specified category
 */
export function getExamplesByCategory(category: BlockCategory): BaseBlockConfig[] {
  return allExamples.filter(example => example.category === category);
}

/**
 * Get popular/featured examples
 * Returns most commonly used examples for quick access
 */
export function getFeaturedExamples(): BaseBlockConfig[] {
  return [
    heroExample,
    pricingExample,
    contactFormExample,
    testimonialsExample,
  ];
}
