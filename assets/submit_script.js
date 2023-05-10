class ContactForm {

  constructor(el) {
    this.element = el || null;
    this.action = el.action;
    this.fields = Object.keys(el.elements).reduce((obj, key) => {
      if (key === el.elements[key].id) obj[key] = el.elements[key];
      return obj;
    }, {});
    console.log('Contact Form:', this);
  }

  init() {
    this.element.addEventListener('submit', event => this.onSubmit(event));
  }

  onSubmit(event) {
    event.preventDefault();
    this.element.classList.remove('contact-form--errors');
    this.element.classList.remove('contact-form--sent');
    this.element.classList.add('contact-form--loading');
    this.sendFormData(this.getFormData()).
    then(response => {
      if (response.status === 200) {
        return response.json().
        then(res => this.onSent(res));
      } else {
        throw 'An error occured while submitting the form';
      }
    }).
    catch(err => this.onError(err));
  }

  onSent(response) {
    for (let i = 0; i < this.element.querySelectorAll('div').length; i++) {
      this.element.querySelectorAll('div')[i].classList.add('is-hidden');
    }

    let successElement = document.createElement('div');
    successElement.innerHTML = `Message sent successfully`;
    this.element.appendChild(successElement);

    this.element.classList.remove('contact-form--loading');
    this.element.classList.add('contact-form--sent');
    console.log('Sent:', response.success);
  }

  onError(err = '') {
    this.element.classList.remove('contact-form--loading');
    this.element.classList.add('contact-form--errors');
    console.error('Error:', err);
  }

  sendFormData(data = {}) {
    return new Promise((resolve, reject) => {
      console.log('Send Data:', data);
      fetch(this.action, {
        headers: {
          'Content-Type': 'application/json' },

        method: 'POST',
        body: JSON.stringify(data) }).

      then(response => resolve(response)).
      catch(err => reject(err));
    });
  }

  getFormData() {
    let formData = {},
    values = [];

    Object.keys(this.fields).forEach(key => {
      switch (this.fields[key].type) {
        case 'checkbox':
        case 'radio':{
            formData[key] = this.fields[key].checked;
            break;
          }
        case 'select-one':{
            if (!this.fields[key][this.fields[key].selectedIndex].disabled) {
              formData[key] = this.fields[key][this.fields[key].selectedIndex].value;
            } else {
              formData[key] = '';
            }
            break;
          }
        case 'select-multiple':{
            Object.keys(this.fields[key].options).forEach(i => {
              if (this.fields[key].options[i].selected && !this.fields[key].options[i].disabled) {
                values.push(this.fields[key].options[i].value);
              }
            });
            formData[key] = values.length > 0 ? values.join(', ') : '';
            break;
          }
        default:{
            formData[key] = this.fields[key].value;
            break;
          }}

    });
    return formData;
  }}



// Create a new instance of the ContactForm class
const form = new ContactForm(document.querySelector('.contact-form'));

// Initialise our instance of the ContactForm class when document has loaded
window.onload = event => form.init();

// form.init()

// class ContactForm {

//   constructor(config = {}) {
//     this.elements = {
//       form: config.form || null,
//       fields: config.form.elements || null
//     }
//     this.action = config.form.getAttribute('action') || null
//   }

//   init() {
//     this.elements.form.addEventListener('submit', (event) => {
//       return this.onSubmit(event);
//     });
//   }

//   onSubmit(event) {
//     event.preventDefault();
//     let data = this.getFormData();

//     this.sendFormData(data)
//       .then(response => {
//         if (response.status === 200) {
//           this.onSent('Message sent successfully!')
//         } else {
//           throw 'An error occured while sending the message.'
//         }
//       })
//     .catch(err => {
//       this.onError(err);
//     })
//   }

//   getFormData() {
//     let data = {},
//         id;

//     for (let i = 0; i < this.elements.fields.length; i++) {
//       id = this.elements.fields[i].id;
//       if (id !== '') data[id] = this.getFieldValue(this.elements.fields[i]);
//     };

//     return data;
//   }

//   getFieldValue(field) {
//     let values = [],
//         value;

//     switch(nodfield.typeeType) {
//       case 'radio':
//       case 'checkbox': {
//         value = field.checked;
//         break;
//       }

//       case 'select-one': {
//         if (!field[field.selectedIndex].disabled) {
//           value = field.value;
//         } else {
//           value = '';
//         }
//         break;
//       }

//       case 'select-multiple': {
//         for (let i = 0; i < field.options.length; i++) {
//           if (field.options[i].selected && !field.options[i].disabled) {
//             values.push(field.options[i].value)
//           }
//         }
//         value = values;
//         break;
//       }

//       default: {
//         value = field.value;
//         break;
//       }
//     }

//     return value;
//   }

//   sendFormData(data = {}) {
//     return new Promise((resolve, reject) => {
//       this.updateState('sending', 'Sending message...');
// fetch(this.action, {
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   method: 'POST',
//   body: JSON.stringify(data)
// })
// .then(response => {
//   resolve(response)
// })
// .catch(err => {
//   reject(err)
// })
//     })
//   }

//   onSent(message = '') {
//     let el = document.createElement('div');
//         el.classList.add('sent');
//         el.innerHTML = '<p>Message sent!</p>';
//     this.elements.form.appendChild(el);
//     this.updateState('sent');
//   }

//   onError(err = '') {
//     this.updateState('error', err);
//   }

//   updateState(state = 'default', message = '') {
//     this.elements.form.setAttribute('data-state', state);
//     this.elements.form.querySelector('small').textContent = message;
//   }

// }

// const form = new ContactForm({
//   form: document.querySelector('form')
// });

// form.init();
