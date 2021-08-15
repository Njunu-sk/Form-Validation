<template>
  <div class="grid justify-items-center shadow-md flex-shrink md:flex-shrink-0">
    <div class="w-3/5 bg-white">
      <div class="p-8">
        <!--alert message-->
        <div
          class="shadow-lg mt-3 pt-3 pb-3 w-full text-white text-center
        hover:bg-indigo-400 rounded-full cursor-pointer"
          v-if="reg_show_alert"
          :class="reg_alert_variant"
        >
          {{ reg_alert_msg }}
        </div>

        <vee-form :validation-schema="schema" @submit="register" :initial-values="userData">
          <!-- Username -->
          <div>
            <label for="username" class="text-xs text-gray-500">Username</label>
            <vee-field
              name="username"
              id="username"
              class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6
           text-gray-700 pb-1"
              type="text"
              placeholder=""
            />
            <ErrorMessage class="text-red-600" name="username" />
          </div>
          <!-- Email -->
          <div>
            <label id="email" class="text-xs text-gray-500">Email</label>
            <vee-field
              name="email"
              id="email"
              class="bg-transparent border-b m-auto block border-gray-500
            w-full mb-6 text-grey-700 pb-1"
              type="email"
              placeholder=""
            />
            <ErrorMessage class="text-red-600" name="email" />
          </div>
          <!-- Age -->
          <div>
            <label id="age" class="text-xs text-gray-500">Age</label>
            <vee-field
              id="age"
              name="age"
              class="bg-transparent border-b m-auto block border-gray-500
            w-full mb-6 text-grey-700 pb-1"
              type="number"
              placeholder=""
            />
            <ErrorMessage class="text-red-600" name="age" />
          </div>
          <!-- Password -->
          <div>
            <label id="password" class="text-xs text-gray-500">Password</label>
            <vee-field
              id="password"
              name="password"
              class="bg-transparent border-b m-auto block border-gray-500
            w-full mb-6 text-grey-700 pb-1"
              type="password"
              placeholder=""
            />
            <ErrorMessage class="text-red-600" name="password" />
          </div>
          <!-- Password Confirmation -->
          <div>
            <label id="password_confirmation" class="text-xs text-gray-500"
              >Password Confirmation</label
            >
            <vee-field
              id="password_confirmation"
              name="password_confirmation"
              class="bg-transparent border-b m-auto block border-gray-500
            w-full mb-6 text-grey-700 pb-1"
              type="password"
              placeholder=""
            />
            <ErrorMessage class="text-red-600" name="password_confirmation" />
          </div>
          <!-- Country -->
          <div>
            <label id="country" class="text-xs text-gray-500">Country</label>
            <vee-field
              as="select"
              name="country"
              class="bg-transparent w-full py-1.5 px-3 text-gray-800 border-b border-gray-500
               transition duration-500 focus:outline-none focus:border-black rounded"
            >
              <option value="USA">USA</option>
              <option value="Mexico">Mexico</option>
              <option value="Germany">Germany</option>
              <option value="Africa">Africa</option>
            </vee-field>
            <ErrorMessage class="text-red-600" name="country" />
          </div>

          <button
            :disabled="reg_in_submission"
            class="shadow-lg mt-3 pt-3 pb-3 w-full text-white bg-indigo-500
            hover:bg-indigo-400 rounded-full cursor-pointer "
            type="submit"
            value="Create account"
          >
            Create Account
          </button>
        </vee-form>
        <div class="text-center mt-4">
          <p class="text-sm text-gray-600">
            Already have an account?
            <a href="#" class="no-underline text-indigo-500 font-bold hover:text-indigo-400"
              >Sign in</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      schema: {
        username: 'required|min:3|max:50|alpha_spaces',
        email: 'required|min:3|max:20|email',
        age: 'required|min_value:1|max_value:100',
        password: 'required',
        password_confirmation: 'password_mismatch:@password',
        country: 'required|country_excluded:Africa',
      },
      userData: {
        country: 'USA',
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-indigo-500',
      reg_alert_message: 'Please wait! Account is being registered.',
    };
  },

  methods: {
    register(values) {
      this.reg_show_alert = true;
      this.reg_in_submission = true;
      this.reg_alert_variant = 'bg-indigo-500';
      this.reg_alert_msg = 'Please wait! Your account is being created.';

      this.reg_alert_variant = 'bg-blue-500';
      this.reg_alert_msg = 'Success! Your account has been created.';

      console.log(values);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
