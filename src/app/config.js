System.config({
  defaultJSExtentions: true,
  //use typescript for compilation
  transpiler: "typescript",
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    "npm:": "https://unpkg.com/"
  },
  //map tells the System loader where to look for things
  map: {
    app: "./src",
    "angular2-jwt": "node_modules/angular2-jwt/angular2-jwt",
    angular2: "node_modules/angular2",
    rxjs: "node_modules/rxjs",
    "@angular/core": "npm:@angular/core/bundles/core.umd.js",
    "@angular/common": "npm:@angular/common/bundles/common.umd.js",
    "@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.js",
    "@angular/platform-browser":
      "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
    "@angular/platform-browser-dynamic":
      "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
    "@angular/http": "npm:@angular/http/bundles/http.umd.js",
    "@angular/router": "npm:@angular/router/bundles/router.umd.js",
    "@angular/forms": "npm:@angular/forms/bundles/forms.umd.js",
    "ngx-bar-rating":
      "node_modules/ngx-bar-rating/bundles/ngx-bar-rating.umd.js",
    "@angular/core/testing": "npm:@angular/core/bundles/core-testing.umd.js",
    "@angular/common/testing":
      "npm:@angular/common/bundles/common-testing.umd.js",
    "@angular/compiler/testing":
      "npm:@angular/compiler/bundles/compiler-testing.umd.js",
    "@angular/platform-browser/testing":
      "npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js",
    "@angular/platform-browser-dynamic/testing":
      "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js",
    "@angular/http/testing": "npm:@angular/http/bundles/http-testing.umd.js",
    "@angular/router/testing":
      "npm:@angular/router/bundles/router-testing.umd.js",
    jquery: "../../node_modules/jquery/dist/jquery.js",
    "ngx-bar-rating": "ngx-bar-rating.umd.js",
    rateYo:
      "https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.js",
    primeng: "../../node_modules/primeng",
    rxjs: "npm:rxjs",
    jquery: "http://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js",
    jqueryui: "npm:jqueryui/jquery-ui.min.js",
    typescript: "npm:typescript@2.0.2/lib/typescript.js",
    "ng2-typewriter": "npm:ng2-typewriter/bundles/ng2-typewriter.umd.js"
  },
  //packages defines our app package
  packages: {
    "ng2-bootstrap": {
      format: "cjs",
      main: "bundles/ng2-bootstrap.umd.js",
      defaultExtension: "js"
    }
  },
  moment: { main: "moment.js", defaultExtension: "js" },
  app: {
    main: "./main.ts",
    defaultExtension: "ts"
  },
  rxjs: {
    defaultExtension: "js"
  }
});
