/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	initialize : function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady : function() {

 
	cordovaHTTP.useBasicAuth("admin", "Demo@123", function() {
			console.log('success1!');
		}, function() {
			console.log('error :(');
		});
		
			alert("tp2");
		cordovaHTTP.setHeader("Header", "Value", function() {
			console.log('success2!');
				alert("tp2-1");

		}, function() {
			console.log('error :(');
				alert("tp2-2");

		});
		//	alert("tp3");
		cordovaHTTP.enableSSLPinning(true, function() {
			console.log('success3!');
			alert('success3!');

		}, function() {
			console.log(' error:(');
						alert('error!');

		});
		//alert("tp4");
		cordovaHTTP.acceptAllCerts(true, function() {
			console.log('success4!');
			alert('success4!');
		}, function() {
			console.log('error :(');
						alert('error :(');

		});

		alert("tp5");


 


/*
		//cordovaHTTP.post("https://www.google.com/", {
		cordovaHTTP.post("http://www.pineconetassel.com/testjson.php", {
			name : "xinlu",
			email : "test@yahoo.com"
		}, {
			Authorization : "OAuth2: token"
		}, function(response) {
			// prints 200
			console.log("tp7" + response.status);
			alert(response.status);
			try {
				alert(response.data);
				response.data = JSON.parse(response.data);
				// prints test
				console.log("tp8" + response.data.name);
				alert(response.data.name + ':' + response.data.email);

			} catch(e) {
				console.error("JSON parsing error");
				alert("JSON parsing error");

			}
		}, function(response) {
			// prints 403
			console.log("tp9" + response.status);
			alert("tp9" + response.status);

			//prints Permission denied
			console.log("tp11" + response.error);
			alert("tp11" + response.error);

		});
		//cordovaHTTP.post("https://www.google.com/", {
		cordovaHTTP.post("http://www.pineconetassel.com/testdb.php", {
			name : "xinlu1",
			email : "test1@yahoo.com"
		}, {
			Authorization : "OAuth2: token"
		}, function(response) {
			// prints 200
			console.log("tp7" + response.status);
			alert(response.status);
			try {
				alert(response.data);
				response.data = JSON.parse(response.data);
				// prints test
				console.log("tp8" + response.data.name);
				alert(response.data.name + ':' + response.data.email);

			} catch(e) {
				console.error("JSON parsing error");
				alert("JSON parsing error");

			}
		}, function(response) {
			// prints 403
			console.log("tp9" + response.status);
			alert("tp9" + response.status);

			//prints Permission denied
			console.log("tp11" + response.error);
			alert("tp11" + response.error);

		});
		
		
		*/

		/*
		 cordovaHTTP.get("https://google.com/", {
		 id : 12,
		 message : "test"
		 }, {
		 Authorization : "OAuth2: token"
		 }, function(response) {
		 console.log(response.status);
		 alert(response.status);
		 }, function(response) {
		 console.error(response.error);
		 alert(response.error);

		 });
		 */
/*
		cordovaHTTP.get("http://www.google.com/", {
		 id : 12,
		 message : "test"
		 },  {
			Authorization : "OAuth2: token"
		}, function(response) {
			// prints 200
			console.log("tp7" + response.status);
			alert(response.status);
			try {
				alert(response.data);
				response.data = JSON.parse(response.data);
				// prints test
				console.log("tp8" + response.data.name);
				alert(response.data.name + ':' + response.data.email);

			} catch(e) {
				console.error("JSON parsing error");
				alert("JSON parsing error");

			}
		}, function(response) {
			// prints 403
			console.log("tp9" + response.status);
			alert("tp9" + response.status);

			//prints Permission denied
			console.log("tp11" + response.error);
			alert("tp11" + response.error);

		});
*/



		alert("tp6");

		app.receivedEvent('deviceready');

	},
	// Update DOM on a Received Event
	receivedEvent : function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);

	}
};
