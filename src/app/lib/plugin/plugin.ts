
// Create the helper-logs HTML fragment
const $wrapper = document.createElement('div');
$wrapper.innerHTML =
  `<section class="helper-logs">
    <header class="helper-header">
      <strong class="helper-step">Step &#9662;</strong>
      <em>Console</em>
    </header>
  </section>`;

// Keep reference of helper-logs and helper-step
const $logs = $wrapper.firstChild as HTMLElement;
const $step = $logs.querySelector('.helper-step');

// Append the helper-logs HTML fragment
function init(node: HTMLElement) {
  node.appendChild($logs);
}

// Log data
function log(title, message = '', clean = false) {
  if (clean) {
    cleanLog();
  }
  if (message) {
    message = '<br>' + (message + '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  const $logItem = document.createElement('article');
  $logItem.className = 'helper-log';
  $logItem.innerHTML = `<strong>${title}</strong>${message}`;
  $logs.appendChild($logItem);

  const event = new CustomEvent('avnlog', { detail: { title, message } });
  $logs.dispatchEvent(event);
}

function cleanLog() {
  [].forEach.call(
    $logs.querySelectorAll('.helper-log'),
    $log => $logs.removeChild($log)
  );
}

// Register code step by step
const steps = [];
function step(title, callback, clean = false) {
  steps.push({ title, callback, clean });
}

// Execute code step by step
$step.addEventListener('click', function stepsHandler() {
  const stepItem = steps.shift();
  if (stepItem) {
    log(`<span class="helper-highlight">&#9679; ${stepItem.title}</span>`, '', stepItem.clean);
    stepItem.callback();
  }
  /*if (!steps.length) {
    this.removeEventListener('click', stepsHandler);
    this.classList.add('helper-disabled');
  }*/
});

export { init, log, cleanLog, step };
