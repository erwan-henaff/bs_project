const axios = require('axios');

let infoUser = {"_id":"5e4a8c3741a9c91ce18729ac","tag":"#9RGYGP20P","name":"umi no tamashi","nameColor":"0xff4ddba2","trophies":[{"_id":"5e4ba894459a71106d5b5a5c","date":"2020-02-18T09:04:20.020Z"},{"_id":"5e4ba894459a71106d5b5a5b","date":"2020-02-18T09:04:20.034Z","trophies":17737},{"_id":"5e4ba95c459a71106d5b5bc2","date":"2020-02-18T09:07:40.874Z","trophies":17737},{"_id":"5e4bca612cfedb13a9586fbb","date":"2020-02-18T11:28:33.665Z","trophies":17747},{"_id":"5e4bcb4e2cfedb13a958714a","date":"2020-02-18T11:32:30.898Z","trophies":17746},{"_id":"5e4bf7c3880f6e1c1e5101ae","date":"2020-02-18T14:42:11.822Z","trophies":17746},{"_id":"5e4bfeb37b688120d6edd3c1","date":"2020-02-18T15:11:47.636Z","trophies":17746},{"_id":"5e4c458b320f7a0d04423d74","date":"2020-02-18T20:14:03.881Z","trophies":17782},{"_id":"5e4c5c82320f7a0d04423f93","date":"2020-02-18T21:52:02.631Z","trophies":17839},{"_id":"5e4d004e284959198cfe596f","date":"2020-02-19T09:30:54.583Z","trophies":17862},{"_id":"5e4d26c48452c327a2e89ade","date":"2020-02-19T12:15:00.274Z","trophies":17873},{"_id":"5e4d2c34b21aa62c3917a609","date":"2020-02-19T12:38:12.075Z","trophies":17873},{"_id":"5e4d398de0b16634a6c9191d","date":"2020-02-19T13:35:09.996Z","trophies":17873},{"_id":"5e4e43ae44366f1342b68954","date":"2020-02-20T08:30:38.549Z","trophies":18053},{"_id":"5e538f8e5a09580af8b28c89","date":"2020-02-24T08:55:42.408Z","trophies":17725},{"_id":"5e5395677bebe711eb8fff9d","date":"2020-02-24T09:20:39.677Z","trophies":17725},{"_id":"5e53cd295260b014dcde5b41","date":"2020-02-24T13:18:33.987Z","trophies":17725},{"_id":"5e53cddba7def915939afe74","date":"2020-02-24T13:21:31.493Z","trophies":17725},{"_id":"5e53cf696defc616bb6b55af","date":"2020-02-24T13:28:09.837Z","trophies":17725},{"_id":"5e5512f2bc4d4121b43a23ef","date":"2020-02-25T12:28:34.745Z","trophies":17678},{"_id":"5e5515a6492f702349f69342","date":"2020-02-25T12:40:06.398Z","trophies":17678},{"_id":"5e55161d0b97d02397b8ffd2","date":"2020-02-25T12:42:05.457Z","trophies":17678},{"_id":"5e5516625f2d0323d9b5d787","date":"2020-02-25T12:43:14.985Z","trophies":17678},{"_id":"5e551ea1f3fa0c0df80bb9c4","date":"2020-02-25T13:18:25.377Z","trophies":17678},{"_id":"5e5521e76be9e11198b4fd95","date":"2020-02-25T13:32:23.900Z","trophies":17678},{"_id":"5e552d5839eb0c179d6ed99c","date":"2020-02-25T14:21:12.007Z","trophies":17678},{"_id":"5e552db039eb0c179d6edde5","date":"2020-02-25T14:22:40.273Z","trophies":17678},{"_id":"5e552fdbd26be919e3ca2a07","date":"2020-02-25T14:31:55.110Z","trophies":17678},{"_id":"5e553351d26be919e3ca2e96","date":"2020-02-25T14:46:41.567Z","trophies":17678},{"_id":"5e553b28e82e2820016a80a6","date":"2020-02-25T15:20:08.175Z","trophies":17678},{"_id":"5e562d1c3ed2ca0b66ad5688","date":"2020-02-26T08:32:28.422Z","trophies":17715},{"_id":"5e562d953ed2ca0b66ad5bd0","date":"2020-02-26T08:34:29.147Z","trophies":17715},{"_id":"5e56311851788411864f1d7b","date":"2020-02-26T08:49:28.620Z","trophies":17715},{"_id":"5e56580e2518f31ad69b991c","date":"2020-02-26T11:35:42.622Z","trophies":17715},{"_id":"5e5658112518f31ad69b9ecd","date":"2020-02-26T11:35:45.298Z","trophies":17715},{"_id":"5e56757597143027e58a45ce","date":"2020-02-26T13:41:09.699Z","trophies":17715},{"_id":"5e568abbfc90f3318dfb97ce","date":"2020-02-26T15:11:55.030Z","trophies":17715},{"_id":"5e569137fc90f3318dfb9de8","date":"2020-02-26T15:39:35.817Z","trophies":17715},{"_id":"5e578b95e4e4d513530e6faf","date":"2020-02-27T09:27:49.749Z","trophies":17767},{"_id":"5e578bbfe4e4d513530e75cf","date":"2020-02-27T09:28:31.432Z","trophies":17767},{"_id":"5e578c44e4e4d513530e7c12","date":"2020-02-27T09:30:44.357Z","trophies":17767},{"_id":"5e579bd4471cba1b7dc32dab","date":"2020-02-27T10:37:08.579Z","trophies":17767},{"_id":"5e579bf5471cba1b7dc32fa5","date":"2020-02-27T10:37:41.237Z","trophies":17767},{"_id":"5e579d449ae8aa1c24a630e9","date":"2020-02-27T10:43:16.260Z","trophies":17767},{"_id":"5e579d669ae8aa1c24a632ed","date":"2020-02-27T10:43:50.048Z","trophies":17767},{"_id":"5e579e89e3bc020b43c357bb","date":"2020-02-27T10:48:41.755Z","trophies":17767},{"_id":"5e5cc5d39e71230d282fc2d9","date":"2020-03-02T08:37:39.486Z","trophies":18193},{"_id":"5e5cdd98d06c631962bbe52d","date":"2020-03-02T10:19:04.112Z","trophies":18193},{"_id":"5e5ce0eaf416cb1ac80ab914","date":"2020-03-02T10:33:14.401Z","trophies":18193},{"_id":"5e5ce111f416cb1ac80abb71","date":"2020-03-02T10:33:53.775Z","trophies":18193},{"_id":"5e5cef280b797f0d94875037","date":"2020-03-02T11:34:00.736Z","trophies":18193},{"_id":"5e5e2d00da032d121ba06568","date":"2020-03-03T10:10:08.800Z","trophies":18262},{"_id":"5e5e30e1d0035e17ccf2a3c3","date":"2020-03-03T10:26:41.616Z","trophies":18262},{"_id":"5e5e31dbdd81bc0f6317e685","date":"2020-03-03T10:30:51.162Z","trophies":18262},{"_id":"5e5e31f1dd81bc0f6317e8e7","date":"2020-03-03T10:31:13.751Z","trophies":18262},{"_id":"5e5e32de5442a4105f6fc7dd","date":"2020-03-03T10:35:10.061Z","trophies":18262},{"_id":"5e5e340c63923610bec1b807","date":"2020-03-03T10:40:12.991Z","trophies":18262},{"_id":"5e5e351696cb3310ffefe5b3","date":"2020-03-03T10:44:38.812Z","trophies":18262},{"_id":"5e5e359296cb3310ffefe847","date":"2020-03-03T10:46:42.274Z","trophies":18262},{"_id":"5e5e359396cb3310ffefeafe","date":"2020-03-03T10:46:43.251Z","trophies":18262},{"_id":"5e5e362996cb3310ffefedd8","date":"2020-03-03T10:49:13.282Z","trophies":18262},{"_id":"5e5f6c33a1dd9e0c864f7455","date":"2020-03-04T08:52:03.580Z","trophies":18317},{"_id":"5e60d598b254e5193e23ff43","date":"2020-03-05T10:34:00.862Z","trophies":18328},{"_id":"5e60d9331907390ccd08ebf8","date":"2020-03-05T10:49:23.095Z","trophies":18328},{"_id":"5e60d93d1907390ccd08ef5e","date":"2020-03-05T10:49:33.145Z","trophies":18328},{"_id":"5e60d96c421a2b0d3f13b4b6","date":"2020-03-05T10:50:20.496Z","trophies":18328},{"_id":"5e66026f0d2a560df328f2a3","date":"2020-03-09T08:46:39.892Z","trophies":17920},{"_id":"5e663c899bda110d6b16703c","date":"2020-03-09T12:54:33.647Z","trophies":17920},{"_id":"5e66486f0e72e714b570bf57","date":"2020-03-09T13:45:19.131Z","trophies":17920},{"_id":"5e6648c99db2e11524463dcd","date":"2020-03-09T13:46:49.823Z","trophies":17920},{"_id":"5e6649760edc431571ddb3dd","date":"2020-03-09T13:49:42.104Z","trophies":17920},{"_id":"5e6649d8448ee115be5218f0","date":"2020-03-09T13:51:20.975Z","trophies":17920},{"_id":"5e665c0ef23112155b98dbaf","date":"2020-03-09T15:09:02.567Z","trophies":17920},{"_id":"5e6751de68c45a0c96b97e83","date":"2020-03-10T08:37:50.578Z","trophies":17859},{"_id":"5e67af40ba96e9311ad8dfa9","date":"2020-03-10T15:16:16.556Z","trophies":17859},{"_id":"5e68a85b3f87d80ed3c9f8ec","date":"2020-03-11T08:59:07.589Z","trophies":17822},{"_id":"5e68a89afe9b142ed4d16850","date":"2020-03-11T09:00:10.707Z","trophies":17822},{"_id":"5e68ef15bc8b9b14dfc40285","date":"2020-03-11T14:00:53.581Z","trophies":17822},{"_id":"5e68fe8e8f3ad6227084c7cf","date":"2020-03-11T15:06:54.927Z","trophies":17822},{"_id":"5e68fecd8f3ad6227084cd17","date":"2020-03-11T15:07:57.087Z","trophies":17822},{"_id":"5e6905a848040627cc4bb906","date":"2020-03-11T15:37:12.947Z","trophies":17822},{"_id":"5e6905f61d2c5c2811112851","date":"2020-03-11T15:38:30.084Z","trophies":17822},{"_id":"5e69061b6ce714283a834d37","date":"2020-03-11T15:39:07.432Z","trophies":17822},{"_id":"5e69066a2cf4f0289f50cfc7","date":"2020-03-11T15:40:26.660Z","trophies":17822},{"_id":"5e6a01b30c2a2b0e39b5ac95","date":"2020-03-12T09:32:35.578Z","trophies":18037},{"_id":"5e6a0462cc22d90fb718c476","date":"2020-03-12T09:44:02.920Z","trophies":18037},{"_id":"5e6a0d7c3c49db1694cd4310","date":"2020-03-12T10:22:52.261Z","trophies":18037},{"_id":"5e6a0dbfcedd9616c165892c","date":"2020-03-12T10:23:59.231Z","trophies":18037},{"_id":"5e6a0e92c08cae18e2915613","date":"2020-03-12T10:27:30.589Z","trophies":18037},{"_id":"5e6a0ec3d7926b190ac1cb81","date":"2020-03-12T10:28:19.272Z","trophies":18037},{"_id":"5e6a5d538a08ca41dd17fb4e","date":"2020-03-12T16:03:31.062Z","trophies":18037},{"_id":"5e6a5e33483304439e753dec","date":"2020-03-12T16:07:15.728Z","trophies":18037},{"_id":"5e6f5e98c41393126e985f30","date":"2020-03-16T11:10:16.373Z","trophies":18190},{"_id":"5e6f6efbd6c2921893cfbe05","date":"2020-03-16T12:20:11.708Z","trophies":18190},{"_id":"5e6f6fec7411191b02639c96","date":"2020-03-16T12:24:12.981Z","trophies":18190},{"_id":"5e6f71c9ed1f6a1bfd40a2f2","date":"2020-03-16T12:32:09.573Z","trophies":18190},{"_id":"5e6f7206add1a21c28252681","date":"2020-03-16T12:33:10.471Z","trophies":18190},{"_id":"5e6f723d30212e1c4c1ab736","date":"2020-03-16T12:34:05.269Z","trophies":18190},{"_id":"5e6f8de257b17c1c75664a14","date":"2020-03-16T14:32:02.993Z","trophies":18190},{"_id":"5e6f915a0e831e2912945172","date":"2020-03-16T14:46:50.429Z","trophies":18190},{"_id":"5e6f91c9756e70295d61eda0","date":"2020-03-16T14:48:41.875Z","trophies":18190},{"_id":"5e6f92dd566fb229dcb28b74","date":"2020-03-16T14:53:17.592Z","trophies":18190},{"_id":"5e6facf1ed158d107e9874b2","date":"2020-03-16T16:44:33.603Z","trophies":18190},{"_id":"5e6fd9f5f130840cbc5109c5","date":"2020-03-16T19:56:37.374Z","trophies":18196},{"_id":"5e6fda00f130840cbc511260","date":"2020-03-16T19:56:48.783Z","trophies":18196},{"_id":"5e70a5fd5b736311ac34929b","date":"2020-03-17T10:27:09.086Z","trophies":18314},{"_id":"5e70b9ea7474a21c42806dec","date":"2020-03-17T11:52:10.843Z","trophies":18317},{"_id":"5e70be228bde5f1e0dd7ddc6","date":"2020-03-17T12:10:10.868Z","trophies":18317},{"_id":"5e70bf50817c301e9c9e91cb","date":"2020-03-17T12:15:12.693Z","trophies":18317},{"_id":"5e71fab90a2fff0e82bb0ca1","date":"2020-03-18T10:40:57.975Z","trophies":18433},{"_id":"5e722dc8a8fa0e1995609354","date":"2020-03-18T14:18:48.936Z","trophies":18436},{"_id":"5e787d80b04cc713a9c1e744","date":"2020-03-23T09:12:32.133Z","trophies":18031},{"_id":"5e789f39eab0592060e21d82","date":"2020-03-23T11:36:25.187Z","trophies":18031},{"_id":"5e789ff847f87720de47a71f","date":"2020-03-23T11:39:36.470Z","trophies":18031},{"_id":"5e78b0b3a4873e2751c5c0c4","date":"2020-03-23T12:50:59.840Z","trophies":18031},{"_id":"5e78b12aa4873e2751c5cb1a","date":"2020-03-23T12:52:58.473Z","trophies":18031},{"_id":"5e78b24d47d28127ff02ea09","date":"2020-03-23T12:57:49.686Z","trophies":18031},{"_id":"5e78b46b9df675288c76e2af","date":"2020-03-23T13:06:51.739Z","trophies":18031},{"_id":"5e78b608dbe81529665c0e55","date":"2020-03-23T13:13:44.457Z","trophies":18031},{"_id":"5e78b719d137662a0dc510e9","date":"2020-03-23T13:18:17.126Z","trophies":18031},{"_id":"5e78b7a2ad06602a56d37062","date":"2020-03-23T13:20:34.512Z","trophies":18031},{"_id":"5e78b7d9cde4a02a7ed4bd61","date":"2020-03-23T13:21:29.508Z","trophies":18031},{"_id":"5e78ba7462cab22bb68bcbea","date":"2020-03-23T13:32:36.512Z","trophies":18031},{"_id":"5e78d01033e36b1142bbdaa4","date":"2020-03-23T15:04:48.049Z","trophies":18034},{"_id":"5e78d93614d9b6150b1149e1","date":"2020-03-23T15:43:50.088Z","trophies":18034},{"_id":"5e78dbb68170fd15faaa437b","date":"2020-03-23T15:54:30.745Z","trophies":18034},{"_id":"5e78dbd98170fd15faaa4f59","date":"2020-03-23T15:55:05.469Z","trophies":18034},{"_id":"5e7b42fe7104e91d89312857","date":"2020-03-25T11:39:42.182Z","trophies":18082},{"_id":"5e7c7d1e4fcfb311190f6bcf","date":"2020-03-26T09:59:58.297Z","trophies":18270},{"_id":"5e7c7d214fcfb311190f783d","date":"2020-03-26T10:00:01.646Z","trophies":18270},{"_id":"5e7c7fff247073121d6e5ecd","date":"2020-03-26T10:12:15.891Z","trophies":18270},{"_id":"5e7c80a26a540a1257e5933b","date":"2020-03-26T10:14:58.853Z","trophies":18270},{"_id":"5e7c815dcde75912fe794fe9","date":"2020-03-26T10:18:05.937Z","trophies":18270},{"_id":"5e7c81cefbc5131333898dcf","date":"2020-03-26T10:19:58.701Z","trophies":18270},{"_id":"5e7c826f5520b013b8dddfee","date":"2020-03-26T10:22:39.819Z","trophies":18270},{"_id":"5e7c8295dd2c1d13f2e14de0","date":"2020-03-26T10:23:17.696Z","trophies":18270},{"_id":"5e7c84e507f1e714ad7daa3d","date":"2020-03-26T10:33:09.486Z","trophies":18270},{"_id":"5e7c854ff193b215039e38eb","date":"2020-03-26T10:34:55.696Z","trophies":18270},{"_id":"5e7c8575a217021551568939","date":"2020-03-26T10:35:33.748Z","trophies":18270},{"_id":"5e7c8789d9717e15cfc2422b","trophies":18270,"date":"2020-03-26T10:44:25.030Z"}],"highestTrophies":[{"_id":"5e4ba894459a71106d5b5a5e","date":"2020-02-18T09:04:20.020Z"},{"_id":"5e4bca612cfedb13a9586fbc","date":"2020-02-18T11:28:33.665Z","highestTrophies":18587},{"_id":"5e4bcb4e2cfedb13a958714b","date":"2020-02-18T11:32:30.898Z","highestTrophies":18587},{"_id":"5e4bf7c3880f6e1c1e5101af","date":"2020-02-18T14:42:11.822Z","highestTrophies":18587},{"_id":"5e4bfeb37b688120d6edd3c2","date":"2020-02-18T15:11:47.637Z","highestTrophies":18587},{"_id":"5e4c458b320f7a0d04423d75","date":"2020-02-18T20:14:03.882Z","highestTrophies":18587},{"_id":"5e4c5c82320f7a0d04423f94","date":"2020-02-18T21:52:02.631Z","highestTrophies":18587},{"_id":"5e4d004e284959198cfe5970","date":"2020-02-19T09:30:54.584Z","highestTrophies":18587},{"_id":"5e4d26c48452c327a2e89adf","date":"2020-02-19T12:15:00.274Z","highestTrophies":18587},{"_id":"5e4d2c34b21aa62c3917a60a","date":"2020-02-19T12:38:12.075Z","highestTrophies":18587},{"_id":"5e4d398de0b16634a6c9191e","date":"2020-02-19T13:35:09.996Z","highestTrophies":18587},{"_id":"5e4e43ae44366f1342b68955","date":"2020-02-20T08:30:38.550Z","highestTrophies":18587},{"_id":"5e538f8e5a09580af8b28c8a","date":"2020-02-24T08:55:42.409Z","highestTrophies":18658},{"_id":"5e5395677bebe711eb8fff9e","date":"2020-02-24T09:20:39.678Z","highestTrophies":18658},{"_id":"5e53cd295260b014dcde5b42","date":"2020-02-24T13:18:33.987Z","highestTrophies":18658},{"_id":"5e53cddba7def915939afe75","date":"2020-02-24T13:21:31.494Z","highestTrophies":18658},{"_id":"5e53cf696defc616bb6b55b0","date":"2020-02-24T13:28:09.838Z","highestTrophies":18658},{"_id":"5e5512f2bc4d4121b43a23f0","date":"2020-02-25T12:28:34.746Z","highestTrophies":18658},{"_id":"5e5515a6492f702349f69343","date":"2020-02-25T12:40:06.399Z","highestTrophies":18658},{"_id":"5e55161d0b97d02397b8ffd3","date":"2020-02-25T12:42:05.458Z","highestTrophies":18658},{"_id":"5e5516625f2d0323d9b5d788","date":"2020-02-25T12:43:14.987Z","highestTrophies":18658},{"_id":"5e551ea1f3fa0c0df80bb9c5","date":"2020-02-25T13:18:25.378Z","highestTrophies":18658},{"_id":"5e5521e76be9e11198b4fd96","date":"2020-02-25T13:32:23.901Z","highestTrophies":18658},{"_id":"5e552d5839eb0c179d6ed99d","date":"2020-02-25T14:21:12.007Z","highestTrophies":18658},{"_id":"5e552db039eb0c179d6edde6","date":"2020-02-25T14:22:40.273Z","highestTrophies":18658},{"_id":"5e552fdbd26be919e3ca2a08","date":"2020-02-25T14:31:55.110Z","highestTrophies":18658},{"_id":"5e553351d26be919e3ca2e97","date":"2020-02-25T14:46:41.567Z","highestTrophies":18658},{"_id":"5e553b28e82e2820016a80a7","date":"2020-02-25T15:20:08.176Z","highestTrophies":18658},{"_id":"5e562d1c3ed2ca0b66ad5689","date":"2020-02-26T08:32:28.422Z","highestTrophies":18658},{"_id":"5e562d953ed2ca0b66ad5bd1","date":"2020-02-26T08:34:29.147Z","highestTrophies":18658},{"_id":"5e56311851788411864f1d7c","date":"2020-02-26T08:49:28.620Z","highestTrophies":18658},{"_id":"5e56580e2518f31ad69b991d","date":"2020-02-26T11:35:42.622Z","highestTrophies":18658},{"_id":"5e5658112518f31ad69b9ece","date":"2020-02-26T11:35:45.299Z","highestTrophies":18658},{"_id":"5e56757597143027e58a45cf","date":"2020-02-26T13:41:09.699Z","highestTrophies":18658},{"_id":"5e568abbfc90f3318dfb97cf","date":"2020-02-26T15:11:55.030Z","highestTrophies":18658},{"_id":"5e569137fc90f3318dfb9de9","date":"2020-02-26T15:39:35.817Z","highestTrophies":18658},{"_id":"5e578b95e4e4d513530e6fb0","date":"2020-02-27T09:27:49.749Z","highestTrophies":18658},{"_id":"5e578bbfe4e4d513530e75d0","date":"2020-02-27T09:28:31.432Z","highestTrophies":18658},{"_id":"5e578c44e4e4d513530e7c13","date":"2020-02-27T09:30:44.358Z","highestTrophies":18658},{"_id":"5e579bd4471cba1b7dc32dac","date":"2020-02-27T10:37:08.580Z","highestTrophies":18658},{"_id":"5e579bf5471cba1b7dc32fa6","date":"2020-02-27T10:37:41.237Z","highestTrophies":18658},{"_id":"5e579d449ae8aa1c24a630ea","date":"2020-02-27T10:43:16.262Z","highestTrophies":18658},{"_id":"5e579d669ae8aa1c24a632ee","date":"2020-02-27T10:43:50.049Z","highestTrophies":18658},{"_id":"5e579e89e3bc020b43c357bc","date":"2020-02-27T10:48:41.756Z","highestTrophies":18658},{"_id":"5e5cc5d39e71230d282fc2da","date":"2020-03-02T08:37:39.486Z","highestTrophies":18658},{"_id":"5e5cdd98d06c631962bbe52e","date":"2020-03-02T10:19:04.113Z","highestTrophies":18658},{"_id":"5e5ce0eaf416cb1ac80ab915","date":"2020-03-02T10:33:14.402Z","highestTrophies":18658},{"_id":"5e5ce111f416cb1ac80abb72","date":"2020-03-02T10:33:53.775Z","highestTrophies":18658},{"_id":"5e5cef280b797f0d94875038","date":"2020-03-02T11:34:00.737Z","highestTrophies":18658},{"_id":"5e5e2d00da032d121ba06569","date":"2020-03-03T10:10:08.800Z","highestTrophies":18658},{"_id":"5e5e30e1d0035e17ccf2a3c4","date":"2020-03-03T10:26:41.616Z","highestTrophies":18658},{"_id":"5e5e31dbdd81bc0f6317e686","date":"2020-03-03T10:30:51.162Z","highestTrophies":18658},{"_id":"5e5e31f1dd81bc0f6317e8e8","date":"2020-03-03T10:31:13.751Z","highestTrophies":18658},{"_id":"5e5e32de5442a4105f6fc7de","date":"2020-03-03T10:35:10.061Z","highestTrophies":18658},{"_id":"5e5e340c63923610bec1b808","date":"2020-03-03T10:40:12.992Z","highestTrophies":18658},{"_id":"5e5e351696cb3310ffefe5b4","date":"2020-03-03T10:44:38.812Z","highestTrophies":18658},{"_id":"5e5e359296cb3310ffefe848","date":"2020-03-03T10:46:42.274Z","highestTrophies":18658},{"_id":"5e5e359396cb3310ffefeaff","date":"2020-03-03T10:46:43.251Z","highestTrophies":18658},{"_id":"5e5e362996cb3310ffefedd9","date":"2020-03-03T10:49:13.282Z","highestTrophies":18658},{"_id":"5e5f6c33a1dd9e0c864f7456","date":"2020-03-04T08:52:03.581Z","highestTrophies":18658},{"_id":"5e60d598b254e5193e23ff44","date":"2020-03-05T10:34:00.863Z","highestTrophies":18658},{"_id":"5e60d9331907390ccd08ebf9","date":"2020-03-05T10:49:23.095Z","highestTrophies":18658},{"_id":"5e60d93d1907390ccd08ef5f","date":"2020-03-05T10:49:33.145Z","highestTrophies":18658},{"_id":"5e60d96c421a2b0d3f13b4b7","date":"2020-03-05T10:50:20.497Z","highestTrophies":18658},{"_id":"5e66026f0d2a560df328f2a4","date":"2020-03-09T08:46:39.893Z","highestTrophies":19006},{"_id":"5e663c899bda110d6b16703d","date":"2020-03-09T12:54:33.648Z","highestTrophies":19006},{"_id":"5e66486f0e72e714b570bf58","date":"2020-03-09T13:45:19.132Z","highestTrophies":19006},{"_id":"5e6648c99db2e11524463dce","date":"2020-03-09T13:46:49.823Z","highestTrophies":19006},{"_id":"5e6649760edc431571ddb3de","date":"2020-03-09T13:49:42.105Z","highestTrophies":19006},{"_id":"5e6649d8448ee115be5218f1","date":"2020-03-09T13:51:20.977Z","highestTrophies":19006},{"_id":"5e665c0ef23112155b98dbb0","date":"2020-03-09T15:09:02.568Z","highestTrophies":19006},{"_id":"5e6751de68c45a0c96b97e84","date":"2020-03-10T08:37:50.580Z","highestTrophies":19006},{"_id":"5e67af40ba96e9311ad8dfaa","date":"2020-03-10T15:16:16.558Z","highestTrophies":19006},{"_id":"5e68a85b3f87d80ed3c9f8ed","date":"2020-03-11T08:59:07.591Z","highestTrophies":19006},{"_id":"5e68a89afe9b142ed4d16851","date":"2020-03-11T09:00:10.708Z","highestTrophies":19006},{"_id":"5e68ef15bc8b9b14dfc40286","date":"2020-03-11T14:00:53.581Z","highestTrophies":19006},{"_id":"5e68fe8e8f3ad6227084c7d0","date":"2020-03-11T15:06:54.928Z","highestTrophies":19006},{"_id":"5e68fecd8f3ad6227084cd18","date":"2020-03-11T15:07:57.087Z","highestTrophies":19006},{"_id":"5e6905a848040627cc4bb907","date":"2020-03-11T15:37:12.948Z","highestTrophies":19006},{"_id":"5e6905f61d2c5c2811112852","date":"2020-03-11T15:38:30.084Z","highestTrophies":19006},{"_id":"5e69061b6ce714283a834d38","date":"2020-03-11T15:39:07.433Z","highestTrophies":19006},{"_id":"5e69066a2cf4f0289f50cfc8","date":"2020-03-11T15:40:26.661Z","highestTrophies":19006},{"_id":"5e6a01b30c2a2b0e39b5ac96","date":"2020-03-12T09:32:35.578Z","highestTrophies":19006},{"_id":"5e6a0462cc22d90fb718c477","date":"2020-03-12T09:44:02.922Z","highestTrophies":19006},{"_id":"5e6a0d7c3c49db1694cd4311","date":"2020-03-12T10:22:52.262Z","highestTrophies":19006},{"_id":"5e6a0dbfcedd9616c165892d","date":"2020-03-12T10:23:59.232Z","highestTrophies":19006},{"_id":"5e6a0e92c08cae18e2915614","date":"2020-03-12T10:27:30.590Z","highestTrophies":19006},{"_id":"5e6a0ec3d7926b190ac1cb82","date":"2020-03-12T10:28:19.274Z","highestTrophies":19006},{"_id":"5e6a5d538a08ca41dd17fb4f","date":"2020-03-12T16:03:31.062Z","highestTrophies":19006},{"_id":"5e6a5e33483304439e753ded","date":"2020-03-12T16:07:15.729Z","highestTrophies":19006},{"_id":"5e6f5e98c41393126e985f31","date":"2020-03-16T11:10:16.374Z","highestTrophies":19006},{"_id":"5e6f6efbd6c2921893cfbe06","date":"2020-03-16T12:20:11.709Z","highestTrophies":19006},{"_id":"5e6f6fec7411191b02639c97","date":"2020-03-16T12:24:12.982Z","highestTrophies":19006},{"_id":"5e6f71c9ed1f6a1bfd40a2f3","date":"2020-03-16T12:32:09.574Z","highestTrophies":19006},{"_id":"5e6f7206add1a21c28252682","date":"2020-03-16T12:33:10.471Z","highestTrophies":19006},{"_id":"5e6f723d30212e1c4c1ab737","date":"2020-03-16T12:34:05.270Z","highestTrophies":19006},{"_id":"5e6f8de257b17c1c75664a15","date":"2020-03-16T14:32:02.994Z","highestTrophies":19006},{"_id":"5e6f915a0e831e2912945173","date":"2020-03-16T14:46:50.430Z","highestTrophies":19006},{"_id":"5e6f91c9756e70295d61eda1","date":"2020-03-16T14:48:41.876Z","highestTrophies":19006},{"_id":"5e6f92dd566fb229dcb28b75","date":"2020-03-16T14:53:17.593Z","highestTrophies":19006},{"_id":"5e6facf1ed158d107e9874b3","date":"2020-03-16T16:44:33.603Z","highestTrophies":19006},{"_id":"5e6fd9f5f130840cbc5109c6","date":"2020-03-16T19:56:37.375Z","highestTrophies":19006},{"_id":"5e6fda00f130840cbc511261","date":"2020-03-16T19:56:48.784Z","highestTrophies":19006},{"_id":"5e70a5fd5b736311ac34929c","date":"2020-03-17T10:27:09.087Z","highestTrophies":19006},{"_id":"5e70b9ea7474a21c42806ded","date":"2020-03-17T11:52:10.844Z","highestTrophies":19006},{"_id":"5e70be228bde5f1e0dd7ddc7","date":"2020-03-17T12:10:10.868Z","highestTrophies":19006},{"_id":"5e70bf50817c301e9c9e91cc","date":"2020-03-17T12:15:12.694Z","highestTrophies":19006},{"_id":"5e71fab90a2fff0e82bb0ca2","date":"2020-03-18T10:40:57.975Z","highestTrophies":19006},{"_id":"5e722dc8a8fa0e1995609355","date":"2020-03-18T14:18:48.937Z","highestTrophies":19006},{"_id":"5e787d80b04cc713a9c1e745","date":"2020-03-23T09:12:32.133Z","highestTrophies":19177},{"_id":"5e789f39eab0592060e21d83","date":"2020-03-23T11:36:25.188Z","highestTrophies":19177},{"_id":"5e789ff847f87720de47a720","date":"2020-03-23T11:39:36.470Z","highestTrophies":19177},{"_id":"5e78b0b3a4873e2751c5c0c5","date":"2020-03-23T12:50:59.841Z","highestTrophies":19177},{"_id":"5e78b12aa4873e2751c5cb1b","date":"2020-03-23T12:52:58.473Z","highestTrophies":19177},{"_id":"5e78b24d47d28127ff02ea0a","date":"2020-03-23T12:57:49.686Z","highestTrophies":19177},{"_id":"5e78b46b9df675288c76e2b0","date":"2020-03-23T13:06:51.739Z","highestTrophies":19177},{"_id":"5e78b608dbe81529665c0e56","date":"2020-03-23T13:13:44.458Z","highestTrophies":19177},{"_id":"5e78b719d137662a0dc510ea","date":"2020-03-23T13:18:17.127Z","highestTrophies":19177},{"_id":"5e78b7a2ad06602a56d37063","date":"2020-03-23T13:20:34.513Z","highestTrophies":19177},{"_id":"5e78b7d9cde4a02a7ed4bd62","date":"2020-03-23T13:21:29.508Z","highestTrophies":19177},{"_id":"5e78ba7462cab22bb68bcbeb","date":"2020-03-23T13:32:36.513Z","highestTrophies":19177},{"_id":"5e78d01033e36b1142bbdaa5","date":"2020-03-23T15:04:48.050Z","highestTrophies":19177},{"_id":"5e78d93614d9b6150b1149e2","date":"2020-03-23T15:43:50.089Z","highestTrophies":19177},{"_id":"5e78dbb68170fd15faaa437c","date":"2020-03-23T15:54:30.746Z","highestTrophies":19177},{"_id":"5e78dbd98170fd15faaa4f5a","date":"2020-03-23T15:55:05.469Z","highestTrophies":19177},{"_id":"5e7b42fe7104e91d89312858","date":"2020-03-25T11:39:42.182Z","highestTrophies":19177},{"_id":"5e7c7d1e4fcfb311190f6bd0","date":"2020-03-26T09:59:58.298Z","highestTrophies":19177},{"_id":"5e7c7d214fcfb311190f783e","date":"2020-03-26T10:00:01.646Z","highestTrophies":19177},{"_id":"5e7c7fff247073121d6e5ece","date":"2020-03-26T10:12:15.892Z","highestTrophies":19177},{"_id":"5e7c80a26a540a1257e5933c","date":"2020-03-26T10:14:58.853Z","highestTrophies":19177},{"_id":"5e7c815dcde75912fe794fea","date":"2020-03-26T10:18:05.938Z","highestTrophies":19177},{"_id":"5e7c81cefbc5131333898dd0","date":"2020-03-26T10:19:58.701Z","highestTrophies":19177},{"_id":"5e7c826f5520b013b8dddfef","date":"2020-03-26T10:22:39.820Z","highestTrophies":19177},{"_id":"5e7c8295dd2c1d13f2e14de1","date":"2020-03-26T10:23:17.697Z","highestTrophies":19177},{"_id":"5e7c84e507f1e714ad7daa3e","date":"2020-03-26T10:33:09.487Z","highestTrophies":19177},{"_id":"5e7c854ff193b215039e38ec","date":"2020-03-26T10:34:55.696Z","highestTrophies":19177},{"_id":"5e7c8575a21702155156893a","date":"2020-03-26T10:35:33.749Z","highestTrophies":19177},{"_id":"5e7c8789d9717e15cfc2422c","highestTrophies":19177,"date":"2020-03-26T10:44:25.031Z"}],"powerPlayPoints":566,"highestPowerPlayPoints":831,"expLevel":197,"expPoints":200853,"isQualifiedFromChampionshipChallenge":false,"3vs3Victories":[{"_id":"5e4ba894459a71106d5b5a5f","date":"2020-02-18T09:04:20.020Z"},{"_id":"5e4bca612cfedb13a9586fbd","date":"2020-02-18T11:28:33.666Z","3vs3Victories":1586},{"_id":"5e4bcb4e2cfedb13a958714c","date":"2020-02-18T11:32:30.898Z","3vs3Victories":1586},{"_id":"5e4bf7c3880f6e1c1e5101b0","date":"2020-02-18T14:42:11.823Z","3vs3Victories":1586},{"_id":"5e4bfeb37b688120d6edd3c3","date":"2020-02-18T15:11:47.637Z","3vs3Victories":1586},{"_id":"5e4c458b320f7a0d04423d76","date":"2020-02-18T20:14:03.882Z","3vs3Victories":1590},{"_id":"5e4c5c82320f7a0d04423f95","date":"2020-02-18T21:52:02.631Z","3vs3Victories":1591},{"_id":"5e4d004e284959198cfe5971","date":"2020-02-19T09:30:54.584Z","3vs3Victories":1591},{"_id":"5e4d26c48452c327a2e89ae0","date":"2020-02-19T12:15:00.274Z","3vs3Victories":1592},{"_id":"5e4d2c34b21aa62c3917a60b","date":"2020-02-19T12:38:12.075Z","3vs3Victories":1592},{"_id":"5e4d398de0b16634a6c9191f","date":"2020-02-19T13:35:09.996Z","3vs3Victories":1592},{"_id":"5e4e43ae44366f1342b68956","date":"2020-02-20T08:30:38.550Z","3vs3Victories":1599},{"_id":"5e538f8e5a09580af8b28c8b","date":"2020-02-24T08:55:42.409Z","3vs3Victories":1691},{"_id":"5e5395677bebe711eb8fff9f","date":"2020-02-24T09:20:39.678Z","3vs3Victories":1691},{"_id":"5e53cd295260b014dcde5b43","date":"2020-02-24T13:18:33.987Z","3vs3Victories":1691},{"_id":"5e53cddba7def915939afe76","date":"2020-02-24T13:21:31.494Z","3vs3Victories":1691},{"_id":"5e53cf696defc616bb6b55b1","date":"2020-02-24T13:28:09.838Z","3vs3Victories":1691},{"_id":"5e5512f2bc4d4121b43a23f1","date":"2020-02-25T12:28:34.746Z","3vs3Victories":1753},{"_id":"5e5515a6492f702349f69344","date":"2020-02-25T12:40:06.399Z","3vs3Victories":1753},{"_id":"5e55161d0b97d02397b8ffd4","date":"2020-02-25T12:42:05.458Z","3vs3Victories":1753},{"_id":"5e5516625f2d0323d9b5d789","date":"2020-02-25T12:43:14.987Z","3vs3Victories":1753},{"_id":"5e551ea1f3fa0c0df80bb9c6","date":"2020-02-25T13:18:25.378Z","3vs3Victories":1753},{"_id":"5e5521e76be9e11198b4fd97","date":"2020-02-25T13:32:23.901Z","3vs3Victories":1753},{"_id":"5e552d5839eb0c179d6ed99e","date":"2020-02-25T14:21:12.007Z","3vs3Victories":1753},{"_id":"5e552db039eb0c179d6edde7","date":"2020-02-25T14:22:40.273Z","3vs3Victories":1753},{"_id":"5e552fdbd26be919e3ca2a09","date":"2020-02-25T14:31:55.110Z","3vs3Victories":1753},{"_id":"5e553351d26be919e3ca2e98","date":"2020-02-25T14:46:41.567Z","3vs3Victories":1753},{"_id":"5e553b28e82e2820016a80a8","date":"2020-02-25T15:20:08.176Z","3vs3Victories":1753},{"_id":"5e562d1c3ed2ca0b66ad568a","date":"2020-02-26T08:32:28.422Z","3vs3Victories":1771},{"_id":"5e562d953ed2ca0b66ad5bd2","date":"2020-02-26T08:34:29.147Z","3vs3Victories":1771},{"_id":"5e56311851788411864f1d7d","date":"2020-02-26T08:49:28.620Z","3vs3Victories":1771},{"_id":"5e56580e2518f31ad69b991e","date":"2020-02-26T11:35:42.623Z","3vs3Victories":1771},{"_id":"5e5658112518f31ad69b9ecf","date":"2020-02-26T11:35:45.299Z","3vs3Victories":1771},{"_id":"5e56757597143027e58a45d0","date":"2020-02-26T13:41:09.699Z","3vs3Victories":1771},{"_id":"5e568abbfc90f3318dfb97d0","date":"2020-02-26T15:11:55.030Z","3vs3Victories":1771},{"_id":"5e569137fc90f3318dfb9dea","date":"2020-02-26T15:39:35.817Z","3vs3Victories":1771},{"_id":"5e578b95e4e4d513530e6fb1","date":"2020-02-27T09:27:49.749Z","3vs3Victories":1833},{"_id":"5e578bbfe4e4d513530e75d1","date":"2020-02-27T09:28:31.432Z","3vs3Victories":1833},{"_id":"5e578c44e4e4d513530e7c14","date":"2020-02-27T09:30:44.358Z","3vs3Victories":1833},{"_id":"5e579bd4471cba1b7dc32dad","date":"2020-02-27T10:37:08.580Z","3vs3Victories":1833},{"_id":"5e579bf5471cba1b7dc32fa7","date":"2020-02-27T10:37:41.237Z","3vs3Victories":1833},{"_id":"5e579d449ae8aa1c24a630eb","date":"2020-02-27T10:43:16.263Z","3vs3Victories":1833},{"_id":"5e579d669ae8aa1c24a632ef","date":"2020-02-27T10:43:50.049Z","3vs3Victories":1833},{"_id":"5e579e89e3bc020b43c357bd","date":"2020-02-27T10:48:41.757Z","3vs3Victories":1833},{"_id":"5e5cc5d39e71230d282fc2db","date":"2020-03-02T08:37:39.486Z","3vs3Victories":1929},{"_id":"5e5cdd98d06c631962bbe52f","date":"2020-03-02T10:19:04.113Z","3vs3Victories":1929},{"_id":"5e5ce0eaf416cb1ac80ab916","date":"2020-03-02T10:33:14.402Z","3vs3Victories":1929},{"_id":"5e5ce111f416cb1ac80abb73","date":"2020-03-02T10:33:53.776Z","3vs3Victories":1929},{"_id":"5e5cef280b797f0d94875039","date":"2020-03-02T11:34:00.737Z","3vs3Victories":1929},{"_id":"5e5e2d00da032d121ba0656a","date":"2020-03-03T10:10:08.800Z","3vs3Victories":1956},{"_id":"5e5e30e1d0035e17ccf2a3c5","date":"2020-03-03T10:26:41.616Z","3vs3Victories":1956},{"_id":"5e5e31dbdd81bc0f6317e687","date":"2020-03-03T10:30:51.163Z","3vs3Victories":1956},{"_id":"5e5e31f1dd81bc0f6317e8e9","date":"2020-03-03T10:31:13.751Z","3vs3Victories":1956},{"_id":"5e5e32de5442a4105f6fc7df","date":"2020-03-03T10:35:10.062Z","3vs3Victories":1956},{"_id":"5e5e340c63923610bec1b809","date":"2020-03-03T10:40:12.992Z","3vs3Victories":1956},{"_id":"5e5e351696cb3310ffefe5b5","date":"2020-03-03T10:44:38.812Z","3vs3Victories":1956},{"_id":"5e5e359296cb3310ffefe849","date":"2020-03-03T10:46:42.274Z","3vs3Victories":1956},{"_id":"5e5e359396cb3310ffefeb00","date":"2020-03-03T10:46:43.251Z","3vs3Victories":1956},{"_id":"5e5e362996cb3310ffefedda","date":"2020-03-03T10:49:13.282Z","3vs3Victories":1956},{"_id":"5e5f6c33a1dd9e0c864f7457","date":"2020-03-04T08:52:03.581Z","3vs3Victories":1986},{"_id":"5e60d598b254e5193e23ff45","date":"2020-03-05T10:34:00.863Z","3vs3Victories":2004},{"_id":"5e60d9331907390ccd08ebfa","date":"2020-03-05T10:49:23.096Z","3vs3Victories":2004},{"_id":"5e60d93d1907390ccd08ef60","date":"2020-03-05T10:49:33.145Z","3vs3Victories":2004},{"_id":"5e60d96c421a2b0d3f13b4b8","date":"2020-03-05T10:50:20.497Z","3vs3Victories":2004},{"_id":"5e66026f0d2a560df328f2a5","date":"2020-03-09T08:46:39.893Z","3vs3Victories":2103},{"_id":"5e663c899bda110d6b16703e","date":"2020-03-09T12:54:33.648Z","3vs3Victories":2103},{"_id":"5e66486f0e72e714b570bf59","date":"2020-03-09T13:45:19.132Z","3vs3Victories":2103},{"_id":"5e6648c99db2e11524463dcf","date":"2020-03-09T13:46:49.823Z","3vs3Victories":2103},{"_id":"5e6649760edc431571ddb3df","date":"2020-03-09T13:49:42.105Z","3vs3Victories":2103},{"_id":"5e6649d8448ee115be5218f2","date":"2020-03-09T13:51:20.977Z","3vs3Victories":2103},{"_id":"5e665c0ef23112155b98dbb1","date":"2020-03-09T15:09:02.568Z","3vs3Victories":2103},{"_id":"5e6751de68c45a0c96b97e85","date":"2020-03-10T08:37:50.581Z","3vs3Victories":2156},{"_id":"5e67af40ba96e9311ad8dfab","date":"2020-03-10T15:16:16.558Z","3vs3Victories":2156},{"_id":"5e68a85b3f87d80ed3c9f8ee","date":"2020-03-11T08:59:07.592Z","3vs3Victories":2186},{"_id":"5e68a89afe9b142ed4d16852","date":"2020-03-11T09:00:10.708Z","3vs3Victories":2186},{"_id":"5e68ef15bc8b9b14dfc40287","date":"2020-03-11T14:00:53.584Z","3vs3Victories":2186},{"_id":"5e68fe8e8f3ad6227084c7d1","date":"2020-03-11T15:06:54.929Z","3vs3Victories":2186},{"_id":"5e68fecd8f3ad6227084cd19","date":"2020-03-11T15:07:57.087Z","3vs3Victories":2186},{"_id":"5e6905a848040627cc4bb908","date":"2020-03-11T15:37:12.949Z","3vs3Victories":2186},{"_id":"5e6905f61d2c5c2811112853","date":"2020-03-11T15:38:30.085Z","3vs3Victories":2186},{"_id":"5e69061b6ce714283a834d39","date":"2020-03-11T15:39:07.434Z","3vs3Victories":2186},{"_id":"5e69066a2cf4f0289f50cfc9","date":"2020-03-11T15:40:26.661Z","3vs3Victories":2186},{"_id":"5e6a01b30c2a2b0e39b5ac97","date":"2020-03-12T09:32:35.578Z","3vs3Victories":2300},{"_id":"5e6a0462cc22d90fb718c478","date":"2020-03-12T09:44:02.922Z","3vs3Victories":2300},{"_id":"5e6a0d7c3c49db1694cd4312","date":"2020-03-12T10:22:52.262Z","3vs3Victories":2300},{"_id":"5e6a0dbfcedd9616c165892e","date":"2020-03-12T10:23:59.232Z","3vs3Victories":2300},{"_id":"5e6a0e92c08cae18e2915615","date":"2020-03-12T10:27:30.591Z","3vs3Victories":2300},{"_id":"5e6a0ec3d7926b190ac1cb83","date":"2020-03-12T10:28:19.274Z","3vs3Victories":2300},{"_id":"5e6a5d538a08ca41dd17fb50","date":"2020-03-12T16:03:31.062Z","3vs3Victories":2300},{"_id":"5e6a5e33483304439e753dee","date":"2020-03-12T16:07:15.730Z","3vs3Victories":2300},{"_id":"5e6f5e98c41393126e985f32","date":"2020-03-16T11:10:16.374Z","3vs3Victories":2517},{"_id":"5e6f6efbd6c2921893cfbe07","date":"2020-03-16T12:20:11.709Z","3vs3Victories":2517},{"_id":"5e6f6fec7411191b02639c98","date":"2020-03-16T12:24:12.982Z","3vs3Victories":2517},{"_id":"5e6f71c9ed1f6a1bfd40a2f4","date":"2020-03-16T12:32:09.574Z","3vs3Victories":2517},{"_id":"5e6f7206add1a21c28252683","date":"2020-03-16T12:33:10.471Z","3vs3Victories":2517},{"_id":"5e6f723d30212e1c4c1ab738","date":"2020-03-16T12:34:05.271Z","3vs3Victories":2517},{"_id":"5e6f8de257b17c1c75664a16","date":"2020-03-16T14:32:02.995Z","3vs3Victories":2517},{"_id":"5e6f915a0e831e2912945174","date":"2020-03-16T14:46:50.430Z","3vs3Victories":2517},{"_id":"5e6f91c9756e70295d61eda2","date":"2020-03-16T14:48:41.876Z","3vs3Victories":2517},{"_id":"5e6f92dd566fb229dcb28b76","date":"2020-03-16T14:53:17.593Z","3vs3Victories":2517},{"_id":"5e6facf1ed158d107e9874b4","date":"2020-03-16T16:44:33.604Z","3vs3Victories":2517},{"_id":"5e6fd9f5f130840cbc5109c7","date":"2020-03-16T19:56:37.375Z","3vs3Victories":2538},{"_id":"5e6fda00f130840cbc511262","date":"2020-03-16T19:56:48.784Z","3vs3Victories":2538},{"_id":"5e70a5fd5b736311ac34929d","date":"2020-03-17T10:27:09.088Z","3vs3Victories":2543},{"_id":"5e70b9ea7474a21c42806dee","date":"2020-03-17T11:52:10.844Z","3vs3Victories":2546},{"_id":"5e70be228bde5f1e0dd7ddc8","date":"2020-03-17T12:10:10.868Z","3vs3Victories":2546},{"_id":"5e70bf50817c301e9c9e91cd","date":"2020-03-17T12:15:12.694Z","3vs3Victories":2546},{"_id":"5e71fab90a2fff0e82bb0ca3","date":"2020-03-18T10:40:57.975Z","3vs3Victories":2574},{"_id":"5e722dc8a8fa0e1995609356","date":"2020-03-18T14:18:48.937Z","3vs3Victories":2579},{"_id":"5e787d80b04cc713a9c1e746","date":"2020-03-23T09:12:32.134Z","3vs3Victories":2623},{"_id":"5e789f39eab0592060e21d84","date":"2020-03-23T11:36:25.188Z","3vs3Victories":2623},{"_id":"5e789ff847f87720de47a721","date":"2020-03-23T11:39:36.470Z","3vs3Victories":2623},{"_id":"5e78b0b3a4873e2751c5c0c6","date":"2020-03-23T12:50:59.841Z","3vs3Victories":2623},{"_id":"5e78b12aa4873e2751c5cb1c","date":"2020-03-23T12:52:58.473Z","3vs3Victories":2623},{"_id":"5e78b24d47d28127ff02ea0b","date":"2020-03-23T12:57:49.687Z","3vs3Victories":2623},{"_id":"5e78b46b9df675288c76e2b1","date":"2020-03-23T13:06:51.739Z","3vs3Victories":2623},{"_id":"5e78b608dbe81529665c0e57","date":"2020-03-23T13:13:44.458Z","3vs3Victories":2623},{"_id":"5e78b719d137662a0dc510eb","date":"2020-03-23T13:18:17.127Z","3vs3Victories":2623},{"_id":"5e78b7a2ad06602a56d37064","date":"2020-03-23T13:20:34.513Z","3vs3Victories":2623},{"_id":"5e78b7d9cde4a02a7ed4bd63","date":"2020-03-23T13:21:29.509Z","3vs3Victories":2623},{"_id":"5e78ba7462cab22bb68bcbec","date":"2020-03-23T13:32:36.513Z","3vs3Victories":2623},{"_id":"5e78d01033e36b1142bbdaa6","date":"2020-03-23T15:04:48.050Z","3vs3Victories":2624},{"_id":"5e78d93614d9b6150b1149e3","date":"2020-03-23T15:43:50.089Z","3vs3Victories":2624},{"_id":"5e78dbb68170fd15faaa437d","date":"2020-03-23T15:54:30.747Z","3vs3Victories":2624},{"_id":"5e78dbd98170fd15faaa4f5b","date":"2020-03-23T15:55:05.469Z","3vs3Victories":2624},{"_id":"5e7b42fe7104e91d89312859","date":"2020-03-25T11:39:42.182Z","3vs3Victories":2637},{"_id":"5e7c7d1e4fcfb311190f6bd1","date":"2020-03-26T09:59:58.298Z","3vs3Victories":2652},{"_id":"5e7c7d214fcfb311190f783f","date":"2020-03-26T10:00:01.646Z","3vs3Victories":2652},{"_id":"5e7c7fff247073121d6e5ecf","date":"2020-03-26T10:12:15.892Z","3vs3Victories":2652},{"_id":"5e7c80a26a540a1257e5933d","date":"2020-03-26T10:14:58.853Z","3vs3Victories":2652},{"_id":"5e7c815dcde75912fe794feb","date":"2020-03-26T10:18:05.938Z","3vs3Victories":2652},{"_id":"5e7c81cefbc5131333898dd1","date":"2020-03-26T10:19:58.702Z","3vs3Victories":2652},{"_id":"5e7c826f5520b013b8dddff0","date":"2020-03-26T10:22:39.820Z","3vs3Victories":2652},{"_id":"5e7c8295dd2c1d13f2e14de2","date":"2020-03-26T10:23:17.697Z","3vs3Victories":2652},{"_id":"5e7c84e507f1e714ad7daa3f","date":"2020-03-26T10:33:09.487Z","3vs3Victories":2652},{"_id":"5e7c854ff193b215039e38ed","date":"2020-03-26T10:34:55.697Z","3vs3Victories":2652},{"_id":"5e7c8575a21702155156893b","date":"2020-03-26T10:35:33.750Z","3vs3Victories":2652},{"_id":"5e7c8789d9717e15cfc2422d","3vs3Victories":2652,"date":"2020-03-26T10:44:25.031Z"}],"soloVictories":[{"_id":"5e4ba894459a71106d5b5a60","date":"2020-02-18T09:04:20.020Z"},{"_id":"5e4bca612cfedb13a9586fbe","date":"2020-02-18T11:28:33.666Z","soloVictories":983},{"_id":"5e4bcb4e2cfedb13a958714d","date":"2020-02-18T11:32:30.898Z","soloVictories":983},{"_id":"5e4bf7c3880f6e1c1e5101b1","date":"2020-02-18T14:42:11.823Z","soloVictories":983},{"_id":"5e4bfeb37b688120d6edd3c4","date":"2020-02-18T15:11:47.637Z","soloVictories":983},{"_id":"5e4c458b320f7a0d04423d77","date":"2020-02-18T20:14:03.882Z","soloVictories":983},{"_id":"5e4c5c82320f7a0d04423f96","date":"2020-02-18T21:52:02.631Z","soloVictories":985},{"_id":"5e4d004e284959198cfe5972","date":"2020-02-19T09:30:54.584Z","soloVictories":985},{"_id":"5e4d26c48452c327a2e89ae1","date":"2020-02-19T12:15:00.274Z","soloVictories":985},{"_id":"5e4d2c34b21aa62c3917a60c","date":"2020-02-19T12:38:12.075Z","soloVictories":985},{"_id":"5e4d398de0b16634a6c91920","date":"2020-02-19T13:35:09.996Z","soloVictories":985},{"_id":"5e4e43ae44366f1342b68957","date":"2020-02-20T08:30:38.550Z","soloVictories":988},{"_id":"5e538f8e5a09580af8b28c8c","date":"2020-02-24T08:55:42.409Z","soloVictories":996},{"_id":"5e5395677bebe711eb8fffa0","date":"2020-02-24T09:20:39.678Z","soloVictories":996},{"_id":"5e53cd295260b014dcde5b44","date":"2020-02-24T13:18:33.987Z","soloVictories":996},{"_id":"5e53cddba7def915939afe77","date":"2020-02-24T13:21:31.494Z","soloVictories":996},{"_id":"5e53cf696defc616bb6b55b2","date":"2020-02-24T13:28:09.838Z","soloVictories":996},{"_id":"5e5512f2bc4d4121b43a23f2","date":"2020-02-25T12:28:34.746Z","soloVictories":996},{"_id":"5e5515a6492f702349f69345","date":"2020-02-25T12:40:06.399Z","soloVictories":996},{"_id":"5e55161d0b97d02397b8ffd5","date":"2020-02-25T12:42:05.458Z","soloVictories":996},{"_id":"5e5516625f2d0323d9b5d78a","date":"2020-02-25T12:43:14.987Z","soloVictories":996},{"_id":"5e551ea1f3fa0c0df80bb9c7","date":"2020-02-25T13:18:25.378Z","soloVictories":996},{"_id":"5e5521e76be9e11198b4fd98","date":"2020-02-25T13:32:23.901Z","soloVictories":996},{"_id":"5e552d5839eb0c179d6ed99f","date":"2020-02-25T14:21:12.008Z","soloVictories":996},{"_id":"5e552db039eb0c179d6edde8","date":"2020-02-25T14:22:40.273Z","soloVictories":996},{"_id":"5e552fdbd26be919e3ca2a0a","date":"2020-02-25T14:31:55.110Z","soloVictories":996},{"_id":"5e553351d26be919e3ca2e99","date":"2020-02-25T14:46:41.567Z","soloVictories":996},{"_id":"5e553b28e82e2820016a80a9","date":"2020-02-25T15:20:08.176Z","soloVictories":996},{"_id":"5e562d1c3ed2ca0b66ad568b","date":"2020-02-26T08:32:28.423Z","soloVictories":997},{"_id":"5e562d953ed2ca0b66ad5bd3","date":"2020-02-26T08:34:29.147Z","soloVictories":997},{"_id":"5e56311851788411864f1d7e","date":"2020-02-26T08:49:28.620Z","soloVictories":997},{"_id":"5e56580e2518f31ad69b991f","date":"2020-02-26T11:35:42.623Z","soloVictories":997},{"_id":"5e5658112518f31ad69b9ed0","date":"2020-02-26T11:35:45.299Z","soloVictories":997},{"_id":"5e56757597143027e58a45d1","date":"2020-02-26T13:41:09.699Z","soloVictories":997},{"_id":"5e568abbfc90f3318dfb97d1","date":"2020-02-26T15:11:55.030Z","soloVictories":997},{"_id":"5e569137fc90f3318dfb9deb","date":"2020-02-26T15:39:35.817Z","soloVictories":997},{"_id":"5e578b95e4e4d513530e6fb2","date":"2020-02-27T09:27:49.749Z","soloVictories":997},{"_id":"5e578bbfe4e4d513530e75d2","date":"2020-02-27T09:28:31.432Z","soloVictories":997},{"_id":"5e578c44e4e4d513530e7c15","date":"2020-02-27T09:30:44.358Z","soloVictories":997},{"_id":"5e579bd4471cba1b7dc32dae","date":"2020-02-27T10:37:08.580Z","soloVictories":997},{"_id":"5e579bf5471cba1b7dc32fa8","date":"2020-02-27T10:37:41.237Z","soloVictories":997},{"_id":"5e579d449ae8aa1c24a630ec","date":"2020-02-27T10:43:16.263Z","soloVictories":997},{"_id":"5e579d669ae8aa1c24a632f0","date":"2020-02-27T10:43:50.049Z","soloVictories":997},{"_id":"5e579e89e3bc020b43c357be","date":"2020-02-27T10:48:41.757Z","soloVictories":997},{"_id":"5e5cc5d39e71230d282fc2dc","date":"2020-03-02T08:37:39.487Z","soloVictories":1003},{"_id":"5e5cdd98d06c631962bbe530","date":"2020-03-02T10:19:04.113Z","soloVictories":1003},{"_id":"5e5ce0eaf416cb1ac80ab917","date":"2020-03-02T10:33:14.402Z","soloVictories":1003},{"_id":"5e5ce111f416cb1ac80abb74","date":"2020-03-02T10:33:53.776Z","soloVictories":1003},{"_id":"5e5cef280b797f0d9487503a","date":"2020-03-02T11:34:00.737Z","soloVictories":1003},{"_id":"5e5e2d00da032d121ba0656b","date":"2020-03-03T10:10:08.800Z","soloVictories":1003},{"_id":"5e5e30e1d0035e17ccf2a3c6","date":"2020-03-03T10:26:41.617Z","soloVictories":1003},{"_id":"5e5e31dbdd81bc0f6317e688","date":"2020-03-03T10:30:51.163Z","soloVictories":1003},{"_id":"5e5e31f1dd81bc0f6317e8ea","date":"2020-03-03T10:31:13.751Z","soloVictories":1003},{"_id":"5e5e32de5442a4105f6fc7e0","date":"2020-03-03T10:35:10.062Z","soloVictories":1003},{"_id":"5e5e340c63923610bec1b80a","date":"2020-03-03T10:40:12.992Z","soloVictories":1003},{"_id":"5e5e351696cb3310ffefe5b6","date":"2020-03-03T10:44:38.813Z","soloVictories":1003},{"_id":"5e5e359296cb3310ffefe84a","date":"2020-03-03T10:46:42.274Z","soloVictories":1003},{"_id":"5e5e359396cb3310ffefeb01","date":"2020-03-03T10:46:43.252Z","soloVictories":1003},{"_id":"5e5e362996cb3310ffefeddb","date":"2020-03-03T10:49:13.282Z","soloVictories":1003},{"_id":"5e5f6c33a1dd9e0c864f7458","date":"2020-03-04T08:52:03.581Z","soloVictories":1007},{"_id":"5e60d598b254e5193e23ff46","date":"2020-03-05T10:34:00.864Z","soloVictories":1016},{"_id":"5e60d9331907390ccd08ebfb","date":"2020-03-05T10:49:23.096Z","soloVictories":1016},{"_id":"5e60d93d1907390ccd08ef61","date":"2020-03-05T10:49:33.145Z","soloVictories":1016},{"_id":"5e60d96c421a2b0d3f13b4b9","date":"2020-03-05T10:50:20.497Z","soloVictories":1016},{"_id":"5e66026f0d2a560df328f2a6","date":"2020-03-09T08:46:39.893Z","soloVictories":1032},{"_id":"5e663c899bda110d6b16703f","date":"2020-03-09T12:54:33.648Z","soloVictories":1032},{"_id":"5e66486f0e72e714b570bf5a","date":"2020-03-09T13:45:19.132Z","soloVictories":1032},{"_id":"5e6648c99db2e11524463dd0","date":"2020-03-09T13:46:49.824Z","soloVictories":1032},{"_id":"5e6649760edc431571ddb3e0","date":"2020-03-09T13:49:42.105Z","soloVictories":1032},{"_id":"5e6649d8448ee115be5218f3","date":"2020-03-09T13:51:20.977Z","soloVictories":1032},{"_id":"5e665c0ef23112155b98dbb2","date":"2020-03-09T15:09:02.568Z","soloVictories":1032},{"_id":"5e6751de68c45a0c96b97e86","date":"2020-03-10T08:37:50.581Z","soloVictories":1032},{"_id":"5e67af40ba96e9311ad8dfac","date":"2020-03-10T15:16:16.558Z","soloVictories":1032},{"_id":"5e68a85b3f87d80ed3c9f8ef","date":"2020-03-11T08:59:07.592Z","soloVictories":1032},{"_id":"5e68a89afe9b142ed4d16853","date":"2020-03-11T09:00:10.708Z","soloVictories":1032},{"_id":"5e68ef15bc8b9b14dfc40288","date":"2020-03-11T14:00:53.585Z","soloVictories":1032},{"_id":"5e68fe8e8f3ad6227084c7d2","date":"2020-03-11T15:06:54.930Z","soloVictories":1032},{"_id":"5e68fecd8f3ad6227084cd1a","date":"2020-03-11T15:07:57.088Z","soloVictories":1032},{"_id":"5e6905a848040627cc4bb909","date":"2020-03-11T15:37:12.949Z","soloVictories":1032},{"_id":"5e6905f61d2c5c2811112854","date":"2020-03-11T15:38:30.085Z","soloVictories":1032},{"_id":"5e69061b6ce714283a834d3a","date":"2020-03-11T15:39:07.436Z","soloVictories":1032},{"_id":"5e69066a2cf4f0289f50cfca","date":"2020-03-11T15:40:26.662Z","soloVictories":1032},{"_id":"5e6a01b30c2a2b0e39b5ac98","date":"2020-03-12T09:32:35.578Z","soloVictories":1032},{"_id":"5e6a0462cc22d90fb718c479","date":"2020-03-12T09:44:02.924Z","soloVictories":1032},{"_id":"5e6a0d7c3c49db1694cd4313","date":"2020-03-12T10:22:52.262Z","soloVictories":1032},{"_id":"5e6a0dbfcedd9616c165892f","date":"2020-03-12T10:23:59.233Z","soloVictories":1032},{"_id":"5e6a0e92c08cae18e2915616","date":"2020-03-12T10:27:30.591Z","soloVictories":1032},{"_id":"5e6a0ec3d7926b190ac1cb84","date":"2020-03-12T10:28:19.274Z","soloVictories":1032},{"_id":"5e6a5d538a08ca41dd17fb51","date":"2020-03-12T16:03:31.062Z","soloVictories":1032},{"_id":"5e6a5e33483304439e753def","date":"2020-03-12T16:07:15.730Z","soloVictories":1032},{"_id":"5e6f5e98c41393126e985f33","date":"2020-03-16T11:10:16.375Z","soloVictories":1033},{"_id":"5e6f6efbd6c2921893cfbe08","date":"2020-03-16T12:20:11.709Z","soloVictories":1033},{"_id":"5e6f6fec7411191b02639c99","date":"2020-03-16T12:24:12.982Z","soloVictories":1033},{"_id":"5e6f71c9ed1f6a1bfd40a2f5","date":"2020-03-16T12:32:09.574Z","soloVictories":1033},{"_id":"5e6f7206add1a21c28252684","date":"2020-03-16T12:33:10.472Z","soloVictories":1033},{"_id":"5e6f723d30212e1c4c1ab739","date":"2020-03-16T12:34:05.271Z","soloVictories":1033},{"_id":"5e6f8de257b17c1c75664a17","date":"2020-03-16T14:32:02.995Z","soloVictories":1033},{"_id":"5e6f915a0e831e2912945175","date":"2020-03-16T14:46:50.430Z","soloVictories":1033},{"_id":"5e6f91c9756e70295d61eda3","date":"2020-03-16T14:48:41.877Z","soloVictories":1033},{"_id":"5e6f92dd566fb229dcb28b77","date":"2020-03-16T14:53:17.594Z","soloVictories":1033},{"_id":"5e6facf1ed158d107e9874b5","date":"2020-03-16T16:44:33.604Z","soloVictories":1033},{"_id":"5e6fd9f5f130840cbc5109c8","date":"2020-03-16T19:56:37.375Z","soloVictories":1033},{"_id":"5e6fda00f130840cbc511263","date":"2020-03-16T19:56:48.784Z","soloVictories":1033},{"_id":"5e70a5fd5b736311ac34929e","date":"2020-03-17T10:27:09.088Z","soloVictories":1033},{"_id":"5e70b9ea7474a21c42806def","date":"2020-03-17T11:52:10.844Z","soloVictories":1033},{"_id":"5e70be228bde5f1e0dd7ddc9","date":"2020-03-17T12:10:10.868Z","soloVictories":1033},{"_id":"5e70bf50817c301e9c9e91ce","date":"2020-03-17T12:15:12.694Z","soloVictories":1033},{"_id":"5e71fab90a2fff0e82bb0ca4","date":"2020-03-18T10:40:57.975Z","soloVictories":1035},{"_id":"5e722dc8a8fa0e1995609357","date":"2020-03-18T14:18:48.937Z","soloVictories":1035},{"_id":"5e787d80b04cc713a9c1e747","date":"2020-03-23T09:12:32.134Z","soloVictories":1058},{"_id":"5e789f39eab0592060e21d85","date":"2020-03-23T11:36:25.189Z","soloVictories":1058},{"_id":"5e789ff847f87720de47a722","date":"2020-03-23T11:39:36.470Z","soloVictories":1058},{"_id":"5e78b0b3a4873e2751c5c0c7","date":"2020-03-23T12:50:59.841Z","soloVictories":1058},{"_id":"5e78b12aa4873e2751c5cb1d","date":"2020-03-23T12:52:58.473Z","soloVictories":1058},{"_id":"5e78b24d47d28127ff02ea0c","date":"2020-03-23T12:57:49.687Z","soloVictories":1058},{"_id":"5e78b46b9df675288c76e2b2","date":"2020-03-23T13:06:51.740Z","soloVictories":1058},{"_id":"5e78b608dbe81529665c0e58","date":"2020-03-23T13:13:44.459Z","soloVictories":1058},{"_id":"5e78b719d137662a0dc510ec","date":"2020-03-23T13:18:17.127Z","soloVictories":1058},{"_id":"5e78b7a2ad06602a56d37065","date":"2020-03-23T13:20:34.513Z","soloVictories":1058},{"_id":"5e78b7d9cde4a02a7ed4bd64","date":"2020-03-23T13:21:29.509Z","soloVictories":1058},{"_id":"5e78ba7462cab22bb68bcbed","date":"2020-03-23T13:32:36.514Z","soloVictories":1058},{"_id":"5e78d01033e36b1142bbdaa7","date":"2020-03-23T15:04:48.050Z","soloVictories":1058},{"_id":"5e78d93614d9b6150b1149e4","date":"2020-03-23T15:43:50.089Z","soloVictories":1058},{"_id":"5e78dbb68170fd15faaa437e","date":"2020-03-23T15:54:30.747Z","soloVictories":1058},{"_id":"5e78dbd98170fd15faaa4f5c","date":"2020-03-23T15:55:05.469Z","soloVictories":1058},{"_id":"5e7b42fe7104e91d8931285a","date":"2020-03-25T11:39:42.183Z","soloVictories":1058},{"_id":"5e7c7d1e4fcfb311190f6bd2","date":"2020-03-26T09:59:58.298Z","soloVictories":1059},{"_id":"5e7c7d214fcfb311190f7840","date":"2020-03-26T10:00:01.646Z","soloVictories":1059},{"_id":"5e7c7fff247073121d6e5ed0","date":"2020-03-26T10:12:15.892Z","soloVictories":1059},{"_id":"5e7c80a26a540a1257e5933e","date":"2020-03-26T10:14:58.853Z","soloVictories":1059},{"_id":"5e7c815dcde75912fe794fec","date":"2020-03-26T10:18:05.938Z","soloVictories":1059},{"_id":"5e7c81cefbc5131333898dd2","date":"2020-03-26T10:19:58.702Z","soloVictories":1059},{"_id":"5e7c826f5520b013b8dddff1","date":"2020-03-26T10:22:39.820Z","soloVictories":1059},{"_id":"5e7c8295dd2c1d13f2e14de3","date":"2020-03-26T10:23:17.698Z","soloVictories":1059},{"_id":"5e7c84e507f1e714ad7daa40","date":"2020-03-26T10:33:09.488Z","soloVictories":1059},{"_id":"5e7c854ff193b215039e38ee","date":"2020-03-26T10:34:55.698Z","soloVictories":1059},{"_id":"5e7c8575a21702155156893c","date":"2020-03-26T10:35:33.750Z","soloVictories":1059},{"_id":"5e7c8789d9717e15cfc2422e","soloVictories":1059,"date":"2020-03-26T10:44:25.031Z"}],"duoVictories":[{"_id":"5e4ba894459a71106d5b5a61","date":"2020-02-18T09:04:20.020Z"},{"_id":"5e4bca612cfedb13a9586fbf","date":"2020-02-18T11:28:33.666Z","duoVictories":973},{"_id":"5e4bcb4e2cfedb13a958714e","date":"2020-02-18T11:32:30.898Z","duoVictories":973},{"_id":"5e4bf7c3880f6e1c1e5101b2","date":"2020-02-18T14:42:11.823Z","duoVictories":973},{"_id":"5e4bfeb37b688120d6edd3c5","date":"2020-02-18T15:11:47.637Z","duoVictories":973},{"_id":"5e4c458b320f7a0d04423d78","date":"2020-02-18T20:14:03.882Z","duoVictories":987},{"_id":"5e4c5c82320f7a0d04423f97","date":"2020-02-18T21:52:02.632Z","duoVictories":987},{"_id":"5e4d004e284959198cfe5973","date":"2020-02-19T09:30:54.584Z","duoVictories":988},{"_id":"5e4d26c48452c327a2e89ae2","date":"2020-02-19T12:15:00.274Z","duoVictories":988},{"_id":"5e4d2c34b21aa62c3917a60d","date":"2020-02-19T12:38:12.075Z","duoVictories":988},{"_id":"5e4d398de0b16634a6c91921","date":"2020-02-19T13:35:09.996Z","duoVictories":988},{"_id":"5e4e43ae44366f1342b68958","date":"2020-02-20T08:30:38.550Z","duoVictories":1007},{"_id":"5e538f8e5a09580af8b28c8d","date":"2020-02-24T08:55:42.409Z","duoVictories":1053},{"_id":"5e5395677bebe711eb8fffa1","date":"2020-02-24T09:20:39.678Z","duoVictories":1053},{"_id":"5e53cd295260b014dcde5b45","date":"2020-02-24T13:18:33.987Z","duoVictories":1053},{"_id":"5e53cddba7def915939afe78","date":"2020-02-24T13:21:31.494Z","duoVictories":1053},{"_id":"5e53cf696defc616bb6b55b3","date":"2020-02-24T13:28:09.838Z","duoVictories":1053},{"_id":"5e5512f2bc4d4121b43a23f3","date":"2020-02-25T12:28:34.746Z","duoVictories":1060},{"_id":"5e5515a6492f702349f69346","date":"2020-02-25T12:40:06.399Z","duoVictories":1060},{"_id":"5e55161d0b97d02397b8ffd6","date":"2020-02-25T12:42:05.458Z","duoVictories":1060},{"_id":"5e5516625f2d0323d9b5d78b","date":"2020-02-25T12:43:14.988Z","duoVictories":1060},{"_id":"5e551ea1f3fa0c0df80bb9c8","date":"2020-02-25T13:18:25.379Z","duoVictories":1060},{"_id":"5e5521e76be9e11198b4fd99","date":"2020-02-25T13:32:23.901Z","duoVictories":1060},{"_id":"5e552d5839eb0c179d6ed9a0","date":"2020-02-25T14:21:12.008Z","duoVictories":1060},{"_id":"5e552db039eb0c179d6edde9","date":"2020-02-25T14:22:40.273Z","duoVictories":1060},{"_id":"5e552fdbd26be919e3ca2a0b","date":"2020-02-25T14:31:55.110Z","duoVictories":1060},{"_id":"5e553351d26be919e3ca2e9a","date":"2020-02-25T14:46:41.567Z","duoVictories":1060},{"_id":"5e553b28e82e2820016a80aa","date":"2020-02-25T15:20:08.176Z","duoVictories":1060},{"_id":"5e562d1c3ed2ca0b66ad568c","date":"2020-02-26T08:32:28.423Z","duoVictories":1067},{"_id":"5e562d953ed2ca0b66ad5bd4","date":"2020-02-26T08:34:29.148Z","duoVictories":1067},{"_id":"5e56311851788411864f1d7f","date":"2020-02-26T08:49:28.620Z","duoVictories":1067},{"_id":"5e56580e2518f31ad69b9920","date":"2020-02-26T11:35:42.623Z","duoVictories":1067},{"_id":"5e5658112518f31ad69b9ed1","date":"2020-02-26T11:35:45.299Z","duoVictories":1067},{"_id":"5e56757597143027e58a45d2","date":"2020-02-26T13:41:09.699Z","duoVictories":1067},{"_id":"5e568abbfc90f3318dfb97d2","date":"2020-02-26T15:11:55.030Z","duoVictories":1067},{"_id":"5e569137fc90f3318dfb9dec","date":"2020-02-26T15:39:35.817Z","duoVictories":1067},{"_id":"5e578b95e4e4d513530e6fb3","date":"2020-02-27T09:27:49.750Z","duoVictories":1075},{"_id":"5e578bbfe4e4d513530e75d3","date":"2020-02-27T09:28:31.432Z","duoVictories":1075},{"_id":"5e578c44e4e4d513530e7c16","date":"2020-02-27T09:30:44.358Z","duoVictories":1075},{"_id":"5e579bd4471cba1b7dc32daf","date":"2020-02-27T10:37:08.580Z","duoVictories":1075},{"_id":"5e579bf5471cba1b7dc32fa9","date":"2020-02-27T10:37:41.237Z","duoVictories":1075},{"_id":"5e579d449ae8aa1c24a630ed","date":"2020-02-27T10:43:16.263Z","duoVictories":1075},{"_id":"5e579d669ae8aa1c24a632f1","date":"2020-02-27T10:43:50.049Z","duoVictories":1075},{"_id":"5e579e89e3bc020b43c357bf","date":"2020-02-27T10:48:41.758Z","duoVictories":1075},{"_id":"5e5cc5d39e71230d282fc2dd","date":"2020-03-02T08:37:39.487Z","duoVictories":1188},{"_id":"5e5cdd98d06c631962bbe531","date":"2020-03-02T10:19:04.113Z","duoVictories":1188},{"_id":"5e5ce0eaf416cb1ac80ab918","date":"2020-03-02T10:33:14.402Z","duoVictories":1188},{"_id":"5e5ce111f416cb1ac80abb75","date":"2020-03-02T10:33:53.776Z","duoVictories":1188},{"_id":"5e5cef280b797f0d9487503b","date":"2020-03-02T11:34:00.737Z","duoVictories":1188},{"_id":"5e5e2d00da032d121ba0656c","date":"2020-03-03T10:10:08.800Z","duoVictories":1205},{"_id":"5e5e30e1d0035e17ccf2a3c7","date":"2020-03-03T10:26:41.617Z","duoVictories":1205},{"_id":"5e5e31dbdd81bc0f6317e689","date":"2020-03-03T10:30:51.163Z","duoVictories":1205},{"_id":"5e5e31f1dd81bc0f6317e8eb","date":"2020-03-03T10:31:13.751Z","duoVictories":1205},{"_id":"5e5e32de5442a4105f6fc7e1","date":"2020-03-03T10:35:10.062Z","duoVictories":1205},{"_id":"5e5e340c63923610bec1b80b","date":"2020-03-03T10:40:12.992Z","duoVictories":1205},{"_id":"5e5e351696cb3310ffefe5b7","date":"2020-03-03T10:44:38.814Z","duoVictories":1205},{"_id":"5e5e359296cb3310ffefe84b","date":"2020-03-03T10:46:42.274Z","duoVictories":1205},{"_id":"5e5e359396cb3310ffefeb02","date":"2020-03-03T10:46:43.252Z","duoVictories":1205},{"_id":"5e5e362996cb3310ffefeddc","date":"2020-03-03T10:49:13.282Z","duoVictories":1205},{"_id":"5e5f6c33a1dd9e0c864f7459","date":"2020-03-04T08:52:03.581Z","duoVictories":1217},{"_id":"5e60d598b254e5193e23ff47","date":"2020-03-05T10:34:00.864Z","duoVictories":1233},{"_id":"5e60d9331907390ccd08ebfc","date":"2020-03-05T10:49:23.096Z","duoVictories":1233},{"_id":"5e60d93d1907390ccd08ef62","date":"2020-03-05T10:49:33.145Z","duoVictories":1233},{"_id":"5e60d96c421a2b0d3f13b4ba","date":"2020-03-05T10:50:20.498Z","duoVictories":1233},{"_id":"5e66026f0d2a560df328f2a7","date":"2020-03-09T08:46:39.893Z","duoVictories":1283},{"_id":"5e663c899bda110d6b167040","date":"2020-03-09T12:54:33.648Z","duoVictories":1283},{"_id":"5e66486f0e72e714b570bf5b","date":"2020-03-09T13:45:19.132Z","duoVictories":1283},{"_id":"5e6648c99db2e11524463dd1","date":"2020-03-09T13:46:49.824Z","duoVictories":1283},{"_id":"5e6649760edc431571ddb3e1","date":"2020-03-09T13:49:42.105Z","duoVictories":1283},{"_id":"5e6649d8448ee115be5218f4","date":"2020-03-09T13:51:20.977Z","duoVictories":1283},{"_id":"5e665c0ef23112155b98dbb3","date":"2020-03-09T15:09:02.569Z","duoVictories":1283},{"_id":"5e6751de68c45a0c96b97e87","date":"2020-03-10T08:37:50.581Z","duoVictories":1285},{"_id":"5e67af40ba96e9311ad8dfad","date":"2020-03-10T15:16:16.559Z","duoVictories":1285},{"_id":"5e68a85b3f87d80ed3c9f8f0","date":"2020-03-11T08:59:07.592Z","duoVictories":1288},{"_id":"5e68a89afe9b142ed4d16854","date":"2020-03-11T09:00:10.708Z","duoVictories":1288},{"_id":"5e68ef15bc8b9b14dfc40289","date":"2020-03-11T14:00:53.585Z","duoVictories":1288},{"_id":"5e68fe8e8f3ad6227084c7d3","date":"2020-03-11T15:06:54.930Z","duoVictories":1288},{"_id":"5e68fecd8f3ad6227084cd1b","date":"2020-03-11T15:07:57.088Z","duoVictories":1288},{"_id":"5e6905a848040627cc4bb90a","date":"2020-03-11T15:37:12.950Z","duoVictories":1288},{"_id":"5e6905f61d2c5c2811112855","date":"2020-03-11T15:38:30.085Z","duoVictories":1288},{"_id":"5e69061b6ce714283a834d3b","date":"2020-03-11T15:39:07.436Z","duoVictories":1288},{"_id":"5e69066a2cf4f0289f50cfcb","date":"2020-03-11T15:40:26.662Z","duoVictories":1288},{"_id":"5e6a01b30c2a2b0e39b5ac99","date":"2020-03-12T09:32:35.578Z","duoVictories":1297},{"_id":"5e6a0462cc22d90fb718c47a","date":"2020-03-12T09:44:02.924Z","duoVictories":1297},{"_id":"5e6a0d7c3c49db1694cd4314","date":"2020-03-12T10:22:52.262Z","duoVictories":1297},{"_id":"5e6a0dbfcedd9616c1658930","date":"2020-03-12T10:23:59.233Z","duoVictories":1297},{"_id":"5e6a0e92c08cae18e2915617","date":"2020-03-12T10:27:30.591Z","duoVictories":1297},{"_id":"5e6a0ec3d7926b190ac1cb85","date":"2020-03-12T10:28:19.274Z","duoVictories":1297},{"_id":"5e6a5d538a08ca41dd17fb52","date":"2020-03-12T16:03:31.062Z","duoVictories":1297},{"_id":"5e6a5e33483304439e753df0","date":"2020-03-12T16:07:15.730Z","duoVictories":1297},{"_id":"5e6f5e98c41393126e985f34","date":"2020-03-16T11:10:16.375Z","duoVictories":1367},{"_id":"5e6f6efbd6c2921893cfbe09","date":"2020-03-16T12:20:11.709Z","duoVictories":1367},{"_id":"5e6f6fec7411191b02639c9a","date":"2020-03-16T12:24:12.982Z","duoVictories":1367},{"_id":"5e6f71c9ed1f6a1bfd40a2f6","date":"2020-03-16T12:32:09.575Z","duoVictories":1367},{"_id":"5e6f7206add1a21c28252685","date":"2020-03-16T12:33:10.472Z","duoVictories":1367},{"_id":"5e6f723d30212e1c4c1ab73a","date":"2020-03-16T12:34:05.272Z","duoVictories":1367},{"_id":"5e6f8de257b17c1c75664a18","date":"2020-03-16T14:32:02.995Z","duoVictories":1367},{"_id":"5e6f915a0e831e2912945176","date":"2020-03-16T14:46:50.430Z","duoVictories":1367},{"_id":"5e6f91c9756e70295d61eda4","date":"2020-03-16T14:48:41.878Z","duoVictories":1367},{"_id":"5e6f92dd566fb229dcb28b78","date":"2020-03-16T14:53:17.594Z","duoVictories":1367},{"_id":"5e6facf1ed158d107e9874b6","date":"2020-03-16T16:44:33.604Z","duoVictories":1367},{"_id":"5e6fd9f5f130840cbc5109c9","date":"2020-03-16T19:56:37.376Z","duoVictories":1367},{"_id":"5e6fda00f130840cbc511264","date":"2020-03-16T19:56:48.784Z","duoVictories":1367},{"_id":"5e70a5fd5b736311ac34929f","date":"2020-03-17T10:27:09.088Z","duoVictories":1392},{"_id":"5e70b9ea7474a21c42806df0","date":"2020-03-17T11:52:10.844Z","duoVictories":1392},{"_id":"5e70be228bde5f1e0dd7ddca","date":"2020-03-17T12:10:10.868Z","duoVictories":1392},{"_id":"5e70bf50817c301e9c9e91cf","date":"2020-03-17T12:15:12.694Z","duoVictories":1392},{"_id":"5e71fab90a2fff0e82bb0ca5","date":"2020-03-18T10:40:57.976Z","duoVictories":1410},{"_id":"5e722dc8a8fa0e1995609358","date":"2020-03-18T14:18:48.937Z","duoVictories":1410},{"_id":"5e787d80b04cc713a9c1e748","date":"2020-03-23T09:12:32.134Z","duoVictories":1483},{"_id":"5e789f39eab0592060e21d86","date":"2020-03-23T11:36:25.189Z","duoVictories":1483},{"_id":"5e789ff847f87720de47a723","date":"2020-03-23T11:39:36.471Z","duoVictories":1483},{"_id":"5e78b0b3a4873e2751c5c0c8","date":"2020-03-23T12:50:59.841Z","duoVictories":1483},{"_id":"5e78b12aa4873e2751c5cb1e","date":"2020-03-23T12:52:58.473Z","duoVictories":1483},{"_id":"5e78b24d47d28127ff02ea0d","date":"2020-03-23T12:57:49.687Z","duoVictories":1483},{"_id":"5e78b46b9df675288c76e2b3","date":"2020-03-23T13:06:51.740Z","duoVictories":1483},{"_id":"5e78b608dbe81529665c0e59","date":"2020-03-23T13:13:44.459Z","duoVictories":1483},{"_id":"5e78b719d137662a0dc510ed","date":"2020-03-23T13:18:17.127Z","duoVictories":1483},{"_id":"5e78b7a2ad06602a56d37066","date":"2020-03-23T13:20:34.513Z","duoVictories":1483},{"_id":"5e78b7d9cde4a02a7ed4bd65","date":"2020-03-23T13:21:29.509Z","duoVictories":1483},{"_id":"5e78ba7462cab22bb68bcbee","date":"2020-03-23T13:32:36.514Z","duoVictories":1483},{"_id":"5e78d01033e36b1142bbdaa8","date":"2020-03-23T15:04:48.050Z","duoVictories":1483},{"_id":"5e78d93614d9b6150b1149e5","date":"2020-03-23T15:43:50.090Z","duoVictories":1483},{"_id":"5e78dbb68170fd15faaa437f","date":"2020-03-23T15:54:30.747Z","duoVictories":1483},{"_id":"5e78dbd98170fd15faaa4f5d","date":"2020-03-23T15:55:05.470Z","duoVictories":1483},{"_id":"5e7b42fe7104e91d8931285b","date":"2020-03-25T11:39:42.183Z","duoVictories":1490},{"_id":"5e7c7d1e4fcfb311190f6bd3","date":"2020-03-26T09:59:58.298Z","duoVictories":1508},{"_id":"5e7c7d214fcfb311190f7841","date":"2020-03-26T10:00:01.646Z","duoVictories":1508},{"_id":"5e7c7fff247073121d6e5ed1","date":"2020-03-26T10:12:15.892Z","duoVictories":1508},{"_id":"5e7c80a26a540a1257e5933f","date":"2020-03-26T10:14:58.854Z","duoVictories":1508},{"_id":"5e7c815dcde75912fe794fed","date":"2020-03-26T10:18:05.938Z","duoVictories":1508},{"_id":"5e7c81cefbc5131333898dd3","date":"2020-03-26T10:19:58.702Z","duoVictories":1508},{"_id":"5e7c826f5520b013b8dddff2","date":"2020-03-26T10:22:39.821Z","duoVictories":1508},{"_id":"5e7c8295dd2c1d13f2e14de4","date":"2020-03-26T10:23:17.699Z","duoVictories":1508},{"_id":"5e7c84e507f1e714ad7daa41","date":"2020-03-26T10:33:09.488Z","duoVictories":1508},{"_id":"5e7c854ff193b215039e38ef","date":"2020-03-26T10:34:55.698Z","duoVictories":1508},{"_id":"5e7c8575a21702155156893d","date":"2020-03-26T10:35:33.750Z","duoVictories":1508},{"_id":"5e7c8789d9717e15cfc2422f","duoVictories":1508,"date":"2020-03-26T10:44:25.031Z"}],"bestRoboRumbleTime":406,"bestTimeAsBigBrawler":178,"brawlers":[{"_id":"5e7c8789d9717e15cfc24503","id":16000000,"name":"SHELLY","power":6,"rank":23,"trophies":[{"_id":"5e5e340d63923610bec1b940","date":"2020-03-03T10:40:13.103Z","trophies":579},{"_id":"5e5e351696cb3310ffefe5b8","date":"2020-03-03T10:44:38.819Z","trophies":579},{"_id":"5e5e359296cb3310ffefe84c","date":"2020-03-03T10:46:42.276Z","trophies":579},{"_id":"5e5e359396cb3310ffefeb03","date":"2020-03-03T10:46:43.252Z","trophies":579},{"_id":"5e5e362996cb3310ffefeddd","date":"2020-03-03T10:49:13.284Z","trophies":579},{"_id":"5e5f6c33a1dd9e0c864f745a","date":"2020-03-04T08:52:03.582Z","trophies":610},{"_id":"5e60d598b254e5193e23ff48","date":"2020-03-05T10:34:00.864Z","trophies":610},{"_id":"5e60d9331907390ccd08ebfd","date":"2020-03-05T10:49:23.096Z","trophies":610},{"_id":"5e60d93d1907390ccd08ef63","date":"2020-03-05T10:49:33.145Z","trophies":610},{"_id":"5e60d96c421a2b0d3f13b4bb","date":"2020-03-05T10:50:20.498Z","trophies":610},{"_id":"5e66026f0d2a560df328f2a8","date":"2020-03-09T08:46:39.893Z","trophies":575},{"_id":"5e663c899bda110d6b167041","date":"2020-03-09T12:54:33.649Z","trophies":575},{"_id":"5e66486f0e72e714b570bf5c","date":"2020-03-09T13:45:19.133Z","trophies":575},{"_id":"5e6648c99db2e11524463dd2","date":"2020-03-09T13:46:49.824Z","trophies":575},{"_id":"5e6649760edc431571ddb3e2","date":"2020-03-09T13:49:42.106Z","trophies":575},{"_id":"5e6649d8448ee115be5218f5","date":"2020-03-09T13:51:20.978Z","trophies":575},{"_id":"5e665c0ef23112155b98dbb4","date":"2020-03-09T15:09:02.569Z","trophies":575},{"_id":"5e6751de68c45a0c96b97e88","date":"2020-03-10T08:37:50.582Z","trophies":575},{"_id":"5e67af40ba96e9311ad8dfae","date":"2020-03-10T15:16:16.559Z","trophies":575},{"_id":"5e68a85b3f87d80ed3c9f8f1","date":"2020-03-11T08:59:07.593Z","trophies":575},{"_id":"5e68a89afe9b142ed4d16855","date":"2020-03-11T09:00:10.709Z","trophies":575},{"_id":"5e68ef15bc8b9b14dfc4028a","date":"2020-03-11T14:00:53.596Z","trophies":575},{"_id":"5e68fe8e8f3ad6227084c7d4","date":"2020-03-11T15:06:54.931Z","trophies":575},{"_id":"5e68fecd8f3ad6227084cd1c","date":"2020-03-11T15:07:57.088Z","trophies":575},{"_id":"5e6905a848040627cc4bb90b","date":"2020-03-11T15:37:12.950Z","trophies":575},{"_id":"5e6905f61d2c5c2811112856","date":"2020-03-11T15:38:30.085Z","trophies":575},{"_id":"5e69061b6ce714283a834d3c","date":"2020-03-11T15:39:07.436Z","trophies":575},{"_id":"5e69066a2cf4f0289f50cfcc","date":"2020-03-11T15:40:26.663Z","trophies":575},{"_id":"5e6a01b30c2a2b0e39b5ac9a","date":"2020-03-12T09:32:35.579Z","trophies":575},{"_id":"5e6a0462cc22d90fb718c47b","date":"2020-03-12T09:44:02.925Z","trophies":575},{"_id":"5e6a0d7c3c49db1694cd4315","date":"2020-03-12T10:22:52.262Z","trophies":575},{"_id":"5e6a0dbfcedd9616c1658931","date":"2020-03-12T10:23:59.234Z","trophies":575},{"_id":"5e6a0e92c08cae18e2915618","date":"2020-03-12T10:27:30.592Z","trophies":575},{"_id":"5e6a0ec3d7926b190ac1cb86","date":"2020-03-12T10:28:19.275Z","trophies":575},{"_id":"5e6a5d538a08ca41dd17fb53","date":"2020-03-12T16:03:31.063Z","trophies":575},{"_id":"5e6a5e33483304439e753df1","date":"2020-03-12T16:07:15.731Z","trophies":575},{"_id":"5e6f5e98c41393126e985f35","date":"2020-03-16T11:10:16.375Z","trophies":604},{"_id":"5e6f6efbd6c2921893cfbe0a","date":"2020-03-16T12:20:11.709Z","trophies":604},{"_id":"5e6f6fec7411191b02639c9b","date":"2020-03-16T12:24:12.982Z","trophies":604},{"_id":"5e6f71c9ed1f6a1bfd40a2f7","date":"2020-03-16T12:32:09.575Z","trophies":604},{"_id":"5e6f7206add1a21c28252686","date":"2020-03-16T12:33:10.472Z","trophies":604},{"_id":"5e6f723d30212e1c4c1ab73b","date":"2020-03-16T12:34:05.272Z","trophies":604},{"_id":"5e6f8de257b17c1c75664a19","date":"2020-03-16T14:32:02.996Z","trophies":604},{"_id":"5e6f915a0e831e2912945177","date":"2020-03-16T14:46:50.430Z","trophies":604},{"_id":"5e6f91c9756e70295d61eda5","date":"2020-03-16T14:48:41.878Z","trophies":604},{"_id":"5e6f92dd566fb229dcb28b79","date":"2020-03-16T14:53:17.595Z","trophies":604},{"_id":"5e6facf1ed158d107e9874b7","date":"2020-03-16T16:44:33.604Z","trophies":604},{"_id":"5e6fd9f5f130840cbc5109ca","date":"2020-03-16T19:56:37.376Z","trophies":604},{"_id":"5e6fda00f130840cbc511265","date":"2020-03-16T19:56:48.784Z","trophies":604},{"_id":"5e70a5fd5b736311ac3492a0","date":"2020-03-17T10:27:09.088Z","trophies":604},{"_id":"5e70b9ea7474a21c42806df1","date":"2020-03-17T11:52:10.844Z","trophies":604},{"_id":"5e70be228bde5f1e0dd7ddcb","date":"2020-03-17T12:10:10.869Z","trophies":604},{"_id":"5e70bf50817c301e9c9e91d0","date":"2020-03-17T12:15:12.695Z","trophies":604},{"_id":"5e71fab90a2fff0e82bb0ca6","date":"2020-03-18T10:40:57.976Z","trophies":604},{"_id":"5e722dc8a8fa0e1995609359","date":"2020-03-18T14:18:48.937Z","trophies":604},{"_id":"5e787d80b04cc713a9c1e749","date":"2020-03-23T09:12:32.134Z","trophies":575},{"_id":"5e789f39eab0592060e21d87","date":"2020-03-23T11:36:25.190Z","trophies":575},{"_id":"5e789ff847f87720de47a724","date":"2020-03-23T11:39:36.471Z","trophies":575},{"_id":"5e78b0b3a4873e2751c5c0c9","date":"2020-03-23T12:50:59.841Z","trophies":575},{"_id":"5e78b12aa4873e2751c5cb1f","date":"2020-03-23T12:52:58.474Z","trophies":575},{"_id":"5e78b24d47d28127ff02ea0e","date":"2020-03-23T12:57:49.687Z","trophies":575},{"_id":"5e78b46b9df675288c76e2b4","date":"2020-03-23T13:06:51.740Z","trophies":575},{"_id":"5e78b608dbe81529665c0e5a","date":"2020-03-23T13:13:44.460Z","trophies":575},{"_id":"5e78b719d137662a0dc510ee","date":"2020-03-23T13:18:17.128Z","trophies":575},{"_id":"5e78b7a2ad06602a56d37067","date":"2020-03-23T13:20:34.513Z","trophies":575},{"_id":"5e78b7d9cde4a02a7ed4bd66","date":"2020-03-23T13:21:29.509Z","trophies":575},{"_id":"5e78ba7462cab22bb68bcbef","date":"2020-03-23T13:32:36.515Z","trophies":575},{"_id":"5e78d01033e36b1142bbdaa9","date":"2020-03-23T15:04:48.050Z","trophies":575},{"_id":"5e78d93614d9b6150b1149e6","date":"2020-03-23T15:43:50.091Z","trophies":575},{"_id":"5e78dbb68170fd15faaa4380","date":"2020-03-23T15:54:30.747Z","trophies":575},{"_id":"5e78dbd98170fd15faaa4f5e","date":"2020-03-23T15:55:05.470Z","trophies":575},{"_id":"5e7b42fe7104e91d8931285c","date":"2020-03-25T11:39:42.183Z","trophies":575},{"_id":"5e7c7d1e4fcfb311190f6bd4","date":"2020-03-26T09:59:58.298Z","trophies":575},{"_id":"5e7c7d214fcfb311190f7842","date":"2020-03-26T10:00:01.646Z","trophies":575},{"_id":"5e7c7fff247073121d6e5ed2","date":"2020-03-26T10:12:15.893Z","trophies":575},{"_id":"5e7c80a26a540a1257e59340","date":"2020-03-26T10:14:58.854Z","trophies":575},{"_id":"5e7c815dcde75912fe794fee","date":"2020-03-26T10:18:05.938Z","trophies":575},{"_id":"5e7c81cefbc5131333898dd4","date":"2020-03-26T10:19:58.702Z","trophies":575},{"_id":"5e7c826f5520b013b8dddff3","date":"2020-03-26T10:22:39.821Z","trophies":575},{"_id":"5e7c8295dd2c1d13f2e14de5","date":"2020-03-26T10:23:17.699Z","trophies":575},{"_id":"5e7c84e507f1e714ad7daa42","date":"2020-03-26T10:33:09.488Z","trophies":575},{"_id":"5e7c854ff193b215039e38f0","date":"2020-03-26T10:34:55.699Z","trophies":575},{"_id":"5e7c8575a21702155156893e","date":"2020-03-26T10:35:33.750Z","trophies":575},{"_id":"5e7c8789d9717e15cfc24230","trophies":575,"date":"2020-03-26T10:44:25.031Z"}],"highestTrophies":658,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24558","id":16000001,"name":"COLT","power":8,"rank":24,"trophies":[{"_id":"5e5e340d63923610bec1b942","date":"2020-03-03T10:40:13.104Z","trophies":605},{"_id":"5e5e351696cb3310ffefe5b9","date":"2020-03-03T10:44:38.820Z","trophies":605},{"_id":"5e5e359296cb3310ffefe84d","date":"2020-03-03T10:46:42.277Z","trophies":605},{"_id":"5e5e359396cb3310ffefeb04","date":"2020-03-03T10:46:43.254Z","trophies":605},{"_id":"5e5e362996cb3310ffefedde","date":"2020-03-03T10:49:13.284Z","trophies":605},{"_id":"5e5f6c33a1dd9e0c864f745b","date":"2020-03-04T08:52:03.582Z","trophies":605},{"_id":"5e60d598b254e5193e23ff49","date":"2020-03-05T10:34:00.864Z","trophies":605},{"_id":"5e60d9331907390ccd08ebfe","date":"2020-03-05T10:49:23.097Z","trophies":605},{"_id":"5e60d93d1907390ccd08ef64","date":"2020-03-05T10:49:33.146Z","trophies":605},{"_id":"5e60d96c421a2b0d3f13b4bc","date":"2020-03-05T10:50:20.500Z","trophies":605},{"_id":"5e66026f0d2a560df328f2a9","date":"2020-03-09T08:46:39.894Z","trophies":575},{"_id":"5e663c899bda110d6b167042","date":"2020-03-09T12:54:33.649Z","trophies":575},{"_id":"5e66486f0e72e714b570bf5d","date":"2020-03-09T13:45:19.133Z","trophies":575},{"_id":"5e6648c99db2e11524463dd3","date":"2020-03-09T13:46:49.824Z","trophies":575},{"_id":"5e6649760edc431571ddb3e3","date":"2020-03-09T13:49:42.106Z","trophies":575},{"_id":"5e6649d8448ee115be5218f6","date":"2020-03-09T13:51:20.979Z","trophies":575},{"_id":"5e665c0ef23112155b98dbb5","date":"2020-03-09T15:09:02.569Z","trophies":575},{"_id":"5e6751de68c45a0c96b97e89","date":"2020-03-10T08:37:50.583Z","trophies":585},{"_id":"5e67af40ba96e9311ad8dfaf","date":"2020-03-10T15:16:16.560Z","trophies":585},{"_id":"5e68a85b3f87d80ed3c9f8f2","date":"2020-03-11T08:59:07.594Z","trophies":562},{"_id":"5e68a89afe9b142ed4d16856","date":"2020-03-11T09:00:10.709Z","trophies":562},{"_id":"5e68ef15bc8b9b14dfc4028b","date":"2020-03-11T14:00:53.599Z","trophies":562},{"_id":"5e68fe8e8f3ad6227084c7d5","date":"2020-03-11T15:06:54.932Z","trophies":562},{"_id":"5e68fecd8f3ad6227084cd1d","date":"2020-03-11T15:07:57.088Z","trophies":562},{"_id":"5e6905a848040627cc4bb90c","date":"2020-03-11T15:37:12.952Z","trophies":562},{"_id":"5e6905f61d2c5c2811112857","date":"2020-03-11T15:38:30.086Z","trophies":562},{"_id":"5e69061b6ce714283a834d3d","date":"2020-03-11T15:39:07.437Z","trophies":562},{"_id":"5e69066a2cf4f0289f50cfcd","date":"2020-03-11T15:40:26.665Z","trophies":562},{"_id":"5e6a01b30c2a2b0e39b5ac9b","date":"2020-03-12T09:32:35.579Z","trophies":602},{"_id":"5e6a0462cc22d90fb718c47c","date":"2020-03-12T09:44:02.925Z","trophies":602},{"_id":"5e6a0d7c3c49db1694cd4316","date":"2020-03-12T10:22:52.263Z","trophies":602},{"_id":"5e6a0dbfcedd9616c1658932","date":"2020-03-12T10:23:59.234Z","trophies":602},{"_id":"5e6a0e92c08cae18e2915619","date":"2020-03-12T10:27:30.592Z","trophies":602},{"_id":"5e6a0ec3d7926b190ac1cb87","date":"2020-03-12T10:28:19.275Z","trophies":602},{"_id":"5e6a5d538a08ca41dd17fb54","date":"2020-03-12T16:03:31.063Z","trophies":602},{"_id":"5e6a5e33483304439e753df2","date":"2020-03-12T16:07:15.734Z","trophies":602},{"_id":"5e6f5e98c41393126e985f36","date":"2020-03-16T11:10:16.376Z","trophies":602},{"_id":"5e6f6efbd6c2921893cfbe0b","date":"2020-03-16T12:20:11.709Z","trophies":602},{"_id":"5e6f6fec7411191b02639c9c","date":"2020-03-16T12:24:12.983Z","trophies":602},{"_id":"5e6f71c9ed1f6a1bfd40a2f8","date":"2020-03-16T12:32:09.575Z","trophies":602},{"_id":"5e6f7206add1a21c28252687","date":"2020-03-16T12:33:10.472Z","trophies":602},{"_id":"5e6f723d30212e1c4c1ab73c","date":"2020-03-16T12:34:05.272Z","trophies":602},{"_id":"5e6f8de257b17c1c75664a1a","date":"2020-03-16T14:32:02.996Z","trophies":602},{"_id":"5e6f915a0e831e2912945178","date":"2020-03-16T14:46:50.431Z","trophies":602},{"_id":"5e6f91c9756e70295d61eda6","date":"2020-03-16T14:48:41.879Z","trophies":602},{"_id":"5e6f92dd566fb229dcb28b7a","date":"2020-03-16T14:53:17.596Z","trophies":602},{"_id":"5e6facf1ed158d107e9874b8","date":"2020-03-16T16:44:33.604Z","trophies":602},{"_id":"5e6fd9f5f130840cbc5109cb","date":"2020-03-16T19:56:37.376Z","trophies":602},{"_id":"5e6fda00f130840cbc511266","date":"2020-03-16T19:56:48.784Z","trophies":602},{"_id":"5e70a5fd5b736311ac3492a1","date":"2020-03-17T10:27:09.088Z","trophies":602},{"_id":"5e70b9ea7474a21c42806df2","date":"2020-03-17T11:52:10.845Z","trophies":602},{"_id":"5e70be228bde5f1e0dd7ddcc","date":"2020-03-17T12:10:10.869Z","trophies":602},{"_id":"5e70bf50817c301e9c9e91d1","date":"2020-03-17T12:15:12.695Z","trophies":602},{"_id":"5e71fab90a2fff0e82bb0ca7","date":"2020-03-18T10:40:57.977Z","trophies":602},{"_id":"5e722dc8a8fa0e199560935a","date":"2020-03-18T14:18:48.938Z","trophies":602},{"_id":"5e787d80b04cc713a9c1e74a","date":"2020-03-23T09:12:32.134Z","trophies":575},{"_id":"5e789f39eab0592060e21d88","date":"2020-03-23T11:36:25.190Z","trophies":575},{"_id":"5e789ff847f87720de47a725","date":"2020-03-23T11:39:36.471Z","trophies":575},{"_id":"5e78b0b3a4873e2751c5c0ca","date":"2020-03-23T12:50:59.842Z","trophies":575},{"_id":"5e78b12aa4873e2751c5cb20","date":"2020-03-23T12:52:58.474Z","trophies":575},{"_id":"5e78b24d47d28127ff02ea0f","date":"2020-03-23T12:57:49.687Z","trophies":575},{"_id":"5e78b46b9df675288c76e2b5","date":"2020-03-23T13:06:51.740Z","trophies":575},{"_id":"5e78b608dbe81529665c0e5b","date":"2020-03-23T13:13:44.461Z","trophies":575},{"_id":"5e78b719d137662a0dc510ef","date":"2020-03-23T13:18:17.130Z","trophies":575},{"_id":"5e78b7a2ad06602a56d37068","date":"2020-03-23T13:20:34.514Z","trophies":575},{"_id":"5e78b7d9cde4a02a7ed4bd67","date":"2020-03-23T13:21:29.510Z","trophies":575},{"_id":"5e78ba7462cab22bb68bcbf0","date":"2020-03-23T13:32:36.515Z","trophies":575},{"_id":"5e78d01033e36b1142bbdaaa","date":"2020-03-23T15:04:48.051Z","trophies":575},{"_id":"5e78d93614d9b6150b1149e7","date":"2020-03-23T15:43:50.091Z","trophies":575},{"_id":"5e78dbb68170fd15faaa4381","date":"2020-03-23T15:54:30.747Z","trophies":575},{"_id":"5e78dbd98170fd15faaa4f5f","date":"2020-03-23T15:55:05.470Z","trophies":575},{"_id":"5e7b42fe7104e91d8931285d","date":"2020-03-25T11:39:42.183Z","trophies":575},{"_id":"5e7c7d1e4fcfb311190f6bd5","date":"2020-03-26T09:59:58.299Z","trophies":608},{"_id":"5e7c7d214fcfb311190f7843","date":"2020-03-26T10:00:01.647Z","trophies":608},{"_id":"5e7c7fff247073121d6e5ed3","date":"2020-03-26T10:12:15.893Z","trophies":608},{"_id":"5e7c80a26a540a1257e59341","date":"2020-03-26T10:14:58.855Z","trophies":608},{"_id":"5e7c815dcde75912fe794fef","date":"2020-03-26T10:18:05.939Z","trophies":608},{"_id":"5e7c81cefbc5131333898dd5","date":"2020-03-26T10:19:58.702Z","trophies":608},{"_id":"5e7c826f5520b013b8dddff4","date":"2020-03-26T10:22:39.821Z","trophies":608},{"_id":"5e7c8295dd2c1d13f2e14de6","date":"2020-03-26T10:23:17.700Z","trophies":608},{"_id":"5e7c84e507f1e714ad7daa43","date":"2020-03-26T10:33:09.489Z","trophies":608},{"_id":"5e7c854ff193b215039e38f1","date":"2020-03-26T10:34:55.699Z","trophies":608},{"_id":"5e7c8575a21702155156893f","date":"2020-03-26T10:35:33.751Z","trophies":608},{"_id":"5e7c8789d9717e15cfc24231","trophies":608,"date":"2020-03-26T10:44:25.032Z"}],"highestTrophies":702,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc245ad","id":16000002,"name":"BULL","power":10,"rank":24,"trophies":[{"_id":"5e5e340d63923610bec1b944","date":"2020-03-03T10:40:13.105Z","trophies":623},{"_id":"5e5e351696cb3310ffefe5ba","date":"2020-03-03T10:44:38.821Z","trophies":623},{"_id":"5e5e359296cb3310ffefe84e","date":"2020-03-03T10:46:42.278Z","trophies":623},{"_id":"5e5e359396cb3310ffefeb05","date":"2020-03-03T10:46:43.255Z","trophies":623},{"_id":"5e5e362996cb3310ffefeddf","date":"2020-03-03T10:49:13.287Z","trophies":623},{"_id":"5e5f6c33a1dd9e0c864f745c","date":"2020-03-04T08:52:03.582Z","trophies":651},{"_id":"5e60d598b254e5193e23ff4a","date":"2020-03-05T10:34:00.865Z","trophies":651},{"_id":"5e60d9331907390ccd08ebff","date":"2020-03-05T10:49:23.097Z","trophies":651},{"_id":"5e60d93d1907390ccd08ef65","date":"2020-03-05T10:49:33.146Z","trophies":651},{"_id":"5e60d96c421a2b0d3f13b4bd","date":"2020-03-05T10:50:20.500Z","trophies":651},{"_id":"5e66026f0d2a560df328f2aa","date":"2020-03-09T08:46:39.894Z","trophies":650},{"_id":"5e663c899bda110d6b167043","date":"2020-03-09T12:54:33.649Z","trophies":650},{"_id":"5e66486f0e72e714b570bf5e","date":"2020-03-09T13:45:19.133Z","trophies":650},{"_id":"5e6648c99db2e11524463dd4","date":"2020-03-09T13:46:49.825Z","trophies":650},{"_id":"5e6649760edc431571ddb3e4","date":"2020-03-09T13:49:42.106Z","trophies":650},{"_id":"5e6649d8448ee115be5218f7","date":"2020-03-09T13:51:20.979Z","trophies":650},{"_id":"5e665c0ef23112155b98dbb6","date":"2020-03-09T15:09:02.570Z","trophies":650},{"_id":"5e6751de68c45a0c96b97e8a","date":"2020-03-10T08:37:50.583Z","trophies":650},{"_id":"5e67af40ba96e9311ad8dfb0","date":"2020-03-10T15:16:16.560Z","trophies":650},{"_id":"5e68a85b3f87d80ed3c9f8f3","date":"2020-03-11T08:59:07.594Z","trophies":650},{"_id":"5e68a89afe9b142ed4d16857","date":"2020-03-11T09:00:10.709Z","trophies":650},{"_id":"5e68ef15bc8b9b14dfc4028c","date":"2020-03-11T14:00:53.599Z","trophies":650},{"_id":"5e68fe8e8f3ad6227084c7d6","date":"2020-03-11T15:06:54.932Z","trophies":650},{"_id":"5e68fecd8f3ad6227084cd1e","date":"2020-03-11T15:07:57.088Z","trophies":650},{"_id":"5e6905a848040627cc4bb90d","date":"2020-03-11T15:37:12.953Z","trophies":650},{"_id":"5e6905f61d2c5c2811112858","date":"2020-03-11T15:38:30.086Z","trophies":650},{"_id":"5e69061b6ce714283a834d3e","date":"2020-03-11T15:39:07.437Z","trophies":650},{"_id":"5e69066a2cf4f0289f50cfce","date":"2020-03-11T15:40:26.666Z","trophies":650},{"_id":"5e6a01b30c2a2b0e39b5ac9c","date":"2020-03-12T09:32:35.579Z","trophies":709},{"_id":"5e6a0462cc22d90fb718c47d","date":"2020-03-12T09:44:02.925Z","trophies":709},{"_id":"5e6a0d7c3c49db1694cd4317","date":"2020-03-12T10:22:52.263Z","trophies":709},{"_id":"5e6a0dbfcedd9616c1658933","date":"2020-03-12T10:23:59.234Z","trophies":709},{"_id":"5e6a0e92c08cae18e291561a","date":"2020-03-12T10:27:30.592Z","trophies":709},{"_id":"5e6a0ec3d7926b190ac1cb88","date":"2020-03-12T10:28:19.276Z","trophies":709},{"_id":"5e6a5d538a08ca41dd17fb55","date":"2020-03-12T16:03:31.063Z","trophies":709},{"_id":"5e6a5e33483304439e753df3","date":"2020-03-12T16:07:15.735Z","trophies":709},{"_id":"5e6f5e98c41393126e985f37","date":"2020-03-16T11:10:16.376Z","trophies":669},{"_id":"5e6f6efbd6c2921893cfbe0c","date":"2020-03-16T12:20:11.710Z","trophies":669},{"_id":"5e6f6fec7411191b02639c9d","date":"2020-03-16T12:24:12.983Z","trophies":669},{"_id":"5e6f71c9ed1f6a1bfd40a2f9","date":"2020-03-16T12:32:09.575Z","trophies":669},{"_id":"5e6f7206add1a21c28252688","date":"2020-03-16T12:33:10.472Z","trophies":669},{"_id":"5e6f723d30212e1c4c1ab73d","date":"2020-03-16T12:34:05.273Z","trophies":669},{"_id":"5e6f8de257b17c1c75664a1b","date":"2020-03-16T14:32:02.996Z","trophies":669},{"_id":"5e6f915a0e831e2912945179","date":"2020-03-16T14:46:50.431Z","trophies":669},{"_id":"5e6f91c9756e70295d61eda7","date":"2020-03-16T14:48:41.879Z","trophies":669},{"_id":"5e6f92dd566fb229dcb28b7b","date":"2020-03-16T14:53:17.596Z","trophies":669},{"_id":"5e6facf1ed158d107e9874b9","date":"2020-03-16T16:44:33.605Z","trophies":669},{"_id":"5e6fd9f5f130840cbc5109cc","date":"2020-03-16T19:56:37.376Z","trophies":669},{"_id":"5e6fda00f130840cbc511267","date":"2020-03-16T19:56:48.784Z","trophies":669},{"_id":"5e70a5fd5b736311ac3492a2","date":"2020-03-17T10:27:09.088Z","trophies":669},{"_id":"5e70b9ea7474a21c42806df3","date":"2020-03-17T11:52:10.845Z","trophies":669},{"_id":"5e70be228bde5f1e0dd7ddcd","date":"2020-03-17T12:10:10.869Z","trophies":669},{"_id":"5e70bf50817c301e9c9e91d2","date":"2020-03-17T12:15:12.695Z","trophies":669},{"_id":"5e71fab90a2fff0e82bb0ca8","date":"2020-03-18T10:40:57.978Z","trophies":701},{"_id":"5e722dc8a8fa0e199560935b","date":"2020-03-18T14:18:48.938Z","trophies":701},{"_id":"5e787d80b04cc713a9c1e74b","date":"2020-03-23T09:12:32.134Z","trophies":650},{"_id":"5e789f39eab0592060e21d89","date":"2020-03-23T11:36:25.190Z","trophies":650},{"_id":"5e789ff847f87720de47a726","date":"2020-03-23T11:39:36.471Z","trophies":650},{"_id":"5e78b0b3a4873e2751c5c0cb","date":"2020-03-23T12:50:59.842Z","trophies":650},{"_id":"5e78b12aa4873e2751c5cb21","date":"2020-03-23T12:52:58.474Z","trophies":650},{"_id":"5e78b24d47d28127ff02ea10","date":"2020-03-23T12:57:49.687Z","trophies":650},{"_id":"5e78b46b9df675288c76e2b6","date":"2020-03-23T13:06:51.748Z","trophies":650},{"_id":"5e78b608dbe81529665c0e5c","date":"2020-03-23T13:13:44.462Z","trophies":650},{"_id":"5e78b719d137662a0dc510f0","date":"2020-03-23T13:18:17.131Z","trophies":650},{"_id":"5e78b7a2ad06602a56d37069","date":"2020-03-23T13:20:34.514Z","trophies":650},{"_id":"5e78b7d9cde4a02a7ed4bd68","date":"2020-03-23T13:21:29.510Z","trophies":650},{"_id":"5e78ba7462cab22bb68bcbf1","date":"2020-03-23T13:32:36.516Z","trophies":650},{"_id":"5e78d01033e36b1142bbdaab","date":"2020-03-23T15:04:48.051Z","trophies":650},{"_id":"5e78d93614d9b6150b1149e8","date":"2020-03-23T15:43:50.092Z","trophies":650},{"_id":"5e78dbb68170fd15faaa4382","date":"2020-03-23T15:54:30.748Z","trophies":650},{"_id":"5e78dbd98170fd15faaa4f60","date":"2020-03-23T15:55:05.470Z","trophies":650},{"_id":"5e7b42fe7104e91d8931285e","date":"2020-03-25T11:39:42.183Z","trophies":650},{"_id":"5e7c7d1e4fcfb311190f6bd6","date":"2020-03-26T09:59:58.299Z","trophies":704},{"_id":"5e7c7d214fcfb311190f7844","date":"2020-03-26T10:00:01.647Z","trophies":704},{"_id":"5e7c7fff247073121d6e5ed4","date":"2020-03-26T10:12:15.893Z","trophies":704},{"_id":"5e7c80a26a540a1257e59342","date":"2020-03-26T10:14:58.855Z","trophies":704},{"_id":"5e7c815dcde75912fe794ff0","date":"2020-03-26T10:18:05.939Z","trophies":704},{"_id":"5e7c81cefbc5131333898dd6","date":"2020-03-26T10:19:58.702Z","trophies":704},{"_id":"5e7c826f5520b013b8dddff5","date":"2020-03-26T10:22:39.821Z","trophies":704},{"_id":"5e7c8295dd2c1d13f2e14de7","date":"2020-03-26T10:23:17.700Z","trophies":704},{"_id":"5e7c84e507f1e714ad7daa44","date":"2020-03-26T10:33:09.490Z","trophies":704},{"_id":"5e7c854ff193b215039e38f2","date":"2020-03-26T10:34:55.699Z","trophies":704},{"_id":"5e7c8575a217021551568940","date":"2020-03-26T10:35:33.751Z","trophies":704},{"_id":"5e7c8789d9717e15cfc24232","trophies":704,"date":"2020-03-26T10:44:25.032Z"}],"highestTrophies":749,"starPowers":[{"_id":"5e7c8789d9717e15cfc24602","id":23000137,"name":"Tough Guy"}]},{"_id":"5e7c8789d9717e15cfc24603","id":16000003,"name":"BROCK","power":8,"rank":23,"trophies":[{"_id":"5e5e340d63923610bec1b946","date":"2020-03-03T10:40:13.105Z","trophies":516},{"_id":"5e5e351696cb3310ffefe5bb","date":"2020-03-03T10:44:38.822Z","trophies":516},{"_id":"5e5e359296cb3310ffefe84f","date":"2020-03-03T10:46:42.279Z","trophies":516},{"_id":"5e5e359396cb3310ffefeb06","date":"2020-03-03T10:46:43.256Z","trophies":516},{"_id":"5e5e362996cb3310ffefede0","date":"2020-03-03T10:49:13.288Z","trophies":516},{"_id":"5e5f6c33a1dd9e0c864f745d","date":"2020-03-04T08:52:03.584Z","trophies":532},{"_id":"5e60d598b254e5193e23ff4b","date":"2020-03-05T10:34:00.865Z","trophies":524},{"_id":"5e60d9331907390ccd08ec00","date":"2020-03-05T10:49:23.097Z","trophies":524},{"_id":"5e60d93d1907390ccd08ef66","date":"2020-03-05T10:49:33.146Z","trophies":524},{"_id":"5e60d96c421a2b0d3f13b4be","date":"2020-03-05T10:50:20.501Z","trophies":524},{"_id":"5e66026f0d2a560df328f2ab","date":"2020-03-09T08:46:39.894Z","trophies":575},{"_id":"5e663c899bda110d6b167044","date":"2020-03-09T12:54:33.649Z","trophies":575},{"_id":"5e66486f0e72e714b570bf5f","date":"2020-03-09T13:45:19.133Z","trophies":575},{"_id":"5e6648c99db2e11524463dd5","date":"2020-03-09T13:46:49.825Z","trophies":575},{"_id":"5e6649760edc431571ddb3e5","date":"2020-03-09T13:49:42.106Z","trophies":575},{"_id":"5e6649d8448ee115be5218f8","date":"2020-03-09T13:51:20.980Z","trophies":575},{"_id":"5e665c0ef23112155b98dbb7","date":"2020-03-09T15:09:02.570Z","trophies":575},{"_id":"5e6751de68c45a0c96b97e8b","date":"2020-03-10T08:37:50.584Z","trophies":575},{"_id":"5e67af40ba96e9311ad8dfb1","date":"2020-03-10T15:16:16.560Z","trophies":575},{"_id":"5e68a85b3f87d80ed3c9f8f4","date":"2020-03-11T08:59:07.594Z","trophies":581},{"_id":"5e68a89afe9b142ed4d16858","date":"2020-03-11T09:00:10.710Z","trophies":581},{"_id":"5e68ef15bc8b9b14dfc4028d","date":"2020-03-11T14:00:53.600Z","trophies":581},{"_id":"5e68fe8e8f3ad6227084c7d7","date":"2020-03-11T15:06:54.933Z","trophies":581},{"_id":"5e68fecd8f3ad6227084cd1f","date":"2020-03-11T15:07:57.089Z","trophies":581},{"_id":"5e6905a848040627cc4bb90e","date":"2020-03-11T15:37:12.953Z","trophies":581},{"_id":"5e6905f61d2c5c2811112859","date":"2020-03-11T15:38:30.086Z","trophies":581},{"_id":"5e69061b6ce714283a834d3f","date":"2020-03-11T15:39:07.438Z","trophies":581},{"_id":"5e69066a2cf4f0289f50cfcf","date":"2020-03-11T15:40:26.667Z","trophies":581},{"_id":"5e6a01b30c2a2b0e39b5ac9d","date":"2020-03-12T09:32:35.579Z","trophies":581},{"_id":"5e6a0462cc22d90fb718c47e","date":"2020-03-12T09:44:02.926Z","trophies":581},{"_id":"5e6a0d7c3c49db1694cd4318","date":"2020-03-12T10:22:52.263Z","trophies":581},{"_id":"5e6a0dbfcedd9616c1658934","date":"2020-03-12T10:23:59.234Z","trophies":581},{"_id":"5e6a0e92c08cae18e291561b","date":"2020-03-12T10:27:30.592Z","trophies":581},{"_id":"5e6a0ec3d7926b190ac1cb89","date":"2020-03-12T10:28:19.276Z","trophies":581},{"_id":"5e6a5d538a08ca41dd17fb56","date":"2020-03-12T16:03:31.063Z","trophies":581},{"_id":"5e6a5e33483304439e753df4","date":"2020-03-12T16:07:15.736Z","trophies":581},{"_id":"5e6f5e98c41393126e985f38","date":"2020-03-16T11:10:16.376Z","trophies":568},{"_id":"5e6f6efbd6c2921893cfbe0d","date":"2020-03-16T12:20:11.710Z","trophies":568},{"_id":"5e6f6fec7411191b02639c9e","date":"2020-03-16T12:24:12.983Z","trophies":568},{"_id":"5e6f71c9ed1f6a1bfd40a2fa","date":"2020-03-16T12:32:09.575Z","trophies":568},{"_id":"5e6f7206add1a21c28252689","date":"2020-03-16T12:33:10.473Z","trophies":568},{"_id":"5e6f723d30212e1c4c1ab73e","date":"2020-03-16T12:34:05.273Z","trophies":568},{"_id":"5e6f8de257b17c1c75664a1c","date":"2020-03-16T14:32:02.997Z","trophies":568},{"_id":"5e6f915a0e831e291294517a","date":"2020-03-16T14:46:50.431Z","trophies":568},{"_id":"5e6f91c9756e70295d61eda8","date":"2020-03-16T14:48:41.879Z","trophies":568},{"_id":"5e6f92dd566fb229dcb28b7c","date":"2020-03-16T14:53:17.596Z","trophies":568},{"_id":"5e6facf1ed158d107e9874ba","date":"2020-03-16T16:44:33.605Z","trophies":568},{"_id":"5e6fd9f5f130840cbc5109cd","date":"2020-03-16T19:56:37.377Z","trophies":568},{"_id":"5e6fda00f130840cbc511268","date":"2020-03-16T19:56:48.785Z","trophies":568},{"_id":"5e70a5fd5b736311ac3492a3","date":"2020-03-17T10:27:09.089Z","trophies":568},{"_id":"5e70b9ea7474a21c42806df4","date":"2020-03-17T11:52:10.845Z","trophies":583},{"_id":"5e70be228bde5f1e0dd7ddce","date":"2020-03-17T12:10:10.869Z","trophies":583},{"_id":"5e70bf50817c301e9c9e91d3","date":"2020-03-17T12:15:12.695Z","trophies":583},{"_id":"5e71fab90a2fff0e82bb0ca9","date":"2020-03-18T10:40:57.978Z","trophies":583},{"_id":"5e722dc8a8fa0e199560935c","date":"2020-03-18T14:18:48.938Z","trophies":583},{"_id":"5e787d80b04cc713a9c1e74c","date":"2020-03-23T09:12:32.134Z","trophies":575},{"_id":"5e789f39eab0592060e21d8a","date":"2020-03-23T11:36:25.191Z","trophies":575},{"_id":"5e789ff847f87720de47a727","date":"2020-03-23T11:39:36.471Z","trophies":575},{"_id":"5e78b0b3a4873e2751c5c0cc","date":"2020-03-23T12:50:59.842Z","trophies":575},{"_id":"5e78b12aa4873e2751c5cb22","date":"2020-03-23T12:52:58.474Z","trophies":575},{"_id":"5e78b24d47d28127ff02ea11","date":"2020-03-23T12:57:49.688Z","trophies":575},{"_id":"5e78b46b9df675288c76e2b7","date":"2020-03-23T13:06:51.748Z","trophies":575},{"_id":"5e78b608dbe81529665c0e5d","date":"2020-03-23T13:13:44.462Z","trophies":575},{"_id":"5e78b719d137662a0dc510f1","date":"2020-03-23T13:18:17.131Z","trophies":575},{"_id":"5e78b7a2ad06602a56d3706a","date":"2020-03-23T13:20:34.515Z","trophies":575},{"_id":"5e78b7d9cde4a02a7ed4bd69","date":"2020-03-23T13:21:29.510Z","trophies":575},{"_id":"5e78ba7462cab22bb68bcbf2","date":"2020-03-23T13:32:36.516Z","trophies":575},{"_id":"5e78d01033e36b1142bbdaac","date":"2020-03-23T15:04:48.051Z","trophies":575},{"_id":"5e78d93614d9b6150b1149e9","date":"2020-03-23T15:43:50.092Z","trophies":575},{"_id":"5e78dbb68170fd15faaa4383","date":"2020-03-23T15:54:30.748Z","trophies":575},{"_id":"5e78dbd98170fd15faaa4f61","date":"2020-03-23T15:55:05.470Z","trophies":575},{"_id":"5e7b42fe7104e91d8931285f","date":"2020-03-25T11:39:42.183Z","trophies":565},{"_id":"5e7c7d1e4fcfb311190f6bd7","date":"2020-03-26T09:59:58.299Z","trophies":565},{"_id":"5e7c7d214fcfb311190f7845","date":"2020-03-26T10:00:01.647Z","trophies":565},{"_id":"5e7c7fff247073121d6e5ed5","date":"2020-03-26T10:12:15.893Z","trophies":565},{"_id":"5e7c80a26a540a1257e59343","date":"2020-03-26T10:14:58.855Z","trophies":565},{"_id":"5e7c815dcde75912fe794ff1","date":"2020-03-26T10:18:05.939Z","trophies":565},{"_id":"5e7c81cefbc5131333898dd7","date":"2020-03-26T10:19:58.703Z","trophies":565},{"_id":"5e7c826f5520b013b8dddff6","date":"2020-03-26T10:22:39.822Z","trophies":565},{"_id":"5e7c8295dd2c1d13f2e14de8","date":"2020-03-26T10:23:17.700Z","trophies":565},{"_id":"5e7c84e507f1e714ad7daa45","date":"2020-03-26T10:33:09.490Z","trophies":565},{"_id":"5e7c854ff193b215039e38f3","date":"2020-03-26T10:34:55.700Z","trophies":565},{"_id":"5e7c8575a217021551568941","date":"2020-03-26T10:35:33.751Z","trophies":565},{"_id":"5e7c8789d9717e15cfc24233","trophies":565,"date":"2020-03-26T10:44:25.032Z"}],"highestTrophies":654,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24658","id":16000004,"name":"RICO","power":6,"rank":22,"trophies":[{"_id":"5e5e340d63923610bec1b948","date":"2020-03-03T10:40:13.105Z","trophies":580},{"_id":"5e5e351696cb3310ffefe5bc","date":"2020-03-03T10:44:38.822Z","trophies":580},{"_id":"5e5e359296cb3310ffefe850","date":"2020-03-03T10:46:42.280Z","trophies":580},{"_id":"5e5e359396cb3310ffefeb07","date":"2020-03-03T10:46:43.256Z","trophies":580},{"_id":"5e5e362996cb3310ffefede1","date":"2020-03-03T10:49:13.290Z","trophies":580},{"_id":"5e5f6c33a1dd9e0c864f745e","date":"2020-03-04T08:52:03.585Z","trophies":600},{"_id":"5e60d598b254e5193e23ff4c","date":"2020-03-05T10:34:00.868Z","trophies":600},{"_id":"5e60d9331907390ccd08ec01","date":"2020-03-05T10:49:23.098Z","trophies":600},{"_id":"5e60d93d1907390ccd08ef67","date":"2020-03-05T10:49:33.146Z","trophies":600},{"_id":"5e60d96c421a2b0d3f13b4bf","date":"2020-03-05T10:50:20.501Z","trophies":600},{"_id":"5e66026f0d2a560df328f2ac","date":"2020-03-09T08:46:39.894Z","trophies":575},{"_id":"5e663c899bda110d6b167045","date":"2020-03-09T12:54:33.649Z","trophies":575},{"_id":"5e66486f0e72e714b570bf60","date":"2020-03-09T13:45:19.134Z","trophies":575},{"_id":"5e6648c99db2e11524463dd6","date":"2020-03-09T13:46:49.826Z","trophies":575},{"_id":"5e6649760edc431571ddb3e6","date":"2020-03-09T13:49:42.106Z","trophies":575},{"_id":"5e6649d8448ee115be5218f9","date":"2020-03-09T13:51:20.980Z","trophies":575},{"_id":"5e665c0ef23112155b98dbb8","date":"2020-03-09T15:09:02.571Z","trophies":575},{"_id":"5e6751de68c45a0c96b97e8c","date":"2020-03-10T08:37:50.584Z","trophies":575},{"_id":"5e67af40ba96e9311ad8dfb2","date":"2020-03-10T15:16:16.560Z","trophies":575},{"_id":"5e68a85b3f87d80ed3c9f8f5","date":"2020-03-11T08:59:07.594Z","trophies":575},{"_id":"5e68a89afe9b142ed4d16859","date":"2020-03-11T09:00:10.710Z","trophies":575},{"_id":"5e68ef15bc8b9b14dfc4028e","date":"2020-03-11T14:00:53.600Z","trophies":575},{"_id":"5e68fe8e8f3ad6227084c7d8","date":"2020-03-11T15:06:54.933Z","trophies":575},{"_id":"5e68fecd8f3ad6227084cd20","date":"2020-03-11T15:07:57.089Z","trophies":575},{"_id":"5e6905a848040627cc4bb90f","date":"2020-03-11T15:37:12.954Z","trophies":575},{"_id":"5e6905f61d2c5c281111285a","date":"2020-03-11T15:38:30.086Z","trophies":575},{"_id":"5e69061b6ce714283a834d40","date":"2020-03-11T15:39:07.439Z","trophies":575},{"_id":"5e69066a2cf4f0289f50cfd0","date":"2020-03-11T15:40:26.669Z","trophies":575},{"_id":"5e6a01b30c2a2b0e39b5ac9e","date":"2020-03-12T09:32:35.579Z","trophies":575},{"_id":"5e6a0462cc22d90fb718c47f","date":"2020-03-12T09:44:02.927Z","trophies":575},{"_id":"5e6a0d7c3c49db1694cd4319","date":"2020-03-12T10:22:52.263Z","trophies":575},{"_id":"5e6a0dbfcedd9616c1658935","date":"2020-03-12T10:23:59.235Z","trophies":575},{"_id":"5e6a0e92c08cae18e291561c","date":"2020-03-12T10:27:30.593Z","trophies":575},{"_id":"5e6a0ec3d7926b190ac1cb8a","date":"2020-03-12T10:28:19.276Z","trophies":575},{"_id":"5e6a5d538a08ca41dd17fb57","date":"2020-03-12T16:03:31.063Z","trophies":575},{"_id":"5e6a5e33483304439e753df5","date":"2020-03-12T16:07:15.737Z","trophies":575},{"_id":"5e6f5e98c41393126e985f39","date":"2020-03-16T11:10:16.377Z","trophies":575},{"_id":"5e6f6efbd6c2921893cfbe0e","date":"2020-03-16T12:20:11.710Z","trophies":575},{"_id":"5e6f6fec7411191b02639c9f","date":"2020-03-16T12:24:12.983Z","trophies":575},{"_id":"5e6f71c9ed1f6a1bfd40a2fb","date":"2020-03-16T12:32:09.576Z","trophies":575},{"_id":"5e6f7206add1a21c2825268a","date":"2020-03-16T12:33:10.473Z","trophies":575},{"_id":"5e6f723d30212e1c4c1ab73f","date":"2020-03-16T12:34:05.273Z","trophies":575},{"_id":"5e6f8de257b17c1c75664a1d","date":"2020-03-16T14:32:02.997Z","trophies":575},{"_id":"5e6f915a0e831e291294517b","date":"2020-03-16T14:46:50.431Z","trophies":575},{"_id":"5e6f91c9756e70295d61eda9","date":"2020-03-16T14:48:41.880Z","trophies":575},{"_id":"5e6f92dd566fb229dcb28b7d","date":"2020-03-16T14:53:17.597Z","trophies":575},{"_id":"5e6facf1ed158d107e9874bb","date":"2020-03-16T16:44:33.605Z","trophies":575},{"_id":"5e6fd9f5f130840cbc5109ce","date":"2020-03-16T19:56:37.377Z","trophies":575},{"_id":"5e6fda00f130840cbc511269","date":"2020-03-16T19:56:48.785Z","trophies":575},{"_id":"5e70a5fd5b736311ac3492a4","date":"2020-03-17T10:27:09.089Z","trophies":575},{"_id":"5e70b9ea7474a21c42806df5","date":"2020-03-17T11:52:10.845Z","trophies":575},{"_id":"5e70be228bde5f1e0dd7ddcf","date":"2020-03-17T12:10:10.869Z","trophies":575},{"_id":"5e70bf50817c301e9c9e91d4","date":"2020-03-17T12:15:12.695Z","trophies":575},{"_id":"5e71fab90a2fff0e82bb0caa","date":"2020-03-18T10:40:57.978Z","trophies":575},{"_id":"5e722dc8a8fa0e199560935d","date":"2020-03-18T14:18:48.939Z","trophies":575},{"_id":"5e787d80b04cc713a9c1e74d","date":"2020-03-23T09:12:32.135Z","trophies":575},{"_id":"5e789f39eab0592060e21d8b","date":"2020-03-23T11:36:25.191Z","trophies":575},{"_id":"5e789ff847f87720de47a728","date":"2020-03-23T11:39:36.472Z","trophies":575},{"_id":"5e78b0b3a4873e2751c5c0cd","date":"2020-03-23T12:50:59.842Z","trophies":575},{"_id":"5e78b12aa4873e2751c5cb23","date":"2020-03-23T12:52:58.474Z","trophies":575},{"_id":"5e78b24d47d28127ff02ea12","date":"2020-03-23T12:57:49.688Z","trophies":575},{"_id":"5e78b46b9df675288c76e2b8","date":"2020-03-23T13:06:51.755Z","trophies":575},{"_id":"5e78b608dbe81529665c0e5e","date":"2020-03-23T13:13:44.462Z","trophies":575},{"_id":"5e78b719d137662a0dc510f2","date":"2020-03-23T13:18:17.131Z","trophies":575},{"_id":"5e78b7a2ad06602a56d3706b","date":"2020-03-23T13:20:34.515Z","trophies":575},{"_id":"5e78b7d9cde4a02a7ed4bd6a","date":"2020-03-23T13:21:29.510Z","trophies":575},{"_id":"5e78ba7462cab22bb68bcbf3","date":"2020-03-23T13:32:36.516Z","trophies":575},{"_id":"5e78d01033e36b1142bbdaad","date":"2020-03-23T15:04:48.051Z","trophies":575},{"_id":"5e78d93614d9b6150b1149ea","date":"2020-03-23T15:43:50.092Z","trophies":575},{"_id":"5e78dbb68170fd15faaa4384","date":"2020-03-23T15:54:30.748Z","trophies":575},{"_id":"5e78dbd98170fd15faaa4f62","date":"2020-03-23T15:55:05.470Z","trophies":575},{"_id":"5e7b42fe7104e91d89312860","date":"2020-03-25T11:39:42.184Z","trophies":575},{"_id":"5e7c7d1e4fcfb311190f6bd8","date":"2020-03-26T09:59:58.299Z","trophies":575},{"_id":"5e7c7d214fcfb311190f7846","date":"2020-03-26T10:00:01.647Z","trophies":575},{"_id":"5e7c7fff247073121d6e5ed6","date":"2020-03-26T10:12:15.893Z","trophies":575},{"_id":"5e7c80a26a540a1257e59344","date":"2020-03-26T10:14:58.855Z","trophies":575},{"_id":"5e7c815dcde75912fe794ff2","date":"2020-03-26T10:18:05.939Z","trophies":575},{"_id":"5e7c81cefbc5131333898dd8","date":"2020-03-26T10:19:58.703Z","trophies":575},{"_id":"5e7c826f5520b013b8dddff7","date":"2020-03-26T10:22:39.822Z","trophies":575},{"_id":"5e7c8295dd2c1d13f2e14de9","date":"2020-03-26T10:23:17.700Z","trophies":575},{"_id":"5e7c84e507f1e714ad7daa46","date":"2020-03-26T10:33:09.490Z","trophies":575},{"_id":"5e7c854ff193b215039e38f4","date":"2020-03-26T10:34:55.701Z","trophies":575},{"_id":"5e7c8575a217021551568942","date":"2020-03-26T10:35:33.751Z","trophies":575},{"_id":"5e7c8789d9717e15cfc24234","trophies":575,"date":"2020-03-26T10:44:25.032Z"}],"highestTrophies":630,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc246ad","id":16000006,"name":"BARLEY","power":10,"rank":24,"trophies":[{"_id":"5e5e340d63923610bec1b94a","date":"2020-03-03T10:40:13.106Z","trophies":676},{"_id":"5e5e351696cb3310ffefe5bd","date":"2020-03-03T10:44:38.823Z","trophies":676},{"_id":"5e5e359296cb3310ffefe851","date":"2020-03-03T10:46:42.281Z","trophies":676},{"_id":"5e5e359396cb3310ffefeb08","date":"2020-03-03T10:46:43.257Z","trophies":676},{"_id":"5e5e362996cb3310ffefede2","date":"2020-03-03T10:49:13.291Z","trophies":676},{"_id":"5e5f6c33a1dd9e0c864f745f","date":"2020-03-04T08:52:03.585Z","trophies":703},{"_id":"5e60d598b254e5193e23ff4d","date":"2020-03-05T10:34:00.869Z","trophies":703},{"_id":"5e60d9331907390ccd08ec02","date":"2020-03-05T10:49:23.098Z","trophies":703},{"_id":"5e60d93d1907390ccd08ef68","date":"2020-03-05T10:49:33.146Z","trophies":703},{"_id":"5e60d96c421a2b0d3f13b4c0","date":"2020-03-05T10:50:20.502Z","trophies":703},{"_id":"5e66026f0d2a560df328f2ad","date":"2020-03-09T08:46:39.896Z","trophies":650},{"_id":"5e663c899bda110d6b167046","date":"2020-03-09T12:54:33.650Z","trophies":650},{"_id":"5e66486f0e72e714b570bf61","date":"2020-03-09T13:45:19.134Z","trophies":650},{"_id":"5e6648c99db2e11524463dd7","date":"2020-03-09T13:46:49.826Z","trophies":650},{"_id":"5e6649760edc431571ddb3e7","date":"2020-03-09T13:49:42.107Z","trophies":650},{"_id":"5e6649d8448ee115be5218fa","date":"2020-03-09T13:51:20.980Z","trophies":650},{"_id":"5e665c0ef23112155b98dbb9","date":"2020-03-09T15:09:02.572Z","trophies":650},{"_id":"5e6751de68c45a0c96b97e8d","date":"2020-03-10T08:37:50.584Z","trophies":664},{"_id":"5e67af40ba96e9311ad8dfb3","date":"2020-03-10T15:16:16.561Z","trophies":664},{"_id":"5e68a85b3f87d80ed3c9f8f6","date":"2020-03-11T08:59:07.595Z","trophies":657},{"_id":"5e68a89afe9b142ed4d1685a","date":"2020-03-11T09:00:10.710Z","trophies":657},{"_id":"5e68ef15bc8b9b14dfc4028f","date":"2020-03-11T14:00:53.600Z","trophies":657},{"_id":"5e68fe8e8f3ad6227084c7d9","date":"2020-03-11T15:06:54.933Z","trophies":657},{"_id":"5e68fecd8f3ad6227084cd21","date":"2020-03-11T15:07:57.089Z","trophies":657},{"_id":"5e6905a848040627cc4bb910","date":"2020-03-11T15:37:12.954Z","trophies":657},{"_id":"5e6905f61d2c5c281111285b","date":"2020-03-11T15:38:30.087Z","trophies":657},{"_id":"5e69061b6ce714283a834d41","date":"2020-03-11T15:39:07.440Z","trophies":657},{"_id":"5e69066a2cf4f0289f50cfd1","date":"2020-03-11T15:40:26.669Z","trophies":657},{"_id":"5e6a01b30c2a2b0e39b5ac9f","date":"2020-03-12T09:32:35.579Z","trophies":677},{"_id":"5e6a0462cc22d90fb718c480","date":"2020-03-12T09:44:02.928Z","trophies":677},{"_id":"5e6a0d7c3c49db1694cd431a","date":"2020-03-12T10:22:52.264Z","trophies":677},{"_id":"5e6a0dbfcedd9616c1658936","date":"2020-03-12T10:23:59.235Z","trophies":677},{"_id":"5e6a0e92c08cae18e291561d","date":"2020-03-12T10:27:30.593Z","trophies":677},{"_id":"5e6a0ec3d7926b190ac1cb8b","date":"2020-03-12T10:28:19.276Z","trophies":677},{"_id":"5e6a5d538a08ca41dd17fb58","date":"2020-03-12T16:03:31.063Z","trophies":677},{"_id":"5e6a5e33483304439e753df6","date":"2020-03-12T16:07:15.737Z","trophies":677},{"_id":"5e6f5e98c41393126e985f3a","date":"2020-03-16T11:10:16.382Z","trophies":585},{"_id":"5e6f6efbd6c2921893cfbe0f","date":"2020-03-16T12:20:11.710Z","trophies":585},{"_id":"5e6f6fec7411191b02639ca0","date":"2020-03-16T12:24:12.983Z","trophies":585},{"_id":"5e6f71c9ed1f6a1bfd40a2fc","date":"2020-03-16T12:32:09.576Z","trophies":585},{"_id":"5e6f7206add1a21c2825268b","date":"2020-03-16T12:33:10.473Z","trophies":585},{"_id":"5e6f723d30212e1c4c1ab740","date":"2020-03-16T12:34:05.274Z","trophies":585},{"_id":"5e6f8de257b17c1c75664a1e","date":"2020-03-16T14:32:02.997Z","trophies":585},{"_id":"5e6f915a0e831e291294517c","date":"2020-03-16T14:46:50.431Z","trophies":585},{"_id":"5e6f91c9756e70295d61edaa","date":"2020-03-16T14:48:41.880Z","trophies":585},{"_id":"5e6f92dd566fb229dcb28b7e","date":"2020-03-16T14:53:17.597Z","trophies":585},{"_id":"5e6facf1ed158d107e9874bc","date":"2020-03-16T16:44:33.605Z","trophies":585},{"_id":"5e6fd9f5f130840cbc5109cf","date":"2020-03-16T19:56:37.377Z","trophies":585},{"_id":"5e6fda00f130840cbc51126a","date":"2020-03-16T19:56:48.785Z","trophies":585},{"_id":"5e70a5fd5b736311ac3492a5","date":"2020-03-17T10:27:09.089Z","trophies":615},{"_id":"5e70b9ea7474a21c42806df6","date":"2020-03-17T11:52:10.846Z","trophies":615},{"_id":"5e70be228bde5f1e0dd7ddd0","date":"2020-03-17T12:10:10.870Z","trophies":615},{"_id":"5e70bf50817c301e9c9e91d5","date":"2020-03-17T12:15:12.696Z","trophies":615},{"_id":"5e71fab90a2fff0e82bb0cab","date":"2020-03-18T10:40:57.979Z","trophies":654},{"_id":"5e722dc8a8fa0e199560935e","date":"2020-03-18T14:18:48.939Z","trophies":654},{"_id":"5e787d80b04cc713a9c1e74e","date":"2020-03-23T09:12:32.135Z","trophies":618},{"_id":"5e789f39eab0592060e21d8c","date":"2020-03-23T11:36:25.191Z","trophies":618},{"_id":"5e789ff847f87720de47a729","date":"2020-03-23T11:39:36.472Z","trophies":618},{"_id":"5e78b0b3a4873e2751c5c0ce","date":"2020-03-23T12:50:59.842Z","trophies":618},{"_id":"5e78b12aa4873e2751c5cb24","date":"2020-03-23T12:52:58.474Z","trophies":618},{"_id":"5e78b24d47d28127ff02ea13","date":"2020-03-23T12:57:49.688Z","trophies":618},{"_id":"5e78b46b9df675288c76e2b9","date":"2020-03-23T13:06:51.755Z","trophies":618},{"_id":"5e78b608dbe81529665c0e5f","date":"2020-03-23T13:13:44.462Z","trophies":618},{"_id":"5e78b719d137662a0dc510f3","date":"2020-03-23T13:18:17.131Z","trophies":618},{"_id":"5e78b7a2ad06602a56d3706c","date":"2020-03-23T13:20:34.515Z","trophies":618},{"_id":"5e78b7d9cde4a02a7ed4bd6b","date":"2020-03-23T13:21:29.510Z","trophies":618},{"_id":"5e78ba7462cab22bb68bcbf4","date":"2020-03-23T13:32:36.516Z","trophies":618},{"_id":"5e78d01033e36b1142bbdaae","date":"2020-03-23T15:04:48.051Z","trophies":626},{"_id":"5e78d93614d9b6150b1149eb","date":"2020-03-23T15:43:50.092Z","trophies":626},{"_id":"5e78dbb68170fd15faaa4385","date":"2020-03-23T15:54:30.748Z","trophies":626},{"_id":"5e78dbd98170fd15faaa4f63","date":"2020-03-23T15:55:05.470Z","trophies":626},{"_id":"5e7b42fe7104e91d89312861","date":"2020-03-25T11:39:42.184Z","trophies":619},{"_id":"5e7c7d1e4fcfb311190f6bd9","date":"2020-03-26T09:59:58.299Z","trophies":620},{"_id":"5e7c7d214fcfb311190f7847","date":"2020-03-26T10:00:01.647Z","trophies":620},{"_id":"5e7c7fff247073121d6e5ed7","date":"2020-03-26T10:12:15.893Z","trophies":620},{"_id":"5e7c80a26a540a1257e59345","date":"2020-03-26T10:14:58.855Z","trophies":620},{"_id":"5e7c815dcde75912fe794ff3","date":"2020-03-26T10:18:05.939Z","trophies":620},{"_id":"5e7c81cefbc5131333898dd9","date":"2020-03-26T10:19:58.703Z","trophies":620},{"_id":"5e7c826f5520b013b8dddff8","date":"2020-03-26T10:22:39.822Z","trophies":620},{"_id":"5e7c8295dd2c1d13f2e14dea","date":"2020-03-26T10:23:17.701Z","trophies":620},{"_id":"5e7c84e507f1e714ad7daa47","date":"2020-03-26T10:33:09.490Z","trophies":620},{"_id":"5e7c854ff193b215039e38f5","date":"2020-03-26T10:34:55.701Z","trophies":620},{"_id":"5e7c8575a217021551568943","date":"2020-03-26T10:35:33.751Z","trophies":620},{"_id":"5e7c8789d9717e15cfc24235","trophies":620,"date":"2020-03-26T10:44:25.032Z"}],"highestTrophies":746,"starPowers":[{"_id":"5e7c8789d9717e15cfc24702","id":23000082,"name":"Medical Use"},{"_id":"5e7c8789d9717e15cfc24703","id":23000158,"name":"Extra Noxious"}]},{"_id":"5e7c8789d9717e15cfc24704","id":16000007,"name":"JESSIE","power":10,"rank":24,"trophies":[{"_id":"5e5e340d63923610bec1b94e","date":"2020-03-03T10:40:13.107Z","trophies":704},{"_id":"5e5e351696cb3310ffefe5be","date":"2020-03-03T10:44:38.824Z","trophies":704},{"_id":"5e5e359296cb3310ffefe852","date":"2020-03-03T10:46:42.282Z","trophies":704},{"_id":"5e5e359396cb3310ffefeb09","date":"2020-03-03T10:46:43.258Z","trophies":704},{"_id":"5e5e362996cb3310ffefede3","date":"2020-03-03T10:49:13.292Z","trophies":704},{"_id":"5e5f6c33a1dd9e0c864f7460","date":"2020-03-04T08:52:03.586Z","trophies":704},{"_id":"5e60d598b254e5193e23ff4e","date":"2020-03-05T10:34:00.869Z","trophies":704},{"_id":"5e60d9331907390ccd08ec03","date":"2020-03-05T10:49:23.098Z","trophies":704},{"_id":"5e60d93d1907390ccd08ef69","date":"2020-03-05T10:49:33.146Z","trophies":704},{"_id":"5e60d96c421a2b0d3f13b4c1","date":"2020-03-05T10:50:20.503Z","trophies":704},{"_id":"5e66026f0d2a560df328f2ae","date":"2020-03-09T08:46:39.897Z","trophies":650},{"_id":"5e663c899bda110d6b167047","date":"2020-03-09T12:54:33.650Z","trophies":650},{"_id":"5e66486f0e72e714b570bf62","date":"2020-03-09T13:45:19.134Z","trophies":650},{"_id":"5e6648c99db2e11524463dd8","date":"2020-03-09T13:46:49.826Z","trophies":650},{"_id":"5e6649760edc431571ddb3e8","date":"2020-03-09T13:49:42.107Z","trophies":650},{"_id":"5e6649d8448ee115be5218fb","date":"2020-03-09T13:51:20.981Z","trophies":650},{"_id":"5e665c0ef23112155b98dbba","date":"2020-03-09T15:09:02.573Z","trophies":650},{"_id":"5e6751de68c45a0c96b97e8e","date":"2020-03-10T08:37:50.584Z","trophies":655},{"_id":"5e67af40ba96e9311ad8dfb4","date":"2020-03-10T15:16:16.561Z","trophies":655},{"_id":"5e68a85b3f87d80ed3c9f8f7","date":"2020-03-11T08:59:07.595Z","trophies":655},{"_id":"5e68a89afe9b142ed4d1685b","date":"2020-03-11T09:00:10.711Z","trophies":655},{"_id":"5e68ef15bc8b9b14dfc40290","date":"2020-03-11T14:00:53.601Z","trophies":655},{"_id":"5e68fe8e8f3ad6227084c7da","date":"2020-03-11T15:06:54.934Z","trophies":655},{"_id":"5e68fecd8f3ad6227084cd22","date":"2020-03-11T15:07:57.090Z","trophies":655},{"_id":"5e6905a848040627cc4bb911","date":"2020-03-11T15:37:12.954Z","trophies":655},{"_id":"5e6905f61d2c5c281111285c","date":"2020-03-11T15:38:30.088Z","trophies":655},{"_id":"5e69061b6ce714283a834d42","date":"2020-03-11T15:39:07.442Z","trophies":655},{"_id":"5e69066a2cf4f0289f50cfd2","date":"2020-03-11T15:40:26.669Z","trophies":655},{"_id":"5e6a01b30c2a2b0e39b5aca0","date":"2020-03-12T09:32:35.580Z","trophies":642},{"_id":"5e6a0462cc22d90fb718c481","date":"2020-03-12T09:44:02.929Z","trophies":642},{"_id":"5e6a0d7c3c49db1694cd431b","date":"2020-03-12T10:22:52.264Z","trophies":642},{"_id":"5e6a0dbfcedd9616c1658937","date":"2020-03-12T10:23:59.236Z","trophies":642},{"_id":"5e6a0e92c08cae18e291561e","date":"2020-03-12T10:27:30.593Z","trophies":642},{"_id":"5e6a0ec3d7926b190ac1cb8c","date":"2020-03-12T10:28:19.277Z","trophies":642},{"_id":"5e6a5d538a08ca41dd17fb59","date":"2020-03-12T16:03:31.063Z","trophies":642},{"_id":"5e6a5e33483304439e753df7","date":"2020-03-12T16:07:15.738Z","trophies":642},{"_id":"5e6f5e98c41393126e985f3b","date":"2020-03-16T11:10:16.383Z","trophies":658},{"_id":"5e6f6efbd6c2921893cfbe10","date":"2020-03-16T12:20:11.710Z","trophies":658},{"_id":"5e6f6fec7411191b02639ca1","date":"2020-03-16T12:24:12.983Z","trophies":658},{"_id":"5e6f71c9ed1f6a1bfd40a2fd","date":"2020-03-16T12:32:09.576Z","trophies":658},{"_id":"5e6f7206add1a21c2825268c","date":"2020-03-16T12:33:10.473Z","trophies":658},{"_id":"5e6f723d30212e1c4c1ab741","date":"2020-03-16T12:34:05.274Z","trophies":658},{"_id":"5e6f8de257b17c1c75664a1f","date":"2020-03-16T14:32:02.997Z","trophies":658},{"_id":"5e6f915a0e831e291294517d","date":"2020-03-16T14:46:50.431Z","trophies":658},{"_id":"5e6f91c9756e70295d61edab","date":"2020-03-16T14:48:41.880Z","trophies":658},{"_id":"5e6f92dd566fb229dcb28b7f","date":"2020-03-16T14:53:17.597Z","trophies":658},{"_id":"5e6facf1ed158d107e9874bd","date":"2020-03-16T16:44:33.605Z","trophies":658},{"_id":"5e6fd9f5f130840cbc5109d0","date":"2020-03-16T19:56:37.377Z","trophies":658},{"_id":"5e6fda00f130840cbc51126b","date":"2020-03-16T19:56:48.785Z","trophies":658},{"_id":"5e70a5fd5b736311ac3492a6","date":"2020-03-17T10:27:09.089Z","trophies":658},{"_id":"5e70b9ea7474a21c42806df7","date":"2020-03-17T11:52:10.846Z","trophies":644},{"_id":"5e70be228bde5f1e0dd7ddd1","date":"2020-03-17T12:10:10.870Z","trophies":644},{"_id":"5e70bf50817c301e9c9e91d6","date":"2020-03-17T12:15:12.696Z","trophies":644},{"_id":"5e71fab90a2fff0e82bb0cac","date":"2020-03-18T10:40:57.979Z","trophies":657},{"_id":"5e722dc8a8fa0e199560935f","date":"2020-03-18T14:18:48.939Z","trophies":657},{"_id":"5e787d80b04cc713a9c1e74f","date":"2020-03-23T09:12:32.135Z","trophies":625},{"_id":"5e789f39eab0592060e21d8d","date":"2020-03-23T11:36:25.191Z","trophies":625},{"_id":"5e789ff847f87720de47a72a","date":"2020-03-23T11:39:36.472Z","trophies":625},{"_id":"5e78b0b3a4873e2751c5c0cf","date":"2020-03-23T12:50:59.842Z","trophies":625},{"_id":"5e78b12aa4873e2751c5cb25","date":"2020-03-23T12:52:58.474Z","trophies":625},{"_id":"5e78b24d47d28127ff02ea14","date":"2020-03-23T12:57:49.688Z","trophies":625},{"_id":"5e78b46b9df675288c76e2ba","date":"2020-03-23T13:06:51.756Z","trophies":625},{"_id":"5e78b608dbe81529665c0e60","date":"2020-03-23T13:13:44.462Z","trophies":625},{"_id":"5e78b719d137662a0dc510f4","date":"2020-03-23T13:18:17.132Z","trophies":625},{"_id":"5e78b7a2ad06602a56d3706d","date":"2020-03-23T13:20:34.515Z","trophies":625},{"_id":"5e78b7d9cde4a02a7ed4bd6c","date":"2020-03-23T13:21:29.510Z","trophies":625},{"_id":"5e78ba7462cab22bb68bcbf5","date":"2020-03-23T13:32:36.517Z","trophies":625},{"_id":"5e78d01033e36b1142bbdaaf","date":"2020-03-23T15:04:48.051Z","trophies":625},{"_id":"5e78d93614d9b6150b1149ec","date":"2020-03-23T15:43:50.092Z","trophies":625},{"_id":"5e78dbb68170fd15faaa4386","date":"2020-03-23T15:54:30.748Z","trophies":625},{"_id":"5e78dbd98170fd15faaa4f64","date":"2020-03-23T15:55:05.470Z","trophies":625},{"_id":"5e7b42fe7104e91d89312862","date":"2020-03-25T11:39:42.184Z","trophies":625},{"_id":"5e7c7d1e4fcfb311190f6bda","date":"2020-03-26T09:59:58.299Z","trophies":625},{"_id":"5e7c7d214fcfb311190f7848","date":"2020-03-26T10:00:01.647Z","trophies":625},{"_id":"5e7c7fff247073121d6e5ed8","date":"2020-03-26T10:12:15.893Z","trophies":625},{"_id":"5e7c80a26a540a1257e59346","date":"2020-03-26T10:14:58.856Z","trophies":625},{"_id":"5e7c815dcde75912fe794ff4","date":"2020-03-26T10:18:05.939Z","trophies":625},{"_id":"5e7c81cefbc5131333898dda","date":"2020-03-26T10:19:58.703Z","trophies":625},{"_id":"5e7c826f5520b013b8dddff9","date":"2020-03-26T10:22:39.822Z","trophies":625},{"_id":"5e7c8295dd2c1d13f2e14deb","date":"2020-03-26T10:23:17.701Z","trophies":625},{"_id":"5e7c84e507f1e714ad7daa48","date":"2020-03-26T10:33:09.490Z","trophies":625},{"_id":"5e7c854ff193b215039e38f6","date":"2020-03-26T10:34:55.701Z","trophies":625},{"_id":"5e7c8575a217021551568944","date":"2020-03-26T10:35:33.752Z","trophies":625},{"_id":"5e7c8789d9717e15cfc24236","trophies":625,"date":"2020-03-26T10:44:25.032Z"}],"highestTrophies":704,"starPowers":[{"_id":"5e7c8789d9717e15cfc24759","id":23000083,"name":"Energize"},{"_id":"5e7c8789d9717e15cfc2475a","id":23000149,"name":"Shocky"}]},{"_id":"5e7c8789d9717e15cfc2475b","id":16000008,"name":"NITA","power":10,"rank":25,"trophies":[{"_id":"5e5e340d63923610bec1b952","date":"2020-03-03T10:40:13.107Z","trophies":704},{"_id":"5e5e351696cb3310ffefe5bf","date":"2020-03-03T10:44:38.824Z","trophies":704},{"_id":"5e5e359296cb3310ffefe853","date":"2020-03-03T10:46:42.282Z","trophies":704},{"_id":"5e5e359396cb3310ffefeb0a","date":"2020-03-03T10:46:43.259Z","trophies":704},{"_id":"5e5e362996cb3310ffefede4","date":"2020-03-03T10:49:13.292Z","trophies":704},{"_id":"5e5f6c33a1dd9e0c864f7461","date":"2020-03-04T08:52:03.586Z","trophies":704},{"_id":"5e60d598b254e5193e23ff4f","date":"2020-03-05T10:34:00.869Z","trophies":704},{"_id":"5e60d9331907390ccd08ec04","date":"2020-03-05T10:49:23.098Z","trophies":704},{"_id":"5e60d93d1907390ccd08ef6a","date":"2020-03-05T10:49:33.146Z","trophies":704},{"_id":"5e60d96c421a2b0d3f13b4c2","date":"2020-03-05T10:50:20.503Z","trophies":704},{"_id":"5e66026f0d2a560df328f2af","date":"2020-03-09T08:46:39.897Z","trophies":700},{"_id":"5e663c899bda110d6b167048","date":"2020-03-09T12:54:33.650Z","trophies":700},{"_id":"5e66486f0e72e714b570bf63","date":"2020-03-09T13:45:19.134Z","trophies":700},{"_id":"5e6648c99db2e11524463dd9","date":"2020-03-09T13:46:49.827Z","trophies":700},{"_id":"5e6649760edc431571ddb3e9","date":"2020-03-09T13:49:42.107Z","trophies":700},{"_id":"5e6649d8448ee115be5218fc","date":"2020-03-09T13:51:20.981Z","trophies":700},{"_id":"5e665c0ef23112155b98dbbb","date":"2020-03-09T15:09:02.573Z","trophies":700},{"_id":"5e6751de68c45a0c96b97e8f","date":"2020-03-10T08:37:50.584Z","trophies":653},{"_id":"5e67af40ba96e9311ad8dfb5","date":"2020-03-10T15:16:16.561Z","trophies":653},{"_id":"5e68a85b3f87d80ed3c9f8f8","date":"2020-03-11T08:59:07.595Z","trophies":654},{"_id":"5e68a89afe9b142ed4d1685c","date":"2020-03-11T09:00:10.711Z","trophies":654},{"_id":"5e68ef15bc8b9b14dfc40291","date":"2020-03-11T14:00:53.601Z","trophies":654},{"_id":"5e68fe8e8f3ad6227084c7db","date":"2020-03-11T15:06:54.934Z","trophies":654},{"_id":"5e68fecd8f3ad6227084cd23","date":"2020-03-11T15:07:57.090Z","trophies":654},{"_id":"5e6905a848040627cc4bb912","date":"2020-03-11T15:37:12.954Z","trophies":654},{"_id":"5e6905f61d2c5c281111285d","date":"2020-03-11T15:38:30.089Z","trophies":654},{"_id":"5e69061b6ce714283a834d43","date":"2020-03-11T15:39:07.443Z","trophies":654},{"_id":"5e69066a2cf4f0289f50cfd3","date":"2020-03-11T15:40:26.670Z","trophies":654},{"_id":"5e6a01b30c2a2b0e39b5aca1","date":"2020-03-12T09:32:35.580Z","trophies":707},{"_id":"5e6a0462cc22d90fb718c482","date":"2020-03-12T09:44:02.929Z","trophies":707},{"_id":"5e6a0d7c3c49db1694cd431c","date":"2020-03-12T10:22:52.264Z","trophies":707},{"_id":"5e6a0dbfcedd9616c1658938","date":"2020-03-12T10:23:59.236Z","trophies":707},{"_id":"5e6a0e92c08cae18e291561f","date":"2020-03-12T10:27:30.593Z","trophies":707},{"_id":"5e6a0ec3d7926b190ac1cb8d","date":"2020-03-12T10:28:19.277Z","trophies":707},{"_id":"5e6a5d538a08ca41dd17fb5a","date":"2020-03-12T16:03:31.064Z","trophies":707},{"_id":"5e6a5e33483304439e753df8","date":"2020-03-12T16:07:15.739Z","trophies":707},{"_id":"5e6f5e98c41393126e985f3c","date":"2020-03-16T11:10:16.383Z","trophies":685},{"_id":"5e6f6efbd6c2921893cfbe11","date":"2020-03-16T12:20:11.710Z","trophies":685},{"_id":"5e6f6fec7411191b02639ca2","date":"2020-03-16T12:24:12.984Z","trophies":685},{"_id":"5e6f71c9ed1f6a1bfd40a2fe","date":"2020-03-16T12:32:09.576Z","trophies":685},{"_id":"5e6f7206add1a21c2825268d","date":"2020-03-16T12:33:10.473Z","trophies":685},{"_id":"5e6f723d30212e1c4c1ab742","date":"2020-03-16T12:34:05.274Z","trophies":685},{"_id":"5e6f8de257b17c1c75664a20","date":"2020-03-16T14:32:02.997Z","trophies":685},{"_id":"5e6f915a0e831e291294517e","date":"2020-03-16T14:46:50.431Z","trophies":685},{"_id":"5e6f91c9756e70295d61edac","date":"2020-03-16T14:48:41.880Z","trophies":685},{"_id":"5e6f92dd566fb229dcb28b80","date":"2020-03-16T14:53:17.597Z","trophies":685},{"_id":"5e6facf1ed158d107e9874be","date":"2020-03-16T16:44:33.607Z","trophies":685},{"_id":"5e6fd9f5f130840cbc5109d1","date":"2020-03-16T19:56:37.377Z","trophies":685},{"_id":"5e6fda00f130840cbc51126c","date":"2020-03-16T19:56:48.785Z","trophies":685},{"_id":"5e70a5fd5b736311ac3492a7","date":"2020-03-17T10:27:09.089Z","trophies":685},{"_id":"5e70b9ea7474a21c42806df8","date":"2020-03-17T11:52:10.847Z","trophies":685},{"_id":"5e70be228bde5f1e0dd7ddd2","date":"2020-03-17T12:10:10.870Z","trophies":685},{"_id":"5e70bf50817c301e9c9e91d7","date":"2020-03-17T12:15:12.696Z","trophies":685},{"_id":"5e71fab90a2fff0e82bb0cad","date":"2020-03-18T10:40:57.979Z","trophies":685},{"_id":"5e722dc8a8fa0e1995609360","date":"2020-03-18T14:18:48.939Z","trophies":685},{"_id":"5e787d80b04cc713a9c1e750","date":"2020-03-23T09:12:32.135Z","trophies":650},{"_id":"5e789f39eab0592060e21d8e","date":"2020-03-23T11:36:25.192Z","trophies":650},{"_id":"5e789ff847f87720de47a72b","date":"2020-03-23T11:39:36.472Z","trophies":650},{"_id":"5e78b0b3a4873e2751c5c0d0","date":"2020-03-23T12:50:59.843Z","trophies":650},{"_id":"5e78b12aa4873e2751c5cb26","date":"2020-03-23T12:52:58.475Z","trophies":650},{"_id":"5e78b24d47d28127ff02ea15","date":"2020-03-23T12:57:49.688Z","trophies":650},{"_id":"5e78b46b9df675288c76e2bb","date":"2020-03-23T13:06:51.756Z","trophies":650},{"_id":"5e78b608dbe81529665c0e61","date":"2020-03-23T13:13:44.463Z","trophies":650},{"_id":"5e78b719d137662a0dc510f5","date":"2020-03-23T13:18:17.132Z","trophies":650},{"_id":"5e78b7a2ad06602a56d3706e","date":"2020-03-23T13:20:34.516Z","trophies":650},{"_id":"5e78b7d9cde4a02a7ed4bd6d","date":"2020-03-23T13:21:29.511Z","trophies":650},{"_id":"5e78ba7462cab22bb68bcbf6","date":"2020-03-23T13:32:36.517Z","trophies":650},{"_id":"5e78d01033e36b1142bbdab0","date":"2020-03-23T15:04:48.052Z","trophies":650},{"_id":"5e78d93614d9b6150b1149ed","date":"2020-03-23T15:43:50.093Z","trophies":650},{"_id":"5e78dbb68170fd15faaa4387","date":"2020-03-23T15:54:30.748Z","trophies":650},{"_id":"5e78dbd98170fd15faaa4f65","date":"2020-03-23T15:55:05.470Z","trophies":650},{"_id":"5e7b42fe7104e91d89312863","date":"2020-03-25T11:39:42.184Z","trophies":650},{"_id":"5e7c7d1e4fcfb311190f6bdb","date":"2020-03-26T09:59:58.300Z","trophies":650},{"_id":"5e7c7d214fcfb311190f7849","date":"2020-03-26T10:00:01.647Z","trophies":650},{"_id":"5e7c7fff247073121d6e5ed9","date":"2020-03-26T10:12:15.894Z","trophies":650},{"_id":"5e7c80a26a540a1257e59347","date":"2020-03-26T10:14:58.856Z","trophies":650},{"_id":"5e7c815dcde75912fe794ff5","date":"2020-03-26T10:18:05.940Z","trophies":650},{"_id":"5e7c81cefbc5131333898ddb","date":"2020-03-26T10:19:58.703Z","trophies":650},{"_id":"5e7c826f5520b013b8dddffa","date":"2020-03-26T10:22:39.823Z","trophies":650},{"_id":"5e7c8295dd2c1d13f2e14dec","date":"2020-03-26T10:23:17.701Z","trophies":650},{"_id":"5e7c84e507f1e714ad7daa49","date":"2020-03-26T10:33:09.490Z","trophies":650},{"_id":"5e7c854ff193b215039e38f7","date":"2020-03-26T10:34:55.701Z","trophies":650},{"_id":"5e7c8575a217021551568945","date":"2020-03-26T10:35:33.752Z","trophies":650},{"_id":"5e7c8789d9717e15cfc24237","trophies":650,"date":"2020-03-26T10:44:25.032Z"}],"highestTrophies":753,"starPowers":[{"_id":"5e7c8789d9717e15cfc247b0","id":23000136,"name":"Hyper Bear"}]},{"_id":"5e7c8789d9717e15cfc247b1","id":16000009,"name":"DYNAMIKE","power":9,"rank":24,"trophies":[{"_id":"5e5e340d63923610bec1b955","date":"2020-03-03T10:40:13.108Z","trophies":653},{"_id":"5e5e351696cb3310ffefe5c0","date":"2020-03-03T10:44:38.825Z","trophies":653},{"_id":"5e5e359296cb3310ffefe854","date":"2020-03-03T10:46:42.283Z","trophies":653},{"_id":"5e5e359396cb3310ffefeb0b","date":"2020-03-03T10:46:43.260Z","trophies":653},{"_id":"5e5e362996cb3310ffefede5","date":"2020-03-03T10:49:13.293Z","trophies":653},{"_id":"5e5f6c33a1dd9e0c864f7462","date":"2020-03-04T08:52:03.586Z","trophies":651},{"_id":"5e60d598b254e5193e23ff50","date":"2020-03-05T10:34:00.870Z","trophies":651},{"_id":"5e60d9331907390ccd08ec05","date":"2020-03-05T10:49:23.099Z","trophies":651},{"_id":"5e60d93d1907390ccd08ef6b","date":"2020-03-05T10:49:33.147Z","trophies":651},{"_id":"5e60d96c421a2b0d3f13b4c3","date":"2020-03-05T10:50:20.503Z","trophies":651},{"_id":"5e66026f0d2a560df328f2b0","date":"2020-03-09T08:46:39.898Z","trophies":650},{"_id":"5e663c899bda110d6b167049","date":"2020-03-09T12:54:33.650Z","trophies":650},{"_id":"5e66486f0e72e714b570bf64","date":"2020-03-09T13:45:19.134Z","trophies":650},{"_id":"5e6648c99db2e11524463dda","date":"2020-03-09T13:46:49.827Z","trophies":650},{"_id":"5e6649760edc431571ddb3ea","date":"2020-03-09T13:49:42.107Z","trophies":650},{"_id":"5e6649d8448ee115be5218fd","date":"2020-03-09T13:51:20.982Z","trophies":650},{"_id":"5e665c0ef23112155b98dbbc","date":"2020-03-09T15:09:02.574Z","trophies":650},{"_id":"5e6751de68c45a0c96b97e90","date":"2020-03-10T08:37:50.585Z","trophies":657},{"_id":"5e67af40ba96e9311ad8dfb6","date":"2020-03-10T15:16:16.562Z","trophies":657},{"_id":"5e68a85b3f87d80ed3c9f8f9","date":"2020-03-11T08:59:07.596Z","trophies":631},{"_id":"5e68a89afe9b142ed4d1685d","date":"2020-03-11T09:00:10.711Z","trophies":631},{"_id":"5e68ef15bc8b9b14dfc40292","date":"2020-03-11T14:00:53.601Z","trophies":631},{"_id":"5e68fe8e8f3ad6227084c7dc","date":"2020-03-11T15:06:54.934Z","trophies":631},{"_id":"5e68fecd8f3ad6227084cd24","date":"2020-03-11T15:07:57.091Z","trophies":631},{"_id":"5e6905a848040627cc4bb913","date":"2020-03-11T15:37:12.954Z","trophies":631},{"_id":"5e6905f61d2c5c281111285e","date":"2020-03-11T15:38:30.089Z","trophies":631},{"_id":"5e69061b6ce714283a834d44","date":"2020-03-11T15:39:07.443Z","trophies":631},{"_id":"5e69066a2cf4f0289f50cfd4","date":"2020-03-11T15:40:26.670Z","trophies":631},{"_id":"5e6a01b30c2a2b0e39b5aca2","date":"2020-03-12T09:32:35.580Z","trophies":672},{"_id":"5e6a0462cc22d90fb718c483","date":"2020-03-12T09:44:02.930Z","trophies":672},{"_id":"5e6a0d7c3c49db1694cd431d","date":"2020-03-12T10:22:52.264Z","trophies":672},{"_id":"5e6a0dbfcedd9616c1658939","date":"2020-03-12T10:23:59.236Z","trophies":672},{"_id":"5e6a0e92c08cae18e2915620","date":"2020-03-12T10:27:30.593Z","trophies":672},{"_id":"5e6a0ec3d7926b190ac1cb8e","date":"2020-03-12T10:28:19.277Z","trophies":672},{"_id":"5e6a5d538a08ca41dd17fb5b","date":"2020-03-12T16:03:31.064Z","trophies":672},{"_id":"5e6a5e33483304439e753df9","date":"2020-03-12T16:07:15.739Z","trophies":672},{"_id":"5e6f5e98c41393126e985f3d","date":"2020-03-16T11:10:16.383Z","trophies":701},{"_id":"5e6f6efbd6c2921893cfbe12","date":"2020-03-16T12:20:11.710Z","trophies":701},{"_id":"5e6f6fec7411191b02639ca3","date":"2020-03-16T12:24:12.984Z","trophies":701},{"_id":"5e6f71c9ed1f6a1bfd40a2ff","date":"2020-03-16T12:32:09.576Z","trophies":701},{"_id":"5e6f7206add1a21c2825268e","date":"2020-03-16T12:33:10.473Z","trophies":701},{"_id":"5e6f723d30212e1c4c1ab743","date":"2020-03-16T12:34:05.274Z","trophies":701},{"_id":"5e6f8de257b17c1c75664a21","date":"2020-03-16T14:32:02.997Z","trophies":701},{"_id":"5e6f915a0e831e291294517f","date":"2020-03-16T14:46:50.432Z","trophies":701},{"_id":"5e6f91c9756e70295d61edad","date":"2020-03-16T14:48:41.880Z","trophies":701},{"_id":"5e6f92dd566fb229dcb28b81","date":"2020-03-16T14:53:17.597Z","trophies":701},{"_id":"5e6facf1ed158d107e9874bf","date":"2020-03-16T16:44:33.607Z","trophies":701},{"_id":"5e6fd9f5f130840cbc5109d2","date":"2020-03-16T19:56:37.377Z","trophies":701},{"_id":"5e6fda00f130840cbc51126d","date":"2020-03-16T19:56:48.785Z","trophies":701},{"_id":"5e70a5fd5b736311ac3492a8","date":"2020-03-17T10:27:09.089Z","trophies":701},{"_id":"5e70b9ea7474a21c42806df9","date":"2020-03-17T11:52:10.847Z","trophies":701},{"_id":"5e70be228bde5f1e0dd7ddd3","date":"2020-03-17T12:10:10.871Z","trophies":701},{"_id":"5e70bf50817c301e9c9e91d8","date":"2020-03-17T12:15:12.696Z","trophies":701},{"_id":"5e71fab90a2fff0e82bb0cae","date":"2020-03-18T10:40:57.979Z","trophies":701},{"_id":"5e722dc8a8fa0e1995609361","date":"2020-03-18T14:18:48.939Z","trophies":701},{"_id":"5e787d80b04cc713a9c1e751","date":"2020-03-23T09:12:32.135Z","trophies":650},{"_id":"5e789f39eab0592060e21d8f","date":"2020-03-23T11:36:25.192Z","trophies":650},{"_id":"5e789ff847f87720de47a72c","date":"2020-03-23T11:39:36.472Z","trophies":650},{"_id":"5e78b0b3a4873e2751c5c0d1","date":"2020-03-23T12:50:59.843Z","trophies":650},{"_id":"5e78b12aa4873e2751c5cb27","date":"2020-03-23T12:52:58.475Z","trophies":650},{"_id":"5e78b24d47d28127ff02ea16","date":"2020-03-23T12:57:49.688Z","trophies":650},{"_id":"5e78b46b9df675288c76e2bc","date":"2020-03-23T13:06:51.756Z","trophies":650},{"_id":"5e78b608dbe81529665c0e62","date":"2020-03-23T13:13:44.463Z","trophies":650},{"_id":"5e78b719d137662a0dc510f6","date":"2020-03-23T13:18:17.132Z","trophies":650},{"_id":"5e78b7a2ad06602a56d3706f","date":"2020-03-23T13:20:34.516Z","trophies":650},{"_id":"5e78b7d9cde4a02a7ed4bd6e","date":"2020-03-23T13:21:29.511Z","trophies":650},{"_id":"5e78ba7462cab22bb68bcbf7","date":"2020-03-23T13:32:36.517Z","trophies":650},{"_id":"5e78d01033e36b1142bbdab1","date":"2020-03-23T15:04:48.052Z","trophies":650},{"_id":"5e78d93614d9b6150b1149ee","date":"2020-03-23T15:43:50.093Z","trophies":650},{"_id":"5e78dbb68170fd15faaa4388","date":"2020-03-23T15:54:30.749Z","trophies":650},{"_id":"5e78dbd98170fd15faaa4f66","date":"2020-03-23T15:55:05.471Z","trophies":650},{"_id":"5e7b42fe7104e91d89312864","date":"2020-03-25T11:39:42.184Z","trophies":650},{"_id":"5e7c7d1e4fcfb311190f6bdc","date":"2020-03-26T09:59:58.300Z","trophies":650},{"_id":"5e7c7d214fcfb311190f784a","date":"2020-03-26T10:00:01.647Z","trophies":650},{"_id":"5e7c7fff247073121d6e5eda","date":"2020-03-26T10:12:15.894Z","trophies":650},{"_id":"5e7c80a26a540a1257e59348","date":"2020-03-26T10:14:58.856Z","trophies":650},{"_id":"5e7c815dcde75912fe794ff6","date":"2020-03-26T10:18:05.940Z","trophies":650},{"_id":"5e7c81cefbc5131333898ddc","date":"2020-03-26T10:19:58.703Z","trophies":650},{"_id":"5e7c826f5520b013b8dddffb","date":"2020-03-26T10:22:39.823Z","trophies":650},{"_id":"5e7c8295dd2c1d13f2e14ded","date":"2020-03-26T10:23:17.702Z","trophies":650},{"_id":"5e7c84e507f1e714ad7daa4a","date":"2020-03-26T10:33:09.491Z","trophies":650},{"_id":"5e7c854ff193b215039e38f8","date":"2020-03-26T10:34:55.702Z","trophies":650},{"_id":"5e7c8575a217021551568946","date":"2020-03-26T10:35:33.752Z","trophies":650},{"_id":"5e7c8789d9717e15cfc24238","trophies":650,"date":"2020-03-26T10:44:25.033Z"}],"highestTrophies":706,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24806","id":16000010,"name":"EL PRIMO","power":6,"rank":23,"trophies":[{"_id":"5e5e340d63923610bec1b957","date":"2020-03-03T10:40:13.108Z","trophies":581},{"_id":"5e5e351696cb3310ffefe5c1","date":"2020-03-03T10:44:38.825Z","trophies":581},{"_id":"5e5e359296cb3310ffefe855","date":"2020-03-03T10:46:42.284Z","trophies":581},{"_id":"5e5e359396cb3310ffefeb0c","date":"2020-03-03T10:46:43.261Z","trophies":581},{"_id":"5e5e362996cb3310ffefede6","date":"2020-03-03T10:49:13.294Z","trophies":581},{"_id":"5e5f6c33a1dd9e0c864f7463","date":"2020-03-04T08:52:03.587Z","trophies":581},{"_id":"5e60d598b254e5193e23ff51","date":"2020-03-05T10:34:00.870Z","trophies":581},{"_id":"5e60d9331907390ccd08ec06","date":"2020-03-05T10:49:23.099Z","trophies":581},{"_id":"5e60d93d1907390ccd08ef6c","date":"2020-03-05T10:49:33.147Z","trophies":581},{"_id":"5e60d96c421a2b0d3f13b4c4","date":"2020-03-05T10:50:20.504Z","trophies":581},{"_id":"5e66026f0d2a560df328f2b1","date":"2020-03-09T08:46:39.898Z","trophies":575},{"_id":"5e663c899bda110d6b16704a","date":"2020-03-09T12:54:33.651Z","trophies":575},{"_id":"5e66486f0e72e714b570bf65","date":"2020-03-09T13:45:19.134Z","trophies":575},{"_id":"5e6648c99db2e11524463ddb","date":"2020-03-09T13:46:49.827Z","trophies":575},{"_id":"5e6649760edc431571ddb3eb","date":"2020-03-09T13:49:42.107Z","trophies":575},{"_id":"5e6649d8448ee115be5218fe","date":"2020-03-09T13:51:20.982Z","trophies":575},{"_id":"5e665c0ef23112155b98dbbd","date":"2020-03-09T15:09:02.574Z","trophies":575},{"_id":"5e6751de68c45a0c96b97e91","date":"2020-03-10T08:37:50.585Z","trophies":575},{"_id":"5e67af40ba96e9311ad8dfb7","date":"2020-03-10T15:16:16.562Z","trophies":575},{"_id":"5e68a85b3f87d80ed3c9f8fa","date":"2020-03-11T08:59:07.596Z","trophies":575},{"_id":"5e68a89afe9b142ed4d1685e","date":"2020-03-11T09:00:10.711Z","trophies":575},{"_id":"5e68ef15bc8b9b14dfc40293","date":"2020-03-11T14:00:53.601Z","trophies":575},{"_id":"5e68fe8e8f3ad6227084c7dd","date":"2020-03-11T15:06:54.934Z","trophies":575},{"_id":"5e68fecd8f3ad6227084cd25","date":"2020-03-11T15:07:57.091Z","trophies":575},{"_id":"5e6905a848040627cc4bb914","date":"2020-03-11T15:37:12.955Z","trophies":575},{"_id":"5e6905f61d2c5c281111285f","date":"2020-03-11T15:38:30.089Z","trophies":575},{"_id":"5e69061b6ce714283a834d45","date":"2020-03-11T15:39:07.443Z","trophies":575},{"_id":"5e69066a2cf4f0289f50cfd5","date":"2020-03-11T15:40:26.670Z","trophies":575},{"_id":"5e6a01b30c2a2b0e39b5aca3","date":"2020-03-12T09:32:35.580Z","trophies":575},{"_id":"5e6a0462cc22d90fb718c484","date":"2020-03-12T09:44:02.931Z","trophies":575},{"_id":"5e6a0d7c3c49db1694cd431e","date":"2020-03-12T10:22:52.264Z","trophies":575},{"_id":"5e6a0dbfcedd9616c165893a","date":"2020-03-12T10:23:59.237Z","trophies":575},{"_id":"5e6a0e92c08cae18e2915621","date":"2020-03-12T10:27:30.593Z","trophies":575},{"_id":"5e6a0ec3d7926b190ac1cb8f","date":"2020-03-12T10:28:19.277Z","trophies":575},{"_id":"5e6a5d538a08ca41dd17fb5c","date":"2020-03-12T16:03:31.064Z","trophies":575},{"_id":"5e6a5e33483304439e753dfa","date":"2020-03-12T16:07:15.740Z","trophies":575},{"_id":"5e6f5e98c41393126e985f3e","date":"2020-03-16T11:10:16.384Z","trophies":575},{"_id":"5e6f6efbd6c2921893cfbe13","date":"2020-03-16T12:20:11.711Z","trophies":575},{"_id":"5e6f6fec7411191b02639ca4","date":"2020-03-16T12:24:12.985Z","trophies":575},{"_id":"5e6f71c9ed1f6a1bfd40a300","date":"2020-03-16T12:32:09.576Z","trophies":575},{"_id":"5e6f7206add1a21c2825268f","date":"2020-03-16T12:33:10.473Z","trophies":575},{"_id":"5e6f723d30212e1c4c1ab744","date":"2020-03-16T12:34:05.275Z","trophies":575},{"_id":"5e6f8de257b17c1c75664a22","date":"2020-03-16T14:32:02.998Z","trophies":575},{"_id":"5e6f915a0e831e2912945180","date":"2020-03-16T14:46:50.432Z","trophies":575},{"_id":"5e6f91c9756e70295d61edae","date":"2020-03-16T14:48:41.881Z","trophies":575},{"_id":"5e6f92dd566fb229dcb28b82","date":"2020-03-16T14:53:17.597Z","trophies":575},{"_id":"5e6facf1ed158d107e9874c0","date":"2020-03-16T16:44:33.607Z","trophies":575},{"_id":"5e6fd9f5f130840cbc5109d3","date":"2020-03-16T19:56:37.377Z","trophies":575},{"_id":"5e6fda00f130840cbc51126e","date":"2020-03-16T19:56:48.786Z","trophies":575},{"_id":"5e70a5fd5b736311ac3492a9","date":"2020-03-17T10:27:09.089Z","trophies":575},{"_id":"5e70b9ea7474a21c42806dfa","date":"2020-03-17T11:52:10.847Z","trophies":575},{"_id":"5e70be228bde5f1e0dd7ddd4","date":"2020-03-17T12:10:10.872Z","trophies":575},{"_id":"5e70bf50817c301e9c9e91d9","date":"2020-03-17T12:15:12.696Z","trophies":575},{"_id":"5e71fab90a2fff0e82bb0caf","date":"2020-03-18T10:40:57.980Z","trophies":575},{"_id":"5e722dc8a8fa0e1995609362","date":"2020-03-18T14:18:48.940Z","trophies":575},{"_id":"5e787d80b04cc713a9c1e752","date":"2020-03-23T09:12:32.135Z","trophies":575},{"_id":"5e789f39eab0592060e21d90","date":"2020-03-23T11:36:25.192Z","trophies":575},{"_id":"5e789ff847f87720de47a72d","date":"2020-03-23T11:39:36.472Z","trophies":575},{"_id":"5e78b0b3a4873e2751c5c0d2","date":"2020-03-23T12:50:59.843Z","trophies":575},{"_id":"5e78b12aa4873e2751c5cb28","date":"2020-03-23T12:52:58.475Z","trophies":575},{"_id":"5e78b24d47d28127ff02ea17","date":"2020-03-23T12:57:49.688Z","trophies":575},{"_id":"5e78b46b9df675288c76e2bd","date":"2020-03-23T13:06:51.756Z","trophies":575},{"_id":"5e78b608dbe81529665c0e63","date":"2020-03-23T13:13:44.463Z","trophies":575},{"_id":"5e78b719d137662a0dc510f7","date":"2020-03-23T13:18:17.133Z","trophies":575},{"_id":"5e78b7a2ad06602a56d37070","date":"2020-03-23T13:20:34.516Z","trophies":575},{"_id":"5e78b7d9cde4a02a7ed4bd6f","date":"2020-03-23T13:21:29.511Z","trophies":575},{"_id":"5e78ba7462cab22bb68bcbf8","date":"2020-03-23T13:32:36.518Z","trophies":575},{"_id":"5e78d01033e36b1142bbdab2","date":"2020-03-23T15:04:48.052Z","trophies":575},{"_id":"5e78d93614d9b6150b1149ef","date":"2020-03-23T15:43:50.093Z","trophies":575},{"_id":"5e78dbb68170fd15faaa4389","date":"2020-03-23T15:54:30.749Z","trophies":575},{"_id":"5e78dbd98170fd15faaa4f67","date":"2020-03-23T15:55:05.471Z","trophies":575},{"_id":"5e7b42fe7104e91d89312865","date":"2020-03-25T11:39:42.185Z","trophies":575},{"_id":"5e7c7d1e4fcfb311190f6bdd","date":"2020-03-26T09:59:58.300Z","trophies":575},{"_id":"5e7c7d214fcfb311190f784b","date":"2020-03-26T10:00:01.647Z","trophies":575},{"_id":"5e7c7fff247073121d6e5edb","date":"2020-03-26T10:12:15.894Z","trophies":575},{"_id":"5e7c80a26a540a1257e59349","date":"2020-03-26T10:14:58.856Z","trophies":575},{"_id":"5e7c815dcde75912fe794ff7","date":"2020-03-26T10:18:05.940Z","trophies":575},{"_id":"5e7c81cefbc5131333898ddd","date":"2020-03-26T10:19:58.704Z","trophies":575},{"_id":"5e7c826f5520b013b8dddffc","date":"2020-03-26T10:22:39.823Z","trophies":575},{"_id":"5e7c8295dd2c1d13f2e14dee","date":"2020-03-26T10:23:17.702Z","trophies":575},{"_id":"5e7c84e507f1e714ad7daa4b","date":"2020-03-26T10:33:09.491Z","trophies":575},{"_id":"5e7c854ff193b215039e38f9","date":"2020-03-26T10:34:55.702Z","trophies":575},{"_id":"5e7c8575a217021551568947","date":"2020-03-26T10:35:33.752Z","trophies":575},{"_id":"5e7c8789d9717e15cfc24239","trophies":575,"date":"2020-03-26T10:44:25.033Z"}],"highestTrophies":653,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc2485b","id":16000011,"name":"MORTIS","power":5,"rank":21,"trophies":[{"_id":"5e5e340d63923610bec1b959","date":"2020-03-03T10:40:13.108Z","trophies":518},{"_id":"5e5e351696cb3310ffefe5c2","date":"2020-03-03T10:44:38.826Z","trophies":518},{"_id":"5e5e359296cb3310ffefe856","date":"2020-03-03T10:46:42.284Z","trophies":518},{"_id":"5e5e359396cb3310ffefeb0d","date":"2020-03-03T10:46:43.262Z","trophies":518},{"_id":"5e5e362996cb3310ffefede7","date":"2020-03-03T10:49:13.296Z","trophies":518},{"_id":"5e5f6c33a1dd9e0c864f7464","date":"2020-03-04T08:52:03.587Z","trophies":512},{"_id":"5e60d598b254e5193e23ff52","date":"2020-03-05T10:34:00.871Z","trophies":512},{"_id":"5e60d9331907390ccd08ec07","date":"2020-03-05T10:49:23.099Z","trophies":512},{"_id":"5e60d93d1907390ccd08ef6d","date":"2020-03-05T10:49:33.147Z","trophies":512},{"_id":"5e60d96c421a2b0d3f13b4c5","date":"2020-03-05T10:50:20.504Z","trophies":512},{"_id":"5e66026f0d2a560df328f2b2","date":"2020-03-09T08:46:39.898Z","trophies":520},{"_id":"5e663c899bda110d6b16704b","date":"2020-03-09T12:54:33.651Z","trophies":520},{"_id":"5e66486f0e72e714b570bf66","date":"2020-03-09T13:45:19.135Z","trophies":520},{"_id":"5e6648c99db2e11524463ddc","date":"2020-03-09T13:46:49.827Z","trophies":520},{"_id":"5e6649760edc431571ddb3ec","date":"2020-03-09T13:49:42.108Z","trophies":520},{"_id":"5e6649d8448ee115be5218ff","date":"2020-03-09T13:51:20.983Z","trophies":520},{"_id":"5e665c0ef23112155b98dbbe","date":"2020-03-09T15:09:02.574Z","trophies":520},{"_id":"5e6751de68c45a0c96b97e92","date":"2020-03-10T08:37:50.585Z","trophies":520},{"_id":"5e67af40ba96e9311ad8dfb8","date":"2020-03-10T15:16:16.562Z","trophies":520},{"_id":"5e68a85b3f87d80ed3c9f8fb","date":"2020-03-11T08:59:07.596Z","trophies":520},{"_id":"5e68a89afe9b142ed4d1685f","date":"2020-03-11T09:00:10.711Z","trophies":520},{"_id":"5e68ef15bc8b9b14dfc40294","date":"2020-03-11T14:00:53.602Z","trophies":520},{"_id":"5e68fe8e8f3ad6227084c7de","date":"2020-03-11T15:06:54.935Z","trophies":520},{"_id":"5e68fecd8f3ad6227084cd26","date":"2020-03-11T15:07:57.092Z","trophies":520},{"_id":"5e6905a848040627cc4bb915","date":"2020-03-11T15:37:12.955Z","trophies":520},{"_id":"5e6905f61d2c5c2811112860","date":"2020-03-11T15:38:30.090Z","trophies":520},{"_id":"5e69061b6ce714283a834d46","date":"2020-03-11T15:39:07.444Z","trophies":520},{"_id":"5e69066a2cf4f0289f50cfd6","date":"2020-03-11T15:40:26.671Z","trophies":520},{"_id":"5e6a01b30c2a2b0e39b5aca4","date":"2020-03-12T09:32:35.580Z","trophies":520},{"_id":"5e6a0462cc22d90fb718c485","date":"2020-03-12T09:44:02.933Z","trophies":520},{"_id":"5e6a0d7c3c49db1694cd431f","date":"2020-03-12T10:22:52.264Z","trophies":520},{"_id":"5e6a0dbfcedd9616c165893b","date":"2020-03-12T10:23:59.237Z","trophies":520},{"_id":"5e6a0e92c08cae18e2915622","date":"2020-03-12T10:27:30.594Z","trophies":520},{"_id":"5e6a0ec3d7926b190ac1cb90","date":"2020-03-12T10:28:19.278Z","trophies":520},{"_id":"5e6a5d538a08ca41dd17fb5d","date":"2020-03-12T16:03:31.064Z","trophies":520},{"_id":"5e6a5e33483304439e753dfb","date":"2020-03-12T16:07:15.740Z","trophies":520},{"_id":"5e6f5e98c41393126e985f3f","date":"2020-03-16T11:10:16.384Z","trophies":524},{"_id":"5e6f6efbd6c2921893cfbe14","date":"2020-03-16T12:20:11.711Z","trophies":524},{"_id":"5e6f6fec7411191b02639ca5","date":"2020-03-16T12:24:12.985Z","trophies":524},{"_id":"5e6f71c9ed1f6a1bfd40a301","date":"2020-03-16T12:32:09.577Z","trophies":524},{"_id":"5e6f7206add1a21c28252690","date":"2020-03-16T12:33:10.474Z","trophies":524},{"_id":"5e6f723d30212e1c4c1ab745","date":"2020-03-16T12:34:05.275Z","trophies":524},{"_id":"5e6f8de257b17c1c75664a23","date":"2020-03-16T14:32:02.998Z","trophies":524},{"_id":"5e6f915a0e831e2912945181","date":"2020-03-16T14:46:50.432Z","trophies":524},{"_id":"5e6f91c9756e70295d61edaf","date":"2020-03-16T14:48:41.881Z","trophies":524},{"_id":"5e6f92dd566fb229dcb28b83","date":"2020-03-16T14:53:17.598Z","trophies":524},{"_id":"5e6facf1ed158d107e9874c1","date":"2020-03-16T16:44:33.607Z","trophies":524},{"_id":"5e6fd9f5f130840cbc5109d4","date":"2020-03-16T19:56:37.378Z","trophies":524},{"_id":"5e6fda00f130840cbc51126f","date":"2020-03-16T19:56:48.786Z","trophies":524},{"_id":"5e70a5fd5b736311ac3492aa","date":"2020-03-17T10:27:09.090Z","trophies":524},{"_id":"5e70b9ea7474a21c42806dfb","date":"2020-03-17T11:52:10.847Z","trophies":524},{"_id":"5e70be228bde5f1e0dd7ddd5","date":"2020-03-17T12:10:10.872Z","trophies":524},{"_id":"5e70bf50817c301e9c9e91da","date":"2020-03-17T12:15:12.696Z","trophies":524},{"_id":"5e71fab90a2fff0e82bb0cb0","date":"2020-03-18T10:40:57.980Z","trophies":524},{"_id":"5e722dc8a8fa0e1995609363","date":"2020-03-18T14:18:48.940Z","trophies":524},{"_id":"5e787d80b04cc713a9c1e753","date":"2020-03-23T09:12:32.135Z","trophies":525},{"_id":"5e789f39eab0592060e21d91","date":"2020-03-23T11:36:25.192Z","trophies":525},{"_id":"5e789ff847f87720de47a72e","date":"2020-03-23T11:39:36.472Z","trophies":525},{"_id":"5e78b0b3a4873e2751c5c0d3","date":"2020-03-23T12:50:59.843Z","trophies":525},{"_id":"5e78b12aa4873e2751c5cb29","date":"2020-03-23T12:52:58.475Z","trophies":525},{"_id":"5e78b24d47d28127ff02ea18","date":"2020-03-23T12:57:49.689Z","trophies":525},{"_id":"5e78b46b9df675288c76e2be","date":"2020-03-23T13:06:51.757Z","trophies":525},{"_id":"5e78b608dbe81529665c0e64","date":"2020-03-23T13:13:44.463Z","trophies":525},{"_id":"5e78b719d137662a0dc510f8","date":"2020-03-23T13:18:17.133Z","trophies":525},{"_id":"5e78b7a2ad06602a56d37071","date":"2020-03-23T13:20:34.517Z","trophies":525},{"_id":"5e78b7d9cde4a02a7ed4bd70","date":"2020-03-23T13:21:29.511Z","trophies":525},{"_id":"5e78ba7462cab22bb68bcbf9","date":"2020-03-23T13:32:36.518Z","trophies":525},{"_id":"5e78d01033e36b1142bbdab3","date":"2020-03-23T15:04:48.052Z","trophies":525},{"_id":"5e78d93614d9b6150b1149f0","date":"2020-03-23T15:43:50.094Z","trophies":525},{"_id":"5e78dbb68170fd15faaa438a","date":"2020-03-23T15:54:30.749Z","trophies":525},{"_id":"5e78dbd98170fd15faaa4f68","date":"2020-03-23T15:55:05.471Z","trophies":525},{"_id":"5e7b42fe7104e91d89312866","date":"2020-03-25T11:39:42.185Z","trophies":525},{"_id":"5e7c7d1e4fcfb311190f6bde","date":"2020-03-26T09:59:58.300Z","trophies":525},{"_id":"5e7c7d214fcfb311190f784c","date":"2020-03-26T10:00:01.647Z","trophies":525},{"_id":"5e7c7fff247073121d6e5edc","date":"2020-03-26T10:12:15.894Z","trophies":525},{"_id":"5e7c80a26a540a1257e5934a","date":"2020-03-26T10:14:58.856Z","trophies":525},{"_id":"5e7c815dcde75912fe794ff8","date":"2020-03-26T10:18:05.940Z","trophies":525},{"_id":"5e7c81cefbc5131333898dde","date":"2020-03-26T10:19:58.704Z","trophies":525},{"_id":"5e7c826f5520b013b8dddffd","date":"2020-03-26T10:22:39.823Z","trophies":525},{"_id":"5e7c8295dd2c1d13f2e14def","date":"2020-03-26T10:23:17.702Z","trophies":525},{"_id":"5e7c84e507f1e714ad7daa4c","date":"2020-03-26T10:33:09.491Z","trophies":525},{"_id":"5e7c854ff193b215039e38fa","date":"2020-03-26T10:34:55.702Z","trophies":525},{"_id":"5e7c8575a217021551568948","date":"2020-03-26T10:35:33.752Z","trophies":525},{"_id":"5e7c8789d9717e15cfc2423a","trophies":525,"date":"2020-03-26T10:44:25.033Z"}],"highestTrophies":574,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc248b0","id":16000012,"name":"CROW","power":6,"rank":22,"trophies":[{"_id":"5e5e340d63923610bec1b95b","date":"2020-03-03T10:40:13.108Z","trophies":612},{"_id":"5e5e351696cb3310ffefe5c3","date":"2020-03-03T10:44:38.827Z","trophies":612},{"_id":"5e5e359296cb3310ffefe857","date":"2020-03-03T10:46:42.285Z","trophies":612},{"_id":"5e5e359396cb3310ffefeb0e","date":"2020-03-03T10:46:43.263Z","trophies":612},{"_id":"5e5e362996cb3310ffefede8","date":"2020-03-03T10:49:13.297Z","trophies":612},{"_id":"5e5f6c33a1dd9e0c864f7465","date":"2020-03-04T08:52:03.587Z","trophies":612},{"_id":"5e60d598b254e5193e23ff53","date":"2020-03-05T10:34:00.871Z","trophies":612},{"_id":"5e60d9331907390ccd08ec08","date":"2020-03-05T10:49:23.100Z","trophies":612},{"_id":"5e60d93d1907390ccd08ef6e","date":"2020-03-05T10:49:33.147Z","trophies":612},{"_id":"5e60d96c421a2b0d3f13b4c6","date":"2020-03-05T10:50:20.504Z","trophies":612},{"_id":"5e66026f0d2a560df328f2b3","date":"2020-03-09T08:46:39.899Z","trophies":575},{"_id":"5e663c899bda110d6b16704c","date":"2020-03-09T12:54:33.651Z","trophies":575},{"_id":"5e66486f0e72e714b570bf67","date":"2020-03-09T13:45:19.135Z","trophies":575},{"_id":"5e6648c99db2e11524463ddd","date":"2020-03-09T13:46:49.827Z","trophies":575},{"_id":"5e6649760edc431571ddb3ed","date":"2020-03-09T13:49:42.108Z","trophies":575},{"_id":"5e6649d8448ee115be521900","date":"2020-03-09T13:51:20.983Z","trophies":575},{"_id":"5e665c0ef23112155b98dbbf","date":"2020-03-09T15:09:02.575Z","trophies":575},{"_id":"5e6751de68c45a0c96b97e93","date":"2020-03-10T08:37:50.586Z","trophies":575},{"_id":"5e67af40ba96e9311ad8dfb9","date":"2020-03-10T15:16:16.562Z","trophies":575},{"_id":"5e68a85b3f87d80ed3c9f8fc","date":"2020-03-11T08:59:07.596Z","trophies":575},{"_id":"5e68a89afe9b142ed4d16860","date":"2020-03-11T09:00:10.711Z","trophies":575},{"_id":"5e68ef15bc8b9b14dfc40295","date":"2020-03-11T14:00:53.602Z","trophies":575},{"_id":"5e68fe8e8f3ad6227084c7df","date":"2020-03-11T15:06:54.935Z","trophies":575},{"_id":"5e68fecd8f3ad6227084cd27","date":"2020-03-11T15:07:57.093Z","trophies":575},{"_id":"5e6905a848040627cc4bb916","date":"2020-03-11T15:37:12.955Z","trophies":575},{"_id":"5e6905f61d2c5c2811112861","date":"2020-03-11T15:38:30.090Z","trophies":575},{"_id":"5e69061b6ce714283a834d47","date":"2020-03-11T15:39:07.444Z","trophies":575},{"_id":"5e69066a2cf4f0289f50cfd7","date":"2020-03-11T15:40:26.671Z","trophies":575},{"_id":"5e6a01b30c2a2b0e39b5aca5","date":"2020-03-12T09:32:35.580Z","trophies":575},{"_id":"5e6a0462cc22d90fb718c486","date":"2020-03-12T09:44:02.934Z","trophies":575},{"_id":"5e6a0d7c3c49db1694cd4320","date":"2020-03-12T10:22:52.265Z","trophies":575},{"_id":"5e6a0dbfcedd9616c165893c","date":"2020-03-12T10:23:59.237Z","trophies":575},{"_id":"5e6a0e92c08cae18e2915623","date":"2020-03-12T10:27:30.594Z","trophies":575},{"_id":"5e6a0ec3d7926b190ac1cb91","date":"2020-03-12T10:28:19.278Z","trophies":575},{"_id":"5e6a5d538a08ca41dd17fb5e","date":"2020-03-12T16:03:31.064Z","trophies":575},{"_id":"5e6a5e33483304439e753dfc","date":"2020-03-12T16:07:15.740Z","trophies":575},{"_id":"5e6f5e98c41393126e985f40","date":"2020-03-16T11:10:16.385Z","trophies":575},{"_id":"5e6f6efbd6c2921893cfbe15","date":"2020-03-16T12:20:11.711Z","trophies":575},{"_id":"5e6f6fec7411191b02639ca6","date":"2020-03-16T12:24:12.985Z","trophies":575},{"_id":"5e6f71c9ed1f6a1bfd40a302","date":"2020-03-16T12:32:09.577Z","trophies":575},{"_id":"5e6f7206add1a21c28252691","date":"2020-03-16T12:33:10.474Z","trophies":575},{"_id":"5e6f723d30212e1c4c1ab746","date":"2020-03-16T12:34:05.275Z","trophies":575},{"_id":"5e6f8de257b17c1c75664a24","date":"2020-03-16T14:32:02.998Z","trophies":575},{"_id":"5e6f915a0e831e2912945182","date":"2020-03-16T14:46:50.432Z","trophies":575},{"_id":"5e6f91c9756e70295d61edb0","date":"2020-03-16T14:48:41.881Z","trophies":575},{"_id":"5e6f92dd566fb229dcb28b84","date":"2020-03-16T14:53:17.598Z","trophies":575},{"_id":"5e6facf1ed158d107e9874c2","date":"2020-03-16T16:44:33.607Z","trophies":575},{"_id":"5e6fd9f5f130840cbc5109d5","date":"2020-03-16T19:56:37.378Z","trophies":575},{"_id":"5e6fda00f130840cbc511270","date":"2020-03-16T19:56:48.786Z","trophies":575},{"_id":"5e70a5fd5b736311ac3492ab","date":"2020-03-17T10:27:09.090Z","trophies":579},{"_id":"5e70b9ea7474a21c42806dfc","date":"2020-03-17T11:52:10.848Z","trophies":579},{"_id":"5e70be228bde5f1e0dd7ddd6","date":"2020-03-17T12:10:10.872Z","trophies":579},{"_id":"5e70bf50817c301e9c9e91db","date":"2020-03-17T12:15:12.697Z","trophies":579},{"_id":"5e71fab90a2fff0e82bb0cb1","date":"2020-03-18T10:40:57.980Z","trophies":579},{"_id":"5e722dc8a8fa0e1995609364","date":"2020-03-18T14:18:48.940Z","trophies":579},{"_id":"5e787d80b04cc713a9c1e754","date":"2020-03-23T09:12:32.136Z","trophies":575},{"_id":"5e789f39eab0592060e21d92","date":"2020-03-23T11:36:25.192Z","trophies":575},{"_id":"5e789ff847f87720de47a72f","date":"2020-03-23T11:39:36.473Z","trophies":575},{"_id":"5e78b0b3a4873e2751c5c0d4","date":"2020-03-23T12:50:59.843Z","trophies":575},{"_id":"5e78b12aa4873e2751c5cb2a","date":"2020-03-23T12:52:58.475Z","trophies":575},{"_id":"5e78b24d47d28127ff02ea19","date":"2020-03-23T12:57:49.689Z","trophies":575},{"_id":"5e78b46b9df675288c76e2bf","date":"2020-03-23T13:06:51.757Z","trophies":575},{"_id":"5e78b608dbe81529665c0e65","date":"2020-03-23T13:13:44.463Z","trophies":575},{"_id":"5e78b719d137662a0dc510f9","date":"2020-03-23T13:18:17.133Z","trophies":575},{"_id":"5e78b7a2ad06602a56d37072","date":"2020-03-23T13:20:34.517Z","trophies":575},{"_id":"5e78b7d9cde4a02a7ed4bd71","date":"2020-03-23T13:21:29.511Z","trophies":575},{"_id":"5e78ba7462cab22bb68bcbfa","date":"2020-03-23T13:32:36.518Z","trophies":575},{"_id":"5e78d01033e36b1142bbdab4","date":"2020-03-23T15:04:48.052Z","trophies":575},{"_id":"5e78d93614d9b6150b1149f1","date":"2020-03-23T15:43:50.094Z","trophies":575},{"_id":"5e78dbb68170fd15faaa438b","date":"2020-03-23T15:54:30.749Z","trophies":575},{"_id":"5e78dbd98170fd15faaa4f69","date":"2020-03-23T15:55:05.471Z","trophies":575},{"_id":"5e7b42fe7104e91d89312867","date":"2020-03-25T11:39:42.186Z","trophies":575},{"_id":"5e7c7d1e4fcfb311190f6bdf","date":"2020-03-26T09:59:58.301Z","trophies":575},{"_id":"5e7c7d214fcfb311190f784d","date":"2020-03-26T10:00:01.647Z","trophies":575},{"_id":"5e7c7fff247073121d6e5edd","date":"2020-03-26T10:12:15.894Z","trophies":575},{"_id":"5e7c80a26a540a1257e5934b","date":"2020-03-26T10:14:58.857Z","trophies":575},{"_id":"5e7c815dcde75912fe794ff9","date":"2020-03-26T10:18:05.940Z","trophies":575},{"_id":"5e7c81cefbc5131333898ddf","date":"2020-03-26T10:19:58.704Z","trophies":575},{"_id":"5e7c826f5520b013b8dddffe","date":"2020-03-26T10:22:39.823Z","trophies":575},{"_id":"5e7c8295dd2c1d13f2e14df0","date":"2020-03-26T10:23:17.702Z","trophies":575},{"_id":"5e7c84e507f1e714ad7daa4d","date":"2020-03-26T10:33:09.491Z","trophies":575},{"_id":"5e7c854ff193b215039e38fb","date":"2020-03-26T10:34:55.702Z","trophies":575},{"_id":"5e7c8575a217021551568949","date":"2020-03-26T10:35:33.752Z","trophies":575},{"_id":"5e7c8789d9717e15cfc2423b","trophies":575,"date":"2020-03-26T10:44:25.033Z"}],"highestTrophies":618,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24905","id":16000013,"name":"POCO","power":6,"rank":22,"trophies":[{"_id":"5e5e340d63923610bec1b95d","date":"2020-03-03T10:40:13.109Z","trophies":558},{"_id":"5e5e351696cb3310ffefe5c4","date":"2020-03-03T10:44:38.828Z","trophies":558},{"_id":"5e5e359296cb3310ffefe858","date":"2020-03-03T10:46:42.286Z","trophies":558},{"_id":"5e5e359396cb3310ffefeb0f","date":"2020-03-03T10:46:43.264Z","trophies":558},{"_id":"5e5e362996cb3310ffefede9","date":"2020-03-03T10:49:13.298Z","trophies":558},{"_id":"5e5f6c33a1dd9e0c864f7466","date":"2020-03-04T08:52:03.588Z","trophies":558},{"_id":"5e60d598b254e5193e23ff54","date":"2020-03-05T10:34:00.871Z","trophies":558},{"_id":"5e60d9331907390ccd08ec09","date":"2020-03-05T10:49:23.100Z","trophies":558},{"_id":"5e60d93d1907390ccd08ef6f","date":"2020-03-05T10:49:33.147Z","trophies":558},{"_id":"5e60d96c421a2b0d3f13b4c7","date":"2020-03-05T10:50:20.504Z","trophies":558},{"_id":"5e66026f0d2a560df328f2b4","date":"2020-03-09T08:46:39.899Z","trophies":525},{"_id":"5e663c899bda110d6b16704d","date":"2020-03-09T12:54:33.652Z","trophies":525},{"_id":"5e66486f0e72e714b570bf68","date":"2020-03-09T13:45:19.135Z","trophies":525},{"_id":"5e6648c99db2e11524463dde","date":"2020-03-09T13:46:49.827Z","trophies":525},{"_id":"5e6649760edc431571ddb3ee","date":"2020-03-09T13:49:42.108Z","trophies":525},{"_id":"5e6649d8448ee115be521901","date":"2020-03-09T13:51:20.984Z","trophies":525},{"_id":"5e665c0ef23112155b98dbc0","date":"2020-03-09T15:09:02.575Z","trophies":525},{"_id":"5e6751de68c45a0c96b97e94","date":"2020-03-10T08:37:50.587Z","trophies":525},{"_id":"5e67af40ba96e9311ad8dfba","date":"2020-03-10T15:16:16.563Z","trophies":525},{"_id":"5e68a85b3f87d80ed3c9f8fd","date":"2020-03-11T08:59:07.597Z","trophies":525},{"_id":"5e68a89afe9b142ed4d16861","date":"2020-03-11T09:00:10.712Z","trophies":525},{"_id":"5e68ef15bc8b9b14dfc40296","date":"2020-03-11T14:00:53.602Z","trophies":525},{"_id":"5e68fe8e8f3ad6227084c7e0","date":"2020-03-11T15:06:54.935Z","trophies":525},{"_id":"5e68fecd8f3ad6227084cd28","date":"2020-03-11T15:07:57.093Z","trophies":525},{"_id":"5e6905a848040627cc4bb917","date":"2020-03-11T15:37:12.955Z","trophies":525},{"_id":"5e6905f61d2c5c2811112862","date":"2020-03-11T15:38:30.090Z","trophies":525},{"_id":"5e69061b6ce714283a834d48","date":"2020-03-11T15:39:07.444Z","trophies":525},{"_id":"5e69066a2cf4f0289f50cfd8","date":"2020-03-11T15:40:26.672Z","trophies":525},{"_id":"5e6a01b30c2a2b0e39b5aca6","date":"2020-03-12T09:32:35.581Z","trophies":525},{"_id":"5e6a0462cc22d90fb718c487","date":"2020-03-12T09:44:02.935Z","trophies":525},{"_id":"5e6a0d7c3c49db1694cd4321","date":"2020-03-12T10:22:52.265Z","trophies":525},{"_id":"5e6a0dbfcedd9616c165893d","date":"2020-03-12T10:23:59.237Z","trophies":525},{"_id":"5e6a0e92c08cae18e2915624","date":"2020-03-12T10:27:30.594Z","trophies":525},{"_id":"5e6a0ec3d7926b190ac1cb92","date":"2020-03-12T10:28:19.281Z","trophies":525},{"_id":"5e6a5d538a08ca41dd17fb5f","date":"2020-03-12T16:03:31.065Z","trophies":525},{"_id":"5e6a5e33483304439e753dfd","date":"2020-03-12T16:07:15.742Z","trophies":525},{"_id":"5e6f5e98c41393126e985f41","date":"2020-03-16T11:10:16.385Z","trophies":509},{"_id":"5e6f6efbd6c2921893cfbe16","date":"2020-03-16T12:20:11.711Z","trophies":509},{"_id":"5e6f6fec7411191b02639ca7","date":"2020-03-16T12:24:12.985Z","trophies":509},{"_id":"5e6f71c9ed1f6a1bfd40a303","date":"2020-03-16T12:32:09.578Z","trophies":509},{"_id":"5e6f7206add1a21c28252692","date":"2020-03-16T12:33:10.474Z","trophies":509},{"_id":"5e6f723d30212e1c4c1ab747","date":"2020-03-16T12:34:05.275Z","trophies":509},{"_id":"5e6f8de257b17c1c75664a25","date":"2020-03-16T14:32:02.998Z","trophies":509},{"_id":"5e6f915a0e831e2912945183","date":"2020-03-16T14:46:50.432Z","trophies":509},{"_id":"5e6f91c9756e70295d61edb1","date":"2020-03-16T14:48:41.882Z","trophies":509},{"_id":"5e6f92dd566fb229dcb28b85","date":"2020-03-16T14:53:17.598Z","trophies":509},{"_id":"5e6facf1ed158d107e9874c3","date":"2020-03-16T16:44:33.607Z","trophies":509},{"_id":"5e6fd9f5f130840cbc5109d6","date":"2020-03-16T19:56:37.378Z","trophies":509},{"_id":"5e6fda00f130840cbc511271","date":"2020-03-16T19:56:48.786Z","trophies":509},{"_id":"5e70a5fd5b736311ac3492ac","date":"2020-03-17T10:27:09.090Z","trophies":509},{"_id":"5e70b9ea7474a21c42806dfd","date":"2020-03-17T11:52:10.848Z","trophies":509},{"_id":"5e70be228bde5f1e0dd7ddd7","date":"2020-03-17T12:10:10.872Z","trophies":509},{"_id":"5e70bf50817c301e9c9e91dc","date":"2020-03-17T12:15:12.697Z","trophies":509},{"_id":"5e71fab90a2fff0e82bb0cb2","date":"2020-03-18T10:40:57.980Z","trophies":509},{"_id":"5e722dc8a8fa0e1995609365","date":"2020-03-18T14:18:48.940Z","trophies":509},{"_id":"5e787d80b04cc713a9c1e755","date":"2020-03-23T09:12:32.136Z","trophies":525},{"_id":"5e789f39eab0592060e21d93","date":"2020-03-23T11:36:25.193Z","trophies":525},{"_id":"5e789ff847f87720de47a730","date":"2020-03-23T11:39:36.473Z","trophies":525},{"_id":"5e78b0b3a4873e2751c5c0d5","date":"2020-03-23T12:50:59.843Z","trophies":525},{"_id":"5e78b12aa4873e2751c5cb2b","date":"2020-03-23T12:52:58.476Z","trophies":525},{"_id":"5e78b24d47d28127ff02ea1a","date":"2020-03-23T12:57:49.689Z","trophies":525},{"_id":"5e78b46b9df675288c76e2c0","date":"2020-03-23T13:06:51.757Z","trophies":525},{"_id":"5e78b608dbe81529665c0e66","date":"2020-03-23T13:13:44.463Z","trophies":525},{"_id":"5e78b719d137662a0dc510fa","date":"2020-03-23T13:18:17.134Z","trophies":525},{"_id":"5e78b7a2ad06602a56d37073","date":"2020-03-23T13:20:34.517Z","trophies":525},{"_id":"5e78b7d9cde4a02a7ed4bd72","date":"2020-03-23T13:21:29.511Z","trophies":525},{"_id":"5e78ba7462cab22bb68bcbfb","date":"2020-03-23T13:32:36.519Z","trophies":525},{"_id":"5e78d01033e36b1142bbdab5","date":"2020-03-23T15:04:48.052Z","trophies":525},{"_id":"5e78d93614d9b6150b1149f2","date":"2020-03-23T15:43:50.094Z","trophies":525},{"_id":"5e78dbb68170fd15faaa438c","date":"2020-03-23T15:54:30.749Z","trophies":525},{"_id":"5e78dbd98170fd15faaa4f6a","date":"2020-03-23T15:55:05.471Z","trophies":525},{"_id":"5e7b42fe7104e91d89312868","date":"2020-03-25T11:39:42.186Z","trophies":530},{"_id":"5e7c7d1e4fcfb311190f6be0","date":"2020-03-26T09:59:58.301Z","trophies":550},{"_id":"5e7c7d214fcfb311190f784e","date":"2020-03-26T10:00:01.647Z","trophies":550},{"_id":"5e7c7fff247073121d6e5ede","date":"2020-03-26T10:12:15.894Z","trophies":550},{"_id":"5e7c80a26a540a1257e5934c","date":"2020-03-26T10:14:58.857Z","trophies":550},{"_id":"5e7c815dcde75912fe794ffa","date":"2020-03-26T10:18:05.940Z","trophies":550},{"_id":"5e7c81cefbc5131333898de0","date":"2020-03-26T10:19:58.704Z","trophies":550},{"_id":"5e7c826f5520b013b8dddfff","date":"2020-03-26T10:22:39.823Z","trophies":550},{"_id":"5e7c8295dd2c1d13f2e14df1","date":"2020-03-26T10:23:17.702Z","trophies":550},{"_id":"5e7c84e507f1e714ad7daa4e","date":"2020-03-26T10:33:09.491Z","trophies":550},{"_id":"5e7c854ff193b215039e38fc","date":"2020-03-26T10:34:55.702Z","trophies":550},{"_id":"5e7c8575a21702155156894a","date":"2020-03-26T10:35:33.752Z","trophies":550},{"_id":"5e7c8789d9717e15cfc2423c","trophies":550,"date":"2020-03-26T10:44:25.033Z"}],"highestTrophies":607,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc2495a","id":16000014,"name":"BO","power":10,"rank":25,"trophies":[{"_id":"5e5e340d63923610bec1b95f","date":"2020-03-03T10:40:13.109Z","trophies":660},{"_id":"5e5e351696cb3310ffefe5c5","date":"2020-03-03T10:44:38.828Z","trophies":660},{"_id":"5e5e359296cb3310ffefe859","date":"2020-03-03T10:46:42.286Z","trophies":660},{"_id":"5e5e359396cb3310ffefeb10","date":"2020-03-03T10:46:43.265Z","trophies":660},{"_id":"5e5e362996cb3310ffefedea","date":"2020-03-03T10:49:13.299Z","trophies":660},{"_id":"5e5f6c33a1dd9e0c864f7467","date":"2020-03-04T08:52:03.589Z","trophies":634},{"_id":"5e60d598b254e5193e23ff55","date":"2020-03-05T10:34:00.873Z","trophies":630},{"_id":"5e60d9331907390ccd08ec0a","date":"2020-03-05T10:49:23.100Z","trophies":630},{"_id":"5e60d93d1907390ccd08ef70","date":"2020-03-05T10:49:33.147Z","trophies":630},{"_id":"5e60d96c421a2b0d3f13b4c8","date":"2020-03-05T10:50:20.504Z","trophies":630},{"_id":"5e66026f0d2a560df328f2b5","date":"2020-03-09T08:46:39.900Z","trophies":650},{"_id":"5e663c899bda110d6b16704e","date":"2020-03-09T12:54:33.652Z","trophies":650},{"_id":"5e66486f0e72e714b570bf69","date":"2020-03-09T13:45:19.135Z","trophies":650},{"_id":"5e6648c99db2e11524463ddf","date":"2020-03-09T13:46:49.828Z","trophies":650},{"_id":"5e6649760edc431571ddb3ef","date":"2020-03-09T13:49:42.109Z","trophies":650},{"_id":"5e6649d8448ee115be521902","date":"2020-03-09T13:51:20.984Z","trophies":650},{"_id":"5e665c0ef23112155b98dbc1","date":"2020-03-09T15:09:02.575Z","trophies":650},{"_id":"5e6751de68c45a0c96b97e95","date":"2020-03-10T08:37:50.587Z","trophies":669},{"_id":"5e67af40ba96e9311ad8dfbb","date":"2020-03-10T15:16:16.563Z","trophies":669},{"_id":"5e68a85b3f87d80ed3c9f8fe","date":"2020-03-11T08:59:07.597Z","trophies":669},{"_id":"5e68a89afe9b142ed4d16862","date":"2020-03-11T09:00:10.712Z","trophies":669},{"_id":"5e68ef15bc8b9b14dfc40297","date":"2020-03-11T14:00:53.603Z","trophies":669},{"_id":"5e68fe8e8f3ad6227084c7e1","date":"2020-03-11T15:06:54.935Z","trophies":669},{"_id":"5e68fecd8f3ad6227084cd29","date":"2020-03-11T15:07:57.094Z","trophies":669},{"_id":"5e6905a848040627cc4bb918","date":"2020-03-11T15:37:12.956Z","trophies":669},{"_id":"5e6905f61d2c5c2811112863","date":"2020-03-11T15:38:30.091Z","trophies":669},{"_id":"5e69061b6ce714283a834d49","date":"2020-03-11T15:39:07.445Z","trophies":669},{"_id":"5e69066a2cf4f0289f50cfd9","date":"2020-03-11T15:40:26.672Z","trophies":669},{"_id":"5e6a01b30c2a2b0e39b5aca7","date":"2020-03-12T09:32:35.581Z","trophies":647},{"_id":"5e6a0462cc22d90fb718c488","date":"2020-03-12T09:44:02.935Z","trophies":647},{"_id":"5e6a0d7c3c49db1694cd4322","date":"2020-03-12T10:22:52.265Z","trophies":647},{"_id":"5e6a0dbfcedd9616c165893e","date":"2020-03-12T10:23:59.238Z","trophies":647},{"_id":"5e6a0e92c08cae18e2915625","date":"2020-03-12T10:27:30.594Z","trophies":647},{"_id":"5e6a0ec3d7926b190ac1cb93","date":"2020-03-12T10:28:19.282Z","trophies":647},{"_id":"5e6a5d538a08ca41dd17fb60","date":"2020-03-12T16:03:31.065Z","trophies":647},{"_id":"5e6a5e33483304439e753dfe","date":"2020-03-12T16:07:15.743Z","trophies":647},{"_id":"5e6f5e98c41393126e985f42","date":"2020-03-16T11:10:16.385Z","trophies":624},{"_id":"5e6f6efbd6c2921893cfbe17","date":"2020-03-16T12:20:11.711Z","trophies":624},{"_id":"5e6f6fec7411191b02639ca8","date":"2020-03-16T12:24:12.986Z","trophies":624},{"_id":"5e6f71c9ed1f6a1bfd40a304","date":"2020-03-16T12:32:09.578Z","trophies":624},{"_id":"5e6f7206add1a21c28252693","date":"2020-03-16T12:33:10.474Z","trophies":624},{"_id":"5e6f723d30212e1c4c1ab748","date":"2020-03-16T12:34:05.276Z","trophies":624},{"_id":"5e6f8de257b17c1c75664a26","date":"2020-03-16T14:32:02.998Z","trophies":624},{"_id":"5e6f915a0e831e2912945184","date":"2020-03-16T14:46:50.432Z","trophies":624},{"_id":"5e6f91c9756e70295d61edb2","date":"2020-03-16T14:48:41.882Z","trophies":624},{"_id":"5e6f92dd566fb229dcb28b86","date":"2020-03-16T14:53:17.598Z","trophies":624},{"_id":"5e6facf1ed158d107e9874c4","date":"2020-03-16T16:44:33.607Z","trophies":624},{"_id":"5e6fd9f5f130840cbc5109d7","date":"2020-03-16T19:56:37.378Z","trophies":630},{"_id":"5e6fda00f130840cbc511272","date":"2020-03-16T19:56:48.786Z","trophies":630},{"_id":"5e70a5fd5b736311ac3492ad","date":"2020-03-17T10:27:09.090Z","trophies":631},{"_id":"5e70b9ea7474a21c42806dfe","date":"2020-03-17T11:52:10.848Z","trophies":633},{"_id":"5e70be228bde5f1e0dd7ddd8","date":"2020-03-17T12:10:10.873Z","trophies":633},{"_id":"5e70bf50817c301e9c9e91dd","date":"2020-03-17T12:15:12.697Z","trophies":633},{"_id":"5e71fab90a2fff0e82bb0cb3","date":"2020-03-18T10:40:57.980Z","trophies":613},{"_id":"5e722dc8a8fa0e1995609366","date":"2020-03-18T14:18:48.940Z","trophies":615},{"_id":"5e787d80b04cc713a9c1e756","date":"2020-03-23T09:12:32.136Z","trophies":636},{"_id":"5e789f39eab0592060e21d94","date":"2020-03-23T11:36:25.193Z","trophies":636},{"_id":"5e789ff847f87720de47a731","date":"2020-03-23T11:39:36.473Z","trophies":636},{"_id":"5e78b0b3a4873e2751c5c0d6","date":"2020-03-23T12:50:59.843Z","trophies":636},{"_id":"5e78b12aa4873e2751c5cb2c","date":"2020-03-23T12:52:58.476Z","trophies":636},{"_id":"5e78b24d47d28127ff02ea1b","date":"2020-03-23T12:57:49.689Z","trophies":636},{"_id":"5e78b46b9df675288c76e2c1","date":"2020-03-23T13:06:51.757Z","trophies":636},{"_id":"5e78b608dbe81529665c0e67","date":"2020-03-23T13:13:44.464Z","trophies":636},{"_id":"5e78b719d137662a0dc510fb","date":"2020-03-23T13:18:17.134Z","trophies":636},{"_id":"5e78b7a2ad06602a56d37074","date":"2020-03-23T13:20:34.518Z","trophies":636},{"_id":"5e78b7d9cde4a02a7ed4bd73","date":"2020-03-23T13:21:29.511Z","trophies":636},{"_id":"5e78ba7462cab22bb68bcbfc","date":"2020-03-23T13:32:36.519Z","trophies":636},{"_id":"5e78d01033e36b1142bbdab6","date":"2020-03-23T15:04:48.053Z","trophies":636},{"_id":"5e78d93614d9b6150b1149f3","date":"2020-03-23T15:43:50.094Z","trophies":636},{"_id":"5e78dbb68170fd15faaa438d","date":"2020-03-23T15:54:30.749Z","trophies":636},{"_id":"5e78dbd98170fd15faaa4f6b","date":"2020-03-23T15:55:05.472Z","trophies":636},{"_id":"5e7b42fe7104e91d89312869","date":"2020-03-25T11:39:42.187Z","trophies":629},{"_id":"5e7c7d1e4fcfb311190f6be1","date":"2020-03-26T09:59:58.301Z","trophies":638},{"_id":"5e7c7d214fcfb311190f784f","date":"2020-03-26T10:00:01.647Z","trophies":638},{"_id":"5e7c7fff247073121d6e5edf","date":"2020-03-26T10:12:15.894Z","trophies":638},{"_id":"5e7c80a26a540a1257e5934d","date":"2020-03-26T10:14:58.857Z","trophies":638},{"_id":"5e7c815dcde75912fe794ffb","date":"2020-03-26T10:18:05.940Z","trophies":638},{"_id":"5e7c81cefbc5131333898de1","date":"2020-03-26T10:19:58.704Z","trophies":638},{"_id":"5e7c826f5520b013b8dde000","date":"2020-03-26T10:22:39.824Z","trophies":638},{"_id":"5e7c8295dd2c1d13f2e14df2","date":"2020-03-26T10:23:17.703Z","trophies":638},{"_id":"5e7c84e507f1e714ad7daa4f","date":"2020-03-26T10:33:09.491Z","trophies":638},{"_id":"5e7c854ff193b215039e38fd","date":"2020-03-26T10:34:55.703Z","trophies":638},{"_id":"5e7c8575a21702155156894b","date":"2020-03-26T10:35:33.753Z","trophies":638},{"_id":"5e7c8789d9717e15cfc2423d","trophies":638,"date":"2020-03-26T10:44:25.033Z"}],"highestTrophies":751,"starPowers":[{"_id":"5e7c8789d9717e15cfc249af","id":23000148,"name":"Snare a Bear"},{"_id":"5e7c8789d9717e15cfc249b0","id":23000090,"name":"Circling Eagle"}]},{"_id":"5e7c8789d9717e15cfc249b1","id":16000015,"name":"PIPER","power":7,"rank":23,"trophies":[{"_id":"5e5e340d63923610bec1b963","date":"2020-03-03T10:40:13.109Z","trophies":552},{"_id":"5e5e351696cb3310ffefe5c6","date":"2020-03-03T10:44:38.829Z","trophies":552},{"_id":"5e5e359296cb3310ffefe85a","date":"2020-03-03T10:46:42.287Z","trophies":552},{"_id":"5e5e359396cb3310ffefeb11","date":"2020-03-03T10:46:43.265Z","trophies":552},{"_id":"5e5e362996cb3310ffefedeb","date":"2020-03-03T10:49:13.299Z","trophies":552},{"_id":"5e5f6c33a1dd9e0c864f7468","date":"2020-03-04T08:52:03.591Z","trophies":552},{"_id":"5e60d598b254e5193e23ff56","date":"2020-03-05T10:34:00.874Z","trophies":552},{"_id":"5e60d9331907390ccd08ec0b","date":"2020-03-05T10:49:23.101Z","trophies":552},{"_id":"5e60d93d1907390ccd08ef71","date":"2020-03-05T10:49:33.148Z","trophies":552},{"_id":"5e60d96c421a2b0d3f13b4c9","date":"2020-03-05T10:50:20.505Z","trophies":552},{"_id":"5e66026f0d2a560df328f2b6","date":"2020-03-09T08:46:39.900Z","trophies":525},{"_id":"5e663c899bda110d6b16704f","date":"2020-03-09T12:54:33.652Z","trophies":525},{"_id":"5e66486f0e72e714b570bf6a","date":"2020-03-09T13:45:19.135Z","trophies":525},{"_id":"5e6648c99db2e11524463de0","date":"2020-03-09T13:46:49.828Z","trophies":525},{"_id":"5e6649760edc431571ddb3f0","date":"2020-03-09T13:49:42.109Z","trophies":525},{"_id":"5e6649d8448ee115be521903","date":"2020-03-09T13:51:20.984Z","trophies":525},{"_id":"5e665c0ef23112155b98dbc2","date":"2020-03-09T15:09:02.575Z","trophies":525},{"_id":"5e6751de68c45a0c96b97e96","date":"2020-03-10T08:37:50.588Z","trophies":525},{"_id":"5e67af40ba96e9311ad8dfbc","date":"2020-03-10T15:16:16.563Z","trophies":525},{"_id":"5e68a85b3f87d80ed3c9f8ff","date":"2020-03-11T08:59:07.597Z","trophies":533},{"_id":"5e68a89afe9b142ed4d16863","date":"2020-03-11T09:00:10.712Z","trophies":533},{"_id":"5e68ef15bc8b9b14dfc40298","date":"2020-03-11T14:00:53.603Z","trophies":533},{"_id":"5e68fe8e8f3ad6227084c7e2","date":"2020-03-11T15:06:54.936Z","trophies":533},{"_id":"5e68fecd8f3ad6227084cd2a","date":"2020-03-11T15:07:57.094Z","trophies":533},{"_id":"5e6905a848040627cc4bb919","date":"2020-03-11T15:37:12.956Z","trophies":533},{"_id":"5e6905f61d2c5c2811112864","date":"2020-03-11T15:38:30.091Z","trophies":533},{"_id":"5e69061b6ce714283a834d4a","date":"2020-03-11T15:39:07.445Z","trophies":533},{"_id":"5e69066a2cf4f0289f50cfda","date":"2020-03-11T15:40:26.672Z","trophies":533},{"_id":"5e6a01b30c2a2b0e39b5aca8","date":"2020-03-12T09:32:35.581Z","trophies":551},{"_id":"5e6a0462cc22d90fb718c489","date":"2020-03-12T09:44:02.937Z","trophies":551},{"_id":"5e6a0d7c3c49db1694cd4323","date":"2020-03-12T10:22:52.265Z","trophies":551},{"_id":"5e6a0dbfcedd9616c165893f","date":"2020-03-12T10:23:59.238Z","trophies":551},{"_id":"5e6a0e92c08cae18e2915626","date":"2020-03-12T10:27:30.594Z","trophies":551},{"_id":"5e6a0ec3d7926b190ac1cb94","date":"2020-03-12T10:28:19.282Z","trophies":551},{"_id":"5e6a5d538a08ca41dd17fb61","date":"2020-03-12T16:03:31.065Z","trophies":551},{"_id":"5e6a5e33483304439e753dff","date":"2020-03-12T16:07:15.744Z","trophies":551},{"_id":"5e6f5e98c41393126e985f43","date":"2020-03-16T11:10:16.386Z","trophies":551},{"_id":"5e6f6efbd6c2921893cfbe18","date":"2020-03-16T12:20:11.711Z","trophies":551},{"_id":"5e6f6fec7411191b02639ca9","date":"2020-03-16T12:24:12.986Z","trophies":551},{"_id":"5e6f71c9ed1f6a1bfd40a305","date":"2020-03-16T12:32:09.578Z","trophies":551},{"_id":"5e6f7206add1a21c28252694","date":"2020-03-16T12:33:10.474Z","trophies":551},{"_id":"5e6f723d30212e1c4c1ab749","date":"2020-03-16T12:34:05.276Z","trophies":551},{"_id":"5e6f8de257b17c1c75664a27","date":"2020-03-16T14:32:02.998Z","trophies":551},{"_id":"5e6f915a0e831e2912945185","date":"2020-03-16T14:46:50.432Z","trophies":551},{"_id":"5e6f91c9756e70295d61edb3","date":"2020-03-16T14:48:41.882Z","trophies":551},{"_id":"5e6f92dd566fb229dcb28b87","date":"2020-03-16T14:53:17.598Z","trophies":551},{"_id":"5e6facf1ed158d107e9874c5","date":"2020-03-16T16:44:33.608Z","trophies":551},{"_id":"5e6fd9f5f130840cbc5109d8","date":"2020-03-16T19:56:37.378Z","trophies":551},{"_id":"5e6fda00f130840cbc511273","date":"2020-03-16T19:56:48.787Z","trophies":551},{"_id":"5e70a5fd5b736311ac3492ae","date":"2020-03-17T10:27:09.090Z","trophies":551},{"_id":"5e70b9ea7474a21c42806dff","date":"2020-03-17T11:52:10.848Z","trophies":551},{"_id":"5e70be228bde5f1e0dd7ddd9","date":"2020-03-17T12:10:10.873Z","trophies":551},{"_id":"5e70bf50817c301e9c9e91de","date":"2020-03-17T12:15:12.697Z","trophies":551},{"_id":"5e71fab90a2fff0e82bb0cb4","date":"2020-03-18T10:40:57.981Z","trophies":551},{"_id":"5e722dc8a8fa0e1995609367","date":"2020-03-18T14:18:48.940Z","trophies":551},{"_id":"5e787d80b04cc713a9c1e757","date":"2020-03-23T09:12:32.136Z","trophies":525},{"_id":"5e789f39eab0592060e21d95","date":"2020-03-23T11:36:25.193Z","trophies":525},{"_id":"5e789ff847f87720de47a732","date":"2020-03-23T11:39:36.473Z","trophies":525},{"_id":"5e78b0b3a4873e2751c5c0d7","date":"2020-03-23T12:50:59.844Z","trophies":525},{"_id":"5e78b12aa4873e2751c5cb2d","date":"2020-03-23T12:52:58.477Z","trophies":525},{"_id":"5e78b24d47d28127ff02ea1c","date":"2020-03-23T12:57:49.689Z","trophies":525},{"_id":"5e78b46b9df675288c76e2c2","date":"2020-03-23T13:06:51.757Z","trophies":525},{"_id":"5e78b608dbe81529665c0e68","date":"2020-03-23T13:13:44.464Z","trophies":525},{"_id":"5e78b719d137662a0dc510fc","date":"2020-03-23T13:18:17.134Z","trophies":525},{"_id":"5e78b7a2ad06602a56d37075","date":"2020-03-23T13:20:34.519Z","trophies":525},{"_id":"5e78b7d9cde4a02a7ed4bd74","date":"2020-03-23T13:21:29.512Z","trophies":525},{"_id":"5e78ba7462cab22bb68bcbfd","date":"2020-03-23T13:32:36.520Z","trophies":525},{"_id":"5e78d01033e36b1142bbdab7","date":"2020-03-23T15:04:48.053Z","trophies":525},{"_id":"5e78d93614d9b6150b1149f4","date":"2020-03-23T15:43:50.094Z","trophies":525},{"_id":"5e78dbb68170fd15faaa438e","date":"2020-03-23T15:54:30.749Z","trophies":525},{"_id":"5e78dbd98170fd15faaa4f6c","date":"2020-03-23T15:55:05.472Z","trophies":525},{"_id":"5e7b42fe7104e91d8931286a","date":"2020-03-25T11:39:42.187Z","trophies":553},{"_id":"5e7c7d1e4fcfb311190f6be2","date":"2020-03-26T09:59:58.301Z","trophies":553},{"_id":"5e7c7d214fcfb311190f7850","date":"2020-03-26T10:00:01.648Z","trophies":553},{"_id":"5e7c7fff247073121d6e5ee0","date":"2020-03-26T10:12:15.895Z","trophies":553},{"_id":"5e7c80a26a540a1257e5934e","date":"2020-03-26T10:14:58.857Z","trophies":553},{"_id":"5e7c815dcde75912fe794ffc","date":"2020-03-26T10:18:05.941Z","trophies":553},{"_id":"5e7c81cefbc5131333898de2","date":"2020-03-26T10:19:58.704Z","trophies":553},{"_id":"5e7c826f5520b013b8dde001","date":"2020-03-26T10:22:39.824Z","trophies":553},{"_id":"5e7c8295dd2c1d13f2e14df3","date":"2020-03-26T10:23:17.703Z","trophies":553},{"_id":"5e7c84e507f1e714ad7daa50","date":"2020-03-26T10:33:09.492Z","trophies":553},{"_id":"5e7c854ff193b215039e38fe","date":"2020-03-26T10:34:55.703Z","trophies":553},{"_id":"5e7c8575a21702155156894c","date":"2020-03-26T10:35:33.753Z","trophies":553},{"_id":"5e7c8789d9717e15cfc2423e","trophies":553,"date":"2020-03-26T10:44:25.034Z"}],"highestTrophies":656,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24a06","id":16000016,"name":"PAM","power":9,"rank":24,"trophies":[{"_id":"5e5e340d63923610bec1b965","date":"2020-03-03T10:40:13.109Z","trophies":605},{"_id":"5e5e351696cb3310ffefe5c7","date":"2020-03-03T10:44:38.830Z","trophies":605},{"_id":"5e5e359296cb3310ffefe85b","date":"2020-03-03T10:46:42.287Z","trophies":605},{"_id":"5e5e359396cb3310ffefeb12","date":"2020-03-03T10:46:43.268Z","trophies":605},{"_id":"5e5e362996cb3310ffefedec","date":"2020-03-03T10:49:13.300Z","trophies":605},{"_id":"5e5f6c33a1dd9e0c864f7469","date":"2020-03-04T08:52:03.592Z","trophies":605},{"_id":"5e60d598b254e5193e23ff57","date":"2020-03-05T10:34:00.875Z","trophies":605},{"_id":"5e60d9331907390ccd08ec0c","date":"2020-03-05T10:49:23.102Z","trophies":605},{"_id":"5e60d93d1907390ccd08ef72","date":"2020-03-05T10:49:33.148Z","trophies":605},{"_id":"5e60d96c421a2b0d3f13b4ca","date":"2020-03-05T10:50:20.505Z","trophies":605},{"_id":"5e66026f0d2a560df328f2b7","date":"2020-03-09T08:46:39.900Z","trophies":575},{"_id":"5e663c899bda110d6b167050","date":"2020-03-09T12:54:33.652Z","trophies":575},{"_id":"5e66486f0e72e714b570bf6b","date":"2020-03-09T13:45:19.135Z","trophies":575},{"_id":"5e6648c99db2e11524463de1","date":"2020-03-09T13:46:49.828Z","trophies":575},{"_id":"5e6649760edc431571ddb3f1","date":"2020-03-09T13:49:42.110Z","trophies":575},{"_id":"5e6649d8448ee115be521904","date":"2020-03-09T13:51:20.984Z","trophies":575},{"_id":"5e665c0ef23112155b98dbc3","date":"2020-03-09T15:09:02.576Z","trophies":575},{"_id":"5e6751de68c45a0c96b97e97","date":"2020-03-10T08:37:50.588Z","trophies":575},{"_id":"5e67af40ba96e9311ad8dfbd","date":"2020-03-10T15:16:16.563Z","trophies":575},{"_id":"5e68a85b3f87d80ed3c9f900","date":"2020-03-11T08:59:07.597Z","trophies":575},{"_id":"5e68a89afe9b142ed4d16864","date":"2020-03-11T09:00:10.713Z","trophies":575},{"_id":"5e68ef15bc8b9b14dfc40299","date":"2020-03-11T14:00:53.603Z","trophies":575},{"_id":"5e68fe8e8f3ad6227084c7e3","date":"2020-03-11T15:06:54.936Z","trophies":575},{"_id":"5e68fecd8f3ad6227084cd2b","date":"2020-03-11T15:07:57.094Z","trophies":575},{"_id":"5e6905a848040627cc4bb91a","date":"2020-03-11T15:37:12.956Z","trophies":575},{"_id":"5e6905f61d2c5c2811112865","date":"2020-03-11T15:38:30.092Z","trophies":575},{"_id":"5e69061b6ce714283a834d4b","date":"2020-03-11T15:39:07.446Z","trophies":575},{"_id":"5e69066a2cf4f0289f50cfdb","date":"2020-03-11T15:40:26.672Z","trophies":575},{"_id":"5e6a01b30c2a2b0e39b5aca9","date":"2020-03-12T09:32:35.581Z","trophies":575},{"_id":"5e6a0462cc22d90fb718c48a","date":"2020-03-12T09:44:02.938Z","trophies":575},{"_id":"5e6a0d7c3c49db1694cd4324","date":"2020-03-12T10:22:52.265Z","trophies":575},{"_id":"5e6a0dbfcedd9616c1658940","date":"2020-03-12T10:23:59.238Z","trophies":575},{"_id":"5e6a0e92c08cae18e2915627","date":"2020-03-12T10:27:30.594Z","trophies":575},{"_id":"5e6a0ec3d7926b190ac1cb95","date":"2020-03-12T10:28:19.282Z","trophies":575},{"_id":"5e6a5d538a08ca41dd17fb62","date":"2020-03-12T16:03:31.065Z","trophies":575},{"_id":"5e6a5e33483304439e753e00","date":"2020-03-12T16:07:15.745Z","trophies":575},{"_id":"5e6f5e98c41393126e985f44","date":"2020-03-16T11:10:16.386Z","trophies":650},{"_id":"5e6f6efbd6c2921893cfbe19","date":"2020-03-16T12:20:11.711Z","trophies":650},{"_id":"5e6f6fec7411191b02639caa","date":"2020-03-16T12:24:12.986Z","trophies":650},{"_id":"5e6f71c9ed1f6a1bfd40a306","date":"2020-03-16T12:32:09.579Z","trophies":650},{"_id":"5e6f7206add1a21c28252695","date":"2020-03-16T12:33:10.474Z","trophies":650},{"_id":"5e6f723d30212e1c4c1ab74a","date":"2020-03-16T12:34:05.276Z","trophies":650},{"_id":"5e6f8de257b17c1c75664a28","date":"2020-03-16T14:32:02.998Z","trophies":650},{"_id":"5e6f915a0e831e2912945186","date":"2020-03-16T14:46:50.432Z","trophies":650},{"_id":"5e6f91c9756e70295d61edb4","date":"2020-03-16T14:48:41.882Z","trophies":650},{"_id":"5e6f92dd566fb229dcb28b88","date":"2020-03-16T14:53:17.598Z","trophies":650},{"_id":"5e6facf1ed158d107e9874c6","date":"2020-03-16T16:44:33.608Z","trophies":650},{"_id":"5e6fd9f5f130840cbc5109d9","date":"2020-03-16T19:56:37.379Z","trophies":650},{"_id":"5e6fda00f130840cbc511274","date":"2020-03-16T19:56:48.787Z","trophies":650},{"_id":"5e70a5fd5b736311ac3492af","date":"2020-03-17T10:27:09.090Z","trophies":650},{"_id":"5e70b9ea7474a21c42806e00","date":"2020-03-17T11:52:10.848Z","trophies":650},{"_id":"5e70be228bde5f1e0dd7ddda","date":"2020-03-17T12:10:10.873Z","trophies":650},{"_id":"5e70bf50817c301e9c9e91df","date":"2020-03-17T12:15:12.697Z","trophies":650},{"_id":"5e71fab90a2fff0e82bb0cb5","date":"2020-03-18T10:40:57.981Z","trophies":650},{"_id":"5e722dc8a8fa0e1995609368","date":"2020-03-18T14:18:48.941Z","trophies":650},{"_id":"5e787d80b04cc713a9c1e758","date":"2020-03-23T09:12:32.136Z","trophies":625},{"_id":"5e789f39eab0592060e21d96","date":"2020-03-23T11:36:25.193Z","trophies":625},{"_id":"5e789ff847f87720de47a733","date":"2020-03-23T11:39:36.473Z","trophies":625},{"_id":"5e78b0b3a4873e2751c5c0d8","date":"2020-03-23T12:50:59.844Z","trophies":625},{"_id":"5e78b12aa4873e2751c5cb2e","date":"2020-03-23T12:52:58.477Z","trophies":625},{"_id":"5e78b24d47d28127ff02ea1d","date":"2020-03-23T12:57:49.689Z","trophies":625},{"_id":"5e78b46b9df675288c76e2c3","date":"2020-03-23T13:06:51.757Z","trophies":625},{"_id":"5e78b608dbe81529665c0e69","date":"2020-03-23T13:13:44.464Z","trophies":625},{"_id":"5e78b719d137662a0dc510fd","date":"2020-03-23T13:18:17.134Z","trophies":625},{"_id":"5e78b7a2ad06602a56d37076","date":"2020-03-23T13:20:34.519Z","trophies":625},{"_id":"5e78b7d9cde4a02a7ed4bd75","date":"2020-03-23T13:21:29.512Z","trophies":625},{"_id":"5e78ba7462cab22bb68bcbfe","date":"2020-03-23T13:32:36.520Z","trophies":625},{"_id":"5e78d01033e36b1142bbdab8","date":"2020-03-23T15:04:48.053Z","trophies":625},{"_id":"5e78d93614d9b6150b1149f5","date":"2020-03-23T15:43:50.094Z","trophies":625},{"_id":"5e78dbb68170fd15faaa438f","date":"2020-03-23T15:54:30.749Z","trophies":625},{"_id":"5e78dbd98170fd15faaa4f6d","date":"2020-03-23T15:55:05.473Z","trophies":625},{"_id":"5e7b42fe7104e91d8931286b","date":"2020-03-25T11:39:42.187Z","trophies":625},{"_id":"5e7c7d1e4fcfb311190f6be3","date":"2020-03-26T09:59:58.302Z","trophies":654},{"_id":"5e7c7d214fcfb311190f7851","date":"2020-03-26T10:00:01.648Z","trophies":654},{"_id":"5e7c7fff247073121d6e5ee1","date":"2020-03-26T10:12:15.895Z","trophies":654},{"_id":"5e7c80a26a540a1257e5934f","date":"2020-03-26T10:14:58.857Z","trophies":654},{"_id":"5e7c815dcde75912fe794ffd","date":"2020-03-26T10:18:05.941Z","trophies":654},{"_id":"5e7c81cefbc5131333898de3","date":"2020-03-26T10:19:58.704Z","trophies":654},{"_id":"5e7c826f5520b013b8dde002","date":"2020-03-26T10:22:39.824Z","trophies":654},{"_id":"5e7c8295dd2c1d13f2e14df4","date":"2020-03-26T10:23:17.703Z","trophies":654},{"_id":"5e7c84e507f1e714ad7daa51","date":"2020-03-26T10:33:09.492Z","trophies":654},{"_id":"5e7c854ff193b215039e38ff","date":"2020-03-26T10:34:55.703Z","trophies":654},{"_id":"5e7c8575a21702155156894d","date":"2020-03-26T10:35:33.753Z","trophies":654},{"_id":"5e7c8789d9717e15cfc2423f","trophies":654,"date":"2020-03-26T10:44:25.035Z"}],"highestTrophies":701,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24a5b","id":16000017,"name":"TARA","power":7,"rank":22,"trophies":[{"_id":"5e5e340d63923610bec1b967","date":"2020-03-03T10:40:13.110Z","trophies":605},{"_id":"5e5e351696cb3310ffefe5c8","date":"2020-03-03T10:44:38.832Z","trophies":605},{"_id":"5e5e359296cb3310ffefe85c","date":"2020-03-03T10:46:42.288Z","trophies":605},{"_id":"5e5e359396cb3310ffefeb13","date":"2020-03-03T10:46:43.269Z","trophies":605},{"_id":"5e5e362996cb3310ffefeded","date":"2020-03-03T10:49:13.302Z","trophies":605},{"_id":"5e5f6c33a1dd9e0c864f746a","date":"2020-03-04T08:52:03.592Z","trophies":605},{"_id":"5e60d598b254e5193e23ff58","date":"2020-03-05T10:34:00.876Z","trophies":605},{"_id":"5e60d9331907390ccd08ec0d","date":"2020-03-05T10:49:23.103Z","trophies":605},{"_id":"5e60d93d1907390ccd08ef73","date":"2020-03-05T10:49:33.148Z","trophies":605},{"_id":"5e60d96c421a2b0d3f13b4cb","date":"2020-03-05T10:50:20.505Z","trophies":605},{"_id":"5e66026f0d2a560df328f2b8","date":"2020-03-09T08:46:39.901Z","trophies":575},{"_id":"5e663c899bda110d6b167051","date":"2020-03-09T12:54:33.652Z","trophies":575},{"_id":"5e66486f0e72e714b570bf6c","date":"2020-03-09T13:45:19.136Z","trophies":575},{"_id":"5e6648c99db2e11524463de2","date":"2020-03-09T13:46:49.828Z","trophies":575},{"_id":"5e6649760edc431571ddb3f2","date":"2020-03-09T13:49:42.110Z","trophies":575},{"_id":"5e6649d8448ee115be521905","date":"2020-03-09T13:51:20.985Z","trophies":575},{"_id":"5e665c0ef23112155b98dbc4","date":"2020-03-09T15:09:02.576Z","trophies":575},{"_id":"5e6751de68c45a0c96b97e98","date":"2020-03-10T08:37:50.588Z","trophies":575},{"_id":"5e67af40ba96e9311ad8dfbe","date":"2020-03-10T15:16:16.563Z","trophies":575},{"_id":"5e68a85b3f87d80ed3c9f901","date":"2020-03-11T08:59:07.598Z","trophies":575},{"_id":"5e68a89afe9b142ed4d16865","date":"2020-03-11T09:00:10.713Z","trophies":575},{"_id":"5e68ef15bc8b9b14dfc4029a","date":"2020-03-11T14:00:53.604Z","trophies":575},{"_id":"5e68fe8e8f3ad6227084c7e4","date":"2020-03-11T15:06:54.936Z","trophies":575},{"_id":"5e68fecd8f3ad6227084cd2c","date":"2020-03-11T15:07:57.094Z","trophies":575},{"_id":"5e6905a848040627cc4bb91b","date":"2020-03-11T15:37:12.956Z","trophies":575},{"_id":"5e6905f61d2c5c2811112866","date":"2020-03-11T15:38:30.093Z","trophies":575},{"_id":"5e69061b6ce714283a834d4c","date":"2020-03-11T15:39:07.446Z","trophies":575},{"_id":"5e69066a2cf4f0289f50cfdc","date":"2020-03-11T15:40:26.672Z","trophies":575},{"_id":"5e6a01b30c2a2b0e39b5acaa","date":"2020-03-12T09:32:35.581Z","trophies":575},{"_id":"5e6a0462cc22d90fb718c48b","date":"2020-03-12T09:44:02.938Z","trophies":575},{"_id":"5e6a0d7c3c49db1694cd4325","date":"2020-03-12T10:22:52.266Z","trophies":575},{"_id":"5e6a0dbfcedd9616c1658941","date":"2020-03-12T10:23:59.238Z","trophies":575},{"_id":"5e6a0e92c08cae18e2915628","date":"2020-03-12T10:27:30.595Z","trophies":575},{"_id":"5e6a0ec3d7926b190ac1cb96","date":"2020-03-12T10:28:19.282Z","trophies":575},{"_id":"5e6a5d538a08ca41dd17fb63","date":"2020-03-12T16:03:31.065Z","trophies":575},{"_id":"5e6a5e33483304439e753e01","date":"2020-03-12T16:07:15.746Z","trophies":575},{"_id":"5e6f5e98c41393126e985f45","date":"2020-03-16T11:10:16.386Z","trophies":572},{"_id":"5e6f6efbd6c2921893cfbe1a","date":"2020-03-16T12:20:11.712Z","trophies":572},{"_id":"5e6f6fec7411191b02639cab","date":"2020-03-16T12:24:12.987Z","trophies":572},{"_id":"5e6f71c9ed1f6a1bfd40a307","date":"2020-03-16T12:32:09.579Z","trophies":572},{"_id":"5e6f7206add1a21c28252696","date":"2020-03-16T12:33:10.474Z","trophies":572},{"_id":"5e6f723d30212e1c4c1ab74b","date":"2020-03-16T12:34:05.276Z","trophies":572},{"_id":"5e6f8de257b17c1c75664a29","date":"2020-03-16T14:32:02.999Z","trophies":572},{"_id":"5e6f915a0e831e2912945187","date":"2020-03-16T14:46:50.433Z","trophies":572},{"_id":"5e6f91c9756e70295d61edb5","date":"2020-03-16T14:48:41.883Z","trophies":572},{"_id":"5e6f92dd566fb229dcb28b89","date":"2020-03-16T14:53:17.598Z","trophies":572},{"_id":"5e6facf1ed158d107e9874c7","date":"2020-03-16T16:44:33.608Z","trophies":572},{"_id":"5e6fd9f5f130840cbc5109da","date":"2020-03-16T19:56:37.379Z","trophies":572},{"_id":"5e6fda00f130840cbc511275","date":"2020-03-16T19:56:48.787Z","trophies":572},{"_id":"5e70a5fd5b736311ac3492b0","date":"2020-03-17T10:27:09.090Z","trophies":558},{"_id":"5e70b9ea7474a21c42806e01","date":"2020-03-17T11:52:10.848Z","trophies":558},{"_id":"5e70be228bde5f1e0dd7dddb","date":"2020-03-17T12:10:10.873Z","trophies":558},{"_id":"5e70bf50817c301e9c9e91e0","date":"2020-03-17T12:15:12.697Z","trophies":558},{"_id":"5e71fab90a2fff0e82bb0cb6","date":"2020-03-18T10:40:57.981Z","trophies":558},{"_id":"5e722dc8a8fa0e1995609369","date":"2020-03-18T14:18:48.941Z","trophies":558},{"_id":"5e787d80b04cc713a9c1e759","date":"2020-03-23T09:12:32.136Z","trophies":525},{"_id":"5e789f39eab0592060e21d97","date":"2020-03-23T11:36:25.194Z","trophies":525},{"_id":"5e789ff847f87720de47a734","date":"2020-03-23T11:39:36.473Z","trophies":525},{"_id":"5e78b0b3a4873e2751c5c0d9","date":"2020-03-23T12:50:59.844Z","trophies":525},{"_id":"5e78b12aa4873e2751c5cb2f","date":"2020-03-23T12:52:58.477Z","trophies":525},{"_id":"5e78b24d47d28127ff02ea1e","date":"2020-03-23T12:57:49.689Z","trophies":525},{"_id":"5e78b46b9df675288c76e2c4","date":"2020-03-23T13:06:51.758Z","trophies":525},{"_id":"5e78b608dbe81529665c0e6a","date":"2020-03-23T13:13:44.464Z","trophies":525},{"_id":"5e78b719d137662a0dc510fe","date":"2020-03-23T13:18:17.135Z","trophies":525},{"_id":"5e78b7a2ad06602a56d37077","date":"2020-03-23T13:20:34.519Z","trophies":525},{"_id":"5e78b7d9cde4a02a7ed4bd76","date":"2020-03-23T13:21:29.512Z","trophies":525},{"_id":"5e78ba7462cab22bb68bcbff","date":"2020-03-23T13:32:36.520Z","trophies":525},{"_id":"5e78d01033e36b1142bbdab9","date":"2020-03-23T15:04:48.053Z","trophies":525},{"_id":"5e78d93614d9b6150b1149f6","date":"2020-03-23T15:43:50.095Z","trophies":525},{"_id":"5e78dbb68170fd15faaa4390","date":"2020-03-23T15:54:30.750Z","trophies":525},{"_id":"5e78dbd98170fd15faaa4f6e","date":"2020-03-23T15:55:05.473Z","trophies":525},{"_id":"5e7b42fe7104e91d8931286c","date":"2020-03-25T11:39:42.187Z","trophies":525},{"_id":"5e7c7d1e4fcfb311190f6be4","date":"2020-03-26T09:59:58.302Z","trophies":525},{"_id":"5e7c7d214fcfb311190f7852","date":"2020-03-26T10:00:01.648Z","trophies":525},{"_id":"5e7c7fff247073121d6e5ee2","date":"2020-03-26T10:12:15.895Z","trophies":525},{"_id":"5e7c80a26a540a1257e59350","date":"2020-03-26T10:14:58.857Z","trophies":525},{"_id":"5e7c815dcde75912fe794ffe","date":"2020-03-26T10:18:05.941Z","trophies":525},{"_id":"5e7c81cefbc5131333898de4","date":"2020-03-26T10:19:58.705Z","trophies":525},{"_id":"5e7c826f5520b013b8dde003","date":"2020-03-26T10:22:39.824Z","trophies":525},{"_id":"5e7c8295dd2c1d13f2e14df5","date":"2020-03-26T10:23:17.703Z","trophies":525},{"_id":"5e7c84e507f1e714ad7daa52","date":"2020-03-26T10:33:09.492Z","trophies":525},{"_id":"5e7c854ff193b215039e3900","date":"2020-03-26T10:34:55.703Z","trophies":525},{"_id":"5e7c8575a21702155156894e","date":"2020-03-26T10:35:33.753Z","trophies":525},{"_id":"5e7c8789d9717e15cfc24240","trophies":525,"date":"2020-03-26T10:44:25.036Z"}],"highestTrophies":617,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24ab0","id":16000018,"name":"DARRYL","power":7,"rank":24,"trophies":[{"_id":"5e5e340d63923610bec1b969","date":"2020-03-03T10:40:13.110Z","trophies":650},{"_id":"5e5e351696cb3310ffefe5c9","date":"2020-03-03T10:44:38.833Z","trophies":650},{"_id":"5e5e359296cb3310ffefe85d","date":"2020-03-03T10:46:42.289Z","trophies":650},{"_id":"5e5e359396cb3310ffefeb14","date":"2020-03-03T10:46:43.270Z","trophies":650},{"_id":"5e5e362996cb3310ffefedee","date":"2020-03-03T10:49:13.304Z","trophies":650},{"_id":"5e5f6c33a1dd9e0c864f746b","date":"2020-03-04T08:52:03.593Z","trophies":650},{"_id":"5e60d598b254e5193e23ff59","date":"2020-03-05T10:34:00.877Z","trophies":650},{"_id":"5e60d9331907390ccd08ec0e","date":"2020-03-05T10:49:23.103Z","trophies":650},{"_id":"5e60d93d1907390ccd08ef74","date":"2020-03-05T10:49:33.148Z","trophies":650},{"_id":"5e60d96c421a2b0d3f13b4cc","date":"2020-03-05T10:50:20.505Z","trophies":650},{"_id":"5e66026f0d2a560df328f2b9","date":"2020-03-09T08:46:39.901Z","trophies":625},{"_id":"5e663c899bda110d6b167052","date":"2020-03-09T12:54:33.652Z","trophies":625},{"_id":"5e66486f0e72e714b570bf6d","date":"2020-03-09T13:45:19.136Z","trophies":625},{"_id":"5e6648c99db2e11524463de3","date":"2020-03-09T13:46:49.828Z","trophies":625},{"_id":"5e6649760edc431571ddb3f3","date":"2020-03-09T13:49:42.110Z","trophies":625},{"_id":"5e6649d8448ee115be521906","date":"2020-03-09T13:51:20.985Z","trophies":625},{"_id":"5e665c0ef23112155b98dbc5","date":"2020-03-09T15:09:02.576Z","trophies":625},{"_id":"5e6751de68c45a0c96b97e99","date":"2020-03-10T08:37:50.588Z","trophies":625},{"_id":"5e67af40ba96e9311ad8dfbf","date":"2020-03-10T15:16:16.564Z","trophies":625},{"_id":"5e68a85b3f87d80ed3c9f902","date":"2020-03-11T08:59:07.598Z","trophies":625},{"_id":"5e68a89afe9b142ed4d16866","date":"2020-03-11T09:00:10.713Z","trophies":625},{"_id":"5e68ef15bc8b9b14dfc4029b","date":"2020-03-11T14:00:53.606Z","trophies":625},{"_id":"5e68fe8e8f3ad6227084c7e5","date":"2020-03-11T15:06:54.936Z","trophies":625},{"_id":"5e68fecd8f3ad6227084cd2d","date":"2020-03-11T15:07:57.095Z","trophies":625},{"_id":"5e6905a848040627cc4bb91c","date":"2020-03-11T15:37:12.957Z","trophies":625},{"_id":"5e6905f61d2c5c2811112867","date":"2020-03-11T15:38:30.093Z","trophies":625},{"_id":"5e69061b6ce714283a834d4d","date":"2020-03-11T15:39:07.446Z","trophies":625},{"_id":"5e69066a2cf4f0289f50cfdd","date":"2020-03-11T15:40:26.673Z","trophies":625},{"_id":"5e6a01b30c2a2b0e39b5acab","date":"2020-03-12T09:32:35.581Z","trophies":625},{"_id":"5e6a0462cc22d90fb718c48c","date":"2020-03-12T09:44:02.939Z","trophies":625},{"_id":"5e6a0d7c3c49db1694cd4326","date":"2020-03-12T10:22:52.266Z","trophies":625},{"_id":"5e6a0dbfcedd9616c1658942","date":"2020-03-12T10:23:59.238Z","trophies":625},{"_id":"5e6a0e92c08cae18e2915629","date":"2020-03-12T10:27:30.595Z","trophies":625},{"_id":"5e6a0ec3d7926b190ac1cb97","date":"2020-03-12T10:28:19.282Z","trophies":625},{"_id":"5e6a5d538a08ca41dd17fb64","date":"2020-03-12T16:03:31.066Z","trophies":625},{"_id":"5e6a5e33483304439e753e02","date":"2020-03-12T16:07:15.746Z","trophies":625},{"_id":"5e6f5e98c41393126e985f46","date":"2020-03-16T11:10:16.386Z","trophies":621},{"_id":"5e6f6efbd6c2921893cfbe1b","date":"2020-03-16T12:20:11.712Z","trophies":621},{"_id":"5e6f6fec7411191b02639cac","date":"2020-03-16T12:24:12.987Z","trophies":621},{"_id":"5e6f71c9ed1f6a1bfd40a308","date":"2020-03-16T12:32:09.579Z","trophies":621},{"_id":"5e6f7206add1a21c28252697","date":"2020-03-16T12:33:10.475Z","trophies":621},{"_id":"5e6f723d30212e1c4c1ab74c","date":"2020-03-16T12:34:05.276Z","trophies":621},{"_id":"5e6f8de257b17c1c75664a2a","date":"2020-03-16T14:32:02.999Z","trophies":621},{"_id":"5e6f915a0e831e2912945188","date":"2020-03-16T14:46:50.433Z","trophies":621},{"_id":"5e6f91c9756e70295d61edb6","date":"2020-03-16T14:48:41.883Z","trophies":621},{"_id":"5e6f92dd566fb229dcb28b8a","date":"2020-03-16T14:53:17.599Z","trophies":621},{"_id":"5e6facf1ed158d107e9874c8","date":"2020-03-16T16:44:33.608Z","trophies":621},{"_id":"5e6fd9f5f130840cbc5109db","date":"2020-03-16T19:56:37.379Z","trophies":621},{"_id":"5e6fda00f130840cbc511276","date":"2020-03-16T19:56:48.787Z","trophies":621},{"_id":"5e70a5fd5b736311ac3492b1","date":"2020-03-17T10:27:09.090Z","trophies":621},{"_id":"5e70b9ea7474a21c42806e02","date":"2020-03-17T11:52:10.848Z","trophies":621},{"_id":"5e70be228bde5f1e0dd7dddc","date":"2020-03-17T12:10:10.874Z","trophies":621},{"_id":"5e70bf50817c301e9c9e91e1","date":"2020-03-17T12:15:12.698Z","trophies":621},{"_id":"5e71fab90a2fff0e82bb0cb7","date":"2020-03-18T10:40:57.981Z","trophies":621},{"_id":"5e722dc8a8fa0e199560936a","date":"2020-03-18T14:18:48.941Z","trophies":621},{"_id":"5e787d80b04cc713a9c1e75a","date":"2020-03-23T09:12:32.136Z","trophies":575},{"_id":"5e789f39eab0592060e21d98","date":"2020-03-23T11:36:25.194Z","trophies":575},{"_id":"5e789ff847f87720de47a735","date":"2020-03-23T11:39:36.473Z","trophies":575},{"_id":"5e78b0b3a4873e2751c5c0da","date":"2020-03-23T12:50:59.844Z","trophies":575},{"_id":"5e78b12aa4873e2751c5cb30","date":"2020-03-23T12:52:58.477Z","trophies":575},{"_id":"5e78b24d47d28127ff02ea1f","date":"2020-03-23T12:57:49.690Z","trophies":575},{"_id":"5e78b46b9df675288c76e2c5","date":"2020-03-23T13:06:51.758Z","trophies":575},{"_id":"5e78b608dbe81529665c0e6b","date":"2020-03-23T13:13:44.464Z","trophies":575},{"_id":"5e78b719d137662a0dc510ff","date":"2020-03-23T13:18:17.135Z","trophies":575},{"_id":"5e78b7a2ad06602a56d37078","date":"2020-03-23T13:20:34.520Z","trophies":575},{"_id":"5e78b7d9cde4a02a7ed4bd77","date":"2020-03-23T13:21:29.512Z","trophies":575},{"_id":"5e78ba7462cab22bb68bcc00","date":"2020-03-23T13:32:36.520Z","trophies":575},{"_id":"5e78d01033e36b1142bbdaba","date":"2020-03-23T15:04:48.053Z","trophies":575},{"_id":"5e78d93614d9b6150b1149f7","date":"2020-03-23T15:43:50.095Z","trophies":575},{"_id":"5e78dbb68170fd15faaa4391","date":"2020-03-23T15:54:30.750Z","trophies":575},{"_id":"5e78dbd98170fd15faaa4f6f","date":"2020-03-23T15:55:05.473Z","trophies":575},{"_id":"5e7b42fe7104e91d8931286d","date":"2020-03-25T11:39:42.188Z","trophies":575},{"_id":"5e7c7d1e4fcfb311190f6be5","date":"2020-03-26T09:59:58.302Z","trophies":575},{"_id":"5e7c7d214fcfb311190f7853","date":"2020-03-26T10:00:01.648Z","trophies":575},{"_id":"5e7c7fff247073121d6e5ee3","date":"2020-03-26T10:12:15.895Z","trophies":575},{"_id":"5e7c80a26a540a1257e59351","date":"2020-03-26T10:14:58.859Z","trophies":575},{"_id":"5e7c815dcde75912fe794fff","date":"2020-03-26T10:18:05.941Z","trophies":575},{"_id":"5e7c81cefbc5131333898de5","date":"2020-03-26T10:19:58.705Z","trophies":575},{"_id":"5e7c826f5520b013b8dde004","date":"2020-03-26T10:22:39.824Z","trophies":575},{"_id":"5e7c8295dd2c1d13f2e14df6","date":"2020-03-26T10:23:17.703Z","trophies":575},{"_id":"5e7c84e507f1e714ad7daa53","date":"2020-03-26T10:33:09.492Z","trophies":575},{"_id":"5e7c854ff193b215039e3901","date":"2020-03-26T10:34:55.703Z","trophies":575},{"_id":"5e7c8575a21702155156894f","date":"2020-03-26T10:35:33.753Z","trophies":575},{"_id":"5e7c8789d9717e15cfc24241","trophies":575,"date":"2020-03-26T10:44:25.036Z"}],"highestTrophies":705,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24b05","id":16000019,"name":"PENNY","power":6,"rank":23,"trophies":[{"_id":"5e5e340d63923610bec1b96b","date":"2020-03-03T10:40:13.110Z","trophies":569},{"_id":"5e5e351696cb3310ffefe5ca","date":"2020-03-03T10:44:38.834Z","trophies":569},{"_id":"5e5e359296cb3310ffefe85e","date":"2020-03-03T10:46:42.290Z","trophies":569},{"_id":"5e5e359396cb3310ffefeb15","date":"2020-03-03T10:46:43.271Z","trophies":569},{"_id":"5e5e362996cb3310ffefedef","date":"2020-03-03T10:49:13.305Z","trophies":569},{"_id":"5e5f6c33a1dd9e0c864f746c","date":"2020-03-04T08:52:03.593Z","trophies":569},{"_id":"5e60d598b254e5193e23ff5a","date":"2020-03-05T10:34:00.877Z","trophies":569},{"_id":"5e60d9331907390ccd08ec0f","date":"2020-03-05T10:49:23.104Z","trophies":569},{"_id":"5e60d93d1907390ccd08ef75","date":"2020-03-05T10:49:33.148Z","trophies":569},{"_id":"5e60d96c421a2b0d3f13b4cd","date":"2020-03-05T10:50:20.505Z","trophies":569},{"_id":"5e66026f0d2a560df328f2ba","date":"2020-03-09T08:46:39.901Z","trophies":525},{"_id":"5e663c899bda110d6b167053","date":"2020-03-09T12:54:33.653Z","trophies":525},{"_id":"5e66486f0e72e714b570bf6e","date":"2020-03-09T13:45:19.136Z","trophies":525},{"_id":"5e6648c99db2e11524463de4","date":"2020-03-09T13:46:49.828Z","trophies":525},{"_id":"5e6649760edc431571ddb3f4","date":"2020-03-09T13:49:42.111Z","trophies":525},{"_id":"5e6649d8448ee115be521907","date":"2020-03-09T13:51:20.985Z","trophies":525},{"_id":"5e665c0ef23112155b98dbc6","date":"2020-03-09T15:09:02.576Z","trophies":525},{"_id":"5e6751de68c45a0c96b97e9a","date":"2020-03-10T08:37:50.588Z","trophies":525},{"_id":"5e67af40ba96e9311ad8dfc0","date":"2020-03-10T15:16:16.564Z","trophies":525},{"_id":"5e68a85b3f87d80ed3c9f903","date":"2020-03-11T08:59:07.598Z","trophies":525},{"_id":"5e68a89afe9b142ed4d16867","date":"2020-03-11T09:00:10.714Z","trophies":525},{"_id":"5e68ef15bc8b9b14dfc4029c","date":"2020-03-11T14:00:53.606Z","trophies":525},{"_id":"5e68fe8e8f3ad6227084c7e6","date":"2020-03-11T15:06:54.937Z","trophies":525},{"_id":"5e68fecd8f3ad6227084cd2e","date":"2020-03-11T15:07:57.095Z","trophies":525},{"_id":"5e6905a848040627cc4bb91d","date":"2020-03-11T15:37:12.957Z","trophies":525},{"_id":"5e6905f61d2c5c2811112868","date":"2020-03-11T15:38:30.094Z","trophies":525},{"_id":"5e69061b6ce714283a834d4e","date":"2020-03-11T15:39:07.447Z","trophies":525},{"_id":"5e69066a2cf4f0289f50cfde","date":"2020-03-11T15:40:26.673Z","trophies":525},{"_id":"5e6a01b30c2a2b0e39b5acac","date":"2020-03-12T09:32:35.581Z","trophies":525},{"_id":"5e6a0462cc22d90fb718c48d","date":"2020-03-12T09:44:02.940Z","trophies":525},{"_id":"5e6a0d7c3c49db1694cd4327","date":"2020-03-12T10:22:52.266Z","trophies":525},{"_id":"5e6a0dbfcedd9616c1658943","date":"2020-03-12T10:23:59.239Z","trophies":525},{"_id":"5e6a0e92c08cae18e291562a","date":"2020-03-12T10:27:30.595Z","trophies":525},{"_id":"5e6a0ec3d7926b190ac1cb98","date":"2020-03-12T10:28:19.283Z","trophies":525},{"_id":"5e6a5d538a08ca41dd17fb65","date":"2020-03-12T16:03:31.066Z","trophies":525},{"_id":"5e6a5e33483304439e753e03","date":"2020-03-12T16:07:15.747Z","trophies":525},{"_id":"5e6f5e98c41393126e985f47","date":"2020-03-16T11:10:16.387Z","trophies":554},{"_id":"5e6f6efbd6c2921893cfbe1c","date":"2020-03-16T12:20:11.712Z","trophies":554},{"_id":"5e6f6fec7411191b02639cad","date":"2020-03-16T12:24:12.987Z","trophies":554},{"_id":"5e6f71c9ed1f6a1bfd40a309","date":"2020-03-16T12:32:09.580Z","trophies":554},{"_id":"5e6f7206add1a21c28252698","date":"2020-03-16T12:33:10.475Z","trophies":554},{"_id":"5e6f723d30212e1c4c1ab74d","date":"2020-03-16T12:34:05.277Z","trophies":554},{"_id":"5e6f8de257b17c1c75664a2b","date":"2020-03-16T14:32:02.999Z","trophies":554},{"_id":"5e6f915a0e831e2912945189","date":"2020-03-16T14:46:50.433Z","trophies":554},{"_id":"5e6f91c9756e70295d61edb7","date":"2020-03-16T14:48:41.883Z","trophies":554},{"_id":"5e6f92dd566fb229dcb28b8b","date":"2020-03-16T14:53:17.599Z","trophies":554},{"_id":"5e6facf1ed158d107e9874c9","date":"2020-03-16T16:44:33.608Z","trophies":554},{"_id":"5e6fd9f5f130840cbc5109dc","date":"2020-03-16T19:56:37.379Z","trophies":554},{"_id":"5e6fda00f130840cbc511277","date":"2020-03-16T19:56:48.787Z","trophies":554},{"_id":"5e70a5fd5b736311ac3492b2","date":"2020-03-17T10:27:09.091Z","trophies":554},{"_id":"5e70b9ea7474a21c42806e03","date":"2020-03-17T11:52:10.849Z","trophies":554},{"_id":"5e70be228bde5f1e0dd7dddd","date":"2020-03-17T12:10:10.874Z","trophies":554},{"_id":"5e70bf50817c301e9c9e91e2","date":"2020-03-17T12:15:12.698Z","trophies":554},{"_id":"5e71fab90a2fff0e82bb0cb8","date":"2020-03-18T10:40:57.981Z","trophies":554},{"_id":"5e722dc8a8fa0e199560936b","date":"2020-03-18T14:18:48.941Z","trophies":554},{"_id":"5e787d80b04cc713a9c1e75b","date":"2020-03-23T09:12:32.136Z","trophies":575},{"_id":"5e789f39eab0592060e21d99","date":"2020-03-23T11:36:25.194Z","trophies":575},{"_id":"5e789ff847f87720de47a736","date":"2020-03-23T11:39:36.474Z","trophies":575},{"_id":"5e78b0b3a4873e2751c5c0db","date":"2020-03-23T12:50:59.844Z","trophies":575},{"_id":"5e78b12aa4873e2751c5cb31","date":"2020-03-23T12:52:58.477Z","trophies":575},{"_id":"5e78b24d47d28127ff02ea20","date":"2020-03-23T12:57:49.690Z","trophies":575},{"_id":"5e78b46b9df675288c76e2c6","date":"2020-03-23T13:06:51.758Z","trophies":575},{"_id":"5e78b608dbe81529665c0e6c","date":"2020-03-23T13:13:44.464Z","trophies":575},{"_id":"5e78b719d137662a0dc51100","date":"2020-03-23T13:18:17.135Z","trophies":575},{"_id":"5e78b7a2ad06602a56d37079","date":"2020-03-23T13:20:34.520Z","trophies":575},{"_id":"5e78b7d9cde4a02a7ed4bd78","date":"2020-03-23T13:21:29.512Z","trophies":575},{"_id":"5e78ba7462cab22bb68bcc01","date":"2020-03-23T13:32:36.521Z","trophies":575},{"_id":"5e78d01033e36b1142bbdabb","date":"2020-03-23T15:04:48.053Z","trophies":570},{"_id":"5e78d93614d9b6150b1149f8","date":"2020-03-23T15:43:50.095Z","trophies":570},{"_id":"5e78dbb68170fd15faaa4392","date":"2020-03-23T15:54:30.750Z","trophies":570},{"_id":"5e78dbd98170fd15faaa4f70","date":"2020-03-23T15:55:05.473Z","trophies":570},{"_id":"5e7b42fe7104e91d8931286e","date":"2020-03-25T11:39:42.188Z","trophies":600},{"_id":"5e7c7d1e4fcfb311190f6be6","date":"2020-03-26T09:59:58.302Z","trophies":600},{"_id":"5e7c7d214fcfb311190f7854","date":"2020-03-26T10:00:01.648Z","trophies":600},{"_id":"5e7c7fff247073121d6e5ee4","date":"2020-03-26T10:12:15.895Z","trophies":600},{"_id":"5e7c80a26a540a1257e59352","date":"2020-03-26T10:14:58.859Z","trophies":600},{"_id":"5e7c815dcde75912fe795000","date":"2020-03-26T10:18:05.941Z","trophies":600},{"_id":"5e7c81cefbc5131333898de6","date":"2020-03-26T10:19:58.705Z","trophies":600},{"_id":"5e7c826f5520b013b8dde005","date":"2020-03-26T10:22:39.824Z","trophies":600},{"_id":"5e7c8295dd2c1d13f2e14df7","date":"2020-03-26T10:23:17.703Z","trophies":600},{"_id":"5e7c84e507f1e714ad7daa54","date":"2020-03-26T10:33:09.492Z","trophies":600},{"_id":"5e7c854ff193b215039e3902","date":"2020-03-26T10:34:55.703Z","trophies":600},{"_id":"5e7c8575a217021551568950","date":"2020-03-26T10:35:33.753Z","trophies":600},{"_id":"5e7c8789d9717e15cfc24242","trophies":600,"date":"2020-03-26T10:44:25.037Z"}],"highestTrophies":656,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24b5a","id":16000020,"name":"FRANK","power":5,"rank":21,"trophies":[{"_id":"5e5e340d63923610bec1b96d","date":"2020-03-03T10:40:13.110Z","trophies":554},{"_id":"5e5e351696cb3310ffefe5cb","date":"2020-03-03T10:44:38.835Z","trophies":554},{"_id":"5e5e359296cb3310ffefe85f","date":"2020-03-03T10:46:42.291Z","trophies":554},{"_id":"5e5e359396cb3310ffefeb16","date":"2020-03-03T10:46:43.272Z","trophies":554},{"_id":"5e5e362996cb3310ffefedf0","date":"2020-03-03T10:49:13.306Z","trophies":554},{"_id":"5e5f6c33a1dd9e0c864f746d","date":"2020-03-04T08:52:03.594Z","trophies":554},{"_id":"5e60d598b254e5193e23ff5b","date":"2020-03-05T10:34:00.878Z","trophies":554},{"_id":"5e60d9331907390ccd08ec10","date":"2020-03-05T10:49:23.104Z","trophies":554},{"_id":"5e60d93d1907390ccd08ef76","date":"2020-03-05T10:49:33.148Z","trophies":554},{"_id":"5e60d96c421a2b0d3f13b4ce","date":"2020-03-05T10:50:20.505Z","trophies":554},{"_id":"5e66026f0d2a560df328f2bb","date":"2020-03-09T08:46:39.901Z","trophies":525},{"_id":"5e663c899bda110d6b167054","date":"2020-03-09T12:54:33.653Z","trophies":525},{"_id":"5e66486f0e72e714b570bf6f","date":"2020-03-09T13:45:19.136Z","trophies":525},{"_id":"5e6648c99db2e11524463de5","date":"2020-03-09T13:46:49.828Z","trophies":525},{"_id":"5e6649760edc431571ddb3f5","date":"2020-03-09T13:49:42.111Z","trophies":525},{"_id":"5e6649d8448ee115be521908","date":"2020-03-09T13:51:20.986Z","trophies":525},{"_id":"5e665c0ef23112155b98dbc7","date":"2020-03-09T15:09:02.576Z","trophies":525},{"_id":"5e6751de68c45a0c96b97e9b","date":"2020-03-10T08:37:50.589Z","trophies":525},{"_id":"5e67af40ba96e9311ad8dfc1","date":"2020-03-10T15:16:16.564Z","trophies":525},{"_id":"5e68a85b3f87d80ed3c9f904","date":"2020-03-11T08:59:07.598Z","trophies":525},{"_id":"5e68a89afe9b142ed4d16868","date":"2020-03-11T09:00:10.714Z","trophies":525},{"_id":"5e68ef15bc8b9b14dfc4029d","date":"2020-03-11T14:00:53.607Z","trophies":525},{"_id":"5e68fe8e8f3ad6227084c7e7","date":"2020-03-11T15:06:54.937Z","trophies":525},{"_id":"5e68fecd8f3ad6227084cd2f","date":"2020-03-11T15:07:57.095Z","trophies":525},{"_id":"5e6905a848040627cc4bb91e","date":"2020-03-11T15:37:12.957Z","trophies":525},{"_id":"5e6905f61d2c5c2811112869","date":"2020-03-11T15:38:30.094Z","trophies":525},{"_id":"5e69061b6ce714283a834d4f","date":"2020-03-11T15:39:07.447Z","trophies":525},{"_id":"5e69066a2cf4f0289f50cfdf","date":"2020-03-11T15:40:26.673Z","trophies":525},{"_id":"5e6a01b30c2a2b0e39b5acad","date":"2020-03-12T09:32:35.582Z","trophies":525},{"_id":"5e6a0462cc22d90fb718c48e","date":"2020-03-12T09:44:02.941Z","trophies":525},{"_id":"5e6a0d7c3c49db1694cd4328","date":"2020-03-12T10:22:52.266Z","trophies":525},{"_id":"5e6a0dbfcedd9616c1658944","date":"2020-03-12T10:23:59.239Z","trophies":525},{"_id":"5e6a0e92c08cae18e291562b","date":"2020-03-12T10:27:30.595Z","trophies":525},{"_id":"5e6a0ec3d7926b190ac1cb99","date":"2020-03-12T10:28:19.283Z","trophies":525},{"_id":"5e6a5d538a08ca41dd17fb66","date":"2020-03-12T16:03:31.066Z","trophies":525},{"_id":"5e6a5e33483304439e753e04","date":"2020-03-12T16:07:15.747Z","trophies":525},{"_id":"5e6f5e98c41393126e985f48","date":"2020-03-16T11:10:16.387Z","trophies":551},{"_id":"5e6f6efbd6c2921893cfbe1d","date":"2020-03-16T12:20:11.712Z","trophies":551},{"_id":"5e6f6fec7411191b02639cae","date":"2020-03-16T12:24:12.987Z","trophies":551},{"_id":"5e6f71c9ed1f6a1bfd40a30a","date":"2020-03-16T12:32:09.580Z","trophies":551},{"_id":"5e6f7206add1a21c28252699","date":"2020-03-16T12:33:10.475Z","trophies":551},{"_id":"5e6f723d30212e1c4c1ab74e","date":"2020-03-16T12:34:05.277Z","trophies":551},{"_id":"5e6f8de257b17c1c75664a2c","date":"2020-03-16T14:32:02.999Z","trophies":551},{"_id":"5e6f915a0e831e291294518a","date":"2020-03-16T14:46:50.433Z","trophies":551},{"_id":"5e6f91c9756e70295d61edb8","date":"2020-03-16T14:48:41.883Z","trophies":551},{"_id":"5e6f92dd566fb229dcb28b8c","date":"2020-03-16T14:53:17.599Z","trophies":551},{"_id":"5e6facf1ed158d107e9874ca","date":"2020-03-16T16:44:33.608Z","trophies":551},{"_id":"5e6fd9f5f130840cbc5109dd","date":"2020-03-16T19:56:37.379Z","trophies":551},{"_id":"5e6fda00f130840cbc511278","date":"2020-03-16T19:56:48.787Z","trophies":551},{"_id":"5e70a5fd5b736311ac3492b3","date":"2020-03-17T10:27:09.091Z","trophies":551},{"_id":"5e70b9ea7474a21c42806e04","date":"2020-03-17T11:52:10.849Z","trophies":551},{"_id":"5e70be228bde5f1e0dd7ddde","date":"2020-03-17T12:10:10.874Z","trophies":551},{"_id":"5e70bf50817c301e9c9e91e3","date":"2020-03-17T12:15:12.698Z","trophies":551},{"_id":"5e71fab90a2fff0e82bb0cb9","date":"2020-03-18T10:40:57.982Z","trophies":551},{"_id":"5e722dc8a8fa0e199560936c","date":"2020-03-18T14:18:48.941Z","trophies":551},{"_id":"5e787d80b04cc713a9c1e75c","date":"2020-03-23T09:12:32.137Z","trophies":525},{"_id":"5e789f39eab0592060e21d9a","date":"2020-03-23T11:36:25.194Z","trophies":525},{"_id":"5e789ff847f87720de47a737","date":"2020-03-23T11:39:36.474Z","trophies":525},{"_id":"5e78b0b3a4873e2751c5c0dc","date":"2020-03-23T12:50:59.844Z","trophies":525},{"_id":"5e78b12aa4873e2751c5cb32","date":"2020-03-23T12:52:58.478Z","trophies":525},{"_id":"5e78b24d47d28127ff02ea21","date":"2020-03-23T12:57:49.690Z","trophies":525},{"_id":"5e78b46b9df675288c76e2c7","date":"2020-03-23T13:06:51.758Z","trophies":525},{"_id":"5e78b608dbe81529665c0e6d","date":"2020-03-23T13:13:44.465Z","trophies":525},{"_id":"5e78b719d137662a0dc51101","date":"2020-03-23T13:18:17.135Z","trophies":525},{"_id":"5e78b7a2ad06602a56d3707a","date":"2020-03-23T13:20:34.520Z","trophies":525},{"_id":"5e78b7d9cde4a02a7ed4bd79","date":"2020-03-23T13:21:29.512Z","trophies":525},{"_id":"5e78ba7462cab22bb68bcc02","date":"2020-03-23T13:32:36.521Z","trophies":525},{"_id":"5e78d01033e36b1142bbdabc","date":"2020-03-23T15:04:48.054Z","trophies":525},{"_id":"5e78d93614d9b6150b1149f9","date":"2020-03-23T15:43:50.095Z","trophies":525},{"_id":"5e78dbb68170fd15faaa4393","date":"2020-03-23T15:54:30.750Z","trophies":525},{"_id":"5e78dbd98170fd15faaa4f71","date":"2020-03-23T15:55:05.473Z","trophies":525},{"_id":"5e7b42fe7104e91d8931286f","date":"2020-03-25T11:39:42.188Z","trophies":527},{"_id":"5e7c7d1e4fcfb311190f6be7","date":"2020-03-26T09:59:58.302Z","trophies":515},{"_id":"5e7c7d214fcfb311190f7855","date":"2020-03-26T10:00:01.648Z","trophies":515},{"_id":"5e7c7fff247073121d6e5ee5","date":"2020-03-26T10:12:15.895Z","trophies":515},{"_id":"5e7c80a26a540a1257e59353","date":"2020-03-26T10:14:58.859Z","trophies":515},{"_id":"5e7c815dcde75912fe795001","date":"2020-03-26T10:18:05.941Z","trophies":515},{"_id":"5e7c81cefbc5131333898de7","date":"2020-03-26T10:19:58.705Z","trophies":515},{"_id":"5e7c826f5520b013b8dde006","date":"2020-03-26T10:22:39.824Z","trophies":515},{"_id":"5e7c8295dd2c1d13f2e14df8","date":"2020-03-26T10:23:17.703Z","trophies":515},{"_id":"5e7c84e507f1e714ad7daa55","date":"2020-03-26T10:33:09.492Z","trophies":515},{"_id":"5e7c854ff193b215039e3903","date":"2020-03-26T10:34:55.703Z","trophies":515},{"_id":"5e7c8575a217021551568951","date":"2020-03-26T10:35:33.753Z","trophies":515},{"_id":"5e7c8789d9717e15cfc24243","trophies":515,"date":"2020-03-26T10:44:25.037Z"}],"highestTrophies":559,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24baf","id":16000021,"name":"GENE","power":8,"rank":24,"trophies":[{"_id":"5e5e340d63923610bec1b96f","date":"2020-03-03T10:40:13.111Z","trophies":584},{"_id":"5e5e351696cb3310ffefe5cc","date":"2020-03-03T10:44:38.836Z","trophies":584},{"_id":"5e5e359296cb3310ffefe860","date":"2020-03-03T10:46:42.292Z","trophies":584},{"_id":"5e5e359396cb3310ffefeb17","date":"2020-03-03T10:46:43.273Z","trophies":584},{"_id":"5e5e362996cb3310ffefedf1","date":"2020-03-03T10:49:13.307Z","trophies":584},{"_id":"5e5f6c33a1dd9e0c864f746e","date":"2020-03-04T08:52:03.594Z","trophies":567},{"_id":"5e60d598b254e5193e23ff5c","date":"2020-03-05T10:34:00.878Z","trophies":553},{"_id":"5e60d9331907390ccd08ec11","date":"2020-03-05T10:49:23.104Z","trophies":553},{"_id":"5e60d93d1907390ccd08ef77","date":"2020-03-05T10:49:33.148Z","trophies":553},{"_id":"5e60d96c421a2b0d3f13b4cf","date":"2020-03-05T10:50:20.506Z","trophies":553},{"_id":"5e66026f0d2a560df328f2bc","date":"2020-03-09T08:46:39.902Z","trophies":575},{"_id":"5e663c899bda110d6b167055","date":"2020-03-09T12:54:33.653Z","trophies":575},{"_id":"5e66486f0e72e714b570bf70","date":"2020-03-09T13:45:19.136Z","trophies":575},{"_id":"5e6648c99db2e11524463de6","date":"2020-03-09T13:46:49.833Z","trophies":575},{"_id":"5e6649760edc431571ddb3f6","date":"2020-03-09T13:49:42.111Z","trophies":575},{"_id":"5e6649d8448ee115be521909","date":"2020-03-09T13:51:20.986Z","trophies":575},{"_id":"5e665c0ef23112155b98dbc8","date":"2020-03-09T15:09:02.577Z","trophies":575},{"_id":"5e6751de68c45a0c96b97e9c","date":"2020-03-10T08:37:50.589Z","trophies":570},{"_id":"5e67af40ba96e9311ad8dfc2","date":"2020-03-10T15:16:16.564Z","trophies":570},{"_id":"5e68a85b3f87d80ed3c9f905","date":"2020-03-11T08:59:07.599Z","trophies":570},{"_id":"5e68a89afe9b142ed4d16869","date":"2020-03-11T09:00:10.714Z","trophies":570},{"_id":"5e68ef15bc8b9b14dfc4029e","date":"2020-03-11T14:00:53.607Z","trophies":570},{"_id":"5e68fe8e8f3ad6227084c7e8","date":"2020-03-11T15:06:54.937Z","trophies":570},{"_id":"5e68fecd8f3ad6227084cd30","date":"2020-03-11T15:07:57.095Z","trophies":570},{"_id":"5e6905a848040627cc4bb91f","date":"2020-03-11T15:37:12.957Z","trophies":570},{"_id":"5e6905f61d2c5c281111286a","date":"2020-03-11T15:38:30.094Z","trophies":570},{"_id":"5e69061b6ce714283a834d50","date":"2020-03-11T15:39:07.447Z","trophies":570},{"_id":"5e69066a2cf4f0289f50cfe0","date":"2020-03-11T15:40:26.673Z","trophies":570},{"_id":"5e6a01b30c2a2b0e39b5acae","date":"2020-03-12T09:32:35.582Z","trophies":572},{"_id":"5e6a0462cc22d90fb718c48f","date":"2020-03-12T09:44:02.943Z","trophies":572},{"_id":"5e6a0d7c3c49db1694cd4329","date":"2020-03-12T10:22:52.266Z","trophies":572},{"_id":"5e6a0dbfcedd9616c1658945","date":"2020-03-12T10:23:59.239Z","trophies":572},{"_id":"5e6a0e92c08cae18e291562c","date":"2020-03-12T10:27:30.595Z","trophies":572},{"_id":"5e6a0ec3d7926b190ac1cb9a","date":"2020-03-12T10:28:19.283Z","trophies":572},{"_id":"5e6a5d538a08ca41dd17fb67","date":"2020-03-12T16:03:31.066Z","trophies":572},{"_id":"5e6a5e33483304439e753e05","date":"2020-03-12T16:07:15.748Z","trophies":572},{"_id":"5e6f5e98c41393126e985f49","date":"2020-03-16T11:10:16.387Z","trophies":606},{"_id":"5e6f6efbd6c2921893cfbe1e","date":"2020-03-16T12:20:11.712Z","trophies":606},{"_id":"5e6f6fec7411191b02639caf","date":"2020-03-16T12:24:12.988Z","trophies":606},{"_id":"5e6f71c9ed1f6a1bfd40a30b","date":"2020-03-16T12:32:09.580Z","trophies":606},{"_id":"5e6f7206add1a21c2825269a","date":"2020-03-16T12:33:10.475Z","trophies":606},{"_id":"5e6f723d30212e1c4c1ab74f","date":"2020-03-16T12:34:05.277Z","trophies":606},{"_id":"5e6f8de257b17c1c75664a2d","date":"2020-03-16T14:32:02.999Z","trophies":606},{"_id":"5e6f915a0e831e291294518b","date":"2020-03-16T14:46:50.434Z","trophies":606},{"_id":"5e6f91c9756e70295d61edb9","date":"2020-03-16T14:48:41.883Z","trophies":606},{"_id":"5e6f92dd566fb229dcb28b8d","date":"2020-03-16T14:53:17.599Z","trophies":606},{"_id":"5e6facf1ed158d107e9874cb","date":"2020-03-16T16:44:33.608Z","trophies":606},{"_id":"5e6fd9f5f130840cbc5109de","date":"2020-03-16T19:56:37.379Z","trophies":606},{"_id":"5e6fda00f130840cbc511279","date":"2020-03-16T19:56:48.787Z","trophies":606},{"_id":"5e70a5fd5b736311ac3492b4","date":"2020-03-17T10:27:09.091Z","trophies":655},{"_id":"5e70b9ea7474a21c42806e05","date":"2020-03-17T11:52:10.849Z","trophies":655},{"_id":"5e70be228bde5f1e0dd7dddf","date":"2020-03-17T12:10:10.874Z","trophies":655},{"_id":"5e70bf50817c301e9c9e91e4","date":"2020-03-17T12:15:12.698Z","trophies":655},{"_id":"5e71fab90a2fff0e82bb0cba","date":"2020-03-18T10:40:57.982Z","trophies":663},{"_id":"5e722dc8a8fa0e199560936d","date":"2020-03-18T14:18:48.941Z","trophies":663},{"_id":"5e787d80b04cc713a9c1e75d","date":"2020-03-23T09:12:32.137Z","trophies":625},{"_id":"5e789f39eab0592060e21d9b","date":"2020-03-23T11:36:25.195Z","trophies":625},{"_id":"5e789ff847f87720de47a738","date":"2020-03-23T11:39:36.474Z","trophies":625},{"_id":"5e78b0b3a4873e2751c5c0dd","date":"2020-03-23T12:50:59.844Z","trophies":625},{"_id":"5e78b12aa4873e2751c5cb33","date":"2020-03-23T12:52:58.478Z","trophies":625},{"_id":"5e78b24d47d28127ff02ea22","date":"2020-03-23T12:57:49.690Z","trophies":625},{"_id":"5e78b46b9df675288c76e2c8","date":"2020-03-23T13:06:51.758Z","trophies":625},{"_id":"5e78b608dbe81529665c0e6e","date":"2020-03-23T13:13:44.465Z","trophies":625},{"_id":"5e78b719d137662a0dc51102","date":"2020-03-23T13:18:17.136Z","trophies":625},{"_id":"5e78b7a2ad06602a56d3707b","date":"2020-03-23T13:20:34.521Z","trophies":625},{"_id":"5e78b7d9cde4a02a7ed4bd7a","date":"2020-03-23T13:21:29.512Z","trophies":625},{"_id":"5e78ba7462cab22bb68bcc03","date":"2020-03-23T13:32:36.521Z","trophies":625},{"_id":"5e78d01033e36b1142bbdabd","date":"2020-03-23T15:04:48.054Z","trophies":625},{"_id":"5e78d93614d9b6150b1149fa","date":"2020-03-23T15:43:50.095Z","trophies":625},{"_id":"5e78dbb68170fd15faaa4394","date":"2020-03-23T15:54:30.750Z","trophies":625},{"_id":"5e78dbd98170fd15faaa4f72","date":"2020-03-23T15:55:05.474Z","trophies":625},{"_id":"5e7b42fe7104e91d89312870","date":"2020-03-25T11:39:42.188Z","trophies":625},{"_id":"5e7c7d1e4fcfb311190f6be8","date":"2020-03-26T09:59:58.302Z","trophies":625},{"_id":"5e7c7d214fcfb311190f7856","date":"2020-03-26T10:00:01.648Z","trophies":625},{"_id":"5e7c7fff247073121d6e5ee6","date":"2020-03-26T10:12:15.895Z","trophies":625},{"_id":"5e7c80a26a540a1257e59354","date":"2020-03-26T10:14:58.860Z","trophies":625},{"_id":"5e7c815dcde75912fe795002","date":"2020-03-26T10:18:05.941Z","trophies":625},{"_id":"5e7c81cefbc5131333898de8","date":"2020-03-26T10:19:58.705Z","trophies":625},{"_id":"5e7c826f5520b013b8dde007","date":"2020-03-26T10:22:39.825Z","trophies":625},{"_id":"5e7c8295dd2c1d13f2e14df9","date":"2020-03-26T10:23:17.704Z","trophies":625},{"_id":"5e7c84e507f1e714ad7daa56","date":"2020-03-26T10:33:09.492Z","trophies":625},{"_id":"5e7c854ff193b215039e3904","date":"2020-03-26T10:34:55.703Z","trophies":625},{"_id":"5e7c8575a217021551568952","date":"2020-03-26T10:35:33.754Z","trophies":625},{"_id":"5e7c8789d9717e15cfc24244","trophies":625,"date":"2020-03-26T10:44:25.037Z"}],"highestTrophies":703,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24c04","id":16000022,"name":"TICK","power":8,"rank":24,"trophies":[{"_id":"5e5e340d63923610bec1b971","date":"2020-03-03T10:40:13.111Z","trophies":650},{"_id":"5e5e351696cb3310ffefe5cd","date":"2020-03-03T10:44:38.836Z","trophies":650},{"_id":"5e5e359296cb3310ffefe861","date":"2020-03-03T10:46:42.294Z","trophies":650},{"_id":"5e5e359396cb3310ffefeb18","date":"2020-03-03T10:46:43.274Z","trophies":650},{"_id":"5e5e362996cb3310ffefedf2","date":"2020-03-03T10:49:13.308Z","trophies":650},{"_id":"5e5f6c33a1dd9e0c864f746f","date":"2020-03-04T08:52:03.595Z","trophies":650},{"_id":"5e60d598b254e5193e23ff5d","date":"2020-03-05T10:34:00.878Z","trophies":650},{"_id":"5e60d9331907390ccd08ec12","date":"2020-03-05T10:49:23.105Z","trophies":650},{"_id":"5e60d93d1907390ccd08ef78","date":"2020-03-05T10:49:33.149Z","trophies":650},{"_id":"5e60d96c421a2b0d3f13b4d0","date":"2020-03-05T10:50:20.506Z","trophies":650},{"_id":"5e66026f0d2a560df328f2bd","date":"2020-03-09T08:46:39.902Z","trophies":625},{"_id":"5e663c899bda110d6b167056","date":"2020-03-09T12:54:33.653Z","trophies":625},{"_id":"5e66486f0e72e714b570bf71","date":"2020-03-09T13:45:19.136Z","trophies":625},{"_id":"5e6648c99db2e11524463de7","date":"2020-03-09T13:46:49.833Z","trophies":625},{"_id":"5e6649760edc431571ddb3f7","date":"2020-03-09T13:49:42.111Z","trophies":625},{"_id":"5e6649d8448ee115be52190a","date":"2020-03-09T13:51:20.986Z","trophies":625},{"_id":"5e665c0ef23112155b98dbc9","date":"2020-03-09T15:09:02.577Z","trophies":625},{"_id":"5e6751de68c45a0c96b97e9d","date":"2020-03-10T08:37:50.589Z","trophies":585},{"_id":"5e67af40ba96e9311ad8dfc3","date":"2020-03-10T15:16:16.564Z","trophies":585},{"_id":"5e68a85b3f87d80ed3c9f906","date":"2020-03-11T08:59:07.599Z","trophies":593},{"_id":"5e68a89afe9b142ed4d1686a","date":"2020-03-11T09:00:10.715Z","trophies":593},{"_id":"5e68ef15bc8b9b14dfc4029f","date":"2020-03-11T14:00:53.608Z","trophies":593},{"_id":"5e68fe8e8f3ad6227084c7e9","date":"2020-03-11T15:06:54.937Z","trophies":593},{"_id":"5e68fecd8f3ad6227084cd31","date":"2020-03-11T15:07:57.095Z","trophies":593},{"_id":"5e6905a848040627cc4bb920","date":"2020-03-11T15:37:12.957Z","trophies":593},{"_id":"5e6905f61d2c5c281111286b","date":"2020-03-11T15:38:30.095Z","trophies":593},{"_id":"5e69061b6ce714283a834d51","date":"2020-03-11T15:39:07.448Z","trophies":593},{"_id":"5e69066a2cf4f0289f50cfe1","date":"2020-03-11T15:40:26.673Z","trophies":593},{"_id":"5e6a01b30c2a2b0e39b5acaf","date":"2020-03-12T09:32:35.582Z","trophies":593},{"_id":"5e6a0462cc22d90fb718c490","date":"2020-03-12T09:44:02.944Z","trophies":593},{"_id":"5e6a0d7c3c49db1694cd432a","date":"2020-03-12T10:22:52.266Z","trophies":593},{"_id":"5e6a0dbfcedd9616c1658946","date":"2020-03-12T10:23:59.239Z","trophies":593},{"_id":"5e6a0e92c08cae18e291562d","date":"2020-03-12T10:27:30.595Z","trophies":593},{"_id":"5e6a0ec3d7926b190ac1cb9b","date":"2020-03-12T10:28:19.283Z","trophies":593},{"_id":"5e6a5d538a08ca41dd17fb68","date":"2020-03-12T16:03:31.067Z","trophies":593},{"_id":"5e6a5e33483304439e753e06","date":"2020-03-12T16:07:15.749Z","trophies":593},{"_id":"5e6f5e98c41393126e985f4a","date":"2020-03-16T11:10:16.387Z","trophies":656},{"_id":"5e6f6efbd6c2921893cfbe1f","date":"2020-03-16T12:20:11.712Z","trophies":656},{"_id":"5e6f6fec7411191b02639cb0","date":"2020-03-16T12:24:12.988Z","trophies":656},{"_id":"5e6f71c9ed1f6a1bfd40a30c","date":"2020-03-16T12:32:09.580Z","trophies":656},{"_id":"5e6f7206add1a21c2825269b","date":"2020-03-16T12:33:10.475Z","trophies":656},{"_id":"5e6f723d30212e1c4c1ab750","date":"2020-03-16T12:34:05.277Z","trophies":656},{"_id":"5e6f8de257b17c1c75664a2e","date":"2020-03-16T14:32:02.999Z","trophies":656},{"_id":"5e6f915a0e831e291294518c","date":"2020-03-16T14:46:50.434Z","trophies":656},{"_id":"5e6f91c9756e70295d61edba","date":"2020-03-16T14:48:41.884Z","trophies":656},{"_id":"5e6f92dd566fb229dcb28b8e","date":"2020-03-16T14:53:17.599Z","trophies":656},{"_id":"5e6facf1ed158d107e9874cc","date":"2020-03-16T16:44:33.609Z","trophies":656},{"_id":"5e6fd9f5f130840cbc5109df","date":"2020-03-16T19:56:37.379Z","trophies":656},{"_id":"5e6fda00f130840cbc51127a","date":"2020-03-16T19:56:48.788Z","trophies":656},{"_id":"5e70a5fd5b736311ac3492b5","date":"2020-03-17T10:27:09.091Z","trophies":656},{"_id":"5e70b9ea7474a21c42806e06","date":"2020-03-17T11:52:10.849Z","trophies":656},{"_id":"5e70be228bde5f1e0dd7dde0","date":"2020-03-17T12:10:10.874Z","trophies":656},{"_id":"5e70bf50817c301e9c9e91e5","date":"2020-03-17T12:15:12.698Z","trophies":656},{"_id":"5e71fab90a2fff0e82bb0cbb","date":"2020-03-18T10:40:57.982Z","trophies":700},{"_id":"5e722dc8a8fa0e199560936e","date":"2020-03-18T14:18:48.941Z","trophies":700},{"_id":"5e787d80b04cc713a9c1e75e","date":"2020-03-23T09:12:32.137Z","trophies":650},{"_id":"5e789f39eab0592060e21d9c","date":"2020-03-23T11:36:25.195Z","trophies":650},{"_id":"5e789ff847f87720de47a739","date":"2020-03-23T11:39:36.474Z","trophies":650},{"_id":"5e78b0b3a4873e2751c5c0de","date":"2020-03-23T12:50:59.845Z","trophies":650},{"_id":"5e78b12aa4873e2751c5cb34","date":"2020-03-23T12:52:58.478Z","trophies":650},{"_id":"5e78b24d47d28127ff02ea23","date":"2020-03-23T12:57:49.690Z","trophies":650},{"_id":"5e78b46b9df675288c76e2c9","date":"2020-03-23T13:06:51.758Z","trophies":650},{"_id":"5e78b608dbe81529665c0e6f","date":"2020-03-23T13:13:44.465Z","trophies":650},{"_id":"5e78b719d137662a0dc51103","date":"2020-03-23T13:18:17.136Z","trophies":650},{"_id":"5e78b7a2ad06602a56d3707c","date":"2020-03-23T13:20:34.521Z","trophies":650},{"_id":"5e78b7d9cde4a02a7ed4bd7b","date":"2020-03-23T13:21:29.513Z","trophies":650},{"_id":"5e78ba7462cab22bb68bcc04","date":"2020-03-23T13:32:36.522Z","trophies":650},{"_id":"5e78d01033e36b1142bbdabe","date":"2020-03-23T15:04:48.054Z","trophies":650},{"_id":"5e78d93614d9b6150b1149fb","date":"2020-03-23T15:43:50.095Z","trophies":650},{"_id":"5e78dbb68170fd15faaa4395","date":"2020-03-23T15:54:30.750Z","trophies":650},{"_id":"5e78dbd98170fd15faaa4f73","date":"2020-03-23T15:55:05.474Z","trophies":650},{"_id":"5e7b42fe7104e91d89312871","date":"2020-03-25T11:39:42.188Z","trophies":650},{"_id":"5e7c7d1e4fcfb311190f6be9","date":"2020-03-26T09:59:58.303Z","trophies":650},{"_id":"5e7c7d214fcfb311190f7857","date":"2020-03-26T10:00:01.648Z","trophies":650},{"_id":"5e7c7fff247073121d6e5ee7","date":"2020-03-26T10:12:15.895Z","trophies":650},{"_id":"5e7c80a26a540a1257e59355","date":"2020-03-26T10:14:58.860Z","trophies":650},{"_id":"5e7c815dcde75912fe795003","date":"2020-03-26T10:18:05.941Z","trophies":650},{"_id":"5e7c81cefbc5131333898de9","date":"2020-03-26T10:19:58.705Z","trophies":650},{"_id":"5e7c826f5520b013b8dde008","date":"2020-03-26T10:22:39.825Z","trophies":650},{"_id":"5e7c8295dd2c1d13f2e14dfa","date":"2020-03-26T10:23:17.704Z","trophies":650},{"_id":"5e7c84e507f1e714ad7daa57","date":"2020-03-26T10:33:09.493Z","trophies":650},{"_id":"5e7c854ff193b215039e3905","date":"2020-03-26T10:34:55.704Z","trophies":650},{"_id":"5e7c8575a217021551568953","date":"2020-03-26T10:35:33.754Z","trophies":650},{"_id":"5e7c8789d9717e15cfc24245","trophies":650,"date":"2020-03-26T10:44:25.037Z"}],"highestTrophies":734,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24c59","id":16000023,"name":"LEON","power":8,"rank":24,"trophies":[{"_id":"5e5e340d63923610bec1b973","date":"2020-03-03T10:40:13.111Z","trophies":615},{"_id":"5e5e351696cb3310ffefe5ce","date":"2020-03-03T10:44:38.837Z","trophies":615},{"_id":"5e5e359296cb3310ffefe862","date":"2020-03-03T10:46:42.295Z","trophies":615},{"_id":"5e5e359396cb3310ffefeb19","date":"2020-03-03T10:46:43.275Z","trophies":615},{"_id":"5e5e362996cb3310ffefedf3","date":"2020-03-03T10:49:13.309Z","trophies":615},{"_id":"5e5f6c33a1dd9e0c864f7470","date":"2020-03-04T08:52:03.595Z","trophies":602},{"_id":"5e60d598b254e5193e23ff5e","date":"2020-03-05T10:34:00.879Z","trophies":602},{"_id":"5e60d9331907390ccd08ec13","date":"2020-03-05T10:49:23.105Z","trophies":602},{"_id":"5e60d93d1907390ccd08ef79","date":"2020-03-05T10:49:33.149Z","trophies":602},{"_id":"5e60d96c421a2b0d3f13b4d1","date":"2020-03-05T10:50:20.506Z","trophies":602},{"_id":"5e66026f0d2a560df328f2be","date":"2020-03-09T08:46:39.903Z","trophies":650},{"_id":"5e663c899bda110d6b167057","date":"2020-03-09T12:54:33.653Z","trophies":650},{"_id":"5e66486f0e72e714b570bf72","date":"2020-03-09T13:45:19.137Z","trophies":650},{"_id":"5e6648c99db2e11524463de8","date":"2020-03-09T13:46:49.834Z","trophies":650},{"_id":"5e6649760edc431571ddb3f8","date":"2020-03-09T13:49:42.111Z","trophies":650},{"_id":"5e6649d8448ee115be52190b","date":"2020-03-09T13:51:20.986Z","trophies":650},{"_id":"5e665c0ef23112155b98dbca","date":"2020-03-09T15:09:02.577Z","trophies":650},{"_id":"5e6751de68c45a0c96b97e9e","date":"2020-03-10T08:37:50.589Z","trophies":650},{"_id":"5e67af40ba96e9311ad8dfc4","date":"2020-03-10T15:16:16.565Z","trophies":650},{"_id":"5e68a85b3f87d80ed3c9f907","date":"2020-03-11T08:59:07.599Z","trophies":650},{"_id":"5e68a89afe9b142ed4d1686b","date":"2020-03-11T09:00:10.715Z","trophies":650},{"_id":"5e68ef15bc8b9b14dfc402a0","date":"2020-03-11T14:00:53.608Z","trophies":650},{"_id":"5e68fe8e8f3ad6227084c7ea","date":"2020-03-11T15:06:54.938Z","trophies":650},{"_id":"5e68fecd8f3ad6227084cd32","date":"2020-03-11T15:07:57.095Z","trophies":650},{"_id":"5e6905a848040627cc4bb921","date":"2020-03-11T15:37:12.958Z","trophies":650},{"_id":"5e6905f61d2c5c281111286c","date":"2020-03-11T15:38:30.096Z","trophies":650},{"_id":"5e69061b6ce714283a834d52","date":"2020-03-11T15:39:07.448Z","trophies":650},{"_id":"5e69066a2cf4f0289f50cfe2","date":"2020-03-11T15:40:26.674Z","trophies":650},{"_id":"5e6a01b30c2a2b0e39b5acb0","date":"2020-03-12T09:32:35.582Z","trophies":650},{"_id":"5e6a0462cc22d90fb718c491","date":"2020-03-12T09:44:02.944Z","trophies":650},{"_id":"5e6a0d7c3c49db1694cd432b","date":"2020-03-12T10:22:52.267Z","trophies":650},{"_id":"5e6a0dbfcedd9616c1658947","date":"2020-03-12T10:23:59.239Z","trophies":650},{"_id":"5e6a0e92c08cae18e291562e","date":"2020-03-12T10:27:30.595Z","trophies":650},{"_id":"5e6a0ec3d7926b190ac1cb9c","date":"2020-03-12T10:28:19.284Z","trophies":650},{"_id":"5e6a5d538a08ca41dd17fb69","date":"2020-03-12T16:03:31.067Z","trophies":650},{"_id":"5e6a5e33483304439e753e07","date":"2020-03-12T16:07:15.750Z","trophies":650},{"_id":"5e6f5e98c41393126e985f4b","date":"2020-03-16T11:10:16.388Z","trophies":634},{"_id":"5e6f6efbd6c2921893cfbe20","date":"2020-03-16T12:20:11.713Z","trophies":634},{"_id":"5e6f6fec7411191b02639cb1","date":"2020-03-16T12:24:12.988Z","trophies":634},{"_id":"5e6f71c9ed1f6a1bfd40a30d","date":"2020-03-16T12:32:09.580Z","trophies":634},{"_id":"5e6f7206add1a21c2825269c","date":"2020-03-16T12:33:10.475Z","trophies":634},{"_id":"5e6f723d30212e1c4c1ab751","date":"2020-03-16T12:34:05.277Z","trophies":634},{"_id":"5e6f8de357b17c1c75664a2f","date":"2020-03-16T14:32:03.000Z","trophies":634},{"_id":"5e6f915a0e831e291294518d","date":"2020-03-16T14:46:50.435Z","trophies":634},{"_id":"5e6f91c9756e70295d61edbb","date":"2020-03-16T14:48:41.884Z","trophies":634},{"_id":"5e6f92dd566fb229dcb28b8f","date":"2020-03-16T14:53:17.599Z","trophies":634},{"_id":"5e6facf1ed158d107e9874cd","date":"2020-03-16T16:44:33.609Z","trophies":634},{"_id":"5e6fd9f5f130840cbc5109e0","date":"2020-03-16T19:56:37.379Z","trophies":634},{"_id":"5e6fda00f130840cbc51127b","date":"2020-03-16T19:56:48.788Z","trophies":634},{"_id":"5e70a5fd5b736311ac3492b6","date":"2020-03-17T10:27:09.091Z","trophies":634},{"_id":"5e70b9ea7474a21c42806e07","date":"2020-03-17T11:52:10.850Z","trophies":634},{"_id":"5e70be228bde5f1e0dd7dde1","date":"2020-03-17T12:10:10.875Z","trophies":634},{"_id":"5e70bf50817c301e9c9e91e6","date":"2020-03-17T12:15:12.698Z","trophies":634},{"_id":"5e71fab90a2fff0e82bb0cbc","date":"2020-03-18T10:40:57.982Z","trophies":634},{"_id":"5e722dc8a8fa0e199560936f","date":"2020-03-18T14:18:48.942Z","trophies":634},{"_id":"5e787d80b04cc713a9c1e75f","date":"2020-03-23T09:12:32.137Z","trophies":650},{"_id":"5e789f39eab0592060e21d9d","date":"2020-03-23T11:36:25.195Z","trophies":650},{"_id":"5e789ff847f87720de47a73a","date":"2020-03-23T11:39:36.474Z","trophies":650},{"_id":"5e78b0b3a4873e2751c5c0df","date":"2020-03-23T12:50:59.845Z","trophies":650},{"_id":"5e78b12aa4873e2751c5cb35","date":"2020-03-23T12:52:58.478Z","trophies":650},{"_id":"5e78b24d47d28127ff02ea24","date":"2020-03-23T12:57:49.690Z","trophies":650},{"_id":"5e78b46b9df675288c76e2ca","date":"2020-03-23T13:06:51.758Z","trophies":650},{"_id":"5e78b608dbe81529665c0e70","date":"2020-03-23T13:13:44.465Z","trophies":650},{"_id":"5e78b719d137662a0dc51104","date":"2020-03-23T13:18:17.136Z","trophies":650},{"_id":"5e78b7a2ad06602a56d3707d","date":"2020-03-23T13:20:34.522Z","trophies":650},{"_id":"5e78b7d9cde4a02a7ed4bd7c","date":"2020-03-23T13:21:29.513Z","trophies":650},{"_id":"5e78ba7462cab22bb68bcc05","date":"2020-03-23T13:32:36.523Z","trophies":650},{"_id":"5e78d01033e36b1142bbdabf","date":"2020-03-23T15:04:48.054Z","trophies":650},{"_id":"5e78d93614d9b6150b1149fc","date":"2020-03-23T15:43:50.095Z","trophies":650},{"_id":"5e78dbb68170fd15faaa4396","date":"2020-03-23T15:54:30.750Z","trophies":650},{"_id":"5e78dbd98170fd15faaa4f74","date":"2020-03-23T15:55:05.474Z","trophies":650},{"_id":"5e7b42fe7104e91d89312872","date":"2020-03-25T11:39:42.189Z","trophies":650},{"_id":"5e7c7d1e4fcfb311190f6bea","date":"2020-03-26T09:59:58.303Z","trophies":650},{"_id":"5e7c7d214fcfb311190f7858","date":"2020-03-26T10:00:01.648Z","trophies":650},{"_id":"5e7c7fff247073121d6e5ee8","date":"2020-03-26T10:12:15.896Z","trophies":650},{"_id":"5e7c80a26a540a1257e59356","date":"2020-03-26T10:14:58.860Z","trophies":650},{"_id":"5e7c815dcde75912fe795004","date":"2020-03-26T10:18:05.942Z","trophies":650},{"_id":"5e7c81cefbc5131333898dea","date":"2020-03-26T10:19:58.705Z","trophies":650},{"_id":"5e7c826f5520b013b8dde009","date":"2020-03-26T10:22:39.825Z","trophies":650},{"_id":"5e7c8295dd2c1d13f2e14dfb","date":"2020-03-26T10:23:17.704Z","trophies":650},{"_id":"5e7c84e507f1e714ad7daa58","date":"2020-03-26T10:33:09.493Z","trophies":650},{"_id":"5e7c854ff193b215039e3906","date":"2020-03-26T10:34:55.704Z","trophies":650},{"_id":"5e7c8575a217021551568954","date":"2020-03-26T10:35:33.754Z","trophies":650},{"_id":"5e7c8789d9717e15cfc24246","trophies":650,"date":"2020-03-26T10:44:25.037Z"}],"highestTrophies":713,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24cae","id":16000024,"name":"ROSA","power":10,"rank":25,"trophies":[{"_id":"5e5e340d63923610bec1b975","date":"2020-03-03T10:40:13.111Z","trophies":679},{"_id":"5e5e351696cb3310ffefe5cf","date":"2020-03-03T10:44:38.838Z","trophies":679},{"_id":"5e5e359296cb3310ffefe863","date":"2020-03-03T10:46:42.296Z","trophies":679},{"_id":"5e5e359396cb3310ffefeb1a","date":"2020-03-03T10:46:43.277Z","trophies":679},{"_id":"5e5e362996cb3310ffefedf4","date":"2020-03-03T10:49:13.309Z","trophies":679},{"_id":"5e5f6c33a1dd9e0c864f7471","date":"2020-03-04T08:52:03.595Z","trophies":679},{"_id":"5e60d598b254e5193e23ff5f","date":"2020-03-05T10:34:00.879Z","trophies":662},{"_id":"5e60d9331907390ccd08ec14","date":"2020-03-05T10:49:23.110Z","trophies":662},{"_id":"5e60d93d1907390ccd08ef7a","date":"2020-03-05T10:49:33.149Z","trophies":662},{"_id":"5e60d96c421a2b0d3f13b4d2","date":"2020-03-05T10:50:20.506Z","trophies":662},{"_id":"5e66026f0d2a560df328f2bf","date":"2020-03-09T08:46:39.904Z","trophies":650},{"_id":"5e663c899bda110d6b167058","date":"2020-03-09T12:54:33.653Z","trophies":650},{"_id":"5e66486f0e72e714b570bf73","date":"2020-03-09T13:45:19.137Z","trophies":650},{"_id":"5e6648c99db2e11524463de9","date":"2020-03-09T13:46:49.834Z","trophies":650},{"_id":"5e6649760edc431571ddb3f9","date":"2020-03-09T13:49:42.112Z","trophies":650},{"_id":"5e6649d8448ee115be52190c","date":"2020-03-09T13:51:20.987Z","trophies":650},{"_id":"5e665c0ef23112155b98dbcb","date":"2020-03-09T15:09:02.577Z","trophies":650},{"_id":"5e6751de68c45a0c96b97e9f","date":"2020-03-10T08:37:50.591Z","trophies":650},{"_id":"5e67af40ba96e9311ad8dfc5","date":"2020-03-10T15:16:16.565Z","trophies":650},{"_id":"5e68a85b3f87d80ed3c9f908","date":"2020-03-11T08:59:07.599Z","trophies":660},{"_id":"5e68a89afe9b142ed4d1686c","date":"2020-03-11T09:00:10.715Z","trophies":660},{"_id":"5e68ef15bc8b9b14dfc402a1","date":"2020-03-11T14:00:53.609Z","trophies":660},{"_id":"5e68fe8e8f3ad6227084c7eb","date":"2020-03-11T15:06:54.938Z","trophies":660},{"_id":"5e68fecd8f3ad6227084cd33","date":"2020-03-11T15:07:57.095Z","trophies":660},{"_id":"5e6905a848040627cc4bb922","date":"2020-03-11T15:37:12.958Z","trophies":660},{"_id":"5e6905f61d2c5c281111286d","date":"2020-03-11T15:38:30.096Z","trophies":660},{"_id":"5e69061b6ce714283a834d53","date":"2020-03-11T15:39:07.448Z","trophies":660},{"_id":"5e69066a2cf4f0289f50cfe3","date":"2020-03-11T15:40:26.674Z","trophies":660},{"_id":"5e6a01b30c2a2b0e39b5acb1","date":"2020-03-12T09:32:35.582Z","trophies":643},{"_id":"5e6a0462cc22d90fb718c492","date":"2020-03-12T09:44:02.944Z","trophies":643},{"_id":"5e6a0d7c3c49db1694cd432c","date":"2020-03-12T10:22:52.267Z","trophies":643},{"_id":"5e6a0dbfcedd9616c1658948","date":"2020-03-12T10:23:59.240Z","trophies":643},{"_id":"5e6a0e92c08cae18e291562f","date":"2020-03-12T10:27:30.596Z","trophies":643},{"_id":"5e6a0ec3d7926b190ac1cb9d","date":"2020-03-12T10:28:19.284Z","trophies":643},{"_id":"5e6a5d538a08ca41dd17fb6a","date":"2020-03-12T16:03:31.067Z","trophies":643},{"_id":"5e6a5e33483304439e753e08","date":"2020-03-12T16:07:15.751Z","trophies":643},{"_id":"5e6f5e98c41393126e985f4c","date":"2020-03-16T11:10:16.388Z","trophies":671},{"_id":"5e6f6efbd6c2921893cfbe21","date":"2020-03-16T12:20:11.713Z","trophies":671},{"_id":"5e6f6fec7411191b02639cb2","date":"2020-03-16T12:24:12.988Z","trophies":671},{"_id":"5e6f71c9ed1f6a1bfd40a30e","date":"2020-03-16T12:32:09.581Z","trophies":671},{"_id":"5e6f7206add1a21c2825269d","date":"2020-03-16T12:33:10.475Z","trophies":671},{"_id":"5e6f723d30212e1c4c1ab752","date":"2020-03-16T12:34:05.277Z","trophies":671},{"_id":"5e6f8de357b17c1c75664a30","date":"2020-03-16T14:32:03.000Z","trophies":671},{"_id":"5e6f915a0e831e291294518e","date":"2020-03-16T14:46:50.435Z","trophies":671},{"_id":"5e6f91c9756e70295d61edbc","date":"2020-03-16T14:48:41.884Z","trophies":671},{"_id":"5e6f92dd566fb229dcb28b90","date":"2020-03-16T14:53:17.599Z","trophies":671},{"_id":"5e6facf1ed158d107e9874ce","date":"2020-03-16T16:44:33.609Z","trophies":671},{"_id":"5e6fd9f5f130840cbc5109e1","date":"2020-03-16T19:56:37.380Z","trophies":671},{"_id":"5e6fda00f130840cbc51127c","date":"2020-03-16T19:56:48.788Z","trophies":671},{"_id":"5e70a5fd5b736311ac3492b7","date":"2020-03-17T10:27:09.091Z","trophies":671},{"_id":"5e70b9ea7474a21c42806e08","date":"2020-03-17T11:52:10.850Z","trophies":671},{"_id":"5e70be228bde5f1e0dd7dde2","date":"2020-03-17T12:10:10.875Z","trophies":671},{"_id":"5e70bf50817c301e9c9e91e7","date":"2020-03-17T12:15:12.699Z","trophies":671},{"_id":"5e71fab90a2fff0e82bb0cbd","date":"2020-03-18T10:40:57.982Z","trophies":671},{"_id":"5e722dc8a8fa0e1995609370","date":"2020-03-18T14:18:48.942Z","trophies":672},{"_id":"5e787d80b04cc713a9c1e760","date":"2020-03-23T09:12:32.137Z","trophies":708},{"_id":"5e789f39eab0592060e21d9e","date":"2020-03-23T11:36:25.195Z","trophies":708},{"_id":"5e789ff847f87720de47a73b","date":"2020-03-23T11:39:36.475Z","trophies":708},{"_id":"5e78b0b3a4873e2751c5c0e0","date":"2020-03-23T12:50:59.845Z","trophies":708},{"_id":"5e78b12aa4873e2751c5cb36","date":"2020-03-23T12:52:58.479Z","trophies":708},{"_id":"5e78b24d47d28127ff02ea25","date":"2020-03-23T12:57:49.690Z","trophies":708},{"_id":"5e78b46b9df675288c76e2cb","date":"2020-03-23T13:06:51.759Z","trophies":708},{"_id":"5e78b608dbe81529665c0e71","date":"2020-03-23T13:13:44.465Z","trophies":708},{"_id":"5e78b719d137662a0dc51105","date":"2020-03-23T13:18:17.136Z","trophies":708},{"_id":"5e78b7a2ad06602a56d3707e","date":"2020-03-23T13:20:34.523Z","trophies":708},{"_id":"5e78b7d9cde4a02a7ed4bd7d","date":"2020-03-23T13:21:29.513Z","trophies":708},{"_id":"5e78ba7462cab22bb68bcc06","date":"2020-03-23T13:32:36.523Z","trophies":708},{"_id":"5e78d01033e36b1142bbdac0","date":"2020-03-23T15:04:48.054Z","trophies":708},{"_id":"5e78d93614d9b6150b1149fd","date":"2020-03-23T15:43:50.096Z","trophies":708},{"_id":"5e78dbb68170fd15faaa4397","date":"2020-03-23T15:54:30.751Z","trophies":708},{"_id":"5e78dbd98170fd15faaa4f75","date":"2020-03-23T15:55:05.474Z","trophies":708},{"_id":"5e7b42fe7104e91d89312873","date":"2020-03-25T11:39:42.189Z","trophies":708},{"_id":"5e7c7d1e4fcfb311190f6beb","date":"2020-03-26T09:59:58.303Z","trophies":708},{"_id":"5e7c7d214fcfb311190f7859","date":"2020-03-26T10:00:01.648Z","trophies":708},{"_id":"5e7c7fff247073121d6e5ee9","date":"2020-03-26T10:12:15.896Z","trophies":708},{"_id":"5e7c80a26a540a1257e59357","date":"2020-03-26T10:14:58.861Z","trophies":708},{"_id":"5e7c815dcde75912fe795005","date":"2020-03-26T10:18:05.942Z","trophies":708},{"_id":"5e7c81cefbc5131333898deb","date":"2020-03-26T10:19:58.706Z","trophies":708},{"_id":"5e7c826f5520b013b8dde00a","date":"2020-03-26T10:22:39.825Z","trophies":708},{"_id":"5e7c8295dd2c1d13f2e14dfc","date":"2020-03-26T10:23:17.704Z","trophies":708},{"_id":"5e7c84e507f1e714ad7daa59","date":"2020-03-26T10:33:09.493Z","trophies":708},{"_id":"5e7c854ff193b215039e3907","date":"2020-03-26T10:34:55.704Z","trophies":708},{"_id":"5e7c8575a217021551568955","date":"2020-03-26T10:35:33.754Z","trophies":708},{"_id":"5e7c8789d9717e15cfc24247","trophies":708,"date":"2020-03-26T10:44:25.038Z"}],"highestTrophies":756,"starPowers":[{"_id":"5e7c8789d9717e15cfc24d03","id":23000147,"name":"Thorny Gloves"},{"_id":"5e7c8789d9717e15cfc24d04","id":23000124,"name":"Plant Life"}]},{"_id":"5e7c8789d9717e15cfc24d05","id":16000025,"name":"CARL","power":10,"rank":25,"trophies":[{"_id":"5e5e340d63923610bec1b979","date":"2020-03-03T10:40:13.112Z","trophies":702},{"_id":"5e5e351696cb3310ffefe5d0","date":"2020-03-03T10:44:38.839Z","trophies":702},{"_id":"5e5e359296cb3310ffefe864","date":"2020-03-03T10:46:42.296Z","trophies":702},{"_id":"5e5e359396cb3310ffefeb1b","date":"2020-03-03T10:46:43.278Z","trophies":702},{"_id":"5e5e362996cb3310ffefedf5","date":"2020-03-03T10:49:13.310Z","trophies":702},{"_id":"5e5f6c33a1dd9e0c864f7472","date":"2020-03-04T08:52:03.596Z","trophies":702},{"_id":"5e60d598b254e5193e23ff60","date":"2020-03-05T10:34:00.879Z","trophies":702},{"_id":"5e60d9331907390ccd08ec15","date":"2020-03-05T10:49:23.110Z","trophies":702},{"_id":"5e60d93d1907390ccd08ef7b","date":"2020-03-05T10:49:33.149Z","trophies":702},{"_id":"5e60d96c421a2b0d3f13b4d3","date":"2020-03-05T10:50:20.506Z","trophies":702},{"_id":"5e66026f0d2a560df328f2c0","date":"2020-03-09T08:46:39.904Z","trophies":650},{"_id":"5e663c899bda110d6b167059","date":"2020-03-09T12:54:33.653Z","trophies":650},{"_id":"5e66486f0e72e714b570bf74","date":"2020-03-09T13:45:19.137Z","trophies":650},{"_id":"5e6648c99db2e11524463dea","date":"2020-03-09T13:46:49.835Z","trophies":650},{"_id":"5e6649760edc431571ddb3fa","date":"2020-03-09T13:49:42.112Z","trophies":650},{"_id":"5e6649d8448ee115be52190d","date":"2020-03-09T13:51:20.987Z","trophies":650},{"_id":"5e665c0ef23112155b98dbcc","date":"2020-03-09T15:09:02.578Z","trophies":650},{"_id":"5e6751de68c45a0c96b97ea0","date":"2020-03-10T08:37:50.591Z","trophies":660},{"_id":"5e67af40ba96e9311ad8dfc6","date":"2020-03-10T15:16:16.565Z","trophies":660},{"_id":"5e68a85b3f87d80ed3c9f909","date":"2020-03-11T08:59:07.601Z","trophies":660},{"_id":"5e68a89afe9b142ed4d1686d","date":"2020-03-11T09:00:10.715Z","trophies":660},{"_id":"5e68ef15bc8b9b14dfc402a2","date":"2020-03-11T14:00:53.611Z","trophies":660},{"_id":"5e68fe8e8f3ad6227084c7ec","date":"2020-03-11T15:06:54.938Z","trophies":660},{"_id":"5e68fecd8f3ad6227084cd34","date":"2020-03-11T15:07:57.096Z","trophies":660},{"_id":"5e6905a848040627cc4bb923","date":"2020-03-11T15:37:12.958Z","trophies":660},{"_id":"5e6905f61d2c5c281111286e","date":"2020-03-11T15:38:30.097Z","trophies":660},{"_id":"5e69061b6ce714283a834d54","date":"2020-03-11T15:39:07.449Z","trophies":660},{"_id":"5e69066a2cf4f0289f50cfe4","date":"2020-03-11T15:40:26.674Z","trophies":660},{"_id":"5e6a01b30c2a2b0e39b5acb2","date":"2020-03-12T09:32:35.582Z","trophies":660},{"_id":"5e6a0462cc22d90fb718c493","date":"2020-03-12T09:44:02.944Z","trophies":660},{"_id":"5e6a0d7c3c49db1694cd432d","date":"2020-03-12T10:22:52.267Z","trophies":660},{"_id":"5e6a0dbfcedd9616c1658949","date":"2020-03-12T10:23:59.240Z","trophies":660},{"_id":"5e6a0e92c08cae18e2915630","date":"2020-03-12T10:27:30.596Z","trophies":660},{"_id":"5e6a0ec3d7926b190ac1cb9e","date":"2020-03-12T10:28:19.284Z","trophies":660},{"_id":"5e6a5d538a08ca41dd17fb6b","date":"2020-03-12T16:03:31.068Z","trophies":660},{"_id":"5e6a5e33483304439e753e09","date":"2020-03-12T16:07:15.752Z","trophies":660},{"_id":"5e6f5e98c41393126e985f4d","date":"2020-03-16T11:10:16.388Z","trophies":686},{"_id":"5e6f6efbd6c2921893cfbe22","date":"2020-03-16T12:20:11.714Z","trophies":686},{"_id":"5e6f6fec7411191b02639cb3","date":"2020-03-16T12:24:12.988Z","trophies":686},{"_id":"5e6f71c9ed1f6a1bfd40a30f","date":"2020-03-16T12:32:09.581Z","trophies":686},{"_id":"5e6f7206add1a21c2825269e","date":"2020-03-16T12:33:10.476Z","trophies":686},{"_id":"5e6f723d30212e1c4c1ab753","date":"2020-03-16T12:34:05.277Z","trophies":686},{"_id":"5e6f8de357b17c1c75664a31","date":"2020-03-16T14:32:03.000Z","trophies":686},{"_id":"5e6f915a0e831e291294518f","date":"2020-03-16T14:46:50.436Z","trophies":686},{"_id":"5e6f91c9756e70295d61edbd","date":"2020-03-16T14:48:41.884Z","trophies":686},{"_id":"5e6f92dd566fb229dcb28b91","date":"2020-03-16T14:53:17.600Z","trophies":686},{"_id":"5e6facf1ed158d107e9874cf","date":"2020-03-16T16:44:33.609Z","trophies":686},{"_id":"5e6fd9f5f130840cbc5109e2","date":"2020-03-16T19:56:37.380Z","trophies":686},{"_id":"5e6fda00f130840cbc51127d","date":"2020-03-16T19:56:48.788Z","trophies":686},{"_id":"5e70a5fd5b736311ac3492b8","date":"2020-03-17T10:27:09.091Z","trophies":707},{"_id":"5e70b9ea7474a21c42806e09","date":"2020-03-17T11:52:10.850Z","trophies":707},{"_id":"5e70be228bde5f1e0dd7dde3","date":"2020-03-17T12:10:10.875Z","trophies":707},{"_id":"5e70bf50817c301e9c9e91e8","date":"2020-03-17T12:15:12.699Z","trophies":707},{"_id":"5e71fab90a2fff0e82bb0cbe","date":"2020-03-18T10:40:57.982Z","trophies":707},{"_id":"5e722dc8a8fa0e1995609371","date":"2020-03-18T14:18:48.942Z","trophies":707},{"_id":"5e787d80b04cc713a9c1e761","date":"2020-03-23T09:12:32.137Z","trophies":700},{"_id":"5e789f39eab0592060e21d9f","date":"2020-03-23T11:36:25.196Z","trophies":700},{"_id":"5e789ff847f87720de47a73c","date":"2020-03-23T11:39:36.476Z","trophies":700},{"_id":"5e78b0b3a4873e2751c5c0e1","date":"2020-03-23T12:50:59.845Z","trophies":700},{"_id":"5e78b12aa4873e2751c5cb37","date":"2020-03-23T12:52:58.479Z","trophies":700},{"_id":"5e78b24d47d28127ff02ea26","date":"2020-03-23T12:57:49.691Z","trophies":700},{"_id":"5e78b46b9df675288c76e2cc","date":"2020-03-23T13:06:51.759Z","trophies":700},{"_id":"5e78b608dbe81529665c0e72","date":"2020-03-23T13:13:44.465Z","trophies":700},{"_id":"5e78b719d137662a0dc51106","date":"2020-03-23T13:18:17.137Z","trophies":700},{"_id":"5e78b7a2ad06602a56d3707f","date":"2020-03-23T13:20:34.523Z","trophies":700},{"_id":"5e78b7d9cde4a02a7ed4bd7e","date":"2020-03-23T13:21:29.513Z","trophies":700},{"_id":"5e78ba7462cab22bb68bcc07","date":"2020-03-23T13:32:36.523Z","trophies":700},{"_id":"5e78d01033e36b1142bbdac1","date":"2020-03-23T15:04:48.054Z","trophies":700},{"_id":"5e78d93614d9b6150b1149fe","date":"2020-03-23T15:43:50.096Z","trophies":700},{"_id":"5e78dbb68170fd15faaa4398","date":"2020-03-23T15:54:30.751Z","trophies":700},{"_id":"5e78dbd98170fd15faaa4f76","date":"2020-03-23T15:55:05.474Z","trophies":700},{"_id":"5e7b42fe7104e91d89312874","date":"2020-03-25T11:39:42.189Z","trophies":700},{"_id":"5e7c7d1e4fcfb311190f6bec","date":"2020-03-26T09:59:58.303Z","trophies":700},{"_id":"5e7c7d214fcfb311190f785a","date":"2020-03-26T10:00:01.648Z","trophies":700},{"_id":"5e7c7fff247073121d6e5eea","date":"2020-03-26T10:12:15.896Z","trophies":700},{"_id":"5e7c80a26a540a1257e59358","date":"2020-03-26T10:14:58.861Z","trophies":700},{"_id":"5e7c815dcde75912fe795006","date":"2020-03-26T10:18:05.942Z","trophies":700},{"_id":"5e7c81cefbc5131333898dec","date":"2020-03-26T10:19:58.706Z","trophies":700},{"_id":"5e7c826f5520b013b8dde00b","date":"2020-03-26T10:22:39.825Z","trophies":700},{"_id":"5e7c8295dd2c1d13f2e14dfd","date":"2020-03-26T10:23:17.704Z","trophies":700},{"_id":"5e7c84e507f1e714ad7daa5a","date":"2020-03-26T10:33:09.493Z","trophies":700},{"_id":"5e7c854ff193b215039e3908","date":"2020-03-26T10:34:55.704Z","trophies":700},{"_id":"5e7c8575a217021551568956","date":"2020-03-26T10:35:33.754Z","trophies":700},{"_id":"5e7c8789d9717e15cfc24248","trophies":700,"date":"2020-03-26T10:44:25.038Z"}],"highestTrophies":755,"starPowers":[{"_id":"5e7c8789d9717e15cfc24d5a","id":23000129,"name":"Power Throw"}]},{"_id":"5e7c8789d9717e15cfc24d5b","id":16000026,"name":"BIBI","power":6,"rank":22,"trophies":[{"_id":"5e5e340d63923610bec1b97c","date":"2020-03-03T10:40:13.112Z","trophies":575},{"_id":"5e5e351696cb3310ffefe5d1","date":"2020-03-03T10:44:38.840Z","trophies":575},{"_id":"5e5e359296cb3310ffefe865","date":"2020-03-03T10:46:42.297Z","trophies":575},{"_id":"5e5e359396cb3310ffefeb1c","date":"2020-03-03T10:46:43.278Z","trophies":575},{"_id":"5e5e362996cb3310ffefedf6","date":"2020-03-03T10:49:13.311Z","trophies":575},{"_id":"5e5f6c33a1dd9e0c864f7473","date":"2020-03-04T08:52:03.596Z","trophies":575},{"_id":"5e60d598b254e5193e23ff61","date":"2020-03-05T10:34:00.880Z","trophies":575},{"_id":"5e60d9331907390ccd08ec16","date":"2020-03-05T10:49:23.110Z","trophies":575},{"_id":"5e60d93d1907390ccd08ef7c","date":"2020-03-05T10:49:33.149Z","trophies":575},{"_id":"5e60d96c421a2b0d3f13b4d4","date":"2020-03-05T10:50:20.507Z","trophies":575},{"_id":"5e66026f0d2a560df328f2c1","date":"2020-03-09T08:46:39.904Z","trophies":575},{"_id":"5e663c899bda110d6b16705a","date":"2020-03-09T12:54:33.654Z","trophies":575},{"_id":"5e66486f0e72e714b570bf75","date":"2020-03-09T13:45:19.137Z","trophies":575},{"_id":"5e6648c99db2e11524463deb","date":"2020-03-09T13:46:49.835Z","trophies":575},{"_id":"5e6649760edc431571ddb3fb","date":"2020-03-09T13:49:42.112Z","trophies":575},{"_id":"5e6649d8448ee115be52190e","date":"2020-03-09T13:51:20.987Z","trophies":575},{"_id":"5e665c0ef23112155b98dbcd","date":"2020-03-09T15:09:02.578Z","trophies":575},{"_id":"5e6751de68c45a0c96b97ea1","date":"2020-03-10T08:37:50.591Z","trophies":575},{"_id":"5e67af40ba96e9311ad8dfc7","date":"2020-03-10T15:16:16.565Z","trophies":575},{"_id":"5e68a85b3f87d80ed3c9f90a","date":"2020-03-11T08:59:07.602Z","trophies":575},{"_id":"5e68a89afe9b142ed4d1686e","date":"2020-03-11T09:00:10.716Z","trophies":575},{"_id":"5e68ef15bc8b9b14dfc402a3","date":"2020-03-11T14:00:53.611Z","trophies":575},{"_id":"5e68fe8e8f3ad6227084c7ed","date":"2020-03-11T15:06:54.938Z","trophies":575},{"_id":"5e68fecd8f3ad6227084cd35","date":"2020-03-11T15:07:57.096Z","trophies":575},{"_id":"5e6905a848040627cc4bb924","date":"2020-03-11T15:37:12.958Z","trophies":575},{"_id":"5e6905f61d2c5c281111286f","date":"2020-03-11T15:38:30.098Z","trophies":575},{"_id":"5e69061b6ce714283a834d55","date":"2020-03-11T15:39:07.449Z","trophies":575},{"_id":"5e69066a2cf4f0289f50cfe5","date":"2020-03-11T15:40:26.674Z","trophies":575},{"_id":"5e6a01b30c2a2b0e39b5acb3","date":"2020-03-12T09:32:35.582Z","trophies":575},{"_id":"5e6a0462cc22d90fb718c494","date":"2020-03-12T09:44:02.944Z","trophies":575},{"_id":"5e6a0d7c3c49db1694cd432e","date":"2020-03-12T10:22:52.268Z","trophies":575},{"_id":"5e6a0dbfcedd9616c165894a","date":"2020-03-12T10:23:59.240Z","trophies":575},{"_id":"5e6a0e92c08cae18e2915631","date":"2020-03-12T10:27:30.596Z","trophies":575},{"_id":"5e6a0ec3d7926b190ac1cb9f","date":"2020-03-12T10:28:19.284Z","trophies":575},{"_id":"5e6a5d538a08ca41dd17fb6c","date":"2020-03-12T16:03:31.068Z","trophies":575},{"_id":"5e6a5e33483304439e753e0a","date":"2020-03-12T16:07:15.752Z","trophies":575},{"_id":"5e6f5e98c41393126e985f4e","date":"2020-03-16T11:10:16.388Z","trophies":575},{"_id":"5e6f6efbd6c2921893cfbe23","date":"2020-03-16T12:20:11.715Z","trophies":575},{"_id":"5e6f6fec7411191b02639cb4","date":"2020-03-16T12:24:12.989Z","trophies":575},{"_id":"5e6f71c9ed1f6a1bfd40a310","date":"2020-03-16T12:32:09.581Z","trophies":575},{"_id":"5e6f7206add1a21c2825269f","date":"2020-03-16T12:33:10.476Z","trophies":575},{"_id":"5e6f723d30212e1c4c1ab754","date":"2020-03-16T12:34:05.278Z","trophies":575},{"_id":"5e6f8de357b17c1c75664a32","date":"2020-03-16T14:32:03.000Z","trophies":575},{"_id":"5e6f915a0e831e2912945190","date":"2020-03-16T14:46:50.436Z","trophies":575},{"_id":"5e6f91c9756e70295d61edbe","date":"2020-03-16T14:48:41.884Z","trophies":575},{"_id":"5e6f92dd566fb229dcb28b92","date":"2020-03-16T14:53:17.600Z","trophies":575},{"_id":"5e6facf1ed158d107e9874d0","date":"2020-03-16T16:44:33.609Z","trophies":575},{"_id":"5e6fd9f5f130840cbc5109e3","date":"2020-03-16T19:56:37.380Z","trophies":575},{"_id":"5e6fda00f130840cbc51127e","date":"2020-03-16T19:56:48.788Z","trophies":575},{"_id":"5e70a5fd5b736311ac3492b9","date":"2020-03-17T10:27:09.091Z","trophies":575},{"_id":"5e70b9ea7474a21c42806e0a","date":"2020-03-17T11:52:10.851Z","trophies":575},{"_id":"5e70be228bde5f1e0dd7dde4","date":"2020-03-17T12:10:10.875Z","trophies":575},{"_id":"5e70bf50817c301e9c9e91e9","date":"2020-03-17T12:15:12.699Z","trophies":575},{"_id":"5e71fab90a2fff0e82bb0cbf","date":"2020-03-18T10:40:57.983Z","trophies":575},{"_id":"5e722dc8a8fa0e1995609372","date":"2020-03-18T14:18:48.942Z","trophies":575},{"_id":"5e787d80b04cc713a9c1e762","date":"2020-03-23T09:12:32.137Z","trophies":575},{"_id":"5e789f39eab0592060e21da0","date":"2020-03-23T11:36:25.196Z","trophies":575},{"_id":"5e789ff847f87720de47a73d","date":"2020-03-23T11:39:36.477Z","trophies":575},{"_id":"5e78b0b3a4873e2751c5c0e2","date":"2020-03-23T12:50:59.845Z","trophies":575},{"_id":"5e78b12aa4873e2751c5cb38","date":"2020-03-23T12:52:58.479Z","trophies":575},{"_id":"5e78b24d47d28127ff02ea27","date":"2020-03-23T12:57:49.691Z","trophies":575},{"_id":"5e78b46b9df675288c76e2cd","date":"2020-03-23T13:06:51.759Z","trophies":575},{"_id":"5e78b608dbe81529665c0e73","date":"2020-03-23T13:13:44.466Z","trophies":575},{"_id":"5e78b719d137662a0dc51107","date":"2020-03-23T13:18:17.137Z","trophies":575},{"_id":"5e78b7a2ad06602a56d37080","date":"2020-03-23T13:20:34.523Z","trophies":575},{"_id":"5e78b7d9cde4a02a7ed4bd7f","date":"2020-03-23T13:21:29.513Z","trophies":575},{"_id":"5e78ba7462cab22bb68bcc08","date":"2020-03-23T13:32:36.523Z","trophies":575},{"_id":"5e78d01033e36b1142bbdac2","date":"2020-03-23T15:04:48.055Z","trophies":575},{"_id":"5e78d93614d9b6150b1149ff","date":"2020-03-23T15:43:50.096Z","trophies":575},{"_id":"5e78dbb68170fd15faaa4399","date":"2020-03-23T15:54:30.751Z","trophies":575},{"_id":"5e78dbd98170fd15faaa4f77","date":"2020-03-23T15:55:05.475Z","trophies":575},{"_id":"5e7b42fe7104e91d89312875","date":"2020-03-25T11:39:42.189Z","trophies":575},{"_id":"5e7c7d1e4fcfb311190f6bed","date":"2020-03-26T09:59:58.303Z","trophies":575},{"_id":"5e7c7d214fcfb311190f785b","date":"2020-03-26T10:00:01.648Z","trophies":575},{"_id":"5e7c7fff247073121d6e5eeb","date":"2020-03-26T10:12:15.896Z","trophies":575},{"_id":"5e7c80a26a540a1257e59359","date":"2020-03-26T10:14:58.861Z","trophies":575},{"_id":"5e7c815dcde75912fe795007","date":"2020-03-26T10:18:05.942Z","trophies":575},{"_id":"5e7c81cefbc5131333898ded","date":"2020-03-26T10:19:58.706Z","trophies":575},{"_id":"5e7c826f5520b013b8dde00c","date":"2020-03-26T10:22:39.825Z","trophies":575},{"_id":"5e7c8295dd2c1d13f2e14dfe","date":"2020-03-26T10:23:17.704Z","trophies":575},{"_id":"5e7c84e507f1e714ad7daa5b","date":"2020-03-26T10:33:09.493Z","trophies":575},{"_id":"5e7c854ff193b215039e3909","date":"2020-03-26T10:34:55.704Z","trophies":575},{"_id":"5e7c8575a217021551568957","date":"2020-03-26T10:35:33.754Z","trophies":575},{"_id":"5e7c8789d9717e15cfc24249","trophies":575,"date":"2020-03-26T10:44:25.038Z"}],"highestTrophies":638,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24db0","id":16000027,"name":"8-BIT","power":8,"rank":24,"trophies":[{"_id":"5e5e340d63923610bec1b97e","date":"2020-03-03T10:40:13.113Z","trophies":570},{"_id":"5e5e351696cb3310ffefe5d2","date":"2020-03-03T10:44:38.842Z","trophies":570},{"_id":"5e5e359296cb3310ffefe866","date":"2020-03-03T10:46:42.299Z","trophies":570},{"_id":"5e5e359396cb3310ffefeb1d","date":"2020-03-03T10:46:43.279Z","trophies":570},{"_id":"5e5e362996cb3310ffefedf7","date":"2020-03-03T10:49:13.312Z","trophies":570},{"_id":"5e5f6c33a1dd9e0c864f7474","date":"2020-03-04T08:52:03.597Z","trophies":555},{"_id":"5e60d598b254e5193e23ff62","date":"2020-03-05T10:34:00.880Z","trophies":606},{"_id":"5e60d9331907390ccd08ec17","date":"2020-03-05T10:49:23.111Z","trophies":606},{"_id":"5e60d93d1907390ccd08ef7d","date":"2020-03-05T10:49:33.149Z","trophies":606},{"_id":"5e60d96c421a2b0d3f13b4d5","date":"2020-03-05T10:50:20.507Z","trophies":606},{"_id":"5e66026f0d2a560df328f2c2","date":"2020-03-09T08:46:39.904Z","trophies":575},{"_id":"5e663c899bda110d6b16705b","date":"2020-03-09T12:54:33.654Z","trophies":575},{"_id":"5e66486f0e72e714b570bf76","date":"2020-03-09T13:45:19.138Z","trophies":575},{"_id":"5e6648c99db2e11524463dec","date":"2020-03-09T13:46:49.836Z","trophies":575},{"_id":"5e6649760edc431571ddb3fc","date":"2020-03-09T13:49:42.113Z","trophies":575},{"_id":"5e6649d8448ee115be52190f","date":"2020-03-09T13:51:20.987Z","trophies":575},{"_id":"5e665c0ef23112155b98dbce","date":"2020-03-09T15:09:02.578Z","trophies":575},{"_id":"5e6751de68c45a0c96b97ea2","date":"2020-03-10T08:37:50.591Z","trophies":541},{"_id":"5e67af40ba96e9311ad8dfc8","date":"2020-03-10T15:16:16.565Z","trophies":541},{"_id":"5e68a85b3f87d80ed3c9f90b","date":"2020-03-11T08:59:07.602Z","trophies":531},{"_id":"5e68a89afe9b142ed4d1686f","date":"2020-03-11T09:00:10.716Z","trophies":531},{"_id":"5e68ef15bc8b9b14dfc402a4","date":"2020-03-11T14:00:53.611Z","trophies":531},{"_id":"5e68fe8e8f3ad6227084c7ee","date":"2020-03-11T15:06:54.938Z","trophies":531},{"_id":"5e68fecd8f3ad6227084cd36","date":"2020-03-11T15:07:57.096Z","trophies":531},{"_id":"5e6905a848040627cc4bb925","date":"2020-03-11T15:37:12.958Z","trophies":531},{"_id":"5e6905f61d2c5c2811112870","date":"2020-03-11T15:38:30.098Z","trophies":531},{"_id":"5e69061b6ce714283a834d56","date":"2020-03-11T15:39:07.449Z","trophies":531},{"_id":"5e69066a2cf4f0289f50cfe6","date":"2020-03-11T15:40:26.675Z","trophies":531},{"_id":"5e6a01b30c2a2b0e39b5acb4","date":"2020-03-12T09:32:35.583Z","trophies":565},{"_id":"5e6a0462cc22d90fb718c495","date":"2020-03-12T09:44:02.945Z","trophies":565},{"_id":"5e6a0d7c3c49db1694cd432f","date":"2020-03-12T10:22:52.269Z","trophies":565},{"_id":"5e6a0dbfcedd9616c165894b","date":"2020-03-12T10:23:59.240Z","trophies":565},{"_id":"5e6a0e92c08cae18e2915632","date":"2020-03-12T10:27:30.596Z","trophies":565},{"_id":"5e6a0ec3d7926b190ac1cba0","date":"2020-03-12T10:28:19.285Z","trophies":565},{"_id":"5e6a5d538a08ca41dd17fb6d","date":"2020-03-12T16:03:31.068Z","trophies":565},{"_id":"5e6a5e33483304439e753e0b","date":"2020-03-12T16:07:15.753Z","trophies":565},{"_id":"5e6f5e98c41393126e985f4f","date":"2020-03-16T11:10:16.388Z","trophies":601},{"_id":"5e6f6efbd6c2921893cfbe24","date":"2020-03-16T12:20:11.715Z","trophies":601},{"_id":"5e6f6fec7411191b02639cb5","date":"2020-03-16T12:24:12.989Z","trophies":601},{"_id":"5e6f71c9ed1f6a1bfd40a311","date":"2020-03-16T12:32:09.581Z","trophies":601},{"_id":"5e6f7206add1a21c282526a0","date":"2020-03-16T12:33:10.476Z","trophies":601},{"_id":"5e6f723d30212e1c4c1ab755","date":"2020-03-16T12:34:05.278Z","trophies":601},{"_id":"5e6f8de357b17c1c75664a33","date":"2020-03-16T14:32:03.001Z","trophies":601},{"_id":"5e6f915a0e831e2912945191","date":"2020-03-16T14:46:50.436Z","trophies":601},{"_id":"5e6f91c9756e70295d61edbf","date":"2020-03-16T14:48:41.884Z","trophies":601},{"_id":"5e6f92dd566fb229dcb28b93","date":"2020-03-16T14:53:17.600Z","trophies":601},{"_id":"5e6facf1ed158d107e9874d1","date":"2020-03-16T16:44:33.609Z","trophies":601},{"_id":"5e6fd9f5f130840cbc5109e4","date":"2020-03-16T19:56:37.380Z","trophies":601},{"_id":"5e6fda00f130840cbc51127f","date":"2020-03-16T19:56:48.788Z","trophies":601},{"_id":"5e70a5fd5b736311ac3492ba","date":"2020-03-17T10:27:09.092Z","trophies":601},{"_id":"5e70b9ea7474a21c42806e0b","date":"2020-03-17T11:52:10.852Z","trophies":601},{"_id":"5e70be228bde5f1e0dd7dde5","date":"2020-03-17T12:10:10.875Z","trophies":601},{"_id":"5e70bf50817c301e9c9e91ea","date":"2020-03-17T12:15:12.699Z","trophies":601},{"_id":"5e71fab90a2fff0e82bb0cc0","date":"2020-03-18T10:40:57.983Z","trophies":601},{"_id":"5e722dc8a8fa0e1995609373","date":"2020-03-18T14:18:48.942Z","trophies":601},{"_id":"5e787d80b04cc713a9c1e763","date":"2020-03-23T09:12:32.138Z","trophies":575},{"_id":"5e789f39eab0592060e21da1","date":"2020-03-23T11:36:25.196Z","trophies":575},{"_id":"5e789ff847f87720de47a73e","date":"2020-03-23T11:39:36.477Z","trophies":575},{"_id":"5e78b0b3a4873e2751c5c0e3","date":"2020-03-23T12:50:59.845Z","trophies":575},{"_id":"5e78b12aa4873e2751c5cb39","date":"2020-03-23T12:52:58.480Z","trophies":575},{"_id":"5e78b24d47d28127ff02ea28","date":"2020-03-23T12:57:49.691Z","trophies":575},{"_id":"5e78b46b9df675288c76e2ce","date":"2020-03-23T13:06:51.759Z","trophies":575},{"_id":"5e78b608dbe81529665c0e74","date":"2020-03-23T13:13:44.466Z","trophies":575},{"_id":"5e78b719d137662a0dc51108","date":"2020-03-23T13:18:17.137Z","trophies":575},{"_id":"5e78b7a2ad06602a56d37081","date":"2020-03-23T13:20:34.523Z","trophies":575},{"_id":"5e78b7d9cde4a02a7ed4bd80","date":"2020-03-23T13:21:29.513Z","trophies":575},{"_id":"5e78ba7462cab22bb68bcc09","date":"2020-03-23T13:32:36.523Z","trophies":575},{"_id":"5e78d01033e36b1142bbdac3","date":"2020-03-23T15:04:48.055Z","trophies":575},{"_id":"5e78d93614d9b6150b114a00","date":"2020-03-23T15:43:50.096Z","trophies":575},{"_id":"5e78dbb68170fd15faaa439a","date":"2020-03-23T15:54:30.751Z","trophies":575},{"_id":"5e78dbd98170fd15faaa4f78","date":"2020-03-23T15:55:05.475Z","trophies":575},{"_id":"5e7b42fe7104e91d89312876","date":"2020-03-25T11:39:42.189Z","trophies":575},{"_id":"5e7c7d1e4fcfb311190f6bee","date":"2020-03-26T09:59:58.303Z","trophies":602},{"_id":"5e7c7d214fcfb311190f785c","date":"2020-03-26T10:00:01.648Z","trophies":602},{"_id":"5e7c7fff247073121d6e5eec","date":"2020-03-26T10:12:15.896Z","trophies":602},{"_id":"5e7c80a26a540a1257e5935a","date":"2020-03-26T10:14:58.861Z","trophies":602},{"_id":"5e7c815dcde75912fe795008","date":"2020-03-26T10:18:05.942Z","trophies":602},{"_id":"5e7c81cefbc5131333898dee","date":"2020-03-26T10:19:58.706Z","trophies":602},{"_id":"5e7c826f5520b013b8dde00d","date":"2020-03-26T10:22:39.825Z","trophies":602},{"_id":"5e7c8295dd2c1d13f2e14dff","date":"2020-03-26T10:23:17.704Z","trophies":602},{"_id":"5e7c84e507f1e714ad7daa5c","date":"2020-03-26T10:33:09.493Z","trophies":602},{"_id":"5e7c854ff193b215039e390a","date":"2020-03-26T10:34:55.704Z","trophies":602},{"_id":"5e7c8575a217021551568958","date":"2020-03-26T10:35:33.754Z","trophies":602},{"_id":"5e7c8789d9717e15cfc2424a","trophies":602,"date":"2020-03-26T10:44:25.038Z"}],"highestTrophies":705,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24e05","id":16000029,"name":"BEA","power":6,"rank":22,"trophies":[{"_id":"5e5e340d63923610bec1b980","date":"2020-03-03T10:40:13.113Z","trophies":570},{"_id":"5e5e351696cb3310ffefe5d3","date":"2020-03-03T10:44:38.842Z","trophies":570},{"_id":"5e5e359296cb3310ffefe867","date":"2020-03-03T10:46:42.300Z","trophies":570},{"_id":"5e5e359396cb3310ffefeb1e","date":"2020-03-03T10:46:43.280Z","trophies":570},{"_id":"5e5e362996cb3310ffefedf8","date":"2020-03-03T10:49:13.313Z","trophies":570},{"_id":"5e5f6c33a1dd9e0c864f7475","date":"2020-03-04T08:52:03.597Z","trophies":570},{"_id":"5e60d598b254e5193e23ff63","date":"2020-03-05T10:34:00.882Z","trophies":573},{"_id":"5e60d9331907390ccd08ec18","date":"2020-03-05T10:49:23.111Z","trophies":573},{"_id":"5e60d93d1907390ccd08ef7e","date":"2020-03-05T10:49:33.150Z","trophies":573},{"_id":"5e60d96c421a2b0d3f13b4d6","date":"2020-03-05T10:50:20.507Z","trophies":573},{"_id":"5e66026f0d2a560df328f2c3","date":"2020-03-09T08:46:39.904Z","trophies":575},{"_id":"5e663c899bda110d6b16705c","date":"2020-03-09T12:54:33.654Z","trophies":575},{"_id":"5e66486f0e72e714b570bf77","date":"2020-03-09T13:45:19.138Z","trophies":575},{"_id":"5e6648c99db2e11524463ded","date":"2020-03-09T13:46:49.836Z","trophies":575},{"_id":"5e6649760edc431571ddb3fd","date":"2020-03-09T13:49:42.114Z","trophies":575},{"_id":"5e6649d8448ee115be521910","date":"2020-03-09T13:51:20.987Z","trophies":575},{"_id":"5e665c0ef23112155b98dbcf","date":"2020-03-09T15:09:02.579Z","trophies":575},{"_id":"5e6751de68c45a0c96b97ea3","date":"2020-03-10T08:37:50.592Z","trophies":575},{"_id":"5e67af40ba96e9311ad8dfc9","date":"2020-03-10T15:16:16.566Z","trophies":575},{"_id":"5e68a85b3f87d80ed3c9f90c","date":"2020-03-11T08:59:07.602Z","trophies":575},{"_id":"5e68a89afe9b142ed4d16870","date":"2020-03-11T09:00:10.716Z","trophies":575},{"_id":"5e68ef15bc8b9b14dfc402a5","date":"2020-03-11T14:00:53.612Z","trophies":575},{"_id":"5e68fe8e8f3ad6227084c7ef","date":"2020-03-11T15:06:54.939Z","trophies":575},{"_id":"5e68fecd8f3ad6227084cd37","date":"2020-03-11T15:07:57.098Z","trophies":575},{"_id":"5e6905a848040627cc4bb926","date":"2020-03-11T15:37:12.959Z","trophies":575},{"_id":"5e6905f61d2c5c2811112871","date":"2020-03-11T15:38:30.098Z","trophies":575},{"_id":"5e69061b6ce714283a834d57","date":"2020-03-11T15:39:07.449Z","trophies":575},{"_id":"5e69066a2cf4f0289f50cfe7","date":"2020-03-11T15:40:26.675Z","trophies":575},{"_id":"5e6a01b30c2a2b0e39b5acb5","date":"2020-03-12T09:32:35.583Z","trophies":575},{"_id":"5e6a0462cc22d90fb718c496","date":"2020-03-12T09:44:02.945Z","trophies":575},{"_id":"5e6a0d7c3c49db1694cd4330","date":"2020-03-12T10:22:52.270Z","trophies":575},{"_id":"5e6a0dbfcedd9616c165894c","date":"2020-03-12T10:23:59.240Z","trophies":575},{"_id":"5e6a0e92c08cae18e2915633","date":"2020-03-12T10:27:30.596Z","trophies":575},{"_id":"5e6a0ec3d7926b190ac1cba1","date":"2020-03-12T10:28:19.286Z","trophies":575},{"_id":"5e6a5d538a08ca41dd17fb6e","date":"2020-03-12T16:03:31.068Z","trophies":575},{"_id":"5e6a5e33483304439e753e0c","date":"2020-03-12T16:07:15.753Z","trophies":575},{"_id":"5e6f5e98c41393126e985f50","date":"2020-03-16T11:10:16.388Z","trophies":575},{"_id":"5e6f6efbd6c2921893cfbe25","date":"2020-03-16T12:20:11.715Z","trophies":575},{"_id":"5e6f6fec7411191b02639cb6","date":"2020-03-16T12:24:12.989Z","trophies":575},{"_id":"5e6f71c9ed1f6a1bfd40a312","date":"2020-03-16T12:32:09.581Z","trophies":575},{"_id":"5e6f7206add1a21c282526a1","date":"2020-03-16T12:33:10.476Z","trophies":575},{"_id":"5e6f723d30212e1c4c1ab756","date":"2020-03-16T12:34:05.278Z","trophies":575},{"_id":"5e6f8de357b17c1c75664a34","date":"2020-03-16T14:32:03.001Z","trophies":575},{"_id":"5e6f915a0e831e2912945192","date":"2020-03-16T14:46:50.436Z","trophies":575},{"_id":"5e6f91c9756e70295d61edc0","date":"2020-03-16T14:48:41.885Z","trophies":575},{"_id":"5e6f92dd566fb229dcb28b94","date":"2020-03-16T14:53:17.600Z","trophies":575},{"_id":"5e6facf1ed158d107e9874d2","date":"2020-03-16T16:44:33.609Z","trophies":575},{"_id":"5e6fd9f5f130840cbc5109e5","date":"2020-03-16T19:56:37.380Z","trophies":575},{"_id":"5e6fda00f130840cbc511280","date":"2020-03-16T19:56:48.788Z","trophies":575},{"_id":"5e70a5fd5b736311ac3492bb","date":"2020-03-17T10:27:09.092Z","trophies":602},{"_id":"5e70b9ea7474a21c42806e0c","date":"2020-03-17T11:52:10.852Z","trophies":602},{"_id":"5e70be228bde5f1e0dd7dde6","date":"2020-03-17T12:10:10.875Z","trophies":602},{"_id":"5e70bf50817c301e9c9e91eb","date":"2020-03-17T12:15:12.699Z","trophies":602},{"_id":"5e71fab90a2fff0e82bb0cc1","date":"2020-03-18T10:40:57.983Z","trophies":602},{"_id":"5e722dc8a8fa0e1995609374","date":"2020-03-18T14:18:48.942Z","trophies":602},{"_id":"5e787d80b04cc713a9c1e764","date":"2020-03-23T09:12:32.138Z","trophies":575},{"_id":"5e789f39eab0592060e21da2","date":"2020-03-23T11:36:25.196Z","trophies":575},{"_id":"5e789ff847f87720de47a73f","date":"2020-03-23T11:39:36.477Z","trophies":575},{"_id":"5e78b0b3a4873e2751c5c0e4","date":"2020-03-23T12:50:59.845Z","trophies":575},{"_id":"5e78b12aa4873e2751c5cb3a","date":"2020-03-23T12:52:58.481Z","trophies":575},{"_id":"5e78b24d47d28127ff02ea29","date":"2020-03-23T12:57:49.691Z","trophies":575},{"_id":"5e78b46b9df675288c76e2cf","date":"2020-03-23T13:06:51.759Z","trophies":575},{"_id":"5e78b608dbe81529665c0e75","date":"2020-03-23T13:13:44.466Z","trophies":575},{"_id":"5e78b719d137662a0dc51109","date":"2020-03-23T13:18:17.137Z","trophies":575},{"_id":"5e78b7a2ad06602a56d37082","date":"2020-03-23T13:20:34.523Z","trophies":575},{"_id":"5e78b7d9cde4a02a7ed4bd81","date":"2020-03-23T13:21:29.513Z","trophies":575},{"_id":"5e78ba7462cab22bb68bcc0a","date":"2020-03-23T13:32:36.523Z","trophies":575},{"_id":"5e78d01033e36b1142bbdac4","date":"2020-03-23T15:04:48.055Z","trophies":575},{"_id":"5e78d93614d9b6150b114a01","date":"2020-03-23T15:43:50.096Z","trophies":575},{"_id":"5e78dbb68170fd15faaa439b","date":"2020-03-23T15:54:30.751Z","trophies":575},{"_id":"5e78dbd98170fd15faaa4f79","date":"2020-03-23T15:55:05.475Z","trophies":575},{"_id":"5e7b42fe7104e91d89312877","date":"2020-03-25T11:39:42.190Z","trophies":575},{"_id":"5e7c7d1e4fcfb311190f6bef","date":"2020-03-26T09:59:58.303Z","trophies":575},{"_id":"5e7c7d214fcfb311190f785d","date":"2020-03-26T10:00:01.648Z","trophies":575},{"_id":"5e7c7fff247073121d6e5eed","date":"2020-03-26T10:12:15.896Z","trophies":575},{"_id":"5e7c80a26a540a1257e5935b","date":"2020-03-26T10:14:58.861Z","trophies":575},{"_id":"5e7c815dcde75912fe795009","date":"2020-03-26T10:18:05.942Z","trophies":575},{"_id":"5e7c81cefbc5131333898def","date":"2020-03-26T10:19:58.706Z","trophies":575},{"_id":"5e7c826f5520b013b8dde00e","date":"2020-03-26T10:22:39.826Z","trophies":575},{"_id":"5e7c8295dd2c1d13f2e14e00","date":"2020-03-26T10:23:17.705Z","trophies":575},{"_id":"5e7c84e507f1e714ad7daa5d","date":"2020-03-26T10:33:09.493Z","trophies":575},{"_id":"5e7c854ff193b215039e390b","date":"2020-03-26T10:34:55.704Z","trophies":575},{"_id":"5e7c8575a217021551568959","date":"2020-03-26T10:35:33.755Z","trophies":575},{"_id":"5e7c8789d9717e15cfc2424b","trophies":575,"date":"2020-03-26T10:44:25.039Z"}],"highestTrophies":608,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24e5a","id":16000030,"name":"EMZ","power":8,"rank":24,"trophies":[{"_id":"5e5e340d63923610bec1b982","date":"2020-03-03T10:40:13.113Z","trophies":650},{"_id":"5e5e351696cb3310ffefe5d4","date":"2020-03-03T10:44:38.844Z","trophies":650},{"_id":"5e5e359296cb3310ffefe868","date":"2020-03-03T10:46:42.300Z","trophies":650},{"_id":"5e5e359396cb3310ffefeb1f","date":"2020-03-03T10:46:43.281Z","trophies":650},{"_id":"5e5e362996cb3310ffefedf9","date":"2020-03-03T10:49:13.314Z","trophies":650},{"_id":"5e5f6c33a1dd9e0c864f7476","date":"2020-03-04T08:52:03.597Z","trophies":662},{"_id":"5e60d598b254e5193e23ff64","date":"2020-03-05T10:34:00.883Z","trophies":662},{"_id":"5e60d9331907390ccd08ec19","date":"2020-03-05T10:49:23.111Z","trophies":662},{"_id":"5e60d93d1907390ccd08ef7f","date":"2020-03-05T10:49:33.150Z","trophies":662},{"_id":"5e60d96c421a2b0d3f13b4d7","date":"2020-03-05T10:50:20.507Z","trophies":662},{"_id":"5e66026f0d2a560df328f2c4","date":"2020-03-09T08:46:39.904Z","trophies":625},{"_id":"5e663c899bda110d6b16705d","date":"2020-03-09T12:54:33.654Z","trophies":625},{"_id":"5e66486f0e72e714b570bf78","date":"2020-03-09T13:45:19.138Z","trophies":625},{"_id":"5e6648c99db2e11524463dee","date":"2020-03-09T13:46:49.836Z","trophies":625},{"_id":"5e6649760edc431571ddb3fe","date":"2020-03-09T13:49:42.115Z","trophies":625},{"_id":"5e6649d8448ee115be521911","date":"2020-03-09T13:51:20.988Z","trophies":625},{"_id":"5e665c0ef23112155b98dbd0","date":"2020-03-09T15:09:02.579Z","trophies":625},{"_id":"5e6751de68c45a0c96b97ea4","date":"2020-03-10T08:37:50.592Z","trophies":625},{"_id":"5e67af40ba96e9311ad8dfca","date":"2020-03-10T15:16:16.566Z","trophies":625},{"_id":"5e68a85b3f87d80ed3c9f90d","date":"2020-03-11T08:59:07.602Z","trophies":614},{"_id":"5e68a89afe9b142ed4d16871","date":"2020-03-11T09:00:10.716Z","trophies":614},{"_id":"5e68ef15bc8b9b14dfc402a6","date":"2020-03-11T14:00:53.612Z","trophies":614},{"_id":"5e68fe8e8f3ad6227084c7f0","date":"2020-03-11T15:06:54.939Z","trophies":614},{"_id":"5e68fecd8f3ad6227084cd38","date":"2020-03-11T15:07:57.098Z","trophies":614},{"_id":"5e6905a848040627cc4bb927","date":"2020-03-11T15:37:12.959Z","trophies":614},{"_id":"5e6905f61d2c5c2811112872","date":"2020-03-11T15:38:30.098Z","trophies":614},{"_id":"5e69061b6ce714283a834d58","date":"2020-03-11T15:39:07.450Z","trophies":614},{"_id":"5e69066a2cf4f0289f50cfe8","date":"2020-03-11T15:40:26.675Z","trophies":614},{"_id":"5e6a01b30c2a2b0e39b5acb6","date":"2020-03-12T09:32:35.583Z","trophies":614},{"_id":"5e6a0462cc22d90fb718c497","date":"2020-03-12T09:44:02.945Z","trophies":614},{"_id":"5e6a0d7c3c49db1694cd4331","date":"2020-03-12T10:22:52.270Z","trophies":614},{"_id":"5e6a0dbfcedd9616c165894d","date":"2020-03-12T10:23:59.241Z","trophies":614},{"_id":"5e6a0e92c08cae18e2915634","date":"2020-03-12T10:27:30.596Z","trophies":614},{"_id":"5e6a0ec3d7926b190ac1cba2","date":"2020-03-12T10:28:19.287Z","trophies":614},{"_id":"5e6a5d538a08ca41dd17fb6f","date":"2020-03-12T16:03:31.068Z","trophies":614},{"_id":"5e6a5e33483304439e753e0d","date":"2020-03-12T16:07:15.753Z","trophies":614},{"_id":"5e6f5e98c41393126e985f51","date":"2020-03-16T11:10:16.389Z","trophies":601},{"_id":"5e6f6efbd6c2921893cfbe26","date":"2020-03-16T12:20:11.716Z","trophies":601},{"_id":"5e6f6fec7411191b02639cb7","date":"2020-03-16T12:24:12.991Z","trophies":601},{"_id":"5e6f71c9ed1f6a1bfd40a313","date":"2020-03-16T12:32:09.581Z","trophies":601},{"_id":"5e6f7206add1a21c282526a2","date":"2020-03-16T12:33:10.476Z","trophies":601},{"_id":"5e6f723d30212e1c4c1ab757","date":"2020-03-16T12:34:05.278Z","trophies":601},{"_id":"5e6f8de357b17c1c75664a35","date":"2020-03-16T14:32:03.001Z","trophies":601},{"_id":"5e6f915a0e831e2912945193","date":"2020-03-16T14:46:50.437Z","trophies":601},{"_id":"5e6f91c9756e70295d61edc1","date":"2020-03-16T14:48:41.885Z","trophies":601},{"_id":"5e6f92dd566fb229dcb28b95","date":"2020-03-16T14:53:17.600Z","trophies":601},{"_id":"5e6facf1ed158d107e9874d3","date":"2020-03-16T16:44:33.610Z","trophies":601},{"_id":"5e6fd9f5f130840cbc5109e6","date":"2020-03-16T19:56:37.380Z","trophies":601},{"_id":"5e6fda00f130840cbc511281","date":"2020-03-16T19:56:48.788Z","trophies":601},{"_id":"5e70a5fd5b736311ac3492bc","date":"2020-03-17T10:27:09.092Z","trophies":601},{"_id":"5e70b9ea7474a21c42806e0d","date":"2020-03-17T11:52:10.852Z","trophies":601},{"_id":"5e70be228bde5f1e0dd7dde7","date":"2020-03-17T12:10:10.876Z","trophies":601},{"_id":"5e70bf50817c301e9c9e91ec","date":"2020-03-17T12:15:12.699Z","trophies":601},{"_id":"5e71fab90a2fff0e82bb0cc2","date":"2020-03-18T10:40:57.983Z","trophies":601},{"_id":"5e722dc8a8fa0e1995609375","date":"2020-03-18T14:18:48.943Z","trophies":601},{"_id":"5e787d80b04cc713a9c1e765","date":"2020-03-23T09:12:32.138Z","trophies":626},{"_id":"5e789f39eab0592060e21da3","date":"2020-03-23T11:36:25.196Z","trophies":626},{"_id":"5e789ff847f87720de47a740","date":"2020-03-23T11:39:36.477Z","trophies":626},{"_id":"5e78b0b3a4873e2751c5c0e5","date":"2020-03-23T12:50:59.846Z","trophies":626},{"_id":"5e78b12aa4873e2751c5cb3b","date":"2020-03-23T12:52:58.481Z","trophies":626},{"_id":"5e78b24d47d28127ff02ea2a","date":"2020-03-23T12:57:49.691Z","trophies":626},{"_id":"5e78b46b9df675288c76e2d0","date":"2020-03-23T13:06:51.759Z","trophies":626},{"_id":"5e78b608dbe81529665c0e76","date":"2020-03-23T13:13:44.466Z","trophies":626},{"_id":"5e78b719d137662a0dc5110a","date":"2020-03-23T13:18:17.137Z","trophies":626},{"_id":"5e78b7a2ad06602a56d37083","date":"2020-03-23T13:20:34.524Z","trophies":626},{"_id":"5e78b7d9cde4a02a7ed4bd82","date":"2020-03-23T13:21:29.514Z","trophies":626},{"_id":"5e78ba7462cab22bb68bcc0b","date":"2020-03-23T13:32:36.524Z","trophies":626},{"_id":"5e78d01033e36b1142bbdac5","date":"2020-03-23T15:04:48.055Z","trophies":626},{"_id":"5e78d93614d9b6150b114a02","date":"2020-03-23T15:43:50.096Z","trophies":626},{"_id":"5e78dbb68170fd15faaa439c","date":"2020-03-23T15:54:30.751Z","trophies":626},{"_id":"5e78dbd98170fd15faaa4f7a","date":"2020-03-23T15:55:05.476Z","trophies":626},{"_id":"5e7b42fe7104e91d89312878","date":"2020-03-25T11:39:42.190Z","trophies":633},{"_id":"5e7c7d1e4fcfb311190f6bf0","date":"2020-03-26T09:59:58.304Z","trophies":633},{"_id":"5e7c7d214fcfb311190f785e","date":"2020-03-26T10:00:01.648Z","trophies":633},{"_id":"5e7c7fff247073121d6e5eee","date":"2020-03-26T10:12:15.896Z","trophies":633},{"_id":"5e7c80a26a540a1257e5935c","date":"2020-03-26T10:14:58.861Z","trophies":633},{"_id":"5e7c815dcde75912fe79500a","date":"2020-03-26T10:18:05.942Z","trophies":633},{"_id":"5e7c81cefbc5131333898df0","date":"2020-03-26T10:19:58.706Z","trophies":633},{"_id":"5e7c826f5520b013b8dde00f","date":"2020-03-26T10:22:39.826Z","trophies":633},{"_id":"5e7c8295dd2c1d13f2e14e01","date":"2020-03-26T10:23:17.705Z","trophies":633},{"_id":"5e7c84e507f1e714ad7daa5e","date":"2020-03-26T10:33:09.494Z","trophies":633},{"_id":"5e7c854ff193b215039e390c","date":"2020-03-26T10:34:55.705Z","trophies":633},{"_id":"5e7c8575a21702155156895a","date":"2020-03-26T10:35:33.755Z","trophies":633},{"_id":"5e7c8789d9717e15cfc2424c","trophies":633,"date":"2020-03-26T10:44:25.039Z"}],"highestTrophies":704,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24eaf","id":16000032,"name":"MAX","power":6,"rank":23,"trophies":[{"_id":"5e5e340d63923610bec1b984","date":"2020-03-03T10:40:13.114Z","trophies":563},{"_id":"5e5e351696cb3310ffefe5d5","date":"2020-03-03T10:44:38.845Z","trophies":563},{"_id":"5e5e359296cb3310ffefe869","date":"2020-03-03T10:46:42.301Z","trophies":563},{"_id":"5e5e359396cb3310ffefeb20","date":"2020-03-03T10:46:43.288Z","trophies":563},{"_id":"5e5e362996cb3310ffefedfa","date":"2020-03-03T10:49:13.315Z","trophies":563},{"_id":"5e5f6c33a1dd9e0c864f7477","date":"2020-03-04T08:52:03.598Z","trophies":563},{"_id":"5e60d598b254e5193e23ff65","date":"2020-03-05T10:34:00.885Z","trophies":563},{"_id":"5e60d9331907390ccd08ec1a","date":"2020-03-05T10:49:23.111Z","trophies":563},{"_id":"5e60d93d1907390ccd08ef80","date":"2020-03-05T10:49:33.150Z","trophies":563},{"_id":"5e60d96c421a2b0d3f13b4d8","date":"2020-03-05T10:50:20.507Z","trophies":563},{"_id":"5e66026f0d2a560df328f2c5","date":"2020-03-09T08:46:39.905Z","trophies":625},{"_id":"5e663c899bda110d6b16705e","date":"2020-03-09T12:54:33.654Z","trophies":625},{"_id":"5e66486f0e72e714b570bf79","date":"2020-03-09T13:45:19.138Z","trophies":625},{"_id":"5e6648c99db2e11524463def","date":"2020-03-09T13:46:49.840Z","trophies":625},{"_id":"5e6649760edc431571ddb3ff","date":"2020-03-09T13:49:42.115Z","trophies":625},{"_id":"5e6649d8448ee115be521912","date":"2020-03-09T13:51:20.988Z","trophies":625},{"_id":"5e665c0ef23112155b98dbd1","date":"2020-03-09T15:09:02.579Z","trophies":625},{"_id":"5e6751de68c45a0c96b97ea5","date":"2020-03-10T08:37:50.592Z","trophies":625},{"_id":"5e67af40ba96e9311ad8dfcb","date":"2020-03-10T15:16:16.566Z","trophies":625},{"_id":"5e68a85b3f87d80ed3c9f90e","date":"2020-03-11T08:59:07.602Z","trophies":632},{"_id":"5e68a89afe9b142ed4d16872","date":"2020-03-11T09:00:10.716Z","trophies":632},{"_id":"5e68ef15bc8b9b14dfc402a7","date":"2020-03-11T14:00:53.613Z","trophies":632},{"_id":"5e68fe8e8f3ad6227084c7f1","date":"2020-03-11T15:06:54.939Z","trophies":632},{"_id":"5e68fecd8f3ad6227084cd39","date":"2020-03-11T15:07:57.099Z","trophies":632},{"_id":"5e6905a848040627cc4bb928","date":"2020-03-11T15:37:12.960Z","trophies":632},{"_id":"5e6905f61d2c5c2811112873","date":"2020-03-11T15:38:30.099Z","trophies":632},{"_id":"5e69061b6ce714283a834d59","date":"2020-03-11T15:39:07.451Z","trophies":632},{"_id":"5e69066a2cf4f0289f50cfe9","date":"2020-03-11T15:40:26.675Z","trophies":632},{"_id":"5e6a01b30c2a2b0e39b5acb7","date":"2020-03-12T09:32:35.583Z","trophies":632},{"_id":"5e6a0462cc22d90fb718c498","date":"2020-03-12T09:44:02.945Z","trophies":632},{"_id":"5e6a0d7c3c49db1694cd4332","date":"2020-03-12T10:22:52.271Z","trophies":632},{"_id":"5e6a0dbfcedd9616c165894e","date":"2020-03-12T10:23:59.241Z","trophies":632},{"_id":"5e6a0e92c08cae18e2915635","date":"2020-03-12T10:27:30.597Z","trophies":632},{"_id":"5e6a0ec3d7926b190ac1cba3","date":"2020-03-12T10:28:19.288Z","trophies":632},{"_id":"5e6a5d538a08ca41dd17fb70","date":"2020-03-12T16:03:31.069Z","trophies":632},{"_id":"5e6a5e33483304439e753e0e","date":"2020-03-12T16:07:15.753Z","trophies":632},{"_id":"5e6f5e98c41393126e985f52","date":"2020-03-16T11:10:16.389Z","trophies":632},{"_id":"5e6f6efbd6c2921893cfbe27","date":"2020-03-16T12:20:11.716Z","trophies":632},{"_id":"5e6f6fec7411191b02639cb8","date":"2020-03-16T12:24:12.992Z","trophies":632},{"_id":"5e6f71c9ed1f6a1bfd40a314","date":"2020-03-16T12:32:09.582Z","trophies":632},{"_id":"5e6f7206add1a21c282526a3","date":"2020-03-16T12:33:10.476Z","trophies":632},{"_id":"5e6f723d30212e1c4c1ab758","date":"2020-03-16T12:34:05.278Z","trophies":632},{"_id":"5e6f8de357b17c1c75664a36","date":"2020-03-16T14:32:03.001Z","trophies":632},{"_id":"5e6f915a0e831e2912945194","date":"2020-03-16T14:46:50.437Z","trophies":632},{"_id":"5e6f91c9756e70295d61edc2","date":"2020-03-16T14:48:41.885Z","trophies":632},{"_id":"5e6f92dd566fb229dcb28b96","date":"2020-03-16T14:53:17.600Z","trophies":632},{"_id":"5e6facf1ed158d107e9874d4","date":"2020-03-16T16:44:33.610Z","trophies":632},{"_id":"5e6fd9f5f130840cbc5109e7","date":"2020-03-16T19:56:37.380Z","trophies":632},{"_id":"5e6fda00f130840cbc511282","date":"2020-03-16T19:56:48.788Z","trophies":632},{"_id":"5e70a5fd5b736311ac3492bd","date":"2020-03-17T10:27:09.092Z","trophies":632},{"_id":"5e70b9ea7474a21c42806e0e","date":"2020-03-17T11:52:10.852Z","trophies":632},{"_id":"5e70be228bde5f1e0dd7dde8","date":"2020-03-17T12:10:10.876Z","trophies":632},{"_id":"5e70bf50817c301e9c9e91ed","date":"2020-03-17T12:15:12.700Z","trophies":632},{"_id":"5e71fab90a2fff0e82bb0cc3","date":"2020-03-18T10:40:57.983Z","trophies":632},{"_id":"5e722dc8a8fa0e1995609376","date":"2020-03-18T14:18:48.943Z","trophies":632},{"_id":"5e787d80b04cc713a9c1e766","date":"2020-03-23T09:12:32.138Z","trophies":575},{"_id":"5e789f39eab0592060e21da4","date":"2020-03-23T11:36:25.196Z","trophies":575},{"_id":"5e789ff847f87720de47a741","date":"2020-03-23T11:39:36.478Z","trophies":575},{"_id":"5e78b0b3a4873e2751c5c0e6","date":"2020-03-23T12:50:59.846Z","trophies":575},{"_id":"5e78b12aa4873e2751c5cb3c","date":"2020-03-23T12:52:58.481Z","trophies":575},{"_id":"5e78b24d47d28127ff02ea2b","date":"2020-03-23T12:57:49.691Z","trophies":575},{"_id":"5e78b46b9df675288c76e2d1","date":"2020-03-23T13:06:51.759Z","trophies":575},{"_id":"5e78b608dbe81529665c0e77","date":"2020-03-23T13:13:44.466Z","trophies":575},{"_id":"5e78b719d137662a0dc5110b","date":"2020-03-23T13:18:17.137Z","trophies":575},{"_id":"5e78b7a2ad06602a56d37084","date":"2020-03-23T13:20:34.524Z","trophies":575},{"_id":"5e78b7d9cde4a02a7ed4bd83","date":"2020-03-23T13:21:29.514Z","trophies":575},{"_id":"5e78ba7462cab22bb68bcc0c","date":"2020-03-23T13:32:36.524Z","trophies":575},{"_id":"5e78d01033e36b1142bbdac6","date":"2020-03-23T15:04:48.056Z","trophies":575},{"_id":"5e78d93614d9b6150b114a03","date":"2020-03-23T15:43:50.096Z","trophies":575},{"_id":"5e78dbb68170fd15faaa439d","date":"2020-03-23T15:54:30.751Z","trophies":575},{"_id":"5e78dbd98170fd15faaa4f7b","date":"2020-03-23T15:55:05.476Z","trophies":575},{"_id":"5e7b42fe7104e91d89312879","date":"2020-03-25T11:39:42.190Z","trophies":575},{"_id":"5e7c7d1e4fcfb311190f6bf1","date":"2020-03-26T09:59:58.304Z","trophies":602},{"_id":"5e7c7d214fcfb311190f785f","date":"2020-03-26T10:00:01.649Z","trophies":602},{"_id":"5e7c7fff247073121d6e5eef","date":"2020-03-26T10:12:15.896Z","trophies":602},{"_id":"5e7c80a26a540a1257e5935d","date":"2020-03-26T10:14:58.861Z","trophies":602},{"_id":"5e7c815dcde75912fe79500b","date":"2020-03-26T10:18:05.942Z","trophies":602},{"_id":"5e7c81cefbc5131333898df1","date":"2020-03-26T10:19:58.706Z","trophies":602},{"_id":"5e7c826f5520b013b8dde010","date":"2020-03-26T10:22:39.826Z","trophies":602},{"_id":"5e7c8295dd2c1d13f2e14e02","date":"2020-03-26T10:23:17.705Z","trophies":602},{"_id":"5e7c84e507f1e714ad7daa5f","date":"2020-03-26T10:33:09.494Z","trophies":602},{"_id":"5e7c854ff193b215039e390d","date":"2020-03-26T10:34:55.705Z","trophies":602},{"_id":"5e7c8575a21702155156895b","date":"2020-03-26T10:35:33.755Z","trophies":602},{"_id":"5e7c8789d9717e15cfc2424d","trophies":602,"date":"2020-03-26T10:44:25.039Z"}],"highestTrophies":650,"starPowers":[]},{"_id":"5e7c8789d9717e15cfc24f04","id":16000034,"name":"JACKY","power":3,"rank":7,"trophies":[{"_id":"5e787d80b04cc713a9c1f049","date":"2020-03-23T09:12:32.462Z","trophies":93},{"_id":"5e789f39eab0592060e21da5","date":"2020-03-23T11:36:25.196Z","trophies":93},{"_id":"5e789ff847f87720de47a742","date":"2020-03-23T11:39:36.478Z","trophies":93},{"_id":"5e78b0b3a4873e2751c5c0e7","date":"2020-03-23T12:50:59.846Z","trophies":93},{"_id":"5e78b12aa4873e2751c5cb3d","date":"2020-03-23T12:52:58.481Z","trophies":93},{"_id":"5e78b24d47d28127ff02ea2c","date":"2020-03-23T12:57:49.691Z","trophies":93},{"_id":"5e78b46b9df675288c76e2d2","date":"2020-03-23T13:06:51.760Z","trophies":93},{"_id":"5e78b608dbe81529665c0e78","date":"2020-03-23T13:13:44.466Z","trophies":93},{"_id":"5e78b719d137662a0dc5110c","date":"2020-03-23T13:18:17.137Z","trophies":93},{"_id":"5e78b7a2ad06602a56d37085","date":"2020-03-23T13:20:34.524Z","trophies":93},{"_id":"5e78b7d9cde4a02a7ed4bd84","date":"2020-03-23T13:21:29.514Z","trophies":93},{"_id":"5e78ba7462cab22bb68bcc0d","date":"2020-03-23T13:32:36.524Z","trophies":93},{"_id":"5e78d01033e36b1142bbdac7","date":"2020-03-23T15:04:48.056Z","trophies":93},{"_id":"5e78d93614d9b6150b114a04","date":"2020-03-23T15:43:50.097Z","trophies":93},{"_id":"5e78dbb68170fd15faaa439e","date":"2020-03-23T15:54:30.752Z","trophies":93},{"_id":"5e78dbd98170fd15faaa4f7c","date":"2020-03-23T15:55:05.476Z","trophies":93},{"_id":"5e7b42fe7104e91d8931287a","date":"2020-03-25T11:39:42.190Z","trophies":93},{"_id":"5e7c7d1e4fcfb311190f6bf2","date":"2020-03-26T09:59:58.304Z","trophies":93},{"_id":"5e7c7d214fcfb311190f7860","date":"2020-03-26T10:00:01.649Z","trophies":93},{"_id":"5e7c7fff247073121d6e5ef0","date":"2020-03-26T10:12:15.897Z","trophies":93},{"_id":"5e7c80a26a540a1257e5935e","date":"2020-03-26T10:14:58.861Z","trophies":93},{"_id":"5e7c815dcde75912fe79500c","date":"2020-03-26T10:18:05.943Z","trophies":93},{"_id":"5e7c81cefbc5131333898df2","date":"2020-03-26T10:19:58.707Z","trophies":93},{"_id":"5e7c826f5520b013b8dde011","date":"2020-03-26T10:22:39.826Z","trophies":93},{"_id":"5e7c8295dd2c1d13f2e14e03","date":"2020-03-26T10:23:17.705Z","trophies":93},{"_id":"5e7c84e507f1e714ad7daa60","date":"2020-03-26T10:33:09.494Z","trophies":93},{"_id":"5e7c854ff193b215039e390e","date":"2020-03-26T10:34:55.705Z","trophies":93},{"_id":"5e7c8575a21702155156895c","date":"2020-03-26T10:35:33.755Z","trophies":93},{"_id":"5e7c8789d9717e15cfc2424e","trophies":93,"date":"2020-03-26T10:44:25.039Z"}],"highestTrophies":93,"starPowers":[]}],"__v":0}

let battlelogExample = [
        {
          "battleTime": "20200326T081121.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 2,
            "trophyChange": 7,
            "teams": [
              [
                {
                  "tag": "#2P02RJPL2",
                  "name": "tete",
                  "brawler": {
                    "id": 16000002,
                    "name": "BULL",
                    "power": 7,
                    "trophies": 539
                  }
                },
                {
                  "tag": "#2J9PYYLPR",
                  "name": "Baldino",
                  "brawler": {
                    "id": 16000027,
                    "name": "8-BIT",
                    "power": 9,
                    "trophies": 537
                  }
                }
              ],
              [
                {
                  "tag": "#PYLG08ULV",
                  "name": "А4",
                  "brawler": {
                    "id": 16000008,
                    "name": "NITA",
                    "power": 7,
                    "trophies": 510
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000013,
                    "name": "POCO",
                    "power": 6,
                    "trophies": 543
                  }
                }
              ],
              [
                {
                  "tag": "#2J9YQPGG2",
                  "name": "FcBerkay11x",
                  "brawler": {
                    "id": 16000029,
                    "name": "BEA",
                    "power": 4,
                    "trophies": 543
                  }
                },
                {
                  "tag": "#98UUQUPQ8",
                  "name": "TARA",
                  "brawler": {
                    "id": 16000021,
                    "name": "GENE",
                    "power": 5,
                    "trophies": 533
                  }
                }
              ],
              [
                {
                  "tag": "#99UUL2CGU",
                  "name": "Brawler",
                  "brawler": {
                    "id": 16000026,
                    "name": "BIBI",
                    "power": 8,
                    "trophies": 532
                  }
                },
                {
                  "tag": "#2VRJJULUY",
                  "name": "EMİN PRO GG",
                  "brawler": {
                    "id": 16000034,
                    "name": "JACKY",
                    "power": 1,
                    "trophies": 56
                  }
                }
              ],
              [
                {
                  "tag": "#2YCY2P2UG",
                  "name": "Külie",
                  "brawler": {
                    "id": 16000008,
                    "name": "NITA",
                    "power": 10,
                    "trophies": 541
                  }
                },
                {
                  "tag": "#G88LLPQ",
                  "name": "Oskareqq",
                  "brawler": {
                    "id": 16000019,
                    "name": "PENNY",
                    "power": 7,
                    "trophies": 530
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200326T081014.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 4,
            "trophyChange": -5,
            "teams": [
              [
                {
                  "tag": "#8RU9JLQC8",
                  "name": "cziczi Kozak",
                  "brawler": {
                    "id": 16000006,
                    "name": "BARLEY",
                    "power": 10,
                    "trophies": 522
                  }
                },
                {
                  "tag": "#9PYV9GGLY",
                  "name": "Kiewicz",
                  "brawler": {
                    "id": 16000034,
                    "name": "JACKY",
                    "power": 1,
                    "trophies": 369
                  }
                }
              ],
              [
                {
                  "tag": "#9P8YUVQUV",
                  "name": "♦Karma♦",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 6,
                    "trophies": 549
                  }
                },
                {
                  "tag": "#8QUQYLGU8",
                  "name": "Ali1940",
                  "brawler": {
                    "id": 16000014,
                    "name": "BO",
                    "power": 5,
                    "trophies": 549
                  }
                }
              ],
              [
                {
                  "tag": "#C9RGCVRG",
                  "name": "samuseba05",
                  "brawler": {
                    "id": 16000023,
                    "name": "LEON",
                    "power": 10,
                    "trophies": 550
                  }
                },
                {
                  "tag": "#8CJVQG990",
                  "name": "[NPK]PAVEL2",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 5,
                    "trophies": 548
                  }
                }
              ],
              [
                {
                  "tag": "#UY99JCLQ",
                  "name": "ĐŘäķÓň",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 6,
                    "trophies": 548
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000013,
                    "name": "POCO",
                    "power": 6,
                    "trophies": 548
                  }
                }
              ],
              [
                {
                  "tag": "#P2J29VC98",
                  "name": "#Max",
                  "brawler": {
                    "id": 16000027,
                    "name": "8-BIT",
                    "power": 7,
                    "trophies": 529
                  }
                },
                {
                  "tag": "#8P9CP0GPR",
                  "name": "Audi_Audi",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 6,
                    "trophies": 550
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200326T080751.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 3,
            "teams": [
              [
                {
                  "tag": "#9V9YPRGRC",
                  "name": "Manyak Mustafa",
                  "brawler": {
                    "id": 16000017,
                    "name": "TARA",
                    "power": 6,
                    "trophies": 515
                  }
                },
                {
                  "tag": "#8RG2CCQUJ",
                  "name": "YBJ",
                  "brawler": {
                    "id": 16000025,
                    "name": "CARL",
                    "power": 7,
                    "trophies": 473
                  }
                }
              ],
              [
                {
                  "tag": "#2UV8L8JJY",
                  "name": "[TBC]Арлан",
                  "brawler": {
                    "id": 16000002,
                    "name": "BULL",
                    "power": 7,
                    "trophies": 530
                  }
                },
                {
                  "tag": "#2GQ20QJVG",
                  "name": "Sʜᴜʏᴀ Nᴀʜᴀʀᴀ",
                  "brawler": {
                    "id": 16000008,
                    "name": "NITA",
                    "power": 7,
                    "trophies": 363
                  }
                }
              ],
              [
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000013,
                    "name": "POCO",
                    "power": 6,
                    "trophies": 548
                  }
                },
                {
                  "tag": "#2PJ89CJ0P",
                  "name": "{~Qian~}",
                  "brawler": {
                    "id": 16000028,
                    "name": "SANDY",
                    "power": 4,
                    "trophies": 550
                  }
                }
              ],
              [
                {
                  "tag": "#99QCPLYVG",
                  "name": "LEON",
                  "brawler": {
                    "id": 16000009,
                    "name": "DYNAMIKE",
                    "power": 7,
                    "trophies": 549
                  }
                },
                {
                  "tag": "#CP0YGGL8",
                  "name": "SN|MerCuSe~",
                  "brawler": {
                    "id": 16000029,
                    "name": "BEA",
                    "power": 6,
                    "trophies": 565
                  }
                }
              ],
              [
                {
                  "tag": "#88RVCQVVQ",
                  "name": "gamezone077",
                  "brawler": {
                    "id": 16000014,
                    "name": "BO",
                    "power": 7,
                    "trophies": 510
                  }
                },
                {
                  "tag": "#8VQCQ0GJY",
                  "name": "#szarjáték.hu",
                  "brawler": {
                    "id": 16000028,
                    "name": "SANDY",
                    "power": 6,
                    "trophies": 494
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200326T080511.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 2,
            "trophyChange": 7,
            "teams": [
              [
                {
                  "tag": "#9PUQ2UU0",
                  "name": "ArtZii",
                  "brawler": {
                    "id": 16000016,
                    "name": "PAM",
                    "power": 6,
                    "trophies": 505
                  }
                },
                {
                  "tag": "#9UQ0L2CVL",
                  "name": "UNICORN",
                  "brawler": {
                    "id": 16000008,
                    "name": "NITA",
                    "power": 8,
                    "trophies": 455
                  }
                }
              ],
              [
                {
                  "tag": "#P2JUPPYJ0",
                  "name": "bot 1",
                  "brawler": {
                    "id": 16000032,
                    "name": "MAX",
                    "power": 5,
                    "trophies": 538
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000013,
                    "name": "POCO",
                    "power": 6,
                    "trophies": 541
                  }
                }
              ],
              [
                {
                  "tag": "#2LJVURCR0",
                  "name": "HamHoev",
                  "brawler": {
                    "id": 16000007,
                    "name": "JESSIE",
                    "power": 8,
                    "trophies": 538
                  }
                },
                {
                  "tag": "#28JLVV02J",
                  "name": "dr armstrong",
                  "brawler": {
                    "id": 16000032,
                    "name": "MAX",
                    "power": 3,
                    "trophies": 539
                  }
                }
              ],
              [
                {
                  "tag": "#8LL0P9V8J",
                  "name": "[БЛЕТ]LEON",
                  "brawler": {
                    "id": 16000000,
                    "name": "SHELLY",
                    "power": 7,
                    "trophies": 494
                  }
                },
                {
                  "tag": "#Q2PQG0C9",
                  "name": "[БЛЕТ] АКУЛА",
                  "brawler": {
                    "id": 16000002,
                    "name": "BULL",
                    "power": 7,
                    "trophies": 500
                  }
                }
              ],
              [
                {
                  "tag": "#22RYYCJ20",
                  "name": "CROW",
                  "brawler": {
                    "id": 16000032,
                    "name": "MAX",
                    "power": 6,
                    "trophies": 538
                  }
                },
                {
                  "tag": "#8JPY8YR0J",
                  "name": "[БЛЕТ] Paradox",
                  "brawler": {
                    "id": 16000030,
                    "name": "EMZ",
                    "power": 6,
                    "trophies": 542
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200326T080341.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 1,
            "trophyChange": 9,
            "teams": [
              [
                {
                  "tag": "#P9UURGQG",
                  "name": "Dark[Темно]",
                  "brawler": {
                    "id": 16000003,
                    "name": "BROCK",
                    "power": 7,
                    "trophies": 517
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000013,
                    "name": "POCO",
                    "power": 6,
                    "trophies": 532
                  }
                }
              ],
              [
                {
                  "tag": "#9UVCCU20V",
                  "name": "Wendolete",
                  "brawler": {
                    "id": 16000029,
                    "name": "BEA",
                    "power": 5,
                    "trophies": 442
                  }
                },
                {
                  "tag": "#PLLLRVYRV",
                  "name": "Pro Toni",
                  "brawler": {
                    "id": 16000003,
                    "name": "BROCK",
                    "power": 8,
                    "trophies": 483
                  }
                }
              ],
              [
                {
                  "tag": "#2VPV0PLUY",
                  "name": "[БЛЕТ] BIGBEAR",
                  "brawler": {
                    "id": 16000006,
                    "name": "BARLEY",
                    "power": 7,
                    "trophies": 517
                  }
                },
                {
                  "tag": "#29Y0U8PR",
                  "name": "M1RC3A_9",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 10,
                    "trophies": 525
                  }
                }
              ],
              [
                {
                  "tag": "#2PGYQVCG2",
                  "name": "(GD) АНТИТИММЕР",
                  "brawler": {
                    "id": 16000000,
                    "name": "SHELLY",
                    "power": 8,
                    "trophies": 518
                  }
                },
                {
                  "tag": "#2ULLJURP",
                  "name": "pep dels palots",
                  "brawler": {
                    "id": 16000017,
                    "name": "TARA",
                    "power": 10,
                    "trophies": 532
                  }
                }
              ],
              [
                {
                  "tag": "#9QQQ9990L",
                  "name": "Garda|YT",
                  "brawler": {
                    "id": 16000010,
                    "name": "EL PRIMO",
                    "power": 1,
                    "trophies": 150
                  }
                },
                {
                  "tag": "#PPUU0RLGP",
                  "name": "(:BLACK_WHITE:)",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 5,
                    "trophies": 532
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200326T080150.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 3,
            "teams": [
              [
                {
                  "tag": "#2YJLRQYLL",
                  "name": "¥DEDeat¥",
                  "brawler": {
                    "id": 16000003,
                    "name": "BROCK",
                    "power": 7,
                    "trophies": 478
                  }
                },
                {
                  "tag": "#CG9JLQC9",
                  "name": "Caric236790",
                  "brawler": {
                    "id": 16000027,
                    "name": "8-BIT",
                    "power": 4,
                    "trophies": 366
                  }
                }
              ],
              [
                {
                  "tag": "#P82PQ90U9",
                  "name": "Динар",
                  "brawler": {
                    "id": 16000002,
                    "name": "BULL",
                    "power": 6,
                    "trophies": 510
                  }
                },
                {
                  "tag": "#2PGVVJ88R",
                  "name": "emadhayyo",
                  "brawler": {
                    "id": 16000009,
                    "name": "DYNAMIKE",
                    "power": 6,
                    "trophies": 511
                  }
                }
              ],
              [
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000013,
                    "name": "POCO",
                    "power": 6,
                    "trophies": 532
                  }
                },
                {
                  "tag": "#9LL888LJV",
                  "name": "pikachu",
                  "brawler": {
                    "id": 16000021,
                    "name": "GENE",
                    "power": 7,
                    "trophies": 491
                  }
                }
              ],
              [
                {
                  "tag": "#P8GUGR0JP",
                  "name": "olli",
                  "brawler": {
                    "id": 16000011,
                    "name": "MORTIS",
                    "power": 7,
                    "trophies": 494
                  }
                },
                {
                  "tag": "#P0P0VG2UG",
                  "name": "John cena",
                  "brawler": {
                    "id": 16000009,
                    "name": "DYNAMIKE",
                    "power": 7,
                    "trophies": 248
                  }
                }
              ],
              [
                {
                  "tag": "#8LG2898LQ",
                  "name": "grana",
                  "brawler": {
                    "id": 16000011,
                    "name": "MORTIS",
                    "power": 5,
                    "trophies": 500
                  }
                },
                {
                  "tag": "#890Y2VQLU",
                  "name": "БЛЕТ satihe",
                  "brawler": {
                    "id": 16000021,
                    "name": "GENE",
                    "power": 7,
                    "trophies": 491
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200326T080006.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 4,
            "trophyChange": -5,
            "teams": [
              [
                {
                  "tag": "#9R0JU0U",
                  "name": "GX GABRY",
                  "brawler": {
                    "id": 16000025,
                    "name": "CARL",
                    "power": 6,
                    "trophies": 504
                  }
                },
                {
                  "tag": "#20YRQ00GL",
                  "name": "TOMMY IL PRO",
                  "brawler": {
                    "id": 16000003,
                    "name": "BROCK",
                    "power": 6,
                    "trophies": 450
                  }
                }
              ],
              [
                {
                  "tag": "#8QCVG8UYL",
                  "name": "Romaha1988",
                  "brawler": {
                    "id": 16000000,
                    "name": "SHELLY",
                    "power": 10,
                    "trophies": 533
                  }
                },
                {
                  "tag": "#8RU0RQ28V",
                  "name": "fol",
                  "brawler": {
                    "id": 16000032,
                    "name": "MAX",
                    "power": 2,
                    "trophies": 36
                  }
                }
              ],
              [
                {
                  "tag": "#9PV9PGYYV",
                  "name": "Eneg",
                  "brawler": {
                    "id": 16000019,
                    "name": "PENNY",
                    "power": 7,
                    "trophies": 531
                  }
                },
                {
                  "tag": "#2UVLV2008",
                  "name": "Нурик",
                  "brawler": {
                    "id": 16000022,
                    "name": "TICK",
                    "power": 5,
                    "trophies": 279
                  }
                }
              ],
              [
                {
                  "tag": "#90YJRRY8J",
                  "name": "simon",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 7,
                    "trophies": 508
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000013,
                    "name": "POCO",
                    "power": 6,
                    "trophies": 537
                  }
                }
              ],
              [
                {
                  "tag": "#YVCG2GYV",
                  "name": "[БАН] ИЛЛКА",
                  "brawler": {
                    "id": 16000023,
                    "name": "LEON",
                    "power": 7,
                    "trophies": 508
                  }
                },
                {
                  "tag": "#8YYRGRYJU",
                  "name": "moj",
                  "brawler": {
                    "id": 16000028,
                    "name": "SANDY",
                    "power": 2,
                    "trophies": 508
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200326T075853.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 5,
            "trophyChange": -6,
            "teams": [
              [
                {
                  "tag": "#8JPY0Q9YL",
                  "name": "eisbär",
                  "brawler": {
                    "id": 16000032,
                    "name": "MAX",
                    "power": 4,
                    "trophies": 501
                  }
                },
                {
                  "tag": "#28P90CP",
                  "name": "xIamLegend",
                  "brawler": {
                    "id": 16000031,
                    "name": "MR. P",
                    "power": 7,
                    "trophies": 338
                  }
                }
              ],
              [
                {
                  "tag": "#8QJ29QCRC",
                  "name": "миша",
                  "brawler": {
                    "id": 16000006,
                    "name": "BARLEY",
                    "power": 6,
                    "trophies": 520
                  }
                },
                {
                  "tag": "#8GL2V8RRY",
                  "name": "Nici 5a",
                  "brawler": {
                    "id": 16000026,
                    "name": "BIBI",
                    "power": 7,
                    "trophies": 545
                  }
                }
              ],
              [
                {
                  "tag": "#CGUJ00QY",
                  "name": "ЛЕПС",
                  "brawler": {
                    "id": 16000034,
                    "name": "JACKY",
                    "power": 3,
                    "trophies": 138
                  }
                },
                {
                  "tag": "#2VCQJY0QG",
                  "name": "ДанилЧЭШАК",
                  "brawler": {
                    "id": 16000012,
                    "name": "CROW",
                    "power": 8,
                    "trophies": 530
                  }
                }
              ],
              [
                {
                  "tag": "#9PCLY9PR8",
                  "name": "соня",
                  "brawler": {
                    "id": 16000014,
                    "name": "BO",
                    "power": 10,
                    "trophies": 537
                  }
                },
                {
                  "tag": "#2YYVY9VGJ",
                  "name": "Magister",
                  "brawler": {
                    "id": 16000008,
                    "name": "NITA",
                    "power": 10,
                    "trophies": 541
                  }
                }
              ],
              [
                {
                  "tag": "#GCGVYY22",
                  "name": "SAMVEL",
                  "brawler": {
                    "id": 16000012,
                    "name": "CROW",
                    "power": 5,
                    "trophies": 537
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000013,
                    "name": "POCO",
                    "power": 6,
                    "trophies": 543
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200326T075726.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 1,
            "trophyChange": 9,
            "teams": [
              [
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000013,
                    "name": "POCO",
                    "power": 6,
                    "trophies": 534
                  }
                },
                {
                  "tag": "#P2282V2LG",
                  "name": "jarnogames",
                  "brawler": {
                    "id": 16000030,
                    "name": "EMZ",
                    "power": 5,
                    "trophies": 547
                  }
                }
              ],
              [
                {
                  "tag": "#J2CGU0Y",
                  "name": "Arthur",
                  "brawler": {
                    "id": 16000014,
                    "name": "BO",
                    "power": 8,
                    "trophies": 519
                  }
                },
                {
                  "tag": "#8G2QULQP8",
                  "name": "《Emre》",
                  "brawler": {
                    "id": 16000013,
                    "name": "POCO",
                    "power": 6,
                    "trophies": 369
                  }
                }
              ],
              [
                {
                  "tag": "#8QU8UJGUJ",
                  "name": "maks_11",
                  "brawler": {
                    "id": 16000006,
                    "name": "BARLEY",
                    "power": 7,
                    "trophies": 540
                  }
                },
                {
                  "tag": "#UL0YV8YJ",
                  "name": "×LION×KING×",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 10,
                    "trophies": 539
                  }
                }
              ],
              [
                {
                  "tag": "#9LLJVPLGR",
                  "name": "BORZ",
                  "brawler": {
                    "id": 16000026,
                    "name": "BIBI",
                    "power": 7,
                    "trophies": 525
                  }
                },
                {
                  "tag": "#29YRULYRG",
                  "name": "Алина Семеш",
                  "brawler": {
                    "id": 16000029,
                    "name": "BEA",
                    "power": 5,
                    "trophies": 322
                  }
                }
              ],
              [
                {
                  "tag": "#2UUYR290U",
                  "name": "Fox.ru",
                  "brawler": {
                    "id": 16000011,
                    "name": "MORTIS",
                    "power": 6,
                    "trophies": 533
                  }
                },
                {
                  "tag": "#9VC8C8CGY",
                  "name": "LeonaPro123",
                  "brawler": {
                    "id": 16000001,
                    "name": "COLT",
                    "power": 8,
                    "trophies": 555
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200326T075456.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 1,
            "trophyChange": 9,
            "teams": [
              [
                {
                  "tag": "#2G0LGUGJ8",
                  "name": "данил",
                  "brawler": {
                    "id": 16000000,
                    "name": "SHELLY",
                    "power": 7,
                    "trophies": 525
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000013,
                    "name": "POCO",
                    "power": 6,
                    "trophies": 525
                  }
                }
              ],
              [
                {
                  "tag": "#8G2GCJLYQ",
                  "name": "Brawler",
                  "brawler": {
                    "id": 16000002,
                    "name": "BULL",
                    "power": 8,
                    "trophies": 428
                  }
                },
                {
                  "tag": "#292GGQ0VJ",
                  "name": "Supercеll",
                  "brawler": {
                    "id": 16000011,
                    "name": "MORTIS",
                    "power": 6,
                    "trophies": 495
                  }
                }
              ],
              [
                {
                  "tag": "#PQ009CV8",
                  "name": "KlimeK",
                  "brawler": {
                    "id": 16000012,
                    "name": "CROW",
                    "power": 7,
                    "trophies": 521
                  }
                },
                {
                  "tag": "#P08VGLJUL",
                  "name": "Filipeq",
                  "brawler": {
                    "id": 16000000,
                    "name": "SHELLY",
                    "power": 10,
                    "trophies": 528
                  }
                }
              ],
              [
                {
                  "tag": "#2Q9008YGV",
                  "name": "[SAKE]0ANIKAWA0",
                  "brawler": {
                    "id": 16000023,
                    "name": "LEON",
                    "power": 7,
                    "trophies": 527
                  }
                },
                {
                  "tag": "#PQ9G8R8U2",
                  "name": "cedric",
                  "brawler": {
                    "id": 16000012,
                    "name": "CROW",
                    "power": 5,
                    "trophies": 527
                  }
                }
              ],
              [
                {
                  "tag": "#8VYV8JQP0",
                  "name": "Niki",
                  "brawler": {
                    "id": 16000018,
                    "name": "DARRYL",
                    "power": 8,
                    "trophies": 527
                  }
                },
                {
                  "tag": "#2UL2Q8L9U",
                  "name": "elizaan",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 3,
                    "trophies": 527
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200326T075317.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 4,
            "trophyChange": -5,
            "teams": [
              [
                {
                  "tag": "#Y2CLYGGYC",
                  "name": "naparah можно",
                  "brawler": {
                    "id": 16000000,
                    "name": "SHELLY",
                    "power": 7,
                    "trophies": 513
                  }
                },
                {
                  "tag": "#GRR0UJC0",
                  "name": "bumie3000",
                  "brawler": {
                    "id": 16000026,
                    "name": "BIBI",
                    "power": 7,
                    "trophies": 513
                  }
                }
              ],
              [
                {
                  "tag": "#2LCY29UGR",
                  "name": "ATTI66",
                  "brawler": {
                    "id": 16000014,
                    "name": "BO",
                    "power": 7,
                    "trophies": 483
                  }
                },
                {
                  "tag": "#2R22RV998",
                  "name": "Barna Pro",
                  "brawler": {
                    "id": 16000034,
                    "name": "JACKY",
                    "power": 5,
                    "trophies": 425
                  }
                }
              ],
              [
                {
                  "tag": "#QQGQLV2U",
                  "name": "Lemona кусок",
                  "brawler": {
                    "id": 16000017,
                    "name": "TARA",
                    "power": 10,
                    "trophies": 513
                  }
                },
                {
                  "tag": "#Y00JUCUQQ",
                  "name": "читер",
                  "brawler": {
                    "id": 16000018,
                    "name": "DARRYL",
                    "power": 5,
                    "trophies": 529
                  }
                }
              ],
              [
                {
                  "tag": "#2GG9QV0CY",
                  "name": "Cosmin",
                  "brawler": {
                    "id": 16000018,
                    "name": "DARRYL",
                    "power": 6,
                    "trophies": 510
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000013,
                    "name": "POCO",
                    "power": 6,
                    "trophies": 530
                  }
                }
              ],
              [
                {
                  "tag": "#P2Y2CV2JC",
                  "name": "paul",
                  "brawler": {
                    "id": 16000020,
                    "name": "FRANK",
                    "power": 1,
                    "trophies": 165
                  }
                },
                {
                  "tag": "#YGJUUJVU",
                  "name": "SX|Radomir",
                  "brawler": {
                    "id": 16000006,
                    "name": "BARLEY",
                    "power": 7,
                    "trophies": 510
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200326T075229.000Z",
          "event": {
            "id": 15000228,
            "mode": "soloShowdown",
            "map": "Safety Center"
          },
          "battle": {
            "mode": "soloShowdown",
            "type": "ranked",
            "rank": 9,
            "trophyChange": 6,
            "players": [
              {
                "tag": "#2JUR9VUG0",
                "name": "Patrik88",
                "brawler": {
                  "id": 16000030,
                  "name": "EMZ",
                  "power": 10,
                  "trophies": 558
                }
              },
              {
                "tag": "#8VCY2RLPV",
                "name": "lopes_99",
                "brawler": {
                  "id": 16000002,
                  "name": "BULL",
                  "power": 10,
                  "trophies": 563
                }
              },
              {
                "tag": "#PP9LL9Q8R",
                "name": "тимур",
                "brawler": {
                  "id": 16000000,
                  "name": "SHELLY",
                  "power": 10,
                  "trophies": 559
                }
              },
              {
                "tag": "#C29YRV0",
                "name": "DNT Dave 2.0",
                "brawler": {
                  "id": 16000019,
                  "name": "PENNY",
                  "power": 10,
                  "trophies": 550
                }
              },
              {
                "tag": "#CJQPPQQY",
                "name": "AGRESIF $IEG",
                "brawler": {
                  "id": 16000015,
                  "name": "PIPER",
                  "power": 10,
                  "trophies": 553
                }
              },
              {
                "tag": "#8RVPCQV2Q",
                "name": "Bedoberek",
                "brawler": {
                  "id": 16000027,
                  "name": "8-BIT",
                  "power": 10,
                  "trophies": 556
                }
              },
              {
                "tag": "#820U0QCJ9",
                "name": "jagster_play",
                "brawler": {
                  "id": 16000003,
                  "name": "BROCK",
                  "power": 10,
                  "trophies": 562
                }
              },
              {
                "tag": "#PP9RLGQY",
                "name": "luiz.d.f",
                "brawler": {
                  "id": 16000008,
                  "name": "NITA",
                  "power": 10,
                  "trophies": 552
                }
              },
              {
                "tag": "#9RGYGP20P",
                "name": "umi no tamashi",
                "brawler": {
                  "id": 16000024,
                  "name": "ROSA",
                  "power": 10,
                  "trophies": 560
                }
              },
              {
                "tag": "#280J00JJU",
                "name": "FakeBuBz4NuBz",
                "brawler": {
                  "id": 16000017,
                  "name": "TARA",
                  "power": 10,
                  "trophies": 571
                }
              }
            ]
          }
        },
        {
          "battleTime": "20200326T075030.000Z",
          "event": {
            "id": 15000228,
            "mode": "soloShowdown",
            "map": "Safety Center"
          },
          "battle": {
            "mode": "soloShowdown",
            "type": "ranked",
            "rank": 6,
            "trophyChange": 18,
            "players": [
              {
                "tag": "#882UJ0QPU",
                "name": "wildtiger",
                "brawler": {
                  "id": 16000007,
                  "name": "JESSIE",
                  "power": 10,
                  "trophies": 542
                }
              },
              {
                "tag": "#9YCQGPLU2",
                "name": "CONFIRM",
                "brawler": {
                  "id": 16000000,
                  "name": "SHELLY",
                  "power": 10,
                  "trophies": 545
                }
              },
              {
                "tag": "#229V09VYL",
                "name": "Lllama240",
                "brawler": {
                  "id": 16000025,
                  "name": "CARL",
                  "power": 10,
                  "trophies": 544
                }
              },
              {
                "tag": "#P829PRUC",
                "name": "Brawler",
                "brawler": {
                  "id": 16000007,
                  "name": "JESSIE",
                  "power": 10,
                  "trophies": 547
                }
              },
              {
                "tag": "#PYQ2UG0LU",
                "name": "gio10",
                "brawler": {
                  "id": 16000000,
                  "name": "SHELLY",
                  "power": 10,
                  "trophies": 535
                }
              },
              {
                "tag": "#9RGYGP20P",
                "name": "umi no tamashi",
                "brawler": {
                  "id": 16000024,
                  "name": "ROSA",
                  "power": 10,
                  "trophies": 542
                }
              },
              {
                "tag": "#JU9GU0PC",
                "name": "Turgay28",
                "brawler": {
                  "id": 16000003,
                  "name": "BROCK",
                  "power": 10,
                  "trophies": 532
                }
              },
              {
                "tag": "#9Y82P0Y22",
                "name": "БЛЕТ ВОРОН",
                "brawler": {
                  "id": 16000002,
                  "name": "BULL",
                  "power": 10,
                  "trophies": 546
                }
              },
              {
                "tag": "#2CYGJVRQ8",
                "name": "memel du 38.",
                "brawler": {
                  "id": 16000014,
                  "name": "BO",
                  "power": 10,
                  "trophies": 543
                }
              },
              {
                "tag": "#2PVGLR8QL",
                "name": "PuffPuff",
                "brawler": {
                  "id": 16000004,
                  "name": "RICO",
                  "power": 10,
                  "trophies": 537
                }
              }
            ]
          }
        },
        {
          "battleTime": "20200326T074733.000Z",
          "event": {
            "id": 15000228,
            "mode": "soloShowdown",
            "map": "Safety Center"
          },
          "battle": {
            "mode": "soloShowdown",
            "type": "ranked",
            "rank": 1,
            "trophyChange": 38,
            "players": [
              {
                "tag": "#9RGYGP20P",
                "name": "umi no tamashi",
                "brawler": {
                  "id": 16000024,
                  "name": "ROSA",
                  "power": 10,
                  "trophies": 504
                }
              },
              {
                "tag": "#UVY99JLV",
                "name": "Valentin",
                "brawler": {
                  "id": 16000001,
                  "name": "COLT",
                  "power": 10,
                  "trophies": 500
                }
              },
              {
                "tag": "#98ULYCRCU",
                "name": "Brawler",
                "brawler": {
                  "id": 16000000,
                  "name": "SHELLY",
                  "power": 10,
                  "trophies": 491
                }
              },
              {
                "tag": "#CJ2YYYQ8",
                "name": "SEROJ",
                "brawler": {
                  "id": 16000019,
                  "name": "PENNY",
                  "power": 10,
                  "trophies": 486
                }
              },
              {
                "tag": "#80QCVQ9R9",
                "name": "OP|Šolja",
                "brawler": {
                  "id": 16000002,
                  "name": "BULL",
                  "power": 10,
                  "trophies": 503
                }
              },
              {
                "tag": "#Y88J0PJU",
                "name": "mr commander",
                "brawler": {
                  "id": 16000002,
                  "name": "BULL",
                  "power": 10,
                  "trophies": 496
                }
              },
              {
                "tag": "#28CGRGY82",
                "name": "845",
                "brawler": {
                  "id": 16000018,
                  "name": "DARRYL",
                  "power": 10,
                  "trophies": 497
                }
              },
              {
                "tag": "#8LLGYU9YP",
                "name": "CROW",
                "brawler": {
                  "id": 16000010,
                  "name": "EL PRIMO",
                  "power": 10,
                  "trophies": 500
                }
              },
              {
                "tag": "#9QCJP889",
                "name": "Alper",
                "brawler": {
                  "id": 16000000,
                  "name": "SHELLY",
                  "power": 10,
                  "trophies": 504
                }
              },
              {
                "tag": "#2QYQG29CC",
                "name": "vladik.š.",
                "brawler": {
                  "id": 16000013,
                  "name": "POCO",
                  "power": 10,
                  "trophies": 503
                }
              }
            ]
          }
        },
        {
          "battleTime": "20200326T074347.000Z",
          "event": {
            "id": 15000254,
            "mode": "brawlBall",
            "map": "Well Cut"
          },
          "battle": {
            "mode": "brawlBall",
            "type": "ranked",
            "result": "victory",
            "duration": 83,
            "trophyChange": 8,
            "starPlayer": {
              "tag": "#9RGYGP20P",
              "name": "umi no tamashi",
              "brawler": {
                "id": 16000006,
                "name": "BARLEY",
                "power": 10,
                "trophies": 612
              }
            },
            "teams": [
              [
                {
                  "tag": "#99C00G2PQ",
                  "name": "Скрытный убица",
                  "brawler": {
                    "id": 16000020,
                    "name": "FRANK",
                    "power": 6,
                    "trophies": 376
                  }
                },
                {
                  "tag": "#U928UCPQ",
                  "name": "[ЖМЫХ] БиБи",
                  "brawler": {
                    "id": 16000018,
                    "name": "DARRYL",
                    "power": 7,
                    "trophies": 552
                  }
                },
                {
                  "tag": "#9PYC0RL2Y",
                  "name": "LEON",
                  "brawler": {
                    "id": 16000003,
                    "name": "BROCK",
                    "power": 7,
                    "trophies": 230
                  }
                }
              ],
              [
                {
                  "tag": "#2RLCRUU9",
                  "name": "Finalmente",
                  "brawler": {
                    "id": 16000011,
                    "name": "MORTIS",
                    "power": 10,
                    "trophies": 619
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000006,
                    "name": "BARLEY",
                    "power": 10,
                    "trophies": 612
                  }
                },
                {
                  "tag": "#JLY0YRU9",
                  "name": "monte97",
                  "brawler": {
                    "id": 16000018,
                    "name": "DARRYL",
                    "power": 7,
                    "trophies": 623
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200326T074202.000Z",
          "event": {
            "id": 15000254,
            "mode": "brawlBall",
            "map": "Well Cut"
          },
          "battle": {
            "mode": "brawlBall",
            "type": "ranked",
            "result": "defeat",
            "duration": 96,
            "trophyChange": -7,
            "starPlayer": {
              "tag": "#9V9GR009J",
              "name": "W3S|Castro",
              "brawler": {
                "id": 16000017,
                "name": "TARA",
                "power": 8,
                "trophies": 551
              }
            },
            "teams": [
              [
                {
                  "tag": "#YCU8J8G0",
                  "name": "W3S|⚜️SAVY⚜️",
                  "brawler": {
                    "id": 16000021,
                    "name": "GENE",
                    "power": 10,
                    "trophies": 528
                  }
                },
                {
                  "tag": "#8JGP9J2Q9",
                  "name": "yuzza mcfluzza",
                  "brawler": {
                    "id": 16000018,
                    "name": "DARRYL",
                    "power": 7,
                    "trophies": 440
                  }
                },
                {
                  "tag": "#9V9GR009J",
                  "name": "W3S|Castro",
                  "brawler": {
                    "id": 16000017,
                    "name": "TARA",
                    "power": 8,
                    "trophies": 551
                  }
                }
              ],
              [
                {
                  "tag": "#UC2PRPJV",
                  "name": "kalantaevid",
                  "brawler": {
                    "id": 16000011,
                    "name": "MORTIS",
                    "power": 10,
                    "trophies": 615
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000006,
                    "name": "BARLEY",
                    "power": 10,
                    "trophies": 619
                  }
                },
                {
                  "tag": "#29UGR920Y",
                  "name": "Circuskind",
                  "brawler": {
                    "id": 16000020,
                    "name": "FRANK",
                    "power": 9,
                    "trophies": 616
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200326T073944.000Z",
          "event": {
            "id": 15000254,
            "mode": "brawlBall",
            "map": "Well Cut"
          },
          "battle": {
            "mode": "brawlBall",
            "type": "ranked",
            "result": "defeat",
            "duration": 109,
            "trophyChange": -6,
            "starPlayer": {
              "tag": "#RR0G8LVJ",
              "name": "ico collins",
              "brawler": {
                "id": 16000018,
                "name": "DARRYL",
                "power": 10,
                "trophies": 514
              }
            },
            "teams": [
              [
                {
                  "tag": "#90YPJLJU8",
                  "name": "Ünal323",
                  "brawler": {
                    "id": 16000017,
                    "name": "TARA",
                    "power": 7,
                    "trophies": 513
                  }
                },
                {
                  "tag": "#PYYYL92JG",
                  "name": "_Mr.Atay_",
                  "brawler": {
                    "id": 16000018,
                    "name": "DARRYL",
                    "power": 7,
                    "trophies": 513
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000020,
                    "name": "FRANK",
                    "power": 5,
                    "trophies": 521
                  }
                }
              ],
              [
                {
                  "tag": "#2Y90URVCP",
                  "name": "3Loy_shket",
                  "brawler": {
                    "id": 16000026,
                    "name": "BIBI",
                    "power": 6,
                    "trophies": 514
                  }
                },
                {
                  "tag": "#RR0G8LVJ",
                  "name": "ico collins",
                  "brawler": {
                    "id": 16000018,
                    "name": "DARRYL",
                    "power": 10,
                    "trophies": 514
                  }
                },
                {
                  "tag": "#9L9LC8QRV",
                  "name": "coppigame",
                  "brawler": {
                    "id": 16000007,
                    "name": "JESSIE",
                    "power": 9,
                    "trophies": 514
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200326T073732.000Z",
          "event": {
            "id": 15000254,
            "mode": "brawlBall",
            "map": "Well Cut"
          },
          "battle": {
            "mode": "brawlBall",
            "type": "ranked",
            "result": "defeat",
            "duration": 46,
            "trophyChange": -6,
            "starPlayer": {
              "tag": "#2Q908YV2Q",
              "name": "alkann",
              "brawler": {
                "id": 16000004,
                "name": "RICO",
                "power": 10,
                "trophies": 519
              }
            },
            "teams": [
              [
                {
                  "tag": "#90UPP0VYV",
                  "name": "Brawler",
                  "brawler": {
                    "id": 16000011,
                    "name": "MORTIS",
                    "power": 7,
                    "trophies": 514
                  }
                },
                {
                  "tag": "#9GY2Q0YC9",
                  "name": "Legend By Luuk",
                  "brawler": {
                    "id": 16000000,
                    "name": "SHELLY",
                    "power": 10,
                    "trophies": 514
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000020,
                    "name": "FRANK",
                    "power": 5,
                    "trophies": 527
                  }
                }
              ],
              [
                {
                  "tag": "#9CL82VV8",
                  "name": "Scarlord(O.D.N.",
                  "brawler": {
                    "id": 16000010,
                    "name": "EL PRIMO",
                    "power": 7,
                    "trophies": 519
                  }
                },
                {
                  "tag": "#2Q908YV2Q",
                  "name": "alkann",
                  "brawler": {
                    "id": 16000004,
                    "name": "RICO",
                    "power": 10,
                    "trophies": 519
                  }
                },
                {
                  "tag": "#98LRLGC2U",
                  "name": "томхолланд",
                  "brawler": {
                    "id": 16000009,
                    "name": "DYNAMIKE",
                    "power": 10,
                    "trophies": 519
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200325T232301.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 1,
            "trophyChange": 9,
            "teams": [
              [
                {
                  "tag": "#2QGYQ90J0",
                  "name": "EbalBSrakom",
                  "brawler": {
                    "id": 16000014,
                    "name": "BO",
                    "power": 8,
                    "trophies": 590
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000027,
                    "name": "8-BIT",
                    "power": 8,
                    "trophies": 593
                  }
                }
              ],
              [
                {
                  "tag": "#2Q888QP0J",
                  "name": "Ahmet172",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 6,
                    "trophies": 577
                  }
                },
                {
                  "tag": "#CQV9QJRV",
                  "name": "MagicalwooD",
                  "brawler": {
                    "id": 16000029,
                    "name": "BEA",
                    "power": 5,
                    "trophies": 585
                  }
                }
              ],
              [
                {
                  "tag": "#YCUYU0L9",
                  "name": "ROBER12",
                  "brawler": {
                    "id": 16000018,
                    "name": "DARRYL",
                    "power": 10,
                    "trophies": 577
                  }
                },
                {
                  "tag": "#VQ8CGGU",
                  "name": "L3gend",
                  "brawler": {
                    "id": 16000019,
                    "name": "PENNY",
                    "power": 8,
                    "trophies": 584
                  }
                }
              ],
              [
                {
                  "tag": "#92VPLLCCU",
                  "name": "Alex to God $",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 7,
                    "trophies": 575
                  }
                },
                {
                  "tag": "#9PV89LGQ2",
                  "name": "rachid",
                  "brawler": {
                    "id": 16000007,
                    "name": "JESSIE",
                    "power": 10,
                    "trophies": 586
                  }
                }
              ],
              [
                {
                  "tag": "#2UPCPVPVJ",
                  "name": "MarkoFullGM",
                  "brawler": {
                    "id": 16000014,
                    "name": "BO",
                    "power": 10,
                    "trophies": 572
                  }
                },
                {
                  "tag": "#GC8GVJR",
                  "name": "emanuele04",
                  "brawler": {
                    "id": 16000032,
                    "name": "MAX",
                    "power": 6,
                    "trophies": 593
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200325T232032.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 1,
            "trophyChange": 9,
            "teams": [
              [
                {
                  "tag": "#2QGYQ90J0",
                  "name": "EbalBSrakom",
                  "brawler": {
                    "id": 16000014,
                    "name": "BO",
                    "power": 8,
                    "trophies": 581
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000027,
                    "name": "8-BIT",
                    "power": 8,
                    "trophies": 584
                  }
                }
              ],
              [
                {
                  "tag": "#LCJQJCRP",
                  "name": "brik",
                  "brawler": {
                    "id": 16000010,
                    "name": "EL PRIMO",
                    "power": 8,
                    "trophies": 577
                  }
                },
                {
                  "tag": "#98PGUQLCJ",
                  "name": "ПРОФАН TV",
                  "brawler": {
                    "id": 16000000,
                    "name": "SHELLY",
                    "power": 8,
                    "trophies": 608
                  }
                }
              ],
              [
                {
                  "tag": "#99P82L2CP",
                  "name": "jet society",
                  "brawler": {
                    "id": 16000003,
                    "name": "BROCK",
                    "power": 10,
                    "trophies": 584
                  }
                },
                {
                  "tag": "#2CC008C9",
                  "name": "Django",
                  "brawler": {
                    "id": 16000013,
                    "name": "POCO",
                    "power": 9,
                    "trophies": 590
                  }
                }
              ],
              [
                {
                  "tag": "#8UCR20JU9",
                  "name": "Sr. Noob",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 10,
                    "trophies": 578
                  }
                },
                {
                  "tag": "#PULLYQQU",
                  "name": "Snoop",
                  "brawler": {
                    "id": 16000019,
                    "name": "PENNY",
                    "power": 10,
                    "trophies": 580
                  }
                }
              ],
              [
                {
                  "tag": "#8CVPJ2UG",
                  "name": "Filiporros",
                  "brawler": {
                    "id": 16000010,
                    "name": "EL PRIMO",
                    "power": 10,
                    "trophies": 543
                  }
                },
                {
                  "tag": "#YRRQPP0Y",
                  "name": "Yankush",
                  "brawler": {
                    "id": 16000004,
                    "name": "RICO",
                    "power": 8,
                    "trophies": 548
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200325T232016.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 5,
            "trophyChange": -6,
            "teams": [
              [
                {
                  "tag": "#88UU8RR0U",
                  "name": "Othi swim",
                  "brawler": {
                    "id": 16000020,
                    "name": "FRANK",
                    "power": 7,
                    "trophies": 590
                  }
                },
                {
                  "tag": "#8YP08LLGU",
                  "name": "Barley",
                  "brawler": {
                    "id": 16000019,
                    "name": "PENNY",
                    "power": 8,
                    "trophies": 594
                  }
                }
              ],
              [
                {
                  "tag": "#P8VYU09R",
                  "name": "niklas",
                  "brawler": {
                    "id": 16000029,
                    "name": "BEA",
                    "power": 5,
                    "trophies": 529
                  }
                },
                {
                  "tag": "#JYPU0PU",
                  "name": "MacLag",
                  "brawler": {
                    "id": 16000003,
                    "name": "BROCK",
                    "power": 7,
                    "trophies": 550
                  }
                }
              ],
              [
                {
                  "tag": "#2098LGJVP",
                  "name": "NST_JOEL",
                  "brawler": {
                    "id": 16000002,
                    "name": "BULL",
                    "power": 6,
                    "trophies": 569
                  }
                },
                {
                  "tag": "#8G0UR82VL",
                  "name": "martin5",
                  "brawler": {
                    "id": 16000029,
                    "name": "BEA",
                    "power": 6,
                    "trophies": 496
                  }
                }
              ],
              [
                {
                  "tag": "#880V0YJQ8",
                  "name": "nilson",
                  "brawler": {
                    "id": 16000003,
                    "name": "BROCK",
                    "power": 7,
                    "trophies": 593
                  }
                },
                {
                  "tag": "#2L28VP2C0",
                  "name": "•кикимора•",
                  "brawler": {
                    "id": 16000029,
                    "name": "BEA",
                    "power": 5,
                    "trophies": 591
                  }
                }
              ],
              [
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000027,
                    "name": "8-BIT",
                    "power": 8,
                    "trophies": 590
                  }
                },
                {
                  "tag": "#999GVRQ82",
                  "name": "LP|Gnomo",
                  "brawler": {
                    "id": 16000030,
                    "name": "EMZ",
                    "power": 7,
                    "trophies": 592
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200325T231848.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 5,
            "trophyChange": -6,
            "teams": [
              [
                {
                  "tag": "#98L82R0Q",
                  "name": "LollipopBuddy",
                  "brawler": {
                    "id": 16000012,
                    "name": "CROW",
                    "power": 6,
                    "trophies": 514
                  }
                },
                {
                  "tag": "#8Q9UCLQ0",
                  "name": "Candyman",
                  "brawler": {
                    "id": 16000000,
                    "name": "SHELLY",
                    "power": 10,
                    "trophies": 556
                  }
                }
              ],
              [
                {
                  "tag": "#P8V22Q08",
                  "name": "GX MATIC",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 10,
                    "trophies": 600
                  }
                },
                {
                  "tag": "#LRLQLCR",
                  "name": "MattiaMarty04",
                  "brawler": {
                    "id": 16000029,
                    "name": "BEA",
                    "power": 7,
                    "trophies": 599
                  }
                }
              ],
              [
                {
                  "tag": "#28VJQ9GYJ",
                  "name": "anas",
                  "brawler": {
                    "id": 16000012,
                    "name": "CROW",
                    "power": 10,
                    "trophies": 558
                  }
                },
                {
                  "tag": "#UVG9J0QP",
                  "name": "sanmörv",
                  "brawler": {
                    "id": 16000001,
                    "name": "COLT",
                    "power": 10,
                    "trophies": 513
                  }
                }
              ],
              [
                {
                  "tag": "#2RP9GCGLQ",
                  "name": "FKX|Null Asasin",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 8,
                    "trophies": 551
                  }
                },
                {
                  "tag": "#9YRCQ8GCJ",
                  "name": "FKX | ❤️Diana❤️",
                  "brawler": {
                    "id": 16000014,
                    "name": "BO",
                    "power": 7,
                    "trophies": 574
                  }
                }
              ],
              [
                {
                  "tag": "#999GVRQ82",
                  "name": "LP|Gnomo",
                  "brawler": {
                    "id": 16000030,
                    "name": "EMZ",
                    "power": 7,
                    "trophies": 600
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000027,
                    "name": "8-BIT",
                    "power": 8,
                    "trophies": 596
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200325T231651.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 1,
            "trophyChange": 9,
            "teams": [
              [
                {
                  "tag": "#999GVRQ82",
                  "name": "LP|Gnomo",
                  "brawler": {
                    "id": 16000030,
                    "name": "EMZ",
                    "power": 7,
                    "trophies": 591
                  }
                },
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000027,
                    "name": "8-BIT",
                    "power": 8,
                    "trophies": 587
                  }
                }
              ],
              [
                {
                  "tag": "#8V2UJR",
                  "name": "Kirill61",
                  "brawler": {
                    "id": 16000012,
                    "name": "CROW",
                    "power": 6,
                    "trophies": 547
                  }
                },
                {
                  "tag": "#PPRVR2CUR",
                  "name": "danij2007",
                  "brawler": {
                    "id": 16000030,
                    "name": "EMZ",
                    "power": 5,
                    "trophies": 545
                  }
                }
              ],
              [
                {
                  "tag": "#8VJU2PVCY",
                  "name": "Brawl Kralı",
                  "brawler": {
                    "id": 16000019,
                    "name": "PENNY",
                    "power": 10,
                    "trophies": 584
                  }
                },
                {
                  "tag": "#8GCRQYPYV",
                  "name": "shrix",
                  "brawler": {
                    "id": 16000023,
                    "name": "LEON",
                    "power": 9,
                    "trophies": 599
                  }
                }
              ],
              [
                {
                  "tag": "#8UGQV2GP0",
                  "name": "TappedAlbanian",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 10,
                    "trophies": 588
                  }
                },
                {
                  "tag": "#209GQUJRJ",
                  "name": "antagonist [oz]",
                  "brawler": {
                    "id": 16000012,
                    "name": "CROW",
                    "power": 8,
                    "trophies": 589
                  }
                }
              ],
              [
                {
                  "tag": "#YCR20QGR",
                  "name": "SS|Yeepppaa",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 10,
                    "trophies": 588
                  }
                },
                {
                  "tag": "#UYQ02JYP",
                  "name": "Rubén",
                  "brawler": {
                    "id": 16000018,
                    "name": "DARRYL",
                    "power": 6,
                    "trophies": 565
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200325T231527.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 4,
            "trophyChange": -5,
            "teams": [
              [
                {
                  "tag": "#2LPUVUR",
                  "name": "UZMAN BEY",
                  "brawler": {
                    "id": 16000014,
                    "name": "BO",
                    "power": 8,
                    "trophies": 534
                  }
                },
                {
                  "tag": "#2Q0GV28C",
                  "name": "Ramiz",
                  "brawler": {
                    "id": 16000008,
                    "name": "NITA",
                    "power": 10,
                    "trophies": 538
                  }
                }
              ],
              [
                {
                  "tag": "#U8U9988Y",
                  "name": "DARTH VADER",
                  "brawler": {
                    "id": 16000005,
                    "name": "SPIKE",
                    "power": 10,
                    "trophies": 584
                  }
                },
                {
                  "tag": "#88JGR82VR",
                  "name": "Samuel",
                  "brawler": {
                    "id": 16000001,
                    "name": "COLT",
                    "power": 10,
                    "trophies": 581
                  }
                }
              ],
              [
                {
                  "tag": "#9RCQJRC89",
                  "name": "Skan",
                  "brawler": {
                    "id": 16000006,
                    "name": "BARLEY",
                    "power": 10,
                    "trophies": 584
                  }
                },
                {
                  "tag": "#8988VCVCP",
                  "name": "Mustafa82",
                  "brawler": {
                    "id": 16000012,
                    "name": "CROW",
                    "power": 7,
                    "trophies": 581
                  }
                }
              ],
              [
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000027,
                    "name": "8-BIT",
                    "power": 8,
                    "trophies": 592
                  }
                },
                {
                  "tag": "#29GY88VCL",
                  "name": "Mega-Brawler",
                  "brawler": {
                    "id": 16000005,
                    "name": "SPIKE",
                    "power": 10,
                    "trophies": 582
                  }
                }
              ],
              [
                {
                  "tag": "#90QUPJG9V",
                  "name": "16_MerT_08",
                  "brawler": {
                    "id": 16000027,
                    "name": "8-BIT",
                    "power": 7,
                    "trophies": 454
                  }
                },
                {
                  "tag": "#VVUVGP8L",
                  "name": "ölümcülTÜRK",
                  "brawler": {
                    "id": 16000032,
                    "name": "MAX",
                    "power": 10,
                    "trophies": 547
                  }
                }
              ]
            ]
          }
        },
        {
          "battleTime": "20200325T231304.000Z",
          "event": {
            "id": 15000199,
            "mode": "duoShowdown",
            "map": "Dark Passage"
          },
          "battle": {
            "mode": "duoShowdown",
            "type": "ranked",
            "rank": 2,
            "trophyChange": 7,
            "teams": [
              [
                {
                  "tag": "#28LYURQJ0",
                  "name": "Flexx",
                  "brawler": {
                    "id": 16000021,
                    "name": "GENE",
                    "power": 8,
                    "trophies": 554
                  }
                },
                {
                  "tag": "#9JU92QPY",
                  "name": "DAMIANO1305",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 7,
                    "trophies": 582
                  }
                }
              ],
              [
                {
                  "tag": "#9RGYGP20P",
                  "name": "umi no tamashi",
                  "brawler": {
                    "id": 16000027,
                    "name": "8-BIT",
                    "power": 8,
                    "trophies": 585
                  }
                },
                {
                  "tag": "#8CPYY22G",
                  "name": "Konrad 17",
                  "brawler": {
                    "id": 16000029,
                    "name": "BEA",
                    "power": 7,
                    "trophies": 576
                  }
                }
              ],
              [
                {
                  "tag": "#9VPYQVJUG",
                  "name": "soufgeek",
                  "brawler": {
                    "id": 16000020,
                    "name": "FRANK",
                    "power": 6,
                    "trophies": 544
                  }
                },
                {
                  "tag": "#P9QG9J0Q0",
                  "name": "bilal_mp4",
                  "brawler": {
                    "id": 16000010,
                    "name": "EL PRIMO",
                    "power": 6,
                    "trophies": 511
                  }
                }
              ],
              [
                {
                  "tag": "#QLRJ9U9L",
                  "name": "JOSE ANTONIO",
                  "brawler": {
                    "id": 16000005,
                    "name": "SPIKE",
                    "power": 10,
                    "trophies": 531
                  }
                },
                {
                  "tag": "#9URULUQP",
                  "name": "Lyoned",
                  "brawler": {
                    "id": 16000012,
                    "name": "CROW",
                    "power": 10,
                    "trophies": 548
                  }
                }
              ],
              [
                {
                  "tag": "#PYGLYR99Y",
                  "name": "Snekinekt",
                  "brawler": {
                    "id": 16000015,
                    "name": "PIPER",
                    "power": 7,
                    "trophies": 588
                  }
                },
                {
                  "tag": "#8QR9YYGC0",
                  "name": "Black_mo08",
                  "brawler": {
                    "id": 16000012,
                    "name": "CROW",
                    "power": 8,
                    "trophies": 573
                  }
                }
              ]
            ]
          }
        }
      ]



exports.addUserNoLoginOffline = (req,res,next) => {
 
/////////////////////////////// send back to frontend the response with user infos and battlelog
        res
                    .status(200)
                    .send([ infoUser, battlelogExample ]);   

};


// exports.getBattles = async (req,res,next) => {
//     try {
//         const battles = await Battle.find().select('-__v');    
//         res.status(200).send(battles);
//     } catch (error) {
//         next(error);
//     }
// };
