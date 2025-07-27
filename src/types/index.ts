export interface PasswordSettings {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeSimilar: boolean;
  excludeAmbiguous: boolean;
}

export interface PasswordStrength {
  score: number;
  level: 'weak' | 'medium' | 'strong' | 'very-strong';
  feedback: string[];
}

export interface PasswordHistory {
  id: string;
  password: string;
  timestamp: number;
  settings: PasswordSettings;
}

export type Theme = 'light' | 'dark'; 