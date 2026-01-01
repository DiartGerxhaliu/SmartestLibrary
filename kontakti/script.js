document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('form-status');

  const fields = [
    { id: 'name',    validators: [required, minLength(2)] },
    { id: 'email',   validators: [required, email] },
    { id: 'phone',   validators: [optionalPhone] }, 
    { id: 'subject', validators: [required, minLength(3)] },
    { id: 'message', validators: [required, minLength(10)] },
  ];

  // Attach real-time validation
  fields.forEach(f => {
    const el = document.getElementById(f.id);
    el.addEventListener('input', () => validateField(el, f.validators));
    el.addEventListener('blur', () => validateField(el, f.validators));
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    statusEl.textContent = '';
    let valid = true;

    // validate all
    fields.forEach(f => {
      const el = document.getElementById(f.id);
      const ok = validateField(el, f.validators);
      if (!ok) valid = false;
    });

    if (!valid) {
      statusEl.textContent = 'Please fix errors above before sending.';
      statusEl.style.color = '';
      return;
    }

    // Simulate sending
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Construct payload if you want to send to server:
    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim()
    };

    // Replace the timeout with a fetch() POST to your backend.
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send message';
      form.reset();
      // clear visual errors
      fields.forEach(f => clearError(document.getElementById(f.id)));
      statusEl.style.color = '';
      statusEl.textContent = 'Thank you — your message has been sent.';
      // move focus to status for screen readers
      statusEl.focus?.();
    }, 900);
  });

  // --- Validators & helpers ---
  function validateField(input, validators) {
    const value = input.value.trim();
    for (let validator of validators) {
      const msg = validator(value);
      if (msg) {
        setError(input, msg);
        return false;
      }
    }
    clearError(input);
    return true;
  }

  function setError(input, message) {
    const errorEl = document.getElementById(input.id + '-error');
    input.classList.add('invalid');
    input.setAttribute('aria-invalid', 'true');
    if (errorEl) errorEl.textContent = message;
  }

  function clearError(input) {
    const errorEl = document.getElementById(input.id + '-error');
    input.classList.remove('invalid');
    input.removeAttribute('aria-invalid');
    if (errorEl) errorEl.textContent = '';
  }

  // Basic validators:
  function required(v) {
    return v ? '' : 'This field is required.';
  }
  function minLength(n) {
    return (v) => v.length >= n ? '' : `Please enter at least ${n} characters.`;
  }
  function email(v) {
    if (!v) return 'This field is required.';
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(v) ? '' : 'Please enter a valid email address.';
  }
  function optionalPhone(v) {
    if (!v) return '';
    const re = /^\+?[0-9\s\-()]{7,20}$/;
    return re.test(v) ? '' : 'Please enter a valid phone number.';
  }
});