import { NextRequest, NextResponse } from 'next/server';
import { getLogoPrompt } from '@/lib/logo-prompts';

export async function POST(req: NextRequest) {
  try {
    const { variation, customElements, style } = await req.json();
    
    // Get the logo prompt with variations
    const logoPrompt = getLogoPrompt(variation, customElements);
    
    // Enhanced prompt for logo generation
    const enhancedPrompt = `${logoPrompt}

TECHNICAL SPECIFICATIONS:
- Resolution: 4K (3840×2160) or higher
- Format: Professional logo design suitable for print and digital
- Style: ${style || 'Modern minimalist with cultural elements'}
- Background: Clean, professional background or transparent
- Typography: Clean, legible fonts for all text elements
- Composition: Centered, balanced layout with proper spacing

QUALITY REQUIREMENTS:
- Crystal clear, sharp details
- Professional commercial quality
- Suitable for large format printing
- High contrast and readability
- Vector-style appearance even in raster format`;

    console.log('Generating logo with prompt:', enhancedPrompt.substring(0, 200) + '...');

    // Call the AI service using custom endpoint
    const response = await fetch('https://oi-server.onrender.com/chat/completions', {
      method: 'POST',
      headers: {
        'customerId': 'adi247333@gmail.com',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer xxx'
      },
      body: JSON.stringify({
        model: 'replicate/black-forest-labs/flux-1.1-pro',
        messages: [
          {
            role: 'user',
            content: enhancedPrompt
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI API Error:', response.status, errorText);
      throw new Error(`AI service error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('AI Response received:', result.choices?.[0]?.message ? 'Success' : 'No image generated');

    // Extract the image URL from the response
    let imageUrl = null;
    if (result.choices && result.choices[0] && result.choices[0].message && result.choices[0].message.content) {
      const content = result.choices[0].message.content;
      
      // Look for image URL in the response
      const urlMatch = content.match(/https?:\/\/[^\s]+\.(jpg|jpeg|png|webp)/i);
      if (urlMatch) {
        imageUrl = urlMatch[0];
      } else if (typeof content === 'string' && content.startsWith('http')) {
        imageUrl = content;
      }
    }

    if (!imageUrl) {
      console.error('No image URL found in response:', result);
      throw new Error('Failed to generate logo image');
    }

    return NextResponse.json({
      success: true,
      imageUrl,
      prompt: enhancedPrompt,
      philosophy: `Logo HUT Desa ke-33 ini menggabungkan nilai-nilai tradisional dengan desain modern. Angka "33" melambangkan perjalanan panjang desa yang telah mencapai kematangan, sementara elemen budaya mencerminkan identitas dan warisan yang tetap dijaga. Kombinasi warna emas, merah, dan hijau melambangkan kemakmuran, semangat, dan harapan masa depan.`,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Logo generation error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate logo',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}