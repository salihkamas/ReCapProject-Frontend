import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }
  removeItem(key: string) {
    localStorage.removeItem(key);
  }
  isExist(key: string) {
    if (JSON.parse(localStorage.getItem(key)!)) {
      return true;
    } else {
      return false;
    }
  }
  setItem<T>(key: string, object: T) {
    localStorage.setItem(key, JSON.stringify(object));
  }
}
