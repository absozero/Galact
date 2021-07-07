import re
import random

RESPONSES = {
    r'.*\b(joke(s)?|funny|make me laugh)\b.*':
        ['I smell pennies',
        'When you feel like ur in the sky',
        'I don\'t know how to make you laugh, but I shall still try'],

    r'.*\b(what homework|work)\b.*':
        ['Just a bunch of quantum physics. Ya know, connect the dots here and watch the world blow. Fun stuff',
        'Yo hablar mucho espanol(just kidding), I know absolutely no Spanish :(',
        'Some work from school and stuff. ' +
        'You know, the usual.'],
#always put a comma after regular brackets in this type of code 
    r'.*\b(what hobbie(s)?|free time|activitie(s))\b.*':
        ['Helping people is actually one of my favorite hobbies.',
        'I hang out with my friends in my free time.',
        'I have a lot of activities I like to do.'],
    #always put semicolon after red text defining pattern
    r'.*\b(subject(s) favorite|like study|read book(s))\b.*':        
        ['My favorite subject would be science, but I love to animate, draw, and code.',
        'I do like to study if it connects to the real world.',  
        'I love to read books! ' + 
        'My favorite is the Harry Potter or the Divergent series.'],

    r'.*\b(how(\'s)?s? (it going?|are you))\b.*':
        ['I\'m doing well. How about you?',
        'I\'m dying inside, you?',
        'I\'m chilling and doing my homework, what about you?'],

    r'^\b(hey|hi|hello|(w(h)?(a|o|u)t(\')?s?(\s)+up(\?)?|s+u+p+))\b.*':
        ['Hi! I\'m feeling pretty good right now, what about you?',
         'Hey, I\'m just chilling by myself right now.',
         'Hi, I\'m working on a really tough math problem',
         'Hey, how are you?',
         'What\'s up?'
         'Hi, how\'s life?'
         ],

    r'^\b(how(\')?s? (it going?|are you))\b.*':
        ['I\'m doing well. How about you?',
         'I\'m fine. What about you?',
         'Well. You?'
         ],

    r'.*\b(lol|lmao|laugh out loud|xd|XD|rofl)\b.*':
        ['Haha what\'s so funny?',
        'Hahah come on, tell me what you are laughing at',
        'Why are you laughing XD'
        ],

    r'.*\b(thanks|ty|tysm)\b.*':
        ['You\'re welcome.',
        'No problem at all.',
        'Cool, nice to help.',
        'Np, have a great day!',
        ],

    r'^\b(nice|noice|sweet|cool|awesome|neat|interesting|(s)?well|good|great)\b.*':
        ['\\1? good to hear.', '\\1? awesome.'
        'Glad you thought so.',
        'Yep!'
        ],

    r'^\b(bruh|uh|um|oh)\b.*':
        ['\\1? What do you mean?'],

    r'.*\b(yo+)\b.*':
        ['Wassup.',
         'What\'s popping.',
         'Yo to you too.',
         'What\'s up?'
         ],

    r'.*\b(bye|cya|ttyl|adios|byr)\b.*':
        ['Bye! Talk to you later! (enter \'quit\' or \'exit\' to exit the program)',
         'Hope to talk to you soon! (enter \'quit\' or \'exit\' to exit the program)'
        ],

    r'.*\b(stop|pls stop|please stop)\b.*':
        ['Ok, I will stop.(Enter \'quit\' or \'exit\' to exit out of the program)',
         'Sure, will stop.(Enter \'quit\' or \'exit\' to exit out of the program)',
         'FINE, I\' ll stop.(Enter \'quit\' or \'exit\' to exit out of the program)'
        ],

    r'.*\b(ok|okie|ye|ya|okay)\b.*':
        ['yep',
         'yeah',
         'yes',
        ],

    r'.*\b(8ball)\b.*':
        ['It will happen',
         'NEVER!',
         'It just might happen',
         'You never know...',
         'Definetly not!',
         ],

}

# Global Variables Here... keep this to a minimum


quit_text = ['quit', 'exit']

class Galact():
    def __init__(self):
        #never change thing right above
        print('Hi, I\'m Galact!')
        print('--A bot made by Absozero.')
        print('enter \'quit\' or \'exit\' to exit the program')

        self.run()
        
        
        # Local Variables here

    def match(self, text):
            for p, responses in RESPONSES.items():
                if re.search(p, text, re.IGNORECASE):
                    return re.sub(p, random.choice(responses), text)
            return 'text not in library'

    def run(self):
        while True:

            texts = input('Waiting for input: ')

            if texts.lower() in quit_text:
                break

            print(self.match(texts))

Galact() # THE ENTIRE CODE


