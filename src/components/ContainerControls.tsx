import React from 'react';
import { BaseBlockConfig, ContainerBlockConfig } from '@/types/blockTypes';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SpacingControls from './SpacingControls';

interface ContainerControlsProps {
  block: BaseBlockConfig;
  updateBlock: (updates: Partial<BaseBlockConfig>) => void;
}

const ContainerControls: React.FC<ContainerControlsProps> = ({ block, updateBlock }) => {
  const config = block.config as ContainerBlockConfig;

  const handleConfigChange = (key: keyof ContainerBlockConfig, value: any) => {
    updateBlock({
      config: {
        ...config,
        [key]: value,
      },
    });
  };

  return (
    <Tabs defaultValue="layout">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="layout">Макет</TabsTrigger>
        <TabsTrigger value="content">Контент</TabsTrigger>
      </TabsList>
      <TabsContent value="layout" className="space-y-4 pt-4">
        {/* HTML Tag */}
        <div className="space-y-2">
          <Label htmlFor="html-tag">HTML Тег</Label>
          <Select
            value={config.htmlTag || 'div'}
            onValueChange={(value) => handleConfigChange('htmlTag', value)}
          >
            <SelectTrigger id="html-tag">
              <SelectValue placeholder="Виберіть тег" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="div">DIV (За замовчуванням)</SelectItem>
              <SelectItem value="section">SECTION</SelectItem>
              <SelectItem value="article">ARTICLE</SelectItem>
              <SelectItem value="header">HEADER</SelectItem>
              <SelectItem value="footer">FOOTER</SelectItem>
              <SelectItem value="aside">ASIDE</SelectItem>
              <SelectItem value="main">MAIN</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Width */}
        <div className="space-y-2">
          <Label htmlFor="container-width">Ширина контейнера</Label>
          <Select
            value={config.width || 'boxed'}
            onValueChange={(value) => handleConfigChange('width', value)}
          >
            <SelectTrigger id="container-width">
              <SelectValue placeholder="Виберіть ширину" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="boxed">Обмежена (Boxed)</SelectItem>
              <SelectItem value="full">Повна ширина (Full Width)</SelectItem>
              <SelectItem value="custom">Користувацька</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Custom Width */}
        {config.width === 'custom' && (
          <div className="space-y-2">
            <Label htmlFor="custom-width">Користувацька ширина</Label>
            <Input
              id="custom-width"
              type="text"
              value={config.customWidth || '1140px'}
              onChange={(e) => handleConfigChange('customWidth', e.target.value)}
              placeholder="e.g., 1200px, 90%"
            />
          </div>
        )}

        {/* Min Height */}
        <div className="space-y-2">
          <Label htmlFor="min-height">Мінімальна висота</Label>
          <Input
            id="min-height"
            type="text"
            value={config.minHeight || ''}
            onChange={(e) => handleConfigChange('minHeight', e.target.value)}
            placeholder="e.g., 400px, 100vh"
          />
        </div>
        
        {/* General Spacing Controls (Margin/Padding) */}
        <h4 className="font-semibold pt-2 border-t">Відступи</h4>
        <SpacingControls block={block} updateBlock={updateBlock} />
      </TabsContent>

      <TabsContent value="content" className="space-y-4 pt-4">
        {/* Content Position */}
        <div className="space-y-2">
          <Label htmlFor="content-position">Позиція контенту</Label>
          <Select
            value={config.contentPosition || 'top-left'}
            onValueChange={(value) => handleConfigChange('contentPosition', value)}
          >
            <SelectTrigger id="content-position">
              <SelectValue placeholder="Виберіть позицію" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="top-left">Вгорі Зліва</SelectItem>
              <SelectItem value="top-center">Вгорі По центру</SelectItem>
              <SelectItem value="top-right">Вгорі Справа</SelectItem>
              <SelectItem value="center-left">По центру Зліва</SelectItem>
              <SelectItem value="center">По центру</SelectItem>
              <SelectItem value="center-right">По центру Справа</SelectItem>
              <SelectItem value="bottom-left">Внизу Зліва</SelectItem>
              <SelectItem value="bottom-center">Внизу По центру</SelectItem>
              <SelectItem value="bottom-right">Внизу Справа</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="p-3 border rounded-md bg-yellow-50/50 text-sm text-yellow-800">
          **Примітка:** Додавання блоків всередину контейнера поки що відбувається через панель "Блоки" у лівій частині екрана. Функціонал Drag & Drop буде реалізовано пізніше.
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ContainerControls;
