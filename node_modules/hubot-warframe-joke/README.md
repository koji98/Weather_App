# Hubot Warframe Jokes
[![Stories in Ready](https://badge.waffle.io/aliasfalse/hubot-warframe-joke.png?label=ready&title=Ready)](https://waffle.io/aliasfalse/hubot-warframe-joke)
[![Contact me on Discord](https://img.shields.io/badge/discord-Tobiah%238452-7289DA.svg)](https://discord.me/Tenno)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://choosealicense.com/licenses/mit/)


Let your Hubot's inner cephalon out with these Warframe jokes.


##Configuration
| Key | Description | Default |
|---------------| -------------| --------------|
|`HUBOT_ALLOW_DIRTY_JOKES` | Whether or not to allow dirty jokes from your cephalon | `false`

## Usage

### Installation

`
npm install --save hubot-warframe-joke
`

Add `hubot-warframe-joke` to your `external-scripts.json` file.

```json
[
  "hubot-warframe-joke"
]
```

### Commands
|Command | Listener ID | Result|
|--- | --- |
|`joke` |`/joke/`| Tells a joke |
|`dirtyjoke` | `/dirtyjoke/` | Tells a dirty joke (Can be turned off)|
| `hug` | `/hug/` | sends the operator a hug |

### Sample interaction
```
user1> hubot joke
hubot> - Excalibur. Cut with the grain.


user1> hubot dirtyjoke
hubot> - Rhino. Protection first, charging later.
```
