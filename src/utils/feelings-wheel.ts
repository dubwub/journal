const rawFeelingsWheel: any = {
    "happy": ["playful", "content", "interested", "proud", "accepted", "powerful", "peaceful", "trusting", "optimistic"],
    "playful": ["aroused", "cheeky"],
    "content": ["free", "joyful"],
    "interested": ["curious", "inquisitive"],
    "proud": ["successful", "confident"],
    "accepted": ["respected", "valued"],
    "powerful": ["courageous", "creative"],
    "peaceful": ["loving", "thankful"],
    "trusting": ["sensitive", "intimate"],
    "optimistic": ["hopeful", "inspired"],

    "sad": ["lonely", "vulnerable", "despair", "guilty", "depressed", "hurt"],
    "lonely": ["isolated", "abandoned"],
    "vulnerable": ["victimized", "fragile"],
    "despair": ["grief", "powerless"],
    "guilty": ["ashamed", "remorseful"],
    "depressed": ["inferior", "empty"],
    "hurt": ["embarrassed", "disappointed"],

    "disgusted": ["disapproving", "disappointed", "awful", "repelled"],
    "disapproving": ["judgmental", "embarrassed"],
    "disappointed": ["appalled", "revolted"],
    "awful": ["nauseated", "detestable"],
    "repelled": ["horrified", "hesitant"],

    "angry": ["let down", "humiliated", "bitter", "mad", "aggressive", "frustrated", "distant", "critical"],
    "let down": ["betrayed", "resentful"],
    "humiliated": ["disrespected", "ridiculed"],
    "bitter": ["indignant", "violated"],
    "mad": ["furious", "jealous"],
    "aggressive": ["provoked", "hostile"],
    "frustrated": ["infuriated", "annoyed"],
    "distant": ["withdrawn", "numb"],
    "critical": ["skeptical", "dismissive"],

    "fearful": ["scared", "anxious", "insecure", "weak", "rejected", "threatened"],
    "scared": ["helpless", "frightened"],
    "anxious": ["overwhelmed", "worried"],
    "insecure": ["inadequate", "inferior"],
    "weak": ["worthless", "insignificant"],
    "rejected": ["excluded", "persecuted"],
    "threatened": ["nervous", "exposed"],

    "bad": ["bored", "busy", "stressed", "tired"],
    "bored": ["indifferent", "apathetic"],
    "busy": ["pressured", "rushed"],
    "stressed": ["overwhelmed", "out of control"],
    "tired": ["sleepy", "unfocused"],

    "surprised": ["startled", "confused", "amazed", "excited"],
    "startled": ["shocked", "dismayed"],
    "confused": ["disillusioned", "perplexed"],
    "amazed": ["astonished", "awe"],
    "excited": ["eager", "energetic"]
}

let flatEmotions: string[] = [];

let baseEmotions = [
    { emotion: "happy", background: "#FFC940", textColor: "#10161A"},
    { emotion: "sad", background: "#48AFF0", textColor: "#10161A"},
    { emotion: "disgusted", background: "#394B59", textColor: "#FFFFFF"},
    { emotion: "angry", background: "#FF7373", textColor: "#10161A"},
    { emotion: "fearful", background: "#FFB366", textColor: "#10161A"},
    { emotion: "bad", background: "#3DCC91", textColor: "#10161A"},
    { emotion: "surprised", background: "#C274C2", textColor: "#10161A"},
]
const base_emotions = [...baseEmotions];
let feelingsWheel: any = {};
let colorMap: any = {};

while (baseEmotions.length > 0) {
    let emotion = baseEmotions.pop();
    if (typeof emotion === "undefined") break;
    flatEmotions.push(emotion.emotion);
    colorMap[emotion.emotion] = emotion;
    if (typeof rawFeelingsWheel[emotion.emotion] === "undefined") continue;
    feelingsWheel[emotion.emotion] = rawFeelingsWheel[emotion.emotion].map((name: string) => {
        let processedEmotion = {
            emotion: name,
            background: emotion!.background,
            textColor: emotion!.textColor,
        }
        baseEmotions.push(processedEmotion)
        return processedEmotion;
    })
}

export { 
    feelingsWheel as feelings_wheel,
    base_emotions as base_emotions,
    colorMap as color_map,
    flatEmotions as flat_emotions,
};