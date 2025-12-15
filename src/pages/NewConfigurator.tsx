/**
 * Modern Block Configurator with Full Block System
 * Updated to use the comprehensive block registry and type system
 */

import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plus, Download, Copy, Eye, Settings, Trash2 } from 'lucide-react';
import { BlockPicker } from '@/components/BlockPicker';
import { createBlockInstance, getBlockDefinition } from '@/lib/blockRegistry';
import { BaseBlockConfig, GlobalSettings } from '@/types/blockTypes';

export default function NewConfigurator() {
  const [blocks, setBlocks] = useState<BaseBlockConfig[]>([]);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [activeTab, setActiveTab] = useState('blocks');

  const [globalSettings, setGlobalSettings] = useState<GlobalSettings>({
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      accent: '#10b981',
      text: '#1f2937',
      background: '#ffffff',
    },
    typography: {
      fontFamily: {
        primary: 'Inter, sans-serif',
      },
      fontSize: {
        base: '16px',
      },
    },
    spacing: {
      md: '16px',
      lg: '24px',
    },
  });

  // Handle block selection from picker
  const handleBlockSelect = useCallback((blockType: string) => {
    const newBlock = createBlockInstance(blockType);
    setBlocks(prev => [...prev, newBlock]);
    setSelectedBlockId(newBlock.id);
  }, []);

  // Handle block deletion
  const handleDeleteBlock = useCallback((blockId: string) => {
    setBlocks(prev => prev.filter(b => b.id !== blockId));
    if (selectedBlockId === blockId) {
      setSelectedBlockId(null);
    }
  }, [selectedBlockId]);

  // Handle block update
  const handleUpdateBlock = useCallback((blockId: string, updates: Partial<BaseBlockConfig>) => {
    setBlocks(prev => prev.map(block => 
      block.id === blockId ? { ...block, ...updates } : block
    ));
  }, []);

  // Export configuration
  const handleExport = useCallback(() => {
    const exportData = {
      blocks,
      globalSettings,
      metadata: {
        exportDate: new Date().toISOString(),
        version: '1.0.0',
      },
    };

    const json = JSON.stringify(exportData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `block-config-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [blocks, globalSettings]);

  // Copy to clipboard
  const handleCopy = useCallback(() => {
    const json = JSON.stringify({ blocks, globalSettings }, null, 2);
    navigator.clipboard.writeText(json);
    // TODO: Show toast notification
    alert('Конфігурацію скопійовано в буфер обміну!');
  }, [blocks, globalSettings]);

  const selectedBlock = blocks.find(b => b.id === selectedBlockId);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Конструктор блоків</h1>
              <p className="text-sm text-gray-500">Створюйте готові блоки для WordPress</p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={previewMode ? 'default' : 'outline'}
                size="sm"
                onClick={() => setPreviewMode(!previewMode)}
              >
                <Eye className="w-4 h-4 mr-2" />
                {previewMode ? 'Редагувати' : 'Превью'}
              </Button>
              <Button variant="outline" size="sm" onClick={handleCopy}>
                <Copy className="w-4 h-4 mr-2" />
                Копіювати
              </Button>
              <Button variant="outline" size="sm" onClick={handleExport}>
                <Download className="w-4 h-4 mr-2" />
                Експорт
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Block List */}
          <div className="col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  Блоки
                  <Button size="sm" onClick={() => setPickerOpen(true)}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(100vh-280px)]">
                  {blocks.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">
                      <p className="text-sm">Немає блоків</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2"
                        onClick={() => setPickerOpen(true)}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Додати блок
                      </Button>
                    </div>
                  ) : (
                    <div className="p-2 space-y-1">
                      {blocks.map((block) => {
                        const definition = getBlockDefinition(block.type);
                        return (
                          <div
                            key={block.id}
                            className={`
                              p-3 rounded-md cursor-pointer transition-colors
                              ${selectedBlockId === block.id 
                                ? 'bg-primary text-white' 
                                : 'hover:bg-gray-100'
                              }
                            `}
                            onClick={() => setSelectedBlockId(block.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 flex-1 min-w-0">
                                <span className="text-lg">{definition?.icon}</span>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium truncate">
                                    {block.name || definition?.nameUk}
                                  </p>
                                  <p className={`text-xs truncate ${
                                    selectedBlockId === block.id ? 'text-white/70' : 'text-gray-500'
                                  }`}>
                                    {definition?.type}
                                  </p>
                                </div>
                              </div>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteBlock(block.id);
                                }}
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Center - Editor or Preview */}
          <div className="col-span-6">
            <Card className="h-[calc(100vh-200px)]">
              <CardHeader>
                <CardTitle className="text-lg">
                  {previewMode ? 'Превью' : 'Редактор'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[calc(100vh-300px)]">
                  {previewMode ? (
                    <div className="space-y-4">
                      {blocks.map((block) => {
                        const definition = getBlockDefinition(block.type);
                        return (
                          <div 
                            key={block.id} 
                            className="p-4 border-2 border-dashed border-gray-300 rounded-lg"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-2xl">{definition?.icon}</span>
                              <span className="font-medium">{definition?.nameUk}</span>
                            </div>
                            <div className="text-sm text-gray-600">
                              {/* TODO: Render actual block preview */}
                              <pre className="bg-gray-50 p-2 rounded text-xs overflow-x-auto">
                                {JSON.stringify(block.config, null, 2)}
                              </pre>
                            </div>
                          </div>
                        );
                      })}
                      {blocks.length === 0 && (
                        <div className="text-center text-gray-500 py-12">
                          <p>Додайте блоки для перегляду</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      {selectedBlock ? (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 pb-4 border-b">
                            <span className="text-3xl">
                              {getBlockDefinition(selectedBlock.type)?.icon}
                            </span>
                            <div>
                              <h3 className="font-semibold">
                                {getBlockDefinition(selectedBlock.type)?.nameUk}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {getBlockDefinition(selectedBlock.type)?.descriptionUk}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <label className="text-sm font-medium block mb-2">
                                Назва блоку
                              </label>
                              <input
                                type="text"
                                value={selectedBlock.name || ''}
                                onChange={(e) => handleUpdateBlock(selectedBlock.id, { name: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                placeholder="Введіть назву блоку"
                              />
                            </div>

                            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                              <p className="text-sm text-yellow-800">
                                🚧 Редактор специфічних налаштувань блоку в розробці
                              </p>
                              <p className="text-xs text-yellow-600 mt-1">
                                Поки що ви можете редагувати JSON конфігурацію нижче
                              </p>
                            </div>

                            <div>
                              <label className="text-sm font-medium block mb-2">
                                Конфігурація (JSON)
                              </label>
                              <textarea
                                value={JSON.stringify(selectedBlock.config, null, 2)}
                                onChange={(e) => {
                                  try {
                                    const config = JSON.parse(e.target.value);
                                    handleUpdateBlock(selectedBlock.id, { config });
                                  } catch (err) {
                                    // Invalid JSON, ignore
                                  }
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md font-mono text-xs"
                                rows={15}
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center text-gray-500 py-12">
                          <Settings className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                          <p>Виберіть блок зі списку для редагування</p>
                        </div>
                      )}
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Settings */}
          <div className="col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Налаштування</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="blocks">Блок</TabsTrigger>
                    <TabsTrigger value="global">Глобальні</TabsTrigger>
                  </TabsList>

                  <TabsContent value="blocks" className="space-y-4 mt-4">
                    {selectedBlock ? (
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Відступи</h4>
                          <p className="text-xs text-gray-500">Налаштування padding та margin</p>
                          {/* TODO: Add spacing controls */}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Рамка</h4>
                          <p className="text-xs text-gray-500">Колір, товщина, радіус</p>
                          {/* TODO: Add border controls */}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Тінь</h4>
                          <p className="text-xs text-gray-500">Box shadow налаштування</p>
                          {/* TODO: Add shadow controls */}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Анімація</h4>
                          <p className="text-xs text-gray-500">Ефекти входу та hover</p>
                          {/* TODO: Add animation controls */}
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">Виберіть блок</p>
                    )}
                  </TabsContent>

                  <TabsContent value="global" className="space-y-4 mt-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Кольори</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs">Primary</label>
                          <input
                            type="color"
                            value={globalSettings.colors?.primary}
                            onChange={(e) => setGlobalSettings(prev => ({
                              ...prev,
                              colors: { ...prev.colors, primary: e.target.value }
                            }))}
                            className="w-10 h-6 rounded border"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-xs">Secondary</label>
                          <input
                            type="color"
                            value={globalSettings.colors?.secondary}
                            onChange={(e) => setGlobalSettings(prev => ({
                              ...prev,
                              colors: { ...prev.colors, secondary: e.target.value }
                            }))}
                            className="w-10 h-6 rounded border"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Типографіка</h4>
                      <div className="space-y-2">
                        <div>
                          <label className="text-xs block mb-1">Шрифт</label>
                          <input
                            type="text"
                            value={globalSettings.typography?.fontFamily?.primary}
                            onChange={(e) => setGlobalSettings(prev => ({
                              ...prev,
                              typography: {
                                ...prev.typography,
                                fontFamily: { ...prev.typography?.fontFamily, primary: e.target.value }
                              }
                            }))}
                            className="w-full px-2 py-1 text-xs border rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Block Picker Dialog */}
      <BlockPicker
        open={pickerOpen}
        onOpenChange={setPickerOpen}
        onSelectBlock={handleBlockSelect}
      />
    </div>
  );
}
