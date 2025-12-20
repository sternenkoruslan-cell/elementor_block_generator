/**
 * Comprehensive Block Type System for Elementor-like Block Builder
 * Covers all major categories: Content, Structure, Interactive, E-Commerce, Data, Social, Business, Events, and Special
 * 
 * ARCHITECTURE NOTES:
 * - Types are organized by functional groups for better maintainability
 * - Each section contains related types and interfaces
 * - Use union types (BlockConfigUnion) for type-safe block configurations
 * 
 * REFACTORING RECOMMENDATIONS:
 * - When adding new types, group them by functionality
 * - Consider splitting large type files by category if they exceed 500 lines
 * - Use type aliases for commonly repeated patterns
 * - Document complex type relationships with JSDoc comments
 */

// ==================== GENERAL TYPES ====================
// Fundamental types used across all block configurations

// ==================== GENERAL TYPES ====================
// Fundamental types used across all block configurations

/**
 * Responsive Value Type
 * Allows different values for mobile, tablet, and desktop breakpoints
 * @example
 * const fontSize: ResponsiveValue<string> = {
 *   mobile: '14px',
 *   tablet: '16px',
 *   desktop: '18px'
 * };
 */
export type ResponsiveValue<T> = {
  mobile?: T;
  tablet?: T;
  desktop?: T;
};

/**
 * Animation Types
 * Defines available animation effects for block entrance
 */
export type AnimationType = 
  | 'none' | 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight'
  | 'slideIn' | 'slideInUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight'
  | 'bounce' | 'bounceIn' | 'zoomIn' | 'zoomInUp' | 'zoomInDown'
  | 'rotateIn' | 'flipInX' | 'flipInY' | 'pulse' | 'shake' | 'swing'
  | 'kenBurns' | 'parallax';

/**
 * Hover Effects
 * Defines available hover effects for interactive elements
 */
export type HoverEffect = 
  | 'none' | 'grow' | 'shrink' | 'float' | 'lift' | 'sink'
  | 'glow' | 'shadow' | 'brighten' | 'darken' | 'blur'
  | 'rotate' | 'skew' | 'perspective';

// ==================== BLOCK CATEGORIES ====================
// Organized taxonomy for all block types
// Categories help users navigate and find the right blocks quickly

/**
 * Block Category Enum
 * Defines all available block categories in the system
 * 
 * CATEGORY GROUPS:
 * - Content: TEXT, MEDIA
 * - Structure: LAYOUT
 * - Interactive: INTERACTIVE, NAVIGATION, BUTTONS_CTA
 * - Forms & Commerce: FORMS, ECOMMERCE
 * - Data & Social: DATA_STATS, SOCIAL, COMMUNICATION
 * - Business & Events: BUSINESS, TEAM_CONTACTS, EVENTS
 * - Technical: BLOG, TECHNICAL, EFFECTS, INFO, SPECIAL
 */
export enum BlockCategory {
  // Content Blocks
  TEXT = 'text',
  MEDIA = 'media',
  
  // Structural Blocks
  LAYOUT = 'layout',
  
  // Interactive Blocks
  INTERACTIVE = 'interactive',
  NAVIGATION = 'navigation',
  BUTTONS_CTA = 'buttons-cta',
  
  // Forms
  FORMS = 'forms',
  
  // E-Commerce
  ECOMMERCE = 'ecommerce',
  
  // Data & Statistics
  DATA_STATS = 'data-stats',
  
  // Social & Communication
  SOCIAL = 'social',
  COMMUNICATION = 'communication',
  
  // Business
  BUSINESS = 'business',
  TEAM_CONTACTS = 'team-contacts',
  
  // Events & Time
  EVENTS = 'events',
  
  // Visual Effects
  EFFECTS = 'effects',
  
  // Blog & News
  BLOG = 'blog',
  
  // Technical & Info
  TECHNICAL = 'technical',
  INFO = 'info',
  
  // Additional
  SPECIAL = 'special',
}

// ==================== STYLING TYPES ====================
// Common styling interfaces used across multiple block types
// These types provide consistent styling options for all blocks

// --- Typography Types ---

/**
 * Typography Interface
 * Comprehensive typography settings for text elements
 * Supports responsive font sizes and full CSS text properties
 */
export interface Typography {
  fontFamily?: string;
  fontSize?: ResponsiveValue<string>;
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
  textAlign?: ResponsiveValue<'left' | 'center' | 'right' | 'justify'>;
  color?: string;
  textShadow?: string;
}

// --- Spacing Types ---

/**
 * Spacing Interface
 * Controls padding, margin, and gap with responsive support
 * All values support CSS units (px, rem, em, %, etc.)
 */
export interface Spacing {
  padding?: ResponsiveValue<{
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    all?: string;
  }>;
  margin?: ResponsiveValue<{
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    all?: string;
  }>;
  gap?: ResponsiveValue<string>;
}

// --- Border & Shadow Types ---

/**
 * Border Interface
 * Defines border styling including individual corner radius control
 */
export interface Border {
  width?: string;
  style?: 'none' | 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
  color?: string;
  radius?: {
    topLeft?: string;
    topRight?: string;
    bottomRight?: string;
    bottomLeft?: string;
    all?: string;
  };
}

/**
 * Shadow Interface
 * Supports both box-shadow and text-shadow effects
 */
export interface Shadow {
  boxShadow?: string;
  textShadow?: string;
  inset?: boolean;
  color?: string;
  blur?: string;
  spread?: string;
  offsetX?: string;
  offsetY?: string;
}

// --- Background Types ---

/**
 * Background Settings Interface
 * Supports colors, gradients, images, and video backgrounds
 * Includes advanced options like blend modes and overlays
 */
export interface BackgroundSettings {
  type?: 'color' | 'gradient' | 'image' | 'video';
  color?: string;
  gradient?: {
    type?: 'linear' | 'radial' | 'conic';
    angle?: number;
    colors?: Array<{ color: string; position: number }>;
  };
  image?: {
    url: string;
    size?: 'auto' | 'cover' | 'contain' | 'custom';
    position?: string;
    repeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';
    attachment?: 'scroll' | 'fixed' | 'local';
    customSize?: { width?: string; height?: string };
  };
  video?: {
    url: string;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    overlay?: { color: string; opacity: number };
  };
  opacity?: number;
  blendMode?: string;
}

// ==================== CONTENT BLOCKS ====================
// Content-focused block types for text and media elements

// --- Text Block Types ---
// Text blocks: heading, paragraph, quote, list, icon-text

/**
 * Heading Block Configuration
 * Supports H1-H6 tags with full typography control
 */
export interface HeadingBlockConfig {
  type: 'heading';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  content?: string;
  htmlTag?: string; // Allow custom HTML tag
  link?: {
    url: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    nofollow?: boolean;
  };
  typography?: Typography;
  dropCap?: boolean;
  divider?: {
    enabled?: boolean;
    position?: 'before' | 'after' | 'both';
    style?: string;
    width?: string;
    color?: string;
  };
}

