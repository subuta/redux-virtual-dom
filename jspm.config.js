SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "snabbdom": "npm:snabbdom@0.5.1",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
      "redux": "npm:redux@3.5.2",
      "reselect": "npm:reselect@2.5.3",
      "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
      "util": "github:jspm/nodelibs-util@0.2.0-alpha",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha",
      "events": "github:jspm/nodelibs-events@0.2.0-alpha"
    },
    "packages": {
      "npm:redux@3.5.2": {
        "map": {
          "loose-envify": "npm:loose-envify@1.2.0",
          "symbol-observable": "npm:symbol-observable@0.2.4",
          "lodash": "npm:lodash@4.14.0",
          "lodash-es": "npm:lodash-es@4.14.0"
        }
      },
      "npm:loose-envify@1.2.0": {
        "map": {
          "js-tokens": "npm:js-tokens@1.0.3"
        }
      },
      "github:jspm/nodelibs-stream@0.2.0-alpha": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "readable-stream": "npm:readable-stream@2.1.4"
        }
      },
      "npm:readable-stream@2.1.4": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "buffer-shims": "npm:buffer-shims@1.0.0",
          "isarray": "npm:isarray@1.0.0",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "string_decoder": "npm:string_decoder@0.10.31",
          "core-util-is": "npm:core-util-is@1.0.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "deep-equal": "npm:deep-equal@1.0.1",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.7.1"
      }
    },
    "npm:buffer@4.7.1": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    }
  }
});
