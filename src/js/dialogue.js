/*

Does That Answer Your Question?
Copyright Decky Coss 2018

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License as published by the Free
Software Foundation, either version 3 of the License, or (at your option) any
later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU Affero General Public License for more details. 

You should have received a copy of the GNU Affero General Public License along
with this program. If not, see <https://www.gnu.org/licenses/>.

*/

DIALOGUE = [

{
    id: "no_problem_with_transwomen",
    start: true,
    prompt: "I don't have a problem with you being a transwoman. I just don't like trans activists. Trans activism is ruining female-only spaces. You know what I mean?",
    choices: [
        {label: "How?", link: {
            id: "males_in_female_spaces",
            prompt: "Well, it's all about allowing people who are biologically male into spaces meant for females. I don't think that's right.",
            choices: [
                {label: "Ah.", link: {
                    prompt: "Because like, I get that transwomen are mistreated. And they deserve safe spaces from that. But that shouldn't mean intruding on safe spaces for people born female.",
                    choices: [
                        {label: "Right.", link: {
                            id: "some_things_in_common",
                            prompt: "I think transwomen do have some things in common with female people. But females who've been traumatized by people born male won't be truly safe without female-only spaces.",
                            choices: [
                                {label: "Yeah, I guess you're right.", link: {
                                    id: "no_offense",
                                    prompt: "And that's no offense to you! I don't think you're an abuser. But you have been socialized as male. Those of us who haven't been, go through unique struggles. We just can't address those struggles in a mixed space, you know?",
                                    choices: [
                                        {label: "It's OK! That totally makes sense.", link: "one_of_the_good_ones"},
                                        {label: "I'm going to dance on your grave.", link: "dance"},
                                    ]
                                }},
                                {label: "I mean...", link: "no_offense"},
                            ],
                        }},
                        {label: "Well...", link: "some_things_in_common"},
                    ],
                }},
                {label: "Trans women are female.", link: {
                    prompt: "Look, you can identify how you want, but that doesn't make it OK to force girls to share the same bathroom as people born male. No offense.",
                    choices: [
                        {label: "But it's OK to force trans girls to share a bathroom with cis men?", link: "trans_children"},
                        {label: "We have more to fear from you than you do from us.", link: "male_socialization"},
                    ],
                }},
            ],
        }},
        {label: "I don't care.", link: "reasonable_discussion"},
    ]
},
{
    id: "reasonable_discussion",
    prompt: "What, you can't have a reasonable discussion about this stuff? Alright then.",
    choices: [
        {label: "Sorry, my bad. What were you saying?", link:"males_in_female_spaces"},
        {label: "Fuck you.", link: "aggressive"},
    ]
},
{
    id: "aggressive",
    prompt: "Woah! Why are you people always so aggressive? You're really not doing the trans movement any favours.",
    choices: [
        {label: "...", link: "youre_too_mean"},
        {label: "Fuck you.", link: "youre_really_too_mean"},
    ]
},
{
    id: "trans_children",
    prompt: "There are no \"trans girls\". That's another thing. If you want to identify as transgender, fine, but foisting that stuff onto kids? You really think that's OK?",
    choices: [
        {label: "Yeah.", link:{
            prompt: "Seriously? You actually want to force little kids to call themselves trans?",
            choices: [
                {label: "That's not what I said...", link: {
                    id: "thats_what_it_sounded_like",
                    prompt: "Well, that's what it sounded like to me. You're really not going to do any favours for the trans movement if you talk like that, you know.",
                    choices: [
                        {label: "I don't think you're being fair.", link: {
                            prompt: "How? All I did was ask you a question. Is it so hard to answer?",
                            choices: [
                                {label: "It's a loaded question. We're not forcing kids into anything. We're helping them accept who they are.", link: "informed_choice"},
                            ]
                        }},
                        {label: "Why are you doing this?", link: {
                            id: "trying_to_have_conversation",
                            prompt: "I'm just trying to have a conversation. If you're not capable of having one like an adult, that's your loss I guess.",
                            choices: [
                                {label: "...", link: "well_whatever"},
                                {label: "I think you should leave me alone.", link: "fine_bye"},
                            ]
                        }},
                    ]
                }},
                {label: "Sure. Whatever.", link: {
                    id: "refreshing",
                    prompt: "Well, it's refreshing to hear your honesty at least.",
                    choices: [
                        {label: "Cool.", link: {
                            id: "predatory",
                            prompt: "Like, most trans people I've met are more in denial about how predatory trans activism is. Consider me creeped out.",
                            choices: [
                                {label: "Why are you even talking to me?", link: "trying_to_have_conversation"},
                                {label: "...", link: "youre_too_mean"},
                            ]
                        }},
                        {label: "...", link: "predatory"},
                    ]
                }},
            ]
        }},
        {label: "It's not foisting!", link: {
            id: "calm_down",
            prompt: "Calm down, alright? I'm just asking a question.",
            choices: [
                {label: "Sorry.", link: {
                    prompt: "Anyway. How about it? Do you think we should be making young children call themselves transgender when they don't know any better?",
                    choices: [
                        {label: "You know I didn't say that.", link: "thats_what_it_sounded_like"},
                        {label: "You caught me. I'm secretly building trans re-education camps for every child.", link: {
                            prompt: "Really?",
                            choices: [
                                {label: "Your kid's next.", link: "refreshing"},
                                {label: "No, you humongous shit stain.", link: "aggressive_wtf"},
                            ]
                        }}
                    ]
                }},
                {label: "Fuck you!", link: "aggressive_wtf"},
            ]
        }},
    ]
},
{
    id: "informed_choice",
    prompt: "Maybe you've let yourself believe that. But children aren't capable of making an informed choice to identify as trans. To expose them to this stuff, I think that's child abuse.",
    choices: [
        {label: "It's not a choice. And I'm not the one abusing them.", link: {
            prompt: "OK, you didn't choose to *feel* like you're not male, but you did choose to deny your maleness instead of treating your gender crisis as a mental illness. Kids should be spared from that.",
            choices: [
                {label: "Mental illness? You think being trans should be cured?", link: {
                    id: "ideal_world",
                    prompt: "I think in an ideal world no one would have to be trans. I think it'd be healthier for transwomen to address their male socialization and what's compelling them to deny it.",
                    choices: [
                        {label: "...", link: {
                            prompt: "No retort to that, huh? You see that I'm right, don't you?",
                            choices: [
                                {label: "...", link: "well_whatever"},
                                {label: "Please don't.", link: "trying_to_have_conversation"},
                            ]
                        }},
                        {label: "I think we should end this conversation.", link: {
                            prompt: "What, did I hit a nerve? You asked and I answered. I thought I was allowed to be honest with you. Was I wrong?",
                            choices: [
                                {label: "I just don't think this discussion is productive, OK?", link: "fine_bye"},
                                {label: "Oh my god yes you were wrong please shut up.", link: "aggressive"},
                            ]
                        }},
                    ]
                }},
                {label: "Like you chose to be an asshole?", link: "aggressive"},
            ]
        }},
        {label: "Oh, come on.", link: {
            prompt: "I'm being serious. If you don't agree with me, prove me wrong. Or do you just not take child abuse seriously?",
            choices: [
                {label: "Studies show that trans kids are far happier when they can transition.", link: {
                    prompt: "Please. All due respect, you're being naive. Parents can make their kids say whatever they want and the liberal media will eat it up, as long as it fits the trans agenda. I've known plenty of kids hurt by transition.",
                    choices: [
                        {label: "Maybe we should end this conversation...", link: {
                            prompt: "What, you can't handle me criticizing the trans activist agenda? I thought I was allowed to be honest with you. Was I wrong?",
                            choices: [
                                {label: "I just don't think this discussion is productive, OK?", link: "fine_bye"},
                                {label: "Oh my god yes you were wrong please shut up.", link: "aggressive"},
                            ]
                        }},
                        {label: "No you haven't.", link: {
                            prompt: "Yes I have! You're saying I'm a liar? Can't we just have a good faith discussion without the ad hominem?",
                            choices: [
                                {label: "Yes, I am.", link: "fine_bye"},
                                {label: "No, we can't.", link: "fine_bye"},
                            ]
                        }},
                    ]
                }}
            ]
        }}
    ],
},
{
    id: "fine_bye",
    prompt: "Fine. I hate to say this, but trans people are just impossible to have a conversation with most of the time. I guess I thought you'd be different.",
    end: true,
    choices: [
        {label: "...", link: ""},
        {label: "...", link: ""},
    ]
},
{
    id: "aggressive_wtf",
    prompt: "Woah, what the fuck, dude? Why are you people always so aggressive?",
    choices: [
        {label: "...", link: "youre_too_mean"},
        {label: "Fuck. You.", link: "youre_really_too_mean"},
    ]
},
{
    id: "youre_too_mean",
    prompt: "Whatever. I'm done with this. Good luck finding any allies.",
    end: true,
    maybe_trigger: "fucking_trannies",
    choices: [
        {label: "...", link: ""},
        {label: "...", link: ""},
    ]
},
{
    id: "youre_really_too_mean",
    prompt: "You know what? I'm done with this. Good luck finding any allies.",
    end: true,
    maybe_trigger: "fucking_trannies",
    choices: [
        {label: "...", link: ""},
        {label: "...", link: ""},
    ]
},
{
    id: "one_of_the_good_ones",
    prompt: "See, this was good. Again, no offense, but most trans people I've met just aren't capable of having a reasonable conversation. It's a nice change to meet someone who identifies as trans and isn't like that.",
    choices: [
        {label: "Thanks?", link: "satisfied"},
        {label: "...", link: "satisfied"},
    ],
},
{
    id: "satisfied",
    prompt: "Well, that's all I had to say. See you later.",
    end: true,
    choices: [
        {label: "Sure.", link: ""},
        {label: "...", link: ""},
    ]
},
{
    id: "bored",
    prompt: "Well, that's all I had to say. Thanks for listening I guess.",
    end: true,
    choices: [
        {label: "...", link: ""},
        {label: "...", link: ""},
    ]
},
{
    id: "well_whatever",
    prompt: "Well, whatever. If you're not going to say anything then I'll see you later I guess.",
    end: true,
    choices: [
        {label: "...", link: ""},
        {label: "...", link: ""},
    ]
},
{
    id: "dance",
    prompt: "What?",
    choices: [
        {label: "Sorry, nothing. What were you saying?", link: {
            prompt: "Um. I'm gonna go now.",
            end: true,
            choices: [
                {label: "...", link: ""},
                {label: "...", link: ""},
            ]
        }},
        {label: "Gonna invite my friends and have a freestyle dance battle all over that shit.", link: {
            prompt: "...Well. So much for you being one of the good ones I guess.",
            end: true,
            choices: [
                {label: "Thanks for the chat!", link: ""},
                {label: "...", link: ""},
            ]
        }},
    ]
},
{
    id: "male_socialization",
    prompt: "How? I get that transwomen are mistreated. But that doesn't compare to the abuse that females receive from people born male. Even if you're transgender, you have the privilege that comes with male socialization.",
    choices: [
        {label: "I wasn't socialized male, I was forced into the closet.", link:{
            prompt: "You're splitting hairs. I'm sure you were wronged growing up, but can you imagine how much worse it would have been if you were female?",
            choices: [
                {label: "I was female.", link:{
                    id: "call_yourself_a_transwoman",
                    prompt: "You can call yourself a transwoman, but that doesn't make you biologically female. At least your problems with gender could have been resolved if they'd been properly treated as a mental illness.",
                    choices: [
                        {label: "Mental illness? You think being trans should be cured?", link: "ideal_world"},
                        {label: "Excuse me?", link: {
                            prompt: "What, did I hit a nerve? I'm responding to your argument. I thought I was allowed to be honest with you. Was I wrong?",
                            choices: [
                                {label: "...", link: "well_whatever"},
                                {label: "I think you've said enough.", link: "fine_bye"},
                            ]
                        }},
                    ]
                }},
                {label: "I wish I didn't have to.", link: "call_yourself_a_transwoman"},
            ]
        }},
        {label: "I see right through you.", link: {
            prompt: "What does that mean?",
            choices: [
                {label: "You're insulting me to see if I'll be a doormat for you. If I push back, you can use me as proof that trans women are just abusive men.", link: {
                    prompt: "Sounds like you're projecting to me. But if you really get accused of aggressive behaviour so often that you've come to expect it, maybe people are onto something?",
                    choices: [
                        {label: "Because I defend trans women?", link: {
                            prompt: "Well, maybe if trans people could calm down, be open to different opinions, and stop forcing their views down everyone else's throats, you'd have more allies and suffer less mistreatment.",
                            choices: [
                                {label: "How's that strategy working out for cis women?", link: "dont_call_me_cis"},
                                {label: "Oh, shut up.", link: "just_another_activist"},
                            ]
                        }},
                        {label: "Maybe. You trying to find out?", link: {
                            prompt: "Are you threatening me?",
                            choices: [
                                {label: "Only if you keep bothering me.", link:{
                                    id: "bubble",
                                    prompt: "The hell did I do? Did I touch a nerve or something? Is it so hard to listen to people outside of your trans-activist bubble?",
                                    choices: [
                                        {label: "...", link: "fine_nicely"},
                                        {label: "Leave me alone. Last chance.", link: "fine_jesus"},
                                    ]
                                }},
                                {label: "Yeah, sorry.", link: "bubble"},
                            ]
                        }}
                    ]
                }}
            ]
        }},
    ]
},
{
    id: "dont_call_me_cis",
    prompt: "Are you calling me cis? Don't call me that. It's basically a slur at this point.",
    choices: [
        {label: "It really isn't...", link: "youre_too_mean"},
        {label: "...", link: "youre_too_mean"},
    ]
},
{
    id: "fine_nicely",
    prompt: "Fine, OK. My bad for trying to explain my views nicely.",
    end: true,
    maybe_trigger: "fucking_trannies",
    choices: [
        {label: "...", link: ""},
        {label: "...", link: ""},
    ]
},
{
    id: "fine_jesus",
    prompt: "Fine, I'm going. Jesus. You people are crazy!",
    end: true,
    choices: [
        {label: "...", link: ""},
        {label: "...", link: ""},
    ]
},
{
    id: "just_another_activist",
    prompt: "Fine. I can see this isn't going anywhere. You're just another trans activist I guess.",
    end: true,
    choices: [
        {label: "...", link: ""},
        {label: "...", link: ""},
    ]
},
{
    id: "fucking_trannies",
    prompt: "Fucking trannies.",
    choices: [
        {label: "...", link: ""},
        {label: "...", link: ""},
    ]
},
];