export interface ParagraphBlockConfig {
  type: 'paragraph';
  content?: string;
  columns?: ResponsiveValue<number>;
  columnGap?: string;
  dropCap?: {
    enabled?: boolean;
    lines?: number;
    fontSize?: string;
    color?: string;
  };
  typography?: Typography;
}

export interface QuoteBlockConfig {
  type: 'quote';
  quoteType?: 'blockquote' | 'inline' | 'testimonial';
  content?: string;
  author?: string;
  authorTitle?: string;
  authorImage?: string;
  icon?: string;
  typography?: Typography;
  authorTypography?: Typography;
}

export interface ListBlockConfig {
  type: 'list';
  listType?: 'ul' | 'ol' | 'icon';
  items?: Array<{
    id: string;
    content: string;
    icon?: string;
    link?: string;
    children?: Array<any>;
  }>;
  iconPosition?: 'left' | 'right' | 'top';
  iconSize?: string;
  iconColor?: string;
  spacing?: string;
  typography?: Typography;
}

export interface IconTextBlockConfig {
  type: 'icon-text';
  icon?: string;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  title?: string;
  description?: string;
  link?: string;
  iconStyle?: {
    size?: string;
    color?: string;
    backgroundColor?: string;
    shape?: 'none' | 'circle' | 'square' | 'rounded';
  };
  titleTypography?: Typography;
  descriptionTypography?: Typography;
}

// --- Media Block Types ---
// Media blocks: image, gallery, video, audio, interactive-image, image-comparison

/**
 * Image Block Configuration
 * Single image with caption, lightbox, and advanced filters
 */
export interface ImageBlockConfig {
  type: 'image';
  src?: string;
  alt?: string;
  caption?: string;
  link?: string;
  lightbox?: boolean;
  size?: 'full' | 'large' | 'medium' | 'thumbnail' | 'custom';
  customSize?: { width?: string; height?: string };
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  filters?: {
    brightness?: number;
    contrast?: number;
    saturation?: number;
    blur?: number;
    hueRotate?: number;
    grayscale?: number;
    sepia?: number;
  };
  overlay?: {
    enabled?: boolean;
    color?: string;
    opacity?: number;
    hoverEffect?: boolean;
  };
}

export interface GalleryBlockConfig {
  type: 'gallery';
  layout?: 'grid' | 'masonry' | 'slider' | 'carousel' | 'justified';
  images?: Array<{
    id: string;
    src: string;
    alt?: string;
    caption?: string;
    link?: string;
  }>;
  columns?: ResponsiveValue<number>;
  gap?: string;
  lightbox?: boolean;
  sliderSettings?: {
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: boolean;
    dots?: boolean;
    infinite?: boolean;
    slidesToShow?: ResponsiveValue<number>;
    slidesToScroll?: number;
  };
  hoverEffect?: HoverEffect;
}

export interface VideoBlockConfig {
  type: 'video';
  source?: 'youtube' | 'vimeo' | 'self-hosted' | 'url';
  videoId?: string;
  url?: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '21:9' | 'custom';
  customAspectRatio?: string;
  overlay?: {
    enabled?: boolean;
    playIcon?: string;
    playIconSize?: string;
    playIconColor?: string;
  };
}

export interface AudioPlayerConfig {
  type: 'audio';
  src?: string;
  title?: string;
  artist?: string;
  cover?: string;
  style?: 'default' | 'minimal' | 'advanced';
  autoplay?: boolean;
  loop?: boolean;
  volume?: number;
  playlist?: Array<{
    id: string;
    src: string;
    title: string;
    artist?: string;
  }>;
}

export interface InteractiveImageConfig {
  type: 'interactive-image';
  src?: string;
  hotspots?: Array<{
    id: string;
    x: number; // percentage
    y: number; // percentage
    title?: string;
    description?: string;
    link?: string;
    icon?: string;
    tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
  }>;
}

export interface ImageComparisonConfig {
  type: 'image-comparison';
  beforeImage?: string;
  afterImage?: string;
  orientation?: 'horizontal' | 'vertical';
  startPosition?: number; // percentage
  handleColor?: string;
  labels?: {
    before?: string;
    after?: string;
  };
}

// ==================== STRUCTURAL BLOCKS ====================
// Layout and container blocks for page structure

// --- Layout Block Types ---
// Layout blocks: container, columns, accordion, tabs, modal, spacer, card

/**
 * Container Block Configuration
 * Main content wrapper with width and positioning controls
 */
export interface ContainerBlockConfig {
  type: 'container';
  width?: 'full' | 'boxed' | 'custom';
  customWidth?: string;
  minHeight?: string;
  contentPosition?: 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  htmlTag?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'aside' | 'main';
  children?: BlockConfigUnion[];
}

export interface ColumnBlockConfig {
  type: 'column';
  layout?: ResponsiveValue<number[]>; // e.g., [6, 6] for 50-50, [4, 8] for 33-66
  gap?: ResponsiveValue<string>;
  verticalAlign?: 'top' | 'center' | 'bottom' | 'stretch';
  reverseOrder?: ResponsiveValue<boolean>;
  columns?: Array<{
    id: string;
    width?: string;
    children?: BlockConfigUnion[];
  }>;
}

export interface AccordionBlockConfig {
  type: 'accordion';
  items?: Array<{
    id: string;
    title: string;
    content: string;
    icon?: string;
    open?: boolean;
  }>;
  allowMultiple?: boolean;
  collapsible?: boolean;
  iconPosition?: 'left' | 'right';
  icon?: { open: string; closed: string };
  titleTypography?: Typography;
  contentTypography?: Typography;
}

export interface TabsBlockConfig {
  type: 'tabs';
  orientation?: ResponsiveValue<'horizontal' | 'vertical'>;
  items?: Array<{
    id: string;
    title: string;
    content: string;
    icon?: string;
  }>;
  defaultActive?: number;
  tabPosition?: 'top' | 'bottom' | 'left' | 'right';
  titleTypography?: Typography;
  contentTypography?: Typography;
}

export interface ModalBlockConfig {
  type: 'modal';
  trigger?: {
    type?: 'button' | 'text' | 'image';
    label?: string;
    icon?: string;
  };
  modalContent?: string | BlockConfigUnion[];
  size?: 'small' | 'medium' | 'large' | 'fullscreen' | 'custom';
  customSize?: { width?: string; height?: string };
  closeButton?: boolean;
  closeOnOverlay?: boolean;
  animation?: AnimationType;
  header?: {
    enabled?: boolean;
    title?: string;
  };
  footer?: {
    enabled?: boolean;
    content?: string;
  };
}

export interface SpacerBlockConfig {
  type: 'spacer';
  height?: ResponsiveValue<string>;
  divider?: {
    enabled?: boolean;
    style?: 'solid' | 'dashed' | 'dotted' | 'double';
    weight?: string;
    color?: string;
    width?: string; // percentage or px
    alignment?: 'left' | 'center' | 'right';
    text?: string;
    textPosition?: 'left' | 'center' | 'right';
    textTypography?: Typography;
  };
}

