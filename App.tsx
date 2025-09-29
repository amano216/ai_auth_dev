
import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PatientTable from './components/PatientTable';
import SearchBar from './components/SearchBar';
import PatientDetail from './components/PatientDetail';
import { MOCK_PATIENTS } from './constants';
import type { Patient } from './types';

const App: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredPatients = useMemo(() => {
    if (!searchTerm) {
      return MOCK_PATIENTS;
    }
    return MOCK_PATIENTS.filter(patient =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.primaryAilment.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSelectPatient = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  const handleBackToList = () => {
    setSelectedPatient(null);
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-8">
          {selectedPatient ? (
            <PatientDetail patient={selectedPatient} onBack={handleBackToList} />
          ) : (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-brand-dark mb-4">患者一覧</h2>
                <p className="text-brand-gray mb-6">登録されている患者の一覧です。検索や詳細表示が可能です。</p>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <div className="mt-6">
                  <PatientTable patients={filteredPatients} onSelectPatient={handleSelectPatient} />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
