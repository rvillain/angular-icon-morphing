# Angular-Icon-Morphing

Angular library to animate icons with smooth morphing animation

[Live Demo](https://angular-icon-morphing.stackblitz.io)

[Demo source](https://github.com/rvillain/angular-icon-morphing)

## Install

Install npm package

```
npm install --save-dev angular-icon-morphing
```

Add Morpheus library to angular.json scripts

```
{
  ...
  "projects": {
    ...
      "architect": {
        "build": {
          ...
          "options": {
            ...
            "scripts": [
              "node_modules/svg-morpheus/compile/minified/svg-morpheus.js"
            ]
          },
          ...
        }
      }
  }
}
```


## Getting Started

Import Module

```
...
import { AngularIconMorphingModule } from 'angular-icon-morphing';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularIconMorphingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Use aim-icon component to animate yout svg Icon

```
<aim-icon [active]="isActive">
    <svg width="24" height="24">
        <g #startIcon><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></g>
        <g #endIcon><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></g>
    </svg>
</aim-icon>
```

## Documentation

aim-icon component can be used with some parameters 

| Parameter | Description | Default value |
| :---: | :--- | :---: |
| active |boolean triggering animation when its value changes | false |
| easing |string corresponding to animation type. [See complete list of possibilities on live demo stackblitz](https://angular-icon-morphing.stackblitz.io)  | linear |
| duration |duration of animation in ms | 250 |





## Built With

* [SVG-Morpheus](https://github.com/alexk111/SVG-Morpheus/) - The JS library used


## Authors

* **Rémy Villain** - [rvillain](https://github.com/rvillain)

