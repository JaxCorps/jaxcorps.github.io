var kappaMonCommandList = [
    "song",
    "hype2",
    "love2",
    "dense2",
    "dense",
    "sockie2",
    "sockie",
    "waow",
    "potter",
    "wood",
    "uty",
    "fish",
    "koko",
    "looney",
    "jonny",
    "ban",
    "kappa",
    "pogchamp",
    "feelsbadman",
    "megaty",
    "jax",
    "gome",
    "pepe",
    "philipeace",
    "hype2love",
    "saza",
    "aid",
    "treatfly",
    "nathan",
    "aaron",
    "shrug",
    "bunny",
    "potato",
    "gun",
    "lul",
    "garfield",
    "mods",
    "bianca",
    "kkona",
    "auri",
    "cornstarch",
    "pompom",
    "rasputin",
    "rood",
    "glorious",
    "jaxpog",
    "nuke",
    "nuke2",
    "bloodmoon",
    "beachparty",
    "hi",
    "hello",
    "kiss",
    "hug",
    "selfkill",
    "babs",
    "koko2",
    "sockiex",
    "koko3",
    "thumbsup",
    "haha",
    "no",
    "batdance",
    "thinking",
    "why",
    "tryhard",
    "trihard",
    "4head",
    "bruh",
    "cry",
    "gasm",
    "cherry",
    "matt",
    "deadman",
    "justice",
    "spires",
    "spank",
    "drink",
    "shadisy",
    "billie",
    "delight",
    "link",
    "cheers",
    "runder",
    "rubas",
    "snow",
    "alcohol",
    "shot",
    "whiskey",
    "jenny",
    "wine",
    "sonny2",
    "sonny",
    "dance1",
    "dance2",
    "dance3",
    "dance4",
    "dance5",
    "dance6",
    "smile",
    "(:",
    "prodigy",
    "mani",
    "gym",
    "z3ker",
    "stolk",
    "vulture",
    "vulture2",
    ">:)",
    "running2",
    "running3",
    "migration",
    "running4",
    "migration2",
    "migration3",
    "migration4",
    "dylan",
    "snorlax",
    "suddendeath",
    "boscam",
    "t4hx1",
    "napo",
    "nuke3",
    "barney",
    "goteem",
    "brb",
    "loveyou",
    "god_no",
    "wtf",
    "running",
    "serious",
    "calm",
    "teletubbies",
    "botrage",
    "botcry",
    "botfight",
    "botlies",
    "primal",
    "gravy",
    "kylie",
    "start"
]

var streamElementsCommandList = [
    "discord",
    "kappamon",
    "hugs",
    "hug",
    "fish",
    "bits",
    "gambling",
    "points",
    "sub",
    "darwin",
    "bttv",
    "shop",
    "giveaway",
    "allykeyshop",
    "music",
    "crafts",
    "broke",
    "golfit",
    "tea",
    "sazaslide",
    "4head",
    "twitter",
    "sens",
    "chat",
    "youtube",
    "where",
    "mando",
    "singaporetime",
    "crash",
    "insta",
    "ban",
    "aussietime",
    "lurk",
    "bnet",
    "tinder",
    "densetime",
    "watch",
    "time",
    "commands",
    "bday",
    "battle",
    "water",
    "currency",
    "whodidit"
]

function kappamonCommands() {
    document.getElementsByClassName("commmandlist")[0].innerHTML = "";
    kappaMonCommandList.forEach(element => {
        var node = document.createElement("div");
        node.classList.add("command");
        node.innerHTML = `<div class="commands">!${element}</div>`
        document.getElementsByClassName("commmandlist")[0].appendChild(node);
    })
}

function streamelementsCommands() {
    document.getElementsByClassName("commmandlist")[0].innerHTML = "";
    streamElementsCommandList.forEach(element => {
        var node = document.createElement("div");
        node.classList.add("command");
        node.innerHTML = `<div class="commands">!${element}</div>`
        document.getElementsByClassName("commmandlist")[0].appendChild(node);
    })
}

function allCommands() {
    document.getElementsByClassName("commmandlist")[0].innerHTML = "";
    streamElementsCommandList.forEach(element => {
        var node = document.createElement("div");
        node.classList.add("command");
        node.innerHTML = `<div class="commands">!${element}</div>`
        document.getElementsByClassName("commmandlist")[0].appendChild(node);
    })
    kappaMonCommandList.forEach(element => {
        var node = document.createElement("div");
        node.classList.add("command");
        node.innerHTML = `<div class="commands">!${element}</div>`
        document.getElementsByClassName("commmandlist")[0].appendChild(node);
    })
}

function openLink(link) {
    window.open(link, '_blank');
}
function openSite(link) {
    window.open(link, '_self');
}