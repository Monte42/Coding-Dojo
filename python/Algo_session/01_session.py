from email.policy import default


txt = "one Two three two Three four five one six Four the and that good boy that the"

def create_dict_from_string(txt):
    dict = {}
    for each in txt.split():
        # dict[each] += 1 if each in dict else dict[each] = 1
        each = each.lower()
        if each in dict:
            dict[each] += 1
        else:
            dict[each] = 1
    return dict

print(create_dict_from_string(txt))







# x = create_dict_from_string(txt)
# print(x.get('nine', 1))
# print(x)


# x = 11

# print('yes') if x == 1 else print('no')