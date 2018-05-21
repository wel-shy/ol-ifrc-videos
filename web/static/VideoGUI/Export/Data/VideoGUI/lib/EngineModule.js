var engineModule ={
    "rootNarrativeObjectId": "no:24",
    "narrativeObjectViews": {
        "no:29": {
            "position": {
                "x": 307.37832512973023,
                "y": 306.69691468500446
            },
            "width": 160,
            "height": 90,
            "thumbnail": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/VideoGUI/Thumbnails/YouthEnd.mp4.png",
            "flowPackageUrl": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/FinalVideos/YouthEnd.mp4"
        },
        "no:30": {
            "position": {
                "x": 312.5814192363591,
                "y": 33.777285145305086
            },
            "width": 160,
            "height": 90,
            "thumbnail": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/VideoGUI/Thumbnails/SanitationEnd.mp4.png",
            "flowPackageUrl": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/FinalVideos/SanitationEnd.mp4"
        },
        "no:31": {
            "position": {
                "x": 317.4549840495681,
                "y": -272.8410505583268
            },
            "width": 160,
            "height": 90,
            "thumbnail": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/VideoGUI/Thumbnails/W10FloodFinal.mp4.png",
            "flowPackageUrl": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/FinalVideos/W10FloodFinal.mp4"
        },
        "no:32": {
            "position": {
                "x": -370.04718390630956,
                "y": 32.04292044309523
            },
            "width": 160,
            "height": 90,
            "thumbnail": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/VideoGUI/Thumbnails/ChoiceInfo.mp4.png",
            "flowPackageUrl": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/FinalVideos/ChoiceInfo.mp4"
        },
        "no:33": {
            "position": {
                "x": -105.28098340797737,
                "y": 35.373960574479156
            },
            "width": 160,
            "height": 90,
            "thumbnail": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/VideoGUI/Thumbnails/ButtonSection.mp4.png",
            "flowPackageUrl": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/FinalVideos/ButtonSection.mp4"
        },
        "no:24": {
            "position": {
                "x": -1272.4896348259986,
                "y": 128.6480323041123
            },
            "width": 160,
            "height": 90,
            "thumbnail": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/VideoGUI/Thumbnails/NewOneEdited.mp4.png",
            "flowPackageUrl": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/FinalVideos/NewOneEdited.mp4"
        },
        "no:25": {
            "position": {
                "x": -822.5527315844972,
                "y": 301.8980475081502
            },
            "width": 160,
            "height": 90,
            "thumbnail": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/VideoGUI/Thumbnails/OlderPeoplePartOne.mp4.png",
            "flowPackageUrl": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/FinalVideos/OlderPeoplePartOne.mp4"
        },
        "no:26": {
            "position": {
                "x": -813.3428854493615,
                "y": 118.05841970300537
            },
            "width": 160,
            "height": 90,
            "thumbnail": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/VideoGUI/Thumbnails/YouthPartOne.mp4.png",
            "flowPackageUrl": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/FinalVideos/YouthPartOne.mp4"
        },
        "no:27": {
            "position": {
                "x": -791.45470838076,
                "y": -265.4335160525286
            },
            "width": 160,
            "height": 90,
            "thumbnail": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/VideoGUI/Thumbnails/MenPartOne.mp4.png",
            "flowPackageUrl": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/FinalVideos/MenPartOne.mp4"
        },
        "no:28": {
            "position": {
                "x": -806.4047147901947,
                "y": -70.10599393997916
            },
            "width": 160,
            "height": 90,
            "thumbnail": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/VideoGUI/Thumbnails/WomenPartOne.mp4.png",
            "flowPackageUrl": "/Users/jameshodge/Documents/RedCross FilmWorkshop/Final System/FinalVideos/WomenPartOne.mp4"
        }
    },
    "ontology": {
        "left": {}
    },
    "functions": {
        "Output Selection": {
            "Default": "(wc, no, defaultOutputID, outputIDs) => { \n\treturn defaultOutputID; \n}",
            "storyArch": "(wc, no, defaultOutputID, outputIDs) => { \n\tswitch (userVideo){\n\t    \n\t    case 'child':\n\t       return outputIDs[1]\n\t        break\n\t        \n\t   case 'male':\n\t       return outputIDs[3]\n\t       break\n\t   case 'female':\n\t       return outputIDs[2]\n\t       break\n\t       \n\t   case 'older-people':\n\t      return outputIDs[0]\n\t       break\n\t    \n\t    \n\t}\n\t    \n\treturn defaultOutputID; \n}",
            "userSelection": "(wc, no, defaultOutputID, outputIDs) => { \n\t$('.decision-buttons').show();\n\n\treturn defaultOutputID; \n}",
            "nextSteps": "(wc, no, defaultOutputID, outputIDs) => { \n\tswitch (userNextChoice){\n\t    case 'flood':\n\t       return outputIDs[0]\n\t        break\n\t   case 'waste':\n\t       return outputIDs[2]\n\t       break\n\t   case 'sanitation':\n\t       return outputIDs[1]\n\t       break\n\t}\n\treturn defaultOutputID; \n}"
        },
        "Group Selection": {
            "Default": "(groupNOs, wc) => { \n\treturn groupNOs[0] \n}"
        },
        "Layer Selection": {
            "Default": "(master, others, wc) => { \n\treturn [master, ...others];\n}"
        },
        "Interaction": {
            "Default": "(wc, interact, data) => {\n\tswitch (interact.type)\n\t{\n\t\tcase 'start':\n\t\t\tbreak;\n\t\tcase 'end':\n\t\t\twc.setInteractionComplete(interact.id);\n\t\t\tbreak;\n\t}\n}",
            "showButtons": "(wc, interact, data) => {\n\tswitch (interact.type)\n\t{\n\t\tcase 'start':\n\t\t    setVisible('user-selection', true)\n\t\t\tbreak;\n\t\tcase 'end':\n\t\t    setVisible('user-selection', false)\n\t\t\twc.setInteractionComplete(interact.id);\n\t\t\tbreak;\n\t}\n}",
            "showTemp": "(wc, interact, data) => {\n\tswitch (interact.type)\n\t{\n\t\tcase 'start':\n\t\t    SetVisible('tempTimbut', true)\n\t\t\tbreak;\n\t\tcase 'end':\n\t\t    SetVisible('tempTimbut', false)\n\t\t\twc.setInteractionComplete(interact.id);\n\t\t\tbreak;\n\t}\n}",
            "showTempHere": "(wc, interact, data) => {\n\tswitch (interact.type)\n\t{\n\t\tcase 'start':\n\t\t    SetVisible('tempHere', true)\n\t\t\tbreak;\n\t\tcase 'end':\n\t\t    SetVisible('tempHere', false)\n\t\t\twc.setInteractionComplete(interact.id);\n\t\t\tbreak;\n\t}\n}",
            "showFloodWarning": "(wc, interact, data) => {\n\tswitch (interact.type)\n\t{\n\t\tcase 'start':\n\t\t    SetVisible('flood-risk', true)\n\t\t\tbreak;\n\t\tcase 'end':\n\t\t    SetVisible('flood-risk', false)\n\t\t\twc.setInteractionComplete(interact.id);\n\t\t\tbreak;\n\t}\n}",
            "text2": "(wc, interact, data) => {\n\tswitch (interact.type)\n\t{\n\t\tcase 'start':\n\t\t    SetVisible('text-2', true)\n\t\t\tbreak;\n\t\tcase 'end':\n\t\t    SetVisible('text-2', false)\n\t\t\twc.setInteractionComplete(interact.id);\n\t\t\tbreak;\n\t}\n}",
            "text3": "(wc, interact, data) => {\n\tswitch (interact.type)\n\t{\n\t\tcase 'start':\n\t\t    SetVisible('text-3', true)\n\t\t\tbreak;\n\t\tcase 'end':\n\t\t    SetVisible('text-3', false)\n\t\t\twc.setInteractionComplete(interact.id);\n\t\t\tbreak;\n\t}\n}",
            "text1a": "(wc, interact, data) => {\n\tswitch (interact.type)\n\t{\n\t\tcase 'start':\n\t\t    SetVisible('text-1a', true)\n\t\t\tbreak;\n\t\tcase 'end':\n\t\t    SetVisible('text-1a', false)\n\t\t\twc.setInteractionComplete(interact.id);\n\t\t\tbreak;\n\t}\n}",
            "text1b": "(wc, interact, data) => {\n\tswitch (interact.type)\n\t{\n\t\tcase 'start':\n\t\t    SetVisible('text-1b', true)\n\t\t\tbreak;\n\t\tcase 'end':\n\t\t    SetVisible('text-1b', false)\n\t\t\twc.setInteractionComplete(interact.id);\n\t\t\tbreak;\n\t}\n}"
        }
    },
    "flowPackages": {
        "video/5_wildcardnew.mp4": {
            "url": "video/5_wildcardnew.mp4",
            "duration": 83.466667,
            "mediaType": "video"
        },
        "video/6_need.mp4": {
            "url": "video/6_need.mp4",
            "duration": 12.2,
            "mediaType": "video"
        },
        "video/7_flooddefence.mp4": {
            "url": "video/7_flooddefence.mp4",
            "duration": 25.833333,
            "mediaType": "video"
        },
        "video/WomenPartOne.mp4": {
            "url": "video/WomenPartOne.mp4",
            "duration": 60.366667,
            "mediaType": "video"
        },
        "video/3_floodinfo.mp4": {
            "url": "video/3_floodinfo.mp4",
            "duration": 114.533333,
            "mediaType": "video"
        },
        "video/W10FloodFinal.mp4": {
            "url": "video/W10FloodFinal.mp4",
            "duration": 39.533333,
            "mediaType": "video"
        },
        "video/5_wildcard .mp4": {
            "url": "video/5_wildcard .mp4",
            "duration": 44.766667,
            "mediaType": "video"
        },
        "video/5_wildcard.mp4": {
            "url": "video/5_wildcard.mp4",
            "duration": 19,
            "mediaType": "video"
        },
        "video/SanitationEnd.mp4": {
            "url": "video/SanitationEnd.mp4",
            "duration": 46.533333,
            "mediaType": "video"
        },
        "video/MenPartOne.mp4": {
            "url": "video/MenPartOne.mp4",
            "duration": 35.666667,
            "mediaType": "video"
        },
        "video/ButtonSection.mp4": {
            "url": "video/ButtonSection.mp4",
            "duration": 25.833333,
            "mediaType": "video"
        },
        "video/4_impact.mp4": {
            "url": "video/4_impact.mp4",
            "duration": 72.933333,
            "mediaType": "video"
        },
        "video/3_intro2.mp4": {
            "url": "video/3_intro2.mp4",
            "duration": 4.466667,
            "mediaType": "video"
        },
        "video/3_intro.mp4": {
            "url": "video/3_intro.mp4",
            "duration": 16.733333,
            "mediaType": "video"
        },
        "video/YouthPartOne.mp4": {
            "url": "video/YouthPartOne.mp4",
            "duration": 85.333333,
            "mediaType": "video"
        },
        "video/YouthEnd.mp4": {
            "url": "video/YouthEnd.mp4",
            "duration": 91.133333,
            "mediaType": "video"
        },
        "video/6_needs.mp4": {
            "url": "video/6_needs.mp4",
            "duration": 56.933333,
            "mediaType": "video"
        },
        "video/Y5Waste.mp4": {
            "url": "video/Y5Waste.mp4",
            "duration": 91.133333,
            "mediaType": "video"
        },
        "video/Y7Sanitation.mp4": {
            "url": "video/Y7Sanitation.mp4",
            "duration": 121.666667,
            "mediaType": "video"
        },
        "video/W10Flood.mp4": {
            "url": "video/W10Flood.mp4",
            "duration": 70.233333,
            "mediaType": "video"
        },
        "video/3.mp4": {
            "url": "video/3.mp4",
            "duration": 13.533333,
            "mediaType": "video"
        },
        "video/4.mp4": {
            "url": "video/4.mp4",
            "duration": 116,
            "mediaType": "video"
        },
        "video/3_info2.mp4": {
            "url": "video/3_info2.mp4",
            "duration": 11.833333,
            "mediaType": "video"
        },
        "video/5_wildcard2.mp4": {
            "url": "video/5_wildcard2.mp4",
            "duration": 44.766667,
            "mediaType": "video"
        },
        "video/3_info3.mp4": {
            "url": "video/3_info3.mp4",
            "duration": 14.833333,
            "mediaType": "video"
        },
        "video/1_intro.mp4": {
            "url": "video/1_intro.mp4",
            "duration": 32.565867,
            "mediaType": "video"
        },
        "video/5.mp4": {
            "url": "video/5.mp4",
            "duration": 91.133333,
            "mediaType": "video"
        },
        "video/6.mp4": {
            "url": "video/6.mp4",
            "duration": 121.666667,
            "mediaType": "video"
        },
        "video/NewOneEdited.mp4": {
            "url": "video/NewOneEdited.mp4",
            "duration": 15,
            "mediaType": "video"
        },
        "video/ChoiceInfo.mp4": {
            "url": "video/ChoiceInfo.mp4",
            "duration": 64.5,
            "mediaType": "video"
        },
        "video/NEW.mp4": {
            "url": "video/NEW.mp4",
            "duration": 32.7,
            "mediaType": "video"
        },
        "video/OlderPeoplePartOne.mp4": {
            "url": "video/OlderPeoplePartOne.mp4",
            "duration": 50.533333,
            "mediaType": "video"
        },
        "video/3_info.mp4": {
            "url": "video/3_info.mp4",
            "duration": 10.733333,
            "mediaType": "video"
        },
        "video/6_need2.mp4": {
            "url": "video/6_need2.mp4",
            "duration": 52.833333,
            "mediaType": "video"
        }
    },
    "narrativeObjects": {
        "no:29": {
            "id": "no:29",
            "type": "Atom",
            "annotations": {},
            "inputs": [
                "no:33"
            ],
            "outputs": [],
            "data": {},
            "defaultOutput": "terminate",
            "hasPlayed": false,
            "sequencerTimes": [],
            "flowPackage": {
                "url": "video/YouthEnd.mp4",
                "duration": 91.133333,
                "mediaType": "video",
                "data": {}
            },
            "interactions": [],
            "startTime": 0,
            "endTime": 91.133333,
            "waitBeforeStartDuration": 0,
            "isComplete": false
        },
        "no:30": {
            "id": "no:30",
            "type": "Atom",
            "annotations": {},
            "inputs": [
                "no:33"
            ],
            "outputs": [],
            "data": {},
            "defaultOutput": "terminate",
            "hasPlayed": false,
            "sequencerTimes": [],
            "flowPackage": {
                "url": "video/SanitationEnd.mp4",
                "duration": 46.533333,
                "mediaType": "video",
                "data": {}
            },
            "interactions": [],
            "startTime": 0,
            "endTime": 46.533333,
            "waitBeforeStartDuration": 0,
            "isComplete": false
        },
        "no:31": {
            "id": "no:31",
            "type": "Atom",
            "annotations": {},
            "inputs": [
                "no:33"
            ],
            "outputs": [],
            "data": {},
            "defaultOutput": "terminate",
            "hasPlayed": false,
            "sequencerTimes": [],
            "flowPackage": {
                "url": "video/W10FloodFinal.mp4",
                "duration": 39.533333,
                "mediaType": "video",
                "data": {}
            },
            "interactions": [
                {
                    "start": 24.33,
                    "end": 32.74,
                    "duration": 8.410000000000004,
                    "data": {
                        "function": "showFloodWarning"
                    },
                    "id": 2,
                    "complete": false,
                    "resetOutcomeOnStart": true
                },
                {
                    "start": 4.41,
                    "end": 17.85,
                    "duration": 13.440000000000001,
                    "data": {
                        "function": "text3"
                    },
                    "id": 7,
                    "complete": false,
                    "resetOutcomeOnStart": true
                }
            ],
            "startTime": 0,
            "endTime": 39.533333,
            "waitBeforeStartDuration": 0,
            "isComplete": true
        },
        "no:32": {
            "id": "no:32",
            "type": "Atom",
            "annotations": {},
            "inputs": [
                "no:25",
                "no:26",
                "no:27",
                "no:28"
            ],
            "outputs": [
                "no:33"
            ],
            "data": {
                "Output Selection": "userSelection"
            },
            "defaultOutput": "no:33",
            "hasPlayed": false,
            "sequencerTimes": [],
            "flowPackage": {
                "url": "video/ChoiceInfo.mp4",
                "duration": 64.5,
                "mediaType": "video",
                "data": {}
            },
            "interactions": [
                {
                    "start": 5.71,
                    "end": 15.37,
                    "duration": 9.66,
                    "data": {
                        "function": "text1b"
                    },
                    "id": 4,
                    "complete": false,
                    "resetOutcomeOnStart": true
                }
            ],
            "startTime": 0,
            "endTime": 64.5,
            "waitBeforeStartDuration": 0,
            "isComplete": true
        },
        "no:33": {
            "id": "no:33",
            "type": "Atom",
            "annotations": {},
            "inputs": [
                "no:32"
            ],
            "outputs": [
                "no:31",
                "no:30",
                "no:29"
            ],
            "data": {
                "Output Selection": "nextSteps"
            },
            "defaultOutput": "no:31",
            "hasPlayed": false,
            "sequencerTimes": [],
            "flowPackage": {
                "url": "video/ButtonSection.mp4",
                "duration": 25.833333,
                "mediaType": "video",
                "data": {}
            },
            "interactions": [
                {
                    "start": 3.28,
                    "end": 10.42,
                    "duration": 7.140000000000001,
                    "data": {
                        "function": "text2"
                    },
                    "id": 6,
                    "complete": false,
                    "resetOutcomeOnStart": true
                }
            ],
            "startTime": 0,
            "endTime": 10.93,
            "waitBeforeStartDuration": 0,
            "isComplete": true
        },
        "no:24": {
            "id": "no:24",
            "type": "Atom",
            "annotations": {},
            "inputs": [],
            "outputs": [
                "no:25",
                "no:26",
                "no:28",
                "no:27"
            ],
            "data": {
                "Output Selection": "storyArch"
            },
            "defaultOutput": "no:25",
            "hasPlayed": true,
            "sequencerTimes": [],
            "flowPackage": {
                "url": "video/NewOneEdited.mp4",
                "duration": 15,
                "mediaType": "video",
                "data": {}
            },
            "interactions": [
                {
                    "start": 1.96,
                    "end": 3.52,
                    "duration": 1.56,
                    "data": {
                        "function": "showTemp"
                    },
                    "id": 0,
                    "complete": false,
                    "resetOutcomeOnStart": true
                },
                {
                    "start": 4.72,
                    "end": 6.5,
                    "duration": 1.7800000000000002,
                    "data": {
                        "function": "showTempHere"
                    },
                    "id": 1,
                    "complete": false,
                    "resetOutcomeOnStart": true
                }
            ],
            "startTime": 0,
            "endTime": 15,
            "waitBeforeStartDuration": 0,
            "isComplete": true
        },
        "no:25": {
            "id": "no:25",
            "type": "Atom",
            "annotations": {},
            "inputs": [
                "no:24"
            ],
            "outputs": [
                "no:32"
            ],
            "data": {},
            "defaultOutput": "no:32",
            "hasPlayed": false,
            "sequencerTimes": [],
            "flowPackage": {
                "url": "video/OlderPeoplePartOne.mp4",
                "duration": 50.533333,
                "mediaType": "video",
                "data": {}
            },
            "interactions": [],
            "startTime": 0,
            "endTime": 50.533333,
            "waitBeforeStartDuration": 0,
            "isComplete": true
        },
        "no:26": {
            "id": "no:26",
            "type": "Atom",
            "annotations": {},
            "inputs": [
                "no:24"
            ],
            "outputs": [
                "no:32"
            ],
            "data": {},
            "defaultOutput": "no:32",
            "hasPlayed": false,
            "sequencerTimes": [],
            "flowPackage": {
                "url": "video/YouthPartOne.mp4",
                "duration": 85.333333,
                "mediaType": "video",
                "data": {}
            },
            "interactions": [
                {
                    "start": 10.17,
                    "end": 22.62,
                    "duration": 12.450000000000001,
                    "data": {
                        "function": "text1a"
                    },
                    "id": 3,
                    "complete": false,
                    "resetOutcomeOnStart": true
                }
            ],
            "startTime": 0,
            "endTime": 85.333333,
            "waitBeforeStartDuration": 0,
            "isComplete": false
        },
        "no:27": {
            "id": "no:27",
            "type": "Atom",
            "annotations": {},
            "inputs": [
                "no:24"
            ],
            "outputs": [
                "no:32"
            ],
            "data": {},
            "defaultOutput": "no:32",
            "hasPlayed": false,
            "sequencerTimes": [],
            "flowPackage": {
                "url": "video/MenPartOne.mp4",
                "duration": 35.666667,
                "mediaType": "video",
                "data": {}
            },
            "interactions": [],
            "startTime": 0,
            "endTime": 35.666667,
            "waitBeforeStartDuration": 0,
            "isComplete": true
        },
        "no:28": {
            "id": "no:28",
            "type": "Atom",
            "annotations": {},
            "inputs": [
                "no:24"
            ],
            "outputs": [
                "no:32"
            ],
            "data": {},
            "defaultOutput": "no:32",
            "hasPlayed": false,
            "sequencerTimes": [],
            "flowPackage": {
                "url": "video/WomenPartOne.mp4",
                "duration": 60.366667,
                "mediaType": "video",
                "data": {}
            },
            "interactions": [
                {
                    "start": 3.02,
                    "end": 13.17,
                    "duration": 10.15,
                    "data": {
                        "function": "text1a"
                    },
                    "id": 5,
                    "complete": false,
                    "resetOutcomeOnStart": true
                }
            ],
            "startTime": 0,
            "endTime": 60.366667,
            "waitBeforeStartDuration": 0,
            "isComplete": true
        }
    }
};