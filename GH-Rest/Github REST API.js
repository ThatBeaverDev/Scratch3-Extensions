(function(Scratch) {
    'use strict';

    const icon =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTgiIGhlaWdodD0iOTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OC44NTQgMEMyMS44MzkgMCAwIDIyIDAgNDkuMjE3YzAgMjEuNzU2IDEzLjk5MyA0MC4xNzIgMzMuNDA1IDQ2LjY5IDIuNDI3LjQ5IDMuMzE2LTEuMDU5IDMuMzE2LTIuMzYyIDAtMS4xNDEtLjA4LTUuMDUyLS4wOC05LjEyNy0xMy41OSAyLjkzNC0xNi40Mi01Ljg2Ny0xNi40Mi01Ljg2Ny0yLjE4NC01LjcwNC01LjQyLTcuMTctNS40Mi03LjE3LTQuNDQ4LTMuMDE1LjMyNC0zLjAxNS4zMjQtMy4wMTUgNC45MzQuMzI2IDcuNTIzIDUuMDUyIDcuNTIzIDUuMDUyIDQuMzY3IDcuNDk2IDExLjQwNCA1LjM3OCAxNC4yMzUgNC4wNzQuNDA0LTMuMTc4IDEuNjk5LTUuMzc4IDMuMDc0LTYuNi0xMC44MzktMS4xNDEtMjIuMjQzLTUuMzc4LTIyLjI0My0yNC4yODMgMC01LjM3OCAxLjk0LTkuNzc4IDUuMDE0LTEzLjItLjQ4NS0xLjIyMi0yLjE4NC02LjI3NS40ODYtMTMuMDM4IDAgMCA0LjEyNS0xLjMwNCAxMy40MjYgNS4wNTJhNDYuOTcgNDYuOTcgMCAwIDEgMTIuMjE0LTEuNjNjNC4xMjUgMCA4LjMzLjU3MSAxMi4yMTMgMS42MyA5LjMwMi02LjM1NiAxMy40MjctNS4wNTIgMTMuNDI3LTUuMDUyIDIuNjcgNi43NjMuOTcgMTEuODE2LjQ4NSAxMy4wMzggMy4xNTUgMy40MjIgNS4wMTUgNy44MjIgNS4wMTUgMTMuMiAwIDE4LjkwNS0xMS40MDQgMjMuMDYtMjIuMzI0IDI0LjI4MyAxLjc4IDEuNTQ4IDMuMzE2IDQuNDgxIDMuMzE2IDkuMTI2IDAgNi42LS4wOCAxMS44OTctLjA4IDEzLjUyNiAwIDEuMzA0Ljg5IDIuODUzIDMuMzE2IDIuMzY0IDE5LjQxMi02LjUyIDMzLjQwNS0yNC45MzUgMzMuNDA1LTQ2LjY5MUM5Ny43MDcgMjIgNzUuNzg4IDAgNDguODU0IDB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+";

    localStorage.setItem('repo', 'Not Set')
    localStorage.setItem('owner', 'Not Set')
    localStorage.setItem('branch', 'Not Set')


    class GhRstAPI {
      getInfo () {
        return {
          id: 'GhRstAPI',
          name: 'Github Rest API',
          menuIconURI: icon,
          blockIconURI: icon,
          "color1": "#252627",
          "color2": "#000000",
          blocks: [
            {
                opcode: 'SetRepo',
                blockType: Scratch.BlockType.COMMAND,
                text: 'Set Repo To: [Owner] / [Repo], In Branch [Branch]',
                arguments: {
                  Owner: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'TeknikSpace'
                        },
                  Repo: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'TNKS-OS'
                        },
                  Branch: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Main'
                        }
                }
              },
              {
                opcode: 'SetPat',
                blockType: Scratch.BlockType.COMMAND,
                text: 'Set Personal Access Token To [PAT]',
                arguments: {
                  PAT: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "ghp_-----------------------------------"
                        },
                }
              },
              {
                opcode: 'CurrentRepo',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Current Repository',
              },
              {
                opcode: 'CurrentOwner',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Repository Owner',
              },
              {
                opcode: 'CurrentBranch',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Repository Branch',
              },
              {
                opcode: 'CurrentPAT',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Current Access Token',
              },
              {
                opcode: 'GetRepoData',
                blockType: Scratch.BlockType.REPORTER,
                text: "Get Current Repository's [Endpoint]",
                disableMonitor: true,
                arguments: {
                  Endpoint: {
                    type: Scratch.ArgumentType.STRING,
                    menu: "data",
                  }
                }
              },
              {
                opcode: 'GetRemainingAllowance',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Get Remaining Request Allowance',
                disableMonitor: true,
              },
              {
                opcode: 'GetUserDetails',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Get Details Of User [USER]',
                disableMonitor: true,
                arguments: {
                  USER: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "TeknikSpace"
                  }
                }
              },
              {
                opcode: 'loadjson',
                blockType: Scratch.BlockType.COMMAND,
                text: 'Load Json Extension',
              },
              {
                opcode: 'RawRequest',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Send Direct Request to [APIROOT]',
                disableMonitor: true,
                arguments: {
                  APIROOT: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "/repos/TeknikSpace/TNKS-OS/commits"
                  }
                }
              },
          ],
          menus: {
            data: {
              acceptReporters: true,
              items: [
                {
                  text: "Commits",
                  value: "/commits",
                },
                {
                  text: "Issues",
                  value: "/issues",
                },
                {
                  text: "Pull Requests",
                  value: "/pulls",
                },
              ],
            },
          },
        };
      }
      SetRepo(args) {
        localStorage.setItem('repo', args.Repo); // Adjusted argument names
        localStorage.setItem('owner', args.Owner);
        localStorage.setItem('branch', args.Branch);
      }
      SetPat(args) {
        localStorage.setItem('accesstoken', args.PAT);
      }

      CurrentRepo(args) {
        return localStorage.getItem('repo');
      }
    
      CurrentOwner(args) {
        return localStorage.getItem('owner');
      }
    
      CurrentBranch(args) {
        return localStorage.getItem('branch');
      }
      CurrentPAT(args) {
        return localStorage.getItem('accesstoken');
      }
      GetRepoData(args) {
        var Repo = localStorage.getItem('repo');
        var Owner = localStorage.getItem('owner');
        var AccessToken = localStorage.getItem('accesstoken');
        var METHOD = args.Endpoint;
      
        var URL = 'https://api.github.com/repos/' + Owner + '/' + Repo + METHOD;

        var AuthHeader = 'token ' + AccessToken;
      
        return fetch(URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthHeader,
          },
        })
        .then(response => {
          console.log('Response status:', response.status);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Convert the data to a formatted JSON string
          const formattedData = JSON.stringify(data, null, 2);
          return formattedData;
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          throw error;
        });
      }
      GetRemainingAllowance(args) {
        var AccessToken = localStorage.getItem('accesstoken');
        var AuthHeader = 'token ' + AccessToken;

        return fetch('https://api.github.com/rate_limit', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthHeader,
          },
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Convert the data to a formatted JSON string
          const formattedData = JSON.stringify(data, null, 2);
          return formattedData;
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          throw error;
        });
      }
      GetUserDetails(args) {
        var AccessToken = localStorage.getItem('accesstoken');
        var AuthHeader = 'token ' + AccessToken;

        var URL = 'https://api.github.com/users/' + args.USER

        return fetch(URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthHeader,
          },
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Convert the data to a formatted JSON string
          const formattedData = JSON.stringify(data, null, 2);
          return formattedData;
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          throw error;
        });
      }
      async loadjson(args) {

        var URL = 'https://extensions.turbowarp.org/Skyhigh173/json.js'

        if (await vm.securityManager.canLoadExtensionFromProject(URL)) {
          vm.extensionManager.loadExtensionURL(URL);
        }
      }

      RawRequest(args) {
        var AccessToken = localStorage.getItem('accesstoken');
        var AuthHeader = 'token ' + AccessToken;

        var URL = 'https://api.github.com' + args.APIROOT

        return fetch(URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': AuthHeader,
          },
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Convert the data to a formatted JSON string
          const formattedData = JSON.stringify(data, null, 2);
          return formattedData;
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          throw error;
        });
      }
      
      
    }
  
    Scratch.extensions.register(new GhRstAPI());
  })(Scratch);