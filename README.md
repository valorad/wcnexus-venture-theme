# wcnexus-venture-theme
A hugo theme for wcnexus.com venture page.

## Features

- Responsive layout
- Material Design
- Customizable user info
- Blog code block syntax highlighting
- Share posts to Weibo and Twitter
- i18n

## Production Deployment

- Download and extract dist file under the `themes` directory of your hugo site.
- Configure `config.toml`, the one sits at root of your hugo site, not the one under the theme folder. Please include the necessary sections in config example at `../themes/exampleSite/config.toml` to your own site config.

## Development

### Prerequisites

> node.js > 6.9.0

### Dev with gulp

First you have to collect dependent node modules.

``` bash
  npm install
```

Run tiny live-reload server
``` bash
  npm run serve
```

Build the theme only.

``` bash
  npm run build
```

Then manually copy everything under `dist` folder to the `themes` directory of a hugo site.

(
  
  Alternatively, you may create a symlink to `dist` folder, to simplify your dev process:

  ``` powershell
  # windows powershell (needs admin privilege)
  New-Item -Path "path/to/hugo/theme/wcnexus-venture" -ItemType SymbolicLink -Value "path/to/wcnexus-venture-theme/dist"
  ```

  ``` bash
  # linux/macos bash
  ln -s "path/to/wcnexus-venture-theme/dist" "path/to/hugo/theme/wcnexus-venture"
  ```

)

## Todo
- index blog pagination

## Credits
- [materialize-css](next.materializecss.com)
- [jquery-parallax.js](https://github.com/pixelcog/parallax.js.git#v2.0.0-alpha)
- [google/material-design-icons](https://github.com/google/material-design-icons/)
- [iconfonts](http://www.iconfont.cn)
- [iconmoon](https://icomoon.io/)

## License
MIT
