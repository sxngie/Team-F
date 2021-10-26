// This is the data to be returned internally in the component.
export interface Fetch {
    isAdded:boolean // If you are following this person or not.
	name: string;
    banner: string
    avatar: string;
	followers: number;
	following: number;
	description: string;
	mutuals: {
		top: {
			name: string;
			avatar: string;
		}[];
		extra: number;
	};
}

const useGetUser = (username:string):Fetch => {
    return {
        name:'SpongeBob',
        description:' Official account of SpongeBob Square Pants',
        avatar:'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png',
        banner:'https://miro.medium.com/max/1066/1*ByYYclVp4efXl2g1z8XXyQ.jpeg',
        followers:123,
        following:24,
        isAdded:true,
        mutuals:{
            top:[{
                name:'Patrick',
                avatar:'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png'

            },
            {
                name:'Sandy',
                avatar:'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/1200px-Sandy_Cheeks.svg.png'

            }
        ],
            extra:100
        }
    }
}

export const getMutualStr = (mutuals:Fetch['mutuals']) => {
    if(mutuals.top.length === 0) return "Not followed by anyone you're following"

    switch(mutuals.extra) {
        case 0:
            return `Followed by ${userJoin(mutuals.top)}`
        default:
            return `Followed by ${userJoin(mutuals.top)} and ${mutuals.extra} others you follow`

    }
}

function userJoin(usrs:Fetch['mutuals']['top']):string{
    const length = usrs.length;

    switch(length){
        case 1:
            return usrs[0].name;

        case 2:
            return `${usrs[0].name} and ${usrs[1].name}`
        
        default:
            const list = usrs.map(({name})=> name);
            list[length - 1] = `and ${list[length - 1]}`
            return list.join(', ')

    }
}

export default useGetUser;
