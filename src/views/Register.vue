<template>
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                <form
                    class="login100-form validate-form flex-sb flex-w"
                    v-on:submit.prevent="submit"
                    method="post"
                >
                    <span class="login100-form-title p-b-32">
                        Account Register
                    </span>

                    <span class="txt1 p-b-11">
                        Name
                    </span>
                    <div
                        class="wrap-input100 validate-input m-b-36"
                        data-validate="Name is required"
                        v-bind:class="{
                            'alert-validate': $v.name.$invalid && $v.name.$dirty
                        }"
                    >
                        <input
                            class="input100"
                            type="text"
                            name="name"
                            v-model.trim="$v.name.$model"
                        />
                        <span class="focus-input100"></span>
                    </div>

                    <span class="txt1 p-b-11">
                        Email
                    </span>
                    <div
                        class="wrap-input100 validate-input m-b-36"
                        data-validate="Email is required"
                        v-bind:class="{
                            'alert-validate':
                                $v.email.$invalid && $v.email.$dirty
                        }"
                        ref="email"
                    >
                        <input
                            class="input100"
                            type="text"
                            name="email"
                            v-model.trim="$v.email.$model"
                        />
                        <span class="focus-input100"></span>
                    </div>

                    <span class="txt1 p-b-11">
                        Password
                    </span>
                    <div
                        class="wrap-input100 validate-input m-b-12"
                        v-bind:data-validate="
                            $v.password.minLength === false
                                ? 'Password must have at least 4 letters'
                                : 'Password is required'
                        "
                        v-bind:class="{
                            'alert-validate':
                                $v.password.$invalid && $v.password.$dirty
                        }"
                    >
                        <input
                            class="input100"
                            type="password"
                            name="pass"
                            v-model.trim="$v.password.$model"
                        />
                        <span class="focus-input100"></span>
                    </div>

                    <div
                        class="flex-sb-m w-full p-b-48 d-flex justify-content-center"
                    >
                        <div class="txt2">
                            Have an account?
                            <router-link to="/login" class="txt4"
                                >Login</router-link
                            >
                        </div>
                    </div>

                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
    name: 'Register',
    data: () => {
        return {
            name: '',
            email: '',
            password: '',
            remember: false
        };
    },

    validations: {
        name: {
            required
        },
        email: {
            required
        },
        password: {
            required,
            minLength: minLength(6)
        }
    },

    methods: {
        submit: function() {
            this.$v.$touch();
            var { name, email, password } = this.$v;

            if (!this.$v.$invalid) {
                let data = {
                    name: name.$model,
                    email: email.$model,
                    password: password.$model
                };
                this.$store.dispatch('register', data);
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.widget {
    .text-gray {
        color: gray;
    }
}
</style>
