const initialState = {
        isAuthenticated: false,
        isLoading: false,
        token : localStorage.getItem('token'),
        isRegistered: false
}

const authReducer = (state=initialState, action) => {
    switch(action.type) {

        // case "LOGIN" : {
        //     return {
        //         ...state,
        //         ...action.payload,
        //         isAuthenticated : true,
        //         isLoading : false
        //     }
        // }
        case 'USER_LOADING':
      return {
        ...state,
        isLoading: true
      };
      case 'USER_LOADED':
        // console.log(action.payload)
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload
        };
        case 'LOGIN_SUCCESS': {
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isAuthenticated: true

            }
        };
        case 'LOGOUT_SUUCCESS' : {
            localStorage.removeItem('token')
            return {
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
              };
        };
        case 'REGISTER_SUCCESS':
      return {
        ...state,
        isRegistered: true,
        isLoading: false
      };
      case 'REGISTER_FAIL':
        localStorage.removeItem('token');
        return {
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false
        };
        default :  return state
        
    }

}

export default authReducer