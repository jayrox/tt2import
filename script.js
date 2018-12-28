const artLookup = {
    "Artifact22": 'bos',
    "Artifact2": 'sov',
    "Artifact19": 'coc',
    "Artifact1": 'hs',
    "Artifact20": 'bop',
    "Artifact66": 'kb',
    "Artifact43": 'zc',
    "Artifact44": 'gfa',
    "Artifact45": 'coe',
    "Artifact79": 'coe2',
    "Artifact82": 'tbc',
    "Artifact84": 'fots',
    "Artifact26": 'hsw',
    "Artifact31": 'dr',
    "Artifact29": 'dh',
    "Artifact51": 'ss',
    "Artifact59": 'tr',
    "Artifact83": 'stp',
    "Artifact35": 'hb',
    "Artifact32": 'tsos',
    "Artifact33": 'fb',
    "Artifact34": 'cota',
    "Artifact61": 'ttt',
    "Artifact62": 'hh',
    "Artifact38": 'foe',
    "Artifact30": 'ie',
    "Artifact64": 'orc',
    "Artifact52": 'hos2',
    "Artifact53": 'ao',
    "Artifact67": 'eop',
    "Artifact42": 'af',
    "Artifact46": 'hos',
    "Artifact55": 'td',
    "Artifact56": 'hs2',
    "Artifact75": 'ob',
    "Artifact76": 'cotc',
    "Artifact77": 'ts2',
    "Artifact78": 'fg',
    "Artifact40": 'roc',
    "Artifact25": 'bod',
    "Artifact17": 'hom',
    "Artifact23": 'tp',
    "Artifact73": 'mb',
    "Artifact28": 'as',
    "Artifact86": 'sv',
    "Artifact87": 'sotr',
    "Artifact88": 'tcp',
    "Artifact89": 'soj',
    "Artifact90": 'fotk',
    "Artifact47": 'ig',
    "Artifact11": 'tm',
    "Artifact41": 'rt',
    "Artifact9": 'lp',
    "Artifact10": 'bor',
    "Artifact7": 'pof',
    "Artifact6": 'eoe',
    "Artifact65": 'hoti',
    "Artifact48": 'pt',
    "Artifact13": 'fs',
    "Artifact15": 'rof',
    "Artifact16": 'ga',
    "Artifact14": 'a',
    "Artifact12": 'sg',
    "Artifact36": 'ip',
    "Artifact27": 'gok',
    "Artifact39": 'ts',
    "Artifact37": 'os',
    "Artifact3": 'tac',
    "Artifact8": 'ho',
    "Artifact50": 'ae',
    "Artifact58": 'ms',
    "Artifact68": 'mbos',
    "Artifact18": 'eof',
    "Artifact21": 'dc',
    "Artifact5": 'is',
    "Artifact4": 'aom',
    "Artifact54": 'eotk',
    "Artifact70": 'boh',
    "Artifact74": 'ug',
    "Artifact72": 'op',
    "Artifact69": 'lfoa',
    "Artifact63": 'lkm',
    "Artifact24": 'sor',
    "Artifact71": 'msw',
    "Artifact49": 'tms',
    "Artifact80": 'tmg',
    "Artifact81": 'ttof',
    "Artifact85": 'twd',
    "Artifact57": 'as2',
    "Artifact60": 'wod'
};

const skillLookup = {
    "TapDmg": 'kv',
    "TapDmgFromHelpers": 'cho',
    "PetDmg": 'pe',
    "PetGoldQTE": 'phom',
    "HeavyStrikes": 'cs',
    "FireTapSkillBoost": 'si',
    "PetQTE": 'lbu',
    "Frenzy": 'bf',
    "BossDmgQTE": 'fz',
    "AllHelperDmg": 'mc',
    "ChestGold": 'sow',
    "HelperDmgSkillBoost": 'hm',
    "ClanShipDmg": 'aas',
    "HelperBoost": 'ti',
    "HelperInspiredWeaken": 'sl',
    "ClanQTE": 'coo',
    "HelperDmgQTE": 'aaw',
    "ClanShipStun": 'as',
    "MPCapacityBoost": 'lbr',
    "MidasSkillBoost": 'mu',
    "BurstSkillBoost": 'ar',
    "CloneDmg": 'pv',
    "Fairy": 'fc',
    "ManaStealSkillBoost": 'ms',
    "CloneSkillBoost": 'ed',
    "ManaMonster": 'mm',
    "CritSkillBoost": 'ls',
    "BossTimer": 'ds',
    "OfflineGold": 'mt',
    "CritSkillBoostDmg": 'an',
    "AutoAdvance": 'sm',
    "MultiMonsters": 'ab',
    "PetOfflineDmg": 'tv',
    "InactiveClanShip": 'gs',
    "OfflineCloneDmg": 'sa'
}

