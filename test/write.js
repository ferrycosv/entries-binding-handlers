console.groupCollapsed('Testing:  entries.write');

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

  const result1 = entries.write('a', 4);
  const test1a = JSON.stringify(result1) === '{"a":4}';
  assert(test1a, 'Test 1.A');
  const test1b = JSON.stringify(entries.state) === '{"a":4,"b":2,"c":3}';
  assert(test1b, 'Test 1.B');

  const result2 = entries.write('d', 5);
  const test2a = JSON.stringify(result2) === '{"d":5}';
  assert(test2a, 'Test 2.A');
  const test2b = JSON.stringify(entries.state) === '{"a":4,"b":2,"c":3,"d":5}';
  assert(test2b, 'Test 2.B');

  const result3 = entries.write(0, '_');
  const test3a = JSON.stringify(result3) === '{"0":"_"}';
  assert(test3a, 'Test 3.A');
  const test3b = JSON.stringify(entries.state) === '{"0":"_","a":4,"b":2,"c":3,"d":5}';
  assert(test3b, 'Test 3.B');

  const result4 = entries.write('_', 0);
  const test4a = JSON.stringify(result4) === '{"_":0}';
  assert(test4a, 'Test 4.A');
  const test4b = JSON.stringify(entries.state) === '{"0":"_","a":4,"b":2,"c":3,"d":5,"_":0}';
  assert(test4b, 'Test 4.B');

  entries.state = {};
  const test5 = JSON.stringify(entries.state) === '{}';
  assert(test5, 'Test 5');

} catch (err) {
  console.log(err);
};

console.groupEnd();
