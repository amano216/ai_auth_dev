
import React from 'react';
import { UserGroupIcon, DocumentTextIcon, CogIcon, HomeIcon } from './icons';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-md flex flex-col">
      <div className="h-20 flex items-center justify-center border-b-2">
        <HomeIcon className="h-8 w-8 text-brand-blue" />
        <h1 className="text-xl font-bold text-brand-dark ml-2">看護ドックAI</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <a href="#" className="flex items-center px-4 py-3 text-gray-700 bg-brand-lightblue rounded-lg transition-colors duration-200 hover:bg-sky-200">
          <UserGroupIcon className="h-6 w-6 text-brand-blue" />
          <span className="ml-4 font-semibold">患者一覧</span>
        </a>
        <a href="#" className="flex items-center px-4 py-3 text-gray-500 rounded-lg transition-colors duration-200 hover:bg-slate-100 opacity-50 cursor-not-allowed">
          <DocumentTextIcon className="h-6 w-6" />
          <span className="ml-4">電子カルテ (予定)</span>
        </a>
      </nav>
      <div className="px-4 py-6 border-t">
        <a href="#" className="flex items-center px-4 py-3 text-gray-500 rounded-lg transition-colors duration-200 hover:bg-slate-100">
          <CogIcon className="h-6 w-6" />
          <span className="ml-4">設定</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
