'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/AUTO_MERGE": "d4106a051dff7f554757394eba2eaf73",
".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "3796ef1592dff136cb6351cdbf46c3f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8b337f2f19a569814adf49b1df1c4d00",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1640f38c4c96184e89b2fd2aab232645",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e1b68016bca65b77ebc90bf64bfe059e",
".git/logs/refs/heads/main": "68407fffcb18b9bb132b33929c2588de",
".git/logs/refs/remotes/origin/main": "d930ed1962ab1827a146899e7f543dba",
".git/objects/04/912b2aa26cd442a3a212b0bbb25ddc2ed44126": "140e0787f9f1e1cd76fc8afa8e0cba02",
".git/objects/0a/30ea4636967b3c3c78fabdc1d52eef3b4b857e": "26dbec9df260680b6dbf72355bba2d97",
".git/objects/0c/e4908dc6e05ed84830b5bf1031b6b2945c71b7": "49afe639dae6108567d80e5fb8ce96a4",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/16/14d9b8352b2a31c2836e961e59c018193ac6d0": "cb7407006e2cf0f4e566bf00c1a3ecc7",
".git/objects/1e/d8955a6dd25317726f93bfae006030ae306897": "0a1ed29362635b68e8f5337967478e70",
".git/objects/21/2d0ad933c96ada41013096af4db49931ef6f02": "27e54044668afdf6195cf52531a8a195",
".git/objects/21/78d07703f6237560dda49be82638faa1bdf289": "d272faaa00980ab6c2cfa4a9858bb12c",
".git/objects/22/c2f2edfeb7d63c01448b9f5c4a9f9fcccd3298": "3abd43b95b8240dea846808eaf945fef",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/eefd316aa63afe8fc4b6efe59eae2101c0bbb0": "d2d6b88577280a0581ea7273ef43eb32",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/a52f0d96d1c22b272b1116771e502a30c81107": "49b81e680cb2e5443803068aeed797ce",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/74660b94a91e31b20e5b3dcdccafb97b399bb4": "f5abaf3771fcbaafa4e229d2496df7a9",
".git/objects/30/b7d7f68dda8301cd5fb4b012a92cca2fd0757a": "3e06b903f4ba2a53a78156f8e8c5e08b",
".git/objects/36/2da60a92c235f1b0dba27fcc541c32c3049339": "4fdc7288aad8c2c6a5ca218e1b29a81d",
".git/objects/38/f341c912898b62f1503f8792a62b5cb133568a": "dfe7ae038e8ff75fe92fbd127e74f29a",
".git/objects/3b/e817c1bac627ed7961ae022a5ee6a5c57e63e2": "8b7cbc22d7e37370ba2e80aeac8e28ae",
".git/objects/42/1bf6f5ba709fbaad7d452c1fbf66167cdc0847": "0a4aeec88166d0e146aec28f725a8999",
".git/objects/43/5f19545f60737825aeaaecc5561ddfdbee25f4": "b050861ac0cd168303a1f1d26ff1e39a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e6298782982bd4bec9752b76a9bf4e32b701cd": "ae3ac414aef28a52950d6bc3babef31c",
".git/objects/4b/a0101bff26c41b6a8dae5c262e36e5c5f4adda": "3a7fe2a39736f64f8bd0d7fc33a7eb24",
".git/objects/4d/c9d144f74530643a6ab2c7b7f4cae7acb34f0a": "74e3b4f101f4740bae16d144a5207b9f",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/998903df61b10e56fb18e49eff57c5731757b1": "cd16503dcc8b680cd33bd15a79c244f1",
".git/objects/52/6bd5d3e3d05a7654baa069ea52b1b5ff69f817": "727998df55d735ec4e2c352f1b3399c5",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/56/3172c54e1b0582f589808fc7b76997e1b32020": "4f2b7f6856e84565c0ba42142bb958de",
".git/objects/5c/53e7d20d448ed0e55b35563a6e462d8904e53e": "cb306a39bf3de596b2d6202068c77b37",
".git/objects/5f/e4493302278c2787e2706d6936074c6357e98a": "998aefc2ef5b1c283e250f4ddeb86ab9",
".git/objects/62/e3643573250234d3616a4365ca534fb3772192": "8504274549da2e06d63b6b6da68efc5e",
".git/objects/63/7c2c673d4d2a3d1cdbd8a703f58540f1d38eb6": "2b0453f7c875b19f6a27771fd6b7af12",
".git/objects/66/f145a0e170795cc87abecb7b8f519b29d508d6": "2f3aea726da0a1f570f8697ff0504e38",
".git/objects/67/29bb86b08b3628c05ae012fa7615ffecce1312": "3213ecd60810f8db5d73357dbde87d41",
".git/objects/67/71ce3f4b948fb05580105babc4381e57ba270e": "2d7a617815a568cae9763ccd2aea7ab9",
".git/objects/67/990000d10c0a471a44f42503ad8e8769ecde7d": "68903201ab5d372376850e32f74cd3ac",
".git/objects/68/0117442564bc8d12f2f17afbd50e281cfe7bea": "84e3e40a8bdee0ed074c98a6248324c6",
".git/objects/6e/cd6e14ba67369d1deea3081c3d5e8b4e60479a": "52cc881b7fcd18e066418a97d19d0923",
".git/objects/6f/f2a5fa7446ff1de95b5fe8825e425ed7c4df50": "9358e1143d30cfcf8902eb944c327cfa",
".git/objects/70/330ee0ab0c35a37e53828a727bb9595c17f548": "75fcf2898432bd834a1e12d6981e857e",
".git/objects/74/30cefdb545af6e227d54d95df206da1214f184": "495f14138992bfca57f1c5070d32cdaa",
".git/objects/76/3585caa4fab363d15c87289f22efbad1974ef9": "e2340a1fd390043e57a0b8a17f2bf5a4",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/d8e6e9d1908077057036340a46428425e2fe47": "aca04c187d8d288c091d37d780f60f26",
".git/objects/80/0ac0e0421cab1301b7b4ef4a231e32e36a09eb": "af6aabbc7578dda36f6e5870f10379e8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/df0089ac6a81bfd337f08cc76ed6ecbac36a07": "7abad4d5c5466b084140672719acc81b",
".git/objects/8b/80c332f781f7b09abc5c7a57a8257a21f8795b": "bdb805691f945fed606b896acf5f78e4",
".git/objects/8b/d5c1508b092fba33a0968f23795907a4010852": "2dfe35cc2d24400399dabe2948f3e421",
".git/objects/90/0fabaf8c54c0ade0af51d72a66d5d337ddd473": "d7c775928182b90c448315b5c3ee55ff",
".git/objects/91/59755c66eff9e69abdb175782e2809614801a1": "9c8a4a50e880cc3099d638c0cb5336f4",
".git/objects/94/3d484f4ca8555c168c940d9b5bcc351b611ce1": "68d2cb8a7839f2697d1390f5bb9ed38e",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/98/3ff82e570beee2b277c39c6e8d9f6df64ba284": "ffca8ce1b3252b70c9cd40afdc85f26f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/cf7a0c834ea2372fae39360f7870745b89e9d2": "8d0eb37909fc8631d595104d16284a62",
".git/objects/b5/2b085d3fe2b429c77d1dce58400bbdb72cb6fd": "1245a2ea4a13db6e3db838f2409324db",
".git/objects/b6/64665d1814fe6edebba9dda85b64522d40696c": "b59e7833bbda947fb16dc7dc2eb3c73d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c9/142a1f3b930676a7417e323a2dffda9871e5d0": "d2e1f735669974fbf0ca9c78a2358286",
".git/objects/ca/940822d14964280fc7566a492df41d3a538efa": "eee97fd6119a071bf767b3d1ab378a81",
".git/objects/cb/95b8fbd6f9ebfdbb4cea4e2d6bc37be1896cbe": "4e591cbf2d504655a213f64f09a15e3d",
".git/objects/cb/f3c13cc12a850568e9900686410822917ec2fb": "6d84c762ceaba9c4998eba158f4d13fa",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/75f0f9e3ca2dbc33fe338a34509a7ea1b68799": "9d060d18976125b95035ca15bdb305e5",
".git/objects/cf/84a494b550d1b733e9bd38b3e2689927225ed4": "560baa9edc0f74bc8170a3aea2a1b1a1",
".git/objects/d2/3b8e0b3a4e95ec5ec4a127c47a94939c94e34c": "ec24c749277a321678041657c8b0526f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/1c25c70c24aada154f1ab7e6c09b131bda78d7": "4a99cd60bc4fcec8f55ac80220ef7154",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/eece814f73f810c25b18e1817f9945691f51dd": "279c576af65f68c579502d753a8d01ee",
".git/objects/e3/7baafd24a324a502b15e78f008d53d3ed3b3c3": "6e6fcfb0537ffacc7538a6f429978c74",
".git/objects/e4/043f2b65c2cfb0632543ac09aa0af1bfd63636": "a90641795b27b715dfea21fd866afee5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/cb34726bc9202eff4d2ae15786ea6351cc3f89": "c8236a888d291277f8559c9b6fafb1e1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/110e462d273d23d3d1d90c0309f23065095010": "ffa08356ccc4a80e6db7da4f89ec8b63",
".git/objects/ec/142c417d69af66719c873425d508bee32fca0b": "3bb40db251ba313aab110e78b4257ade",
".git/objects/ed/f795d07672abbb762d2e863541e6eaa4596f99": "503c3223d6c4e46c6e3ad6c86e39def9",
".git/objects/ee/ebed85a177311c2eeecb15c571d91b7c88c698": "46aa13a402003f92d7eb3afddb635ad1",
".git/objects/f4/eaefaf7b26631339afba18ec96cf5d5fcd051e": "bbe6f7343564d184e643e013dfa33461",
".git/objects/f5/0a627c3fc9ed265692639a916f4520a7ce3a2c": "0c9e72d30e37597d95764ea499897417",
".git/objects/fe/1e0acdfd2828bd57593cc6bdc228b794ba9157": "c3030057e3fd0701636d8ba695d649d6",
".git/objects/fe/e5cd112838a1a6891c1bfc162a44692119126a": "24d9f7b22da7f840396c2b7ae1179a47",
".git/refs/heads/main": "6cb089fd827d388e1f31781b8df6c970",
".git/refs/remotes/origin/main": "6cb089fd827d388e1f31781b8df6c970",
"assets/AssetManifest.json": "f42e79c7e7d873d2d6f71bb2abf457c9",
"assets/assets/images/develop.png": "11645b4508300260fd35475638fd602f",
"assets/assets/images/learn.png": "b738a425e450d574f0b4cf280cac3424",
"assets/assets/images/play.png": "6b7c4eb6dbd5bd350d198e1c11a30671",
"assets/assets/images/projects/1.gif": "02bc6d23f2007f81c0c8c021fdcb74cf",
"assets/assets/images/projects/2.gif": "6e3e1eca73ba3a9669996dd4a5b3b3bf",
"assets/assets/images/projects/3.gif": "cf5721fdbeb9b09b72361dc63abee0e6",
"assets/assets/images/projects/4.jpeg": "0d779a415e8203307eb4a0c63d5723d6",
"assets/assets/images/projects/5.jpeg": "99aa5e4c06f65c1d5ad86c9db51e57bd",
"assets/assets/images/projects/6.jpeg": "563048f821e840ebdbc7000e9c6b834a",
"assets/assets/images/social/email.png": "7a97194d3c075caa1a2f2fb89f793d4e",
"assets/assets/images/social/github.png": "46fd5ca3c4a5cbcad97fd9b11d845f48",
"assets/assets/images/social/instagram.png": "db9e28760b4c72ee51d5c2c7b0772823",
"assets/assets/images/social/linkedin-logo.png": "95e6c045dd5f8ea3ed14fc2de308d115",
"assets/assets/images/social/medium.png": "276ae11521896bd9a529e02aad79ff71",
"assets/assets/images/technology/aws.png": "77a6eeccdd20030ce58d2dcadfba0d38",
"assets/assets/images/technology/c%2523.png": "379edeefbd6beeeec335a0f50ec71dcf",
"assets/assets/images/technology/flutter.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/assets/images/technology/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/technology/googlecloud.png": "7d9ffba0f5c2a055333a5b12aa6e53cf",
"assets/assets/images/technology/mysql.png": "ae1a28781906e36af2aeec0708f37136",
"assets/assets/images/technology/plasticscm.png": "36a82a94dd0898fd3c9ba3fbaea55014",
"assets/assets/images/technology/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/images/technology/unity.png": "1f9547c903026a6ca5f0f04ce5df77f0",
"assets/assets/svg/guy.svg": "1d8a7c68f445bde4436595d8537e081b",
"assets/assets/svg/person.svg": "80ff3aaae4316428cb8c1ea701fc2747",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ee438c318830aa74463ab66e999594ea",
"assets/outputs/gif/desktop.gif": "52e4daec50892bd8b4da1d3f4dfa1f05",
"assets/outputs/gif/mobile.gif": "201990cae68f3d8d16a35a22500ab358",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "22f89010599e88f26d016eac13c97dc6",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"img.png": "4a39b10344d1a0a8480456b789cd7b6b",
"index.html": "8fc9e2af4fd21bd70b345603e8d6b086",
"/": "8fc9e2af4fd21bd70b345603e8d6b086",
"main.dart.js": "67f7d1bdf212d0a19f01ac60716464f3",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c",
"YD.png": "b27901ff36672d393d8004e316261055"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
