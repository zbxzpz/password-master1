import { useState, useEffect } from 'react';
import type { PasswordSettings, PasswordHistory } from '../types';
import { generatePassword, generatePIN, generatePassphrase } from '../utils/passwordGenerator';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { PasswordDisplay } from './PasswordDisplay';
import { PasswordSettings as SettingsComponent } from './PasswordSettings';
import { PasswordHistory as HistoryComponent } from './PasswordHistory';

const defaultSettings: PasswordSettings = {
  length: 16,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true,
  excludeSimilar: false,
  excludeAmbiguous: false
};

export function PasswordGenerator() {
  const [settings, setSettings] = useState<PasswordSettings>(defaultSettings);
  const [password, setPassword] = useState('');
  const [history, setHistory] = useLocalStorage<PasswordHistory[]>('password-history', []);
  const [passwordType, setPasswordType] = useState<'random' | 'pin' | 'passphrase'>('random');

  const generateNewPassword = () => {
    try {
      let newPassword = '';
      
      switch (passwordType) {
        case 'pin':
          newPassword = generatePIN(settings.length);
          break;
        case 'passphrase':
          newPassword = generatePassphrase(Math.ceil(settings.length / 4));
          break;
        default:
          newPassword = generatePassword(settings);
      }
      
      setPassword(newPassword);
      
      // 添加到历史记录
      const historyItem: PasswordHistory = {
        id: Date.now().toString(),
        password: newPassword,
        timestamp: Date.now(),
        settings: { ...settings }
      };
      
      setHistory(prev => [historyItem, ...prev.slice(0, 19)]); // 保留最近20条
    } catch (error) {
      console.error('生成密码失败:', error);
      alert('生成密码失败，请检查设置');
    }
  };

  const handleCopy = () => {
    // 可以在这里添加复制成功的提示或其他逻辑
  };

  const handleHistoryCopy = (password: string) => {
    navigator.clipboard.writeText(password).catch(console.error);
  };

  const clearHistory = () => {
    if (confirm('确定要清空所有历史记录吗？')) {
      setHistory([]);
    }
  };

  // 初始生成一个密码
  useEffect(() => {
    generateNewPassword();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* 标题和主题切换 */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Password Master
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            智能密码生成器 - 安全、易用的在线密码生成工具
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 左侧：密码显示和生成 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 密码类型选择 */}
          <div className="card p-4">
            <div className="flex space-x-2">
              <button
                onClick={() => setPasswordType('random')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  passwordType === 'random'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                随机密码
              </button>
              <button
                onClick={() => setPasswordType('pin')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  passwordType === 'pin'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                PIN码
              </button>
              <button
                onClick={() => setPasswordType('passphrase')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  passwordType === 'passphrase'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                密码短语
              </button>
            </div>
          </div>

          {/* 密码显示 */}
          <PasswordDisplay password={password} onCopy={handleCopy} />

          {/* 生成按钮 */}
          <div className="text-center">
            <button
              onClick={generateNewPassword}
              className="btn-primary text-lg px-8 py-3"
            >
              生成新密码
            </button>
          </div>
        </div>

        {/* 右侧：设置和历史 */}
        <div className="space-y-6">
          <SettingsComponent settings={settings} onSettingsChange={setSettings} />
          <HistoryComponent history={history} onCopy={handleHistoryCopy} onClear={clearHistory} />
        </div>
      </div>

      {/* 安全提示 */}
      <div className="card p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <div className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="text-sm text-blue-800 dark:text-blue-200">
            <p className="font-medium mb-1">安全提示</p>
            <ul className="space-y-1">
              <li>• 所有密码都在本地生成，不会上传到服务器</li>
              <li>• 建议定期更换密码，不要重复使用</li>
              <li>• 历史记录仅保存在本地浏览器中</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 