export interface CardBlockConfig {
  type: 'card';
  image?: string;
  imagePosition?: 'top' | 'bottom' | 'left' | 'right' | 'background';
  title?: string;
  description?: string;
  button?: {
    text?: string;
    link?: string;
    style?: string;
  };
  badge?: {
    text?: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  };
  hoverEffect?: HoverEffect;
}

// ==================== NAVIGATION BLOCKS ====================

export interface MenuBlockConfig {
  type: 'menu';
  menuType?: 'horizontal' | 'vertical' | 'mega';
  items?: Array<{
    id: string;
    label: string;
    link?: string;
    icon?: string;
    submenu?: Array<{
      id: string;
      label: string;
      link?: string;
      icon?: string;
      description?: string;
    }>;
    megaMenuContent?: BlockConfigUnion[];
  }>;
  mobileBreakpoint?: string;
  hamburgerIcon?: string;
  sticky?: boolean;
  typography?: Typography;
}

export interface BreadcrumbsBlockConfig {
  type: 'breadcrumbs';
  items?: Array<{
    label: string;
    link?: string;
  }>;
  separator?: string;
  homeIcon?: string;
  typography?: Typography;
}

export interface PaginationBlockConfig {
  type: 'pagination';
  totalPages?: number;
  currentPage?: number;
  showNumbers?: boolean;
  showPrevNext?: boolean;
  showFirstLast?: boolean;
  maxVisible?: number;
  prevLabel?: string;
  nextLabel?: string;
  firstLabel?: string;
  lastLabel?: string;
}

export interface AnchorLinksConfig {
  type: 'anchor-links';
  links?: Array<{
    id: string;
    label: string;
    anchor: string;
  }>;
  smoothScroll?: boolean;
  offset?: number;
  highlightActive?: boolean;
  position?: 'static' | 'sticky' | 'fixed';
}

export interface TableOfContentsConfig {
  type: 'table-of-contents';
  includeLevels?: Array<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
  title?: string;
  collapsible?: boolean;
  position?: 'static' | 'sticky' | 'fixed';
  smoothScroll?: boolean;
  offset?: number;
}

// ==================== BUTTONS & CTA BLOCKS ====================

export interface ButtonBlockConfig {
  type: 'button';
  text?: string;
  link?: string;
  icon?: {
    icon?: string;
    position?: 'left' | 'right';
  };
  size?: 'small' | 'medium' | 'large' | 'custom';
  style?: 'solid' | 'outline' | 'ghost' | 'gradient' | '3d';
  fullWidth?: ResponsiveValue<boolean>;
  typography?: Typography;
  hoverEffect?: HoverEffect;
}

export interface ButtonGroupConfig {
  type: 'button-group';
  buttons?: Array<{
    id: string;
    text: string;
    link?: string;
    icon?: string;
    primary?: boolean;
  }>;
  direction?: ResponsiveValue<'horizontal' | 'vertical'>;
  gap?: string;
  alignment?: ResponsiveValue<'left' | 'center' | 'right' | 'stretch'>;
}

export interface FloatingActionButtonConfig {
  type: 'fab';
  icon?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  action?: 'link' | 'scroll-to-top' | 'modal' | 'custom';
  link?: string;
  tooltip?: string;
  size?: string;
}

export interface CTABlockConfig {
  type: 'cta';
  layout?: 'default' | 'banner' | 'cover' | 'boxed';
  title?: string;
  subtitle?: string;
  description?: string;
  button?: {
    text?: string;
    link?: string;
    icon?: string;
  };
  secondaryButton?: {
    text?: string;
    link?: string;
    icon?: string;
  };
  image?: string;
  imagePosition?: 'left' | 'right' | 'background';
}

// ==================== FORM BLOCKS ====================

export interface ContactFormConfig {
  type: 'contact-form';
  fields?: Array<{
    id: string;
    type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file';
    label?: string;
    placeholder?: string;
    required?: boolean;
    validation?: string;
    options?: Array<{ label: string; value: string }>;
    width?: ResponsiveValue<'full' | 'half' | 'third' | 'quarter'>;
  }>;
  submitButton?: {
    text?: string;
    position?: 'left' | 'center' | 'right';
  };
  successMessage?: string;
  errorMessage?: string;
  emailTo?: string;
  redirect?: string;
  multiStep?: {
    enabled?: boolean;
    steps?: Array<{
      title: string;
      fields: string[]; // field IDs
    }>;
  };
}

export interface NewsletterFormConfig {
  type: 'newsletter-form';
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  layout?: 'inline' | 'stacked';
  gdprCheckbox?: {
    enabled?: boolean;
    text?: string;
  };
  successMessage?: string;
  integration?: {
    service?: 'mailchimp' | 'sendinblue' | 'convertkit' | 'custom';
    apiKey?: string;
    listId?: string;
  };
}

export interface SearchFormConfig {
  type: 'search-form';
  placeholder?: string;
  buttonText?: string;
  showButton?: boolean;
  icon?: string;
  searchIn?: Array<'post' | 'page' | 'product' | 'custom'>;
  liveSearch?: boolean;
  resultsDisplay?: 'dropdown' | 'page';
  minChars?: number;
}

export interface QuizFormConfig {
  type: 'quiz-form';
  title?: string;
  questions?: Array<{
    id: string;
    question: string;
    type: 'single' | 'multiple' | 'text';
    options?: Array<{
      text: string;
      correct?: boolean;
      weight?: number;
    }>;
  }>;
  scoring?: {
    enabled?: boolean;
    showResults?: boolean;
    resultMessages?: Array<{
      minScore: number;
      maxScore: number;
      message: string;
    }>;
  };
  progressBar?: boolean;
}

// ==================== E-COMMERCE BLOCKS ====================

export interface ProductGridConfig {
  type: 'product-grid';
  layout?: 'grid' | 'list' | 'masonry';
  columns?: ResponsiveValue<number>;
  productsPerPage?: number;
  showFilters?: boolean;
  showSorting?: boolean;
  showQuickView?: boolean;
  showWishlist?: boolean;
  showCompare?: boolean;
  hoverEffect?: HoverEffect;
  pagination?: boolean;
  loadMore?: boolean;
}

export interface ProductCardConfig {
  type: 'product-card';
  product?: {
    id: string;
    name: string;
    price: string;
    salePrice?: string;
    image: string;
    gallery?: string[];
    rating?: number;
    reviews?: number;
    inStock?: boolean;
  };
  layout?: 'default' | 'overlay' | 'side-image';
  showRating?: boolean;
  showBadge?: boolean;
  showQuickView?: boolean;
  showWishlist?: boolean;
  showCompare?: boolean;
}

export interface AddToCartButtonConfig {
  type: 'add-to-cart-button';
  productId?: string;
  text?: string;
  quantity?: boolean;
  ajax?: boolean;
  redirectToCart?: boolean;
  typography?: Typography;
}

