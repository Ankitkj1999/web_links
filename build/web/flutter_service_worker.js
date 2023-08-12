'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".firebase/assets/AssetManifest.json": "e7af6c96d6cafee27d4dae33d700b663",
".firebase/assets/AssetManifest.smcbin": "fece3f6f4e95a47b48d8c7f022a5bb89",
".firebase/assets/assets/ankit.png": "dbe55ededb643d58a3ef22723136f81a",
".firebase/assets/assets/ankit_portfolio.png": "9e88e0a82ad430a80ecf071ad0ef358d",
".firebase/assets/assets/codewars.png": "a66d82990bb00435130f83d53fbcbe29",
".firebase/assets/assets/codewars1.png": "3159931c7ef5b6e3cfc3113ca353949f",
".firebase/assets/assets/email.png": "47c1a95fd072801f7184ecf979b296b1",
".firebase/assets/assets/gfg.png": "1e29c8ae3a7917663db471d1bf995c86",
".firebase/assets/assets/google-play.png": "c1f8ecd211a87b217e770f738fae09bf",
".firebase/assets/assets/hashnode.png": "4ae61ac2c4111a3ac1a1cdb26c49f8b3",
".firebase/assets/assets/instagram.png": "a8d7a28e6d73f2f3f1be579fd211fe9a",
".firebase/assets/assets/linkedin.png": "c7b117cc7769bc27ec4475b726407d0e",
".firebase/assets/assets/png/codewars.png": "b34a50badd5bff011b543db96c1f32f9",
".firebase/assets/assets/png/geeksforgeeks.png": "14b5f53d46ac5d67423f96595244413a",
".firebase/assets/assets/png/github.png": "25e24b98c9c599251e413d3a20da4a5f",
".firebase/assets/assets/png/gmail.png": "d3616b9f6ee5618407e8108597bdc2b3",
".firebase/assets/assets/png/hashnode.png": "baeded2ff89a088b8ed99852e68ce595",
".firebase/assets/assets/png/instagram.png": "24fb4cc14468fe885c888093b9b657e7",
".firebase/assets/assets/png/linkedin.png": "9ce73ba8e9b60572161db3d7ba9a748e",
".firebase/assets/assets/png/playstore.png": "f8615319949413876cb7c1585c97d0eb",
".firebase/assets/assets/png/portfolio.png": "e942f89876fb3811201f010ba263df5e",
".firebase/assets/assets/png/resume.png": "6feb9aeb20d787ea5160ee374b04fa6a",
".firebase/assets/assets/png/twitter.png": "3cdad0292602c58e9a241af77607abf1",
".firebase/assets/assets/png/whatsapp.png": "0f908ca3a2ce587f6fe3863b2e06d3ed",
".firebase/assets/assets/png/youtube.png": "0ad0bde4e9efca37aab9f29cce2c8796",
".firebase/assets/assets/resume.png": "6feb9aeb20d787ea5160ee374b04fa6a",
".firebase/assets/assets/twitter.png": "822271c586e0c8211e8de5d49cebbbc4",
".firebase/assets/assets/whatsapp.png": "0a5d7e24ddde778bad7ebab9b8f6ba15",
".firebase/assets/assets/youtube.png": "52efa644be1d33584397e6bdad34b11f",
".firebase/assets/FontManifest.json": "316a636bcc17db9bf8d0e5e78901c58b",
".firebase/assets/fonts/MaterialIcons-Regular.otf": "db83e4fe86b3aa4e9e29040d17319edf",
".firebase/assets/NOTICES": "9fd184bb67420c3d0f38174e7fdb2956",
".firebase/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
".firebase/assets/packages/social_media_flutter/fonts/icons.ttf": "7dae615e8df7bf5bf381bf713850ac33",
".firebase/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
".firebase/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
".firebase/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
".firebase/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
".firebase/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
".firebase/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
".firebase/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
".firebase/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
".firebase/favicon.png": "5dcef449791fa27946b3d35ad8803796",
".firebase/firebase.json": "fc7e49dc7cd9d18ac950a8e3fe809fe6",
".firebase/flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
".firebase/hosting.cHVibGlj.cache": "97442bd01911e9411df2ebe32da772e7",
".firebase/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".firebase/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".firebase/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".firebase/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".firebase/index.html": "299d517e1ff755ebe081a7eb2b727b4c",
"/": "a79de8d7fa673af6d59cabd16bf2bc85",
".firebase/main.dart.js": "92824ad7ecf8382e4fc1f4a979d95526",
".firebase/manifest.json": "8ac52fa34143a04bb390295ba6fb4c42",
".firebase/public/assets/AssetManifest.json": "de05be8b07f7303c988ed2cc47871476",
".firebase/public/assets/AssetManifest.smcbin": "c927a2034b6c9203ad6f5671d0d7ed5d",
".firebase/public/assets/assets/ankit.png": "dbe55ededb643d58a3ef22723136f81a",
".firebase/public/assets/FontManifest.json": "316a636bcc17db9bf8d0e5e78901c58b",
".firebase/public/assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
".firebase/public/assets/NOTICES": "9fd184bb67420c3d0f38174e7fdb2956",
".firebase/public/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
".firebase/public/assets/packages/social_media_flutter/fonts/icons.ttf": "7dae615e8df7bf5bf381bf713850ac33",
".firebase/public/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
".firebase/public/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
".firebase/public/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
".firebase/public/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
".firebase/public/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
".firebase/public/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
".firebase/public/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
".firebase/public/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
".firebase/public/favicon.png": "0a8717eb067e29ae3f93469701c28454",
".firebase/public/favicon1.png": "5dcef449791fa27946b3d35ad8803796",
".firebase/public/firebase.json": "fc7e49dc7cd9d18ac950a8e3fe809fe6",
".firebase/public/flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
".firebase/public/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".firebase/public/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".firebase/public/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".firebase/public/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".firebase/public/index.html": "0a4af67d4a91e08176de07f2a7078242",
".firebase/public/main.dart.js": "d24fd8b82307e38791fdafc6b00c6572",
".firebase/public/manifest.json": "8ac52fa34143a04bb390295ba6fb4c42",
".firebase/public/version.json": "e1183b61b4def6c4170b1244987700c8",
".firebase/version.json": "e1183b61b4def6c4170b1244987700c8",
".firebase%20copy/assets/AssetManifest.json": "e7af6c96d6cafee27d4dae33d700b663",
".firebase%20copy/assets/AssetManifest.smcbin": "fece3f6f4e95a47b48d8c7f022a5bb89",
".firebase%20copy/assets/assets/ankit.png": "dbe55ededb643d58a3ef22723136f81a",
".firebase%20copy/assets/assets/ankit_portfolio.png": "9e88e0a82ad430a80ecf071ad0ef358d",
".firebase%20copy/assets/assets/codewars.png": "a66d82990bb00435130f83d53fbcbe29",
".firebase%20copy/assets/assets/codewars1.png": "3159931c7ef5b6e3cfc3113ca353949f",
".firebase%20copy/assets/assets/email.png": "47c1a95fd072801f7184ecf979b296b1",
".firebase%20copy/assets/assets/gfg.png": "1e29c8ae3a7917663db471d1bf995c86",
".firebase%20copy/assets/assets/google-play.png": "c1f8ecd211a87b217e770f738fae09bf",
".firebase%20copy/assets/assets/hashnode.png": "4ae61ac2c4111a3ac1a1cdb26c49f8b3",
".firebase%20copy/assets/assets/instagram.png": "a8d7a28e6d73f2f3f1be579fd211fe9a",
".firebase%20copy/assets/assets/linkedin.png": "c7b117cc7769bc27ec4475b726407d0e",
".firebase%20copy/assets/assets/png/codewars.png": "b34a50badd5bff011b543db96c1f32f9",
".firebase%20copy/assets/assets/png/geeksforgeeks.png": "14b5f53d46ac5d67423f96595244413a",
".firebase%20copy/assets/assets/png/github.png": "25e24b98c9c599251e413d3a20da4a5f",
".firebase%20copy/assets/assets/png/gmail.png": "d3616b9f6ee5618407e8108597bdc2b3",
".firebase%20copy/assets/assets/png/hashnode.png": "baeded2ff89a088b8ed99852e68ce595",
".firebase%20copy/assets/assets/png/instagram.png": "24fb4cc14468fe885c888093b9b657e7",
".firebase%20copy/assets/assets/png/linkedin.png": "9ce73ba8e9b60572161db3d7ba9a748e",
".firebase%20copy/assets/assets/png/playstore.png": "f8615319949413876cb7c1585c97d0eb",
".firebase%20copy/assets/assets/png/portfolio.png": "e942f89876fb3811201f010ba263df5e",
".firebase%20copy/assets/assets/png/resume.png": "6feb9aeb20d787ea5160ee374b04fa6a",
".firebase%20copy/assets/assets/png/twitter.png": "3cdad0292602c58e9a241af77607abf1",
".firebase%20copy/assets/assets/png/whatsapp.png": "0f908ca3a2ce587f6fe3863b2e06d3ed",
".firebase%20copy/assets/assets/png/youtube.png": "0ad0bde4e9efca37aab9f29cce2c8796",
".firebase%20copy/assets/assets/resume.png": "6feb9aeb20d787ea5160ee374b04fa6a",
".firebase%20copy/assets/assets/twitter.png": "822271c586e0c8211e8de5d49cebbbc4",
".firebase%20copy/assets/assets/whatsapp.png": "0a5d7e24ddde778bad7ebab9b8f6ba15",
".firebase%20copy/assets/assets/youtube.png": "52efa644be1d33584397e6bdad34b11f",
".firebase%20copy/assets/FontManifest.json": "316a636bcc17db9bf8d0e5e78901c58b",
".firebase%20copy/assets/fonts/MaterialIcons-Regular.otf": "db83e4fe86b3aa4e9e29040d17319edf",
".firebase%20copy/assets/NOTICES": "9fd184bb67420c3d0f38174e7fdb2956",
".firebase%20copy/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
".firebase%20copy/assets/packages/social_media_flutter/fonts/icons.ttf": "7dae615e8df7bf5bf381bf713850ac33",
".firebase%20copy/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
".firebase%20copy/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
".firebase%20copy/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
".firebase%20copy/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
".firebase%20copy/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
".firebase%20copy/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
".firebase%20copy/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
".firebase%20copy/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
".firebase%20copy/favicon.png": "5dcef449791fa27946b3d35ad8803796",
".firebase%20copy/firebase.json": "fc7e49dc7cd9d18ac950a8e3fe809fe6",
".firebase%20copy/flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
".firebase%20copy/hosting.cHVibGlj.cache": "5fdda2c21cca22d38212fa21a99848f5",
".firebase%20copy/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".firebase%20copy/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".firebase%20copy/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".firebase%20copy/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".firebase%20copy/index.html": "299d517e1ff755ebe081a7eb2b727b4c",
".firebase%20copy/main.dart.js": "92824ad7ecf8382e4fc1f4a979d95526",
".firebase%20copy/manifest.json": "8ac52fa34143a04bb390295ba6fb4c42",
".firebase%20copy/public/assets/AssetManifest.json": "de05be8b07f7303c988ed2cc47871476",
".firebase%20copy/public/assets/AssetManifest.smcbin": "c927a2034b6c9203ad6f5671d0d7ed5d",
".firebase%20copy/public/assets/assets/ankit.png": "dbe55ededb643d58a3ef22723136f81a",
".firebase%20copy/public/assets/FontManifest.json": "316a636bcc17db9bf8d0e5e78901c58b",
".firebase%20copy/public/assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
".firebase%20copy/public/assets/NOTICES": "9fd184bb67420c3d0f38174e7fdb2956",
".firebase%20copy/public/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
".firebase%20copy/public/assets/packages/social_media_flutter/fonts/icons.ttf": "7dae615e8df7bf5bf381bf713850ac33",
".firebase%20copy/public/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
".firebase%20copy/public/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
".firebase%20copy/public/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
".firebase%20copy/public/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
".firebase%20copy/public/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
".firebase%20copy/public/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
".firebase%20copy/public/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
".firebase%20copy/public/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
".firebase%20copy/public/favicon.png": "0a8717eb067e29ae3f93469701c28454",
".firebase%20copy/public/favicon1.png": "5dcef449791fa27946b3d35ad8803796",
".firebase%20copy/public/firebase.json": "fc7e49dc7cd9d18ac950a8e3fe809fe6",
".firebase%20copy/public/flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
".firebase%20copy/public/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
".firebase%20copy/public/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".firebase%20copy/public/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".firebase%20copy/public/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".firebase%20copy/public/index.html": "0a4af67d4a91e08176de07f2a7078242",
".firebase%20copy/public/main.dart.js": "d24fd8b82307e38791fdafc6b00c6572",
".firebase%20copy/public/manifest.json": "8ac52fa34143a04bb390295ba6fb4c42",
".firebase%20copy/public/version.json": "e1183b61b4def6c4170b1244987700c8",
".firebase%20copy/version.json": "e1183b61b4def6c4170b1244987700c8",
"assets/AssetManifest.json": "86bbd055ae5ca25972bd82a619bad101",
"assets/AssetManifest.smcbin": "0f641b6a31ab4612abc3250f23831176",
"assets/assets/ankit.png": "dbe55ededb643d58a3ef22723136f81a",
"assets/assets/png/codewars.png": "b34a50badd5bff011b543db96c1f32f9",
"assets/assets/png/geeksforgeeks.png": "14b5f53d46ac5d67423f96595244413a",
"assets/assets/png/github.png": "25e24b98c9c599251e413d3a20da4a5f",
"assets/assets/png/gmail.png": "d3616b9f6ee5618407e8108597bdc2b3",
"assets/assets/png/hashnode.png": "baeded2ff89a088b8ed99852e68ce595",
"assets/assets/png/instagram.png": "24fb4cc14468fe885c888093b9b657e7",
"assets/assets/png/linkedin.png": "9ce73ba8e9b60572161db3d7ba9a748e",
"assets/assets/png/playstore.png": "f8615319949413876cb7c1585c97d0eb",
"assets/assets/png/portfolio.png": "e942f89876fb3811201f010ba263df5e",
"assets/assets/png/resume.png": "6feb9aeb20d787ea5160ee374b04fa6a",
"assets/assets/png/twitter.png": "3cdad0292602c58e9a241af77607abf1",
"assets/assets/png/whatsapp.png": "0f908ca3a2ce587f6fe3863b2e06d3ed",
"assets/assets/png/youtube.png": "0ad0bde4e9efca37aab9f29cce2c8796",
"assets/FontManifest.json": "316a636bcc17db9bf8d0e5e78901c58b",
"assets/fonts/MaterialIcons-Regular.otf": "db83e4fe86b3aa4e9e29040d17319edf",
"assets/NOTICES": "9fd184bb67420c3d0f38174e7fdb2956",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/social_media_flutter/fonts/icons.ttf": "7dae615e8df7bf5bf381bf713850ac33",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"firebase.json": "fc7e49dc7cd9d18ac950a8e3fe809fe6",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "884293d96d33082f26d8baccce566fd5",
"main.dart.js": "f0e4f3fe67c484219a72cfca8318e698",
"manifest.json": "8ac52fa34143a04bb390295ba6fb4c42",
"public/assets/AssetManifest.json": "86bbd055ae5ca25972bd82a619bad101",
"public/assets/AssetManifest.smcbin": "0f641b6a31ab4612abc3250f23831176",
"public/assets/assets/ankit.png": "dbe55ededb643d58a3ef22723136f81a",
"public/assets/assets/png/codewars.png": "b34a50badd5bff011b543db96c1f32f9",
"public/assets/assets/png/geeksforgeeks.png": "14b5f53d46ac5d67423f96595244413a",
"public/assets/assets/png/github.png": "25e24b98c9c599251e413d3a20da4a5f",
"public/assets/assets/png/gmail.png": "d3616b9f6ee5618407e8108597bdc2b3",
"public/assets/assets/png/hashnode.png": "baeded2ff89a088b8ed99852e68ce595",
"public/assets/assets/png/instagram.png": "24fb4cc14468fe885c888093b9b657e7",
"public/assets/assets/png/linkedin.png": "9ce73ba8e9b60572161db3d7ba9a748e",
"public/assets/assets/png/playstore.png": "f8615319949413876cb7c1585c97d0eb",
"public/assets/assets/png/portfolio.png": "e942f89876fb3811201f010ba263df5e",
"public/assets/assets/png/resume.png": "6feb9aeb20d787ea5160ee374b04fa6a",
"public/assets/assets/png/twitter.png": "3cdad0292602c58e9a241af77607abf1",
"public/assets/assets/png/whatsapp.png": "0f908ca3a2ce587f6fe3863b2e06d3ed",
"public/assets/assets/png/youtube.png": "0ad0bde4e9efca37aab9f29cce2c8796",
"public/assets/FontManifest.json": "316a636bcc17db9bf8d0e5e78901c58b",
"public/assets/fonts/MaterialIcons-Regular.otf": "db83e4fe86b3aa4e9e29040d17319edf",
"public/assets/NOTICES": "9fd184bb67420c3d0f38174e7fdb2956",
"public/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"public/assets/packages/social_media_flutter/fonts/icons.ttf": "7dae615e8df7bf5bf381bf713850ac33",
"public/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"public/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"public/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"public/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"public/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"public/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"public/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"public/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"public/favicon.png": "5d931eefdca07f1741f4a747b7a8f52d",
"public/firebase.json": "fc7e49dc7cd9d18ac950a8e3fe809fe6",
"public/flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"public/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"public/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"public/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"public/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"public/index.html": "a79de8d7fa673af6d59cabd16bf2bc85",
"public/main.dart.js": "92824ad7ecf8382e4fc1f4a979d95526",
"public/manifest.json": "8ac52fa34143a04bb390295ba6fb4c42",
"public/version.json": "e1183b61b4def6c4170b1244987700c8",
"version.json": "e1183b61b4def6c4170b1244987700c8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
