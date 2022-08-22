import glutenfree from "@/assets/gluten-free.svg";
import dairyfree from "@/assets/dairy-free.svg";
import vegetarian from "@/assets/vegetarian.svg";
import ovovegetarian from "@/assets/ovovegetarian.svg";
import vegan from "@/assets/vegan.svg";
import pescetarian from "@/assets/pescetarian.svg";
import paleo from "@/assets/paleo.svg";
import primal from "@/assets/primal.svg";
import lowfodmap from "@/assets/lowfoodmap.svg";
import whole30 from "@/assets/whole30.svg";
import { UrlNameTypes } from "@/types/types";


export const DietListLowerCase = ['gluten free', 'dairy free', 'vegetarian', 'lacto-vegetarian', 'ovo-vegetarian', 'vegan', 'lacto ovo vegetarian', 'pescatarian', 'pescetarian', 'paleo', 'paleolithic', 'primal', 'low fodmap', 'whole 30', 'fodmap friendly'
] as const;

export const urlBadgeList: UrlNameTypes = {
    'gluten free': {
        path: glutenfree
    },
    "dairy free": {
        path: dairyfree
    },
    "vegetarian": {
        path: vegetarian
    },
    "lacto-vegetarian": {
        path: vegetarian
    },
    "ovo-vegetarian": {
        path: ovovegetarian
    },
    "lacto ovo vegetarian": {
        path: ovovegetarian
    },
    "vegan": {
        path: vegan
    },
    'pescatarian': {
        path: pescetarian
    },
    'pescetarian': {
        path: pescetarian
    },
    "paleo": {
        path: paleo
    },
    "paleolithic": {
        path: paleo
    },
    "primal": {
        path: primal
    },
    "low fodmap": {
        path: lowfodmap
    },
    "fodmap friendly": {
        path: lowfodmap
    },
    "whole 30": {
        path: whole30
    },
    "healthyIcon": {
        path: "@/assets/healthy.svg"
    }
};
