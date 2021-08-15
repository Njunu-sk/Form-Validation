import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from 'vee-validate';

import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  not_one_of as excluded,
  confirmed,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('email', email);
    defineRule('min_value', minVal);
    defineRule('max_value', maxVal);
    defineRule('excluded', excluded);
    defineRule('country_excluded', excluded);
    defineRule('password_mismatch', confirmed);

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `This field ${context.field} is required.`,
          min: `This field ${context.field} is too short.`,
          max: `This field ${context.field} is too long.`,
          alpha_spaces: `This field ${context.field} can only contain letters and spaces.`,
          email: `This field ${context.field} is not a valid email.`,
          min_value: `This field ${context.field} is too low.`,
          max_value: `This field ${context.field} is too high.`,
          excluded: 'This field is not allowed.',
          country_excluded: 'We do not allow users from this location',
          password_mismatch: `This field ${context.field} does not match.`,
        };
        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `The field ${context.field} is invalid`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
