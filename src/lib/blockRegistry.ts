/**
 * Block Registry System
 * Central management for all block types with metadata, defaults, and utilities
 * 
 * PERFORMANCE NOTE: 
 * This registry contains all block definitions. For large-scale applications,
 * consider implementing lazy loading via dynamic imports to reduce initial bundle size.
 * 
 * Example lazy loading implementation:
 * ```typescript
 * async function getBlockDefinition(type: string): Promise<BlockDefinition> {
 *   const module = await import(`./blocks/${type}.ts`);
 *   return module.default;
 * }
 * ```
 */

import { BlockCategory, BlockConfigUnion, BaseBlockConfig } from '@/types/blockTypes';

export interface BlockDefinition {
  type: string;
  name: string;
  nameUk: string; // Ukrainian name
  category: BlockCategory;
  description: string;
  descriptionUk: string;
  icon: string;
  premium?: boolean;
  keywords?: string[];
  defaultConfig: Partial<BlockConfigUnion>;
  preview?: string; // Preview image URL
}

/**
 * Block Registry - Contains all available block definitions
 */
export const BLOCK_REGISTRY: Record<string, BlockDefinition> = {
  // ==================== TEXT BLOCKS ====================
  heading: {
    type: 'heading',
    name: 'Heading',
    nameUk: 'Заголовок',
    category: BlockCategory.TEXT,
    description: 'Customizable heading (H1-H6) with typography controls',
    descriptionUk: 'Налаштовуваний заголовок (H1-H6) з контролем типографіки',
    icon: '📝',
    keywords: ['title', 'heading', 'h1', 'h2', 'h3', 'text'],
    defaultConfig: {
      type: 'heading',
      tag: 'h2',
      content: 'Your Heading Here',
      typography: {
        fontSize: { desktop: '32px', tablet: '28px', mobile: '24px' },
        fontWeight: '700',
        lineHeight: '1.2',
      },
    },
  },
  
  paragraph: {
    type: 'paragraph',
    name: 'Paragraph',
    nameUk: 'Параграф',
    category: BlockCategory.TEXT,
    description: 'Text paragraph with formatting options',
    descriptionUk: 'Текстовий параграф з опціями форматування',
    icon: '📄',
    keywords: ['text', 'paragraph', 'content', 'body'],
    defaultConfig: {
      type: 'paragraph',
      content: 'Your paragraph text goes here. Add your content and customize the appearance.',
      typography: {
        fontSize: { desktop: '16px' },
        lineHeight: '1.6',
      },
    },
  },

  quote: {
    type: 'quote',
    name: 'Quote',
    nameUk: 'Цитата',
    category: BlockCategory.TEXT,
    description: 'Blockquote with author attribution',
    descriptionUk: 'Блочна цитата з атрибуцією автора',
    icon: '💬',
    keywords: ['quote', 'blockquote', 'testimonial', 'citation'],
    defaultConfig: {
      type: 'quote',
      quoteType: 'blockquote',
      content: 'This is an inspiring quote or testimonial.',
      author: 'Author Name',
      authorTitle: 'Position, Company',
    },
  },

  list: {
    type: 'list',
    name: 'List',
    nameUk: 'Список',
    category: BlockCategory.TEXT,
    description: 'Bulleted, numbered, or icon list',
    descriptionUk: 'Маркірований, нумерований або з іконками список',
    icon: '📋',
    keywords: ['list', 'ul', 'ol', 'bullet', 'checklist'],
    defaultConfig: {
      type: 'list',
      listType: 'icon',
      items: [
        { id: '1', content: 'First list item', icon: 'check' },
        { id: '2', content: 'Second list item', icon: 'check' },
        { id: '3', content: 'Third list item', icon: 'check' },
      ],
    },
  },

  iconText: {
    type: 'icon-text',
    name: 'Icon & Text',
    nameUk: 'Іконка з текстом',
    category: BlockCategory.TEXT,
    description: 'Icon with title and description',
    descriptionUk: 'Іконка з заголовком та описом',
    icon: '🎯',
    keywords: ['icon', 'feature', 'service', 'highlight'],
    defaultConfig: {
      type: 'icon-text',
      icon: 'star',
      iconPosition: 'left',
      title: 'Feature Title',
      description: 'Feature description goes here.',
    },
  },

  // ==================== MEDIA BLOCKS ====================
  image: {
    type: 'image',
    name: 'Image',
    nameUk: 'Зображення',
    category: BlockCategory.MEDIA,
    description: 'Single image with caption and lightbox',
    descriptionUk: 'Одиночне зображення з підписом та лайтбоксом',
    icon: '🖼️',
    keywords: ['image', 'picture', 'photo', 'img'],
    defaultConfig: {
      type: 'image',
      src: 'https://via.placeholder.com/800x600',
      alt: 'Placeholder image',
      size: 'full',
      lightbox: true,
    },
  },

  gallery: {
    type: 'gallery',
    name: 'Gallery',
    nameUk: 'Галерея',
    category: BlockCategory.MEDIA,
    description: 'Image gallery with grid, masonry, or slider layouts',
    descriptionUk: 'Галерея зображень із сіткою, масонрі або слайдером',
    icon: '🖼️',
    keywords: ['gallery', 'images', 'photos', 'slider', 'carousel'],
    defaultConfig: {
      type: 'gallery',
      layout: 'grid',
      columns: { desktop: 3, tablet: 2, mobile: 1 },
      images: [],
      lightbox: true,
    },
  },

  video: {
    type: 'video',
    name: 'Video',
    nameUk: 'Відео',
    category: BlockCategory.MEDIA,
    description: 'Video player (YouTube, Vimeo, self-hosted)',
    descriptionUk: 'Відео-плеєр (YouTube, Vimeo, власний хостинг)',
    icon: '🎬',
    keywords: ['video', 'youtube', 'vimeo', 'player'],
    defaultConfig: {
      type: 'video',
      source: 'youtube',
      aspectRatio: '16:9',
      controls: true,
    },
  },

  audio: {
    type: 'audio',
    name: 'Audio Player',
    nameUk: 'Аудіо-плеєр',
    category: BlockCategory.MEDIA,
    description: 'Audio player with playlist support',
    descriptionUk: 'Аудіо-плеєр з підтримкою плейлистів',
    icon: '🎵',
    keywords: ['audio', 'music', 'podcast', 'sound'],
    defaultConfig: {
      type: 'audio',
      style: 'default',
      volume: 0.8,
    },
  },

  interactiveImage: {
    type: 'interactive-image',
    name: 'Interactive Image',
    nameUk: 'Інтерактивне зображення',
    category: BlockCategory.MEDIA,
    description: 'Image with clickable hotspots',
    descriptionUk: 'Зображення з інтерактивними точками',
    icon: '📍',
    keywords: ['hotspot', 'interactive', 'map', 'tooltip'],
    defaultConfig: {
      type: 'interactive-image',
      hotspots: [],
    },
  },

  imageComparison: {
    type: 'image-comparison',
    name: 'Before/After Slider',
    nameUk: 'Слайдер До/Після',
    category: BlockCategory.MEDIA,
    description: 'Compare two images with slider',
    descriptionUk: 'Порівняння двох зображень зі слайдером',
    icon: '↔️',
    keywords: ['before', 'after', 'compare', 'slider'],
    defaultConfig: {
      type: 'image-comparison',
      orientation: 'horizontal',
      startPosition: 50,
    },
  },

  // ==================== LAYOUT BLOCKS ====================
  container: {
    type: 'container',
    name: 'Container',
    nameUk: 'Контейнер',
    category: BlockCategory.LAYOUT,
    description: 'Content container with width and alignment controls',
    descriptionUk: 'Контейнер контенту з контролем ширини та вирівнювання',
    icon: '📦',
    keywords: ['container', 'section', 'wrapper', 'div'],
    defaultConfig: {
      type: 'container',
      width: 'boxed',
      htmlTag: 'div',
      children: [],
    },
  },

  column: {
    type: 'column',
    name: 'Columns',
    nameUk: 'Колонки',
    category: BlockCategory.LAYOUT,
    description: 'Multi-column layout with responsive controls',
    descriptionUk: 'Багатоколонковий макет з responsive контролем',
    icon: '📐',
    keywords: ['columns', 'grid', 'layout', 'flexbox'],
    defaultConfig: {
      type: 'column',
      layout: { desktop: [6, 6] },
      gap: { desktop: '20px' },
      columns: [
        { id: '1', children: [] },
        { id: '2', children: [] },
      ],
    },
  },

  accordion: {
    type: 'accordion',
    name: 'Accordion',
    nameUk: 'Акордеон',
    category: BlockCategory.LAYOUT,
    description: 'Collapsible accordion sections',
    descriptionUk: 'Згортаємі акордеон-секції',
    icon: '⬍',
    keywords: ['accordion', 'collapse', 'toggle', 'dropdown'],
    defaultConfig: {
      type: 'accordion',
      items: [
        { id: '1', title: 'Section 1', content: 'Content for section 1', open: true },
        { id: '2', title: 'Section 2', content: 'Content for section 2', open: false },
      ],
      allowMultiple: false,
    },
  },

  tabs: {
    type: 'tabs',
    name: 'Tabs',
    nameUk: 'Вкладки',
    category: BlockCategory.LAYOUT,
    description: 'Tabbed content sections',
    descriptionUk: 'Контент у вкладках',
    icon: '📑',
    keywords: ['tabs', 'tabbed', 'navigation'],
    defaultConfig: {
      type: 'tabs',
      orientation: { desktop: 'horizontal' },
      items: [
        { id: '1', title: 'Tab 1', content: 'Content for tab 1' },
        { id: '2', title: 'Tab 2', content: 'Content for tab 2' },
      ],
    },
  },

  modal: {
    type: 'modal',
    name: 'Modal / Popup',
    nameUk: 'Модальне вікно / Попап',
    category: BlockCategory.LAYOUT,
    description: 'Popup modal window',
    descriptionUk: 'Спливаюче модальне вікно',
    icon: '🔲',
    keywords: ['modal', 'popup', 'lightbox', 'dialog'],
    defaultConfig: {
      type: 'modal',
      trigger: { type: 'button', label: 'Open Modal' },
      size: 'medium',
      closeButton: true,
      closeOnOverlay: true,
    },
  },

  spacer: {
    type: 'spacer',
    name: 'Spacer / Divider',
    nameUk: 'Спейсер / Роздільник',
    category: BlockCategory.LAYOUT,
    description: 'Adjustable vertical space or a customizable horizontal divider line.',
    descriptionUk: 'Налаштовуваний вертикальний простір або горизонтальна роздільна лінія.',
    icon: '📏',
    keywords: ['spacer', 'divider', 'separator', 'space', 'line'],
    defaultConfig: {
      type: 'spacer',
      height: { desktop: '50px' },
      divider: {
        enabled: false,
        style: 'solid',
        weight: '1px',
        color: '#e5e7eb',
        width: '100%',
        alignment: 'center',
      },
    },
  },

  card: {
    type: 'card',
    name: 'Card',
    nameUk: 'Картка',
    category: BlockCategory.LAYOUT,
    description: 'Content card with image and text',
    descriptionUk: 'Картка контенту із зображенням та текстом',
    icon: '🃏',
    keywords: ['card', 'box', 'panel'],
    defaultConfig: {
      type: 'card',
      imagePosition: 'top',
      title: 'Card Title',
      description: 'Card description text.',
    },
  },

  // ==================== NAVIGATION BLOCKS ====================
  menu: {
    type: 'menu',
    name: 'Navigation Menu',
    nameUk: 'Навігаційне меню',
    category: BlockCategory.NAVIGATION,
    description: 'Site navigation menu with submenu support',
    descriptionUk: 'Навігаційне меню сайту з підтримкою підменю',
    icon: '☰',
    keywords: ['menu', 'navigation', 'nav', 'navbar'],
    defaultConfig: {
      type: 'menu',
      menuType: 'horizontal',
      items: [],
    },
  },

  breadcrumbs: {
    type: 'breadcrumbs',
    name: 'Breadcrumbs',
    nameUk: 'Хлібні крихти',
    category: BlockCategory.NAVIGATION,
    description: 'Breadcrumb navigation trail',
    descriptionUk: 'Навігаційний шлях хлібних крихт',
    icon: '🏠',
    keywords: ['breadcrumb', 'trail', 'path'],
    defaultConfig: {
      type: 'breadcrumbs',
      separator: '/',
    },
  },

  pagination: {
    type: 'pagination',
    name: 'Pagination',
    nameUk: 'Пагінація',
    category: BlockCategory.NAVIGATION,
    description: 'Page navigation',
    descriptionUk: 'Навігація по сторінках',
    icon: '◀▶',
    keywords: ['pagination', 'pager', 'pages'],
    defaultConfig: {
      type: 'pagination',
      totalPages: 10,
      currentPage: 1,
      showNumbers: true,
      showPrevNext: true,
    },
  },

  anchorLinks: {
    type: 'anchor-links',
    name: 'Anchor Links',
    nameUk: 'Якірні посилання',
    category: BlockCategory.NAVIGATION,
    description: 'Jump links to page sections',
    descriptionUk: 'Посилання-стрибки до розділів сторінки',
    icon: '⚓',
    keywords: ['anchor', 'jump', 'scroll'],
    defaultConfig: {
      type: 'anchor-links',
      smoothScroll: true,
    },
  },

  tableOfContents: {
    type: 'table-of-contents',
    name: 'Table of Contents',
    nameUk: 'Зміст',
    category: BlockCategory.NAVIGATION,
    description: 'Auto-generated table of contents',
    descriptionUk: 'Автогенерований зміст сторінки',
    icon: '📖',
    keywords: ['toc', 'contents', 'index'],
    defaultConfig: {
      type: 'table-of-contents',
      includeLevels: ['h2', 'h3'],
      smoothScroll: true,
    },
  },

  // ==================== BUTTONS & CTA ====================
  button: {
    type: 'button',
    name: 'Button',
    nameUk: 'Кнопка',
    category: BlockCategory.BUTTONS_CTA,
    description: 'Customizable button',
    descriptionUk: 'Налаштовувана кнопка',
    icon: '🔘',
    keywords: ['button', 'cta', 'link'],
    defaultConfig: {
      type: 'button',
      text: 'Click Me',
      size: 'medium',
      style: 'solid',
    },
  },

  buttonGroup: {
    type: 'button-group',
    name: 'Button Group',
    nameUk: 'Група кнопок',
    category: BlockCategory.BUTTONS_CTA,
    description: 'Multiple buttons grouped together',
    descriptionUk: 'Декілька кнопок згрупованих разом',
    icon: '🔘🔘',
    keywords: ['buttons', 'group', 'actions'],
    defaultConfig: {
      type: 'button-group',
      buttons: [
        { id: '1', text: 'Primary', primary: true },
        { id: '2', text: 'Secondary' },
      ],
    },
  },

  fab: {
    type: 'fab',
    name: 'Floating Action Button',
    nameUk: 'Плаваюча кнопка дії',
    category: BlockCategory.BUTTONS_CTA,
    description: 'Fixed floating action button',
    descriptionUk: 'Фіксована плаваюча кнопка дії',
    icon: '🔆',
    keywords: ['fab', 'floating', 'scroll-to-top'],
    defaultConfig: {
      type: 'fab',
      position: 'bottom-right',
      action: 'scroll-to-top',
    },
  },

  cta: {
    type: 'cta',
    name: 'Call to Action',
    nameUk: 'Заклик до дії',
    category: BlockCategory.BUTTONS_CTA,
    description: 'Call-to-action section with headline and button',
    descriptionUk: 'Секція заклику до дії з заголовком та кнопкою',
    icon: '📣',
    keywords: ['cta', 'call-to-action', 'hero'],
    defaultConfig: {
      type: 'cta',
      layout: 'default',
      title: 'Take Action Now',
      description: 'Description of the action you want users to take.',
      button: { text: 'Get Started' },
    },
  },

  // ==================== FORMS ====================
  contactForm: {
    type: 'contact-form',
    name: 'Contact Form',
    nameUk: 'Контактна форма',
    category: BlockCategory.FORMS,
    description: 'Customizable contact form',
    descriptionUk: 'Налаштовувана контактна форма',
    icon: '📧',
    keywords: ['form', 'contact', 'email'],
    defaultConfig: {
      type: 'contact-form',
      fields: [
        { id: '1', type: 'text', label: 'Name', required: true, width: { desktop: 'half' } },
        { id: '2', type: 'email', label: 'Email', required: true, width: { desktop: 'half' } },
        { id: '3', type: 'textarea', label: 'Message', required: true, width: { desktop: 'full' } },
      ],
      submitButton: { text: 'Send Message', position: 'left' },
    },
  },

  newsletterForm: {
    type: 'newsletter-form',
    name: 'Newsletter Form',
    nameUk: 'Форма підписки',
    category: BlockCategory.FORMS,
    description: 'Email newsletter subscription form',
    descriptionUk: 'Форма підписки на email розсилку',
    icon: '📨',
    keywords: ['newsletter', 'subscribe', 'email'],
    defaultConfig: {
      type: 'newsletter-form',
      title: 'Subscribe to our Newsletter',
      placeholder: 'Enter your email',
      buttonText: 'Subscribe',
      layout: 'inline',
    },
  },

  searchForm: {
    type: 'search-form',
    name: 'Search Form',
    nameUk: 'Форма пошуку',
    category: BlockCategory.FORMS,
    description: 'Site search form',
    descriptionUk: 'Форма пошуку по сайту',
    icon: '🔍',
    keywords: ['search', 'find', 'query'],
    defaultConfig: {
      type: 'search-form',
      placeholder: 'Search...',
      showButton: true,
      liveSearch: false,
    },
  },

  quizForm: {
    type: 'quiz-form',
    name: 'Quiz / Survey',
    nameUk: 'Квіз / Опитування',
    category: BlockCategory.FORMS,
    description: 'Interactive quiz or survey',
    descriptionUk: 'Інтерактивний квіз або опитування',
    icon: '❓',
    premium: true,
    keywords: ['quiz', 'survey', 'poll', 'questionnaire'],
    defaultConfig: {
      type: 'quiz-form',
      progressBar: true,
    },
  },

  // ==================== E-COMMERCE ====================
  productGrid: {
    type: 'product-grid',
    name: 'Product Grid',
    nameUk: 'Сітка товарів',
    category: BlockCategory.ECOMMERCE,
    description: 'Grid of product items',
    descriptionUk: 'Сітка товарів',
    icon: '🛍️',
    keywords: ['products', 'shop', 'store', 'grid'],
    defaultConfig: {
      type: 'product-grid',
      layout: 'grid',
      columns: { desktop: 4, tablet: 3, mobile: 2 },
    },
  },

  productCard: {
    type: 'product-card',
    name: 'Product Card',
    nameUk: 'Картка товару',
    category: BlockCategory.ECOMMERCE,
    description: 'Single product display',
    descriptionUk: 'Відображення одного товару',
    icon: '📦',
    keywords: ['product', 'item', 'shop'],
    defaultConfig: {
      type: 'product-card',
      layout: 'default',
      showRating: true,
    },
  },

  addToCartButton: {
    type: 'add-to-cart-button',
    name: 'Add to Cart Button',
    nameUk: 'Кнопка "Додати в кошик"',
    category: BlockCategory.ECOMMERCE,
    description: 'Product add to cart button',
    descriptionUk: 'Кнопка додавання товару в кошик',
    icon: '🛒',
    keywords: ['cart', 'buy', 'add'],
    defaultConfig: {
      type: 'add-to-cart-button',
      text: 'Add to Cart',
      quantity: true,
      ajax: true,
    },
  },

  pricingTable: {
    type: 'pricing-table',
    name: 'Pricing Table',
    nameUk: 'Таблиця цін',
    category: BlockCategory.ECOMMERCE,
    description: 'Pricing comparison table',
    descriptionUk: 'Таблиця порівняння цін',
    icon: '💰',
    keywords: ['pricing', 'plans', 'price', 'compare'],
    defaultConfig: {
      type: 'pricing-table',
      columns: { desktop: 3, tablet: 2, mobile: 1 },
      plans: [],
    },
  },

  countdownTimer: {
    type: 'countdown-timer',
    name: 'Countdown Timer',
    nameUk: 'Таймер зворотного відліку',
    category: BlockCategory.ECOMMERCE,
    description: 'Countdown to a specific date',
    descriptionUk: 'Зворотний відлік до певної дати',
    icon: '⏱️',
    keywords: ['countdown', 'timer', 'deadline', 'sale'],
    defaultConfig: {
      type: 'countdown-timer',
      display: ['days', 'hours', 'minutes', 'seconds'],
      layout: 'inline',
    },
  },

  // Continue with remaining blocks...
  // Due to character limit, I'll add a few more key ones

  // DATA & STATS
  progressBar: {
    type: 'progress-bar',
    name: 'Progress Bar',
    nameUk: 'Прогрес-бар',
    category: BlockCategory.DATA_STATS,
    description: 'Animated progress bars',
    descriptionUk: 'Анімовані прогрес-бари',
    icon: '📊',
    keywords: ['progress', 'skill', 'percentage'],
    defaultConfig: {
      type: 'progress-bar',
      layout: 'horizontal',
      animated: true,
    },
  },

  counter: {
    type: 'counter',
    name: 'Counter',
    nameUk: 'Лічильник',
    category: BlockCategory.DATA_STATS,
    description: 'Animated number counters',
    descriptionUk: 'Анімовані числові лічильники',
    icon: '🔢',
    keywords: ['counter', 'number', 'stats'],
    defaultConfig: {
      type: 'counter',
      layout: { desktop: 'grid' },
      columns: { desktop: 3, tablet: 2, mobile: 1 },
    },
  },

  chart: {
    type: 'chart',
    name: 'Chart / Graph',
    nameUk: 'Графік / Діаграма',
    category: BlockCategory.DATA_STATS,
    description: 'Data visualization charts',
    descriptionUk: 'Візуалізація даних у вигляді графіків',
    icon: '📈',
    keywords: ['chart', 'graph', 'data', 'statistics'],
    defaultConfig: {
      type: 'chart',
      chartType: 'line',
      responsive: true,
    },
  },

  timeline: {
    type: 'timeline',
    name: 'Timeline',
    nameUk: 'Таймлайн',
    category: BlockCategory.DATA_STATS,
    description: 'Timeline with events',
    descriptionUk: 'Таймлайн з подіями',
    icon: '📅',
    keywords: ['timeline', 'history', 'events'],
    defaultConfig: {
      type: 'timeline',
      orientation: { desktop: 'vertical' },
      alternating: true,
    },
  },

  comparisonTable: {
    type: 'comparison-table',
    name: 'Comparison Table',
    nameUk: 'Таблиця порівняння',
    category: BlockCategory.DATA_STATS,
    description: 'Compare items in table format',
    descriptionUk: 'Порівняння елементів у табличному форматі',
    icon: '⚖️',
    keywords: ['compare', 'table', 'features'],
    defaultConfig: {
      type: 'comparison-table',
      items: [],
    },
  },

  // SOCIAL & COMMUNICATION
  socialShare: {
    type: 'social-share',
    name: 'Social Share',
    nameUk: 'Соціальний шеринг',
    category: BlockCategory.SOCIAL,
    description: 'Social media share buttons',
    descriptionUk: 'Кнопки шерингу в соціальних мережах',
    icon: '📱',
    keywords: ['social', 'share', 'facebook', 'twitter'],
    defaultConfig: {
      type: 'social-share',
      networks: ['facebook', 'twitter', 'linkedin'],
      layout: 'horizontal',
      style: 'icon',
    },
  },

  testimonial: {
    type: 'testimonial',
    name: 'Testimonials',
    nameUk: 'Відгуки',
    category: BlockCategory.SOCIAL,
    description: 'Customer testimonials slider/grid',
    descriptionUk: 'Слайдер/сітка відгуків клієнтів',
    icon: '⭐',
    keywords: ['testimonials', 'reviews', 'feedback'],
    defaultConfig: {
      type: 'testimonial',
      layout: 'slider',
      showRating: true,
      showAvatar: true,
    },
  },

  comments: {
    type: 'comments',
    name: 'Comments',
    nameUk: 'Коментарі',
    category: BlockCategory.COMMUNICATION,
    description: 'Comments section',
    descriptionUk: 'Секція коментарів',
    icon: '💬',
    keywords: ['comments', 'discussion'],
    defaultConfig: {
      type: 'comments',
      pagination: true,
      commentsPerPage: 10,
    },
  },

  faq: {
    type: 'faq',
    name: 'FAQ',
    nameUk: 'Питання-Відповіді',
    category: BlockCategory.COMMUNICATION,
    description: 'Frequently asked questions',
    descriptionUk: 'Часті питання та відповіді',
    icon: '❓',
    keywords: ['faq', 'questions', 'help'],
    defaultConfig: {
      type: 'faq',
      layout: 'accordion',
      searchable: true,
    },
  },

  // TEAM & CONTACTS
  teamMember: {
    type: 'team-member',
    name: 'Team Members',
    nameUk: 'Члени команди',
    category: BlockCategory.TEAM_CONTACTS,
    description: 'Team member cards',
    descriptionUk: 'Картки членів команди',
    icon: '👥',
    keywords: ['team', 'staff', 'members'],
    defaultConfig: {
      type: 'team-member',
      layout: 'grid',
      columns: { desktop: 3, tablet: 2, mobile: 1 },
      showSocial: true,
    },
  },

  contactInfo: {
    type: 'contact-info',
    name: 'Contact Info',
    nameUk: 'Контактна інформація',
    category: BlockCategory.TEAM_CONTACTS,
    description: 'Display contact information',
    descriptionUk: 'Відображення контактної інформації',
    icon: '📞',
    keywords: ['contact', 'address', 'phone', 'email'],
    defaultConfig: {
      type: 'contact-info',
      layout: 'vertical',
    },
  },

  map: {
    type: 'map',
    name: 'Map',
    nameUk: 'Карта',
    category: BlockCategory.TEAM_CONTACTS,
    description: 'Interactive map',
    descriptionUk: 'Інтерактивна карта',
    icon: '🗺️',
    keywords: ['map', 'location', 'google maps'],
    defaultConfig: {
      type: 'map',
      provider: 'google',
      zoom: 12,
      height: '400px',
    },
  },

  logoCarousel: {
    type: 'logo-carousel',
    name: 'Logo Carousel',
    nameUk: 'Карусель логотипів',
    category: BlockCategory.TEAM_CONTACTS,
    description: 'Carousel of client/partner logos',
    descriptionUk: 'Карусель логотипів клієнтів/партнерів',
    icon: '🎠',
    keywords: ['logos', 'clients', 'partners', 'carousel'],
    defaultConfig: {
      type: 'logo-carousel',
      columns: { desktop: 5, tablet: 3, mobile: 2 },
      autoplay: true,
      grayscale: true,
    },
  },

  // EVENTS
  calendar: {
    type: 'calendar',
    name: 'Calendar',
    nameUk: 'Календар',
    category: BlockCategory.EVENTS,
    description: 'Events calendar',
    descriptionUk: 'Календар подій',
    icon: '📆',
    keywords: ['calendar', 'events', 'schedule'],
    defaultConfig: {
      type: 'calendar',
      view: 'month',
      selectable: false,
    },
  },

  eventCard: {
    type: 'event-card',
    name: 'Event Card',
    nameUk: 'Картка події',
    category: BlockCategory.EVENTS,
    description: 'Single event card',
    descriptionUk: 'Картка однієї події',
    icon: '🎫',
    keywords: ['event', 'ticket'],
    defaultConfig: {
      type: 'event-card',
      layout: 'default',
      showCountdown: false,
    },
  },

  schedule: {
    type: 'schedule',
    name: 'Schedule',
    nameUk: 'Розклад',
    category: BlockCategory.EVENTS,
    description: 'Schedule timetable',
    descriptionUk: 'Розклад подій',
    icon: '🕐',
    keywords: ['schedule', 'timetable', 'agenda'],
    defaultConfig: {
      type: 'schedule',
      layout: 'tabs',
    },
  },

  // BLOG
  blogGrid: {
    type: 'blog-grid',
    name: 'Blog Grid',
    nameUk: 'Сітка постів',
    category: BlockCategory.BLOG,
    description: 'Blog posts grid',
    descriptionUk: 'Сітка блог-постів',
    icon: '📰',
    keywords: ['blog', 'posts', 'articles'],
    defaultConfig: {
      type: 'blog-grid',
      layout: 'grid',
      columns: { desktop: 3, tablet: 2, mobile: 1 },
      showAuthor: true,
      showDate: true,
    },
  },

  postCard: {
    type: 'post-card',
    name: 'Post Card',
    nameUk: 'Картка посту',
    category: BlockCategory.BLOG,
    description: 'Single blog post card',
    descriptionUk: 'Картка одного посту',
    icon: '📝',
    keywords: ['post', 'article', 'blog'],
    defaultConfig: {
      type: 'post-card',
      layout: 'default',
      showMeta: true,
    },
  },

  authorBox: {
    type: 'author-box',
    name: 'Author Box',
    nameUk: 'Блок автора',
    category: BlockCategory.BLOG,
    description: 'Author information box',
    descriptionUk: 'Блок інформації про автора',
    icon: '✍️',
    keywords: ['author', 'writer', 'bio'],
    defaultConfig: {
      type: 'author-box',
      showSocial: true,
      showArchive: true,
    },
  },

  // SPECIAL BLOCKS
  code: {
    type: 'code',
    name: 'Code Block',
    nameUk: 'Блок коду',
    category: BlockCategory.TECHNICAL,
    description: 'Syntax highlighted code block',
    descriptionUk: 'Блок коду з підсвічуванням синтаксису',
    icon: '💻',
    keywords: ['code', 'syntax', 'programming'],
    defaultConfig: {
      type: 'code',
      language: 'javascript',
      theme: 'dark',
      showLineNumbers: true,
      copyButton: true,
    },
  },

  embed: {
    type: 'embed',
    name: 'Embed',
    nameUk: 'Вбудований контент',
    category: BlockCategory.TECHNICAL,
    description: 'Embed external content',
    descriptionUk: 'Вбудувати зовнішній контент',
    icon: '📺',
    keywords: ['embed', 'iframe', 'html'],
    defaultConfig: {
      type: 'embed',
      embedType: 'iframe',
      responsive: true,
    },
  },

  alert: {
    type: 'alert',
    name: 'Alert / Notice',
    nameUk: 'Сповіщення',
    category: BlockCategory.INFO,
    description: 'Alert message box',
    descriptionUk: 'Блок сповіщень',
    icon: '⚠️',
    keywords: ['alert', 'notice', 'warning', 'info'],
    defaultConfig: {
      type: 'alert',
      alertType: 'info',
      dismissible: true,
      position: 'static',
    },
  },

  particles: {
    type: 'particles',
    name: 'Particles Effect',
    nameUk: 'Ефект частинок',
    category: BlockCategory.EFFECTS,
    description: 'Animated particles background',
    descriptionUk: 'Анімований фон з частинками',
    icon: '✨',
    premium: true,
    keywords: ['particles', 'animation', 'effect'],
    defaultConfig: {
      type: 'particles',
      particleType: 'dots',
      count: 100,
      interactive: true,
    },
  },

  sticky: {
    type: 'sticky',
    name: 'Sticky Element',
    nameUk: 'Липкий елемент',
    category: BlockCategory.SPECIAL,
    description: 'Element that sticks on scroll',
    descriptionUk: 'Елемент що прилипає при прокрутці',
    icon: '📌',
    keywords: ['sticky', 'fixed', 'scroll'],
    defaultConfig: {
      type: 'sticky',
      position: 'top',
      offset: 0,
    },
  },

  // ДОДАТКОВІ ТЕКСТОВІ БЛОКИ
  textColumns: {
    type: 'text-columns',
    name: 'Text Columns',
    nameUk: 'Текст у колонках',
    category: BlockCategory.TEXT,
    description: 'Text in multiple columns',
    descriptionUk: 'Текст розбитий на кілька колонок',
    icon: '📄',
    keywords: ['columns', 'text', 'layout'],
    defaultConfig: {
      type: 'text-columns',
      columns: { desktop: 2, tablet: 1, mobile: 1 },
      columnGap: '30px',
    },
  },

  highlightText: {
    type: 'highlight-text',
    name: 'Highlighted Text',
    nameUk: 'Виділений текст',
    category: BlockCategory.TEXT,
    description: 'Text with highlight effects',
    descriptionUk: 'Текст з ефектами виділення',
    icon: '🖍️',
    keywords: ['highlight', 'marker', 'emphasis'],
    defaultConfig: {
      type: 'highlight-text',
      highlightType: 'background',
      highlightColor: '#ffeb3b',
    },
  },

  dropcap: {
    type: 'dropcap',
    name: 'Drop Cap',
    nameUk: 'Велика перша літера',
    category: BlockCategory.TEXT,
    description: 'Large first letter',
    descriptionUk: 'Велика перша літера параграфу',
    icon: '🔤',
    keywords: ['dropcap', 'initial', 'letter'],
    defaultConfig: {
      type: 'dropcap',
      lines: 3,
      shape: 'none',
    },
  },

  // РОЗШИРЕНІ МЕДІА
  gifAnimation: {
    type: 'gif-animation',
    name: 'GIF Animation',
    nameUk: 'GIF анімація',
    category: BlockCategory.MEDIA,
    description: 'Animated GIF display',
    descriptionUk: 'Відображення анімованих GIF',
    icon: '🎞️',
    keywords: ['gif', 'animation', 'image'],
    defaultConfig: {
      type: 'gif-animation',
      autoplay: true,
      loop: true,
    },
  },

  svgGraphic: {
    type: 'svg-graphic',
    name: 'SVG Graphic',
    nameUk: 'SVG графіка',
    category: BlockCategory.MEDIA,
    description: 'SVG graphic with animation',
    descriptionUk: 'SVG графіка з анімацією',
    icon: '🎨',
    keywords: ['svg', 'vector', 'graphic'],
    defaultConfig: {
      type: 'svg-graphic',
      animate: false,
      interactive: false,
    },
  },

  videoBackground: {
    type: 'video-background',
    name: 'Video Background',
    nameUk: 'Відео фон',
    category: BlockCategory.MEDIA,
    description: 'Background video with overlay',
    descriptionUk: 'Фонове відео з оверлеєм',
    icon: '🎥',
    premium: true,
    keywords: ['video', 'background', 'hero'],
    defaultConfig: {
      type: 'video-background',
      autoplay: true,
      loop: true,
      muted: true,
    },
  },

  panorama360: {
    type: 'panorama-360',
    name: '360° Panorama',
    nameUk: '360° панорама',
    category: BlockCategory.MEDIA,
    description: '360 degree panoramic view',
    descriptionUk: '360 градусний панорамний вигляд',
    icon: '🌐',
    premium: true,
    keywords: ['360', 'panorama', 'vr'],
    defaultConfig: {
      type: 'panorama-360',
      autoRotate: true,
      controls: true,
    },
  },

  // РОЗШИРЕНІ ФОРМИ
  fileUploadForm: {
    type: 'file-upload-form',
    name: 'File Upload Form',
    nameUk: 'Форма завантаження файлів',
    category: BlockCategory.FORMS,
    description: 'File upload form with drag & drop',
    descriptionUk: 'Форма завантаження файлів з drag & drop',
    icon: '📤',
    keywords: ['upload', 'file', 'attach'],
    defaultConfig: {
      type: 'file-upload-form',
      maxFiles: 5,
      maxFileSize: 10,
      dragAndDrop: true,
      showPreview: true,
    },
  },

  calculatorForm: {
    type: 'calculator-form',
    name: 'Calculator',
    nameUk: 'Калькулятор',
    category: BlockCategory.FORMS,
    description: 'Interactive calculator form',
    descriptionUk: 'Інтерактивна форма-калькулятор',
    icon: '🧮',
    premium: true,
    keywords: ['calculator', 'compute', 'math'],
    defaultConfig: {
      type: 'calculator-form',
      calculatorType: 'custom',
      showSteps: false,
    },
  },

  pollForm: {
    type: 'poll-form',
    name: 'Poll / Voting',
    nameUk: 'Опитування / Голосування',
    category: BlockCategory.FORMS,
    description: 'Voting poll form',
    descriptionUk: 'Форма для опитування та голосування',
    icon: '🗳️',
    keywords: ['poll', 'vote', 'survey'],
    defaultConfig: {
      type: 'poll-form',
      allowMultiple: false,
      showResults: 'after-vote',
      showPercentage: true,
    },
  },

  bookingForm: {
    type: 'booking-form',
    name: 'Booking Form',
    nameUk: 'Форма бронювання',
    category: BlockCategory.FORMS,
    description: 'Appointment/booking form',
    descriptionUk: 'Форма запису/бронювання',
    icon: '📅',
    premium: true,
    keywords: ['booking', 'appointment', 'reservation'],
    defaultConfig: {
      type: 'booking-form',
      bookingType: 'appointment',
      confirmationEmail: true,
    },
  },

  registrationForm: {
    type: 'registration-form',
    name: 'Registration Form',
    nameUk: 'Реєстраційна форма',
    category: BlockCategory.FORMS,
    description: 'User registration form',
    descriptionUk: 'Форма реєстрації користувачів',
    icon: '📋',
    keywords: ['registration', 'signup', 'user'],
    defaultConfig: {
      type: 'registration-form',
      formType: 'user',
      passwordStrength: true,
    },
  },
};

