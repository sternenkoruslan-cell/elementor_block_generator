import React from 'react';
import { ContainerBlockConfig, BaseBlockConfig } from '@/types/blockTypes';
import { cn } from '@/lib/utils';

// This is a placeholder for the BlockRenderer component, which will be passed as a prop
// to handle recursive rendering of nested blocks.
interface BlockRendererProps {
  block: BaseBlockConfig;
  isEditing: boolean;
  onBlockSelect: (id: string) => void;
  onBlockDelete: (id: string) => void;
}

interface ContainerBlockProps {
  config: ContainerBlockConfig;
  isEditing: boolean;
  // Prop to render nested blocks, passed from the main configurator
  BlockRenderer: React.FC<BlockRendererProps>;
  // Props for handling block management within the container
  onBlockSelect: (id: string) => void;
  onBlockDelete: (id: string) => void;
}

const ContainerBlock: React.FC<ContainerBlockProps> = ({ 
  config, 
  isEditing, 
  BlockRenderer,
  onBlockSelect,
  onBlockDelete,
}) => {
  const { width, customWidth, minHeight, contentPosition, htmlTag = 'div', children = [] } = config;

  // Determine the container width class
  const widthClass = width === 'full' ? 'w-full' : width === 'boxed' ? 'max-w-7xl mx-auto' : '';
  const customStyle: React.CSSProperties = {};

  if (width === 'custom' && customWidth) {
    customStyle.width = customWidth;
  }

  if (minHeight) {
    customStyle.minHeight = minHeight;
  }

  // Determine Flexbox classes for content position
  const contentPositionClasses = cn(
    'flex',
    {
      'justify-start': contentPosition?.includes('left'),
      'justify-center': contentPosition?.includes('center') && !contentPosition?.includes('left') && !contentPosition?.includes('right'),
      'justify-end': contentPosition?.includes('right'),
      'items-start': contentPosition?.includes('top'),
      'items-center': contentPosition?.includes('center') && !contentPosition?.includes('top') && !contentPosition?.includes('bottom'),
      'items-end': contentPosition?.includes('bottom'),
    }
  );

  const Tag = htmlTag as keyof JSX.IntrinsicElements;

  return (
    <Tag 
      className={cn(
        'manus-container-block',
        widthClass,
        contentPositionClasses,
        isEditing ? 'p-4 border-2 border-dashed border-blue-400 relative group' : ''
      )}
      style={customStyle}
    >
      {isEditing && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br-md z-10">
          {htmlTag.toUpperCase()} Container
        </div>
      )}
      
      <div className="w-full">
        {children.length > 0 ? (
          children.map((childBlock) => (
            <div 
              key={childBlock.id} 
              className={isEditing ? 'my-2' : ''}
              // We pass the BlockRenderer recursively
            >
              <BlockRenderer 
                block={childBlock} 
                isEditing={isEditing} 
                onBlockSelect={onBlockSelect}
                onBlockDelete={onBlockDelete}
              />
            </div>
          ))
        ) : isEditing ? (
          <div className="text-center text-gray-500 p-10 border border-dashed border-gray-300 rounded-md">
            Перетягніть сюди блоки або натисніть "+"
          </div>
        ) : null}
      </div>
    </Tag>
  );
};

export default ContainerBlock;
