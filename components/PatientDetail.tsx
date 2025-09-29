
import React from 'react';
import type { Patient } from '../types';
import { ArrowLeftIcon, DocumentPlusIcon, DocumentChartBarIcon, DocumentTextIcon as SummaryIcon } from './icons';

interface PatientDetailProps {
  patient: Patient;
  onBack: () => void;
}

const InfoCard: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
    <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
        <dt className="text-sm font-medium text-gray-500">{label}</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value}</dd>
    </div>
);

const PatientDetail: React.FC<PatientDetailProps> = ({ patient, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto">
        <button
            onClick={onBack}
            className="mb-6 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
        >
            <ArrowLeftIcon className="mr-2 h-5 w-5" />
            患者一覧に戻る
        </button>

      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="px-6 py-5 bg-brand-blue text-white">
          <h3 className="text-2xl leading-6 font-bold">{patient.name} <span className="ml-4 text-lg font-normal opacity-90">({patient.id})</span></h3>
          <p className="mt-1 max-w-2xl text-sm opacity-80">{patient.primaryAilment}</p>
        </div>
        <div className="border-t border-gray-200 px-6 py-5">
          <dl className="divide-y divide-gray-200">
            <InfoCard label="年齢" value={`${patient.age}歳`} />
            <InfoCard label="性別" value={patient.gender} />
            <InfoCard label="住所" value={patient.address} />
            <InfoCard label="電話番号" value={patient.phone} />
            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">特記事項</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 whitespace-pre-wrap">{patient.notes}</dd>
            </div>
          </dl>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="text-xl font-bold text-brand-dark mb-4">ドキュメント生成 (AI)</h4>
        <p className="text-brand-gray mb-6">作成したいドキュメントを選択してください。将来的にはAIが自動で下書きを生成します。</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <DocumentPlusIcon className="h-12 w-12 text-brand-blue mb-3"/>
                <span className="font-semibold text-brand-dark">訪問看護計画書</span>
                <span className="text-sm text-brand-gray mt-1">ケアプランを作成</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <DocumentChartBarIcon className="h-12 w-12 text-green-500 mb-3"/>
                <span className="font-semibold text-brand-dark">訪問看護報告書</span>
                <span className="text-sm text-brand-gray mt-1">経過報告書を作成</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <SummaryIcon className="h-12 w-12 text-purple-500 mb-3"/>
                <span className="font-semibold text-brand-dark">訪問看護サマリ</span>
                <span className="text-sm text-brand-gray mt-1">退院時サマリを作成</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