export interface PricingTableConfig {
  type: 'pricing-table';
  plans?: Array<{
    id: string;
    name: string;
    price: string;
    period?: string;
    featured?: boolean;
    badge?: string;
    features?: Array<{
      text: string;
      included: boolean;
      tooltip?: string;
    }>;
    button?: {
      text: string;
      link?: string;
    };
  }>;
  columns?: ResponsiveValue<number>;
  highlightFeatured?: boolean;
  togglePeriod?: {
    enabled?: boolean;
    monthly?: string;
    yearly?: string;
  };
}

export interface CountdownTimerConfig {
  type: 'countdown-timer';
  endDate?: string;
  timezone?: string;
  display?: Array<'days' | 'hours' | 'minutes' | 'seconds'>;
  labels?: {
    days?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
  };
  expiredMessage?: string;
  action?: 'hide' | 'show-message' | 'redirect';
  redirectUrl?: string;
  layout?: 'inline' | 'stacked' | 'circular';
}

// ==================== DATA & STATISTICS ====================

export interface ProgressBarConfig {
  type: 'progress-bar';
  bars?: Array<{
    id: string;
    label: string;
    percentage: number;
    color?: string;
  }>;
  layout?: 'horizontal' | 'vertical' | 'circular';
  showPercentage?: boolean;
  animated?: boolean;
  stripes?: boolean;
}

export interface CounterBlockConfig {
  type: 'counter';
  counters?: Array<{
    id: string;
    endValue: number;
    startValue?: number;
    label?: string;
    prefix?: string;
    suffix?: string;
    duration?: number;
    decimals?: number;
    icon?: string;
  }>;
  layout?: ResponsiveValue<'grid' | 'inline'>;
  columns?: ResponsiveValue<number>;
  animateOnScroll?: boolean;
}

export interface ChartBlockConfig {
  type: 'chart';
  chartType?: 'line' | 'bar' | 'pie' | 'doughnut' | 'radar' | 'polarArea';
  data?: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string;
      borderWidth?: number;
    }>;
  };
  options?: any; // Chart.js options
  responsive?: boolean;
  legend?: boolean;
  tooltip?: boolean;
}

export interface TimelineBlockConfig {
  type: 'timeline';
  orientation?: ResponsiveValue<'vertical' | 'horizontal'>;
  items?: Array<{
    id: string;
    date: string;
    title: string;
    description?: string;
    image?: string;
    icon?: string;
  }>;
  alternating?: boolean;
  lineColor?: string;
  iconStyle?: {
    backgroundColor?: string;
    color?: string;
    size?: string;
  };
}

export interface ComparisonTableConfig {
  type: 'comparison-table';
  items?: Array<{
    id: string;
    title: string;
    price?: string;
    features?: Array<{
      name: string;
      included: boolean | string;
      tooltip?: string;
    }>;
    button?: {
      text: string;
      link?: string;
    };
  }>;
  highlightColumn?: number;
}

// ==================== SOCIAL & COMMUNICATION ====================

export interface SocialShareConfig {
  type: 'social-share';
  networks?: Array<'facebook' | 'twitter' | 'linkedin' | 'pinterest' | 'whatsapp' | 'email' | 'telegram' | 'reddit'>;
  layout?: 'horizontal' | 'vertical' | 'grid';
  style?: 'icon' | 'icon-text' | 'button';
  shape?: 'circle' | 'square' | 'rounded';
  size?: string;
  showCounts?: boolean;
}

export interface TestimonialBlockConfig {
  type: 'testimonial';
  testimonials?: Array<{
    id: string;
    name: string;
    title?: string;
    company?: string;
    avatar?: string;
    rating?: number;
    content: string;
  }>;
  layout?: 'slider' | 'grid' | 'masonry';
  showRating?: boolean;
  showAvatar?: boolean;
  columns?: ResponsiveValue<number>;
  sliderSettings?: {
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: boolean;
    dots?: boolean;
  };
}

export interface CommentsBlockConfig {
  type: 'comments';
  sorting?: Array<'newest' | 'oldest' | 'popular'>;
  pagination?: boolean;
  commentsPerPage?: number;
  threading?: {
    enabled?: boolean;
    depth?: number;
  };
  allowAnonymous?: boolean;
  requireApproval?: boolean;
}

export interface FAQBlockConfig {
  type: 'faq';
  items?: Array<{
    id: string;
    question: string;
    answer: string;
    category?: string;
  }>;
  layout?: 'accordion' | 'tabs' | 'grid';
  searchable?: boolean;
  categories?: boolean;
  schema?: boolean; // Add FAQ Schema markup
}

// ==================== TEAM & CONTACT BLOCKS ====================

export interface TeamMemberConfig {
  type: 'team-member';
  members?: Array<{
    id: string;
    name: string;
    position: string;
    bio?: string;
    image?: string;
    social?: Array<{
      network: string;
      url: string;
    }>;
    email?: string;
    phone?: string;
  }>;
  layout?: 'grid' | 'slider' | 'list';
  columns?: ResponsiveValue<number>;
  showSocial?: boolean;
  hoverEffect?: HoverEffect;
}

export interface ContactInfoConfig {
  type: 'contact-info';
  items?: Array<{
    id: string;
    type: 'address' | 'phone' | 'email' | 'hours' | 'custom';
    icon?: string;
    label?: string;
    value: string;
    link?: string;
  }>;
  layout?: 'vertical' | 'horizontal' | 'grid';
}

export interface MapBlockConfig {
  type: 'map';
  provider?: 'google' | 'openstreetmap';
  latitude?: number;
  longitude?: number;
  zoom?: number;
  markers?: Array<{
    id: string;
    lat: number;
    lng: number;
    title?: string;
    description?: string;
    icon?: string;
  }>;
  height?: string;
  interactive?: boolean;
  style?: string; // Map style JSON
  controls?: {
    zoom?: boolean;
    streetView?: boolean;
    fullscreen?: boolean;
    mapType?: boolean;
  };
}

export interface LogoCarouselConfig {
  type: 'logo-carousel';
  logos?: Array<{
    id: string;
    image: string;
    alt?: string;
    link?: string;
  }>;
  columns?: ResponsiveValue<number>;
  autoplay?: boolean;
  autoplaySpeed?: number;
  arrows?: boolean;
  dots?: boolean;
  grayscale?: boolean;
  grayscaleHover?: boolean;
}

// ==================== EVENTS & TIME ====================

export interface CalendarBlockConfig {
  type: 'calendar';
  view?: 'month' | 'week' | 'day' | 'list';
  events?: Array<{
    id: string;
    title: string;
    start: string;
    end?: string;
    description?: string;
    location?: string;
    color?: string;
    url?: string;
  }>;
  defaultDate?: string;
  selectable?: boolean;
  eventLimit?: number;
}

export interface EventCardConfig {
  type: 'event-card';
  event?: {
    title: string;
    date: string;
    time?: string;
    location?: string;
    description?: string;
    image?: string;
    price?: string;
    organizer?: string;
    ticketUrl?: string;
  };
  layout?: 'default' | 'horizontal' | 'compact';
  showCountdown?: boolean;
}

