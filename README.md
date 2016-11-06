# Liteflux

`Liteflux` is [OMA Lightweight M2M (LWM2M)](http://openmobilealliance.org/about-oma/work-program/m2m-enablers/) protocol
implementation in the form of Elixir libraries that can be used to construct LWM2M servers and clients.

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed as:

  1. Add liteflux to your list of dependencies in `mix.exs`:

        def deps do
          [{:liteflux, "~> 0.0.1"}]
        end

  2. Ensure liteflux is started before your application:

        def application do
          [applications: [:liteflux]]
        end

### Community
#### Mailing list
[mainflux](https://groups.google.com/forum/#!forum/mainflux) Google group

For quick questions and suggestions you can also use GitHub Issues.

#### IRC
[Mainflux Gitter](https://gitter.im/Mainflux/mainflux?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

#### Twitter
[@mainflux](https://twitter.com/mainflux)

### Authors
Main architect and BDFL of Mainflux project is [@drasko](https://github.com/drasko). Additionaly, initial version of Mainflux was architectured and crafted by [@janko-isidorovic](https://github.com/janko-isidorovic), [@nmarcetic](https://github.com/nmarcetic) and [@mijicd](https://github.com/mijicd).

Maintainers are listed in [MAINTAINERS](MAINTAINERS) file.

Contributors are listed in [CONTRIBUTORS](CONTRIBUTORS) file.

### License
[Apache License, version 2.0](LICENSE)