/**
 * Get blocks by category
 */
export function getBlocksByCategory(category: BlockCategory): BlockDefinition[] {
  return Object.values(BLOCK_REGISTRY).filter(block => block.category === category);
}

/**
 * Get all categories with block counts
 */
export function getCategoriesWithCounts(): Array<{ category: BlockCategory; count: number; nameUk: string }> {
  const counts: Record<string, number> = {};
  
  Object.values(BLOCK_REGISTRY).forEach(block => {
    counts[block.category] = (counts[block.category] || 0) + 1;
  });

  const categoryNames: Record<BlockCategory, string> = {
    [BlockCategory.TEXT]: 'Текст',
    [BlockCategory.MEDIA]: 'Медіа',
    [BlockCategory.LAYOUT]: 'Макет',
    [BlockCategory.NAVIGATION]: 'Навігація',
    [BlockCategory.BUTTONS_CTA]: 'Кнопки та CTA',
    [BlockCategory.FORMS]: 'Форми',
    [BlockCategory.ECOMMERCE]: 'E-Commerce',
    [BlockCategory.DATA_STATS]: 'Дані та статистика',
    [BlockCategory.SOCIAL]: 'Соціальні мережі',
    [BlockCategory.COMMUNICATION]: 'Комунікація',
    [BlockCategory.TEAM_CONTACTS]: 'Команда та контакти',
    [BlockCategory.INFO]: 'Інформація',
    [BlockCategory.EVENTS]: 'Події',
    [BlockCategory.EFFECTS]: 'Ефекти',
    [BlockCategory.BLOG]: 'Блог',
    [BlockCategory.TECHNICAL]: 'Технічні',
    [BlockCategory.SPECIAL]: 'Спеціальні',
  };

  return Object.entries(counts).map(([category, count]) => ({
    category: category as BlockCategory,
    count,
    nameUk: categoryNames[category as BlockCategory] || category,
  }));
}

