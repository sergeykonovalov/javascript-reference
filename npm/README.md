# Node Package Manager (NPM)

> NPM is a package, which you can install globally like any other package.

```shell
sudo npm install -g npm@5.5.1
```

Any Node project should have `package.json`:

```shell
npm init
```

Or (omit questions):

```shell
npm init --yes
```

- Added packages appended to `dependencies` property of `package.json`.
- Loaded packages stored in folder `node_modules`.
- Try to inspect `package.json` files of libraries you use, to see examples of what is in.

> Note, that in recent versions of NPM you do not need to specify `--save` flag: packages added to `package.json` automatically by default.

## Order of Resolution

1. Core module.
2. File.
3. Installed package.

> When you specify path `require('./something)` it can be `something.js` in current folder, or sub-folder `something` with `index.js` inside.

Default behavior now is to *put all dependencies of packages into project's `node_modules`, with an exception that different versions module is dependent on, will be saved in `node_modules` under that package folder*.

## Semantic Versioning

> **MAJOR.MINOR.PATCH**, where major version can break backward compatibility, minor adds new features and patch is typically a bug fix.

- Caret (`^X`) symbol means that we are interested in any version of package, as soon as major version is `X`.
- Tilda (`~X.Y`) symbol means that we are interested in any version as long as major version is `X` and minor version in `Y`.
- To install exactly the version, remove tilda or caret symbol.

To list dependencies (only your application):

```shell
npm list --depth=0
```

To view package data:

```shell
npm view packageName
npm view packageName versions
npm view packageName [propertyName]
```

To list outdated packages:

```shell
npm outdated
npm -g outdated
```

- Current = from `package.json`.
- Wanted = latest available accoridng to requested in `package.json`.
- Latest = overall latest version of package.

To update packages:

```shell
npm update
```

> Works only for MINOR and PATCH!

To install development dependency, use flag `--save-dev` to put package under `devDependencies` section of `package.json`.

To uninstall package run `npm uninstall <package-name>` or `npm un <package-name>` (will be also removed from `package.json`).

## Publishing a Module

> Every module should have `package.json`, `index.js` and export one or more functions.

To create account:

```shell
npm adduser
```

To login:

```shell
npm login
```

To publish:

```shell
npm publish
```

> NPM will add its own properties, once you publish package.

> If you attempt to publish again, you will get an error, that NPM can't use same version number for changed package.

To update version:

```shell
npm version major
npm version minor
npm version patch
```
