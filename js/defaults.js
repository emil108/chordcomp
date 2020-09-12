var defaultSongs = [{
        "title": "sus4 slashed chord example",
        "changes": ["Csus4/D", "Ebsus4/F", "Eb7sus4/F", "Eb7sus4/G",
            "Eb7sus4/Ab", "Gsus4/A", "Fsus4/G", "Bbsus4/C"
        ]
    },
    {
        "title": "Autumn Leaves",
        "changes": ["Am7", "D7", "Gmaj7", "Cmaj7",
            "F#m7b5", "B7", "Em", "Em",
            "Am7", "D7", "Gmaj7", "Cmaj7",
            "F#m7b5", "B7", "Em", "Em",
            "F#m7b5", "B7b9", "Em", "Em",
            "Am7", "D7", "Gmaj7", "Gmaj7",
            "F#m7b5", "B7b9", "Em7", "Eb7", "Dm7", "Db7",
            "Cmaj7", "B7b9", "Em", "Em"
        ]
    },
    {
        "title": "Maiden Voyage",
        "changes": ["D7sus4", "F7sus4", "D7sus4", "F7sus4",
            "Eb7sus4", "Dbm7", "D7sus4", "F7sus4"
        ]
    },
    {
        "title": "Solar",
        "changes": ["Cm", "Cm", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7",
            "Ebm7", "Ab7", "Dbmaj7", "Dm7b5", "G7b9"
        ]
    }

];

var baseMIDINotes = {
    "C": 0,
    "C#": 1,
    "Db": 1,
    "D": 2,
    "D#": 3,
    "Eb": 3,
    "E": 4,
    "Fb": 4,
    "F": 5,
    "F#": 6,
    "Gb": 6,
    "G": 7,
    "G#": 8,
    "Ab": 8,
    "A": 9,
    "A#": 10,
    "Bb": 10,
    "B": 11,
    "Cb": 11
};

// 5, 2, add9, +, o, h, sus, ^, -, ^7, -7, 7, 7sus, h7, o7, ^9, ^13, 6, 69, ^7#11, 
// ^9#11, ^7#5, -6, -69, -^7, -^9, -9, -11, -7b5, h9, -b6, -#5, 9, 7b9, 7#9, 7#11, 
// 7b5, 7#5, 9#11, 9b5, 9#5, 7b13, 7#9#5, 7#9b5, 7#9#11, 7b9#11, 7b9b5, 7b9#5, 7b9#9, 
//  7b9b13, 7alt, 13, 13#11, 13b9, 13#9, 7b9sus, 7susadd3, 9sus, 13sus, 7b13sus, 11

var basicChords = {
    "C": ["C3", "G3", "E4"],
    "Cmaj7": ["C3", "B3", "E4"],
    "C7": ["C3", "Bb3", "E4"],
    "C9": ["C3", "E3", "G3", "Bb3", "D4"],
    "Cadd9": ["C3", "E3", "G3", "D4"],
    "C7b9": ["C3", "Bb3", "Db4", "E4"],
    "C7#9": ["C3", "E3", "Bb3", "D#4"],
    "C6": ["C3", "A3", "E4"],
    "Cm": ["C3", "G3", "Eb4"],
    "Cm7": ["C3", "Bb3", "Eb4"],
    "Cm6": ["C3", "A3", "Eb4"],
    "Cdim": ["C3", "F#3", "A3", "Eb4"],
    "Cm7b5": ["C3", "Gb3", "Bb3", "Eb4"],
    "C7#11": ["C3", "Bb3", "E4", "F#4"],
    "Cmaj7#11": ["C3", "B3", "E4", "F#4"],
    "C7sus4": ["C3", "F3", "Bb3"],
    "Csus4": ["C3", "F3", "G3"],
    "Cm7b6": ["C3", "Ab3", "Bb3", "Eb4"]
};
// Bb/A   B/C