// Textarea boxes
const taTT2Optimizer = document.getElementById('import');
const taTT2Master = document.getElementById('tt2master');
const ta_tt2optmizerOutput = document.getElementById('export');

// Update the local storage to save previous optimizer values
const updateTT2Optimizer = () => {
    window.localStorage.setItem('tt2optimizer', taTT2Optimizer.value);
}

// Update export from TT2Master
const updateTT2Master = () => {
    // Get TT2-Optimizer value
    let data1 = taTT2Optimizer.value;

    // If the TT2-Optimizer value is empty, paste in the default values
    if (data1.length === 0) {
        data1 = 'null=null=null=null=75=0=0=null=1=bos_1_0|sov_1_0|coc_1_0|hs_1_0|bop_1_0|kb_1_0|zc_1_0|gfa_1_0|coe_1_0|coe2_1_0|tbc_1_0|fots_1_0|hsw_1_0|dr_1_0|dh_1_0|ss_1_0|tr_1_0|stp_1_0|hb_1_0|tsos_1_0|fb_1_0|cota_1_0|ttt_1_0|hh_1_0|foe_1_0|ie_1_0|orc_1_0|hos2_1_0|ao_1_0|eop_1_0|af_1_0|hos_1_0|td_1_0|hs2_1_0|ob_1_0|cotc_1_0|ts2_1_0|fg_1_0|roc_1_0|bod_1_0|hom_1_0|tp_1_0|mb_1_0|as_1_0|sv_1_0|sotr_1_0|tcp_1_0|soj_1_0|fotk_1_0|ig_1_0|tm_1_0|rt_1_0|lp_1_0|bor_1_0|pof_1_0|eoe_1_0|hoti_1_0|pt_1_0|fs_1_0|rof_1_0|ga_1_0|a_1_0|sg_1_0|ip_1_0|gok_1_0|ts_1_0|os_1_0|tac_1_0|ho_1_0|ae_1_0|ms_1_0|mbos_1_0|eof_1_0|dc_1_0|is_1_0|aom_1_0|eotk_1_0|boh_1_0|ug_1_0|op_1_0|lfoa_1_0|lkm_1_0|sor_1_0|msw_1_0|tms_1_0|tmg_1_0|ttof_1_0|twd_1_0|as2_1_0|wod_1_0=kv_1_0|cho_1_0|pe_1_0|phom_1_0|cs_1_0|si_1_0|lbu_1_0|bf_1_0|fz_1_0|mc_1_0|sow_1_0|hm_1_0|aas_1_0|ti_1_0|sl_1_0|coo_1_0|aaw_1_0|as_1_0|lbr_1_0|mu_1_0|ar_1_0|pv_1_0|fc_1_0|ms_1_0|ed_1_0|mm_1_0|ls_1_0|ds_1_0|mt_1_0|an_1_0|sm_1_0|ab_1_0|tv_1_0|gs_1_0|sa_1_0';
        taTT2Optimizer.value = data1;
    }

    // Get TT2Master value
    let data = taTT2Master.value;

    // Return if empty
    if (data.length === 0) return;

    // Get TT2-Optimizer fields
    let i1 = data1.split('=');

    // Find the Artifact index and Skill Index
    // Artifact index currently 9
    // Skill index is currently 10
    // These could change if Juvia changes his import/export formatting
    let artIndex = 0;
    let skillIndex = 0;
    i1.forEach((element, index) => {
        if (element.indexOf('bos_') === 0) {
            artIndex = index;
        }
        if (element.indexOf('kv_') === 0) {
            skillIndex = index;
        }
    });

    console.log(`Artifact Index: ${artIndex}`);
    console.log(`Skill Index: ${skillIndex}`);

    // Parse TT2Master JSON data
    let jsond = JSON.parse(data);

    // Split artifacts
    let i19 = i1[artIndex].split('|');

    // Loop through TT2Master artifact export values
    const artLevels = (typeof jsond['_artLvls'] !== 'undefined') ? jsond['_artLvls'] : jsond['_arts'];
    Object.entries(artLevels)
        .forEach(element => {
            const id = artLookup[element[1].ID];
            const level = parseFloat(element[1].Level);

            // found is used to identify unknown artifacts, in cases of game updates
            let found = false;

            // Update TT2-Optimizer artifact values
            i19.forEach((el, index) => {
                if (el.indexOf(`${id}_`) === 0) {
                    let p = el.split('_');

                    // Fields: Shortname_Active_Level (bos_1_3.8e16)
                    i19[index] = `${id}_${p[1]}_${level}`;

                    found = true;
                }
            });

            console.info(id, level);
            if (!found) console.error(`ID: ${element[1].ID} not found.`);

            i1[artIndex] = i19.join('|');
        });

    // Split skills
    let i110 = i1[skillIndex].split('|');

    // Loop through TT2Master skill export values
    const skillLevels = (typeof jsond['_skillLvls'] !== 'undefined') ? jsond['_skillLvls'] : jsond['_skills'];
    Object.entries(skillLevels)
        .forEach(element => {
            const id = skillLookup[element[1].TalentID];
            const level = parseFloat(element[1].CurrentLevel);

            let found = false;

            i110.forEach((el, index) => {
                if (el.indexOf(`${id}_`) === 0) {
                    let p = el.split('_');

                    // Fields: Shortname_Active_Level
                    i110[index] = `${id}_${p[1]}_${level}`;

                    found = true;
                }
            });

            console.info(element[1], id, level);
            if (!found) console.error(`TalentID: ${element[1].TalentID} not found.`);

            i1[skillIndex] = i110.join('|');
        });

    // Smash them all back together and update the new import data
    ta_tt2optmizerOutput.value = i1.join('=');

    //ta_tt2optmizerOutput.scrollTo(0, 0);
    //ta_tt2optmizerOutput.setSelectionRange(0, ta_tt2optmizerOutput.value.length);
}