export interface ScheduleBlockConfig {
  type: 'schedule';
  days?: Array<{
    day: string;
    date?: string;
    sessions?: Array<{
      id: string;
      time: string;
      title: string;
      speaker?: string;
      location?: string;
      description?: string;
    }>;
  }>;
  layout?: 'tabs' | 'accordion' | 'list';
}

// ==================== BLOG BLOCKS ====================

export interface BlogGridConfig {
  type: 'blog-grid';
  layout?: 'grid' | 'list' | 'masonry' | 'slider';
  columns?: ResponsiveValue<number>;
  postsPerPage?: number;
  showExcerpt?: boolean;
  excerptLength?: number;
  showAuthor?: boolean;
  showDate?: boolean;
  showCategories?: boolean;
  showTags?: boolean;
  showReadingTime?: boolean;
  pagination?: boolean;
  loadMore?: boolean;
}

export interface PostCardConfig {
  type: 'post-card';
  post?: {
    title: string;
    excerpt?: string;
    image?: string;
    author?: string;
    date?: string;
    categories?: string[];
    readingTime?: string;
    url?: string;
  };
  layout?: 'default' | 'overlay' | 'horizontal';
  showMeta?: boolean;
  hoverEffect?: HoverEffect;
}

export interface AuthorBoxConfig {
  type: 'author-box';
  author?: {
    name: string;
    bio?: string;
    avatar?: string;
    social?: Array<{
      network: string;
      url: string;
    }>;
    postsCount?: number;
  };
  showSocial?: boolean;
  showArchive?: boolean;
}

// ==================== SPECIAL BLOCKS ====================

export interface CodeBlockConfig {
  type: 'code';
  language?: string;
  code?: string;
  theme?: 'light' | 'dark' | 'custom';
  showLineNumbers?: boolean;
  highlightLines?: number[];
  fileName?: string;
  copyButton?: boolean;
}

export interface EmbedBlockConfig {
  type: 'embed';
  embedType?: 'iframe' | 'html' | 'shortcode';
  content?: string;
  url?: string;
  aspectRatio?: string;
  responsive?: boolean;
}

export interface AlertBlockConfig {
  type: 'alert';
  alertType?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message?: string;
  icon?: string;
  dismissible?: boolean;
  position?: 'static' | 'sticky' | 'fixed';
}

export interface ParticlesConfig {
  type: 'particles';
  particleType?: 'dots' | 'lines' | 'triangles' | 'custom';
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
  interactive?: boolean;
  opacity?: number;
}

export interface StickyElementConfig {
  type: 'sticky';
  content?: BlockConfigUnion;
  position?: 'top' | 'bottom';
  offset?: number;
  zIndex?: number;
  hideOn?: ResponsiveValue<boolean>;
}

// ==================== ДОДАТКОВІ ТЕКСТОВІ БЛОКИ ====================

export interface TextColumnsConfig {
  type: 'text-columns';
  content?: string;
  columns?: ResponsiveValue<number>;
  columnGap?: string;
  columnRuleStyle?: 'none' | 'solid' | 'dashed' | 'dotted' | 'double';
  columnRuleWidth?: string;
  columnRuleColor?: string;
  typography?: Typography;
}

export interface HighlightTextConfig {
  type: 'highlight-text';
  content?: string;
  highlightType?: 'background' | 'underline' | 'marker' | 'box' | 'gradient';
  highlightColor?: string;
  highlightWidth?: string;
  typography?: Typography;
}

export interface DropCapConfig {
  type: 'dropcap';
  letter?: string;
  lines?: number;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  backgroundColor?: string;
  shape?: 'none' | 'circle' | 'square';
}

// ==================== РОЗШИРЕНІ МЕДІА БЛОКИ ====================

export interface GifAnimationConfig {
  type: 'gif-animation';
  src?: string;
  alt?: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
  maxWidth?: string;
}

export interface SVGGraphicConfig {
  type: 'svg-graphic';
  svgCode?: string;
  svgUrl?: string;
  animate?: boolean;
  animationType?: 'draw' | 'morph' | 'color-change' | 'rotate' | 'scale';
  interactive?: boolean;
  hoverEffect?: HoverEffect;
}

export interface VideoBackgroundConfig {
  type: 'video-background';
  videoUrl?: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  overlay?: {
    enabled?: boolean;
    color?: string;
    opacity?: number;
  };
  minHeight?: string;
  content?: BlockConfigUnion[];
}

export interface Panorama360Config {
  type: 'panorama-360';
  imageUrl?: string;
  autoRotate?: boolean;
  rotateSpeed?: number;
  controls?: boolean;
  initialView?: {
    pitch?: number;
    yaw?: number;
    zoom?: number;
  };
}

// ==================== РОЗШИРЕНІ ФОРМИ ====================

export interface FileUploadFormConfig {
  type: 'file-upload-form';
  title?: string;
  maxFiles?: number;
  maxFileSize?: number; // MB
  allowedFileTypes?: string[];
  showPreview?: boolean;
  dragAndDrop?: boolean;
  uploadButton?: {
    text?: string;
    icon?: string;
  };
  progressBar?: boolean;
}

export interface CalculatorFormConfig {
  type: 'calculator-form';
  calculatorType?: 'loan' | 'mortgage' | 'bmi' | 'roi' | 'custom';
  fields?: Array<{
    id: string;
    label: string;
    type: 'number' | 'select' | 'slider';
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
    options?: Array<{ label: string; value: string }>;
  }>;
  formula?: string;
  resultLabel?: string;
  showSteps?: boolean;
}

export interface PollFormConfig {
  type: 'poll-form';
  question?: string;
  options?: Array<{
    id: string;
    text: string;
    votes?: number;
  }>;
  allowMultiple?: boolean;
  showResults?: 'after-vote' | 'always' | 'never';
  showVoteCount?: boolean;
  showPercentage?: boolean;
  expiration?: string;
}

export interface BookingFormConfig {
  type: 'booking-form';
  bookingType?: 'appointment' | 'room' | 'table' | 'service';
  fields?: Array<{
    id: string;
    type: 'date' | 'time' | 'datetime' | 'text' | 'select' | 'number';
    label: string;
    required?: boolean;
    options?: Array<{ label: string; value: string }>;
  }>;
  calendar?: {
    availableDays?: number[];
    excludedDates?: string[];
    timeSlots?: Array<{ start: string; end: string }>;
    minAdvance?: number; // hours
  };
  confirmationEmail?: boolean;
  paymentIntegration?: boolean;
}

export interface RegistrationFormConfig {
  type: 'registration-form';
  formType?: 'user' | 'event' | 'course' | 'membership';
  fields?: Array<{
    id: string;
    type: 'text' | 'email' | 'password' | 'tel' | 'select' | 'checkbox';
    label: string;
    placeholder?: string;
    required?: boolean;
    validation?: string;
  }>;
  passwordStrength?: boolean;
  termsCheckbox?: {
    enabled?: boolean;
    text?: string;
    link?: string;
  };
  socialLogin?: {
    enabled?: boolean;
    providers?: Array<'google' | 'facebook' | 'twitter' | 'linkedin'>;
  };
  redirectAfterSuccess?: string;
}

