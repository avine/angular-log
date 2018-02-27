
export default class Stepper {
  $logs: HTMLElement; // HTML where logs are displayed
  $step: HTMLElement; // Button to execute a new step

  steps = []; // Register code step by step

  initDom() {
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
    this.$logs = $wrapper.firstChild as HTMLElement;
    this.$step = this.$logs.querySelector('.helper-step');
  }

  constructor(private $root: HTMLElement) {
    this.initDom();
    this.initEvent();

    // Append the helper-logs HTML fragment
    this.$root.appendChild(this.$logs);
  }

  log(title, message = '', clean = false) {
    if (clean) {
      this.cleanLog();
    }
    let messageHTML = '';
    if (message) {
      messageHTML =
        '<br>' + (message + '')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
    }
    const $logItem = document.createElement('article');
    $logItem.className = 'helper-log';
    $logItem.innerHTML = `<strong>${title}</strong>${messageHTML}`;
    this.$logs.appendChild($logItem);

    const event = new CustomEvent('avnlog', { detail: { title, message } });
    this.$logs.dispatchEvent(event);
  }

  cleanLog() {
    [].forEach.call(
      this.$logs.querySelectorAll('.helper-log'),
      $log => this.$logs.removeChild($log)
    );
  }

  step(title, callback, clean = false) {
    this.steps.push({ title, callback, clean });
  }

  initEvent() {
    // Execute code step by step
    this.$step.addEventListener('click', this.stepsHandler.bind(this));
  }

  stepsHandler() {
    const stepItem = this.steps.shift();
    if (stepItem) {
      this.log(
        `<span class="helper-highlight">&#9679; ${stepItem.title}</span>`,
        '',
        stepItem.clean
      );
      stepItem.callback();
    }
  }
}
