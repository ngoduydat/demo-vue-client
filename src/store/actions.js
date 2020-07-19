import axios from 'axios';
import Vue from 'vue';

const actions = {
    checkAuthenticated: async ({ commit }) => {
        let isAuthenticated =
            localStorage.getItem('token') !== null ? true : false;
        let token =
            localStorage.getItem('token') !== null
                ? localStorage.getItem('token')
                : null;
        await commit('CHECK_AUTHENTICATED', { isAuthenticated, token });
    },

    login: async ({ commit }, data) => {
        return await axios
            .post(`http://localhost:8000/api/v1/auth/login`, data)
            .then(async res => {
                if (res.data.status === true && res.data.token !== null) {
                    let token = res.data.token;
                    localStorage.setItem('token', token);
                    await commit('LOGIN', { token });
                    Vue.notify({
                        group: 'foo',
                        title: 'Thông báo',
                        type: 'success',
                        text: res.data.msg
                    });
                    return;
                }
                Vue.notify({
                    group: 'foo',
                    title: 'Thông báo',
                    type: 'error',
                    text: res.data.msg
                });
            })
            .catch(err => {
                if (err && err.response && err.response.status == 401) {
                    console.log('err');
                }
                Vue.notify({
                    group: 'foo',
                    title: 'Thông báo',
                    text: err.response.data.msg
                });
            });
    },

    register: async ({ commit }, data) => {
        return await axios
            .post(`http://localhost:8000/api/v1/auth/register`, data)
            .then(async res => {
                if (res.data.status === true && res.data.token !== null) {
                    let token = res.data.token;
                    localStorage.setItem('token', token);
                    await commit('REGISTER', { token });
                    Vue.notify({
                        group: 'foo',
                        title: 'Thông báo',
                        type: 'success',
                        text: res.data.msg
                    });
                    return;
                }
                Vue.notify({
                    group: 'foo',
                    title: 'Thông báo',
                    type: 'error',
                    text: res.data.msg
                });
            })
            .catch(err => {
                if (err && err.response && err.response.status == 401) {
                    console.log('err');
                }
                Vue.notify({
                    group: 'foo',
                    title: 'Thông báo',
                    text: err.response.data.msg
                });
            });
    },

    logout: async ({ commit }) => {
        localStorage.removeItem('token');
        await commit('LOGOUT');
        Vue.notify({
            group: 'foo',
            title: 'Thông báo',
            type: 'success',
            text: 'Đăng xuất thành công'
        });
    }
};

export default actions;
