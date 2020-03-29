const entries = {
  state: {},
  log: [],

  // logic methods (these all work, check the tests in console!)
  write: function(key, value) {
    this.state[key] = value;
    return { [key]: this.state[key] };
  },
  read: function(key) {
    if (!this.state.hasOwnProperty(key)) return null;

    return { [key]: this.state[key] };
  },
  find: function(value) {
    const valueIndex = Object.values(this.state).indexOf(value);
    if (valueIndex === -1) return null;

    const key = Object.keys(this.state).find(
      nextKey => this.state[nextKey] === value
    );
    return { [key]: value };
  },
  remove: function(key) {
    if (!this.state.hasOwnProperty(key)) return null;

    const oldValue = this.state[key];
    delete this.state[key];
    return { [key]: oldValue };
  },
  clear: function() {
    this.state = {};
    return true;
  },

  // view methods (these work!)
  renderEntry: function(key) {
    const entry = this.read(key);
    return entry === null
      ? `<text>no entry with key ${key}</text>`
      : `<text>${key}: <code>${entry[key]}</code></text>`;
  },
  renderEntries: function() {
    const liElements = Object.keys(this.state)
      .map(key => `\n <li>${this.renderEntry(key)}</li>`)
      .reduce((allLis, liStr) => allLis + liStr, "");

    return "<ul>" + liElements + "\n</ul>";
  },

  // handler methods
  handleWrite: function(displayId, keyId, valueId) {
    debugger; // this one works
    const key = document.getElementById(keyId).value;
    const value = document.getElementById(valueId).value;
    this.write(key, value);
    const newList = this.renderEntries();
    const displayEl = document.getElementById(displayId);
    displayEl.innerHTML = "";
    displayEl.innerHTML = newList;
    this.log.push({
      handler: "write",
      newList,
      newState: JSON.parse(JSON.stringify(this.state))
    });
  },
  handleRead: function(displayId, keyId) {
    // render only the entry with this key
    const key = document.getElementById(keyId).value;
    const newList = this.renderEntry(key);
    const displayEl = document.getElementById(displayId);
    displayEl.innerHTML = "";
    displayEl.innerHTML = newList;
    this.log.push({
      handler: "read",
      newList,
      newState: JSON.parse(JSON.stringify(this.state))
    });
  },
  handleFind: function(displayId, valueId) {
    // render only the first entry with the given value
    const value = document.getElementById(valueId).value;
    const obj = this.find(value);
    const newList = this.renderEntry(Object.keys(obj)[0]);
    const displayEl = document.getElementById(displayId);
    displayEl.innerHTML = "";
    displayEl.innerHTML = newList;
    this.log.push({
      handler: "find",
      newList,
      newState: JSON.parse(JSON.stringify(this.state))
    });
  },
  handleRemove: function(displayId, keyId) {
    // remove the given entry and re-render the list
    const key = document.getElementById(keyId).value;
    this.remove(key);
    const newList = this.renderEntries();
    const displayEl = document.getElementById(displayId);
    displayEl.innerHTML = "";
    displayEl.innerHTML = newList;
    this.log.push({
      handler: "remove",
      newList,
      newState: JSON.parse(JSON.stringify(this.state))
    });
  },
  handleViewAll: function(displayId) {
    // render all entries
    const newList = this.renderEntries();
    const displayEl = document.getElementById(displayId);
    displayEl.innerHTML = "";
    displayEl.innerHTML = newList;
    this.log.push({
      handler: "view all",
      newList,
      newState: JSON.parse(JSON.stringify(this.state))
    }); 
  },
  handleReset: function(displayId) {
    debugger; // this one works
    this.clear();
    const displayEl = document.getElementById(displayId);
    displayEl.innerHTML = "";
    this.log.push({
      handler: "reset",
      newState: JSON.parse(JSON.stringify(this.state))
    });
  },

  // initialization method (it works!)
  init: function() {
    debugger;
    this.log.push({
      initialState: JSON.parse(JSON.stringify(this.state))
    });
  }
};