// Watch the textarea boxes for changes, react automagically
['change', 'paste', 'keyup'].forEach(event => taTT2Optimizer.addEventListener(event, updateTT2Optimizer));
['change', 'paste', 'keyup'].forEach(event => taTT2Master.addEventListener(event, updateTT2Master));

// Update on focus
ta_tt2optmizerOutput.addEventListener('focus', event => {
    updateTT2Master();
});

// Load previous optimizer values from local storage
function loadOptimizer() {
    taTT2Optimizer.value = window.localStorage.getItem('tt2optimizer');
}

document.addEventListener('DOMContentLoaded', event => {
    loadOptimizer();
    const urlParams = new URLSearchParams(window.location.search);
    const tt2master = urlParams.get('tt2master');

    if (typeof tt2master !== 'undefined' && tt2master !== null && tt2master.length > 0) {
        taTT2Master.value = decodeURI(tt2master).replace(/e /gi, 'E+');
        updateTT2Master();
    }
});

document.addEventListener('click', event => {
    if (event.target.id === 'copy') {
        copyExport(event.target);
    }
});

// Copy the URL when the "Copy URL" button is clicked
function copyExport(e) {
    const exportStr = ta_tt2optmizerOutput.value;
    console.log(exportStr);

    let textArea = document.createElement('textarea');

    // Place in top-left corner of screen regardless of scroll position
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';

    // Avoid flash of white box if rendered for any reason
    textArea.style.background = 'transparent';
    textArea.value = exportStr;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        let successful = document.execCommand('copy');
        let msg = successful ? 'successful' : 'unsuccessful';
        console.log(`Copying text command was ${msg}`);
    } catch (err) {
        console.error(err);
    }

    document.body.removeChild(textArea);
}
