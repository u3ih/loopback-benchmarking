import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';

export {ApplicationConfig};

export class LoopbackExampApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {

  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);
    // this.service(DevService).inScope(BindingScope.SINGLETON);
    // this.service(DevService1).inScope(BindingScope.SINGLETON);
    // this.service(DevService2).inScope(BindingScope.SINGLETON);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ["controllers"],
        extensions: [".controller.js", ".controller.ts"],
        nested: true,
      },
      datasources: {
        dirs: ["datasources"],
        extensions: [".datasource.js", ".datasource.ts"],
        nested: true,
      },
      repositories: {
        dirs: ["repositories"],
        extensions: [".repository.js", ".repository.ts"],
        nested: true,
      },
      services: {
        dirs: ["services"],
        extensions: [".service.js", ".service.ts"],
        nested: true,
      },
    }
  }

  // Unfortunately, TypeScript does not allow overriding methods inherited
  // from mapped types. https://github.com/microsoft/TypeScript/issues/38496
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async start(): Promise <void> {
    // Use `databaseSeeding` flag to control if products/users should be pre
    // populated into the database. Its value is default to `true`.
    //   if(this.options.databaseSeeding !== false) {
    //   await this.migrateSchema();
    // }

    await super.start();
  }
}
