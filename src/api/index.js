import { HttpMethods, ContentTypes } from 'common/enums/http';

class Api {
  constructor(root) {
    this.root = root;
  }

  post(options) {
    return this.#call({ ...options, method: HttpMethods.POST });
  }

  get(options) {
    return this.#call({ ...options, method: HttpMethods.GET });
  }

  #call(options) {
    const route = this.#getRoute(options.route);
    const fetchOptions = this.#getFetchOptions(options);

    return fetch(route, fetchOptions);
  }

  #getFetchOptions(options) {
    const body = this.#getBody(options.data);
    const headers = this.#getHeaders(options.data);
    const method = options.method;
    const fetchOptions = {
      headers,
      body,
      method,
    };

    return fetchOptions;
  }

  #getBody(body) {
    if (body instanceof FormData) {
      return this.#convertObjectToFormData(body);
    }

    return this.#convertObjectToJson(body);
  }

  #convertObjectToFormData(object) {
    const formData = new FormData();

    for (const key in object) {
      const value = object[key];

      if (Array.isArray(value)) {
        for (const part of value) {
          formData.append(key, part);
        }
      } else {
        formData.append(key, value);
      }
    }

    return formData;
  }

  #convertObjectToJson(object) {
    return JSON.stringify(object);
  }

  #getRoute(route) {
    return `${this.root}/${route}`;
  }

  #getHeaders(body) {
    const headers = {
      'Content-Type': body instanceof FormData ? ContentTypes.FORM_DATA : ContentTypes.JSON,
    };

    return headers;
  }
}

export default Api;
