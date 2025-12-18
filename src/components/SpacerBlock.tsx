import React from 'react';
import { SpacerBlockConfig } from '@/types/blockTypes';
import { useResponsiveValue } from '@/lib/hooks';
import { cn } from '@/lib/utils';

interface SpacerBlockProps {
  config: SpacerBlockConfig;
  isEditing: boolean;
}

const SpacerBlock: React.FC<SpacerBlockProps> = ({ config, isEditing }) => {
  const { height, divider } = config;
  const currentHeight = useResponsiveValue(height, '50px');

  const spacerStyle: React.CSSProperties = {
    height: currentHeight,
    minHeight: currentHeight,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // Only show a visual cue in the editor if no divider is enabled
    backgroundColor: isEditing && !divider?.enabled ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
    border: isEditing && !divider?.enabled ? '1px dashed rgba(0, 0, 0, 0.2)' : 'none',
    borderRadius: isEditing && !divider?.enabled ? '4px' : '0',
    position: 'relative',
  };

  if (!divider?.enabled) {
    return (
      <div className="manus-spacer-block" style={spacerStyle}>
        {isEditing && <span className="text-xs text-gray-500 select-none">{currentHeight} Spacer</span>}
      </div>
    );
  }

  // Divider logic
  const { style, weight, color, width, alignment, text, textPosition, textTypography } = divider;

  const dividerStyle: React.CSSProperties = {
    borderTopWidth: weight || '1px',
    borderTopStyle: style || 'solid',
    borderTopColor: color || '#e5e7eb',
    width: width || '100%',
  };

  const wrapperStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: alignment === 'left' ? 'flex-start' : alignment === 'right' ? 'flex-end' : 'center',
    width: '100%',
    height: currentHeight,
    minHeight: currentHeight,
  };

  const textStyle: React.CSSProperties = {
    ...textTypography,
    padding: '0 10px',
    backgroundColor: 'white', // To make the text stand out over the line
    position: 'relative',
    top: '-1px', // Adjust to align with the line
  };

  const lineClass = cn(
    'manus-divider-line',
    text ? 'flex-grow' : 'flex-shrink-0'
  );

  const renderDivider = (position: 'left' | 'right' | 'center') => {
    if (text && textPosition === position) {
      return (
        <span key={position} style={textStyle} className="manus-divider-text">
          {text}
        </span>
      );
    }
    return <div key={position} className={lineClass} style={dividerStyle} />;
  };

  return (
    <div className="manus-spacer-block manus-divider-block" style={wrapperStyle}>
      {text ? (
        <>
          {renderDivider('left')}
          {renderDivider('center')}
          {renderDivider('right')}
        </>
      ) : (
        <div className="manus-divider-line-full" style={dividerStyle} />
      )}
    </div>
  );
};

export default SpacerBlock;
