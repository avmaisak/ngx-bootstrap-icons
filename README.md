<p align="center">
  <a href="https://getbootstrap.com/">
    <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="Bootstrap logo" width="72" height="72">
  </a>
  
  <h3 align="center">ngx-bootstrap-icons</h3>
  <span align="center">This package allows you to use the [Bootstrap Icons](https://icons.getbootstrap.com/) in your angular applications.</span>
  <br>
  <a href="https://icons.getbootstrap.com/" align="center"><strong>Explore Bootstrap Icons »</strong></a>
</p>


[![GitHub issues](https://img.shields.io/github/issues/avmaisak/ngx-bootstrap-icons)](https://github.com/avmaisak/ngx-bootstrap-icons/issues)
[![GitHub license](https://img.shields.io/github/license/avmaisak/ngx-bootstrap-icons)](https://github.com/avmaisak/ngx-bootstrap-icons/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/avmaisak/ngx-bootstrap-icons)](https://github.com/avmaisak/ngx-bootstrap-icons/stargazers)

![Bootstrap Icons full set](https://user-images.githubusercontent.com/98681/69751498-12224a80-1104-11ea-9dd6-6f162a8a2566.png)


### Demo
Coming soon

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
import { Alarm, AlarmFill, AlertCircle } from 'ngx-bootstrap-icons';
// Select some icons (use an object, not an array)
const icons = {
  Alarm,
  AlarmFill,
  AlertCircle
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
import { Alarm, AlarmFill, AlertCircle } from 'ngx-bootstrap-icons';

// Select some icons (use an object, not an array)
const icons = {
  Alarm,
  AlarmFill,
  AlertCircle
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
```

_5. Use it in template_
```ts
<i-bs name="alarm-fill"></i-bs>
```
