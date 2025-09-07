export const logoPrompts = {
  base: `Create a modern, elegant logo for a village 33rd anniversary celebration with "Arts and Culture" theme. The logo should be HD quality, simple yet sophisticated, incorporating Indonesian cultural elements.`,
  
  detailed: `Design a professional HD logo for "HUT Desa ke-33 Tahun" (Village 33rd Anniversary) with the following specifications:

MAIN ELEMENTS:
- Prominent number "33" as the focal point, stylized in elegant typography
- Indonesian cultural motifs (batik patterns, traditional ornaments, or cultural symbols)
- Modern, clean design that balances tradition with contemporary aesthetics
- Color palette: Deep gold (#DAA520), traditional red (#DC143C), and emerald green (#50C878)

LAYOUT REQUIREMENTS:
- Central composition with "33" prominently displayed
- Cultural elements integrated harmoniously around the number
- Text "HUT DESA KE-33" in elegant, readable font
- Tagline "Membangun Tradisi, Merangkul Masa Depan" 
- Date "10 Oktober 2025" incorporated subtly
- Designer signature "ABY SYA'BI" in small text at bottom right corner

STYLE SPECIFICATIONS:
- Vector-style design suitable for high-resolution printing
- Clean lines with cultural ornamental details
- Professional appearance suitable for official village celebration
- Balanced composition with proper visual hierarchy
- Cultural authenticity while maintaining modern appeal

OUTPUT: High-definition logo suitable for printing and digital use, with transparent background if possible.`,

  philosophy: `The logo philosophy embodies:
- **Number 33**: Represents the village's journey of growth, maturity, and accumulated wisdom over three decades plus three years
- **Cultural Motifs**: Traditional Indonesian patterns symbolizing heritage, identity, and the rich cultural tapestry of the community
- **Color Harmony**: 
  - Gold: Prosperity, achievement, and the golden years of community development
  - Red: Courage, spirit, and the passionate dedication of village members
  - Green: Growth, harmony with nature, and hope for the future
- **Modern Typography**: Bridges past and present, showing the village's evolution while honoring its roots
- **Balanced Composition**: Reflects the harmony between tradition and progress, unity in diversity`,

  variations: [
    "with traditional batik border patterns",
    "with wayang shadow puppet silhouettes",
    "with Indonesian flora and fauna elements", 
    "with traditional house (rumah adat) silhouette",
    "with rice field and mountain landscape elements"
  ]
};

export const getLogoPrompt = (variation?: string, customElements?: string) => {
  let prompt = logoPrompts.detailed;
  
  if (variation && logoPrompts.variations.includes(variation)) {
    prompt += `\n\nSPECIAL VARIATION: Include ${variation} as decorative elements.`;
  }
  
  if (customElements) {
    prompt += `\n\nADDITIONAL ELEMENTS: ${customElements}`;
  }
  
  return prompt;
};