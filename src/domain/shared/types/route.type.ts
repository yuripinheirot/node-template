/* eslint-disable no-unused-vars */
import { NextFunction, Response, Request } from 'express'

import { AppController } from '@/presentation/protocols/app-controller.type'

type RouteOptions = {
  paramsValidator?: any
  bodyValidator?: any
  queryValidator?: any
}

export enum EndpointMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export type MiddlewareType = (
  req: Request,
  res: Response,
  next: NextFunction
) => void | Promise<void>

export type RouteAdapterOptions = {
  bodyValidator?: new () => any
  paramsValidator?: new () => any
  queryValidator?: new () => any
}

type EndpointType = {
  method: EndpointMethod
  path: string
  controller: AppController['handle']
  middlewares?: MiddlewareType[]
  options?: RouteOptions
}

export type AppRoute = {
  basePath: string
  endpoints: EndpointType[]
}
