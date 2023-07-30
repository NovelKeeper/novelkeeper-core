export const NKConfig_core = {
  // Tags to blacklist
  blacklistTags: [
    'script',
    'noscript',
    'style',
    'iframe',
    'button',
    'input',
    'select',
    'textarea',
    'form',
    'nav',
    'footer',
    'header',
    'aside',
    'svg',
    'path',
    'defs',
    'use',
  ],
  blacklistAttributes: [
    'style',
    'class',
    'id',
    'onclick',
    'onload',
    'onerror',
    'align',
  ],
  blacklistText: [
    'If you find any errors ( broken links, non-standard content, etc.. ), Please let us know < report chapter > so we can fix it as soon as possible.',
  ].map((s) => s.trim().replaceAll(' ', '')),
};
