import { EntitiesRepository } from 'repositories';

export const getEntity = async (id) => {
  const entity = await EntitiesRepository.getEntity(id);

  return entity;
};
