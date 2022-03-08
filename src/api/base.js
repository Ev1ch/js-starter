import { ResponseError } from 'helpers/api';
import { getUrl, getArgs } from 'api/mappers';

async function call(args) {
  const response = await fetch(
    getUrl({ endpoint: args.endpoint, query: args.query }).href,
    getArgs(args),
  );
  const json = await response.json();

  if (!response.ok) {
    throw new ResponseError(json?.error || 'Request error');
  }

  return json;
}

export default call;
