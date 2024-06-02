
(function (Scratch) {
  "use strict";

  class pmEventsExpansion {
    getInfo() {
      return {
        id: 'pmEventsExpansion',
        name: 'Events Expansion',
        color1: '#FFBF00',
        color2: '#E6AC00',
        color3: '#CC9900',
        blocks: [
            {
                opcode: 'everyOtherFrame',
                text: 'every other frame',
                blockType: Scratch.BlockType.EVENT,
                isEdgeActivated: false
            },
            {
                opcode: 'neverr',
                text: 'never',
                blockType: Scratch.BlockType.EVENT,
                isEdgeActivated: false
            },
            {
                opcode: 'whenSpriteClicked',
                text: 'when [SPRITE] clicked',
                blockType: Scratch.BlockType.EVENT,
                isEdgeActivated: false,
                arguments: {
                    SPRITE: {
                        type: Scratch.ArgumentType.STRING,
                        menu: "spriteName"
                    }
                }
            },
            {
                opcode: 'sendWithData',
                text: 'broadcast [BROADCAST] with data [DATA]',
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    BROADCAST: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "your not supposed to see this?"
                    },
                    DATA: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "abc"
                    }
                }
            },
            {
                opcode: 'receivedData',
                text: 'when I receive [BROADCAST] with data',
                blockType: Scratch.BlockType.EVENT,
                isEdgeActivated: false,
                arguments: {
                    BROADCAST: {
                        type: Scratch.ArgumentType.STRING,
                        menu: "broadcastMenu"
                    }
                }
            },
            {
                opcode: 'isBroadcastReceived',
                text: 'is message [BROADCAST] received?',
                blockType: Scratch.BlockType.BOOLEAN,
                hideFromPalette: true,
                arguments: {
                    BROADCAST: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "your not supposed to see this?"
                    }
                }
            },
            {
                opcode: 'recievedDataReporter',
                text: 'recieved data',
                blockType: Scratch.BlockType.REPORTER,
                allowDropAnywhere: true,
                disableMonitor: true
            },
            {
                opcode: 'broadcastToSprite',
                text: 'broadcast [BROADCAST] to [SPRITE]',
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    BROADCAST: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "your not supposed to see this?"
                    },
                    SPRITE: {
                        type: Scratch.ArgumentType.STRING,
                        menu: "spriteName"
                    }
                }
            },
            {
                opcode: 'broadcastFunction',
                text: 'broadcast [BROADCAST] and wait',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                allowDropAnywhere: true,
                arguments: {
                    BROADCAST: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "your not supposed to see this?"
                    }
                }
            },
            {
                opcode: 'returnFromBroadcastFunc',
                text: 'return [VALUE]',
                blockType: Scratch.BlockType.COMMAND,
                isTerminal: true,
                disableMonitor: true,
                arguments: {
                    VALUE: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "1"
                    }
                }
            },
            {
                opcode: 'broadcastThreadCount',
                text: 'broadcast [BROADCAST] and get # of blocks started',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true
            },
            {
                opcode: 'broadcastFunctionArgs',
                text: 'broadcast [BROADCAST] with data [ARGS] and wait',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                allowDropAnywhere: true,
                arguments: {
                    BROADCAST: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "your not supposed to see this?"
                    },
                    ARGS: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "abc"
                    }
                }
            },
        ],
        menus: {
            spriteName: "_spriteName",
            broadcastMenu: "_broadcastMenu"
        }
      };
    }

        // menus
//        _spriteId() {
//            const emptyMenu = [{ text: '', value: '' }];
//            const menu = [];
//            for (const target of this.runtime.targets) {
//                if (!target.isOriginal) continue;
//                if (target.isStage) {
//                    menu.push({
//                        text: "stage",
//                        value: target.id
//                    });
//                    continue;
//                }
//                menu.push({
//                    text: target.sprite.name,
//                    value: target.id
//                });
//            }
//            if (menu.length <= 0) return emptyMenu;
//            return menu;
//        }
//        _spriteName() {
//           const emptyMenu = [{ text: '', value: '' }];
//            const menu = [];
//            for (const target of this.runtime.targets) {
//                if (!target.isOriginal) continue;
//                if (target.isStage) {
//                    menu.push({
//                        text: "stage",
//                        value: "_stage_"
//                    });
//                    continue;
//                }
//                menu.push({
//                    text: target.sprite.name,
//                    value: target.sprite.name
//                });
//            }
//           if (menu.length <= 0) return emptyMenu;
//       return menu;
//     }
//       _broadcastMenu() {
//          const emptyMenu = [{ text: '', value: '' }];
//           const menu = [];
//           for (const target of this.runtime.targets) {
//               if (!target.isOriginal) continue;
//               if (target.isStage) {
//                   menu.push({
//                        text: "stage",
//                        value: target.id
//                    });
//                    continue;
//                }
//                menu.push({
//                    text: target.sprite.name,
//                    value: target.id
//                });
//            }
//            if (menu.length <= 0) return emptyMenu;
//            return menu;
//        }


    // blocks
    sendWithData(args, util) {
        const broadcast = scratch.cast.toString(args.BROADCAST);
        const data = scratch.cast.toString(args.DATA);
        const broadcastVar = util.runtime.getTargetForStage().lookupBroadcastMsg("", broadcast);
        if (broadcastVar) broadcastVar.isSent = true;
        
        const threads = util.startHats("event_whenbroadcastreceived", {
            BROADCAST_OPTION: broadcast
        });
        for (const thread of threads) {
            thread.__evex_recievedDataa = data;
        }
    }
    broadcastToSprite(args, util) {
        const broadcast = scratch.cast.toString(args.BROADCAST);
        const broadcastVar = util.runtime.getTargetForStage().lookupBroadcastMsg("", broadcast);
        if (broadcastVar) broadcastVar.isSent = true;

        const sprite = scratch.cast.toString(args.SPRITE);
        const target = sprite === "_stage_" ?
            this.runtime.getTargetForStage()
            : this.runtime.getSpriteTargetByName(sprite);
        util.startHats("event_whenbroadcastreceived", {
            BROADCAST_OPTION: broadcast
        }, target);
    }
    broadcastThreadCount(args, util) {
        const broadcast = scratch.cast.toString(args.BROADCAST);
        const broadcastVar = util.runtime.getTargetForStage().lookupBroadcastMsg("", broadcast);
        if (broadcastVar) broadcastVar.isSent = true;

        const threads = util.startHats("event_whenbroadcastreceived", {
            BROADCAST_OPTION: broadcast
        });
        return threads.length;
    }
    recievedDataReporter(_, util) {
        return util.thread.__evex_recievedDataa;
    }
    returnFromBroadcastFunc(args, util) {
        util.thread.__evex_returnDataa = args.VALUE;
    }
    isBroadcastReceived(args, util) {
        const broadcast = scratch.cast.toString(args.BROADCAST);
        const broadcastVar = util.runtime.getTargetForStage().lookupBroadcastMsg("", broadcast);
        return scratch.cast.toBoolean(broadcastVar && broadcastVar.isSent);
    }
    broadcastFunction() {
        return; // compiler block
    }
    broadcastFunctionArgs() {
        return; // compiler block
    }
  }

  Scratch.extensions.register(new pmEventsExpansion());
}) (Scratch);