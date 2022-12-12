import { makeConfig } from "./authActions";
import axios from 'axios'

const Hybrid_Geyser_Sensors = async (id, dispatch) => {
    const config = await makeConfig('application/json')

    try {
        const res = await axios.get(`${process.env.REACT_APP_URL}geyser_hybrid/sensors/${id}`,config)
    dispatch({
        type : 'GET_HYBRID_GEYSER_SENSOR',
        payload: res.data
    })
    }
    catch (err) {
        console.log(err)
    }
}

export default Hybrid_Geyser_Sensors;