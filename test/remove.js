console.groupCollapsed('Testing:  entries.remove');

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

  const result1 = entries.remove('a');
  const test1a = JSON.stringify(result1) === '{"a":1}';
  assert(test1a, 'Test 1.A');
  const test1b = JSON.stringify(entries.state) === '{"b":2,"c":3}';
  assert(test1b, 'Test 1.B');

  const result2 = entries.remove('d');
  const test2a = result2 === null;
  assert(test2a, 'Test 2.A');
  const test2b = JSON.stringify(entries.state) === '{"b":2,"c":3}';
  assert(test2b, 'Test 2.B');

  const result3 = entries.remove(2);
  const test3a = result3 === null;
  assert(test3a, 'Test 3.A');
  const test3b = JSON.stringify(entries.state) === '{"b":2,"c":3}';
  assert(test3b, 'Test 3.B');

  const result4 = entries.remove('c');
  const test4a = JSON.stringify(result4) === '{"c":3}';
  assert(test4a, 'Test 4.A');
  const test4b = JSON.stringify(entries.state) === '{"b":2}';
  assert(test4b, 'Test 4.B');

  entries.state = {};
  const test5 = JSON.stringify(entries.state) === '{}';
  assert(test5, 'Test 5');

} catch (err) {
  console.log(err);
};

console.groupEnd();
