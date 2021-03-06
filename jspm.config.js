SystemJS.config({
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/",
      "redux-virtual-dom/": "/lib/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "redux-virtual-dom/": "lib/"
    }
  },
  devConfig: {
    "map": {
      "react": "npm:react@15.3.2",
      "redux": "npm:redux@3.6.0",
      "reselect": "npm:reselect@2.5.4",
      "snabbdom": "npm:snabbdom@0.5.4",
      "vidom": "npm:vidom@0.5.2",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17",
      "assert": "npm:jspm-nodelibs-assert@0.2.0",
      "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
      "constants": "npm:jspm-nodelibs-constants@0.2.0",
      "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
      "events": "npm:jspm-nodelibs-events@0.2.0",
      "fs": "npm:jspm-nodelibs-fs@0.2.0",
      "os": "npm:jspm-nodelibs-os@0.2.0",
      "path": "npm:jspm-nodelibs-path@0.2.1",
      "process": "npm:jspm-nodelibs-process@0.2.0",
      "stream": "npm:jspm-nodelibs-stream@0.2.0",
      "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
      "util": "npm:jspm-nodelibs-util@0.2.1",
      "vm": "npm:jspm-nodelibs-vm@0.2.0",
      "react-dom": "npm:react-dom@15.3.2",
      "https": "npm:jspm-nodelibs-https@0.2.1",
      "url": "npm:jspm-nodelibs-url@0.2.0",
      "http": "npm:jspm-nodelibs-http@0.2.0",
      "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
      "zlib": "npm:jspm-nodelibs-zlib@0.2.0",
      "domain": "npm:jspm-nodelibs-domain@0.2.0"
    },
    "packages": {
      "npm:redux@3.6.0": {
        "map": {
          "lodash": "npm:lodash@4.16.6",
          "symbol-observable": "npm:symbol-observable@1.0.4",
          "loose-envify": "npm:loose-envify@1.3.0",
          "lodash-es": "npm:lodash-es@4.16.6"
        }
      },
      "npm:react@15.3.2": {
        "map": {
          "object-assign": "npm:object-assign@4.1.0",
          "loose-envify": "npm:loose-envify@1.3.0",
          "fbjs": "npm:fbjs@0.8.5"
        }
      },
      "npm:fbjs@0.8.5": {
        "map": {
          "loose-envify": "npm:loose-envify@1.3.0",
          "object-assign": "npm:object-assign@4.1.0",
          "core-js": "npm:core-js@1.2.7",
          "immutable": "npm:immutable@3.8.1",
          "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
          "ua-parser-js": "npm:ua-parser-js@0.7.11",
          "promise": "npm:promise@7.1.1"
        }
      },
      "npm:loose-envify@1.3.0": {
        "map": {
          "js-tokens": "npm:js-tokens@2.0.0"
        }
      },
      "npm:promise@7.1.1": {
        "map": {
          "asap": "npm:asap@2.0.5"
        }
      },
      "npm:isomorphic-fetch@2.2.1": {
        "map": {
          "node-fetch": "npm:node-fetch@1.6.3",
          "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
        }
      },
      "npm:node-fetch@1.6.3": {
        "map": {
          "encoding": "npm:encoding@0.1.12",
          "is-stream": "npm:is-stream@1.1.0"
        }
      },
      "npm:encoding@0.1.12": {
        "map": {
          "iconv-lite": "npm:iconv-lite@0.4.13"
        }
      },
      "npm:babel-plugin-transform-react-jsx@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.18.0",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0"
        }
      },
      "npm:babel-helper-builder-react-jsx@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.16.6",
          "babel-types": "npm:babel-types@6.18.0"
        }
      },
      "npm:babel-runtime@6.18.0": {
        "map": {
          "regenerator-runtime": "npm:regenerator-runtime@0.9.6",
          "core-js": "npm:core-js@2.4.1"
        }
      },
      "npm:babel-types@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.16.6",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      },
      "npm:jspm-nodelibs-buffer@0.2.0": {
        "map": {
          "buffer-browserify": "npm:buffer@4.9.1"
        }
      },
      "npm:buffer@4.9.1": {
        "map": {
          "base64-js": "npm:base64-js@1.2.0",
          "ieee754": "npm:ieee754@1.1.8",
          "isarray": "npm:isarray@1.0.0"
        }
      },
      "npm:jspm-nodelibs-os@0.2.0": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "npm:jspm-nodelibs-crypto@0.2.0": {
        "map": {
          "crypto-browserify": "npm:crypto-browserify@3.11.0"
        }
      },
      "npm:crypto-browserify@3.11.0": {
        "map": {
          "browserify-sign": "npm:browserify-sign@4.0.0",
          "create-hmac": "npm:create-hmac@1.1.4",
          "diffie-hellman": "npm:diffie-hellman@5.0.2",
          "create-ecdh": "npm:create-ecdh@4.0.0",
          "randombytes": "npm:randombytes@2.0.3",
          "public-encrypt": "npm:public-encrypt@4.0.0",
          "inherits": "npm:inherits@2.0.3",
          "create-hash": "npm:create-hash@1.1.2",
          "pbkdf2": "npm:pbkdf2@3.0.9",
          "browserify-cipher": "npm:browserify-cipher@1.0.0"
        }
      },
      "npm:browserify-sign@4.0.0": {
        "map": {
          "create-hmac": "npm:create-hmac@1.1.4",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "bn.js": "npm:bn.js@4.11.6",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "elliptic": "npm:elliptic@6.3.2",
          "inherits": "npm:inherits@2.0.3",
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:diffie-hellman@5.0.2": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "miller-rabin": "npm:miller-rabin@4.0.0"
        }
      },
      "npm:public-encrypt@4.0.0": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "bn.js": "npm:bn.js@4.11.6",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:create-ecdh@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "elliptic": "npm:elliptic@6.3.2"
        }
      },
      "npm:browserify-rsa@4.0.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "randombytes": "npm:randombytes@2.0.3"
        }
      },
      "npm:elliptic@6.3.2": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.0.6",
          "inherits": "npm:inherits@2.0.3",
          "hash.js": "npm:hash.js@1.0.3"
        }
      },
      "npm:parse-asn1@5.0.0": {
        "map": {
          "asn1.js": "npm:asn1.js@4.9.0",
          "create-hash": "npm:create-hash@1.1.2",
          "pbkdf2": "npm:pbkdf2@3.0.9",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "browserify-aes": "npm:browserify-aes@1.0.6"
        }
      },
      "npm:asn1.js@4.9.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:create-hmac@1.1.4": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:create-hash@1.1.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "ripemd160": "npm:ripemd160@1.0.1",
          "cipher-base": "npm:cipher-base@1.0.3",
          "sha.js": "npm:sha.js@2.4.5"
        }
      },
      "npm:pbkdf2@3.0.9": {
        "map": {
          "create-hmac": "npm:create-hmac@1.1.4"
        }
      },
      "npm:cipher-base@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:evp_bytestokey@1.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:hash.js@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:jspm-nodelibs-string_decoder@0.2.0": {
        "map": {
          "string_decoder-browserify": "npm:string_decoder@0.10.31"
        }
      },
      "npm:browserify-cipher@1.0.0": {
        "map": {
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "browserify-des": "npm:browserify-des@1.0.0"
        }
      },
      "npm:sha.js@2.4.5": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:miller-rabin@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.0.6"
        }
      },
      "npm:browserify-aes@1.0.6": {
        "map": {
          "cipher-base": "npm:cipher-base@1.0.3",
          "create-hash": "npm:create-hash@1.1.2",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "inherits": "npm:inherits@2.0.3",
          "buffer-xor": "npm:buffer-xor@1.0.3"
        }
      },
      "npm:jspm-nodelibs-stream@0.2.0": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.1.5"
        }
      },
      "npm:readable-stream@2.1.5": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "isarray": "npm:isarray@1.0.0",
          "string_decoder": "npm:string_decoder@0.10.31",
          "core-util-is": "npm:core-util-is@1.0.2",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "buffer-shims": "npm:buffer-shims@1.0.0"
        }
      },
      "npm:browserify-des@1.0.0": {
        "map": {
          "cipher-base": "npm:cipher-base@1.0.3",
          "inherits": "npm:inherits@2.0.3",
          "des.js": "npm:des.js@1.0.0"
        }
      },
      "npm:des.js@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:jspm-nodelibs-url@0.2.0": {
        "map": {
          "url-browserify": "npm:url@0.11.0"
        }
      },
      "npm:url@0.11.0": {
        "map": {
          "punycode": "npm:punycode@1.3.2",
          "querystring": "npm:querystring@0.2.0"
        }
      },
      "npm:jspm-nodelibs-zlib@0.2.0": {
        "map": {
          "zlib-browserify": "npm:browserify-zlib@0.1.4"
        }
      },
      "npm:jspm-nodelibs-http@0.2.0": {
        "map": {
          "http-browserify": "npm:stream-http@2.5.0"
        }
      },
      "npm:browserify-zlib@0.1.4": {
        "map": {
          "pako": "npm:pako@0.2.9",
          "readable-stream": "npm:readable-stream@2.1.5"
        }
      },
      "npm:stream-http@2.5.0": {
        "map": {
          "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
          "xtend": "npm:xtend@4.0.1",
          "inherits": "npm:inherits@2.0.3",
          "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
          "readable-stream": "npm:readable-stream@2.1.5"
        }
      },
      "npm:jspm-nodelibs-domain@0.2.0": {
        "map": {
          "domain-browserify": "npm:domain-browser@1.1.7"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "es2015": true,
    "stage2": true,
    "plugins": [
      "babel-plugin-transform-react-jsx"
    ]
  },
  packages: {
    "redux-virtual-dom": {
      "main": "redux-virtual-dom.js",
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
    "npm:*.json"
  ],
  map: {
    "deep-equal": "npm:deep-equal@1.0.1"
  },
  packages: {}
});
