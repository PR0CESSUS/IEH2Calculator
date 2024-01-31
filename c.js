var lz4 = require("lz4js");

const str = `[
    {
        "kind": 160,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 250000
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 1
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 156,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 250000
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 1
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 158,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 300000
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 1
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 150,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.2099749594926834,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 750
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 58,
                "effectValue": 11,
                "level": 10
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.21,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 77,
                "effectValue": 0.55,
                "level": 10
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20969468355178833,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 148,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20981892943382263,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 0,
        "optionEffects": [
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 0
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 0
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 0,
        "optionEffects": [
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 0
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 0
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 0,
        "optionEffects": [
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 0
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 0
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 0,
        "optionEffects": [
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 0
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 0
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 149,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 1000
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 151,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 1500
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 157,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 500000
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 159,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 0,
        "optionEffects": [
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 0
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 0
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 0,
        "optionEffects": [
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 0
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 0
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 0,
        "optionEffects": [
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 0
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 0
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 0,
        "optionEffects": [
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 0
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 0
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 147,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 1000
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 154,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 1000
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 152,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 1000
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 153,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 30350
            },
            {
                "kind": 1,
                "effectValue": 500
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 155,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 500000
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 1
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 162,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 161,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 161,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 161,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.2097141444683075,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 161,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 161,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 161,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20969858765602112,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 161,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 161,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 161,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 161,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.209711492061615,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 161,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 161,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 161,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 161,
        "optionEffects": [
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            },
            {
                "kind": 125,
                "effectValue": 0.20999999344348907,
                "level": 5
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 35700
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 15
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 1.5
            },
            {
                "kind": 6,
                "effectValue": 150
            }
        ]
    },
    {
        "kind": 0,
        "optionEffects": [
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 0
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 0
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 0,
        "optionEffects": [
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 0
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 0
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 0,
        "optionEffects": [
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 0
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 0
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    },
    {
        "kind": 0,
        "optionEffects": [
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            },
            {
                "kind": 0,
                "effectValue": 0,
                "level": 0
            }
        ],
        "forgeEffects": [
            {
                "kind": 0,
                "effectValue": 0
            },
            {
                "kind": 1,
                "effectValue": 0
            },
            {
                "kind": 2,
                "effectValue": 0
            },
            {
                "kind": 3,
                "effectValue": 0
            },
            {
                "kind": 4,
                "effectValue": 0
            },
            {
                "kind": 5,
                "effectValue": 0
            },
            {
                "kind": 6,
                "effectValue": 0
            }
        ]
    }
]`;

// console.log("initial len", str.length);
let buffer = new Buffer(str);
let compressed = lz4.compress(buffer);

console.log(compressed);
// let decoder = new TextDecoder();
// let y = brotli.decompress(x);

console.log();
// let decoded = decoder.decode(y);
// console.log(decoded);
