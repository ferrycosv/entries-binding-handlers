console.groupCollapsed('Testing:  entries.clear');

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

  const result1 = entries.clear();
  const test1a = result1 === true;
  assert(test1a, 'Test 1.A');
  const test1b = JSON.stringify(entries.state) === '{}';
  assert(test1b, 'Test 1.B');

  entries.state = {};
  const test2 = JSON.stringify(entries.state) === '{}';
  assert(test2, 'Test 2');

} catch (err) {
  console.log(err);
};

console.groupEnd();
