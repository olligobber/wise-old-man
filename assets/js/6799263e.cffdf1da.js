"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Global Types & Entities",sidebar_position:2},i=void 0,l={unversionedId:"global-type-definitions",id:"global-type-definitions",title:"Global Types & Entities",description:"(Enum) Period",source:"@site/docs/global-type-definitions.mdx",sourceDirName:".",slug:"/global-type-definitions",permalink:"/docs/global-type-definitions",draft:!1,editUrl:"https://github.com/wise-old-man/wise-old-man/tree/master/api-docs/docs/global-type-definitions.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Global Types & Entities",sidebar_position:2},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Players API",permalink:"/docs/category/players-api"}},c={},s=[{value:"<code>(Enum)</code> Period",id:"enum-period",level:3},{value:"<code>(Enum)</code> Metric",id:"enum-metric",level:3},{value:"<code>(Enum)</code> Skill",id:"enum-skill",level:3},{value:"<code>(Enum)</code> Activity",id:"enum-activity",level:3},{value:"<code>(Enum)</code> Boss",id:"enum-boss",level:3},{value:"<code>(Enum)</code> Computed Metric",id:"enum-computed-metric",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"enum-period"},(0,a.kt)("inlineCode",{parentName:"h3"},"(Enum)")," Period"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"'five_min', 'day', 'week', 'month', 'year',\n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"enum-metric"},(0,a.kt)("inlineCode",{parentName:"h3"},"(Enum)")," Metric"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Metric is a combination of ",(0,a.kt)("a",{parentName:"p",href:"/docs/global-type-definitions#enum-skill"},"Skill"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/global-type-definitions#enum-activity"},"Activity"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/global-type-definitions#enum-boss"},"Boss")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/global-type-definitions#enum-computed-metric"},"ComputedMetric"))),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"enum-skill"},(0,a.kt)("inlineCode",{parentName:"h3"},"(Enum)")," Skill"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"'overall', 'attack', 'defence', 'strength', 'hitpoints', 'ranged', 'prayer', 'magic', 'cooking', 'woodcutting', 'fletching', 'fishing', 'firemaking', 'crafting', 'smithing', 'mining', 'herblore', 'agility', 'thieving', 'slayer', 'farming', 'runecrafting', 'hunter', 'construction'\n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"enum-activity"},(0,a.kt)("inlineCode",{parentName:"h3"},"(Enum)")," Activity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"'league_points', 'bounty_hunter_hunter', 'bounty_hunter_rogue', 'clue_scrolls_all', 'clue_scrolls_beginner', 'clue_scrolls_easy', 'clue_scrolls_medium', 'clue_scrolls_hard', 'clue_scrolls_elite', 'clue_scrolls_master', 'last_man_standing', 'pvp_arena', 'soul_wars_zeal', 'guardians_of_the_rift'\n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"enum-boss"},(0,a.kt)("inlineCode",{parentName:"h3"},"(Enum)")," Boss"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"'abyssal_sire', 'alchemical_hydra', 'barrows_chests', 'bryophyta', 'callisto', 'cerberus', 'chambers_of_xeric', 'chambers_of_xeric_challenge_mode', 'chaos_elemental', 'chaos_fanatic', 'commander_zilyana', 'corporeal_beast', 'crazy_archaeologist', 'dagannoth_prime', 'dagannoth_rex', 'dagannoth_supreme', 'deranged_archaeologist', 'general_graardor', 'giant_mole', 'grotesque_guardians', 'hespori', 'kalphite_queen', 'king_black_dragon', 'kraken', 'kreearra', 'kril_tsutsaroth', 'mimic', 'nex', 'nightmare', 'phosanis_nightmare', 'obor', 'sarachnis', 'scorpia', 'skotizo', 'tempoross', 'the_gauntlet', 'the_corrupted_gauntlet', 'theatre_of_blood', 'theatre_of_blood_hard_mode', 'thermonuclear_smoke_devil', 'tombs_of_amascut', 'tombs_of_amascut_expert', 'tzkal_zuk', 'tztok_jad', 'venenatis', 'vetion', 'vorkath', 'wintertodt', 'zalcano', 'zulrah'\n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"enum-computed-metric"},(0,a.kt)("inlineCode",{parentName:"h3"},"(Enum)")," Computed Metric"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"'ehp', 'ehb'\n")),(0,a.kt)("br",null))}p.isMDXComponent=!0}}]);