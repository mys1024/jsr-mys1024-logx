# logx

[![GitHub License](https://img.shields.io/github/license/mys1024/logx?&style=flat-square)](./LICENSE)
[![GitHub Tag](https://img.shields.io/github/v/tag/mys1024/logx?sort=semver&style=flat-square&label=JSR&color=rgb(247%2C223%2C30))](https://jsr.io/@mys/logx)
[![GitHub Actions Workflow CI Status](https://img.shields.io/github/actions/workflow/status/mys1024/logx/ci.yml?label=CI&&style=flat-square)](https://github.com/mys1024/logx/actions/workflows/ci.yml)
[![GitHub Actions Workflow Release Status](https://img.shields.io/github/actions/workflow/status/mys1024/logx/release.yml?label=Release&&style=flat-square)](https://github.com/mys1024/logx/actions/workflows/release.yml)

Prints logs in better format.

## Usage

```typescript
import * as logx from 'jsr:@mys/logx@1'

logx.setTimezoneOffset(480); // optional
logx.log("log");
logx.info("info");
logx.warn("warn");
logx.error("error");
```

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [mys1024](https://github.com/mys1024)
