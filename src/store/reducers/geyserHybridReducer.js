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
   let index = null;
    switch (action.type) {
        case 'GET_HYBRID_GEYSER_SENSOR':
            return {
                ...state,
                geyser: action.payload,
                generalLoading:false
            };


            case 'UPDATE_TEMPERATURE_UPPER_THRESHOLD_HYBRID':
              console.log(state)
              if (state.geyser.length > 0) {
                index = state.geyser.findIndex((f) => f._id === action.id);
                if (index === -1) {
                  return state
                }
                else {
                  return{
                    ...state,
                    geyser: [
                      ...state.geyser.slice(0, index),
                      {
                        ...state.geyser[index],
                        temp_upperthreshold: action.payload,
                      },
                      ...state.geyser.slice(index+1)
                    ]
                  };
                }
              }
              else {
                return state
              }
            default:
      return state;
    }

}

export default geyserHybridReducer;