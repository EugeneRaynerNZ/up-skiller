import { app } from '../../src/app'
const appUrl = `http://${app.get('host')}:${app.get('port')}`
import axios from 'axios'

type RequestParams = [any, any?, any?, string?];

async function _req([method, path, data = null, accessToken = '']: RequestParams) {
  try {
    const config: any = {
      url: `${appUrl}/${path}`,
      headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    }

    switch (method) {
      case 'find':
        config.method = 'get'
        config.params = data
        break
      case 'get':
        config.method = 'get'
        break
      case 'create':
        config.method = 'post'
        config.data = data
        break
      case 'update':
        config.method = 'put'
        config.data = data
        break
      case 'patch':
        config.method = 'patch'
        config.data = data
        break
      case 'remove':
        config.method = 'delete'
        break
      default:
        throw new Error(`Unsupported method: ${method}`)
    }

    const { data: responseData, status } = await axios(config)
    return { data: responseData, status }
  } catch (error) {
    return _err(error)
  }
}

function _err(error: any) {
  if (error.response) {
    return { data: error.response.data, status: error.response.status }
  } else if (error.request) {
    return { data: null, status: null, message: 'No response received' }
  } else {
    return { data: null, status: null, message: error.message }
  }
}

export async function find([path, query = {}, accessToken = '']: RequestParams) {
  return _req(['find', path, query, accessToken])
}

export async function get([path, id, accessToken = '']: RequestParams) {
  return _req(['get', `${path}/${id}`, null, accessToken])
}

export async function create([path, data, accessToken = '']: RequestParams) {
  return _req(['create', path, data, accessToken])
}

export async function update([path, id, data, accessToken = '']: RequestParams) {
  return _req(['update', `${path}/${id}`, data, accessToken])
}

export async function patch([path, id, data, accessToken = '']: RequestParams) {
  return _req(['patch', `${path}/${id}`, data, accessToken])
}

export async function remove([path, id, accessToken = '']: RequestParams) {
  return _req(['remove', `${path}/${id}`, null, accessToken])
}

export async function code(expectedCode: number, [
  method,
  path,
  data = null,
  accessToken = '',
]: RequestParams) {
  const methods: any = {
    find,
    get,
    create,
    update,
    patch,
    remove,
  }

  if (methods[method]) {
    const result = await methods[method]([path, data, accessToken])
    return result.status === expectedCode
  } else {
    throw new Error(`Method ${method} not supported`)
  }
}