<p align="center" style="text-align:center">
  <a href="https://v5.getbootstrap.com/" target="_blank">
    <img src="https://camo.githubusercontent.com/0e0adf58c74c6e74bb64ece5d0ef4620f4f46915/68747470733a2f2f76352e676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67" alt="Bootstrap logo" width="200a" height="165">
  </a>
  <h3 align="center" style="color:#6610f2">ngx-bootstrap-icons</h3>
</p>

### This Angular module allows you to use the Bootstrap Icons in your angular application without additional dependencies.
<br />



[![GitHub issues](https://img.shields.io/github/issues/avmaisak/ngx-bootstrap-icons)](https://github.com/avmaisak/ngx-bootstrap-icons/issues) [![GitHub license](https://img.shields.io/github/license/avmaisak/ngx-bootstrap-icons)](https://github.com/avmaisak/ngx-bootstrap-icons/blob/master/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/avmaisak/ngx-bootstrap-icons)](https://github.com/avmaisak/ngx-bootstrap-icons/stargazers) [![npm version](https://badge.fury.io/js/ngx-bootstrap-icons.svg)](https://badge.fury.io/js/ngx-bootstrap-icons) [![Package Quality](https://npm.packagequality.com/shield/ngx-bootstrap-icons.svg)](https://packagequality.com/#?package=ngx-bootstrap-icons)  <a href="https://www.figma.com/file/hTJtQ2MrMTeNVmYrVBqNZZ/Bootstrap-Icons-v1.0.0-alpha5?node-id=0%3A1" target="_blank">     <img src="https://avatars3.githubusercontent.com/u/5155369?s=200&v=4" alt="Bootstrap logo" width="21" height="21">
  </a>
```sh
npm i ngx-bootstrap-icons --save
```

![Bootstrap Icons full set](https://github.com/twbs/icons/raw/main/.github/preview.png)


### Demo

<a href="https://avmaisak.github.io/ngx-bootstrap-icons/"><strong style="color:#6610f2">Demo Here</strong></a>

### Usage

_1. Install the package_

```sh
npm i ngx-bootstrap-icons --save
```
_2. Import module_

```ts  
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
```

_3. Import assets_

You can import all icons (not recomended) or each icon individually.

_3.1 Import all icons_

```ts
import { allIcons } from 'ngx-bootstrap-icons';
```

_3.2 Import some icons_
```ts
import { alarm, alarmFill, alignBottom } from 'ngx-bootstrap-icons';
// Select some icons (use an object, not an array)
const icons = {
  alarm,
  alarmFill,
  alignBottom
};
```

_4. Import Module (all icons)_

```ts
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
_4.1. Import Module (some icons)_

```ts
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { alarm, alarmFill, alignBottom } from 'ngx-bootstrap-icons';

// Select some icons (use an object, not an array)
const icons = {
  alarm,
  alarmFill,
  alignBottom
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**

Another way.
--------------

Import NgxBootstrapIconsModule.pick(icons) inside of the AppModule

Import NgxBootstrapIconsModule (without the pick() method) inside of any FeatureModule where will be used.

Now you can import icons in one place only (root module) and successfully use the component anywhere you want.

**/

```


_5. Use it in template_
```ts
<i-bs name="alarm-fill"></i-bs>
```
or
 _Optionally use our enums for autocomplete support_
```ts
import { iconNamesEnum } from 'ngx-bootstrap-icons';

public iconNames = iconNamesEnum;

<i-bs [name]="iconNames.AlarmFill"></i-bs>
```

Also you can use width and height for icon (By default width and height are 1rem)
```ts
<i-bs 
  name="alarm-fill" 
  width="2rem" 
  height="2rem">
</i-bs>
```
