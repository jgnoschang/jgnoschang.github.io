'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9f316ccccb47a137d4e47a03a219e56d",
".git/config": "3796ef1592dff136cb6351cdbf46c3f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7c169bfe598d9ef80c1208135890629a",
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
".git/index": "4b1da11ad0c3aa8a887e934b0a36eb5a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "abba1124a25f0481906d241100ad2058",
".git/logs/refs/heads/main": "45cf431b09bd4a4010a45fc1c0855815",
".git/logs/refs/remotes/origin/main": "7df20842f699c695f771e23b26eecbcc",
".git/objects/04/912b2aa26cd442a3a212b0bbb25ddc2ed44126": "140e0787f9f1e1cd76fc8afa8e0cba02",
".git/objects/09/e0e0eb8e785c272f5107ca51775bcfc8d0dfe7": "6cac4b79ef04845703bbfcdef8dec9e9",
".git/objects/0a/30ea4636967b3c3c78fabdc1d52eef3b4b857e": "26dbec9df260680b6dbf72355bba2d97",
".git/objects/0c/1ce834fea99b68a122f56ea7f94ca752b63324": "914fae2ee1a5797fe6a4e698072e0f0b",
".git/objects/0c/e4908dc6e05ed84830b5bf1031b6b2945c71b7": "49afe639dae6108567d80e5fb8ce96a4",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/16/14d9b8352b2a31c2836e961e59c018193ac6d0": "cb7407006e2cf0f4e566bf00c1a3ecc7",
".git/objects/1e/d8955a6dd25317726f93bfae006030ae306897": "0a1ed29362635b68e8f5337967478e70",
".git/objects/21/2d0ad933c96ada41013096af4db49931ef6f02": "27e54044668afdf6195cf52531a8a195",
".git/objects/21/78d07703f6237560dda49be82638faa1bdf289": "d272faaa00980ab6c2cfa4a9858bb12c",
".git/objects/22/c2f2edfeb7d63c01448b9f5c4a9f9fcccd3298": "3abd43b95b8240dea846808eaf945fef",
".git/objects/24/5248f39035162f05bb61e03892de7ec1af140c": "e4a9b3ec3f354010abe0289cffff2e09",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/eefd316aa63afe8fc4b6efe59eae2101c0bbb0": "d2d6b88577280a0581ea7273ef43eb32",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/d95912967d1f9e78ed529bfc52e9ff62e12518": "d46af0d098cd4130f1167410e006d2dd",
".git/objects/2a/a52f0d96d1c22b272b1116771e502a30c81107": "49b81e680cb2e5443803068aeed797ce",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/74660b94a91e31b20e5b3dcdccafb97b399bb4": "f5abaf3771fcbaafa4e229d2496df7a9",
".git/objects/30/b7d7f68dda8301cd5fb4b012a92cca2fd0757a": "3e06b903f4ba2a53a78156f8e8c5e08b",
".git/objects/30/cad9fd8fe44fdda44514083fc4998aca700e57": "24e42292c3b2974a7c410d874a9c994c",
".git/objects/33/44f2dadfc24eb0a8832c1a056bed0122dae190": "ae7cfa12ae087e133082534a5e086f88",
".git/objects/36/2da60a92c235f1b0dba27fcc541c32c3049339": "4fdc7288aad8c2c6a5ca218e1b29a81d",
".git/objects/37/3aa8d57c852887210b3af09076b63bb51ac43d": "2f1bb82bc2f433c9beba51db84a63dab",
".git/objects/38/f341c912898b62f1503f8792a62b5cb133568a": "dfe7ae038e8ff75fe92fbd127e74f29a",
".git/objects/3a/ca7086442b29893dd9b6ac2b1b2795f806f3fe": "ffa78701b5d81ec44bfd27d3080a028d",
".git/objects/3b/e817c1bac627ed7961ae022a5ee6a5c57e63e2": "8b7cbc22d7e37370ba2e80aeac8e28ae",
".git/objects/42/1bf6f5ba709fbaad7d452c1fbf66167cdc0847": "0a4aeec88166d0e146aec28f725a8999",
".git/objects/43/5f19545f60737825aeaaecc5561ddfdbee25f4": "b050861ac0cd168303a1f1d26ff1e39a",
".git/objects/46/1d5df9e95b1a264e88540c6462e63779538cbd": "158c72a7f917e6a67e67588562c97108",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e6298782982bd4bec9752b76a9bf4e32b701cd": "ae3ac414aef28a52950d6bc3babef31c",
".git/objects/4b/a0101bff26c41b6a8dae5c262e36e5c5f4adda": "3a7fe2a39736f64f8bd0d7fc33a7eb24",
".git/objects/4d/c9d144f74530643a6ab2c7b7f4cae7acb34f0a": "74e3b4f101f4740bae16d144a5207b9f",
".git/objects/4e/70fb0c7ffec7e45005af87b916bef59fcf69e2": "0126af92718a0e200fb5f94cf33f6bb7",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/dfb7a68d6645934b4cb8d02d4f4116ee309be1": "413dd75c4400832ec021b6a73ec1abbb",
".git/objects/50/998903df61b10e56fb18e49eff57c5731757b1": "cd16503dcc8b680cd33bd15a79c244f1",
".git/objects/52/6bd5d3e3d05a7654baa069ea52b1b5ff69f817": "727998df55d735ec4e2c352f1b3399c5",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/54/3737ec9c847ec9c8e1cfdd9b64bcdf796bf00b": "5a31cda8ce2533441d3c8c34aa957bd8",
".git/objects/56/3172c54e1b0582f589808fc7b76997e1b32020": "4f2b7f6856e84565c0ba42142bb958de",
".git/objects/5a/2bbdabdae920a28f6831e09c20c55492644422": "6ec79e9daf4284dcf8fc787019ac1bd8",
".git/objects/5c/53e7d20d448ed0e55b35563a6e462d8904e53e": "cb306a39bf3de596b2d6202068c77b37",
".git/objects/5f/e4493302278c2787e2706d6936074c6357e98a": "998aefc2ef5b1c283e250f4ddeb86ab9",
".git/objects/61/60c39cd34405b0554770bc3f56e5f61d2d7a00": "bd23ffa4652d027f3836d1c0a33c5fc8",
".git/objects/62/e3643573250234d3616a4365ca534fb3772192": "8504274549da2e06d63b6b6da68efc5e",
".git/objects/63/7c2c673d4d2a3d1cdbd8a703f58540f1d38eb6": "2b0453f7c875b19f6a27771fd6b7af12",
".git/objects/66/d4ca071d662e708aff947bb317e01e64a2823f": "c266522109801e8e55cef6c9c7404703",
".git/objects/66/f145a0e170795cc87abecb7b8f519b29d508d6": "2f3aea726da0a1f570f8697ff0504e38",
".git/objects/67/29bb86b08b3628c05ae012fa7615ffecce1312": "3213ecd60810f8db5d73357dbde87d41",
".git/objects/67/71ce3f4b948fb05580105babc4381e57ba270e": "2d7a617815a568cae9763ccd2aea7ab9",
".git/objects/67/990000d10c0a471a44f42503ad8e8769ecde7d": "68903201ab5d372376850e32f74cd3ac",
".git/objects/68/0117442564bc8d12f2f17afbd50e281cfe7bea": "84e3e40a8bdee0ed074c98a6248324c6",
".git/objects/69/5d94b79b39c6ade0140e137dd17497c3d12698": "5b37e4fcb184ba0defcb48ebdd8af30d",
".git/objects/6e/cd6e14ba67369d1deea3081c3d5e8b4e60479a": "52cc881b7fcd18e066418a97d19d0923",
".git/objects/6f/f2a5fa7446ff1de95b5fe8825e425ed7c4df50": "9358e1143d30cfcf8902eb944c327cfa",
".git/objects/70/330ee0ab0c35a37e53828a727bb9595c17f548": "75fcf2898432bd834a1e12d6981e857e",
".git/objects/74/30cefdb545af6e227d54d95df206da1214f184": "495f14138992bfca57f1c5070d32cdaa",
".git/objects/76/3585caa4fab363d15c87289f22efbad1974ef9": "e2340a1fd390043e57a0b8a17f2bf5a4",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/f33be74fbaf5d3968baa61cde275cd45c917d3": "2317c739c525670c2a59ad1d98ff64c1",
".git/objects/7f/d8e6e9d1908077057036340a46428425e2fe47": "aca04c187d8d288c091d37d780f60f26",
".git/objects/80/0ac0e0421cab1301b7b4ef4a231e32e36a09eb": "af6aabbc7578dda36f6e5870f10379e8",
".git/objects/80/d42ec85a7afd929b4db4da05f091dbc934a27e": "382203df201105ca43590d85c357d9b9",
".git/objects/83/7f3874366806364ca1099bfcf99878a43b4980": "ca24044d6a2a460368f7b17dbdaf7423",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/df0089ac6a81bfd337f08cc76ed6ecbac36a07": "7abad4d5c5466b084140672719acc81b",
".git/objects/8b/80c332f781f7b09abc5c7a57a8257a21f8795b": "bdb805691f945fed606b896acf5f78e4",
".git/objects/8b/d5c1508b092fba33a0968f23795907a4010852": "2dfe35cc2d24400399dabe2948f3e421",
".git/objects/90/0fabaf8c54c0ade0af51d72a66d5d337ddd473": "d7c775928182b90c448315b5c3ee55ff",
".git/objects/91/23aa872d624f404eb6d52058c81a1da18f09e7": "2a90381d77fb227922b49f097f620f99",
".git/objects/91/59755c66eff9e69abdb175782e2809614801a1": "9c8a4a50e880cc3099d638c0cb5336f4",
".git/objects/91/e49acb4aabca04180315e208fa185e2ec7e432": "274d4d33589ba96481fa7be0811acbf8",
".git/objects/94/3d484f4ca8555c168c940d9b5bcc351b611ce1": "68d2cb8a7839f2697d1390f5bb9ed38e",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/98/3ff82e570beee2b277c39c6e8d9f6df64ba284": "ffca8ce1b3252b70c9cd40afdc85f26f",
".git/objects/99/0d7457930069ce51443868a27c197d382802c4": "7603dacb964c50f19725a1867f4fa13c",
".git/objects/9b/57df246e85aa11f4ce48d1d91082b36d5c8e5e": "49d23ce845f1fd994b83b232b4a7dd3d",
".git/objects/9d/d662d7b8086a57aae077f3d31899fae2dc3ef5": "eed7b0f8da8a7f1c3e885d6123f90d3f",
".git/objects/a1/37cddc91ed9c9819ed2262ba25743b8dfb9fd1": "e84e6194cd3d9376f8ca01f9dbabab03",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/a4/ee0e4ad900b815be9bd4442bb64f1e3a1b647e": "b240b52b98989dc84bae44b506b1d98b",
".git/objects/a9/516c954191b605a25a35fee67d5be1c429c740": "1c6afac673148c0e06117d5cb5b69a9f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/4f796a395b07aa03ee99bd4990694ed95add8b": "f5e6db464ba72878de68a800b194f38b",
".git/objects/ab/89ce063aad4a8721f627b82e5354ed5d9f3745": "744dbbb9f0163e311a1890a5ca3c827e",
".git/objects/ac/cf7a0c834ea2372fae39360f7870745b89e9d2": "8d0eb37909fc8631d595104d16284a62",
".git/objects/b1/4f25a47af4d3a69f0e31cf35a6ad79fb5cfebc": "9d6ca4e321d2bda8d207df07bf6417e7",
".git/objects/b1/d297ba582efa490af289942d16c5dd20ed0534": "579924bdf41f6da9e64eb5a7a0ae49cf",
".git/objects/b5/2b085d3fe2b429c77d1dce58400bbdb72cb6fd": "1245a2ea4a13db6e3db838f2409324db",
".git/objects/b6/64665d1814fe6edebba9dda85b64522d40696c": "b59e7833bbda947fb16dc7dc2eb3c73d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/acd8f29a39af13e185491fac0cd3315e722ce9": "b172614949f3a692bfdfbc7409b4b638",
".git/objects/bb/bc4cc466e9ea6e856e7ec0c490f2b8855a9717": "4d78cb51646c7012426d490ac69f09a4",
".git/objects/c4/a2977e0b823257701f5c0257bb6603dfeac117": "1e3682e07ceb73980a37435d54ce9988",
".git/objects/c9/142a1f3b930676a7417e323a2dffda9871e5d0": "d2e1f735669974fbf0ca9c78a2358286",
".git/objects/ca/940822d14964280fc7566a492df41d3a538efa": "eee97fd6119a071bf767b3d1ab378a81",
".git/objects/cb/95b8fbd6f9ebfdbb4cea4e2d6bc37be1896cbe": "4e591cbf2d504655a213f64f09a15e3d",
".git/objects/cb/f3c13cc12a850568e9900686410822917ec2fb": "6d84c762ceaba9c4998eba158f4d13fa",
".git/objects/cc/2bb55d97579bd14e04795d72ea9f14887a5a05": "6f3231c73f24072d057e6d0f77516601",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/6f7c0895d5dda06222e768000cd6bf9fae7382": "f99ab191c8241071a25afb73b66d760f",
".git/objects/cd/75f0f9e3ca2dbc33fe338a34509a7ea1b68799": "9d060d18976125b95035ca15bdb305e5",
".git/objects/cf/84a494b550d1b733e9bd38b3e2689927225ed4": "560baa9edc0f74bc8170a3aea2a1b1a1",
".git/objects/d0/091aedd50e274f06f1eaca56fcad64d87e2e71": "71d287ae2ebc826b1d15fe9e584e2df7",
".git/objects/d0/10cf3c547459bfe7d5ea24272501bf1ff0f240": "e3fdd115d7c57cb238c622824239e9a8",
".git/objects/d2/3b8e0b3a4e95ec5ec4a127c47a94939c94e34c": "ec24c749277a321678041657c8b0526f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/2344f6b626f989ab61accf83401e4f642be64a": "fcb01a21d67781cd7b7fdbae514ebe00",
".git/objects/dd/1c25c70c24aada154f1ab7e6c09b131bda78d7": "4a99cd60bc4fcec8f55ac80220ef7154",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/388f7a0194115336eedc0d648015f46bb10afc": "84d818eeda440480161adba89ad3bc5c",
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
".git/objects/ef/c3f8f270e685edca5ade8ac9b0e7867600384f": "efc2adc5d23f017ed659db277ffde22a",
".git/objects/f4/eaefaf7b26631339afba18ec96cf5d5fcd051e": "bbe6f7343564d184e643e013dfa33461",
".git/objects/f5/0a627c3fc9ed265692639a916f4520a7ce3a2c": "0c9e72d30e37597d95764ea499897417",
".git/objects/f5/ab19cb4618339eb06faad4b0cef6be2c353ba6": "518b87d2bb29dc08b13d1250666ea94d",
".git/objects/fb/2c96a0d78ee8ee2e6abbc6a817d267e5602f53": "acabef4e5c27a7ec5ad6c0bc3b060f25",
".git/objects/fb/e95e4113023f18c5a6aa90ed71ebc85b286e58": "5aa7720a23c0a323c6e2a28f942f35df",
".git/objects/fe/1e0acdfd2828bd57593cc6bdc228b794ba9157": "c3030057e3fd0701636d8ba695d649d6",
".git/objects/fe/e5cd112838a1a6891c1bfc162a44692119126a": "24d9f7b22da7f840396c2b7ae1179a47",
".git/objects/ff/6293fc0fb1773cd2a08a8c292dbd28b4466cc0": "5bfd766d0b9319d9609a6cf48b0196e5",
".git/refs/heads/main": "ee5a012e796ec91ea99cf3c219b15a15",
".git/refs/remotes/origin/main": "ee5a012e796ec91ea99cf3c219b15a15",
"assets/AssetManifest.json": "f42e79c7e7d873d2d6f71bb2abf457c9",
"assets/assets/images/develop.png": "11645b4508300260fd35475638fd602f",
"assets/assets/images/learn.png": "ed4ab1b5be47a9be689f904d4b4e32d2",
"assets/assets/images/play.png": "6b7c4eb6dbd5bd350d198e1c11a30671",
"assets/assets/images/projects/1.gif": "02bc6d23f2007f81c0c8c021fdcb74cf",
"assets/assets/images/projects/2.gif": "6e3e1eca73ba3a9669996dd4a5b3b3bf",
"assets/assets/images/projects/3.gif": "c7fcfad0c00f27acaa4826cb1863eab5",
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
"index.html": "19f7116e82528998e5986ae30f28e68f",
"/": "19f7116e82528998e5986ae30f28e68f",
"main.dart.js": "82a162b0f942091fadbd048960bc5e0b",
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
