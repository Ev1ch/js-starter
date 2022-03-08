import { HttpMethods } from 'common/enums/http';
import call from './base';

export const get = async (args) => call({ ...args, method: HttpMethods.GET });

export const post = async (args) => call({ ...args, method: HttpMethods.POST });
