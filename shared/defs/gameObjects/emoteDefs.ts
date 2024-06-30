export enum EmoteCategory {
    Locked,
    Faces,
    Food,
    Animals,
    Logos,
    Other,
    Flags,
    Default
}

export interface EmoteDef {
    readonly type: "emote";
    name?: string;
    rarity?: number;
    texture: string;
    sound: string;
    channel: string;
    teamOnly?: boolean;
    category: number;
    noCustom?: boolean;
}

export const EmotesDefs: Record<string, EmoteDef> = {
    emote_medical: {
        type: "emote",
        texture: "emote-medical-healthkit.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: true,
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_ammo: {
        type: "emote",
        texture: "ammo-box.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: true,
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_ammo9mm: {
        type: "emote",
        texture: "ammo-9mm.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: true,
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_ammo12gauge: {
        type: "emote",
        texture: "ammo-12gauge.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: true,
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_ammo762mm: {
        type: "emote",
        texture: "ammo-762mm.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: true,
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_ammo556mm: {
        type: "emote",
        texture: "ammo-556mm.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: true,
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_ammo50ae: {
        type: "emote",
        texture: "ammo-50AE.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: true,
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_ammo308sub: {
        type: "emote",
        texture: "ammo-308sub.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: true,
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_ammoflare: {
        type: "emote",
        texture: "ammo-flare.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: true,
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_ammo45acp: {
        type: "emote",
        texture: "ammo-45acp.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: true,
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_loot: {
        type: "emote",
        texture: "",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_trick_nothing: {
        type: "emote",
        texture: "face-imp-trick.img",
        sound: "trick_01",
        channel: "ui",
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_trick_size: {
        type: "emote",
        texture: "face-imp-trick.img",
        sound: "trick_01",
        channel: "ui",
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_trick_m9: {
        type: "emote",
        texture: "face-imp-trick.img",
        sound: "trick_03",
        channel: "ui",
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_trick_chatty: {
        type: "emote",
        texture: "face-imp-trick.img",
        sound: "trick_02",
        channel: "ui",
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_trick_drain: {
        type: "emote",
        texture: "face-imp-trick.img",
        sound: "trick_02",
        channel: "ui",
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_treat_9mm: {
        type: "emote",
        texture: "face-angel-treat.img",
        sound: "treat_01",
        channel: "ui",
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_treat_12g: {
        type: "emote",
        texture: "face-angel-treat.img",
        sound: "treat_01",
        channel: "ui",
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_treat_556: {
        type: "emote",
        texture: "face-angel-treat.img",
        sound: "treat_01",
        channel: "ui",
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_treat_762: {
        type: "emote",
        texture: "face-angel-treat.img",
        sound: "treat_01",
        channel: "ui",
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_treat_super: {
        type: "emote",
        texture: "face-angel-treat.img",
        sound: "treat_01",
        channel: "ui",
        noCustom: true,
        category: EmoteCategory.Locked
    },
    emote_bugle_inspiration_red: {
        type: "emote",
        texture: "bugle-inspiration-red.img",
        sound: "emote_01",
        channel: "ui",
        noCustom: true,
        category: EmoteCategory.Other
    },
    emote_bugle_final_red: {
        type: "emote",
        texture: "bugle-final-red.img",
        sound: "emote_01",
        channel: "ui",
        noCustom: true,
        category: EmoteCategory.Other
    },
    emote_bugle_inspiration_blue: {
        type: "emote",
        texture: "bugle-inspiration-blue.img",
        sound: "emote_01",
        channel: "ui",
        noCustom: true,
        category: EmoteCategory.Other
    },
    emote_bugle_final_blue: {
        type: "emote",
        texture: "bugle-final-blue.img",
        sound: "emote_01",
        channel: "ui",
        noCustom: true,
        category: EmoteCategory.Other
    },
    emote_thumbsup: {
        type: "emote",
        name: "Thumbs Up",
        rarity: 1,
        texture: "thumbs-up.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_sadface: {
        type: "emote",
        name: "Sad Face",
        rarity: 1,
        texture: "face-sad.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_happyface: {
        type: "emote",
        name: "Happy Face",
        rarity: 1,
        texture: "face-happy.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_surviv: {
        type: "emote",
        name: "Surviv Logo",
        rarity: 1,
        texture: "surviv.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Logos
    },
    emote_gg: {
        type: "emote",
        name: "GG",
        rarity: 1,
        texture: "gg.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_question: {
        type: "emote",
        name: "Question Mark",
        rarity: 1,
        texture: "question.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_tombstone: {
        type: "emote",
        name: "Tombstone",
        rarity: 1,
        texture: "tombstone.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_joyface: {
        type: "emote",
        name: "Joyful Face",
        rarity: 1,
        texture: "face-joy.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_sobface: {
        type: "emote",
        name: "Sobbing Face",
        rarity: 1,
        texture: "face-sob.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_thinkingface: {
        type: "emote",
        name: "Thonk",
        rarity: 1,
        texture: "face-thinking.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_flagus: {
        type: "emote",
        name: "Flag United States",
        rarity: 1,
        texture: "flag-united-states-of-america.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagthailand: {
        type: "emote",
        name: "Flag Thailand",
        rarity: 1,
        texture: "flag-thailand.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flaggermany: {
        type: "emote",
        name: "Flag Germany",
        rarity: 1,
        texture: "flag-germany.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagfrance: {
        type: "emote",
        name: "Flag France",
        rarity: 1,
        texture: "flag-france.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagsouthkorea: {
        type: "emote",
        name: "Flag South Korea",
        rarity: 1,
        texture: "flag-south-korea.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagbrazil: {
        type: "emote",
        name: "Flag Brazil",
        rarity: 1,
        texture: "flag-brazil.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagcanada: {
        type: "emote",
        name: "Flag Canada",
        rarity: 1,
        texture: "flag-canada.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagspain: {
        type: "emote",
        name: "Flag Spain",
        rarity: 1,
        texture: "flag-spain.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagrussia: {
        type: "emote",
        name: "Flag Russia",
        rarity: 1,
        texture: "flag-russia.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagmexico: {
        type: "emote",
        name: "Flag Mexico",
        rarity: 1,
        texture: "flag-mexico.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagpoland: {
        type: "emote",
        name: "Flag Poland",
        rarity: 1,
        texture: "flag-republic-of-poland.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flaguk: {
        type: "emote",
        name: "Flag United Kingdom",
        rarity: 1,
        texture: "flag-united-kingdom.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagcolombia: {
        type: "emote",
        name: "Flag Colombia",
        rarity: 1,
        texture: "flag-colombia.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagukraine: {
        type: "emote",
        name: "Flag Ukraine",
        rarity: 1,
        texture: "flag-ukraine.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagturkey: {
        type: "emote",
        name: "Flag Turkey",
        rarity: 1,
        texture: "flag-turkey.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagphilippines: {
        type: "emote",
        name: "Flag Philippines",
        rarity: 1,
        texture: "flag-philippines.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagczechia: {
        type: "emote",
        name: "Flag Czechia",
        rarity: 1,
        texture: "flag-czech-republic.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagperu: {
        type: "emote",
        name: "Flag Peru",
        rarity: 1,
        texture: "flag-peru.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagaustria: {
        type: "emote",
        name: "Flag Austria",
        rarity: 1,
        texture: "flag-austria.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagargentina: {
        type: "emote",
        name: "Flag Argentina",
        rarity: 1,
        texture: "flag-argentina.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagjapan: {
        type: "emote",
        name: "Flag Japan",
        rarity: 1,
        texture: "flag-japan.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagvenezuela: {
        type: "emote",
        name: "Flag Venezuela",
        rarity: 1,
        texture: "flag-venezuela.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagvietnam: {
        type: "emote",
        name: "Flag Vietnam",
        rarity: 1,
        texture: "flag-vietnam.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagswitzerland: {
        type: "emote",
        name: "Flag Switzerland",
        rarity: 1,
        texture: "flag-switzerland.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagnetherlands: {
        type: "emote",
        name: "Flag Netherlands",
        rarity: 1,
        texture: "flag-netherlands.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagchina: {
        type: "emote",
        name: "Flag China",
        rarity: 1,
        texture: "flag-china.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagtaiwan: {
        type: "emote",
        name: "Flag Taiwan",
        rarity: 1,
        texture: "flag-taiwan.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagchile: {
        type: "emote",
        name: "Flag Chile",
        rarity: 1,
        texture: "flag-chile.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagaustralia: {
        type: "emote",
        name: "Flag Australia",
        rarity: 1,
        texture: "flag-australia.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagdenmark: {
        type: "emote",
        name: "Flag Denmark",
        rarity: 1,
        texture: "flag-denmark.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagitaly: {
        type: "emote",
        name: "Flag Italy",
        rarity: 1,
        texture: "flag-italy.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagsweden: {
        type: "emote",
        name: "Flag Sweden",
        rarity: 1,
        texture: "flag-sweden.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagecuador: {
        type: "emote",
        name: "Flag Ecuador",
        rarity: 1,
        texture: "flag-ecuador.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagslovakia: {
        type: "emote",
        name: "Flag Slovakia",
        rarity: 1,
        texture: "flag-slovakia.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flaghungary: {
        type: "emote",
        name: "Flag Hungary",
        rarity: 1,
        texture: "flag-hungary.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagromania: {
        type: "emote",
        name: "Flag Romania",
        rarity: 1,
        texture: "flag-romania.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flaghongkong: {
        type: "emote",
        name: "Flag Hong Kong",
        rarity: 1,
        texture: "flag-hong-kong.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagindonesia: {
        type: "emote",
        name: "Flag Indonesia",
        rarity: 1,
        texture: "flag-indonesia.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagfinland: {
        type: "emote",
        name: "Flag Finland",
        rarity: 1,
        texture: "flag-finland.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagnorway: {
        type: "emote",
        name: "Flag Norway",
        rarity: 1,
        texture: "flag-norway.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_heart: {
        type: "emote",
        name: "Heart",
        rarity: 1,
        texture: "heart.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_sleepy: {
        type: "emote",
        name: "Zzz",
        rarity: 1,
        texture: "sleepy.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_flex: {
        type: "emote",
        name: "Flex",
        rarity: 1,
        texture: "flex.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_angryface: {
        type: "emote",
        name: "Angry Face",
        rarity: 1,
        texture: "face-angry.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_upsidedownface: {
        type: "emote",
        name: "Upside Down Face",
        rarity: 1,
        texture: "face-upsidedown.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_teabag: {
        type: "emote",
        name: "Teabag",
        rarity: 1,
        texture: "teabag.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_alienface: {
        type: "emote",
        name: "Alien Face",
        rarity: 1,
        texture: "face-alien.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_flagbelarus: {
        type: "emote",
        name: "Flag Belarus",
        rarity: 1,
        texture: "flag-belarus.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagbelgium: {
        type: "emote",
        name: "Flag Belgium",
        rarity: 1,
        texture: "flag-belgium.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagkazakhstan: {
        type: "emote",
        name: "Flag Kazakhstan",
        rarity: 1,
        texture: "flag-kazakhstan.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_egg: {
        type: "emote",
        name: "Egg",
        rarity: 1,
        texture: "egg.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_police: {
        type: "emote",
        name: "Police Insignia",
        rarity: 1,
        texture: "police.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_dabface: {
        type: "emote",
        name: "Dab Face",
        rarity: 1,
        texture: "face-dab.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_flagmalaysia: {
        type: "emote",
        name: "Flag Malaysia",
        rarity: 1,
        texture: "flag-malaysia.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagnewzealand: {
        type: "emote",
        name: "Flag New Zealand",
        rarity: 1,
        texture: "flag-new-zealand.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_logosurviv: {
        type: "emote",
        name: "PARMA",
        rarity: 1,
        texture: "logo-surviv.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Logos
    },
    emote_logoegg: {
        type: "emote",
        name: "The Egg",
        rarity: 1,
        texture: "logo-egg.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Logos
    },
    emote_logoswine: {
        type: "emote",
        name: "The Swine",
        rarity: 1,
        texture: "logo-swine.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Logos
    },
    emote_logohydra: {
        type: "emote",
        name: "The Hydra",
        rarity: 1,
        texture: "logo-hydra.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Logos
    },
    emote_logostorm: {
        type: "emote",
        name: "The Storm",
        rarity: 1,
        texture: "logo-storm.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Logos
    },
    emote_flaghonduras: {
        type: "emote",
        name: "Flag Honduras",
        rarity: 1,
        texture: "flag-honduras.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_logocaduceus: {
        type: "emote",
        name: "The Caduceus",
        rarity: 1,
        texture: "logo-caduceus.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Logos
    },
    emote_impface: {
        type: "emote",
        name: "Imp Face",
        rarity: 1,
        texture: "face-imp.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_monocleface: {
        type: "emote",
        name: "Monocole Face",
        rarity: 1,
        texture: "face-monocle.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_sunglassface: {
        type: "emote",
        name: "Sunglasses Face",
        rarity: 1,
        texture: "face-sunglass.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_headshotface: {
        type: "emote",
        name: "Headshot!",
        rarity: 1,
        texture: "face-headshot.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_potato: {
        type: "emote",
        name: "Potato",
        rarity: 1,
        texture: "potato.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Food
    },
    emote_leek: {
        type: "emote",
        name: "Leek",
        rarity: 1,
        texture: "leek.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Food
    },
    emote_eggplant: {
        type: "emote",
        name: "Eggplant",
        rarity: 1,
        texture: "eggplant.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Food
    },
    emote_baguette: {
        type: "emote",
        name: "Baguette",
        rarity: 1,
        texture: "baguette.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Food
    },
    emote_chick: {
        type: "emote",
        name: "Chick",
        rarity: 1,
        texture: "chick.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_flagbolivia: {
        type: "emote",
        name: "Flag Bolivia",
        rarity: 1,
        texture: "flag-bolivia.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagcroatia: {
        type: "emote",
        name: "Flag Croatia",
        rarity: 1,
        texture: "flag-croatia.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagindia: {
        type: "emote",
        name: "Flag India",
        rarity: 1,
        texture: "flag-india.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagisrael: {
        type: "emote",
        name: "Flag Israel",
        rarity: 1,
        texture: "flag-israel.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flaggeorgia: {
        type: "emote",
        name: "Flag Georgia",
        rarity: 1,
        texture: "flag-georgia.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flaggreece: {
        type: "emote",
        name: "Flag Greece",
        rarity: 1,
        texture: "flag-greece.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagguatemala: {
        type: "emote",
        name: "Flag Gautemala",
        rarity: 1,
        texture: "flag-guatemala.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagportugal: {
        type: "emote",
        name: "Flag Portugal",
        rarity: 1,
        texture: "flag-portugal.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagserbia: {
        type: "emote",
        name: "Flag Serbia",
        rarity: 1,
        texture: "flag-serbia.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagsingapore: {
        type: "emote",
        name: "Flag Singapore",
        rarity: 1,
        texture: "flag-singapore.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagtrinidad: {
        type: "emote",
        name: "Flag Trinidad and Tobago",
        rarity: 1,
        texture: "flag-trinidad-and-tobago.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flaguruguay: {
        type: "emote",
        name: "Flag Uruguay",
        rarity: 1,
        texture: "flag-uruguay.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_logoconch: {
        type: "emote",
        name: "The Conch",
        rarity: 1,
        texture: "logo-conch.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Logos
    },
    emote_pineapple: {
        type: "emote",
        name: "Pineapple",
        rarity: 1,
        texture: "pineapple.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Food
    },
    emote_coconut: {
        type: "emote",
        name: "Coconut",
        rarity: 1,
        texture: "coconut.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Food
    },
    emote_crab: {
        type: "emote",
        name: "Crab",
        rarity: 1,
        texture: "crab.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Animals
    },
    emote_whale: {
        type: "emote",
        name: "Whale",
        rarity: 1,
        texture: "whale.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Animals
    },
    emote_logometeor: {
        type: "emote",
        name: "The Meteor",
        rarity: 1,
        texture: "logo-meteor.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Logos
    },
    emote_salt: {
        type: "emote",
        name: "Salt Shaker",
        rarity: 1,
        texture: "salt.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_disappointface: {
        type: "emote",
        name: "Disappointed Face",
        rarity: 1,
        texture: "face-disappoint.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_logocrossing: {
        type: "emote",
        name: "The Crossing",
        rarity: 1,
        texture: "logo-crossing.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Logos
    },
    emote_fish: {
        type: "emote",
        name: "Fish",
        rarity: 1,
        texture: "fish.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Animals
    },
    emote_campfire: {
        type: "emote",
        name: "Campfire",
        rarity: 1,
        texture: "campfire.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_chickendinner: {
        type: "emote",
        name: "Chicken Dinner",
        rarity: 1,
        texture: "chicken-dinner.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Food
    },
    emote_cattle: {
        type: "emote",
        name: "Cattle Skull",
        rarity: 1,
        texture: "cattle.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Animals
    },
    emote_icecream: {
        type: "emote",
        name: "Ice Cream",
        rarity: 1,
        texture: "ice-cream.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Food
    },
    emote_cupcake: {
        type: "emote",
        name: "Cupcake",
        rarity: 1,
        texture: "cupcake.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Food
    },
    emote_donut: {
        type: "emote",
        name: "Donut",
        rarity: 1,
        texture: "donut.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Food
    },
    emote_logohatchet: {
        type: "emote",
        name: "The Hatchet",
        rarity: 1,
        texture: "logo-hatchet.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Logos
    },
    emote_acorn: {
        type: "emote",
        name: "Acorn",
        rarity: 1,
        texture: "acorn.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Food
    },
    emote_trunk: {
        type: "emote",
        name: "Tree Trunk",
        rarity: 1,
        texture: "trunk.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_forest: {
        type: "emote",
        name: "Forest",
        rarity: 1,
        texture: "forest.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_pumpkin: {
        type: "emote",
        name: "Pumpkin",
        rarity: 1,
        texture: "pumpkin.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_candycorn: {
        type: "emote",
        name: "Candy Corn",
        rarity: 1,
        texture: "candy-corn.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Food
    },
    emote_pilgrimhat: {
        type: "emote",
        name: "Pilgrim",
        rarity: 1,
        texture: "pilgrim-hat.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_turkeyanimal: {
        type: "emote",
        name: "Turkey",
        rarity: 1,
        texture: "turkey-animal.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Animals
    },
    emote_heartface: {
        type: "emote",
        name: "Heart Face",
        rarity: 1,
        texture: "face-heart.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_logochrysanthemum: {
        type: "emote",
        name: "The Chrysanthemum",
        rarity: 1,
        texture: "logo-chrysanthemum.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Logos
    },
    emote_santahat: {
        type: "emote",
        name: "Santa Hat",
        rarity: 1,
        texture: "santa-hat.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_snowman: {
        type: "emote",
        name: "Snowman",
        rarity: 1,
        texture: "snowman.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_snowflake: {
        type: "emote",
        name: "Snowflake",
        rarity: 1,
        texture: "snowflake.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_flagmorocco: {
        type: "emote",
        name: "Flag Morocco",
        rarity: 1,
        texture: "flag-morocco.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagestonia: {
        type: "emote",
        name: "Flag Estonia",
        rarity: 1,
        texture: "flag-estonia.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagalgeria: {
        type: "emote",
        name: "Flag Algeria",
        rarity: 1,
        texture: "flag-algeria.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagegypt: {
        type: "emote",
        name: "Flag Egypt",
        rarity: 1,
        texture: "flag-egypt.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagazerbaijan: {
        type: "emote",
        name: "Flag Azerbaijan",
        rarity: 1,
        texture: "flag-azerbaijan.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagalbania: {
        type: "emote",
        name: "Flag Albania",
        rarity: 1,
        texture: "flag-albania.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flaglithuania: {
        type: "emote",
        name: "Flag Lithuania",
        rarity: 1,
        texture: "flag-lithuania.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flaglatvia: {
        type: "emote",
        name: "Flag Latvia",
        rarity: 1,
        texture: "flag-latvia.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flaguae: {
        type: "emote",
        name: "Flag United Arab Emirates",
        rarity: 1,
        texture: "flag-united-arab-emirates.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_flagdominicanrepublic: {
        type: "emote",
        name: "Flag Dominican Republic",
        rarity: 1,
        texture: "flag-dominican-republic.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Flags
    },
    emote_logocloud: {
        type: "emote",
        name: "The Cloud",
        rarity: 1,
        texture: "logo-cloud.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Logos
    },
    emote_ghost_base: {
        type: "emote",
        name: "Ghost",
        rarity: 2,
        texture: "ghost-base.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_bandagedface: {
        type: "emote",
        name: "Bandaged Face",
        rarity: 2,
        texture: "face-bandaged.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_picassoface: {
        type: "emote",
        name: "Picasso Face",
        rarity: 2,
        texture: "face-picasso.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_pooface: {
        type: "emote",
        name: "Poo Face",
        rarity: 3,
        texture: "face-poo.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Faces
    },
    emote_ok: {
        type: "emote",
        name: "Ok",
        rarity: 2,
        texture: "ok.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_rainbow: {
        type: "emote",
        name: "Rainbow",
        rarity: 3,
        texture: "rainbow.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Other
    },
    emote_logotwins: {
        type: "emote",
        name: "The Twins",
        rarity: 1,
        texture: "logo-twins.img",
        sound: "emote_01",
        channel: "ui",
        teamOnly: false,
        category: EmoteCategory.Logos
    }
};
