import {UserType} from "../redux/store";

export const updateObjectInArray = (items: UserType[], itemId: number, objPropName: keyof UserType, newObjProps: {}) => {
   return  items.map(i => i[objPropName] === itemId ? {...i, ...newObjProps} : i)
}