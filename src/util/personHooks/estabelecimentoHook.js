import {useDispatch} from 'react-redux';
import actionFactory from '~/factory/actionFactory';
import {Types} from '~/store/ducks/estabelecimentos';

export const useDispatchSomeEstabelecimentos = () => {
  const dispatch = useDispatch();

  return payload => {
    dispatch(
      actionFactory.generateActionPayload({
        type: Types.ADD_ESTABELECIMENTO,
        payload,
      }),
    );
  };
};
