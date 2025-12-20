/**
 * Example Block Configurations
 * Ready-to-use examples for common blocks
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
  category: BlockCategory.BUSINESS,
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
 * All examples collection
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
];

/**
 * Get example by name
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
  };
  
  return examples[name];
}
