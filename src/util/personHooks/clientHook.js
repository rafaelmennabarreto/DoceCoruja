import {useDispatch} from 'react-redux';
import actionFactory from '~/factory/actionFactory';
import {Types} from '~/store/ducks/clients';

export const useDispatchOneClient = () => {
  const dispatch = useDispatch();

  return client => {
    dispatch(
      actionFactory.generateActionPayload({
        payload: client,
        type: Types.ADD_CLIENT,
      }),
    );
  };
};

export const useDispatchSomeClients = () => {
  const dispatch = useDispatch();

  return clients => {
    dispatch(
      actionFactory.generateActionPayload({
        payload: clients,
        type: Types.ADD_CLIENTS,
      }),
    );
  };
};

export const useRemoveOneClient = () => {
  const dispatch = useDispatch();

  return clients => {
    dispatch(
      actionFactory.generateActionPayload({
        payload: clients,
        type: Types.REMOVE_ONE_CLIENT,
      }),
    );
  };
};
