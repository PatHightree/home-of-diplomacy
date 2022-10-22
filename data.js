var APP_DATA = {
  "scenes": [
    {
      "id": "0-start",
      "name": "Start",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.061341851179138374,
        "pitch": -0.46253641196886264,
        "fov": 1.469752086071679
      },
      "linkHotspots": [
        {
          "yaw": 0.7021304832086592,
          "pitch": -0.012377124890939228,
          "rotation": 0,
          "target": "2-front-door"
        },
        {
          "yaw": 1.5039715598348327,
          "pitch": 0.1306805316191788,
          "rotation": 0,
          "target": "1-parking"
        },
        {
          "yaw": 0.7270493113956604,
          "pitch": -0.635268037594928,
          "rotation": 0,
          "target": "18-balcony-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-parking",
      "name": "Parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -0.6366458420816947,
        "pitch": -0.23643283890865874,
        "fov": 1.469752086071679
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-front-door",
      "name": "Front door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.24292665309237194,
          "pitch": 0.039199037740081266,
          "rotation": 0,
          "target": "3-terrace"
        },
        {
          "yaw": 2.500945055153557,
          "pitch": 0.3245450301720165,
          "rotation": 0,
          "target": "0-start"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-terrace",
      "name": "Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2960112510747859,
          "pitch": 0.20656991784175105,
          "rotation": 0,
          "target": "2-front-door"
        },
        {
          "yaw": 2.6698335634858346,
          "pitch": 0.15222896750916703,
          "rotation": 0,
          "target": "4-entrance"
        },
        {
          "yaw": 1.5972426733010217,
          "pitch": -0.9606252174771353,
          "rotation": 0,
          "target": "17-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.331925163918429,
          "pitch": 0.3620740576183099,
          "rotation": 0,
          "target": "3-terrace"
        },
        {
          "yaw": 0.07126206587721562,
          "pitch": 0.07934907376793632,
          "rotation": 0,
          "target": "5-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sitting-room",
      "name": "Sitting room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.370907492621418,
        "pitch": 0.20764156591589078,
        "fov": 1.469752086071679
      },
      "linkHotspots": [
        {
          "yaw": 0.9221380721361427,
          "pitch": 0.5389438113407259,
          "rotation": 0,
          "target": "4-entrance"
        },
        {
          "yaw": -0.6940478398489489,
          "pitch": -0.1226294375447825,
          "rotation": 0,
          "target": "6-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0430450483683575,
          "pitch": 0.5202441129906212,
          "rotation": 0,
          "target": "5-sitting-room"
        },
        {
          "yaw": -2.929742742859892,
          "pitch": -0.23205308573313843,
          "rotation": 0,
          "target": "7-appartment-1"
        },
        {
          "yaw": 0.008081007860369027,
          "pitch": 0.44049246292463273,
          "rotation": 0,
          "target": "8-stairs-bottom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-appartment-1",
      "name": "Appartment 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7477065479824443,
          "pitch": 0.42984718655052845,
          "rotation": 0,
          "target": "6-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-stairs-bottom",
      "name": "Stairs bottom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.14971877737933248,
          "pitch": -0.459979288863531,
          "rotation": 0,
          "target": "9-stairs-middle"
        },
        {
          "yaw": -1.5036264911451482,
          "pitch": 0.2679742577237203,
          "rotation": 0,
          "target": "4-entrance"
        },
        {
          "yaw": -1.4367748173914539,
          "pitch": -0.10842936137046522,
          "rotation": 0,
          "target": "7-appartment-1"
        },
        {
          "yaw": -1.4983974125705721,
          "pitch": 0.6028821643581637,
          "rotation": 0,
          "target": "6-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-stairs-middle",
      "name": "Stairs middle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.28206654912326456,
          "pitch": 0.6736351423794247,
          "rotation": 0,
          "target": "8-stairs-bottom"
        },
        {
          "yaw": 0.12225555866186255,
          "pitch": 0.14356115517828272,
          "rotation": 0,
          "target": "10-stairs-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-stairs-top",
      "name": "Stairs top",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.9953833965455434,
        "pitch": 0.21268255157787763,
        "fov": 1.469752086071679
      },
      "linkHotspots": [
        {
          "yaw": -3.0155511672350706,
          "pitch": 0.4119521016676231,
          "rotation": 0,
          "target": "14-appartment-3"
        },
        {
          "yaw": -1.365364282627791,
          "pitch": 0.4250976323324327,
          "rotation": 0,
          "target": "9-stairs-middle"
        },
        {
          "yaw": 0.1186250365010082,
          "pitch": 0.5270267439387837,
          "rotation": 0,
          "target": "11-appartment-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-appartment-2",
      "name": "Appartment 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -0.5650028317195712,
        "pitch": 0.07443303571117355,
        "fov": 1.469752086071679
      },
      "linkHotspots": [
        {
          "yaw": -2.838520998935074,
          "pitch": 0.49633234244442903,
          "rotation": 0,
          "target": "10-stairs-top"
        },
        {
          "yaw": -0.9605513159671073,
          "pitch": 0.5398894117500355,
          "rotation": 0,
          "target": "13-sitting-room"
        },
        {
          "yaw": 0.771186922008054,
          "pitch": 0.4774582770283775,
          "rotation": 0,
          "target": "12-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.14696276402286657,
        "pitch": 0.438894805386715,
        "fov": 1.469752086071679
      },
      "linkHotspots": [
        {
          "yaw": -2.304422172535112,
          "pitch": 0.5733814311746119,
          "rotation": 0,
          "target": "11-appartment-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-sitting-room",
      "name": "Sitting room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7863096060090182,
          "pitch": 0.6409235911169517,
          "rotation": 0,
          "target": "11-appartment-2"
        },
        {
          "yaw": -3.045270162732077,
          "pitch": 0.4605871045699388,
          "rotation": 0,
          "target": "10-stairs-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-appartment-3",
      "name": "Appartment 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2315312726487573,
          "pitch": 0.614868247690481,
          "rotation": 0,
          "target": "15-bedroom-3"
        },
        {
          "yaw": -0.35826732269108597,
          "pitch": 0.41994928981175406,
          "rotation": 0,
          "target": "16-living-room-3"
        },
        {
          "yaw": 2.6088720210537497,
          "pitch": 0.3447007395756465,
          "rotation": 0,
          "target": "10-stairs-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3224641632501353,
          "pitch": 0.5811762939210627,
          "rotation": 0,
          "target": "14-appartment-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-living-room-3",
      "name": "Living room 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.996210759924752,
          "pitch": 0.534032164796832,
          "rotation": 0,
          "target": "14-appartment-3"
        },
        {
          "yaw": 1.8634741283564313,
          "pitch": 0.1728820119338934,
          "rotation": 0,
          "target": "10-stairs-top"
        },
        {
          "yaw": -1.305010474779671,
          "pitch": 0.43487622158750305,
          "rotation": 0,
          "target": "17-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4911014449814495,
          "pitch": 0.5444453868048065,
          "rotation": 0,
          "target": "18-balcony-side"
        },
        {
          "yaw": -2.82707093447803,
          "pitch": 0.466384619303831,
          "rotation": 0,
          "target": "16-living-room-3"
        },
        {
          "yaw": -0.5828492901850666,
          "pitch": 0.9791501782204701,
          "rotation": 0,
          "target": "3-terrace"
        },
        {
          "yaw": -0.004734865566682345,
          "pitch": 0.7571952183817352,
          "rotation": 0,
          "target": "1-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-balcony-side",
      "name": "Balcony side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5538864380850068,
          "pitch": 0.6856566142171268,
          "rotation": 0,
          "target": "0-start"
        },
        {
          "yaw": 2.9721424163512555,
          "pitch": 0.5412489151777944,
          "rotation": 0,
          "target": "17-balcony"
        },
        {
          "yaw": -2.6456779284731056,
          "pitch": 0.973141589726584,
          "rotation": 0,
          "target": "3-terrace"
        },
        {
          "yaw": -1.8321306415486163,
          "pitch": 0.7125691618641596,
          "rotation": 0,
          "target": "1-parking"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Home of Diplomacy",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
