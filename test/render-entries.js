console.groupCollapsed('Testing:  entries.renderEntries');

try {
  const assert = (assertion, message) => {
    if (assertion) {
      console.log('%cPASS: ' + message, 'color:green');
    } else {
      console.log('%cFAIL: ' + message, 'color:red');
    }
  };

  console.log('write me!');

} catch (err) {
  console.log(err);
};

console.groupEnd();
