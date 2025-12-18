import React from 'react';
import { BaseBlockConfig, SpacerBlockConfig } from '@/types/blockTypes';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ColorPicker from './ColorPicker';
import SpacingControls from './SpacingControls'; // Assuming this exists for general spacing

interface SpacerControlsProps {
  block: BaseBlockConfig;
  updateBlock: (updates: Partial<BaseBlockConfig>) => void;
}

const SpacerControls: React.FC<SpacerControlsProps> = ({ block, updateBlock }) => {
  const config = block.config as SpacerBlockConfig;

  const handleConfigChange = (key: keyof SpacerBlockConfig, value: any) => {
    updateBlock({
      config: {
        ...config,
        [key]: value,
      },
    });
  };

  const handleDividerChange = (key: keyof NonNullable<SpacerBlockConfig['divider']>, value: any) => {
    updateBlock({
      config: {
        ...config,
        divider: {
          ...config.divider,
          [key]: value,
        },
      },
    });
  };

  return (
    <div className="space-y-6">
      {/* Spacer Height Control */}
      <div className="space-y-2">
        <Label htmlFor="spacer-height">Висота (Desktop)</Label>
        <Input
          id="spacer-height"
          type="text"
          value={config.height?.desktop || '50px'}
          onChange={(e) => handleConfigChange('height', { ...config.height, desktop: e.target.value })}
          placeholder="e.g., 50px, 5vh, 5%"
        />
        <p className="text-xs text-gray-500">Використовуйте px, vh, % або інші одиниці. Для адаптивності використовуйте окремі контролери.</p>
      </div>

      {/* Divider Toggle */}
      <div className="flex items-center justify-between">
        <Label htmlFor="divider-toggle">Увімкнути роздільну лінію</Label>
        <Switch
          id="divider-toggle"
          checked={config.divider?.enabled || false}
          onCheckedChange={(checked) => handleDividerChange('enabled', checked)}
        />
      </div>

      {/* Divider Settings */}
      {config.divider?.enabled && (
        <div className="space-y-4 border-t pt-4">
          <h4 className="font-semibold">Налаштування роздільника</h4>
          
          {/* Style */}
          <div className="space-y-2">
            <Label htmlFor="divider-style">Стиль лінії</Label>
            <Select
              value={config.divider.style || 'solid'}
              onValueChange={(value) => handleDividerChange('style', value)}
            >
              <SelectTrigger id="divider-style">
                <SelectValue placeholder="Виберіть стиль" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solid">Solid</SelectItem>
                <SelectItem value="dashed">Dashed</SelectItem>
                <SelectItem value="dotted">Dotted</SelectItem>
                <SelectItem value="double">Double</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Weight */}
          <div className="space-y-2">
            <Label htmlFor="divider-weight">Товщина лінії</Label>
            <Input
              id="divider-weight"
              type="text"
              value={config.divider.weight || '1px'}
              onChange={(e) => handleDividerChange('weight', e.target.value)}
              placeholder="e.g., 1px, 2px"
            />
          </div>

          {/* Color */}
          <div className="space-y-2">
            <Label>Колір лінії</Label>
            <ColorPicker
              color={config.divider.color || '#e5e7eb'}
              onChange={(color) => handleDividerChange('color', color)}
            />
          </div>

          {/* Width */}
          <div className="space-y-2">
            <Label htmlFor="divider-width">Ширина лінії</Label>
            <Input
              id="divider-width"
              type="text"
              value={config.divider.width || '100%'}
              onChange={(e) => handleDividerChange('width', e.target.value)}
              placeholder="e.g., 100%, 50%, 300px"
            />
          </div>

          {/* Alignment */}
          <div className="space-y-2">
            <Label htmlFor="divider-alignment">Вирівнювання</Label>
            <Select
              value={config.divider.alignment || 'center'}
              onValueChange={(value) => handleDividerChange('alignment', value)}
            >
              <SelectTrigger id="divider-alignment">
                <SelectValue placeholder="Виберіть вирівнювання" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="left">Зліва</SelectItem>
                <SelectItem value="center">По центру</SelectItem>
                <SelectItem value="right">Справа</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Text in Divider */}
          <div className="space-y-2">
            <Label htmlFor="divider-text">Текст у роздільнику (опціонально)</Label>
            <Input
              id="divider-text"
              type="text"
              value={config.divider.text || ''}
              onChange={(e) => handleDividerChange('text', e.target.value)}
              placeholder="Наприклад, АБО"
            />
          </div>

          {/* Text Position */}
          {config.divider.text && (
            <div className="space-y-2">
              <Label htmlFor="divider-text-position">Позиція тексту</Label>
              <Select
                value={config.divider.textPosition || 'center'}
                onValueChange={(value) => handleDividerChange('textPosition', value)}
              >
                <SelectTrigger id="divider-text-position">
                  <SelectValue placeholder="Виберіть позицію" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="left">Зліва</SelectItem>
                  <SelectItem value="center">По центру</SelectItem>
                  <SelectItem value="right">Справа</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          
          {/* Typography for Text (Simplified) */}
          {/* NOTE: Full Typography controls are complex. For PoC, we skip it or use a simplified version. */}
          {/* For now, we'll just show a placeholder */}
          {config.divider.text && (
            <div className="p-3 border rounded-md bg-gray-50">
              <p className="text-sm text-gray-600">
                Налаштування типографіки для тексту роздільника (колір, розмір) будуть додані пізніше.
              </p>
            </div>
          )}
        </div>
      )}
      
      {/* General Spacing Controls (Margin/Padding) */}
      <SpacingControls block={block} updateBlock={updateBlock} />
    </div>
  );
};

export default SpacerControls;
