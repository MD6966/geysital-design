// const initState = {
//     user: [],
//     isLoading: false,
//     sensorsLoading: true
//   };

//   const userReducer = (state=initState, action) => {
//     console.log(action)
//     let index = null;
//     switch(action.type) {

//         case 'USER_PICTURE_UPLOAD' : 
    
//         return {
//             ...state,
//             user: {
//                 ...state.user,
//                 profilePic: action.payload
//             }
//         }
        
//         default:
//             return state;
//     }
//   }

//   export default userReducer