/**
 * Search blocks by keyword
 */
export function searchBlocks(query: string): BlockDefinition[] {
  const lowercaseQuery = query.toLowerCase();
  
  return Object.values(BLOCK_REGISTRY).filter(block => {
    return (
      block.name.toLowerCase().includes(lowercaseQuery) ||
      block.nameUk.toLowerCase().includes(lowercaseQuery) ||
      block.description.toLowerCase().includes(lowercaseQuery) ||
      block.descriptionUk.toLowerCase().includes(lowercaseQuery) ||
      (block.keywords && block.keywords.some(kw => kw.includes(lowercaseQuery)))
    );
  });
}

/**
 * Get block definition by type
 */
export function getBlockDefinition(type: string): BlockDefinition | undefined {
  return BLOCK_REGISTRY[type];
}

/**
 * Create block instance with defaults
 */
export function createBlockInstance(type: string, overrides?: Partial<BaseBlockConfig>): BaseBlockConfig {
  const definition = getBlockDefinition(type);
  
  if (!definition) {
    throw new Error(`Block type "${type}" not found in registry`);
  }

  return {
    id: `block_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    type: definition.type,
    name: definition.name,
    category: definition.category,
    config: definition.defaultConfig as BlockConfigUnion,
    ...overrides,
  };
}

/**
 * Lazy Loading Support
 * 
 * For performance optimization, you can implement lazy loading of block definitions.
 * This is particularly useful when you have a large number of blocks.
 * 
 * Implementation example:
 * 1. Split block definitions into separate files by category
 * 2. Load them dynamically when needed
 * 3. Cache loaded definitions to avoid repeated imports
 */

// Cache for lazy-loaded block definitions
const lazyLoadedBlocks = new Map<string, BlockDefinition>();

/**
 * Preload blocks for a specific category (optional optimization)
 * This can be called when user navigates to a category in the block picker
 */
export async function preloadBlocksByCategory(category: BlockCategory): Promise<void> {
  // This is a placeholder for future implementation
  // When implementing lazy loading, this function would dynamically import
  // block definitions for the specified category
  
  const blocksInCategory = getBlocksByCategory(category);
  blocksInCategory.forEach(block => {
    if (!lazyLoadedBlocks.has(block.type)) {
      lazyLoadedBlocks.set(block.type, block);
    }
  });
  
  console.log(`Preloaded ${blocksInCategory.length} blocks for category: ${category}`);
}

/**
 * Get total registry size (for monitoring)
 */
export function getRegistryStats(): { 
  totalBlocks: number; 
  categoryCounts: Record<string, number>;
  premiumBlocks: number;
} {
  const allBlocks = Object.values(BLOCK_REGISTRY);
  const categoryCounts: Record<string, number> = {};
  
  allBlocks.forEach(block => {
    categoryCounts[block.category] = (categoryCounts[block.category] || 0) + 1;
  });
  
  const premiumBlocks = allBlocks.filter(block => block.premium).length;
  
  return {
    totalBlocks: allBlocks.length,
    categoryCounts,
    premiumBlocks,
  };
}

