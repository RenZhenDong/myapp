import { baseApi } from '../api';
import { request } from '@/util/request';

export function create<R = {}, P = {}>(params?: P): Promise<R> {
  return request(baseApi.create, {
    method: 'post',
    data: {
      ...params,
    },
  });
}

export function signin<R = {}, P = {}>(params?: P): Promise<R> {
  return request(baseApi.signin, {
    method: 'post',
    data: {
      ...params,
    },
  });
}

export function findUser<R = {}, P = {}>(params?: P): Promise<R> {
  return request(baseApi.findUser, {
    method: 'post',
    data: {
      ...params,
    },
  });
}

export function deleteUser<R = {}, P = {}>(params?: P): Promise<R> {
  return request(baseApi.deleteUser, {
    method: 'post',
    data: {
      ...params,
    },
  });
}

export function gettheme<R = {}, P = {}>(params?: P): Promise<R> {
  return request(baseApi.gettheme, {
    method: 'post',
    data: {
      ...params,
    },
  });
}

export function getinnerclass<R = {}, P = {}>(params?: P): Promise<R> {
  return request(baseApi.getinnerclass, {
    method: 'post',
    data: {
      ...params,
    },
  });
}

export function getdiyclass<R = {}, P = {}>(params?: P): Promise<R> {
  return request(baseApi.getdiyclass, {
    method: 'post',
    data: {
      ...params,
    },
  });
}
