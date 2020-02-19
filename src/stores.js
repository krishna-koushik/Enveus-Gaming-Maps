// Definitely need to do some sort of linking with Firebase here
import { writable } from 'svelte/store';

// Might potentially move this to a utility somewhere
const createLocalStore = (key, startValue) => {
  // Create writable store
  const store = writable(startValue);

  // Initialize value from localStorage
  const json = localStorage.getItem(key);
  if (json) {
    try {
      store.set(JSON.parse(json));
    } catch(ex) {
      store.set(undefined);
    }
  }

  // Subscribe and write changes to localstorage
  store.subscribe(current => {
    localStorage.setItem(key, JSON.stringify(current));
  });
}

// User data as an obserable, persisted to local storage on change
export const user = createLocalStore('user');
