export type SpeedrunGameJam = {
  "version": "0.1.0",
  "name": "speedrun_game_jam",
  "instructions": [
    {
      "name": "initGameStateForPlayer",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "gameState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateGameState",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "gameState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "ore",
          "type": "u16"
        },
        {
          "name": "crystal",
          "type": "u16"
        },
        {
          "name": "platinum",
          "type": "u16"
        }
      ]
    },
    {
      "name": "reset",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "gameState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "gameState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "ore",
            "type": "u16"
          },
          {
            "name": "crystal",
            "type": "u16"
          },
          {
            "name": "platinum",
            "type": "u16"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    }
  ]
};

export const IDL: SpeedrunGameJam = {
  "version": "0.1.0",
  "name": "speedrun_game_jam",
  "instructions": [
    {
      "name": "initGameStateForPlayer",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "gameState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateGameState",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "gameState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "ore",
          "type": "u16"
        },
        {
          "name": "crystal",
          "type": "u16"
        },
        {
          "name": "platinum",
          "type": "u16"
        }
      ]
    },
    {
      "name": "reset",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "gameState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "gameState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "ore",
            "type": "u16"
          },
          {
            "name": "crystal",
            "type": "u16"
          },
          {
            "name": "platinum",
            "type": "u16"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    }
  ]
};
