
(function (Scratch) {
  "use strict";

  class pmOperatorsExpansion {
    getInfo() {
      return {
        id: 'pmOperatorsExpansion',
        name: 'Operators Expansion',
        color1: '#59C059',
        color2: '#46B946',
        color3: '#389438',
        blocks: [
            {
                opcode: 'partOfRatio',
                text: '[PART] part of ratio [RATIO]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    PART: {
                        type: Scratch.ArgumentType.STRING,
                        menu: "part"
                    },
                    RATIO: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "1:2"
                    }
                }
            },
            {
                opcode: 'simplifyRatio',
                text: 'simplify ratio [RATIO]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    RATIO: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "1:2"
                    }
                }
            },
            {
                opcode: 'pi',
                text: 'π',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true
            },
            {
                opcode: 'euler',
                text: 'e',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true
            },
            {
                opcode: 'infinity',
                text: '∞',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true
            },
            {
                opcode: 'truncateNumber',
                text: 'truncate number [NUM]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    NUM: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "2.5"
                    }
                }
            },
            {
                opcode: 'isNumberMultipleOf',
                text: 'is [NUM] multiple of [MULTIPLE]?',
                blockType: Scratch.BlockType.BOOLEAN,
                disableMonitor: true,
                arguments: {
                    NUM: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "20"
                    },
                    MULTIPLE: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "10"
                    }
                }
            },
            {
                opcode: 'isInteger',
                text: 'is [NUM] an integer?',
                blockType: Scratch.BlockType.BOOLEAN,
                disableMonitor: true,
                arguments: {
                    NUM: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "0.5"
                    }
                }
            },
            {
                opcode: 'isPrime',
                text: 'is [NUM] a prime number?',
                blockType: Scratch.BlockType.BOOLEAN,
                disableMonitor: true,
                arguments: {
                    NUM: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "13"
                    }
                }
            },
            {
                opcode: 'isEven',
                text: 'is [NUM] even?',
                blockType: Scratch.BlockType.BOOLEAN,
                disableMonitor: true,
                arguments: {
                    NUM: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "4"
                    }
                }
            },
            {
                opcode: 'reverseChars',
                text: 'reverse [TEXT]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "Hello!"
                    }
                }
            },
            {
                opcode: 'orIfFalsey',
                text: '[ONE] or if falsey [TWO]',
                blockType: Scratch.BlockType.BOOLEAN,
                disableMonitor: true,
                arguments: {
                    ONE: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "a"
                    },
                    TWO: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "b"
                    }
                }
            },
            {
                opcode: 'ifIsTruthy',
                text: 'if [ONE] true then [TWO]',
                blockType: Scratch.BlockType.BOOLEAN,
                disableMonitor: true,
                arguments: {
                    ONE: {
                        type: Scratch.ArgumentType.BOOLEAN
                    },
                    TWO: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "perfect!"
                    }
                }
            },
            {
                opcode: 'shuffleChars',
                text: 'shuffle [TEXT]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "Hello!"
                    }
                }
            },
            {
                opcode: 'exactlyEqual',
                text: '[ONE] exactly equals [TWO]?',
                blockType: Scratch.BlockType.BOOLEAN,
                disableMonitor: true,
                arguments: {
                    ONE: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "a"
                    },
                    TWO: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "b"
                    }
                }
            },
            {
                opcode: 'betweenNumbers',
                text: 'is [NUM] between [MIN] and [MAX]?',
                blockType: Scratch.BlockType.BOOLEAN,
                disableMonitor: true,
                arguments: {
                    NUM: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 5
                    },
                    MIN: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0
                    },
                    MAX: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 10
                    }
                }
            },
            {
                opcode: 'evaluateMath',
                text: 'answer to [EQUATION]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    EQUATION: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "5 * 2"
                    }
                }
            },
            {
                opcode: 'setReplacer',
                text: 'set replacer [REPLACER] to [TEXT]',
                blockType: Scratch.BlockType.COMMAND,
                arguments: {
                    REPLACER: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "${replacer}"
                    },
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "world"
                    }
                }
            },
            {
                opcode: 'resetReplacers',
                text: 'reset replacers',
                blockType: Scratch.BlockType.COMMAND
            },
            {
                opcode: 'applyReplacers',
                text: 'apply replacers to [TEXT]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "Hello ${replacer}!"
                    }
                }
            },
            {
                opcode: 'textAfter',
                text: 'text after [TEXT] in [BASE]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "Hello"
                    },
                    BASE: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "Hello world!"
                    }
                }
            },
            {
                opcode: 'textBefore',
                text: 'text before [TEXT] in [BASE]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    TEXT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "world"
                    },
                    BASE: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "Hello world!"
                    }
                }
            },
            {
                opcode: 'shiftLeft',
                text: '[num1] << [num2]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    num1: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "1"
                    },
                    num2: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "5"
                    }
                }
            },
            {
                opcode: 'shiftRight',
                text: '[num1] >> [num2]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    num1: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "32"
                    },
                    num2: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "5"
                    }
                }
            },
            {
                opcode: 'binnaryAnd',
                text: '[num1] & [num2]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    num1: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "32"
                    },
                    num2: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "5"
                    }
                }
            },
            {
                opcode: 'binnaryOr',
                text: '[num1] | [num2]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    num1: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "7"
                    },
                    num2: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "8"
                    }
                }
            },
            {
                opcode: 'binnaryXor',
                text: '[num1] ^ [num2]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    num1: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "7"
                    },
                    num2: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "2"
                    }
                }
            },
            {
                opcode: 'binnaryNot',
                text: '~ [num1]',
                blockType: Scratch.BlockType.REPORTER,
                disableMonitor: true,
                arguments: {
                    num1: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "2"
                    }
                }
            }
        ],
        menus: {
            part: {
                acceptReporters: true,
                items: [
                    "first",
                    "last"
                ].map(item => ({ text: item, value: item }))
            },
        },
      };
    }
    reduce(numerator, denominator) {
        let gcd = function gcd(a, b) {
            return b ? gcd(b, a % b) : a;
        };
        gcd = gcd(numerator, denominator);
        return [numerator / gcd, denominator / gcd];
    }
    checkPrime(number) {
        number = Math.trunc(number);
        if (number <= 1) return false;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    // useful
    pi() {
        return Math.PI;
    }
    euler() {
        return Math.E;
    }
    infinity() {
        return Infinity;
    }

    partOfRatio(args) {
        const ratio = Scratch.Cast.toString(args.RATIO);
        const part = Scratch.Cast.toString(args.PART).toLowerCase();

        if (!ratio.includes(':')) return '';
        const split = ratio.split(':');

        const section = split[Number(part === 'last')];
        return Scratch.Cast.toNumber(section);
    }
    simplifyRatio(args) {
        const ratio = Scratch.Cast.toString(args.RATIO);
        if (!ratio.includes(':')) return '';
        const split = ratio.split(':');

        const first = Scratch.Cast.toNumber(split[0]);
        const last = Scratch.Cast.toNumber(split[1]);

        const reduced = this.reduce(first, last);

        return `${Scratch.Cast.toNumber(reduced[0])}:${Scratch.Cast.toNumber(reduced[1])}`;
    }

    truncateNumber(args) {
        const num = Scratch.Cast.toNumber(args.NUM);
        return Math.trunc(num);
    }

    isNumberMultipleOf(args) {
        const num = Scratch.Cast.toNumber(args.NUM);
        const mult = Scratch.Cast.toNumber(args.MULTIPLE);

        return (num % mult) === 0;
    }
    isInteger(args) {
        const num = Scratch.Cast.toNumber(args.NUM);
        return Math.trunc(num) === num;
    }
    isPrime(args) {
        const num = Scratch.Cast.toNumber(args.NUM);
        return this.checkPrime(num);
    }
    isEven(args) {
        const num = Scratch.Cast.toNumber(args.NUM);
        return num % 2 == 0;
    }

    evaluateMath(args) {
        const equation = Scratch.Cast.toString(args.EQUATION);
        // "" is undefined when evalutated
        if (equation.trim().length === 0) return 0;
        // evalueate
        let answer = 0;
        try {
            answer = MathJS.evaluate(equation);
        } catch {
            // syntax errors cause real errors
            answer = 0;
        }
        // multiline or semi-colon breaks create a ResultSet, we can get the last item in the set for that
        if (typeof answer === "object") {
            if ("entries" in answer) {
                const answers = answer.entries;
                if (answers.length === 0) return 0;
                const lastIdx = answers.length - 1;
                return Number(answers[lastIdx]);
            }
        }
        // Scratch.Cast.toNumber converts NaN to 0
        return Number(answer);
    }

    exactlyEqual(args) {
        // everyone requested this but watch literally no one use it :trollface:
        return args.ONE === args.TWO;
    }
    betweenNumbers(args) {
        const number = Scratch.Cast.toNumber(args.NUM);
        let min = Scratch.Cast.toNumber(args.MIN);
        let max = Scratch.Cast.toNumber(args.MAX);
        // check that max isnt less than min
        if (max < min) {
            const switchover = max;
            max = min;
            min = switchover;
        }
        return (number <= max) && (number >= min);
    }

    reverseChars(args) {
        const text = Scratch.Cast.toString(args.TEXT);
        const split = text.split('');
        return split.reverse().join('');
    }
    shuffleChars(args) {
        const text = Scratch.Cast.toString(args.TEXT);
        const split = text.split('');
        const shuffled = split.sort(() => Math.random() - 0.5);
        return shuffled.join('');
    }

    // join
    join4(args) {
        return Scratch.Cast.toString(args.STRING1)
            + Scratch.Cast.toString(args.STRING2)
            + Scratch.Cast.toString(args.STRING3)
            + Scratch.Cast.toString(args.STRING4);
    }
    join5(args) {
        return Scratch.Cast.toString(args.STRING1)
            + Scratch.Cast.toString(args.STRING2)
            + Scratch.Cast.toString(args.STRING3)
            + Scratch.Cast.toString(args.STRING4)
            + Scratch.Cast.toString(args.STRING5);
    }
    join6(args) {
        return Scratch.Cast.toString(args.STRING1)
            + Scratch.Cast.toString(args.STRING2)
            + Scratch.Cast.toString(args.STRING3)
            + Scratch.Cast.toString(args.STRING4)
            + Scratch.Cast.toString(args.STRING5)
            + Scratch.Cast.toString(args.STRING6);
    }
    join7(args) {
        return Scratch.Cast.toString(args.STRING1)
            + Scratch.Cast.toString(args.STRING2)
            + Scratch.Cast.toString(args.STRING3)
            + Scratch.Cast.toString(args.STRING4)
            + Scratch.Cast.toString(args.STRING5)
            + Scratch.Cast.toString(args.STRING6)
            + Scratch.Cast.toString(args.STRING7);
    }
    join8(args) {
        return Scratch.Cast.toString(args.STRING1)
            + Scratch.Cast.toString(args.STRING2)
            + Scratch.Cast.toString(args.STRING3)
            + Scratch.Cast.toString(args.STRING4)
            + Scratch.Cast.toString(args.STRING5)
            + Scratch.Cast.toString(args.STRING6)
            + Scratch.Cast.toString(args.STRING7)
            + Scratch.Cast.toString(args.STRING8);
    }
    join9(args) {
        return Scratch.Cast.toString(args.STRING1)
            + Scratch.Cast.toString(args.STRING2)
            + Scratch.Cast.toString(args.STRING3)
            + Scratch.Cast.toString(args.STRING4)
            + Scratch.Cast.toString(args.STRING5)
            + Scratch.Cast.toString(args.STRING6)
            + Scratch.Cast.toString(args.STRING7)
            + Scratch.Cast.toString(args.STRING8)
            + Scratch.Cast.toString(args.STRING9);
    }

    setReplacer(args) {
        const replacer = Scratch.Cast.toString(args.REPLACER);
        const text = Scratch.Cast.toString(args.TEXT);
        this.replacers[replacer] = text;
    }
    resetReplacers() {
        this.replacers = Object.create(null);
    }
    applyReplacers(args) {
        let text = Scratch.Cast.toString(args.TEXT);
        for (const replacer in this.replacers) {
            const replacementText = this.replacers[replacer];
            text = text.replaceAll(replacer, replacementText);
        }
        return text;
    }

    textAfter(args) {
        const text = Scratch.Cast.toString(args.TEXT);
        const base = Scratch.Cast.toString(args.BASE);
        const idx = base.indexOf(text);
        if (idx < 0) return '';
        return base.substring(idx + text.length);
    }
    textBefore(args) {
        const text = Scratch.Cast.toString(args.TEXT);
        const base = Scratch.Cast.toString(args.BASE);
        const idx = base.indexOf(text);
        if (idx < 0) return '';
        return base.substring(0, idx);
    }
  }

  Scratch.extensions.register(new pmOperatorsExpansion());
}) (Scratch);