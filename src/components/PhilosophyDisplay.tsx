'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function PhilosophyDisplay() {
  const philosophyElements = [
    {
      element: "Angka 33",
      meaning: "Melambangkan perjalanan panjang desa yang telah mencapai kematangan dan kebijaksanaan selama 33 tahun. Angka ini menjadi focal point yang menunjukkan pencapaian dan prestasi komunitas desa.",
      color: "#DAA520",
      colorName: "Emas"
    },
    {
      element: "Motif Budaya Indonesia",
      meaning: "Elemen tradisional seperti batik, wayang, atau ornamen klasik yang mencerminkan identitas dan warisan budaya yang tetap dijaga dan dilestarikan oleh masyarakat desa.",
      color: "#DC143C", 
      colorName: "Merah Tradisional"
    },
    {
      element: "Typography Modern",
      meaning: "Pemilihan font yang menggabungkan keanggunan tradisional dengan keterbacaan modern, menunjukkan evolusi desa yang tetap menghormati akar budayanya.",
      color: "#50C878",
      colorName: "Hijau Emerald"
    },
    {
      element: "Komposisi Seimbang",
      meaning: "Tata letak yang harmonis mencerminkan keseimbangan antara tradisi dan kemajuan, persatuan dalam keberagaman, serta visi desa yang integrated dan berkelanjutan.",
      color: "#2C3E50",
      colorName: "Abu-abu Elegan"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
          Filosofi Logo HUT Desa ke-33
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Setiap elemen dalam logo ini memiliki makna mendalam yang mencerminkan nilai-nilai, sejarah, dan aspirasi masyarakat desa.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {philosophyElements.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: item.color }}
                ></div>
                <CardTitle className="text-lg">{item.element}</CardTitle>
              </div>
              <div className="text-sm text-muted-foreground">
                Warna: <span className="font-medium">{item.colorName}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {item.meaning}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Central Philosophy */}
      <Card className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border-amber-200">
        <CardHeader>
          <CardTitle className="text-center text-amber-800">Makna Keseluruhan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-lg font-medium text-amber-900">
            "Membangun Tradisi, Merangkul Masa Depan"
          </p>
          <p className="text-muted-foreground leading-relaxed text-center">
            Logo ini menggambarkan desa yang telah matang dalam perjalanan 33 tahunnya, 
            dengan akar budaya yang kuat namun tetap terbuka terhadap inovasi dan kemajuan. 
            Setiap elemen visual mewakili harmoni antara pelestarian warisan budaya dengan 
            adaptasi terhadap perkembangan zaman, menciptakan identitas yang autentik namun relevan.
          </p>
          
          <div className="mt-6 p-4 bg-white bg-opacity-50 rounded-lg">
            <div className="text-center space-y-2">
              <p className="text-sm text-amber-800 font-medium">Perayaan HUT Desa ke-33</p>
              <p className="text-2xl font-bold text-amber-900">10 Oktober 2025</p>
              <p className="text-sm text-amber-700">Designed by ABY SYA'BI</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}