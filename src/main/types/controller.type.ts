import {
  HttpRequest,
  HttpResponse,
} from '../../presentation/protocols/http.type'

type ResponseTypes = HttpResponse | void

export type ControllerType<Body = any, Params = any, Query = any> = (
  request: HttpRequest<Body, Params, Query>
) => Promise<ResponseTypes> | ResponseTypes
