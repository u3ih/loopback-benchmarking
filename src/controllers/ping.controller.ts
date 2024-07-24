import {
  get,
  response,
  ResponseObject
} from '@loopback/rest';

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: { type: 'string' },
          date: { type: 'string' },
          url: { type: 'string' },
          headers: {
            type: 'object',
            properties: {
              'Content-Type': { type: 'string' },
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  // @inject("services.DevService") private devService: Getter<DevService>;
  // @inject("services.DevService") private devService0: Getter<DevService>;
  // @inject("services.DevService") private devServiasdasdce: Getter<DevService>;
  // @inject("services.DevService") private devService3: Getter<DevService>;
  // @inject("services.DevService") private devService4: Getter<DevService>;
  // @inject("services.DevService") private devService5: Getter<DevService>;
  // @inject("services.DevService") private devService6: Getter<DevService>;
  // @inject("services.DevService") private devService7: Getter<DevService>;
  // @inject("services.DevService") private devService8: Getter<DevService>;
  // @inject("services.DevService") private devService9: Getter<DevService>;
  // @inject("services.DevService") private devSerasdvice0: Getter<DevService>;
  // @inject("services.DevService") private devSeravice1: Getter<DevService>;
  // @inject("services.DevService") private devSeasdrvice: Getter<DevService>;
  // @inject("services.DevService") private devSeasdrvice3: Getter<DevService>;
  // @inject("services.DevService") private devSerasdvice4: Getter<DevService>;
  // @inject("services.DevService") private devSexcrvice5: Getter<DevService>;
  // @inject("services.DevService") private devServiasdce6: Getter<DevService>;
  // @inject("services.DevService") private devServiasfasdce7: Getter<DevService>;
  // @inject("services.DevService") private devServasdice8: Getter<DevService>;
  // @inject("services.DevService") private devSerasfvice3: Getter<DevService>;
  // @inject("services.DevService") private devService123: Getter<DevService>;
  // @inject("services.DevService") private devService213: Getter<DevService>;
  // @inject("services.DevService") private devService133: Getter<DevService>;
  // @inject("services.DevService") private devServic412e4: Getter<DevService>;
  // @inject("services.DevService") private devServi412ce5: Getter<DevService>;
  // @inject("services.DevService") private devService46: Getter<DevService>;
  // @inject("services.DevService") private devService47: Getter<DevService>;
  // @inject("services.DevService") private devService842: Getter<DevService>;
  // @inject("services.DevService") private devService923: Getter<DevService>;
  // @inject("services.DevService") private devService30: Getter<DevService>;
  // @inject("services.DevService") private devService1232: Getter<DevService>;
  // @inject("services.DevService") private devService42: Getter<DevService>;
  // @inject("services.DevService") private devServicefd3: Getter<DevService>;
  // @inject("services.DevService") private devService14qwe: Getter<DevService>;
  // @inject("services.DevService") private devService1qwe5: Getter<DevService>;
  // @inject("services.DevService") private devService1qwe6: Getter<DevService>;
  // @inject("services.DevService") private devService17qwe: Getter<DevService>;
  constructor(
    // uncomment this line for test
    // @service(DevService) public devSerasdvice: DevService,
    // @service(DevService) public devasdService: DevService,
    // @service(DevService) public devService3: DevService,
    // @service(DevService) public devService4: DevService,
    // @service(DevService) public devService5: DevService,
    // @service(DevService) public devService6: DevService,
    // @service(DevService) public devService7: DevService,
    // @service(DevService) public devService8: DevService,
    // @service(DevService) public devService9: DevService,
    // @service(DevService) public devService10: DevService,
    // @service(DevService) public devService11: DevService,
    // @service(DevService) public devServasdice12: DevService,
    // @service(DevService) public devSerasdasdvice5: DevService,
    // @service(DevService) public devSerasdasdvice6: DevService,
    // @service(DevService) public devSeasdrvice7: DevService,
    // @service(DevService) public devSczxcervice8: DevService,
    // @service(DevService) public devSerasdavice9: DevService,
    // @service(DevService) public devSeasdasrvice10: DevService,
    // @service(DevService) public devSerasdvice11: DevService,
    // @service(DevService) public devSerzcsdvice12: DevService,
    // @service(DevService) public devSeasdascrvice6: DevService,
    // @service(DevService) public devSasdervice7: DevService,
    // @service(DevService) public devSasdasdervice8: DevService,
    // @service(DevService) public devSacascervice9: DevService,
    // @service(DevService) public devSeasdasdrvice10: DevService,
    // @service(DevService) public devSeacascrvice11: DevService,
    // @service(DevService) public devSecasdrvasdice12: DevService,
    // @service(DevService) public devSeraasdsdasdvice5: DevService,
    // @service(DevService) public devSecascrasdasdvice6: DevService,
    // @service(DevService) public devSeasasdsdrvice7: DevService,
    // @service(DevService) public devScasdzxcervice8: DevService,
    // @service(DevService) public devSerasdcascavice9: DevService,
    // @service(DevService) public devSeasdcascasrvice10: DevService,
    // @service(DevService) public devSeraasdasdsdvice11: DevService,
    // @service(DevService) public devSerzcasccsdvice12: DevService,
  ) { }

  // Map to `GET /ping`
  @get('/ping')
  @response(200, PING_RESPONSE)
  ping(): object {
    // Reply with a greeting, the current time, the url, and request headers
    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      // url: this.req.url,
      // headers: Object.assign({}, this.req.headers),
    };
  }
}
