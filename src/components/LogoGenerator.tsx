'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

import { LogoPreview } from './LogoPreview';

interface LogoResult {
  success: boolean;
  imageUrl?: string;
  philosophy?: string;
  error?: string;
}

export function LogoGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [logoResult, setLogoResult] = useState<LogoResult | null>(null);
  const [variation, setVariation] = useState('');
  const [customElements, setCustomElements] = useState('');
  const [style, setStyle] = useState('modern-cultural');

  const variations = [
    { value: '', label: 'Desain Standar' },
    { value: 'with traditional batik border patterns', label: 'Dengan Motif Batik' },
    { value: 'with wayang shadow puppet silhouettes', label: 'Dengan Siluet Wayang' },
    { value: 'with Indonesian flora and fauna elements', label: 'Dengan Flora Fauna Indonesia' },
    { value: 'with traditional house (rumah adat) silhouette', label: 'Dengan Rumah Adat' },
    { value: 'with rice field and mountain landscape elements', label: 'Dengan Pemandangan Sawah dan Gunung' }
  ];

  const styles = [
    { value: 'modern-cultural', label: 'Modern dengan Sentuhan Budaya' },
    { value: 'traditional-elegant', label: 'Tradisional Elegan' },
    { value: 'minimalist-sophisticated', label: 'Minimalis Sophisticated' },
    { value: 'vintage-heritage', label: 'Vintage Heritage' }
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    setLogoResult(null);

    try {
      const response = await fetch('/api/generate-logo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          variation,
          customElements,
          style
        }),
      });

      const result = await response.json();
      setLogoResult(result);
      
      if (!result.success) {
        console.error('Logo generation failed:', result.error);
      }
    } catch (error) {
      console.error('Error generating logo:', error);
      setLogoResult({
        success: false,
        error: 'Terjadi kesalahan saat membuat logo. Silakan coba lagi.'
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadLogo = async () => {
    if (!logoResult?.imageUrl) return;

    try {
      const response = await fetch(logoResult.imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `logo-hut-desa-33-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading logo:', error);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
          Desain Logo HUT Desa ke-33
        </h1>
        <p className="text-xl text-muted-foreground">
          Tema: Seni dan Budaya | 10 Oktober 2025
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Control Panel */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-amber-500">✨</span>
              Kustomisasi Logo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="variation">Variasi Desain</Label>
              <Select value={variation} onValueChange={setVariation}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih variasi desain" />
                </SelectTrigger>
                <SelectContent>
                  {variations.map((v) => (
                    <SelectItem key={v.value} value={v.value}>
                      {v.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="style">Gaya Desain</Label>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih gaya desain" />
                </SelectTrigger>
                <SelectContent>
                  {styles.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="custom">Elemen Tambahan (Opsional)</Label>
              <Textarea
                id="custom"
                placeholder="Deskripsikan elemen khusus yang ingin ditambahkan, misalnya: landmark desa, simbol khusus, dll."
                value={customElements}
                onChange={(e) => setCustomElements(e.target.value)}
                rows={3}
              />
            </div>

            <Button 
              onClick={handleGenerate} 
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sedang Membuat Logo...
                </>
              ) : (
                <>
                  <span className="mr-2">✨</span>
                  Generate Logo HD
                </>
              )}
            </Button>

            {logoResult?.success && (
              <Button 
                onClick={downloadLogo}
                variant="outline" 
                className="w-full"
                size="lg"
              >
                <span className="mr-2">⬇️</span>
                Download Logo HD
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Preview Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Preview Logo</CardTitle>
          </CardHeader>
          <CardContent>
            <LogoPreview 
              logoResult={logoResult} 
              isGenerating={isGenerating} 
            />
          </CardContent>
        </Card>
      </div>

      {/* Philosophy Section */}
      {logoResult?.philosophy && (
        <Card>
          <CardHeader>
            <CardTitle>Filosofi Logo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {logoResult.philosophy}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}