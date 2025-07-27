import { PasswordSettings } from '../types';

// 字符集定义
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// 易混淆字符
const SIMILAR_CHARS = 'il1Lo0O';
const AMBIGUOUS_CHARS = '{}[]()/\\\'"`~,;:.<>';

export function generatePassword(settings: PasswordSettings): string {
  let charset = '';
  
  if (settings.includeUppercase) charset += UPPERCASE;
  if (settings.includeLowercase) charset += LOWERCASE;
  if (settings.includeNumbers) charset += NUMBERS;
  if (settings.includeSymbols) charset += SYMBOLS;
  
  if (charset === '') {
    throw new Error('至少需要选择一种字符类型');
  }
  
  // 排除易混淆字符
  if (settings.excludeSimilar) {
    charset = charset.split('').filter(char => !SIMILAR_CHARS.includes(char)).join('');
  }
  
  // 排除歧义字符
  if (settings.excludeAmbiguous) {
    charset = charset.split('').filter(char => !AMBIGUOUS_CHARS.includes(char)).join('');
  }
  
  if (charset === '') {
    throw new Error('排除字符后没有可用字符');
  }
  
  // 使用加密安全的随机数生成器
  const array = new Uint8Array(settings.length);
  crypto.getRandomValues(array);
  
  let password = '';
  for (let i = 0; i < settings.length; i++) {
    password += charset[array[i] % charset.length];
  }
  
  return password;
}

export function generatePIN(length: number): string {
  const numbers = '0123456789';
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  
  let pin = '';
  for (let i = 0; i < length; i++) {
    pin += numbers[array[i] % numbers.length];
  }
  
  return pin;
}

export function generatePassphrase(wordCount: number = 4): string {
  // 常用单词列表（简化版）
  const words = [
    'apple', 'banana', 'cherry', 'dragon', 'eagle', 'forest', 'garden', 'house',
    'island', 'jungle', 'knight', 'lemon', 'mountain', 'ocean', 'planet', 'queen',
    'river', 'sunset', 'tiger', 'umbrella', 'village', 'window', 'yellow', 'zebra'
  ];
  
  const array = new Uint8Array(wordCount);
  crypto.getRandomValues(array);
  
  const selectedWords = [];
  for (let i = 0; i < wordCount; i++) {
    selectedWords.push(words[array[i] % words.length]);
  }
  
  return selectedWords.join('-');
} 