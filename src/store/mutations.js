const mutations = {
    /**
     * Kiểm tra tạng thái đã login hay chưa
     * @param {*} state
     * @param {*} payload
     */
    ['CHECK_AUTHENTICATED'](state, payload) {
        return (
            (state.isAuthenticated = payload.isAuthenticated),
            (state.token = payload.token)
        );
    },

    ['LOGIN'](state, payload) {
        return [(state.isAuthenticated = true), (state.token = payload.token)];
    },

    ['REGISTER'](state, payload) {
        return [(state.isAuthenticated = true), (state.token = payload.token)];
    },

    ['LOGOUT'](state) {
        return [(state.isAuthenticated = false), (state.token = null)];
    }
};
export default mutations;
