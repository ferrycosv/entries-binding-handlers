const writeHandler = entries.handleWrite.bind(entries, 'display', 'key-input', 'value-input');
document.getElementById('write-button').addEventListener('click', writeHandler);