// ==================== РОЗШИРЕНІ E-COMMERCE БЛОКИ ====================

export interface ProductCarouselConfig {
  type: 'product-carousel';
  productsToShow?: ResponsiveValue<number>;
  autoplay?: boolean;
  autoplaySpeed?: number;
  arrows?: boolean;
  dots?: boolean;
  showQuickView?: boolean;
  showWishlist?: boolean;
  infinite?: boolean;
}

export interface MiniCartConfig {
  type: 'mini-cart';
  icon?: string;
  showCount?: boolean;
  showTotal?: boolean;
  cartType?: 'dropdown' | 'sidebar' | 'modal';
  emptyCartMessage?: string;
}

export interface ProductFiltersConfig {
  type: 'product-filters';
  filters?: Array<{
    id: string;
    type: 'price' | 'category' | 'tag' | 'attribute' | 'rating';
    label: string;
    options?: Array<{ label: string; value: string }>;
  }>;
  layout?: 'vertical' | 'horizontal';
  collapsible?: boolean;
  showCount?: boolean;
  ajax?: boolean;
}

export interface WishlistConfig {
  type: 'wishlist';
  layout?: 'grid' | 'list';
  columns?: ResponsiveValue<number>;
  showShareButton?: boolean;
  showMoveToCart?: boolean;
  showRemoveButton?: boolean;
}

export interface ProductComparisonConfig {
  type: 'product-comparison';
  maxProducts?: number;
  showAttributes?: string[];
  highlightDifferences?: boolean;
  sticky?: boolean;
}

export interface ProductReviewsConfig {
  type: 'product-reviews';
  productId?: string;
  layout?: 'list' | 'grid';
  showRating?: boolean;
  showImages?: boolean;
  showVerified?: boolean;
  sorting?: Array<'newest' | 'oldest' | 'highest' | 'lowest'>;
  pagination?: boolean;
  reviewsPerPage?: number;
}

export interface SizeChartConfig {
  type: 'size-chart';
  chartType?: 'clothing' | 'shoes' | 'custom';
  measurements?: Array<{
    size: string;
    values: Record<string, string>;
  }>;
  measurementSystem?: 'metric' | 'imperial' | 'both';
  modal?: boolean;
}

export interface ProductBadgesConfig {
  type: 'product-badges';
  badges?: Array<{
    id: string;
    text: string;
    type: 'new' | 'sale' | 'bestseller' | 'featured' | 'out-of-stock' | 'custom';
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    color?: string;
  }>;
}

export interface ShippingCalculatorConfig {
  type: 'shipping-calculator';
  fields?: Array<{
    id: string;
    type: 'country' | 'state' | 'zip' | 'weight';
    label: string;
    required?: boolean;
  }>;
  carriers?: Array<{
    name: string;
    estimatedDays?: string;
    price?: string;
  }>;
  showEstimatedDelivery?: boolean;
}

export interface RelatedProductsConfig {
  type: 'related-products';
  productId?: string;
  relationType?: 'related' | 'upsell' | 'cross-sell';
  productsToShow?: number;
  columns?: ResponsiveValue<number>;
  layout?: 'grid' | 'slider';
}

// ==================== РОЗШИРЕНІ ДАНІ ТА СТАТИСТИКА ====================

export interface MetricsKPIConfig {
  type: 'metrics-kpi';
  metrics?: Array<{
    id: string;
    label: string;
    value: string;
    change?: {
      value: string;
      type: 'increase' | 'decrease' | 'neutral';
    };
    icon?: string;
    color?: string;
  }>;
  layout?: ResponsiveValue<'grid' | 'inline'>;
  columns?: ResponsiveValue<number>;
}

export interface StarRatingConfig {
  type: 'star-rating';
  rating?: number;
  maxRating?: number;
  size?: string;
  color?: string;
  emptyColor?: string;
  showValue?: boolean;
  interactive?: boolean;
  halfStars?: boolean;
}

export interface SkillBarsConfig {
  type: 'skill-bars';
  skills?: Array<{
    id: string;
    name: string;
    percentage: number;
    color?: string;
    icon?: string;
  }>;
  layout?: 'horizontal' | 'vertical' | 'circular';
  showPercentage?: boolean;
  animated?: boolean;
}

// ==================== РОЗШИРЕНІ СОЦІАЛЬНІ БЛОКИ ====================

export interface InstagramFeedConfig {
  type: 'instagram-feed';
  username?: string;
  layout?: 'grid' | 'carousel' | 'masonry';
  columns?: ResponsiveValue<number>;
  postsToShow?: number;
  showCaption?: boolean;
  showLikes?: boolean;
  lightbox?: boolean;
}

export interface TwitterFeedConfig {
  type: 'twitter-feed';
  username?: string;
  layout?: 'list' | 'grid';
  tweetsToShow?: number;
  showImages?: boolean;
  showRetweets?: boolean;
  theme?: 'light' | 'dark';
}

export interface FacebookCommentsConfig {
  type: 'facebook-comments';
  appId?: string;
  url?: string;
  numPosts?: number;
  orderBy?: 'social' | 'reverse_time' | 'time';
  colorScheme?: 'light' | 'dark';
  width?: string;
}

export interface GoogleReviewsConfig {
  type: 'google-reviews';
  placeId?: string;
  layout?: 'slider' | 'grid' | 'list';
  reviewsToShow?: number;
  showRating?: boolean;
  showAvatar?: boolean;
  minRating?: number;
}

export interface SocialProofConfig {
  type: 'social-proof';
  proofType?: 'follower-count' | 'recent-activity' | 'live-visitors' | 'reviews';
  networks?: Array<'facebook' | 'twitter' | 'instagram' | 'youtube' | 'linkedin'>;
  showIcon?: boolean;
  showCount?: boolean;
  animateNumber?: boolean;
}

// ==================== РОЗШИРЕНІ БІЗНЕС БЛОКИ ====================

export interface OpeningHoursConfig {
  type: 'opening-hours';
  hours?: Array<{
    day: string;
    open: string;
    close: string;
    closed?: boolean;
  }>;
  timezone?: string;
  highlightCurrent?: boolean;
  showStatus?: boolean;
  statusTexts?: {
    open?: string;
    closed?: string;
    opensAt?: string;
  };
}

export interface CertificatesConfig {
  type: 'certificates';
  certificates?: Array<{
    id: string;
    image: string;
    title: string;
    organization?: string;
    date?: string;
    link?: string;
  }>;
  layout?: 'grid' | 'slider' | 'masonry';
  columns?: ResponsiveValue<number>;
  lightbox?: boolean;
}

export interface CaseStudyConfig {
  type: 'case-study';
  title?: string;
  client?: string;
  industry?: string;
  challenge?: string;
  solution?: string;
  results?: Array<{
    metric: string;
    value: string;
    description?: string;
  }>;
  images?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position?: string;
  };
}

