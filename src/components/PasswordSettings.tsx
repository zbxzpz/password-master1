import type { PasswordSettings } from '../types';

interface PasswordSettingsProps {
  settings: PasswordSettings;
  onSettingsChange: (settings: PasswordSettings) => void;
}

export function PasswordSettings({ settings, onSettingsChange }: PasswordSettingsProps) {
  const updateSetting = (key: keyof PasswordSettings, value: any) => {
    onSettingsChange({
      ...settings,
      [key]: value
    });
  };

  return (
    <div className="card p-6 space-y-6">
      <h3 className="text-lg font-semibold">密码设置</h3>
      
      {/* 密码长度 */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">密码长度</label>
          <span className="text-sm text-gray-600 dark:text-gray-400">{settings.length}</span>
        </div>
        <input
          type="range"
          min="8"
          max="128"
          value={settings.length}
          onChange={(e) => updateSetting('length', parseInt(e.target.value))}
          className="slider"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>8</span>
          <span>128</span>
        </div>
      </div>

      {/* 字符类型选择 */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">字符类型</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.includeUppercase}
              onChange={(e) => updateSetting('includeUppercase', e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm">大写字母 (A-Z)</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.includeLowercase}
              onChange={(e) => updateSetting('includeLowercase', e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm">小写字母 (a-z)</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.includeNumbers}
              onChange={(e) => updateSetting('includeNumbers', e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm">数字 (0-9)</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.includeSymbols}
              onChange={(e) => updateSetting('includeSymbols', e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm">特殊字符 (!@#$%^&*)</span>
          </label>
        </div>
      </div>

      {/* 高级选项 */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium">高级选项</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.excludeSimilar}
              onChange={(e) => updateSetting('excludeSimilar', e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm">排除易混淆字符 (0, O, 1, l, I)</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.excludeAmbiguous}
              onChange={(e) => updateSetting('excludeAmbiguous', e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm">排除歧义字符 (&#123; &#125; [ ] ( ) / \ &apos; &quot; ` ~ , ; : . &lt; &gt;)</span>
          </label>
        </div>
      </div>

      {/* 快速预设 */}
      <div>
        <h4 className="text-sm font-medium mb-2">快速预设</h4>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onSettingsChange({
              length: 12,
              includeUppercase: true,
              includeLowercase: true,
              includeNumbers: true,
              includeSymbols: true,
              excludeSimilar: false,
              excludeAmbiguous: false
            })}
            className="btn-secondary text-xs py-1"
          >
            标准密码
          </button>
          <button
            onClick={() => onSettingsChange({
              length: 16,
              includeUppercase: true,
              includeLowercase: true,
              includeNumbers: true,
              includeSymbols: true,
              excludeSimilar: true,
              excludeAmbiguous: true
            })}
            className="btn-secondary text-xs py-1"
          >
            强密码
          </button>
          <button
            onClick={() => onSettingsChange({
              length: 8,
              includeUppercase: false,
              includeLowercase: true,
              includeNumbers: true,
              includeSymbols: false,
              excludeSimilar: false,
              excludeAmbiguous: false
            })}
            className="btn-secondary text-xs py-1"
          >
            简单密码
          </button>
          <button
            onClick={() => onSettingsChange({
              length: 20,
              includeUppercase: true,
              includeLowercase: true,
              includeNumbers: true,
              includeSymbols: true,
              excludeSimilar: true,
              excludeAmbiguous: true
            })}
            className="btn-secondary text-xs py-1"
          >
            超强密码
          </button>
        </div>
      </div>
    </div>
  );
} 