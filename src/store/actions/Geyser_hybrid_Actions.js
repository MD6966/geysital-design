import Hybrid_Geyser_Sensors from "./geyserActions/geyserHybridActions";
import { makeConfig } from "./authActions";

export const get_hybrid_geyser_sensor= (id)=> async (dispatch)=> {
  
    Hybrid_Geyser_Sensors(id, dispatch)
}