export interface PortfolioConfig {
  type: 'portfolio';
  items?: Array<{
    id: string;
    title: string;
    category: string;
    image: string;
    description?: string;
    link?: string;
    tags?: string[];
  }>;
  layout?: 'grid' | 'masonry' | 'carousel';
  columns?: ResponsiveValue<number>;
  filterable?: boolean;
  lightbox?: boolean;
  loadMore?: boolean;
}

// ==================== РОЗШИРЕНІ ІНФОРМАЦІЙНІ БЛОКИ ====================

export interface AnnouncementBarConfig {
  type: 'announcement-bar';
  message?: string;
  icon?: string;
  link?: string;
  dismissible?: boolean;
  position?: 'top' | 'bottom';
  animation?: AnimationType;
  countdown?: {
    enabled?: boolean;
    endDate?: string;
  };
}

export interface ProgressTrackerConfig {
  type: 'progress-tracker';
  steps?: Array<{
    id: string;
    label: string;
    description?: string;
    icon?: string;
  }>;
  currentStep?: number;
  orientation?: ResponsiveValue<'horizontal' | 'vertical'>;
  showNumbers?: boolean;
}

export interface ProcessStepsConfig {
  type: 'process-steps';
  steps?: Array<{
    id: string;
    number?: string;
    title: string;
    description?: string;
    icon?: string;
  }>;
  layout?: 'vertical' | 'horizontal' | 'grid';
  columns?: ResponsiveValue<number>;
  showConnector?: boolean;
}

export interface IconBoxConfig {
  type: 'icon-box';
  icon?: string;
  title?: string;
  description?: string;
  link?: string;
  iconPosition?: 'top' | 'left' | 'right';
  iconStyle?: {
    size?: string;
    color?: string;
    backgroundColor?: string;
    shape?: 'none' | 'circle' | 'square' | 'rounded';
    border?: boolean;
  };
  hoverEffect?: HoverEffect;
}

export interface FeatureBoxConfig {
  type: 'feature-box';
  features?: Array<{
    id: string;
    icon?: string;
    title: string;
    description?: string;
    link?: string;
  }>;
  layout?: 'grid' | 'slider' | 'list';
  columns?: ResponsiveValue<number>;
  iconPosition?: 'top' | 'left';
}

// ==================== РОЗШИРЕНІ ТЕХНІЧНІ БЛОКИ ====================

export interface QRCodeConfig {
  type: 'qr-code';
  content?: string;
  size?: number;
  foreground?: string;
  background?: string;
  errorCorrection?: 'L' | 'M' | 'Q' | 'H';
  logo?: string;
  downloadable?: boolean;
}

export interface WeatherWidgetConfig {
  type: 'weather-widget';
  location?: string;
  units?: 'celsius' | 'fahrenheit';
  showForecast?: boolean;
  forecastDays?: number;
  showIcon?: boolean;
  autoUpdate?: boolean;
  updateInterval?: number;
}

export interface CryptoTickerConfig {
  type: 'crypto-ticker';
  coins?: Array<string>;
  currency?: string;
  showChange?: boolean;
  showChart?: boolean;
  autoUpdate?: boolean;
  updateInterval?: number;
  layout?: 'horizontal' | 'vertical' | 'grid';
}

export interface StockTickerConfig {
  type: 'stock-ticker';
  symbols?: Array<string>;
  showChange?: boolean;
  showChart?: boolean;
  autoUpdate?: boolean;
  updateInterval?: number;
  layout?: 'horizontal' | 'vertical' | 'grid';
}

export interface CurrencyConverterConfig {
  type: 'currency-converter';
  currencies?: Array<string>;
  defaultFrom?: string;
  defaultTo?: string;
  showChart?: boolean;
  autoUpdate?: boolean;
}

export interface MusicPlayerConfig {
  type: 'music-player';
  provider?: 'spotify' | 'soundcloud' | 'apple-music' | 'youtube-music';
  playlistId?: string;
  trackId?: string;
  theme?: 'light' | 'dark' | 'compact';
  autoplay?: boolean;
  showArtwork?: boolean;
}

export interface Model3DConfig {
  type: 'model-3d';
  modelUrl?: string;
  modelType?: 'gltf' | 'glb' | 'obj' | 'fbx';
  autoRotate?: boolean;
  controls?: boolean;
  cameraPosition?: { x: number; y: number; z: number };
  lighting?: string;
  background?: string;
  annotations?: Array<{
    id: string;
    position: { x: number; y: number; z: number };
    title?: string;
    description?: string;
  }>;
}

export interface VirtualTourConfig {
  type: 'virtual-tour';
  scenes?: Array<{
    id: string;
    image: string;
    title?: string;
    hotspots?: Array<{
      id: string;
      pitch: number;
      yaw: number;
      type: 'scene' | 'info';
      targetScene?: string;
      text?: string;
    }>;
  }>;
  startScene?: string;
  autoRotate?: boolean;
  showControls?: boolean;
}

export interface ChatbotWidgetConfig {
  type: 'chatbot-widget';
  provider?: 'custom' | 'intercom' | 'drift' | 'zendesk' | 'livechat';
  botName?: string;
  welcomeMessage?: string;
  position?: 'bottom-right' | 'bottom-left';
  icon?: string;
  primaryColor?: string;
  autoOpen?: boolean;
  autoOpenDelay?: number;
}

export interface ProductCustomizerConfig {
  type: 'product-customizer';
  productId?: string;
  customizableOptions?: Array<{
    id: string;
    type: 'color' | 'text' | 'image' | 'pattern';
    label: string;
    options?: Array<{ label: string; value: string; price?: string }>;
  }>;
  preview?: boolean;
  priceUpdate?: boolean;
}

export interface SitemapConfig {
  type: 'sitemap';
  pages?: Array<{
    title: string;
    url: string;
    children?: Array<{
      title: string;
      url: string;
    }>;
  }>;
  layout?: 'tree' | 'columns' | 'accordion';
  columns?: ResponsiveValue<number>;
  showIcons?: boolean;
}

export interface TagCloudConfig {
  type: 'tag-cloud';
  tags?: Array<{
    id: string;
    text: string;
    url?: string;
    count?: number;
    weight?: number;
  }>;
  minSize?: string;
  maxSize?: string;
  colors?: string[];
  clickable?: boolean;
}

export interface AvailabilityCalendarConfig {
  type: 'availability-calendar';
  resourceId?: string;
  availableDates?: Array<{
    date: string;
    slots?: Array<{ time: string; available: boolean }>;
  }>;
  selectable?: boolean;
  multiSelect?: boolean;
  minAdvance?: number;
  maxAdvance?: number;
}

export interface TableBookingConfig {
  type: 'table-booking';
  restaurant?: {
    name: string;
    tables?: Array<{
      id: string;
      capacity: number;
      available?: boolean;
    }>;
  };
  timeSlots?: Array<string>;
  duration?: number;
  minPartySize?: number;
  maxPartySize?: number;
}

