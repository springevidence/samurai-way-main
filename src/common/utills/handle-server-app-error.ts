import { Dispatch } from 'redux'
import {BaseResponseType} from "../../components/Header/HeaderContainer";
import {setAppErrorAC} from "../../redux/auth-reducer";

/**
 * Данная функция обрабатывает ошибки, которые могут возникнуть при взаимодействии с сервером.
 * @param data  - ответ от сервера в формате ResponseType<D>
 * @param dispatch - функция для отправки сообщений в store Redux
 * @param showError - флаг, указывающий, нужно ли отображать ошибки в пользовательском интерфейсе
 */
export const handleServerAppError = <D>(data: BaseResponseType<D>, dispatch: Dispatch) => {

    if (data.messages.length) {
      dispatch(setAppErrorAC(data.messages[0]))
    } else {
      dispatch(setAppErrorAC('some error occurred'))
    }

}
