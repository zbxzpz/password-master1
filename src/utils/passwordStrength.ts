import { PasswordStrength } from '../types';

export function checkPasswordStrength(password: string): PasswordStrength {
  let score = 0;
  const feedback: string[] = [];

  if (password.length === 0) {
    return {
      score: 0,
      level: 'weak',
      feedback: ['请输入密码']
    };
  }

  // 长度评分
  if (password.length < 8) {
    feedback.push('密码长度至少8位');
  } else if (password.length >= 12) {
    score += 2;
  } else {
    score += 1;
  }

  // 字符类型评分
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSymbols = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password);

  if (hasUppercase) score += 1;
  if (hasLowercase) score += 1;
  if (hasNumbers) score += 1;
  if (hasSymbols) score += 1;

  // 反馈信息
  if (!hasUppercase) feedback.push('建议包含大写字母');
  if (!hasLowercase) feedback.push('建议包含小写字母');
  if (!hasNumbers) feedback.push('建议包含数字');
  if (!hasSymbols) feedback.push('建议包含特殊字符');

  // 复杂度评分
  const uniqueChars = new Set(password).size;
  if (uniqueChars >= password.length * 0.8) {
    score += 1;
  }

  // 避免常见模式
  if (/(.)\1{2,}/.test(password)) {
    score -= 1;
    feedback.push('避免重复字符');
  }

  if (/123|abc|qwe|asd|zxc/i.test(password)) {
    score -= 1;
    feedback.push('避免常见序列');
  }

  // 确定强度等级
  let level: PasswordStrength['level'];
  if (score <= 1) {
    level = 'weak';
  } else if (score <= 3) {
    level = 'medium';
  } else if (score <= 5) {
    level = 'strong';
  } else {
    level = 'very-strong';
  }

  // 如果没有反馈，添加正面反馈
  if (feedback.length === 0) {
    feedback.push('密码强度很好！');
  }

  return {
    score: Math.max(0, Math.min(6, score)),
    level,
    feedback
  };
}

export function getStrengthColor(level: PasswordStrength['level']): string {
  switch (level) {
    case 'weak':
      return 'text-red-500';
    case 'medium':
      return 'text-yellow-500';
    case 'strong':
      return 'text-blue-500';
    case 'very-strong':
      return 'text-green-500';
    default:
      return 'text-gray-500';
  }
}

export function getStrengthText(level: PasswordStrength['level']): string {
  switch (level) {
    case 'weak':
      return '弱';
    case 'medium':
      return '中等';
    case 'strong':
      return '强';
    case 'very-strong':
      return '极强';
    default:
      return '未知';
  }
} 