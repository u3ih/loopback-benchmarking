# loopback-examp

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
yarn install
```

## Run the application

```sh
yarn start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## benchmark with [autocannon](https://www.npmjs.com/package/autocannon)

```sh
autocannon -t10 -c1000 -d10 http://localhost:3000/ping
```

## Other test

- With @service: go to the ping.controller file, uncomment all lines with @service, rerun the project, and test.

- With @inject: go to the ping.controller file, uncomment all lines with @inject, rerun the project, and test.
