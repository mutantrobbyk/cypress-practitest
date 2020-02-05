practitest
==========

practitest test runner

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/practitest.svg)](https://npmjs.org/package/practitest)
[![Downloads/week](https://img.shields.io/npm/dw/practitest.svg)](https://npmjs.org/package/practitest)
[![License](https://img.shields.io/npm/l/practitest.svg)](https://github.com/mutantrobbyk/practitest/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g practitest
$ practitest COMMAND
running command...
$ practitest (-v|--version|version)
practitest/0.0.1 darwin-x64 node-v10.16.0
$ practitest --help [COMMAND]
USAGE
  $ practitest COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`practitest hello [FILE]`](#practitest-hello-file)
* [`practitest help [COMMAND]`](#practitest-help-command)

## `practitest hello [FILE]`

describe the command here

```
USAGE
  $ practitest hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ practitest hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/mutantrobbyk/practitest/blob/v0.0.1/src/commands/hello.ts)_

## `practitest help [COMMAND]`

display help for practitest

```
USAGE
  $ practitest help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
