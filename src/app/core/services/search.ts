import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Search {
  // Signal شايل كلمة البحث الحالية، وأي حد يقدر يقراه أو يكتب فيه
  query = signal<string>('');

  // دالة لتحديث الكلمة
  updateQuery(val: string) {
    this.query.set(val);
  }

  // دالة لمسح البحث
  clear() {
    this.query.set('');
  }
}
