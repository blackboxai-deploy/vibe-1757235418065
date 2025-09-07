'use client';

import { Card } from '@/components/ui/card';

interface LogoResult {
  success: boolean;
  imageUrl?: string;
  philosophy?: string;
  error?: string;
}

interface LogoPreviewProps {
  logoResult: LogoResult | null;
  isGenerating: boolean;
}

export function LogoPreview({ logoResult, isGenerating }: LogoPreviewProps) {
  if (isGenerating) {
    return (
      <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 mx-auto border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-700">Membuat Logo...</p>
            <p className="text-sm text-gray-500">AI sedang mendesain logo Anda</p>
          </div>
        </div>
      </div>
    );
  }

  if (logoResult?.error) {
    return (
      <div className="aspect-square bg-red-50 rounded-lg flex items-center justify-center border border-red-200">
        <div className="text-center space-y-2 p-6">
          <div className="text-4xl">⚠️</div>
          <p className="text-red-700 font-medium">Gagal Membuat Logo</p>
          <p className="text-red-600 text-sm">{logoResult.error}</p>
        </div>
      </div>
    );
  }

  if (logoResult?.success && logoResult.imageUrl) {
    return (
      <div className="space-y-4">
        <div className="aspect-square bg-white rounded-lg border border-gray-200 overflow-hidden relative">
          <img
            src={logoResult.imageUrl}
            alt="Logo HUT Desa ke-33"
            className="w-full h-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e45fc19f-a611-4252-b237-f8e2f4599754.png";
            }}
          />
          {/* Designer signature overlay */}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-20 text-white text-xs px-2 py-1 rounded">
            ABY SYA'BI
          </div>
        </div>
        
        {/* Logo Details */}
        <Card className="p-4 bg-gradient-to-r from-amber-50 to-red-50">
          <div className="space-y-2">
            <h3 className="font-semibold text-amber-800">Spesifikasi Logo</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Format:</span>
                <p className="font-medium">HD PNG/Vector</p>
              </div>
              <div>
                <span className="text-gray-600">Tema:</span>
                <p className="font-medium">Seni & Budaya</p>
              </div>
              <div>
                <span className="text-gray-600">Tanggal:</span>
                <p className="font-medium">10 Oktober 2025</p>
              </div>
              <div>
                <span className="text-gray-600">Designer:</span>
                <p className="font-medium">ABY SYA'BI</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
      <div className="text-center space-y-4 p-8">
        <div className="text-6xl opacity-50">🎨</div>
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-600">Logo Belum Dibuat</p>
          <p className="text-sm text-gray-500">Klik "Generate Logo HD" untuk memulai</p>
        </div>
      </div>
    </div>
  );
}