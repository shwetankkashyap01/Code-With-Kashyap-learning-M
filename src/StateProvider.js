import { createContext , useContext } from "react";
export const StateContext = createContext();


export const StateProvider = ({
  addToRef,
  animateCurrentElements,children,
}) => <StateContext.Provider value={{addToRef,animateCurrentElements}}>{children}</StateContext.Provider>;

export const useStateValue = () => {
  return useContext(StateContext);
}