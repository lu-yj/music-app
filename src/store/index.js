import { createStore } from 'vuex'

export default createStore({
	state: {
		playList: [{
			name: null,
			id: null,
			al: {},
		}],
		playCurIdx: 0,
	},

	mutations: {
		setPlayList(state, value) {
			state.playList = value;
		}
	},
	actions: {
	},
	modules: {
	}
	})
