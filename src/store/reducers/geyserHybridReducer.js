const initialState = {
  geyser: [],
  moduleloading: [],
  chartLoading: true, 
  generalLoading: true,
  maintananceLoading: true,
  maintananceTableLoading: true,
  alertColumns: [],
  alertData: [],
  alertTitle: '',
  alertLoading: true,
  geyserLoading: false,
  isLoading: true,
  // routines: null,
  routineLoading: true,
  addRoutineLoading: true

}

const geyserHybridReducer = (state= initialState, action) => {

    switch (action.type) {
        case 'GET_HYBRID_GEYSER_SENSOR':
            return {
                ...state,
                geyser: action.payload,
                generalLoading:false
            }
            default:
      return state;
    }

}

export default geyserHybridReducer;