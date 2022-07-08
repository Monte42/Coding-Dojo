def cipher(text, is_encoded = False, offset = 3):
    SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ.?!,;:()[] '
    ciphered = ""
    if is_encoded:
        offset = -offset
    for character in text:
        num = SYMBOLS.find(character.upper())
        if num + offset >= len(SYMBOLS):
            num - num + offset - len(SYMBOLS)
            ciphered += SYMBOLS[num]
        else:
            num += offset
            ciphered += SYMBOLS[num]
    return ciphered

print(cipher("jdu?", True))

def create_dict( name , age = 28, money = 1000 ):
    return {
        'name' : name,
        'age' : age,
        'money' : money,
    }

print(create_dict(age = 35, money = 500, name = "Gary"))

