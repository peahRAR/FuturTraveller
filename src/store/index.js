import { createStore } from 'vuex'

export default createStore({
  state: {
    day: 27,
    month: 2,
    year: 2021,
  },
  getters: {
    formattedDate(state) {
      return `${state.day} / ${state.month} / ${state.year} `
    }
  },
  mutations: {
    // Mutations des jours 
    INCREMENT_DAY(state) {
      state.day++
    },
    RESTORE_DAY(state) {
      state.day = 1
    },

    // Mutations des mois
    INCREMENT_MONTH(state){
      state.month++
    },
    RESTORE_MONTH(state){
      state.month = 1
    },

    // Mutations des années
    INCREMENT_YEAR(state){
      state.year++
    },
  },
  actions: {
    incrementDay : ({dispatch, commit, state}) => {
      // Gestion des mois à 31 jours
      if (state.month === 1 || state.month === 3 || state.month === 5 || state.month === 7 || state.month === 8 || state.month === 10 || state.month === 12) {
        if (state.day < 31) {
          commit("INCREMENT_DAY")
        }
        else {
          commit("RESTORE_DAY")
          dispatch("incrementMonth")
        }
      }
      else {
        // Gestion du moi de Février
        if (state.month === 2) {
          if ((state.year % 4) === 0) {
            if (state.day < 29) {
              commit("INCREMENT_DAY")
            }
            else {
              commit("RESTORE_DAY")
              console.log("incrementer le mois, ici fevrier à 29 jours")
              dispatch("incrementMonth")
            }
          }
          else {
            if (state.day < 28) {
              commit("INCREMENT_DAY")
            }
            else {
              commit("RESTORE_DAY")
              console.log("incrementer le mois, ici fevrier à 28 jours")
              dispatch("incrementMonth")
            }
          }
        }
      }
      if (state.month === 4 || state.month === 6 || state.month === 9 || state.month === 11 ) {
        // Gestion des mois à 30 jours
        if (state.day < 31) {
          commit("INCREMENT_DAY")
        }
        else {
          commit("RESTORE_DAY")
          dispatch("incrementMonth")
        }
      }
    },
    incrementMonth: ({commit, state}) =>{
      if (state.month <12) {
        commit("INCREMENT_MONTH")
        return;
      }
      commit("RESTORE_MONTH")
      commit("INCREMENT_YEAR")
    },
    incrementYear: ({commit}) => {
      commit("INCREMENT_YEAR")
    }
  },
  modules: {
  }
})
