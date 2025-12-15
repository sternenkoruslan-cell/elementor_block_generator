/**
 * Block Picker Component
 * Allows users to browse and select blocks by category
 */

import React, { useState, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Plus, Star } from 'lucide-react';
import { 
  BLOCK_REGISTRY, 
  getBlocksByCategory, 
  getCategoriesWithCounts,
  searchBlocks,
  BlockDefinition 
} from '@/lib/blockRegistry';
import { BlockCategory } from '@/types/blockTypes';

interface BlockPickerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectBlock: (blockType: string) => void;
}

export function BlockPicker({ open, onOpenChange, onSelectBlock }: BlockPickerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BlockCategory | 'all'>('all');

  const categories = useMemo(() => getCategoriesWithCounts(), []);

  const filteredBlocks = useMemo(() => {
    if (searchQuery) {
      return searchBlocks(searchQuery);
    }
    
    if (selectedCategory === 'all') {
      return Object.values(BLOCK_REGISTRY);
    }
    
    return getBlocksByCategory(selectedCategory as BlockCategory);
  }, [searchQuery, selectedCategory]);

  const handleSelectBlock = (blockType: string) => {
    onSelectBlock(blockType);
    onOpenChange(false);
    setSearchQuery('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Додати блок</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Пошук блоків..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as BlockCategory | 'all')}>
            <ScrollArea className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  Усі блоки
                  <Badge variant="secondary">{Object.keys(BLOCK_REGISTRY).length}</Badge>
                </TabsTrigger>
                {categories.map(({ category, count, nameUk }) => (
                  <TabsTrigger key={category} value={category} className="flex items-center gap-2">
                    {nameUk}
                    <Badge variant="secondary">{count}</Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>

            {/* Blocks Grid */}
            <TabsContent value={selectedCategory} className="mt-4">
              <ScrollArea className="h-[400px]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-1">
                  {filteredBlocks.map((block) => (
                    <BlockCard
                      key={block.type}
                      block={block}
                      onSelect={() => handleSelectBlock(block.type)}
                    />
                  ))}
                </div>
                {filteredBlocks.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    <p>Блоки не знайдено</p>
                    <p className="text-sm mt-2">Спробуйте інший пошуковий запит або категорію</p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface BlockCardProps {
  block: BlockDefinition;
  onSelect: () => void;
}

function BlockCard({ block, onSelect }: BlockCardProps) {
  return (
    <Button
      variant="outline"
      className="h-auto flex-col items-start p-4 hover:border-primary hover:bg-primary/5 transition-all group relative"
      onClick={onSelect}
    >
      {block.premium && (
        <Badge className="absolute top-2 right-2" variant="default">
          <Star className="w-3 h-3 mr-1" />
          PRO
        </Badge>
      )}
      
      <div className="text-3xl mb-2">{block.icon}</div>
      
      <div className="w-full text-left space-y-1">
        <div className="font-semibold text-sm group-hover:text-primary transition-colors">
          {block.nameUk}
        </div>
        <div className="text-xs text-muted-foreground line-clamp-2">
          {block.descriptionUk}
        </div>
      </div>
      
      <div className="mt-2 w-full flex justify-end">
        <Plus className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
      </div>
    </Button>
  );
}

export default BlockPicker;
