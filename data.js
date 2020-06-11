var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada-acceso",
      "name": "Fachada-Acceso",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.007922548165229415,
        "pitch": -0.2559059857028121,
        "fov": 1.4963948999982235
      },
      "linkHotspots": [
        {
          "yaw": -0.032065119199318204,
          "pitch": 0.06413690839608677,
          "rotation": 0,
          "target": "1-recepcin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4532863180215507,
          "pitch": -0.0260371196637621,
          "title": "Mexicali #86",
          "text": "Oficinas en Renta, 6o Piso"
        }
      ]
    },
    {
      "id": "1-recepcin",
      "name": "Recepción de Oficina",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.015842625951147937,
        "pitch": 0.48015491173910974,
        "fov": 1.4963948999982235
      },
      "linkHotspots": [
        {
          "yaw": -0.8127169358665327,
          "pitch": 0.2302910405679448,
          "rotation": 0,
          "target": "2-ambiente1"
        },
        {
          "yaw": -2.3555385110927016,
          "pitch": 0.4367828128075075,
          "rotation": 0,
          "target": "4-bao"
        },
        {
          "yaw": 0.025881761986076057,
          "pitch": 0.6814792803806107,
          "rotation": 0,
          "target": "0-fachada-acceso"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.08938059027431322,
          "pitch": -0.12812062398631774,
          "title": "Acceso Directo",
          "text": "Elevador con llave de bloqueo"
        }
      ]
    },
    {
      "id": "2-ambiente1",
      "name": "Ambiente1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.07262342616874662,
        "pitch": 0.3878174287123457,
        "fov": 1.4963948999982235
      },
      "linkHotspots": [
        {
          "yaw": -0.669769934270354,
          "pitch": 0.2438919394472272,
          "rotation": 0,
          "target": "1-recepcin"
        },
        {
          "yaw": 0.19214631104077284,
          "pitch": 0.31056359298717595,
          "rotation": 0,
          "target": "3-ambiente2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2202612621094104,
          "pitch": -0.09086779390587552,
          "title": "Amplio Espacio de Trabajo",
          "text": "Área útil: 80 metros cuadrados"
        }
      ]
    },
    {
      "id": "3-ambiente2",
      "name": "Ambiente2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.2831869388766677,
        "pitch": 0.3350531526970464,
        "fov": 1.4963948999982235
      },
      "linkHotspots": [
        {
          "yaw": 0.2243931962935637,
          "pitch": 0.32734313875231535,
          "rotation": 0,
          "target": "2-ambiente1"
        },
        {
          "yaw": 1.9796900568435882,
          "pitch": 0.5111101633550916,
          "rotation": 0,
          "target": "4-bao"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0274004445474194,
          "pitch": 0.01126667175905105,
          "title": "Estacionamiento",
          "text": "Cuenta con un espacio&nbsp;"
        }
      ]
    },
    {
      "id": "4-bao",
      "name": "Baño",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.015842625951130174,
        "pitch": 0.4986224083444455,
        "fov": 1.4963948999982235
      },
      "linkHotspots": [
        {
          "yaw": -1.8962953118333203,
          "pitch": 0.6382634976497847,
          "rotation": 0,
          "target": "3-ambiente2"
        },
        {
          "yaw": 1.8961561909849518,
          "pitch": 1.0545092867863168,
          "rotation": 0,
          "target": "1-recepcin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.42928625573545176,
          "pitch": -0.10716356759404988,
          "title": "Baño privado",
          "text": "Baños comunes por piso (escaleras)"
        }
      ]
    }
  ],
  "name": "Mexicali86",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
