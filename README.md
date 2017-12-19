# wcnexus-venture-theme
A hugo theme for wcnexus.com venture page.

## Features

- Responsive layout
- Material Design
- Customizable user info
- Blog code block syntax highlighting
- Share posts to Weibo and Twitter

## Production Deployment

- Download and extract dist file under the `themes` directory of your hugo site.
- Configure `config.toml`, the one sits at root of your hugo site, not the one under the theme folder. Please include the necessary sections in config example at `../themes/exampleSite/config.toml` to your own site config.

## Development

### Prerequisites

- node.js > 6.9.0

### Dev with webpack

First you have to collect dependent node modules.

``` bash
  npm run install
```

Build the theme once you are satisfied with it.

``` bash
  npm run build
```

Manually copy everything under `dist` folder to the `themes` directory of a test site.

## Todo
- i18n
- index blog pagination

## Credits
- [materialize-css](next.materializecss.com)
- [jquery-parallax.js](https://github.com/pixelcog/parallax.js.git#v2.0.0-alpha)
- [google/material-design-icons](https://github.com/google/material-design-icons/)
- [iconfonts](http://www.iconfont.cn)

## License
MIT