import type { PasswordHistory } from '../types';

interface PasswordHistoryProps {
  history: PasswordHistory[];
  onCopy: (password: string) => void;
  onClear: () => void;
}

export function PasswordHistory({ history, onCopy, onClear }: PasswordHistoryProps) {
  if (history.length === 0) {
    return (
      <div className="card p-6 text-center text-gray-500 dark:text-gray-400">
        <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>暂无历史记录</p>
        <p className="text-sm">生成的密码将显示在这里</p>
      </div>
    );
  }

  return (
    <div className="card p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">历史记录</h3>
        <button
          onClick={onClear}
          className="text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
        >
          清空历史
        </button>
      </div>
      
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {history.slice(0, 10).map((item) => (
          <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex-1 min-w-0">
              <div className="font-mono text-sm truncate">{item.password}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(item.timestamp).toLocaleString('zh-CN')}
              </div>
            </div>
            <button
              onClick={() => onCopy(item.password)}
              className="ml-2 p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="复制密码"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      
      {history.length > 10 && (
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
          显示最近10条记录，共{history.length}条
        </div>
      )}
    </div>
  );
} 