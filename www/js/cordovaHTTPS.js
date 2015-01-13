/*global angular*/

/*
 * An HTTP Plugin for PhoneGap.
 */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var exec = require('cordova/exec');

var HTTP = {
    useBasicAuth: function(username, password, success, failure) {
        return exec(success, failure, "CordovaHTTPPlugin", "useBasicAuth", [username, password]);
    },
    setHeader: function(header, value, success, failure) {
        return exec(success, failure, "CordovaHTTPPlugin", "setHeader", [header, value]);
    },
    enableSSLPinning: function(enable, success, failure) {
        return exec(success, failure, "CordovaHTTPPlugin", "enableSSLPinning", [enable]);
    },
    acceptAllCerts: function(allow, success, failure) {
        return exec(success, failure, "CordovaHTTPPlugin", "acceptAllCerts", [allow]);
    },
    post: function(url, params, headers, success, failure) {
        return exec(success, failure, "CordovaHTTPPlugin", "post", [url, params, headers]);
    },
    get: function(url, params, headers, success, failure) {
        return exec(success, failure, "CordovaHTTPPlugin", "get", [url, params, headers]);
    },
    uploadFile: function(url, params, headers, filePath, name, success, failure) {
        return exec(success, failure, "CordovaHTTPPlugin", "uploadFile", [url, params, headers, filePath, name]);
    },
    downloadFile: function(url, params, headers, filePath, success, failure) {
        /*
         *
         * Licensed to the Apache Software Foundation (ASF) under one
         * or more contributor license agreements.  See the NOTICE file
         * distributed with this work for additional information
         * regarding copyright ownership.  The ASF licenses this file
         * to you under the Apache License, Version 2.0 (the
         * "License"); you may not use this file except in compliance
         * with the License.  You may obtain a copy of the License at
         *
         *   HTTP://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing,
         * software distributed under the License is distributed on an
         * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         * KIND, either express or implied.  See the License for the
         * specific language governing permissions and limitations
         * under the License.
         *
         * Modified by Andrew Stephan for Sync OnSet
         *
        */
        var win = function(result) {
            var entry = new (require('org.apache.cordova.file.FileEntry'))();
            entry.isDirectory = false;
            entry.isFile = true;
            entry.name = result.file.name;
            entry.fullPath = result.file.fullPath;
            success(entry);
        };
        return exec(win, failure, "CordovaHTTPPlugin", "downloadFile", [url, params, headers, filePath]);
    }
};

module.exports = HTTP;

if (typeof angular !== "undefined") {
    angular.module('cordovaHTTP', []).factory('cordovaHTTP', function($timeout, $q) {
        function makePromise(fn, args, async) {
            var deferred = $q.defer();
            
            var success = function(response) {
                if (async) {
                    $timeout(function() {
                        deferred.resolve(response);
                    });
                } else {
                    deferred.resolve(response);
                }
            };
            
            var fail = function(response) {
                if (async) {
                    $timeout(function() {
                        deferred.reject(response);
                    });
                } else {
                    deferred.reject(response);
                }
            };
            
            args.push(success);
            args.push(fail);
            
            fn.apply(HTTP, args);
            
            return deferred.promise;
        }
        
        var cordovaHTTP = {
            useBasicAuth: function(username, password) {
                return makePromise(HTTP.useBasicAuth, [username, password]);
            },
            setHeader: function(header, value) {
                return makePromise(HTTP.setHeader, [header, value]);
            },
            enableSSLPinning: function(enable) {
                return makePromise(HTTP.enableSSLPinning, [enable]);
            },
            acceptAllCerts: function(allow) {
                return makePromise(HTTP.acceptAllCerts, [allow]);
            },
            post: function(url, params, headers) {
                return makePromise(HTTP.post, [url, params, headers], true);
            },
            get: function(url, params, headers) {
                return makePromise(HTTP.get, [url, params, headers], true);
            },
            uploadFile: function(url, params, headers, filePath, name) {
                return makePromise(HTTP.uploadFile, [url, params, headers, filePath, name], true);
            },
            downloadFile: function(url, params, headers, filePath) {
                return makePromise(HTTP.downloadFile, [url, params, headers, filePath], true);
            }
        };
        return cordovaHTTP;
    });
} else {
    window.cordovaHTTP = HTTP;
}
