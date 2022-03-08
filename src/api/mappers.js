import { API_ROOT } from 'common/constants/api';
import { HttpMethods } from 'common/enums/http';

export function getArgs(args) {
  const headers = {};
  let body = null;
  const method = args.method || HttpMethods.GET;

  if (method !== HttpMethods.GET && args?.body) {
    if (args.body instanceof FormData) {
      body = args.body;
    } else {
      body = JSON.stringify(args.body);
      headers['Content-Type'] = 'application/json';
    }
  }

  headers.Accept = 'application/json';

  return {
    method,
    headers,
    ...(body ? { body } : {}),
  };
}

export function getUrl({ endpoint, query }) {
  const url = new URL(endpoint, API_ROOT);

  if (query) {
    Object.keys(query).forEach((key) => {
      url.searchParams.append(key, String(query[key]));
    });
  }

  return url;
}
