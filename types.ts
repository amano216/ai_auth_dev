
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: '男性' | '女性' | 'その他';
  primaryAilment: string;
  address: string;
  phone: string;
  notes: string;
}
