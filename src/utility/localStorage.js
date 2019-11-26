const isSupported = () => {
  const test = 'localStorage';

  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

export default {
  isSupported: isSupported(),
  getItem(key) {
    if (this.isSupported) {
      return localStorage.getItem(key);
    }

    return null;
  },
  removeItem(key) {
    if (this.isSupported) {
      localStorage.removeItem(key);
      return this.getItem(key);
    }

    return null;
  },
  setItem(key, value) {
    if (this.isSupported) {
      localStorage.setItem(key, value);
      return this.getItem(key);
    }

    return null;
  },
};