export interface ClassScheduleConfig {
  type: 'class-schedule';
  classes?: Array<{
    id: string;
    name: string;
    instructor?: string;
    day: string;
    time: string;
    duration?: number;
    capacity?: number;
    enrolled?: number;
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
  }>;
  layout?: 'grid' | 'list' | 'calendar';
  filterable?: boolean;
  bookable?: boolean;
}

// ==================== FLIP BOX ====================

export interface FlipBoxConfig {
  type: 'flip-box';
  height?: string;
  flipDirection?: 'horizontal' | 'vertical';
  frontSide?: {
    icon?: string;
    title?: string;
    description?: string;
    background?: BackgroundSettings;
  };
  backSide?: {
    icon?: string;
    title?: string;
    description?: string;
    button?: {
      text?: string;
      link?: string;
    };
    background?: BackgroundSettings;
  };
}

// ==================== GLOBAL SETTINGS ====================

export interface GlobalSettings {
  colors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    text?: string;
    textLight?: string;
    background?: string;
    backgroundAlt?: string;
    border?: string;
    success?: string;
    warning?: string;
    error?: string;
    info?: string;
  };
  typography?: {
    fontFamily?: {
      primary?: string;
      secondary?: string;
      headings?: string;
    };
    fontSize?: {
      base?: string;
      h1?: string;
      h2?: string;
      h3?: string;
      h4?: string;
      h5?: string;
      h6?: string;
    };
    fontWeight?: {
      light?: number;
      normal?: number;
      medium?: number;
      semibold?: number;
      bold?: number;
    };
    lineHeight?: {
      tight?: number;
      normal?: number;
      relaxed?: number;
    };
  };
  spacing?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xxl?: string;
  };
  borderRadius?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    full?: string;
  };
  shadows?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  breakpoints?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
    wide?: string;
  };
}

// ==================== UNIFIED BLOCK CONFIG ====================

export type BlockConfigUnion = 
  // Text Blocks
  | HeadingBlockConfig
  | ParagraphBlockConfig
  | QuoteBlockConfig
  | ListBlockConfig
  | IconTextBlockConfig
  | TextColumnsConfig
  | HighlightTextConfig
  | DropCapConfig
  
  // Media Blocks
  | ImageBlockConfig
  | GalleryBlockConfig
  | VideoBlockConfig
  | AudioPlayerConfig
  | InteractiveImageConfig
  | ImageComparisonConfig
  | GifAnimationConfig
  | SVGGraphicConfig
  | VideoBackgroundConfig
  | Panorama360Config
  
  // Layout Blocks
  | ContainerBlockConfig
  | ColumnBlockConfig
  | AccordionBlockConfig
  | TabsBlockConfig
  | ModalBlockConfig
  | CardBlockConfig
  | SpacerBlockConfig
  
  // Navigation Blocks
  | MenuBlockConfig
  | BreadcrumbsBlockConfig
  | PaginationBlockConfig
  | AnchorLinksConfig
  | TableOfContentsConfig
  
  // Buttons & CTA
  | ButtonBlockConfig
  | ButtonGroupConfig
  | FloatingActionButtonConfig
  | CTABlockConfig
  
  // Forms
  | ContactFormConfig
  | NewsletterFormConfig
  | SearchFormConfig
  | QuizFormConfig
  | FileUploadFormConfig
  | CalculatorFormConfig
  | PollFormConfig
  | BookingFormConfig
  | RegistrationFormConfig
  
  // E-Commerce
  | ProductGridConfig
  | ProductCardConfig
  | AddToCartButtonConfig
  | PricingTableConfig
  | CountdownTimerConfig
  | ProductCarouselConfig
  | MiniCartConfig
  | ProductFiltersConfig
  | WishlistConfig
  | ProductComparisonConfig
  | ProductReviewsConfig
  | SizeChartConfig
  | ProductBadgesConfig
  | ShippingCalculatorConfig
  | RelatedProductsConfig
  
  // Data & Statistics
  | ProgressBarConfig
  | CounterBlockConfig
  | ChartBlockConfig
  | TimelineBlockConfig
  | ComparisonTableConfig
  | MetricsKPIConfig
  | StarRatingConfig
  | SkillBarsConfig
  
  // Social & Communication
  | SocialShareConfig
  | TestimonialBlockConfig
  | CommentsBlockConfig
  | FAQBlockConfig
  | InstagramFeedConfig
  | TwitterFeedConfig
  | FacebookCommentsConfig
  | GoogleReviewsConfig
  | SocialProofConfig
  
  // Team & Contacts
  | TeamMemberConfig
  | ContactInfoConfig
  | MapBlockConfig
  | LogoCarouselConfig
  | OpeningHoursConfig
  | CertificatesConfig
  | CaseStudyConfig
  | PortfolioConfig
  
  // Events & Time
  | CalendarBlockConfig
  | EventCardConfig
  | ScheduleBlockConfig
  
  // Blog Blocks
  | BlogGridConfig
  | PostCardConfig
  | AuthorBoxConfig
  
  // Info Blocks
  | AnnouncementBarConfig
  | ProgressTrackerConfig
  | ProcessStepsConfig
  | IconBoxConfig
  | FeatureBoxConfig
  
  // Technical Blocks
  | CodeBlockConfig
  | EmbedBlockConfig
  | QRCodeConfig
  | WeatherWidgetConfig
  | CryptoTickerConfig
  | StockTickerConfig
  | CurrencyConverterConfig
  | MusicPlayerConfig
  | Model3DConfig
  | VirtualTourConfig
  | ChatbotWidgetConfig
  | ProductCustomizerConfig
  | SitemapConfig
  | TagCloudConfig
  | AvailabilityCalendarConfig
  | TableBookingConfig
  | ClassScheduleConfig
  
  // Special Blocks
  | AlertBlockConfig
  | ParticlesConfig
  | StickyElementConfig
  | FlipBoxConfig;

export interface BaseBlockConfig {
  id: string;
  type: string;
  name?: string;
  category?: BlockCategory;
  
  // Common styling
  spacing?: Spacing;
  border?: Border;
  shadow?: Shadow;
  background?: BackgroundSettings;
  
  // Responsive
  hideOn?: ResponsiveValue<boolean>;
  
  // Animation
  animation?: {
    type?: AnimationType;
    duration?: number;
    delay?: number;
    easing?: string;
    trigger?: 'on-load' | 'on-scroll' | 'on-hover' | 'on-click';
  };
  hoverAnimation?: {
    type?: HoverEffect;
    duration?: number;
  };
  
  // Advanced
  customCSS?: string;
  customAttributes?: Record<string, string>;
  conditionalLogic?: {
    enabled?: boolean;
    rules?: Array<{
      field: string;
      operator: '=' | '!=' | '>' | '<' | 'contains' | 'not-contains';
      value: any;
    }>;
  };
  
  // Specific block config
  config?: BlockConfigUnion;
}

export interface FullBlockConfig extends BaseBlockConfig {
  globalSettings?: GlobalSettings;
  metadata?: {
    createdAt?: string;
    updatedAt?: string;
    version?: string;
    author?: string;
  };
}
