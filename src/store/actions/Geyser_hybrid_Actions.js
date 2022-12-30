import Hybrid_Geyser_Sensors from "./geyserActions/geyserHybridActions";
import { makeConfig } from "./authActions";
import axios from 'axios'
export const get_hybrid_geyser_sensor= (id)=> async (dispatch)=> {
  
    Hybrid_Geyser_Sensors(id, dispatch)
}

export const updateHybridGeyserSensors = (data) => async (dispatch, getState) => {
    // console.log('Hybrid Geyser Action ', data)
    if (data.temperature !== undefined) {
      dispatch({
        type: 'UPDATE_TEMPERATURE_HYBRID',
        payload: data,
        id: data.geyser_id
      });
    } 
    else if (data.system_status !== undefined) {
      // console.log("+++++++", data);
      dispatch({
        type: 'UPDATE_SYSTEM_STATUS_HYBRID',
        payload: data,
        id: data.geyser_id
      });
    }
  
    else if (data.valve_status !== undefined) {
      dispatch({
        type: 'UPDATE_GAS_VALVE_HYBRID',
        payload: data,
        id: data.geyser_id
      });
    }
    else if (data.burner_status !== undefined) {
      dispatch({
        type: 'UPDATE_BURNER_STATUS_HYBRID',
        payload: data,
        id: data.geyser_id
      });
    }
    else if (data.geyser_status !== undefined) {
      dispatch({
        type: 'UPDATE_GEYSER_STATUS_HYBRID',
        payload: data,
        id: data.geyser_id
      });
  
      dispatch({
        type: 'GEYSER_LOADING_FALSE_HYBRID',
      });
    }
    else if (data.geyser_control !== undefined) {
      // console.log('line 57',data)
      dispatch({
        type: 'UPDATE_GEYSER_CONTROL_HYBRID',
        payload: data,
        id: data.geyser_id,
      });
  
      dispatch({
        type: 'GEYSER_LOADING_FALSE_HYBRID',
      });
    }
    // else if (data.gas_status !== undefined) {
    //   dispatch({
    //     type: 'UPDATE_GAS_STATUS',
    //     payload: data,
    //     id: data.geyser_id
    //   });
    // }
    else if (data.temp_lowerthreshold !== undefined) {
      // console.log(data,'lowerThreshold')
      dispatch({
        type: 'UPDATE_TEMPERATURE_LOWER_THRESHOLD_HYBRID',
        payload: data.temp_lowerthreshold,
        id: data.geyser_id
      });
    }
    else if (data.temp_upperthreshold !== undefined) {
      // console.log(data,'upperThreshold')
      dispatch({
        type: 'UPDATE_TEMPERATURE_UPPER_THRESHOLD_HYBRID',
        payload: data.temp_upperthreshold,
        id: data.geyser_id
      });
    }
    else if (data.routine !== undefined) {
      // console.log('Hybrid geyser')
      dispatch({
        type: 'UPDATE_SINGLE_ROUTINE_HYBRID',
        payload: data
      });
    }
    else if (data.status !== undefined) {
      dispatch({
        type: 'UPDATE_ALL_ROUTINES_HYBRID',
        status: data.status,
        id: data.geyser_id
      });
    }
    else if (data.supply_mode !== undefined) {
      // console.log('++++++',data)
      dispatch({
        type: 'UPDATE_SUPPLY_MODE_HYBRID',
        status: data.supply_mode,
        id: data.geyser_id
      });
    }
  };


  export const setThreshold = (_id, type, value) => async (dispatch) => {
  
    const config = await makeConfig('application/json');
    const body = {
      value,
      type,
      _id
    };
    try{
      const res = await axios.post(`${process.env.REACT_APP_URL}geyser_hybrid/set`,body ,config);
    
      if(type === 'temp_lowerthreshold'){
        // console.log('lower Threshold', value)
        dispatch({
          type:'UPDATE_TEMPERATURE_LOWER_THRESHOLD_HYBRID',
          payload: value,
          id: _id
        });
      }
      else if (type === 'temp_upperthreshold'){
        dispatch({
          type:'UPDATE_TEMPERATURE_UPPER_THRESHOLD_HYBRID',
          payload: value,
          id: _id
        });
      }
    } 
    catch(err){
      console.log(err);
    }
  };
  