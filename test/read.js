console.groupCollapsed('Testing:  entries.read');

try {
  const assert = (assertion, message) => {
    if (assertion) {
      console.log('%cPASS: ' + message, 'color:green');
    } else {
      console.log('%cFAIL: ' + message, 'color:red');
    }
  };

  entries.state = {
    a: 1,
    b: 2,
    c: 3
  };

  const test0 = JSON.stringify(entries.state) === '{"a":1,"b":2,"c":3}';
  assert(test0, 'Test 0');

  console.log('write me!');

  entries.state = {};
  const test4 = JSON.stringify(entries.state) === '{}';
  assert(test4, 'Test 4');

} catch (err) {
  console.log(err);
};

console.groupEnd();
