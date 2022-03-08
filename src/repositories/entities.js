import Api from 'api';
import { ApiRoutes } from 'common/enums/api';

export const getEntity = (id) => {
  const entity = Api.get({
    endpoint: ApiRoutes.ENTITIES(id),
  });

  return entity;
};
