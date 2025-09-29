
import React from 'react';
import { BellIcon, UserCircleIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="h-20 bg-white shadow-sm flex items-center justify-between px-8">
      <div>
        <h1 className="text-2xl font-bold text-brand-dark">訪問看護ドキュメントAIアシスタント</h1>
        <p className="text-sm text-brand-gray">患者様の情報を一元管理し、書類作成を効率化します。</p>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-gray-500 hover:text-brand-blue relative">
          <BellIcon className="h-7 w-7" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <UserCircleIcon className="h-10 w-10 text-gray-400" />
          <div>
            <p className="font-semibold text-brand-dark">田中 看護師</p>
            <p className="text-xs text-brand-gray">訪問看護ステーション</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
